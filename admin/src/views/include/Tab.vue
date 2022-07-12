<template lang="html">
  <div v-show="on" class="tabData">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    name: { required: true },
    selected: { default: false }
  },
  data() {
    return {
      on: false
    }
  },
  mounted() {
    this.on = this.selected;
  }
}
</script>
