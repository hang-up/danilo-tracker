<template>
  <div class="content">
    <div class="main">
      <h1>Start tracking your body today</h1>
      <p>
        We help you tracking information about your body with a couple of
        clicks.
      </p>
      <div class="search-container">
        <div class="pre-input">
          <i class="fas fa-search"></i>
        </div>
        <input class="input-home" type="text" name="search" />
      </div>
    </div>
    <div class="picture">
      <img alt="logo" src="../assets/placeholder.svg" />
    </div>
    <!-- <div>
      <p>Colocar a imagem resposnsiva e que nao tenha influencia no resto do</p>
      <p>conteudo. A imagm tem que tocar no fundo.</p>
      <p>Ver porque com lrem * 100 ta indo pro teto</p>
    </div> -->
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1100px;
}

.search-container {
  margin: 100px auto;
  position: relative;
  display: flex;
}

.pre-input {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-color-darker);
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  position: absolute;
  top: 0;
  left: 0;
  height: 72px;
  width: 72px;
}

.pre-input i {
  color: #fff;
  font-size: 20px;
}

.main .input-home {
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 6px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  height: 72px;
  outline: none;
  padding: 12px 12px 16px 90px;
  width: 100%;
}

.main .input-home:focus {
  background-color: var(--primary-color);
  border: solid 1px var(--primary-color);
}

.picture {
  width: 877px;
  max-width: 100%;
  height: auto;
  align-self: flex-end;
}

@media (min-width: 320px) and (max-width: 480px) {
  .content {
    flex-direction: column;
  }

  .main {
    margin-top: 20px;
  }

  .main h1 {
    max-width: 90%;
    margin: 30px auto;
    text-align: center;
  }

  .main p {
    margin: 30px auto;
    text-align: center;
  }
  .search-container {
    margin: 100px auto 20px;
  }
  .pre-input {
    height: 58px;
    width: 58px;
  }

  .pre-input i {
    font-size: 18px;
  }

  .main .input-home {
    font-size: 18px;
    height: 58px;
    padding: 12px 12px 13px 74px;
  }
}

@media (min-width: 481px) {
  .content {
    min-height: 436px;
    height: calc(100vh - 142px);
    align-items: center;
  }

  .main {
    min-width: 437px;
    width: 36%;
    text-align: left;
  }

  .main h1 {
    font-size: 50px;
  }

  .main p {
    font-size: 22px;
    margin: 30px auto;
  }

  .main .input-home:hover {
    cursor: text;
  }
}
</style>
