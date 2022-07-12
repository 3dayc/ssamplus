<template lang="html">
  <div id="windowLayout" class="lecCompletion">
    <div class="winHeader">
      <h1>수강확인증</h1>
      <img :src="require(`@/assets/images/i_lecCompletion_logo.png`)" alt="" />
    </div>
    <div class="winContent">
      <dl class="name">
        <dt>성 명</dt>
        <dd>홍길동</dd>
      </dl>
      <dl class="birth">
        <dt>생년월일</dt>
        <dd>1999-00-00</dd>
      </dl>
      <dl class="phone">
        <dt>연 락 처</dt>
        <dd>01000000000</dd>
      </dl>
      <dl class="data">
        <dt>수강내역</dt>
        <dd>
          <table>
            <tbody>
              <tr>
                <th colspan="2">강좌명</th>
                <th>수강기간</th>
                <th>수강금액</th>
                <th>진도율</th>
              </tr>
              <tr>
                <td class="first" colspan="2">장영희 전공중국어-80점 도약 모의고사반</td>
                <td>20.12.31~21.03.10</td>
                <td>0원</td>
                <td>16%</td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>
    </div>
    <div class="winText">
      <span>상기인은 (주) 케이지에듀원의 강좌를 수강하였으므로 이를 증명함</span><br/>
      <span class="date">2022년 3월 18일</span><br/>
      <strong class="KG">(주) 케이지에듀원</strong>
    </div>
    <div class="winBtn">
      <button class="btnL line">취소</button>
      <button class="btnL" @click="naviPopupTrigger01 = true">인쇄</button>
    </div>

    <!--즐겨찾기 삭제 -->
    <Alert v-if='naviPopupTrigger01' @close="naviPopupTrigger01 = false" class="printSetting">
      <template slot="modalbody">
        <p>인쇄제어 컴포넌트가 설치되어 있지 않습니다. <br/>컴포넌트를 설치하지 않을 경우 페이지가 올바르게 인쇄되지 않을 수 있습니다. <br/>다운로드 받으셔서 설치하시기 바랍니다.</p>
        <button @click="naviPopupTrigger01 = false">다운로드</button>
      </template>
      <template slot="modalfooter"></template>
    </Alert>
    <!-- //즐겨찾기 삭제 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LecCompletion',
  data() {
    return {
      naviPopupTrigger01:true
    }
  },
  components: {
  }
}
</script>
