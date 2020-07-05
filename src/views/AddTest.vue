<template>
  <div class="form-container">
    <div class="g grid-100 form-header">
      <h1>Create a new</h1>
      <h1 class="title">measurement</h1>
      <h3 class="sub-title">Pick a client</h3>
    </div>

    <div class="g grid-33 grid-m-100">
      <label class="label" for="name">Name:</label>
      <input class="input" type="text" name="name" v-model="search" />
    </div>
    <div class="g grid-33 grid-m-100">
      <label class="label" for="protocol">Protocol:</label>
      <select class="input" name="protocol" v-model="test.protocol">
        <option
          v-for="protocol in protocols"
          :key="protocol.value"
          :value="protocol.value"
          >{{ protocol.name }}
        </option>
      </select>
    </div>
    <div class="g grid-33 grid-m-66">
      <label class="label" for="testdate">Test date:</label>
      <input
        class="input"
        type="date"
        name="testdate"
        v-model="test.testDate"
      />
    </div>
    <div class="g grid-33 grid-m-33">
      <label class="label" for="height">Height:</label>
      <input class="input" type="number" name="height" v-model="test.height" />
    </div>
    <div class="g grid-33 grid-m-50">
      <label class="label" for="weight">Weight:</label>
      <input class="input" type="number" name="weight" v-model="test.weight" />
    </div>
    <div class="g grid-33 grid-m-50">
      <label class="label" for="desiredweight">Desired weight:</label>
      <input
        class="input"
        type="number"
        name="desiredweight"
        v-model="test.desiredWeight"
      />
    </div>

    <keep-alive>
      <component :is="protocol"></component>
    </keep-alive>

    <div class="g grid-33 grid-m-100">
      <button class="btn-primary" @click="handleSubmit">
        Save
      </button>
    </div>
    <!-- <div class="form-group">
      <div class="line">
        <div class="form-item">
          <label class="label" for="name">Name:</label>
          <input class="input" type="text" name="name" v-model="search" />
        </div>

        <div class="form-item">
          <label class="label" for="protocol">Protocol:</label>
          <select class="input" name="protocol" v-model="test.protocol">
            <option
              v-for="protocol in protocols"
              :key="protocol.value"
              :value="protocol.value"
              >{{ protocol.name }}
            </option>
          </select>
          <div v-for="user in filteredUser" :key="user.name">
            {{ user.name }}
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="form-header">
      <h3 class="sub-title">{{ test.protocol }}</h3>
    </div> -->
    <!-- <div class="form-group">
      <div class="line row">
        <div class="form-item left">
          <label class="label" for="weight">Weight:</label>
          <input
            class="input"
            type="number"
            name="weight"
            v-model="test.weight"
          />
        </div>

        <div class="form-item right">
          <label class="label" for="desiredweight">Desired weight:</label>
          <input
            class="input"
            type="number"
            name="desiredweight"
            v-model="test.desiredWeight"
          />
        </div>

        <div class="form-item right">
          <label class="label" for="height">Height:</label>
          <input
            class="input"
            type="number"
            name="height"
            v-model="test.height"
          />
        </div>

        <div class="form-item">
          <label class="label" for="testdate">Test date:</label>
          <input
            class="input"
            type="date"
            name="testdate"
            v-model="test.testDate"
          />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Pollock3 from "../components/protocols/pollock-3";
import Pollock7 from "../components/protocols/pollock-7";

export default {
  name: "Adduser",
  components: { Pollock3, Pollock7 },
  data: () => {
    return {
      search: "",
      users: null,
      test: {
        user: {},
        protocol: "",
        testDate: new Date(),
        weight: 0,
        desiredWeight: 0,
        height: 0,
      },
      protocols: [
        { name: "Pollock 7 sites", value: "pollock7" },
        { name: "Pollock 3 sites", value: "pollock3" },
      ],
      minHeight: 130,
      minWeight: 35,
    };
  },
  created() {
    // check if its coming from a new user page
    if (window.localStorage.getItem("users") === null) {
      // aqui checar se tem user unico vindo do localstorage.
      // quand criar um novo user add ele numa lista de users.
      // choose user from user list
      alert("no user");
    } else {
      console.log("do test created users");
    }
  },

  computed: {
    protocol() {
      return this.test.protocol;
    },
    filteredUser() {
      const users = JSON.parse(window.localStorage.getItem("users"));
      return users.filter((user) => user.name.match(this.search));
    },
  },

  methods: {
    handleSubmit() {
      alert("click");
    },

    fetchProtocols() {},
  },
};
</script>
<style scoped>
/* * {
  box-sizing: border-box;
} */

/* Smartphones (portrait and landscape) ----------- */
/* @media (min-width: 320px) and (max-width: 480px) {
  .adduser {
    padding: 12px;
    max-width: 100%;
    margin: 0 auto;
  }

  .form-header {
    margin: 16px 0 0;
  }

  .line {
    flex-direction: column;
  }

  .line.row {
    flex-direction: row;
    width: 50%;
  }

  .form-item.left {
    margin-right: 6px;
  }

  .form-item.right {
    margin-left: 6px;
  }

  .form-item {
    margin: 0 0 16px;
  }

  .input.number {
    max-width: 162px;
    min-width: 100%;
  }

  .btn-row {
    display: block;
    padding: 0px;
  }

  .btn-primary {
    width: 100%;
  }
}

/* Screen bigger then 481px */
/*
@media (min-width: 481px) {
  .adduser {
    padding: 40px;
  }

  .form-item {
    margin: 12px;
  }

  .form-header {
    margin: 0 12px;
  }

  .btn-row {
    display: block;
    padding: 12px;
  }

  .btn-primary {
    align-self: flex-end;
    width: 160px;
  }

  .line.row {
    flex-direction: row;
    width: 140px;
  }

  .form-item.left {
    margin-right: 12px;
  }

  .form-item.right {
    margin-left: 12px;
  }
} */

/* General style */
/* .adduser {
  display: flex;
  flex-direction: column;
  background: #fff;
  max-width: 736px;
  margin: 0 auto;
}

.title {
  margin-bottom: 48px;
}

.sub-title {
  margin-bottom: 24px;
}

.line {
  display: flex;
  width: 100%;
}

.form-item {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-item .label {
  color: var(--text-color);
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
}

.form-item .input {
  background-color: var(--light-grey);
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  color: var(--text-color);
  font-size: 16px;
  outline: none;
  padding: 12px;
}

.form-item .input:focus {
  background-color: var(--light-grey);
  border: solid 1px var(--primary-color);
}

.form-item select {
  -webkit-appearance: none;
  line-height: 24px;
}
.btn-row {
  display: flex;
  justify-content: flex-end;
}

.btn-primary {
  padding: 12px;
  line-height: 24px;
  color: #fff;
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
  outline: none;
}

.btn-primary:hover {
  cursor: pointer;
} */
</style>
