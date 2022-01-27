import React from "react";
import FilterItem from "./FilterItem";
import { shallow } from "enzyme";
import filters from "../../data/filters";
import beers from "../../data/beers";

describe("FilterItem tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<FilterItem filter={filters} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
