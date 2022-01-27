import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";
import beers from "../../data/beers";

describe("Card tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beers[0];
    component = shallow(<Card beer={testBeer} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render the correct name based on the beer passed in as props", () => {
    const beerTitle = testBeer.name;
    expect(component.text()).toContain(beerTitle);
  });
});
