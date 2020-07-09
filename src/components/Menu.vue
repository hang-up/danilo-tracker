<template>
  <div class="menu">
    <h2 class="logo">Body Tracker</h2>
    <div v-if="isHome" class="menu-link" @click="handleAddUser">
      <i class="fas fa-sign-in-alt icon-menu"></i><span>Add new user</span>
    </div>
    <div v-else class="menu-link" @click="handleGoBack">
      <i class="fas fa-arrow-left icon-menu"></i><span>Go back</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isHome() {
      return this.$route.path === '/';
    },
  },
  methods: {
    handleAddUser() {
      this.$router.push('/adduser');
    },
    handleGoBack() {
      this.$router.go(-1);
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
