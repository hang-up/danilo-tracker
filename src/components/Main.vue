<template>
  <div class="main">
    <h1>Start tracking your body today</h1>
    <p>
      We help you tracking information about your body with a couple of clicks.
    </p>
    <div>
      <input type="text" name="search" id="search" />
    </div>
  </div>
</template>
<style scoped>
.main {
  flex: 1;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main h1 {
  font-size: 54px;
  color: var(--title-color);
}

.main p {
  font-size: 24px;
  margin-top: 24px;
  line-height: 38px;
}

.main a {
  width: 100%;
  max-width: 360px;
  height: 72px;
  background: var(--primary-color);
  border-radius: 8px;
  text-decoration: none;

  display: flex;
  align-items: center;
  overflow: hidden;

  margin-top: 40px;
}

.main a span {
  display: block;
  background: rgba(0, 0, 0, 0.08);
  width: 72px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.main a span svg {
  color: #fff;
  width: 20px;
  height: 20px;
}

.main a strong {
  flex: 1;
  text-align: center;
  color: #fff;
}

.main a:hover {
  background: #2fb86e;
}
</style>
