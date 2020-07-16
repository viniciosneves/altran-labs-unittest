<template>
  <div>
    <button v-show="logged">Logout</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logged: false
    }
  }
}
</script>
