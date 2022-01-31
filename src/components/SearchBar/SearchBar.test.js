import React from "react";
import SearchBar from "./SearchBar";
import { shallow } from "enzyme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

describe("SearchBar tests", () => {
  let component;
  let mockFn;
  let testPlaceholder = "Test placeholder";
  let input;
  let testSearchtext = "Test searchtext";

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(
      <SearchBar
        placeholder={testPlaceholder}
        setSearchText={mockFn}
        searchText={testSearchtext}
      />
    );
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render the correct placeholder", () => {
    component.find("span.fa").simulate("click");
    expect(component.find("input").prop("placeholder")).toBe(testPlaceholder);
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

  it("should not show the input field by default", () => {
    expect(component.find("input").length).toBe(0);
  });

  it("should toggle input rendering when FA icon is clicked", () => {
    expect(component.find("input").length).toBe(0);
    component.find("span.fa").simulate("click");
    expect(component.find("input").length).toBe(1);
    component.find("span.fa").simulate("click");
    expect(component.find("input").length).toBe(0);
  });
});

// const element = component.find(".beerCard");
//     expect(element.hasClass("faceDown")).toBe(false);
