<template lang="html">
  <div class="infoExamNews">
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <span class="frontTooltip">
          <em>ⓘ Front</em>
          <span>- 시험정보 교육계 소식 > 노출 건 표시</span>
        </span>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <input type="text" placeholder="출처, 제목 검색" />
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <div>
            <button class="btnRefresh">초기화</button>
          </div>
        </div>
      </div>
      <div class="right-po">
        <router-link to="/mkup/bbs/infoExam/newsWrite" class="btnAdd">신규등록</router-link>
      </div>
    </div>
    <!-- //테이블 유틸 -->
    <!-- 목록써머리 -->
    <div class="listSummery">
      <div class="left">
        <span class="checkSet">
          <input type="checkbox" checked/>
          <label for=""><i></i>노출 허용으로 설정된 정보 조회</label>
        </span>
      </div>
    </div>
    <!-- //목록써머리 -->
    <!-- 테이블 목록 -->
    <div class="tls">
      <table>
        <colgroup>
          <col width="100">
          <col width="120">
          <col width="*">
          <col width="100">
          <col width="120">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">노출 여부</th>
            <th scope="col">출처</th>
            <th scope="col">제목</th>
            <th scope="col">조회수</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <tbody>
          <!--Loop-->
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push1" checked/>
                <label for="push1">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>충청 투데이</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/news">‘콩나물시루’ 초등학교 과밀학급 쪼개기 시급하다</router-link></td>
            <td>1,500</td>
            <td>2021-05-25</td>
          </tr>
          <!--//Loop-->
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push2"/>
                <label for="push2">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>아주경제</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/news">학급당 학생수 20명 이하로 법제화 필요</router-link></td>
            <td>32</td>
            <td>2021-05-20</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push3" checked/>
                <label for="push3">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>연합뉴스</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExamTest/view">유치원 교사 77% “학급당 적정 유아 수 16명 이하＂</router-link></td>
            <td>1</td>
            <td>2021-05-19</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push4" />
                <label for="push4">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>에듀프레스</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExamTest/view">학생수 많은 학교에 보건교사 2명이상 배치</router-link></td>
            <td>333</td>
            <td>2021-05-15</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push5" checked/>
                <label for="push5">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>파이낸셜뉴스</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExamTest/view">아동학대범죄자 교원임요에서 배제된다</router-link></td>
            <td>1,500</td>
            <td>2021-05-13</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push6" checked/>
                <label for="push6">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>매일신문</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExamTest/view">서울 교사 80% “교원성과급 공정하지 못하다“ 교사노조 설문</router-link></td>
            <td>32</td>
            <td>2021-05-10</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push7" checked/>
                <label for="push7">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>오마이뉴스</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExamTest/view">‘콩나물시루’ 초등학교 과밀학급 쪼개기 시급하다</router-link></td>
            <td>1</td>
            <td>2021-04-30</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push8" checked/>
                <label for="push8">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>위키트리</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExamTest/view">학급당 학생수 20명 이하로 법제화 필요</router-link></td>
            <td>333</td>
            <td>2021-04-29</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push9" checked/>
                <label for="push9">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>에듀프레스</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExamTest/view">유치원 교사 77% “학급당 적정 유아 수 16명 이하＂</router-link></td>
            <td>1,500</td>
            <td>2021-04-29</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push10" checked/>
                <label for="push10">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>전라북도교육청</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExamTest/view">학생수 많은 학교에 보건교사 2명이상 배치</router-link></td>
            <td>32</td>
            <td>2021-04-20</td>
          </tr>
          <!-- 데이터 없을 경우 -->
          <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
          <!-- //데이터 없을 경우 -->
        </tbody>
      </table>
    </div>
    <Paginate />
    <!-- //테이블 목록 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'InfoExamNews',
  data(){
    return {
    }
  }
}
</script>

<style lang="css" scoped>
</style>
