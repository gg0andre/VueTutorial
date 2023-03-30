<template>
  <section>
    <form @submit.prevent="SubmitData">
      <input type="text" placeholder="Your name" v-model="enteredName" />
      <input type="text" placeholder="Your age" v-model="enteredAge" />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["set-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    SubmitData() {
      this.$emit("set-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>
