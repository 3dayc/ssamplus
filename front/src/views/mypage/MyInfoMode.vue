<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="myInfoMode">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>전공모드 관리</h3>
          </div>
          <!-- //서브 타이틀 -->
          <div class="modeSetting">
            <h4>
              전공모드 설정
              <em>※ 전공모드 사용 시에 적용될 과목을 관리함</em>
            </h4>
            <dl>
              <dt>필수로 적용되는 전공 태그 <strong># 중국어</strong></dt>
              <dd>필수 전공을 변경하려면 내 정보 확인에서 <strong>준비중인 시험</strong>을 변경하면 자동으로 등록됩니다.</dd>
              <dd>
                <span class="tagSet must"># 중국어희소중국어팀 </span>
                <span class="tagSet must"># 중국어한정은 </span>
                <span class="tagSet must"># 중국어이혜진 </span>
              </dd>
              <dt>추가로 적용되는 전공 태그</dt>
              <!-- <dd>#기호와 함께 선생님, 과목을 입력하고 <strong>Enter</strong>로 등록해 주세요. 선생님을 등록할 경우 과목이 자동으로 추가됩니다.</dd> -->
              <dd>과목과 선생님을 입력하고 추가하여 등록해 주세요.</dd>
            </dl>
            <span class="autoCom wFull tagInput">
              <!-- <input type="text" placeholder="#선생님 성명, #전공과목" /> -->
              <select>
                <option>분류선택</option>
                <option selected="selected">분류</option>
              </select>
              <select>
                <option>전공선택</option>
                <option selected="selected">전공</option>
              </select>
              <select>
                <option>선생님선택</option>
                <option selected="selected">선생님</option>
              </select>
              <button>추가</button>
            </span>
          </div>
          <div class="tagArea">
            <span class="tagSet"># 교육학김현 <button>삭제</button></span>
            <span class="tagSet"># 교육학권구현 <button>삭제</button></span>
            <span class="tagSet"># 교육학윤중샘 <button>삭제</button></span>
          </div>
          <!-- 상세 버튼영역 -->
          <div class="boardBtn noLine">
            <button class="btnL line">취소</button>
            <button class="btnL">확인</button>
          </div>
          <!-- //상세 버튼영역 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MyInfoMode',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>
