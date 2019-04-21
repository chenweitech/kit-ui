import { shallowMount } from "@vue/test-utils";
import KitDemo from "../../packages/demo/index";

describe("KitDemo.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(KitDemo, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
