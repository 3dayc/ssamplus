import Vue from 'vue'
import iframeResize from 'iframe-resizer/js/iframeResizer';

Vue.directive('resize', {
  bind: function(el, { value = {} }) {
    el.addEventListener('load', () => iframeResize(value, el))
  },
  unbind: function (el) {
    el.iFrameResizer.removeListeners();
  }
})