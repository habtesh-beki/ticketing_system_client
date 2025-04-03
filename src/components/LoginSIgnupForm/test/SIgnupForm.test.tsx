import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import SignupForm from "../SignupForm";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import AxiosMockAdabter from "axios-mock-adapter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

type Inputs = {
  first_name: string;
  last_name: string;
  password: string;
  role: string;
};

const mock = new AxiosMockAdabter(axios);

function TestSelect() {
  const { register, setValue } = useForm<Inputs>();

  return (
    <form action="">
      <Select onValueChange={(value) => setValue("role", value)}>
        <SelectTrigger
          {...register("role", { required: true })}
          className="focus:ring-blue-600 w-full"
        ></SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">admin</SelectItem>
          <SelectItem value="user">user</SelectItem>
        </SelectContent>
      </Select>
    </form>
  );
}
describe("signup", () => {
  it("should render all signup fields", () => {
    render(<SignupForm />, { wrapper: BrowserRouter });

    expect(screen.getByText("Create a new account")).toBeInTheDocument();
    expect(
      screen.getByText("signin to your existing account")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("First name")).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByText(/admin/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should the input field accept value", async () => {
    render(<SignupForm />, { wrapper: BrowserRouter });
    render(<TestSelect />);

    const inputFirstName = screen.getByLabelText("First name");
    const inputLastName = screen.getByLabelText(/last name/i);
    const inputEmail = screen.getByLabelText(/email/i);
    const inputPassword = screen.getByLabelText(/password/i);

    await userEvent.type(inputFirstName, "haile");
    await userEvent.type(inputLastName, "amlaku");
    await userEvent.type(inputEmail, "example@example.com");
    await userEvent.type(inputPassword, "123");

    expect(inputFirstName).toHaveValue("haile");
    expect(inputLastName).toHaveValue("amlaku");
    expect(inputEmail).toHaveValue("example@example.com");
    expect(inputPassword).toHaveValue("123");
  });

  it("should the input field accept value", async () => {
    mock.onPost("http://127.0.0.1:3000/api/v1/signup").reply(200, {
      token: "fake-token",
    });
    render(<SignupForm />, { wrapper: BrowserRouter });

    // const button = screen.getByRole("button");

    // await fireEvent.click(button);
    // expect(localStorage.getItem("auth-token")).toBe("fake-token");
  });
});
