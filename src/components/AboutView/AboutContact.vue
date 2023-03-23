<template>
  <!-- some code condensed for display reasons -->
  <FormulateForm v-model="values" @submit="handleLogin">
    <h2>Login</h2>
    <FormulateInput
      type="text"
      name="email"
      label="Email address"
      validation="required|email"
    />
    <FormulateInput type="text" name="Name" label="Name" validation="required" />
    <FormulateInput
      name="terms"
      type="checkbox"
      label="I accept, just don't make me read the terms."
      validation="accepted"
    />
    <FormulateInput type="submit" label="submit" />
    <pre>{{ values }}</pre>
  </FormulateForm>
</template>

<script>
export default {
  name: "AboutContact",

  components: {},

  data() {
    return {
      values: {},
    };
  },

  methods: {
    submitHandler() {
      alert(`Thank you for your order!`);
    },
  },
};
</script>
