<template>
  <div class="container">
    <p>Aside component <em>{{p}}</em></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      p: null
    }
  },
  created () {
      this.p = 'hello'
  }
};
</script>

<style>
</style>