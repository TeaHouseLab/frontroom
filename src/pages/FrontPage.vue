<template>
  <article @click="test()" class="round small">
  <div class="progress left" id="cpu"></div>
  <h5><i>mode_cool</i>Cpu: {{ cpu1 }}</h5>
</article>
<article class="round small">
  <div class="progress left" id="mem"></div>
  <h5><i>memory</i>Mem</h5>
</article>
</template>

<script>
export default {
  data() {
    return {
      cpu: 0,
      mem: 0
    }
  },
  setup() {

    function fetchData() {
      // Will be implemented tomorrow, probably
    }

    onMounted(() => {
      fetchData();
    });
  }
};
</script>

<style>
</style>