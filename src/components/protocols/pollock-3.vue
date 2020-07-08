<script>
export default {
  name: 'Pollock 3',
  data: () => {
    return {
      size1: 0,
      size2: 0,
      size3: 0,
    };
  },
  computed: {
    sumOfSites() {
      return Number(this.size1) + Number(this.size2) + Number(this.size3);
    },
  },
  methods: {
    handleSubmit() {
      console.log('Submitted Pollock 3 form!', this.sumOfSites);
      this.$emit('protocol', this.sumOfSites);
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<template>
  <div class="form-container">
    <div class="g grid-100 grid-m-100">
      <h3>Protocol: Pollock 3 sites</h3>
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

    <div class="g grid-33 grid-m-100">
      <button class="btn-primary" @click="handleSubmit">Submit</button>
    </div>
  </div>
</template>
