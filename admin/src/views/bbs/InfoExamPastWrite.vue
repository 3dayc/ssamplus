<template lang="html">
  <div>
    <div class="pageTit">
			<h2>기출문제</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><router-link to="/mkup/bbs/infoExam">시험정보</router-link><router-link to="/mkup/bbs/infoExam">기출문제</router-link><em>신규등록</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoExamPastWrite">
        <!-- 설정 -->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/infoExam/past" class="btnM green">저장</router-link>
            <router-link to="/mkup/bbs/infoExam" class="btnM ml10">취소</router-link>
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
                <th>노출 여부</th>
                <td colspan="3">
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1"/>
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>연도 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="">2021</option>
                      <option value="">2020</option>
                      <option value="">2019</option>
                    </select>
                  </span>
                </td>
                <th>과목 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                    </select>
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
              <tr>
                <th>파일첨부</th>
                <td>
                  <button class="btnS line">+ 파일추가</button>
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
  name: 'infoExamPastWrite',
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
