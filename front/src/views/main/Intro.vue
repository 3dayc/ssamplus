<template lang="html">
	<div>
		<introPc v-if="!this.mobile" />
		<introM v-if="this.mobile" />
	</div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import IntroPc from '@/views/main/IntroPc.vue';
import IntroM from '@/views/main/IntroM.vue';

export default {
  mixins: [Mixin],
  name: 'Intro',
  components: {
		IntroPc,
		IntroM,
  },
  data() {
    return {
    }
  },
	methods: {
	},
}
</script>
