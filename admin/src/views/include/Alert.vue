<template lang="html">
    <transition name="modal">
        <div class="modalDim alertPop">
            <div class="modalWrapper">

                <div class="modalContainer">
                  <div class="modalbody">
                    <slot name="modalbody">
                      default body
                    </slot>
                  </div>
                  <div class="modalfooter">
                    <slot name="modalfooter">
                      <button class="btnM gray" @click="$emit('close')">취소</button>
                      <button class="btnM green" @click="$emit('close')">확인</button>
                    </slot>
                  </div>
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
