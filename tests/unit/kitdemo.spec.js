import { shallowMount } from "@vue/test-utils";
import KitDemo from "../../packages/demo/index";

describe("KitDemo.vue", () => {
  // 测试input事件是否被触发
  it("render data when input change", () => {
    const msg = "Hello World";
    const wrapper = shallowMount(KitDemo);
    const input = wrapper.find("input");
    input.element.value = msg;
    input.trigger("input");
    expect(wrapper.find("input").emitted().change[0]).toEqual(["Hello World"]);
  });
});
