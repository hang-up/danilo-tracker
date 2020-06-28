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
          <input class="input" type="text" name="name" />
        </div>
      </div>

      <div class="line">
        <div class="form-item">
          <label class="label" for="birthdate">Birthdate:</label>
          <input class="input" type="date" name="birthdate" />
        </div>

        <div class="form-item">
          <label class="label" for="gender">Gender:</label>
          <select class="input" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <div class="line row">
        <div class="form-item left">
          <label class="label" for="weight">Weight:</label>
          <input class="input number" type="number" name="weight" />
        </div>
        <div class="form-item right">
          <label class="label" for="height">Height:</label>
          <input class="input number" type="number" name="height" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Adduser",
  components: {}
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
    height: 100vh;
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
</style>
