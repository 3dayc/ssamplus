<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>리얼적중 – 신규 등록</h1>
      <span class="supTxt">* 선생님별 리얼적중 게시물을 등록하고 수정할 수 있습니다.</span>
      <span class="btnArea">
        <router-link to="/mkup/windowPopup/bbsTeacherRealHit/view" class="btnM green">저장</router-link>
        <button class="btnM gray ml5">취소</button>
      </span>
    </div>
    <div class="winContent">
      <!---->
      <h3>
        <strong>리얼적중</strong>
        <span class="right"><em>교육학 | 윤중샘</em></span>
      </h3>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="40%"/>
            <col width="160"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <th>적중연도 <sup>필수</sup></th>
              <td>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="no" class="label">선택</option>
                  </select>
                </span>
              </td>
              <th>노출여부</th>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="">
                  <label for="">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr>
              <th>제목 <sup>필수</sup></th>
              <td colspan="3"><input type="text"/></td>
            </tr>
            <tr>
              <th>등록 방법 <sup>필수</sup></th>
              <td colspan="3">
                <span class="radioSet">
                  <input type="radio" value="registWay1" name="registWay" id="registWay1" @change="registWayTrigger($event)" checked/>
                  <label for="registWay1"><i></i>본 창 열림(Full-page)</label>
                </span>
                <span class="radioSet">
                  <input type="radio" value="registWay2" name="registWay" id="registWay2" @change="registWayTrigger($event)"/>
                  <label for="registWay2"><i></i>본 창 열림(iframe)</label>
                </span>
                <span class="radioSet">
                  <input type="radio" value="registWay3" name="registWay" id="registWay3" @change="registWayTrigger($event)"/>
                  <label for="registWay3"><i></i>에디터 등록</label>
                </span>
                <div class="mt10">
                  <template v-if="registWay == 'registWay1'">
                    <div class="urlSet">
                      <span>http://ssamplus.com/</span>
                      <input type="text" placeholder="url path 입력"/>
                    </div>
                  </template>
                  <template v-if="registWay == 'registWay2'">
                    <div class="urlSet">
                      <span>http://ssamplus.com/</span>
                      <input type="text" placeholder="url path 입력"/>
                    </div>
                  </template>
                  <template v-if="registWay == 'registWay3'">
                    <textarea class="wFull h10">
                      에디터가 나올 영역입니다
                    </textarea>
                  </template>
                </div>
              </td>
            </tr>
            <template v-if="registWay == 'registWay3'">
              <tr>
                <th>파일첨부</th>
                <td colspan="3">
                  <button class="btnS line">+ 파일추가</button>
                  <!-- <ul class="fileList writeCase">
                    <li><span><a href="#" download>선생님이벤트1.pdf</a><button class="btnDelete ml5">삭제</button></span></li>
                  </ul> -->
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--//-->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'BbsTeacherRealHitWrite',
  data() {
    return {
      registWay: 'registWay1',
      registWayTrigger(event) {
        let optionText = event.target.value;
        this.registWay = optionText;
      },
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
