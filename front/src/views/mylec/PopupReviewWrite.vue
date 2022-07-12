<template lang="html">
  <div>
    <!-- 상세 -->
    <div class="boardDetail write">
      <!-- 내용영역 -->
      <div class="writeLecKind">
        <span>글쓰기</span>
        <em>교육학 김현</em> <strong>키위 교육학 (실전)</strong>
      </div>
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
        <ul class="uploadFileList mt10" style="display:none;">
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
    </div>
    <!-- //상세 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PopupReviewWrite',
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
