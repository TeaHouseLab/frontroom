<template>
  <nav class="top-round menu bottom">
    <router-link v-for="item in items" :key="item" :to="item.link">
      <i>{{ item.icon }}</i>
      <span>{{ item.name }}</span>
    </router-link>
    <div class="modal top-round round medium bottom no-scroll"></div>
    <div class="modal top-round bottom"></div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      items: [
        {
          link: '/LevelList',
          icon: 'storage',
          name: 'Levels'
        }
      ]
    }
  }
};
</script>