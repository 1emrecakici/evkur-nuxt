import { mount } from "@vue/test-utils";

import BottomBar from "../components/BottomBar.vue";

describe("BottomBar.vue", () => {
    let wrapper = mount(BottomBar);
    it("There is BİZİ TAKİP EDİN!", () => {
        expect(wrapper.text()).toContain("BİZİ TAKİP EDİN!");
    });
    it("There is 2018 Evkur © Tüm hakları saklıdır.", () => {
        expect(wrapper.text()).toContain("2018 Evkur © Tüm hakları saklıdır.");
    });
   

});