import React from "react";
import SearchBar from "./SearchBar";
import { shallow } from "enzyme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

describe("SearchBar tests", () => {
  let component;
  let mockFn;
  let setIsOpen;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<SearchBar setSearchText={mockFn} setIsOpen={false} />);
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

  it("should call the parent function with 'User Input'", () => {
    component.find("span.fa").simulate("click");
    component
      .find("input")
      .simulate("input", { target: { value: "User input" } });
    expect(mockFn).toHaveBeenCalledWith("User input");
  });
});

//Test the searchbar open and close functionality. When we click the icon,
//the searchbar should appear or disappear.

it("should not be open by default", () => {
  const element = component.find(".fa");
  expect(element.is("setIsOpen")).toBe(false);
});

it("should toggle faceDown class when component is clicked", () => {
  expect(component.find(".fa").hasClass("input")).toBe(false);

  component.find(".fa").simulate("click");
  expect(component.find(".fa").hasClass("input")).toBe(true);

  component.find(".fa").simulate("click");
  expect(component.find(".fa").hasClass("input")).toBe(false);
});
