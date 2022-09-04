<template>
  <NavBar />
  <main class="responsive"><router-view /></main>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>