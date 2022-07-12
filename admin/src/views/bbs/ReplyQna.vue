<template lang="html">
  <div>
    <div class="pageTit">
			<h2>학습Q&amp;A</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><em>학습Q&amp;A</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="replyQna">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <span class="frontTooltip">
              <em>ⓘ Front</em>
              <span>- 내 강의실 학습 Q&A > 전체 표시</span>
            </span>
          </div>
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">상태</option>
                      <option value="">대기중</option>
                      <option value="">답변 완료</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">과목</option>
                      <option value="">교육학</option>
                      <option value="">논술면접</option>
                      <option value="">한국사</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">선생님</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="이름, 아이디, 제목, 강좌 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 목록써머리 -->
        <div class="listSummery">
          <div class="left">
            <strong>회원 개인정보 표출</strong>
            <span class="toggleSet">
              <input type="checkbox" id="push" />
              <label for="push"><!--적용여부--></label>
            </span>
          </div>
        </div>
        <!-- //목록써머리 -->
        <!-- 테이블 목록 -->
        <div class="tls tlsFixed">
          <table>
            <colgroup>
              <col width="80">
              <col width="140">
              <col width="200">
              <col width="350">
              <col width="120">
              <col width="150">
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
              <tr class="waited">
                <td>대기 중</td>
                <td>교육학<br/>김현</td>
                <td class="tL"><p class="ellipsis01">[21 3~4월]<em class="iSet yellow">제작중</em><br/>국어교육론 실전대비과정3</p></td>
                <td class="tL"><router-link to="/mkup/bbs/replyQna/write" class="ellipsis01">정답을 적을 답지는 없나요?</router-link></td>
                <td>2021-05-25</td>
                <td>김*민<br/>(jim******)</td>
              </tr>
              <!--//Loop-->
              <tr class="waited">
                <td>대기 중</td>
                <td>중국어<br/>장영희</td>
                <td class="tL"><p class="ellipsis01">[21 3~4월]<em class="iSet orange">제작완료</em><br/>국어교육론 실전대비과정2</p></td>
                <td class="tL"><router-link to="/mkup/bbs/replyQna/write" class="ellipsis01">온라인 모의고사 신청한 사람입니다.</router-link></td>
                <td>2021-05-20</td>
                <td>홍*동<br/>(jim******)</td>
              </tr>
              <tr class="waited">
                <td>대기 중</td>
                <td>국어<br/>박노송</td>
                <td class="tL"><p class="ellipsis01">[21 3~4월]<em class="iSet yellow">제작중</em><br/>국어교육론 실전대비과정3</p></td>
                <td class="tL"><router-link to="/mkup/bbs/replyQna/write" class="ellipsis01">변산도지수와 첨도에 관련한 체크포인트 첨도에 관련한 체크</router-link></td>
                <td>2021-05-19</td>
                <td>김*정<br/>(jim******)</td>
              </tr>
              <tr class="waited">
                <td>대기 중</td>
                <td>교육학<br/>김이안</td>
                <td class="tL"><p class="ellipsis01">[21 3~4월]<em class="iSet orange">제작완료</em><br/>국어교육론 실전대비과정2</p></td>
                <td class="tL"><router-link to="/mkup/bbs/replyQna/write" class="ellipsis01">통합모의고사 역학문제풀이 관련 질문사통합모의고사 역학</router-link></td>
                <td>2021-05-15</td>
                <td>이*민<br/>(jim******)</td>
              </tr>
              <tr class="waited">
                <td>대기 중</td>
                <td>수학<br/>홍길동</td>
                <td class="tL"><p class="ellipsis01">[21 3~4월]<em class="iSet yellow">제작중</em><br/>국어교육론 실전대비과정1</p></td>
                <td class="tL"><router-link to="/mkup/bbs/replyQna/write" class="ellipsis01">정답을 적을 답지는 없나요?</router-link></td>
                <td>2021-05-13</td>
                <td>강*민<br/>(jim******)</td>
              </tr>
              <tr>
                <td>답변 완료</td>
                <td>역사<br/>이순권</td>
                <td class="tL"><p class="ellipsis01">[21 3~4월]<em class="iSet orange">제작완료</em><br/>문학 실전대비과정3</p></td>
                <td class="tL"><router-link to="/mkup/bbs/replyQna/view" class="ellipsis01">온라인 모의고사 신청한 사람입니다.</router-link></td>
                <td>2021-05-10</td>
                <td>서*민<br/>(jim******)</td>
              </tr>
              <tr>
                <td>답변 완료</td>
                <td>수학<br/>안후상</td>
                <td class="tL"><p class="ellipsis01">[21 3~4월]<em class="iSet yellow">제작중</em><br/>문학 실전대비과정2</p></td>
                <td class="tL"><router-link to="/mkup/bbs/replyQna/view" class="ellipsis01">변산도지수와 첨도에 관련한 체크포인트 첨도에 관련한 체크</router-link></td>
                <td>2021-04-30</td>
                <td>장*혁<br/>(jim******)</td>
              </tr>
              <tr>
                <td>답변 완료</td>
                <td>미술<br/>김길동</td>
                <td class="tL"><p class="ellipsis01">[21 3~4월]<em class="iSet orange">제작완료</em><br/>문학 실전대비과정1</p></td>
                <td class="tL"><router-link to="/mkup/bbs/replyQna/view" class="ellipsis01">통합모의고사 역학문제풀이 관련 질문사통합모의고사 역학</router-link></td>
                <td>2021-04-29</td>
                <td>오*현<br/>(jim******)</td>
              </tr>
              <tr>
                <td>답변 완료</td>
                <td>영어<br/>차미아</td>
                <td class="tL"><p class="ellipsis01">[21 1~2월]<em class="iSet yellow">제작중</em><br/>국어교육론 실전대비과정1</p></td>
                <td class="tL"><router-link to="/mkup/bbs/replyQna/view" class="ellipsis01">정답을 적을 답지는 없나요?</router-link></td>
                <td>2021-04-29</td>
                <td>이*현<br/>(jim******)</td>
              </tr>
              <tr>
                <td>답변 완료</td>
                <td>국어<br/>박노송</td>
                <td class="tL"><p class="ellipsis01">[21 1~2월]<em class="iSet orange">제작완료</em><br/>국어교육론 실전대비과정과</p></td>
                <td class="tL"><router-link to="/mkup/bbs/replyQna/view" class="ellipsis01">온라인 모의고사 신청한 사람입니다.</router-link></td>
                <td>2021-04-20</td>
                <td>주*라<br/>(jim******)</td>
              </tr>
              <!--//Loop-->
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <Paginate />
        <!-- //테이블 목록 -->
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
  name: 'ReplyQna',
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
