<template lang="html">
  <div>
    <div class="pageTit">
			<h2>자주 하는 질문</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><router-link to="/mkup/bbs/infoFaq">자주 하는 질문</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoFaqView">
        <!-- 설정 -->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/infoFaq" class="btnList">목록으로</router-link>
            <button class="btnM green ml10">저장</button>
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
                <th>질문 유형 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">대분류</option>
                      <option value="">강의수강/신청</option>
                      <option value="" selected>교재/학습자료</option>
                      <option value="">결제/환불</option>
                      <option value="">사이트이용/오류</option>
                      <option value="">모바일</option>
                    </select>
                  </span>
                  <span class="selectSet ml10">
                    <select name="" id="">
                      <option value="no" class="label">중분류</option>
                      <option value="">패키지강의</option>
                      <option value="">온라인강의</option>
                      <option value="">학원강의</option>
                      <option value="">보너스강의</option>
                      <option value="">연장/홀딩</option>
                      <option value="">교재구매</option>
                      <option value="" selected>교재배송</option>
                      <option value="">학습자료</option>
                      <option value="">결제</option>
                      <option value="">환불</option>
                      <option value="">회원정보관리</option>
                      <option value="">사이트이용</option>
                      <option value="">PC오류</option>
                      <option value="">모바일오류</option>
                      <option value="">자료오류</option>
                      <option value="">모바일</option>
                      <option value="">이용방법</option>
                      <option value="">기기/사용환경</option>
                      <option value="">데이터관련</option>
                      <option value="">강의관련</option>
                      <option value="">재생오류</option>
                      <option value="">동시접속</option>
                    </select>
                  </span>
                </td>
                <th>노출 여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="" checked>
                    <label for="">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>TOP8 <sup>필수</sup></th>
                <td colspan="3">
                  <span class="checkSet">
                    <input type="checkbox" checked/>
                    <label for=""><i></i>TOP8으로 설정</label>
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
                <th>제목 <sup>필수</sup></th>
                <td><input type="text" value="교재 구매하면 배송은 언제되나요?"/></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td>
<textarea class="wFull h10">
평일 낮 12시 이전 주문 건의 경우 당일 발송되며, 낮 12시 이후 주문 건은 다음날 발송됩니다.
금요일(공휴일 전일) 낮 12시 이후 주문 건은 월요일(공휴일 다음날)에 발송됩니다.

단, 재고가 부족한 경우 출고가 지연될 수 있는 점 미리 양해 부탁드리겠습니다.

발송 후에는 평균 1~3일 내 배송되며, 택배사 사정에 따라 배송일이 추가 소요될 수 있습니다.
배송조회는 출고일 밤부터 확인이 가능합니다.
</textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //내용 -->
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
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 댓글 등록 </li>
                    <li><strong>[2021-02-23 15:35  / 홍길동(mjpark111) ]</strong> 노출여부 변경 </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //관리 -->
        <!-- front URL -->
        <div class="frontUrlInfo mt20">Front URL : <a href="https://ssamplus.com/faq/123456" target="_blank">https://ssamplus.com/faq/123456</a></div>
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
        <router-link to="/mkup/bbs/infoFaq" class="btnM green">삭제</router-link>
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
  name: 'infoFaqView',
  data() {
    return {
      alertDelete: false,
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
