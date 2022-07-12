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
        <div class="programInstall">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>필수 프로그램 설치</h3>
          </div>
          <!-- //서브 타이틀 -->
          <div class="installArea">
            <div>
              <!---->
              <span class="programSet program01" v-if="!this.mobile">
                <span>
                  <strong>존 플레이어</strong>
                  <em>동영상 재생을 위한 기본 설치 파일</em>
                  <a href="http://www.ssamplus.com/zoneplayer/site/basic25/download/setup.exe" target="_blank" class="btnInstall">다운로드</a>
                </span>
              </span>
              <span class="programSet program02">
                <span>
                  <strong>EzPDF Reader</strong>
                  <em>인쇄를 위한 기본 설치 파일</em>
                  <a href="http://www.ssamplus.com/myLec/classroom_new/pds/ezPDF/ezPDFReader_3.1.0.58_setup_KGPASSONE.zip" target="_blank" class="btnInstall">다운로드</a>
                </span>
              </span>
              <span class="programSet program03">
                <span>
                  <strong>이니페이</strong>
                  <em>결제를 위한 기본 설치 파일</em>
                  <a href="http://www.ssamplus.com/vod_help/appendix/INIpayWizard_pay.exe" target="_blank" class="btnInstall">다운로드</a>
                </span>
              </span>
              <!---->
            </div>
            <div class="line2">
              <h4>자료방 첨부파일을 보기 위한 프로그램</h4>
              <!---->
              <span class="programSet program04">
                <span>
                  <strong>한글 뷰어</strong>
                  <a href="https://www.hancom.com/cs_center/csDownload.do" target="_blank" class="btnInstall">다운로드</a>
                </span>
              </span>
              <span class="programSet program05">
                <span>
                  <strong>MS 워드 뷰어</strong>
                  <a href="https://support.microsoft.com/ko-kr/office/microsoft-office-word-viewer-b1772025-1ce0-4a66-ade9-154303e2a3ca" target="_blank" class="btnInstall">다운로드</a>
                </span>
              </span>
              <span class="programSet program06">
                <span>
                  <strong>아크로벳 리더 11.0</strong>
                  <a href="https://get.adobe.com/kr/reader/otherversions/" target="_blank" class="btnInstall">다운로드</a>
                </span>
              </span>
              <!---->
            </div>
          </div>
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
  name: 'ProgramInstall',
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
