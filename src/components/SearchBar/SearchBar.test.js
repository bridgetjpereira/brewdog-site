import React from "react";
import SearchBar from "./SearchBar";
import { shallow } from "enzyme";

describe("SearchBar tests", () => {
  let component;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<SearchBar setSearchText={mockFn} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should call the parent function on input", () => {
    component.find("span.fa").simulate("click");
    component
      .find("input")
      .simulate("input", { target: { value: "User input" } });
    expect(mockFn).toHaveBeenCalled();
  });
});
