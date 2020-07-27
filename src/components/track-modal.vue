<script>
export default {
  components: {
    Weight: () => import(/* webpackChunkName: "Weight" */ './protocols/weight'),
    IMC: () => import(/* webpackChunkName: "Imc" */ './protocols/imc'),
    Pushup: () => import(/* webpackChunkName: "Pushup" */ './protocols/pushup'),
    Pollock3: () => import(/* webpackChunkName: "Pollock3" */ './protocols/pollock-3'),
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      payload: null,
    };
  },
  methods: {
    updatePayload(val) {
      this.payload = val;
    },
  },
};
</script>

<template>
  <div class="modal" @click="$emit('close')">
    <div class="content" @click.stop>
      <keep-alive>
        <component :is="card.cardType" @update="updatePayload"></component>
      </keep-alive>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, placeat, unde! Architecto
      laboriosam ducimus atque cum dolore doloribus obcaecati vero. Minus porro sapiente unde fuga
      incidunt quidem necessitatibus mollitia libero?
    </div>
    <button @click="$emit('close')">Cancel</button>
    <button @click="$emit('save', payload)">Save</button>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 20px);
  max-width: 500px;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 3px;
  padding: 20px;
  line-height: 1.5;
  font-size: 18px;
  color: #444;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
