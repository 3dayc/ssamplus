<template lang="html">
<div>
  <div class="mkTop">
    <h1>KG에듀원 쌤Plus Front Markup Guide</h1>
    <div class="mkGuidTab">
      <button :class="{on:onOffTrigger == 1}" @click="onOffTrigger = 1">기본정책</button>
      <button :class="{on:onOffTrigger == 2}" @click="onOffTrigger = 2">폴더구조</button>
      <button :class="{on:onOffTrigger == 3}" @click="onOffTrigger = 3">Layout</button>
      <button :class="{on:onOffTrigger == 4}" @click="onOffTrigger = 4">Document</button>
      <button :class="{on:onOffTrigger == 5}" @click="onOffTrigger = 5">SCSS</button>
      <button :class="{on:onOffTrigger == 6}" @click="onOffTrigger = 6">Images</button>
      <button :class="{on:onOffTrigger == 7}" @click="onOffTrigger = 7">ETC</button>
      <router-link to="/mkup/worklist" target="_blank">Worklist</router-link>
    </div>
  </div>
  <BasicPage v-if="onOffTrigger == 1" />
  <FolderPage v-if="onOffTrigger == 2" />
  <LayoutPage v-if="onOffTrigger == 3" />
  <DocumentPage v-if="onOffTrigger == 4" />
  <ScssPage v-if="onOffTrigger == 5" />
  <ImagesPage v-if="onOffTrigger == 6" />
  <EtcPage v-if="onOffTrigger == 7" />
  <div class="mkFoot">
    Think-tree  | copyright (c) think-tree all right reserved.
  </div>
</div>
</template>

<script>
import BasicPage from '@/views/mkupGuide/BasicPage.vue';
import FolderPage from '@/views/mkupGuide/FolderPage.vue';
import LayoutPage from '@/views/mkupGuide/LayoutPage.vue';
import DocumentPage from '@/views/mkupGuide/DocumentPage.vue';
import ScssPage from '@/views/mkupGuide/ScssPage.vue';
import ImagesPage from '@/views/mkupGuide/ImagesPage.vue';
import EtcPage from '@/views/mkupGuide/EtcPage.vue';

export default {
  name: 'Index',
  components: {
    BasicPage,
    FolderPage,
    LayoutPage,
    DocumentPage,
    ScssPage,
    ImagesPage,
    EtcPage
  },
  data() {
    return {
      onOffTrigger: 1,
    }
  },
}
</script>

<style lang="css" scoped>
.mkTop {position:sticky;top:0;text-align:center;border-bottom:1px solid #ddd;background:#fff}
.mkTop h1 {padding:25px 0;font-size:18px;}
.mkTop .mkGuidTab {padding:20px 0;border-top:1px solid #eee;border-bottom:5px solid #efefef;}
.mkTop .mkGuidTab * {margin:0 5px;padding:2px 15px 5px;background:#eee;}
.mkTop .mkGuidTab *.on {color:#fff;background:#333;}
.mkBody {padding:0 20px 20px;}
.mkFoot {padding:10px 20px;font-size:11px;color:#999;border-top:1px solid #ddd;}
</style>
