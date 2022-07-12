<template lang="html">
  <div>
    <div class="pageTit">
      <h2>학습Q&amp;A</h2>
      <span><router-link to="/mkup/teacher/studentOnline">강좌/수강생</router-link><router-link to="/mkup/teacher/studentOnline">수강생 지원</router-link><em>학습Q&amp;A</em></span>
    </div>

    <div class="content">
    <article>
      <!-- page layout -->
      <div class="learning"><!-- class 없어도 유지 -->
        <!-- 검색 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <input type="text" placeholder="제목으로 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
        </div>
        <!-- //검색 -->
        <!-- 리스트 써머리 -->
        <div class="listSummery">
          <div class="left">
            <strong>회원 개인정보 표출</strong>
            <span class="toggleSet">
              <input type="checkbox" id="push" />
              <label for="push"></label>
            </span>
          </div>
        </div>
        <!-- //리스트 써머리 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="100">
              <col width="100">
              <col width="400">
              <col width="500">
              <col width="100">
              <col width="120">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">상태</th>
                <th scope="col">과목/선생님</th>
                <th scope="col">강좌</th>
                <th scope="col">제목</th>
                <th scope="col">작성일</th>
                <th scope="col">작성자</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr class="waited"> <!-- 대기중 상태일 시 waited 클래스 추가 -->
                <td>대기 중</td>
                <td>교육학<br/>김현</td>
                <td class="tL">[21 3~4월] <em class="iSet hotpink">프리미엄</em><br/>상반기 쌤팩(문학)</td>
                <td class="tL"><router-link to="/mkup/teacher/learning/write">정답을 적을 답지는 없나요?</router-link></td>
                <td>2021-05-25</td>
                <td>김*민<br/>(jim******)</td>
              </tr>
              <!--//Loop-->
              <tr class="waited">
                <td>대기 중</td>
                <td>중국어<br/>장영희</td>
                <td class="tL">[21 3~4월]<br/>상반기 썜팩(국어교육론)</td>
                <td class="tL"><router-link to="/mkup/teacher/learning/write">온라인 모의고사 신청한 사람입니다.</router-link></td>
                <td>2021-05-20</td>
                <td>홍*동<br/>(jim******)</td>
              </tr>
              <tr class="waited">
                <td>대기 중</td>
                <td>국어<br/>박노송</td>
                <td class="tL">[21 3~4월] <em class="iSet yellow">제작중</em><br/>국어교육론 실전대비과정3</td>
                <td class="tL"><router-link to="/mkup/teacher/learning/view">변산도지수와 첨도에 관련한 체크포인트 첨도에 관련한 체크</router-link></td>
                <td>2021-05-19</td>
                <td>김*정<br/>(jim******)</td>
              </tr>
              <tr class="waited">
                <td>대기 중</td>
                <td>교육학<br/>김이안</td>
                <td class="tL">[21 3~4월] <em class="iSet orange">제작완료</em><br/>국어교육론 실전대비과정2</td>
                <td class="tL"><router-link to="/mkup/teacher/learning/view">통합모의고사 역학문제풀이  관련 질문사항이 있습니다.</router-link></td>
                <td>2021-04-05</td>
                <td>jim******</td>
              </tr>
              <tr class="waited">
                <td>대기 중</td>
                <td>수학<br/>홍길동</td>
                <td class="tL">[21 3~4월] <em class="iSet yellow">제작중</em><br/>국어교육론 실전대비과정1</td>
                <td class="tL"><router-link to="/mkup/teacher/learning/view">정답을 적을 답지는 없나요?</router-link></td>
                <td>2021-05-13</td>
                <td>강*민<br/>(jim******)</td>
              </tr>
              <tr>
                <td>답변 완료</td>
                <td>역사<br/>이순권</td>
                <td class="tL">[21 3~4월] <em class="iSet orange">제작완료</em><br/>문학 실전대비과정3</td>
                <td class="tL"><router-link to="/mkup/teacher/learning/view">통합모의고사 역학문제풀이  관련 질문사항이 있습니다.</router-link></td>
                <td>2021-05-10</td>
                <td>jim******</td>
              </tr>
              <tr>
                <td>답변 완료</td>
                <td>수학<br/>안후상</td>
                <td class="tL">[21 3~4월] <em class="iSet yellow">제작중</em><br/>문학 실전대비과정2</td>
                <td class="tL"><router-link to="/mkup/teacher/learning/view">변산도지수와 첨도에 관련한 체크포인트 첨도에 관련한 체크…</router-link></td>
                <td>2021-04-30</td>
                <td>강*민<br/>(jim******)</td>
              </tr>
              <tr>
                <td>답변 완료</td>
                <td>미술<br/>김길동</td>
                <td class="tL">[21 3~4월] <em class="iSet yellow">제작중</em><br/>문학 실전대비과정1</td>
                <td class="tL"><router-link to="/mkup/teacher/learning/view">변산도지수와 첨도에 관련한 체크포인트 첨도에 관련한 체크…</router-link></td>
                <td>2021-04-30</td>
                <td>강*민<br/>(jim******)</td>
              </tr>
              <tr>
                <td>답변 완료</td>
                <td>영어<br/>차미아</td>
                <td class="tL">[21 3~4월] <em class="iSet yellow">제작중</em><br/>문학 실전대비과정1</td>
                <td class="tL"><router-link to="/mkup/teacher/learning/view">정답을 적을 답지는 없나요?</router-link></td>
                <td>2021-04-30</td>
                <td>강*민<br/>(jim******)</td>
              </tr>
              <tr>
                <td>답변 완료</td>
                <td>국어<br/>박노송</td>
                <td class="tL">[21 3~4월] <em class="iSet yellow">제작중</em><br/>문학 실전대비과정1</td>
                <td class="tL"><router-link to="/mkup/teacher/learning/view">온라인 모의고사 신청한 사람입니다.</router-link></td>
                <td>2021-04-30</td>
                <td>강*민<br/>(jim******)</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <Paginate />
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
  name: 'Learning',
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
