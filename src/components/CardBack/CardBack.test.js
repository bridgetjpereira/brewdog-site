import React from "react";
import CardBack from "./CardBack";
import { shallow } from "enzyme";
import beers from "../../data/beers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

describe("CardBack tests", () => {
  let component;
//   let mockFn;

  beforeEach(() => {
    // mockFn = jest.fn();
    component = shallow(<CardBack beer={beers[0]}/>);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
