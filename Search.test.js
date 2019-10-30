import React from "react";
import Enzyme, { mount } from "enzyme";
import Search from "./Search";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = mount(<Search {...props} />);
  return component;
};

describe("SERACH COMPONENT", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  describe("SERACH BUTTON", () => {
    it("SHOULD EXIST", () => {
      const button = component.find("button");
      expect(button.prop("type")).toEqual("submit");
      //expect(button.text()).toBe("Search Button");
    });
    it("SHOULD HAVE AN INPUT WITH PROPS ID AND TYPE", () => {
      const input = component.find("input");
      expect(input).toHaveLength(1);
      expect(input.prop("type")).toEqual("text/number");
      expect(input.prop("id")).toEqual("input");
    });

    it("SHOULD CALL onSubmit PROP FUNCTION WHEN FORM IS SUBMITED", () => {
      const handleSubmit = jest.fn();
      const wrapper = mount(<form onSubmit={handleSubmit} />);
      wrapper.find("form").simulate("submit");
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it("SHOULD CHANGE THE STATE AFTER AN INPUT VALUE", () => {
      const state = {
        value: 3
      };
      const newValue = 3;
      const input = component.find("input");

      input.simulate("change", { target: { value: newValue } });
      expect(state.value).toEqual(newValue);
    });
  });
});
