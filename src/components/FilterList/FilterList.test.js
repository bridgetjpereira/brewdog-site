import React from "react";
import FilterList from "./FilterList";
import filters from "../../data/filters";
import { shallow } from "enzyme";

describe("FilterList tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<FilterList filters={filters}/>);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
