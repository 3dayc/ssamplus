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
        <div class="premiumCounselWrite">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>프리미엄 회원상담</h3>
            <div class="summeryTxt">프리미엄 회원전담 상담사가 답변을 드립니다.</div>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 상세등록-->
          <div class="boardDetail write">
            <!-- 내용영역 -->
            <div class="box">
              <input type="text" placeholder="제목을 입력해 주세요.">
            </div>
            <div class="box">
              <textarea></textarea>
            </div>
            <div class="box">
              <span class="uploadFile verM">
                <!-- <em>첨부파일</em> -->
                <span>
                  <input type="file" id="fileUpload"/>
                  <label for="fileUpload">+ 파일첨부</label>
                </span>
                <i class="fRed">※ 첨부파일은 최대 5개까지로 압축파일(zip)은 첨부할 수 없습니다</i>
              </span>
              <ul class="uploadFileList mt10">
                <li>
                  <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                    <button class="btnDelete">삭제</button>
                  </span>
                </li>
                <li>
                  <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                    <button class="btnDelete">삭제</button>
                  </span>
                </li>
              </ul>
            </div>
            <div class="box checkSetArea">
              <span class="checkSet">
                <input type="checkbox" id="chk01" />
                <label for="chk01"><i></i>SMS 알림 받기 (답변완료 여부를 문자메시지로 알려드립니다)</label>
              </span>
            </div>
            <!-- //내용영역 -->
            <!-- 상세 버튼영역 -->
            <div class="boardBtn">
              <router-link to="/mkup/mylec/premium/counsel" class="btnL line">취소</router-link>
              <router-link to="/mkup/mylec/premium/counsel/view/wait" class="btnL">상담신청</router-link>
            </div>
            <!-- //상세 버튼영역 -->
          </div>
          <!-- //상세등록 -->
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
  name: 'PremiumCounselWrite',
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
