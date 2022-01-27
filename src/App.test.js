import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { shallow } from "enzyme";

describe("App tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
