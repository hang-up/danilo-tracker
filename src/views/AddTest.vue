<template>
  <div class="form-container">
    <FormUserInfo @update="processStep" />

    <keep-alive>
      <component :is="protocol"></component>
    </keep-alive>
    <div class="g grid-33 grid-m-100">
      <button class="btn-primary" @click="handleSubmit">
        Save
      </button>
    </div>
  </div>
</template>

<script>
import FormUserInfo from '../components/form-user-info';
import FormPollock3 from '../components/protocols/pollock-3';
import FormPollock7 from '../components/protocols/pollock-7';

export default {
  name: 'Adduser',
  components: { FormUserInfo, FormPollock3, FormPollock7 },
  data: () => {
    return {
      form: {},
      users: null,
    };
  },
  created() {
    // check if its coming from a new user page
    if (window.localStorage.getItem('users') === null) {
      // aqui checar se tem user unico vindo do localstorage.
      // quand criar um novo user add ele numa lista de users.
      // choose user from user list
      alert('no user');
    } else {
      // get user
    }
  },

  computed: {
    protocol() {
      return this.form.protocol ? this.form.protocol : 'FormPollock7';
    },
    filteredUser() {
      const users = JSON.parse(window.localStorage.getItem('users'));
      return users.filter(user => user.name.match(this.search));
    },
  },

  methods: {
    handleSubmit() {
      alert(this.form.protocol);
    },

    fetchProtocols() {},

    processStep(stepData) {
      Object.assign(this.form, stepData);
      console.log('form', this.form.protocol);
    },
  },
  // watch: {
  //   form: function(n, o) {
  //     console.log(n, o);
  //   },
  // },
};
</script>
