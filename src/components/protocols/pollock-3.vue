<script>
export default {
  name: "Pollock 3",
  methods: {
    handleSubmit() {
      alert("Submitted Pollock 3 form!");
    }
  }
};
</script>

<template>
  <form>
    <label for="size1">Size 1</label>
    <input type="number" name="size1" />

    <label for="size2">Size 2</label>
    <input type="number" name="size2" />

    <label for="size3">Size 3</label>
    <input type="number" name="size3" />

    <button @click="handleSubmit">Submit</button>
  </form>
</template>
