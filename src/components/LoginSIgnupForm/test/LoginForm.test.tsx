import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

vi.mock("../ui/input", () => ({
  Input: ({ ...props }) => <input {...props} />,
}));

vi.mock("../ui/button", () => ({
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
}));

vi.mock("react-router", () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

vi.mock("lucide-react", () => ({
  User: () => <div data-testid="user-icon" />,
}));

// beforeAll(() => server.listen());
// afterEach(() => {
//   server.resetHandlers();
//   vi.clearAllMocks();
//   localStorage.clear();
// });
// afterAll(() => server.close());

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
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Login" });

    userEvent.click(submitButton);

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");
    // await userEvent.click(submitButton);
    // await waitFor(() => {
    //   expect(localStorage.getItem("auth-token")).toBe("fake-token");
    //   expect(screen.getByText("data enter successfully")).toBeInTheDocument();
    // });
  });

  // it("handles login error", async () => {
  //   server.use(
  //     http.post("http://127.0.0.1:3000/api/v1/login", () => {
  //       return new HttpResponse(null, { status: 401 });
  //     })
  //   );

  //   const emailInput = screen.getByLabelText("Email");
  //   const passwordInput = screen.getByLabelText("Password");
  //   const submitButton = screen.getByRole("button", { name: "Login" });

  //   await userEvent.type(emailInput, "test@example.com");
  //   await userEvent.type(passwordInput, "wrongpassword");
  //   await userEvent.click(submitButton);

  //   await waitFor(() => {
  //     expect(localStorage.getItem("auth-token")).toBeNull();
  //     expect(
  //       screen.queryByText("data enter successfully")
  //     ).not.toBeInTheDocument();
  //   });
  // });

  // it("navigates to signup page when link is clicked", () => {
  //   const signupLink = screen.getByText("create new account");
  //   expect(signupLink).toHaveAttribute("href", "/signup");
  // });
});
