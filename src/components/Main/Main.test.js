import React from "react";
import Main from "./Main";
import { shallow } from "enzyme";
import beers from "../../data/beers";

describe("Main tests", () => {
  let component;

  let searchText = "";

  beforeEach(() => {
    component = shallow(<Main beers={beers} searchText={searchText} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
