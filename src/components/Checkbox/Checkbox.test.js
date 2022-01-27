import React from "react";
import Checkbox from "./Checkbox";
import { shallow } from "enzyme";

describe("Checkbox tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Checkbox />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
