<script>
export default {
  name: "Pollock 3",
  data: () => {
    return {
      size1: 0,
      size2: 0,
      size3: 0
    }
  },
  computed: {
    sumOfSites() {
      return Number(this.size1) + Number(this.size2) + Number(this.size3);
    }
  },
  methods: {
    handleSubmit() {
      console.log("Submitted Pollock 3 form!", this.sumOfSites);
      this.$emit("protocol", this.sumOfSites);
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<template>
  <form>
    <label for="size1">Size 1</label>
    <input type="number" name="size1" v-model="size1" />

    <label for="size2">Size 2</label>
    <input type="number" name="size2" v-model="size2" />

    <label for="size3">Size 3</label>
    <input type="number" name="size3" v-model="size3" />

    <button @click="handleSubmit">Submit</button>
  </form>
</template>
