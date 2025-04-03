import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

const mock = new AxiosMockAdapter(axios);

vi.mock("react-router", () => ({
  Link: ({ children, to }: { children: string; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

vi.mock("lucide-react", () => ({
  User: () => <div data-testid="user-icon" />,
}));

describe("LoginForm", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
  });

  it("renders the form with all elements", () => {
    expect(screen.getByText(/Well Come/i)).toBeInTheDocument();
    expect(screen.getByText(/create new/i)).toBeInTheDocument();
    expect(screen.getByTestId("user-icon")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Well Come Back!" })
    ).toBeInTheDocument();
    expect(screen.getByText("create new account")).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("allows typing in email and password fields", async () => {
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  it("submits the form and handles successful login", async () => {
    mock
      .onPost("http://127.0.0.1:3000/api/v1/login")
      .reply(200, { token: "false-token" });

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Login" });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText("data enter successfully")).toBeInTheDocument();
    });

    expect(localStorage.getItem("auth-token")).toBe("false-token");
  });

  it("submits the form and handles successful login", async () => {
    mock.onPost("http://127.0.0.1:3000/api/v1/login").reply(400);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Login" });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "wrongpassword123");
    fireEvent.change(emailInput, {
      Target: { value: "test@example.com" },
    });
    fireEvent.change(passwordInput, {
      Target: { value: "wrongpassword" },
    });

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(
        screen.queryByText("data enter successfully")
      ).not.toBeInTheDocument();
    });
  });
});
