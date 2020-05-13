import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Select from "./Select.js";

describe("select component", () => {
  it("renders select and option elements from array of options", () => {
    render(<Select options={["Eggs", "Milk", "Bread"]} />);
    expect(screen.getByText("Eggs")).toBeInTheDocument();
    expect(screen.getByText("Milk")).toBeInTheDocument();
    expect(screen.getByText("Bread")).toBeInTheDocument();
  });
  it("runs onchange function when changed", () => {
    const mockOnChange = jest.fn();
    render(
      <Select options={["Eggs", "Milk", "Bread"]} onChange={mockOnChange} />
    );
    fireEvent.change(screen.getByTestId("select"), {
      target: { value: "Milk" },
    });
    expect(mockOnChange.mock.calls.length).toBe(1);
  });
  it("value passed into props");
});
