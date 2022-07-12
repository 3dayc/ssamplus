<template lang="html">
  <div>
    <div class="pageTit">
			<h2>자주 하는 질문</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><router-link to="/mkup/bbs/infoFaq">자주 하는 질문</router-link><em>신규등록</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoFaqWrite">
        <!-- 설정 -->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/infoFaq/view" class="btnM green">저장</router-link>
            <router-link to="/mkup/bbs/infoFaq" class="btnM ml10">취소</router-link>
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
                      <option value="">초시생</option>
                      <option value="">강의수강/신청</option>
                      <option value="">교재/학습자료</option>
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
                      <option value="">교재배송</option>
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
                    <input type="checkbox" id="push1">
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
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
                <td><input type="text"/></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td>
                  <textarea class="wFull h10">
                    에디터가 나올 영역입니다
                  </textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //내용 -->
      </div>
      <!-- //page layout -->
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'InfoFaqWrite',
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
