<script>
export default {
  name: "Pollock 7",
  methods: {
    handleSubmit() {
      console.log("Submitted Pollock 3 form!");
      this.router.push({ name: "home" });
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

    <label for="size4">Size 4</label>
    <input type="number" name="size4" />

    <label for="size5">Size 5</label>
    <input type="number" name="size5" />

    <label for="size6">Size 6</label>
    <input type="number" name="size6" />

    <label for="size7">Size 7</label>
    <input type="number" name="size7" />


    <button @click="handleSubmit">Submit</button>
  </form>
</template>
