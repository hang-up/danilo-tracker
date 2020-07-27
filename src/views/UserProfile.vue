<script>
import Modal from '../components/track-modal';
export default {
  components: { Modal },
  data() {
    return {
      user: {
        name: 'Danilo Heraclio',
        dob: '1981-03-24',
        gender: 'male',
        preferedUnit: 'metric',
      },
      showModal: false,
      selectedCard: '',
      payload: null,
      cards: [
        {
          cardType: 'Weight',
          cardUnit: this.formattedWeightUnit,
          cardValue: 0,
          canAdd: true,
        },
        {
          cardType: 'Pushup',
          cardUnit: null,
          cardValue: 0,
          canAdd: true,
        },
        {
          cardType: 'IMC',
          cardValue: 0,
          canAdd: false,
        },
      ],
    };
  },
  computed: {
    formattedWeightUnit() {
      return this.user.preferedUnit === 'metric' ? 'kg' : 'lbs';
    },
  },
  methods: {
    handleOpenModal(card) {
      this.selectedCard = card;
      this.showModal = true;
    },

    onSave(val) {
      this.payload = val;
    },
  },
};
</script>

<template>
  <div class="form-container">
    <div class="g grid-100 form-header">
      <h3 class="sub-title">{{ user.name }}</h3>
      <p>
        DOB:<span>{{ user.dob }}</span>
      </p>
      <p>Age:<span> calculate </span></p>
      <p>
        Gender:<span>{{ user.gender }}</span>
      </p>
    </div>

    <div class="g grid-100 form-header v-spacer-top">
      <h3 class="sub-title">Body tracks</h3>

      <div class="card-grid">
        <div class="card" v-for="card in cards" :key="card.cardType">
          <button
            v-if="card.canAdd"
            class="card-button"
            aria-label="add"
            @click="handleOpenModal(card)"
          >
            +
          </button>
          <p class="card-title">{{ card.cardType }}</p>
          <div class="card-value-box">
            <span @click="$router.push({ path: '/userprofile/tracks' })" class="card-value">{{
              card.cardValue
            }}</span>
            <span v-if="card.cardUnit" class="card-unit">{{ card.cardUnit }}</span>
          </div>
        </div>

        <Modal v-if="showModal" :card="selectedCard" @close="showModal = false" @save="onSave" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.card {
  background: var(--light-grey);
  border-radius: 4px;
  width: calc(50% - 8px);
  margin: 8px 0;
  padding: 8px;
  position: relative;
}

.card:first-child {
  margin-right: 12px;
}

.card-button {
  position: absolute;
  right: 12px;
  top: 4px;
  display: block;
  background: transparent;
  border: none;
  outline: none;
  width: 16px;
  height: 16px;
  font-size: 22px;
  color: var(--title-color);
}

.card-button:hover {
  cursor: pointer;
  color: var(--primary-color);
}

.card-title {
  font-size: 1em;
  color: var(--title-color);
  margin: 4px 0 8px;
}

.card-value-box {
  margin: 12px auto;
}

.card-value {
  font-size: 2em;
  color: var(--title-color);
}

.card-unit {
  font-size: 1em;
  color: var(--text-color);
}
</style>
