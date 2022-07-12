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
              <button class="btnM line" @click="$emit('close')">취소</button>
              <button class="btnM " @click="$emit('close')">확인</button>
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
