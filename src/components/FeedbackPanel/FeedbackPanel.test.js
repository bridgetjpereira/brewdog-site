import React from "react";
import FeedbackPanel from "./FeedbackPanel";
import { shallow } from "enzyme";

describe("FeedbackPanel tests", () => {
  let component;
  let testHeader;
  let testText;

  beforeEach(() => {
    testHeader = "No Matches";
    testText = "None of our beers match that search";
    component = shallow(<FeedbackPanel header={testHeader} text={testText} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
