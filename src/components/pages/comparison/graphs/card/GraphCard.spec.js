import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import GraphCard from "./GraphCard.js";

describe("Card.js card component", () => {
  it("displays the content you wrap it in", () => {
    render(
      <GraphCard>
        <div>
          <p>Content is expected here.</p>
        </div>
      </GraphCard>
    );
    expect(screen.getByText("Content is expected here."));
  });
  it("displays a modal if you pass in modalContent prop and click the more info button", () => {
    render(
      <GraphCard
        modalContent={
          <div>
            <p>Modal content is expected here.</p>
          </div>
        }
      >
        <div>
          <p>Content.</p>
        </div>
      </GraphCard>
    );
    fireEvent.click(screen.getByRole("img"));
    expect(screen.getByText("Modal content is expected here."));
  });
});
