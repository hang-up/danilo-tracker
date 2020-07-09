<script>
export default {
  data() {
    return {
      protocols: [
        { name: 'Pollock 7 sites', value: 'Pollock7' },
        { name: 'Pollock 3 sites', value: 'Pollock3' },
      ],
      selectedProtocol: 'Pollock7',
    };
  },
  methods: {
    handleSubmit() {},
  },
  components: {
    Pollock3: () => import(/* webpackChunkName: "Pollock3" */ '../components/protocols/pollock-3'),
    Pollock7: () => import(/* webpackChunkName: "Pollock7" */ '../components/protocols/pollock-7'),
  },
};
</script>

<template>
  <form @submit="handleSubmit">
    <!-- Dynamically load the right Pollock protocl -->
    <label class="label" for="protocol">Protocol:</label>
    <select class="input" name="protocol" v-model="selectedProtocol">
      <option v-for="protocol in protocols" :key="protocol.value" :value="protocol.value">
        {{ protocol.name }}
      </option>
    </select>

    <keep-alive>
      <component :is="selectedProtocol"></component>
    </keep-alive>
  </form>
</template>
