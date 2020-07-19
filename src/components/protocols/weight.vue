<script>
export default {
  name: 'FormWeight',
  data: () => {
    return {
      measures: {
        unit: 'metric',
        weight: 0,
        date: new Date(),
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('update', this.measures)
    },
  },
};
</script>

<template>
  <form @input="handleSubmit">
    <div class="form-container">
      <div class="g grid-100 grid-m-100">
        <h3>Weight</h3>
      </div>
      <div class="g grid-33 grid-m-25"></div>
      <div class="g grid-25 grid-m-50">
        <label class="label" for="unit">Unit</label>
        <input class="input number" type="text" name="unit" v-model="measures.unit" />
      </div>
      <div class="g grid-33 grid-m-25"></div>

      <div class="g grid-33 grid-m-25"></div>
      <div class="g grid-25 grid-m-50">
        <label class="label" for="weight">Weight</label>
        <input class="input number" type="number" name="weight" v-model="measures.weight" />
      </div>
      <div class="g grid-33 grid-m-25"></div>

      <div class="g grid-33 grid-m-25"></div>
      <div class="g grid-25 grid-m-50">
        <label class="label" for="date">Date</label>
        <input class="input number" type="date" name="date" v-model="measures.date" />
      </div>
      <div class="g grid-33 grid-m-25"></div>

      <!-- <div class="g grid-33 grid-m-100">
        <button class="btn-primary" @click="handleSubmit">Submit</button>
      </div> -->
    </div>
  </form>
</template>