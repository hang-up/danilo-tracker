<script>

export default {
  
};
</script>

<template>
  <div class="form-container">
    <div class="g grid-100 form-header">
      <h3 class="sub-title">Danilo profile</h3>
      <p>Name:<span>Danilo Heraclio</span></p>
      <p>Age:<span>39</span></p>
      <p>Gender:<span>male</span></p>
    </div>
  

    <div class="g grid-100 form-header">
      <h3 class="sub-title">Body tracks</h3>

      <div class="card-grid">
        <div class="card">
          <button class="card-button" aria-label="add">+</button>
          <p class="card-title">Weight</p>
          <div class="card-value-box">
            <span class="card-value">68.5</span><span class="card-unit">kg</span>
          </div>
        </div>

        <div class="card">
          <button class="card-button" aria-label="add">+</button>
          <p class="card-title">Pushup</p>
          <div class="card-value-box">
            <span class="card-value">42</span><span class="card-unit">/min</span>
          </div>
        </div>

        <div class="card">
          <button class="card-button" aria-label="add">+</button>
          <p class="card-title">Imc</p>
          <div class="card-value-box">
            <span class="card-value">23.8</span><span class="card-unit"></span>
          </div>
        </div>

        <div class="card">
          <button class="card-button" aria-label="add">+</button>
          <p class="card-title">Bodyfat</p>
          <div class="card-value-box">
            <span class="card-value">17.5</span><span class="card-unit">kg/m²</span>
          </div>
        </div>
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
  margin: 8px auto;
  padding: 8px;
  position: relative;
}

.card:first-child {
  margin-right: 12px;
}

.card:last-child {
  margin-left: 12px;
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
