<template lang="html">
  <div>
    <div class="pageTit">
			<h2>임용칼럼</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><router-link to="/mkup/bbs/infoColumn">임용칼럼</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoColumnView">
        <!-- 설정 -->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/infoColumn" class="btnList">목록으로</router-link>
            <router-link to="/mkup/bbs/infoColumn/view" class="btnM green ml10">저장</router-link>
            <button class="btnM line ml10" @click="alertDelete = true">삭제</button>
          </span>
        </div>
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
                <th>리스트 이미지 <sup>필수</sup></th>
                <td>
                  <span class="uploadMulty">
                    <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" style="display:none;"/><em>등록된 이미지가 없습니다.</em></span>
                    <span class="fileChoice" v-show="showFileChoice">
                      <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                      <em>* 권장 이미지 사이즈: 540 X 370</em>
                    </span>
                    <span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete">삭제</button></span>
                  </span>
                </td>
                <th>노출 여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1" checked>
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //설정 -->
        <!-- 내용 -->
        <div class="subTit"><h3>내용</h3></div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>해시태그</th>
                <td>
                  <input type="text" class="w33p"/>
                  <button class="btnS line ml10">추가</button>
                  <div class="selectCase mt10">
                    <span class="saveBox"><input type="checkbox" checked id="quick1"><label for="quick1">임용필수체크</label><button>닫기</button></span>
                    <span class="saveBox"><input type="checkbox" checked id="quick2"><label for="quick2">초시생</label><button>닫기</button></span>
                    <span class="saveBox"><input type="checkbox" checked id="quick3"><label for="quick3">준비물</label><button>닫기</button></span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>제목 <sup>필수</sup></th>
                <td><input type="text" value="쌤플러스가 정리한 연간 학습전략 가이드"/></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td>
                  <textarea class="wFull h10">
                    임용칼럼 내용 임용칼럼 내용임용 칼럼 내용 임용칼럼 내용임용칼럼 내용 임용칼럼 내용임용 칼럼 내용 임용칼럼 내용 임용칼럼 내용 임용칼럼 내용임용 칼럼
                    내용 임용칼럼 내용 임용칼럼 내용 임용칼럼 내용임용 칼럼 내용 임용칼럼 내용 임용칼럼 내용 임용칼럼 내용임용 칼럼 내용 임용칼럼 내용
                    임용칼럼 내용 임용칼럼 내용임용 칼럼 내용 임용칼럼 내용임용칼럼 내용 임용칼럼 내용임용 칼럼 내용 임용칼럼 내용 임용칼럼 내용 임용칼럼 내용임용 칼럼
                  </textarea>
                </td>
              </tr>
              <tr>
                <th>파일첨부</th>
                <td><button class="btnS line">+ 파일추가</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //내용 -->
        <!-- 댓글 -->
        <div class="subTit"><h3>댓글</h3></div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="120"/>
              <col width="130"/>
              <col width="*"/>
              <col width="100"/>
              <col width="80"/>
            </colgroup>
            <thead>
              <tr>
                <th>작성일</th>
                <th>아이디</th>
                <th>내용</th>
                <th>댓글</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2021-06-01</td>
                <td>jin*****</td>
                <td class="tL">8번 문제 답 수정되어야 하는 거 아닐까요? 논술형은 없어진 것으로 알고 있습니다.</td>
                <td><button class="btnS line">답글</button></td>
                <td><button class="btnDelete">삭제</button></td>
              </tr>
              <tr class="finish"><!-- 20210715 class 변경 -->
                <td>2021-06-02</td>
                <td>쌤플러스</td>
                <td class="tL"><textarea rows="2">안녕하세요. 교사의 꿈을 위한 수험동반자, KG에듀원 교원임용 희소/ 쌤플러스입니다. 수험생 분의 합격을 기원합니다.</textarea></td>
                <td><button class="btnS line">등록</button></td>
                <td><button class="btnDelete">삭제</button></td>
              </tr>
              <tr>
                <td>2021-05-30</td>
                <td>Hon*****</td>
                <td class="tL">정보 감사합니다.</td>
                <td></td>
                <td><button class="btnDelete">삭제</button></td>
              </tr>
              <tr class="finish"><!-- 20210715 class 변경 -->
                <td>2021-05-31</td>
                <td>쌤플러스</td>
                <td class="tL">안녕하세요. 교사의 꿈을 위한 수험동반자, KG에듀원 교원임용 희소/ 쌤플러스입니다. 더 좋은 정보로 찾아오겠습니다. 감사합니다.</td>
                <td><button class="btnS line">수정</button></td>
                <td><button class="btnDelete">삭제</button></td>
              </tr>
              <tr>
                <td>2021-05-30</td>
                <td>jon*****</td>
                <td class="tL">잘 보고 갑니다.</td>
                <td></td>
                <td><button class="btnDelete">삭제</button></td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="5" class="noneData">등록된 댓글 없음</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <!-- //댓글 -->
        <!-- 관리 -->
        <div class="subTit"><h3>관리</h3></div>
        <div class="tvs record">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>수정 이력</th>
                <td>
                  <ul class="recordList">
                    <li><strong>[2021-02-15 14:25  / 박미진(mjpark111) ]</strong> 댓글 등록 </li>
                    <li><strong>[2021-02-15 14:25  / 홍길동(mjpark111) ]</strong> 노출여부 변경 </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //관리 -->
        <!-- front URL -->
        <div class="frontUrlInfo mt20">Front URL : <a href="https://ssamplus.com/column/123456" target="_blank">https://ssamplus.com/column/123456</a></div>
        <!-- //front URL -->
      </div>
      <!-- //page layout -->
    </article>
    </div>

    <!-- Popup -->
  	<!-- 삭제 확인 -->
  	<Alert v-if='alertDelete' @close="alertDelete = false">
  		<div slot="modalbody">해당 정보를 삭제합니다.<br/>실행 하시겠습니까?</div>
  		<div slot="modalfooter" class="modalfooter">
  			<button class="btnM gray" @click="alertDelete = false">취소</button>
        <router-link to="/mkup/bbs/infoColumn" class="btnM green">삭제</router-link>
  		</div>
  	</Alert>
  	<!-- //삭제 확인 -->
  	<!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'InfoColumnView',
  data() {
    return {
      showFileChoice: true,
      showFileModify: false,
      alertDelete: false,
    }
  },
  methods: {
    fileUpload(event) {
      this.fileName = event.target.value;
    }, // 파일 업로드
    uploadMulty(event) {
      this.multyFuleName = event.target.value;
      this.showFileChoice = false;
      this.showFileModify = true;
    }, // 파일 업로드2
  },
  components: {
  }
}
</script>
