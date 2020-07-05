<script>
export default {
  name: "Pollock 7",
  data: () => {
    return {
      measures: {
        size1: 0,
        size2: 0,
        size3: 0,
        size4: 0,
        size5: 0,
        size6: 0,
        size7: 0,
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log("Submitted Pollock 3 form!");
      this.router.push({ name: "home" });
    },
  },
};
</script>

<template>
  <div class="form-container">
    <div class="g grid-100 grid-m-100">
      <h3>Protocol: Pollock 7 sites</h3>
    </div>
    <div class="g grid-33 grid-m-25"></div>
    <div class="g grid-25 grid-m-50">
      <label class="label" for="size1">Size 1</label>
      <input class="input number" type="number" name="size1" v-model="size1" />
    </div>
    <div class="g grid-33 grid-m-25"></div>

    <div class="g grid-33 grid-m-25"></div>
    <div class="g grid-25 grid-m-50">
      <label class="label" for="size2">Size 2</label>
      <input class="input number" type="number" name="size2" v-model="size2" />
    </div>
    <div class="g grid-33 grid-m-25"></div>

    <div class="g grid-33 grid-m-25"></div>
    <div class="g grid-25 grid-m-50">
      <label class="label" for="size3">Size 3</label>
      <input class="input number" type="number" name="size3" v-model="size3" />
    </div>
    <div class="g grid-33 grid-m-25"></div>

    <div class="g grid-33 grid-m-25"></div>
    <div class="g grid-25 grid-m-50">
      <label class="label" for="size4">Size 4</label>
      <input class="input number" type="number" name="size4" v-model="size4" />
    </div>
    <div class="g grid-33 grid-m-25"></div>

    <div class="g grid-33 grid-m-25"></div>
    <div class="g grid-25 grid-m-50">
      <label class="label" for="size5">Size 5</label>
      <input class="input number" type="number" name="size5" v-model="size5" />
    </div>
    <div class="g grid-33 grid-m-25"></div>

    <div class="g grid-33 grid-m-25"></div>
    <div class="g grid-25 grid-m-50">
      <label class="label" for="size6">Size 6</label>
      <input class="input number" type="number" name="size6" v-model="size6" />
    </div>
    <div class="g grid-33 grid-m-25"></div>

    <div class="g grid-33 grid-m-25"></div>
    <div class="g grid-25 grid-m-50">
      <label class="label" for="size7">Size 7</label>
      <input class="input number" type="number" name="size7" v-model="size7" />
    </div>
    <div class="g grid-33 grid-m-25"></div>

    <div class="g grid-33 grid-m-100">
      <button class="btn-primary" @click="handleSubmit">Submit</button>
    </div>
  </div>
</template>
