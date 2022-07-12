<template lang="html">
  <transition name="modal">
    <div class="modalDim">
      <div class="modalWrapper">
        <div class="modalContainer">
          <div class="modalheader">
            <slot name="modalheader" class="modalheader"></slot>
          </div>
          <div class="modalbody">
            <slot name="modalbody">
              default body
            </slot>
          </div>
          <slot class="modalfooter" name="modalfooter"></slot>
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
