import { mount } from "@vue/test-utils";

import Login from "../components/auth/Login.vue";

describe("Login.vue", () => {
    let wrapper = mount(Login);
    it("There is a Üye Ol", () => {
        expect(wrapper.text()).toContain("Üye Girişi");
    });
    it("There is a Beni Hatırla", () => {
        expect(wrapper.text()).toContain("Beni Hatırla");
    });
   

});