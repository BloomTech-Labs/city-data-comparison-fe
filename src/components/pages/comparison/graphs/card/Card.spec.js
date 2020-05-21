import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Card from "./GraphCard.js";

describe("Card.js card component", () => {
  it("displays the content you wrap it in", () => {
    render(
      <Card>
        <div>
          <p>Content is expected here.</p>
        </div>
      </Card>
    );
    expect(screen.getByText("Content is expected here."));
  });
  it("displays a modal if you pass in modalContent prop and click the more info button", () => {
    render(
      <Card
        modalContent={
          <div>
            <p>Modal content is expected here.</p>
          </div>
        }
      >
        <div>
          <p>Content.</p>
        </div>
      </Card>
    );
    fireEvent.click(screen.getByRole("img"));
    expect(screen.getByText("Modal content is expected here."));
  });
});
