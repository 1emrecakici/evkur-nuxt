<template>
  <div class="col-2 background-form-left">
    <div class="form-title">Üye Girişi</div>
    <div @submit="login" class="form-item">
      <label> E-posta </label>
      <input
        class="validate-item email valid"
        data-error="Lütfen geçerli bir e-posta adresi giriniz."
        id="Email"
        name="Email"
        type="text"
        value=""
        aria-invalid="false"
        v-model="form.email"
      />
    </div>
    <div class="form-item">
      <label> Şifre </label>
      <input
        class="validate-item valid"
        :type="showPassword ? 'text' : 'password'"
        data-error="Bu alan zorunludur."
        id="Password"
        name="Password"
        aria-invalid="false"
        v-model="form.password"
      />
      <i
        @click="showPassword = !showPassword"
        :class="showPassword ? 'i-eye-close' : 'i-eye-open'"
      ></i>
    </div>
    <div class="form-item">
      <div class="form-mini-checkbox">
        <input
          data-val="true"
          data-val-required="RememberMe alanı gereklidir."
          id="remember-me"
          name="RememberMe"
          type="checkbox"
          value="true"
        /><input name="RememberMe" type="hidden" value="false" />

        <label for="remember-me">Beni Hatırla</label>
      </div>
      <a href="/sifremi-unuttum" class="forget-password-link">
        Yeni Şifre Al / Şifremi Unuttum
      </a>
    </div>
    <div class="form-item form-item-button form-item-button-full-width">
      <a href="javascript:void(0)" class="button red submit-button" @click="login">
        <span> GİRİŞ YAP </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      form: {
        email: "",
        password: "",
      },
      showPassword: false,
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      this.$store.dispatch("account/loginWithEmailAndPassword", {
        email: this.form.email,
        password: this.form.password,
      });
    },
  },
};
</script>