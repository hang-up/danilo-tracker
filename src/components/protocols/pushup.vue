<script>
export default {
  name: 'FormPushup',
  data: () => {
    return {
      measures: {
        date: new Date(),
        pushups: 0,
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
        <h3>Pushup</h3>
      </div>
      <div class="g grid-33 grid-m-25"></div>
      <div class="g grid-25 grid-m-50">
        <label class="label" for="pushups">Pushups</label>
        <input class="input number" type="number" name="pushups" v-model="measures.pushups" />
      </div>
      <div class="g grid-33 grid-m-25"></div>

      <div class="g grid-33 grid-m-25"></div>
      <div class="g grid-25 grid-m-50">
        <label class="label" for="date">Date</label>
        <input class="input number" type="date" name="date" v-model="measures.date" />
      </div>
      <div class="g grid-33 grid-m-25"></div>

      <div class="g grid-33 grid-m-100">
        <button class="btn-primary" @click="handleSubmit">Submit</button>
      </div>
    </div>
  </form>
</template>