<template lang="html">
  <transition name="modal">
    <div class="modalDim imgLayerPop">
      <div class="modalWrapper">
        <div class="modalContainer">
          <div class="modalbody">
            <button @click="$emit('close')" class="modalClose">close</button>
            <slot name="modalbody">
              default body
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
