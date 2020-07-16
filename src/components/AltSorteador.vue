<template>
  <div>
    <span>{{ sorteado }}</span>
    <button @click="sortear">Sortear</button>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      sorteado: 0
    }
  },
  methods: {
    sortear () {
      this.sorteado = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    }
  }
}
</script>
