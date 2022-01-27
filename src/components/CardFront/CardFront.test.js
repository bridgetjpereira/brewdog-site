import React from "react";
import CardFront from "./CardFront";
import { shallow } from "enzyme";
import beers from "../../data/beers";

describe("CardFront tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<CardFront beers={beers} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
