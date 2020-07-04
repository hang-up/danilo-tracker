<template>
  <div class="menu">
    <h2 class="logo" @click="handleGoHome">Body Tracker</h2>
    <div class="menu-link" @click="handleAddOrGoBack">
      <i :class="iconClass" class="icon-menu"></i><span>{{ textLink }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      textLink: "Add new user",
    };
  },
  computed: {
    iconClass() {
      if (!this.isHome) {
        return `fas fa-arrow-left`;
      }
      return `fas fa-sign-in-alt`;
    },
  },
  // window.history.length > 1
  created() {
    console.log(this.$router.currentRoute.name === "Home");
  },
  methods: {
    isHome() {
      return this.$router.currentRoute.name === "Home";
    },

    handleGoHome() {
      // If is already in home page return
      if (this.isHome) return;
      // if not go to home page
      this.$router.push("/");
    },

    handleAddOrGoBack() {
      this.isHome ? this.$router.push("/adduser") : this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.logo {
  cursor: pointer;
}

.menu-link {
  display: flex;
  align-items: flex-end;
  cursor: pointer;
}

@media (min-width: 320px) and (max-width: 480px) {
  .menu {
    background: #fff;
    height: 71px;
    padding: 0 12px;
  }

  .logo {
    font-size: 22px;
  }

  i.icon-menu {
    color: var(--primary-color);
    font-size: 16px;
    margin-right: 6px;
  }

  span {
    font-size: 13px;
    font-weight: 600;
  }
}

@media (min-width: 481px) {
  .menu {
    height: 142px;
    padding: 0 24px;
  }

  i.icon-menu {
    color: var(--primary-color);
    font-size: 24px;
    margin-right: 12px;
  }

  span {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
