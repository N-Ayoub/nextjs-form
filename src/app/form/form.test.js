import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Form from "./page"; // Adjust the path if necessary
import "@testing-library/jest-dom";

describe("Form Component", () => {
  test("renders the form component", () => {
    render(<Form />);

    // Check if the form is rendered
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
  });

  test("renders input fields", () => {
    render(<Form />);

    // Check if input fields are rendered
    const inputElements = screen.getAllByRole("textbox");
    expect(inputElements.length).toBeGreaterThan(0);
  });

  test("renders submit button", () => {
    render(<Form />);

    // Check if the submit button is rendered
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("submits the form with valid data", async () => {
    render(<Form />);

    // Fill out the form
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/Email/i);
    const phone = screen.getByLabelText(/Phone Number/i);
    const comment = screen.getByLabelText(/Comment/i);

    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: "John" } });
      fireEvent.change(lastNameInput, { target: { value: "Doe" } });
      fireEvent.change(email, { target: { value: "john.doe@example.com" } });
      fireEvent.change(phone, { target: { value: "+1234567890" } });
      fireEvent.change(comment, {
        target: { value: "This is a test comment" },
      });
    });

    // Submit the form
    const buttonElement = screen.getByRole("button", { name: /submit/i });

    await act(async () => {
      fireEvent.click(buttonElement);
    });
  });
});
