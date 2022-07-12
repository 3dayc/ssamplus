<template lang="html">
  <transition name="modal">
    <div class="modalDim">
      <div class="modalWrapper">
        <div class="modalContainer">
          <div class="modalheader">
            <slot name="modalheader">default header</slot>
            <button @click="[$emit('close'), ]" class="modalClose">close</button>
          </div>
          <div class="modalbody">
            <slot name="modalbody">
                default body
            </slot>
          </div>
          <slot name="modalfooter"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    popClass: String,
  },
  mounted() {
    if (this.popClass) {
      document.getElementsByClassName('modalContainer')[0].className += (' ' + this.popClass);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
