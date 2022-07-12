<template lang="html">
  <div>
		<IndexPc v-if="!this.mobile" />
		<IndexM v-else-if="this.mobile" />
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import IndexPc from '@/views/smart/IndexPc.vue';
import IndexM from '@/views/smart/IndexM.vue';

export default {
  mixins: [Mixin],
  name: 'Index',
  components: {
		IndexPc,
		IndexM,
  },
  data() {
    return {
    }
  },
}
</script>
