<template lang="html">
  <div>
    <!--PC 용 -->
    <div v-if="!this.mobile">
      <div class="grapTop">
        <div class="choiceSet" v-if="kindType == 1">
          <span><input type="radio" id="1" value="1" v-model="choiceRaio" @change="onChange2($event)" name="choiceRaio"><label for="1">월간통계</label></span>
          <span><input type="radio" id="2" value="2" v-model="choiceRaio" @change="onChange2($event)" name="choiceRaio"><label for="2">연간통계</label></span>
        </div>
        <div class="choiceSet" v-if="kindType == 2">
          <span><input type="radio" id="3" value="3" v-model="choiceRaio" @change="onChange3($event)" name="choiceRaio"><label for="3">월간통계</label></span>
          <span><input type="radio" id="4" value="4" v-model="choiceRaio" @change="onChange3($event)" name="choiceRaio"><label for="4">연간통계</label></span>
        </div>
        <span class="selectSet kindCase">
          <select name="" id="" @change="onChange($event)">
            <option value="1">수강 강의 수(시간) 통계</option>
            <option value="2">자율공부 시간 집계</option>
          </select>
        </span>
        <span class="selectSet dateCase" v-if="dateTrigger == 1">
          <select name="" id="">
            <option value="">2021년 1월 1일 ~ 1월 31일</option>
            <option value="">2021년 2월 1일 ~ 2월 28일</option>
            <option value="">2021년 3월 1일 ~ 3월 31일</option>
            <option value="" selected>2021년 4월 1일 ~ 4월 25일</option>
          </select>
        </span>
        <span class="selectSet dateCase" v-if="dateTrigger == 2">
          <select name="" id="">
            <option value="">2019년</option>
            <option value="">2020년</option>
            <option value="" selected>2021년</option>
          </select>
        </span>
      </div>
      <StudyMyGraphCase11  v-if="studyGraphCaseTrigger == 11"/>
      <StudyMyGraphCase12  v-if="studyGraphCaseTrigger == 12"/>
      <StudyMyGraphCase21  v-if="studyGraphCaseTrigger == 21"/>
      <StudyMyGraphCase22  v-if="studyGraphCaseTrigger == 22"/>
    </div>
    <!--//PC 용 -->
    <!--모바일 용 -->
    <div v-else-if="this.mobile">
      <div class="grapTop">
        <div>
          <span class="selectSet term1" v-if="termMTrigger == 1">
            <select name="" id="" v-model="selected1" @change="onChangeMterm1($event)">
              <option value="1">월간</option>
              <option value="2">연간</option>
            </select>
          </span>
          <span class="selectSet term1" v-else-if="termMTrigger == 2">
            <select name="" id="" v-model="selected2" @change="onChangeMterm2($event)">
              <option value="1">월간</option>
              <option value="2">연간</option>
            </select>
          </span>
          <span class="selectSet term2" v-if="termMTrigger2 == 1">
            <select name="" id="">
              <option value="">2021년 1월 1일 ~ 1월 31일</option>
              <option value="">2021년 2월 1일 ~ 2월 28일</option>
              <option value="">2021년 3월 1일 ~ 3월 31일</option>
              <option value="" selected>2021년 4월 1일 ~ 4월 25일</option>
            </select>
          </span>
          <span class="selectSet term2" v-else-if="termMTrigger2 == 2">
            <select name="" id="">
              <option value="">2019년</option>
              <option value="">2020년</option>
              <option value="" selected>2021년</option>
            </select>
          </span>
        </div>
        <span class="selectSet datakind">
          <select name="" id="" @change="onChangeMdata($event)">
            <option value="1">수강 강의 수(시간) 통계</option>
            <option value="2">자율공부 시간 집계</option>
          </select>
        </span>
      </div>
      <StudyMyGraphCaseM11  v-if="termMTrigger == 1 && termMTrigger2 == 1" />
      <StudyMyGraphCaseM12  v-if="termMTrigger == 1 && termMTrigger2 == 2" />
      <StudyMyGraphCaseM21  v-if="termMTrigger == 2 && termMTrigger2 == 1" />
      <StudyMyGraphCaseM22  v-if="termMTrigger == 2 && termMTrigger2 == 2" />
    </div>
    <!--//모바일 용 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import StudyMyGraphCase11 from '@/views/mylec/StudyMyGraphCase11.vue';
import StudyMyGraphCase12 from '@/views/mylec/StudyMyGraphCase12.vue';
import StudyMyGraphCase21 from '@/views/mylec/StudyMyGraphCase21.vue';
import StudyMyGraphCase22 from '@/views/mylec/StudyMyGraphCase22.vue';
import StudyMyGraphCaseM11 from '@/views/mylec/StudyMyGraphCaseM11.vue';
import StudyMyGraphCaseM12 from '@/views/mylec/StudyMyGraphCaseM12.vue';
import StudyMyGraphCaseM21 from '@/views/mylec/StudyMyGraphCaseM21.vue';
import StudyMyGraphCaseM22 from '@/views/mylec/StudyMyGraphCaseM22.vue';

export default {
  mixins: [Mixin],
  name: 'StudyMyLecTimeGraph',
  components: {
    StudyMyGraphCase11,
    StudyMyGraphCase12,
    StudyMyGraphCase21,
    StudyMyGraphCase22,
    StudyMyGraphCaseM11,
    StudyMyGraphCaseM12,
    StudyMyGraphCaseM21,
    StudyMyGraphCaseM22
  },
  data() {
    return {
      //PC 용 //////////////
      studyGraphCaseTrigger: 11,
      kindType:1,
      dateTrigger:1,
      choiceRaio:1,
      onChange(event) {
        let value = event.target.value;
        if (value == '1') this.kindType = 1, this.studyGraphCaseTrigger = 11, this.choiceRaio = 1;
        else if (value == '2') this.kindType = 2, this.studyGraphCaseTrigger = 21, this.choiceRaio = 3;
      },
      onChange2(event) {
        let value = event.target.value;
        if (value == '1') this.dateTrigger = 1, this.studyGraphCaseTrigger = 11;
        else if (value == '2') this.dateTrigger = 2, this.studyGraphCaseTrigger = 12;
      },
      onChange3(event) {
        let value = event.target.value;
        if (value == '3') this.dateTrigger = 1, this.studyGraphCaseTrigger = 21;
        else if (value == '4') this.dateTrigger = 2, this.studyGraphCaseTrigger = 22;
      },
      //모바일 용 //////////////
      studyGraphM: 1,
      termMTrigger: 1,
      termMTrigger2: 1,
      selected1: 1,
      onChangeMdata(event) {
        let value = event.target.value;
        if (value == '1') this.termMTrigger = 1, this.termMTrigger2 = 1, this.selected1 = 1;
        else if (value == '2') this.termMTrigger = 2, this.termMTrigger2 = 1, this.selected2 = 1;
      },
      onChangeMterm1(event) {
        let value = event.target.value;
        if (value == '1') this.termMTrigger = 1, this.termMTrigger2 = 1;
        else if (value == '2') this.termMTrigger = 1, this.termMTrigger2 = 2;
      },
      onChangeMterm2(event) {
        let value = event.target.value;
        if (value == '1') this.termMTrigger = 2, this.termMTrigger2 = 1;
        else if (value == '2') this.termMTrigger = 2, this.termMTrigger2 = 2;
      },
    }
  },
}
</script>
