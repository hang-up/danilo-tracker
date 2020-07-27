<template>
  <div class="form-container">
    <div class="g grid-100 form-header">
      <h1>Create a</h1>
      <h1 class="title">new user</h1>
      <h3 class="sub-title">Client info</h3>
    </div>
    <div class="g grid-50 grid-m-100">
      <label class="label" for="name">Name:</label>
      <input class="input" type="text" name="name" v-model="user.name" />
    </div>
    <div class="g grid-50 grid-m-100">
      <label class="label" for="email">Email:</label>
      <input class="input" type="email" name="email" v-model="user.email" />
    </div>
    <div class="g grid-50 grid-m-66">
      <label class="label" for="birthdate">Birthdate:</label>
      <input class="input input-date" type="date" name="birthdate" v-model="user.birthdate" />
    </div>
    <div class="g grid-50 grid-m-33">
      <label class="label" for="gender">Gender:</label>
      <select class="input" name="gender" v-model="user.gender">
        <option v-for="gender in genders" :key="gender.value" :value="gender.value">
          {{ gender.name }}
        </option>
      </select>
    </div>

    <div class="g grid-25 grid-m-33">
      <label class="label" for="unit">Unit:</label>
      <select class="input" name="unit" v-model="user.preferredUnit">
        <option v-for="unit in units" :key="unit.value" :value="unit.value">
          {{ unit.name }}
        </option>
      </select>
    </div>
    <div class="g grid-25 grid-m-33">
      <label class="label" for="weight">Weight:</label>
      <input
        class="input number"
        type="number"
        name="weight"
        :min="minWeight"
        v-model="user.weight"
      />
    </div>
    <div class="g grid-25 grid-m-33">
      <label class="label" for="height">Height:</label>
      <input
        class="input number"
        type="number"
        name="height"
        :min="minHeight"
        v-model="user.height"
      />
    </div>
    <div class="g grid-33 grid-m-100">
      <button class="btn-primary" @click="handleSubmit">
        Add record
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Adduser',
  data: () => {
    return {
      user: {
        name: '',
        email: '',
        birthdate: '',
        weight: 0,
        height: 0,
        preferredUnit: '',
        gender: '',
      },
      units: [
        { name: 'Metric', value: 'metric', prefixHeight: 'cm' },
        { name: 'Imperial', value: 'imperial', prefixHeight: 'inches' },
      ],
      genders: [
        { name: 'Male', value: 'male' },
        { name: 'Female', value: 'female' },
      ],
      minHeight: 130,
      minWeight: 35,
    };
  },
  methods: {
    /**
     * Add an item to a localStorage() array
     * @param {String} users  The localStorage() key
     * @param {Object} user The localStorage() value
     */
    addToLocalStorageArray(users, user) {
      let existingUsers = [];

      if (window.localStorage.getItem('users') !== null) {
        existingUsers = JSON.parse(localStorage.getItem('users'));

        existingUsers.push(user);

        localStorage.setItem(users, JSON.stringify(existingUsers));
      }

      if (window.localStorage.getItem('users') === null) {
        existingUsers.push(user);

        localStorage.setItem(users, JSON.stringify(existingUsers));
      }
    },
    /**
     * Saves the user in local Storage and redirects to program page.
     *
     */
    handleSubmit() {
      this.addToLocalStorageArray('users', this.user);
      this.$store.commit('SET_CURRENT_USER', this.user);
      window.localStorage.setItem('current_user', JSON.stringify(this.user));
      this.$router.push({ name: 'UserProfile' });
    },
  },
};
</script>
