<template lang="html">
  <div>
    <div class="reserveLine ssamCase" v-if="!this.mobile">
      <div class="col">
        <dl :class="{on:choice01===true}">
          <dt>{{ checkedNames }}</dt>
          <dd>
            <ul class="choiceReserve">
              <li><input type="radio" name="kind01" id="kind11" v-model="checkedNames" value="교육학" @click="onChange()"/><label for="kind11">교육학</label></li>
              <li><input type="radio" name="kind01" id="kind12" v-model="checkedNames" value="논술면접" @click="onChange()"/><label for="kind12">논술면접</label></li>
              <li><input type="radio" name="kind01" id="kind13" v-model="checkedNames" value="한국사능력검정시험" @click="onChange()"/><label for="kind13">한국사능력검정시험</label></li>
              <li><input type="radio" name="kind01" id="kind14" v-model="checkedNames" value="유아" @click="onChange()"/><label for="kind14">유아</label></li>
              <li><input type="radio" name="kind01" id="kind15" v-model="checkedNames" value="초등" @click="onChange()"/><label for="kind15">초등</label></li>
              <li><input type="radio" name="kind01" id="kind16" v-model="checkedNames" value="국어" @click="onChange()"/><label for="kind16">국어</label></li>
              <li><input type="radio" name="kind01" id="kind17" v-model="checkedNames" value="영어" @click="onChange()"/><label for="kind17">영어</label></li>
            </ul> 
          </dd>
        </dl>
      </div>
      <div class="col ssamChoice">
        <dl :class="{on:choice04===true}">
          <dt>{{ checkedNames4 }}</dt>
          <dd>
            <ul class="choiceReserve">
              <li><input type="radio" name="kind04" id="kind41" v-model="checkedNames4" value="배지윤" @click="onChange4()" /><label for="kind41">배지윤</label></li>
              <li><input type="radio" name="kind04" id="kind42" v-model="checkedNames4" value="이동건" @click="onChange4()" /><label for="kind42">이동건</label></li>
              <li><input type="radio" name="kind04" id="kind43" v-model="checkedNames4" value="홍기동" @click="onChange4()" /><label for="kind43">홍기동</label></li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="col">
        <dl :class="{on:choice05===true}">
          <dt>{{ checkedNames5 }}</dt>
          <dd>
            <ul class="choiceReserve">
              <li><input type="radio" name="kind05" id="kind51" v-model="checkedNames5" value="2021-03-10 (수)" @click="onChange5()" /><label for="kind51">2021-03-10</label></li>
              <li><input type="radio" name="kind05" id="kind52" v-model="checkedNames5" value="2021-03-17 (수)" @click="onChange5()" /><label for="kind52">2021-03-17</label></li>
              <li><input type="radio" name="kind05" id="kind53" v-model="checkedNames5" value="2021-03-24 (수)" @click="onChange5()" /><label for="kind53">2021-03-24</label></li>
              <li><input type="radio" name="kind05" id="kind54" v-model="checkedNames5" value="2021-03-31 (수)" @click="onChange5()" /><label for="kind54">2021-03-31</label></li>
              <li><input type="radio" name="kind05" id="kind55" v-model="checkedNames5" value="2021-04-07 (수)" @click="onChange5()" /><label for="kind55">2021-04-07</label></li>
              <li><input type="radio" name="kind05" id="kind56" v-model="checkedNames5" value="2021-04-14 (수)" @click="onChange5()" /><label for="kind56">2021-04-14</label></li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="col time">
        <dl :class="{on:choice03===true}">
          <dt>{{ checkedNames3 }}</dt>
          <dd>
            <ul class="choiceReserve">
              <li><input type="radio" name="kind03" id="kind31" v-model="checkedNames3" value="12:00 ~ 12:30" @click="onChange3()" /><label for="kind31">12:00 ~ 12:30</label></li>
              <li><input type="radio" name="kind03" id="kind32" v-model="checkedNames3" value="12:30 ~ 13:00" @click="onChange3()" /><label for="kind32">12:30 ~ 13:00</label></li>
              <li><input type="radio" name="kind03" id="kind33" v-model="checkedNames3" value="13:00 ~ 13:30" @click="onChange3()" /><label for="kind33">13:00 ~ 13:30</label></li>
              <li><input type="radio" name="kind03" id="kind34" v-model="checkedNames3" value="13:30 ~ 14:00" @click="onChange3()" /><label for="kind34">13:30 ~ 14:00</label></li>
              <li><input type="radio" name="kind03" id="kind35" v-model="checkedNames3" value="14:00 ~ 14:30" @click="onChange3()" /><label for="kind35">14:00 ~ 14:30</label></li>
              <li><input type="radio" name="kind03" id="kind36" v-model="checkedNames3" value="14:30 ~ 15:00" @click="onChange3()" /><label for="kind36">14:30 ~ 15:00</label></li>
              <li><input type="radio" name="kind03" id="kind37" v-model="checkedNames3" value="15:00 ~ 15:30" @click="onChange3()" /><label for="kind37">15:00 ~ 15:30</label></li>
              <li><input type="radio" name="kind03" id="kind38" v-model="checkedNames3" value="15:30 ~ 16:00" @click="onChange3()" /><label for="kind38">15:30 ~ 16:00</label></li>
              <li><input type="radio" name="kind03" id="kind39" v-model="checkedNames3" value="16:00 ~ 16:30" @click="onChange3()" /><label for="kind39">16:00 ~ 16:30</label></li>
              <li><input type="radio" name="kind03" id="kind40" v-model="checkedNames3" value="16:30 ~ 16:00" @click="onChange3()" /><label for="kind40">16:30 ~ 16:00</label></li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="col how">
        <dl :class="{on:choice06===true}">
          <dt>{{ checkedNames6 }}</dt>
          <dd>
            <ul class="choiceReserve">
              <li><input type="radio" name="kind06" id="kind61" v-model="checkedNames6" value="ZOOM 상담" @click="onChange6()" /><label for="kind61">ZOOM 상담</label></li>
              <li><input type="radio" name="kind06" id="kind62" v-model="checkedNames6" value="1:1 방문 상담" @click="onChange6()" /><label for="kind62">1:1 방문 상담</label></li>
              <li><input type="radio" name="kind06" id="kind63" v-model="checkedNames6" value="전화 상담" @click="onChange6()" /><label for="kind63">전화 상담</label></li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="col how">
        <dl :class="{on:choice02===true}">
          <dt>{{ checkedNames2 }}</dt>
          <dd>
            <ul class="choiceReserve">
              <li><input type="radio" name="kind02" id="kind21" v-model="checkedNames2" value="서울 이데아관" @click="onChange2()" /><label for="kind21">서울 이데아관</label></li>
              <li><input type="radio" name="kind02" id="kind22" v-model="checkedNames2" value="서울 아이비관" @click="onChange2()" /><label for="kind22">서울 아이비관</label></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 모바일용 // -->
    <div class="reserveLine ssamCase" v-if="this.mobile">
      <div class="col">
        <span class="selectSet full">
          <select class="choiceReserve">
            <option>교육학</option>
            <option>논술면접</option>
            <option>한국사능력검정시험</option>
            <option>유아</option>
            <option>초등</option>
            <option>국어</option>
            <option>영어</option>
          </select>
        </span>
      </div>
      <div class="col ssamChoice">
        <span class="selectSet full">
          <select class="choiceReserve">
            <option>배지윤</option>
            <option>이동건</option>
            <option>홍기동</option>
          </select>
        </span>
      </div>
      <div class="col">
        <span class="selectSet full">
          <select class="choiceReserve">
            <option>2021-03-10 (수)</option>
            <option>2021-03-17 (수)</option>
            <option>2021-03-24 (수)</option>
            <option>2021-03-31 (수)</option>
            <option>2021-04-07 (수)</option>
            <option>2021-04-14 (수)</option>
          </select>
        </span>
      </div>
      <div class="col time">
        <span class="selectSet full">
          <select class="choiceReserve">
            <option>12:00 ~ 12:30</option>
            <option>12:30 ~ 13:00</option>
            <option>13:00 ~ 13:30</option>
            <option>13:30 ~ 14:00</option>
            <option>14:00 ~ 14:30</option>
            <option>14:30 ~ 15:00</option>
            <option>15:00 ~ 15:30</option>
            <option>15:30 ~ 16:00</option>
            <option>16:00 ~ 16:30</option>
            <option>16:30 ~ 16:00</option>
          </select>
        </span>
      </div>
      <div class="col how">
        <span class="selectSet full">
          <select class="choiceReserve">
            <option>ZOOM 상담</option>
            <option>1:1 방문 상담</option>
            <option>전화 상담</option>
          </select>
        </span>
      </div>
      <div class="col how">
        <span class="selectSet full">
          <select class="choiceReserve">
            <option>서울 이데아관</option>
            <option>서울 아이비관</option>
          </select>
        </span>
      </div>
    </div>
    <!-- // 모바일용 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'counselReserveTeacher',
  components: {
  },
  data() {
    return {
      checkedNames: '상담과목',
      checkedNames2: '상담장소',
      checkedNames3: '상담시간',
      checkedNames4: '선생님',
      checkedNames5: '상담날짜',
      checkedNames6: '상담방법',
      choice01: false,
      choice02: false,
      choice03: false,
      choice04: false,
      choice05: false,
      choice06: false,
      //datedNames: 상담일자,
      date: '상담일자',
      onChange() {
        this.choice01 = true;
      },
      onChange2() {
        this.choice02 = true;
      },
      onChange3() {
        this.choice03 = true;
      },
      onChange4() {
        this.choice04 = true;
      },
      onChange5() {
        this.choice05 = true;
      },
      onChange6() {
        this.choice06 = true;
      },
    }
  },
  mounted() {
  },
}
</script>
