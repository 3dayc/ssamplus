<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>카드 무이자 관리 (수정)</h1>
      <span class="supTxt">* 매월 말 PG 사이트에서 &lt;신용카드 무이자 할부 정보(행사 카드 정보)&gt;를 확인하여 정보를 입력하세요. <br/>이 정보는 쌤플러스와 희소 사이트에 동시 적용됩니다.</span>
    </div>
    <div class="winContent">
      <div class="boardTop">
        <div class="left-po"><a href="http://pgweb.dacom.net" target="_blank">▶  [PG사(KG 이니시스) 바로가기]</a></div>
      </div>
      <div class="tvs">
        <table>
          <colgroup><col width="150"/><col/></colgroup>
          <tbody>
            <tr>
              <th scope="row">적용버전</th>
              <td>
                <span class="labelToggleSet mr10">
                  <input type="checkbox" id="push5" checked>
                  <label for="push5">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
                <span>◀ 적용기간 중이라도 &lt;차단&gt;상태라면 화면에 표시되지 않음</span>
              </td>
            </tr>
            <tr>
              <th scope="row">적용기간</th>
              <td>
                <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                  <template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
                    <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" @click="togglePopover()" placeholder="시작일 선택"/>
                    <em>~</em>
                    <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" @click="togglePopover()" placeholder="종료일 선택"/>
                  </template>
                </Vcalendar>
              </td>
            </tr>
            <tr>
              <th scope="row">제목</th>
              <td><input type="text" value="5월 무이자 할부 안내"></td>
            </tr>
            <tr>
              <th>등록 방법</th>
              <td>
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="" checked/>
                    <label for=""><i></i>본 창 열림</label>
                  </span>
                  <div class="mt10">
                    <template>
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="btnArea">
        <button class="btnM">저장</button>
        <button class="btnM gray">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaymentCardFreeView',
  data() {
    return {
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  },
  methods: {
  }
}
</script>
