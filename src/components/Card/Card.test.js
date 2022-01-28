import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";
import CardFront from "../CardFront";
import CardBack from "../CardBack";
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

  it("should not have faceDown class by default", () => {
    const element = component.find(".beerCard");
    expect(element.hasClass("faceDown")).toBe(false);
  });
});
