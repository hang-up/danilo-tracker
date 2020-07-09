<template>
  <form @input="submit">
    <div class="form-container">
      <div class="g grid-100 form-header">
        <h1>Create a new</h1>
        <h1 class="title">measurement</h1>
        <h3 class="sub-title">Pick a client</h3>
      </div>

      <div class="g grid-33 grid-m-100">
        <label class="label" for="name">Name:</label>
        <input class="input" type="text" name="name" v-model="form.searchUserName" />
      </div>
      <div class="g grid-33 grid-m-100">
        <label class="label" for="protocol">Protocol:</label>
        <select class="input" name="protocol" v-model="form.protocol" @change="changeProtocol">
          <option v-for="protocol in form.protocols" :key="protocol.value" :value="protocol.value">
            {{ protocol.name }}
          </option>
        </select>
      </div>
      <div class="g grid-33 grid-m-66">
        <label class="label" for="testdate">Test date:</label>
        <input class="input" type="date" name="testdate" v-model="form.testDate" />
      </div>
      <div class="g grid-33 grid-m-33">
        <label class="label" for="height">Height:</label>
        <input
          class="input"
          type="number"
          name="height"
          :min="form.minHeight"
          v-model="form.height"
        />
      </div>
      <div class="g grid-33 grid-m-50">
        <label class="label" for="weight">Weight:</label>
        <input
          class="input"
          type="number"
          name="weight"
          :min="form.minWeight"
          v-model="form.weight"
        />
      </div>
      <div class="g grid-33 grid-m-50">
        <label class="label" for="desiredweight">Desired weight:</label>
        <input class="input" type="number" name="desiredweight" v-model="form.desiredWeight" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: '',
  data: () => {
    return {
      form: {
        searchUserName: null,
        testDate: null,
        weight: 0,
        desiredWeight: 0,
        height: 0,
        protocol: null,
        protocols: [
          { name: 'Pollock 7 sites', value: 'FormPollock7' },
          { name: 'Pollock 3 sites', value: 'FormPollock3' },
        ],
        minWeight: 35,
        minHeight: 130,
      },
    };
  },
  methods: {
    changeProtocol(val) {
      this.form.protocol = val.target.value;
    },

    submit() {
      console.log(this.form.protocol);
      this.$emit('update', {
        userName: this.form.searchUserName,
        protocol: this.form.protocol,
        testDate: this.form.testDate,
        weight: this.form.weight,
        desiredWeight: this.form.desiredWeight,
        height: this.form.height,
      });
    },
  },
};
</script>
