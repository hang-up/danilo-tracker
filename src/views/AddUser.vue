<template>
  <div class="adduser">
    <div class="form-header">
      <h1>Create a</h1>
      <h1 class="title">new user</h1>
      <h3 class="sub-title">Client info</h3>
    </div>
    <div class="form-group">
      <div class="line">
        <div class="form-item">
          <label class="label" for="name">Name:</label>
          <input class="input" type="text" name="name" v-model="user.name" />
        </div>
      </div>

      <div class="line">
        <div class="form-item">
          <label class="label" for="birthdate">Birthdate:</label>
          <input
            class="input"
            type="date"
            name="birthdate"
            v-model="user.birthdate"
          />
        </div>

        <div class="form-item">
          <label class="label" for="gender">Gender:</label>
          <select class="input" name="gender" v-model="user.gender">
            <option
              v-for="gender in genders"
              :key="gender.value"
              :value="gender.value"
              >{{ gender.name }}</option
            >
          </select>
        </div>
      </div>

      <div class="line row">
        <div class="form-item left">
          <label class="label" for="weight">Weight:</label>
          <input
            class="input number"
            type="number"
            name="weight"
            :min="minWeight"
            v-model="user.weight"
          />
        </div>
        <div class="form-item right">
          <label class="label" for="height">Height:</label>
          <input
            class="input number"
            type="number"
            name="height"
            :min="minHeight"
            v-model="user.height"
          />
        </div>
      </div>

      <div class="form-header">
        <h3 class="sub-title">Settings</h3>
      </div>
      <div class="line row">
        <div class="form-item left">
          <label class="label" for="unit">Unit:</label>
          <select class="input" name="unit" v-model="user.preferredUnit">
            <option v-for="unit in units" :key="unit.value" :value="unit.value">
              {{ unit.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="btn-row">
        <button class="btn-primary" @click="handleSubmit">
          Add record
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Adduser",
  data: () => {
    return {
      user: {
        name: "Danilo",
        birthdate: "",
        weight: 0,
        height: 0,
        preferredUnit: "",
        gender: ""
      },
      units: [
        { name: "Metric", value: "metric", prefixHeight: "cm" },
        { name: "Imperial", value: "imperial", prefixHeight: "inches" }
      ],
      genders: [
        { name: "Male", value: "male" },
        { name: "Female", value: "female" }
      ],
      minHeight: 130,
      minWeight: 35
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

      if (window.localStorage.getItem("users") !== null) {
        existingUsers = JSON.parse(localStorage.getItem("users"));

        existingUsers.push(user);

        localStorage.setItem(users, JSON.stringify(existingUsers));
      }

      if (window.localStorage.getItem("users") === null) {
        existingUsers.push(user);

        localStorage.setItem(users, JSON.stringify(existingUsers));
      }
    },
    /**
     * Saves the user in local Storage and redirects to program page.
     *
     */
    handleSubmit() {
      this.addToLocalStorageArray("users", this.user);
      //window.localStorage.setItem("user", JSON.stringify(this.user));
      this.$router.push({ path: "/addtest" });
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

/* Smartphones (portrait and landscape) ----------- */
@media (min-width: 320px) and (max-width: 480px) {
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
}

/* General style */
.adduser {
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
}
</style>
