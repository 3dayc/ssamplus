<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="myReviewWrite">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>후기 작성</h3>
            <div class="summeryTxt">
              강좌 종료 7일 전 ~ 종료 후 30일까지 수강후기 작성이 가능하며 그 외 상품은 구매 후 30일 이내에 작성이 가능합니다.
            </div>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 상세 -->
          <div class="boardDetail write">
            <!-- 내용영역 -->
            <div class="reviewKind">
              <em>교육학 김현</em> <strong>키위 교육학 (실전)</strong>
            </div>
            <div class="box">
              <input type="text" placeholder="제목을 입력해 주세요." value="처음으로 도전하는 임용에 선생님의 많은 응원과 가르침이 있었습니다.">
            </div>
            <div class="box">
              <textarea>내용이 들어갈 자리</textarea>
            </div>
            <div class="box">
              <span class="uploadFile verM">
                <!-- <em>첨부파일</em> -->
                <span>
                  <input type="file" id="fileUpload"/>
                  <label for="fileUpload">+ 파일첨부</label>
                </span>
                <i class="fRed">※ 첨부파일은 최대 2개까지로 압축파일(zip)은 첨부할 수 없습니다</i>
              </span>
              <ul class="uploadFileList mt10">
                <li>
                  <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                    <button class="btnDelete">삭제</button>
                  </span>
                </li>
              </ul>
            </div>
            <!-- //내용영역 -->
            <!-- 상세 버튼영역 -->
            <div class="boardBtn">
              <router-link to="/mkup/mypage/myreview/" class="btnL line">취소</router-link>
              <router-link to="/mkup/mypage/myreview/view" class="btnL">확인</router-link>
            </div>
            <!-- //상세 버튼영역 -->
          </div>
          <!-- //상세 -->
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
  name: 'MyReviewWrite',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
