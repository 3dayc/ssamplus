<template lang="html">
  <div class="replyBoard">
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <span class="frontTooltip">
          <em>ⓘ Front</em>
          <span>- 마이페이지 1:1 게시판상담 > 본인 문의 표시</span>
        </span>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">상태</option>
                  <option value="">대기 중</option>
                  <option value="">답변 완료</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">중분류</option>
                  <option value="">회원/로그인</option>
                  <option value="">사이트 오류</option>
                  <option value="">교재/학습자료</option>
                  <option value="">강좌 관련</option>
                  <option value="">결제/환불</option>
                  <option value="">학원(직강)</option>
                  <option value="">기타/건의사항</option>
                  <option value="">희소모의고사</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">소분류</option>
                  <option value="">회원/로그인</option>
                  <option value="">사이트 오류</option>
                  <option value="">교재/학습자료</option>
                  <option value="">강좌 관련</option>
                  <option value="">결제/환불</option>
                  <option value="">학원(직강)</option>
                  <option value="">기타/건의사항</option>
                  <option value="">희소모의고사</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <input type="text" placeholder="이름, 아이디, 제목 검색" />
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <div>
            <button class="btnRefresh">초기화</button>
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
    <div class="tls">
      <table>
        <colgroup>
          <col width="80">
          <col width="100">
          <col width="100">
          <col width="450">
          <col width="80">
          <col width="100">
          <col width="110">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">상태</th>
            <th scope="col">중분류</th>
            <th scope="col">소분류</th>
            <th scope="col">제목</th>
            <th scope="col">SMS</th>
            <th scope="col">작성일</th>
            <th scope="col">작성자</th>
          </tr>
        </thead>
        <tbody>
          <!--Loop-->
          <tr class="waited">
            <td>대기 중</td>
            <td>강의수강불편</td>
            <td>강사/강의 내용 불만</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/refund">크롬에서 로그인이 안 됩니다.</router-link></td>
            <td>●</td>
            <td>2021-05-25</td>
            <td class="fPink">김*민<br/>(jim******)</td>
          </tr>
          <!--//Loop-->
          <tr class="waited">
            <td>대기 중</td>
            <td>강의수강불편</td>
            <td>수강료 불만</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/refund">결제 취소는 어떻게 하는 거죠?</router-link></td>
            <td></td>
            <td>2021-05-20</td>
            <td>홍*동<br/>(jim******)</td>
          </tr>
          <tr class="waited">
            <td>대기 중</td>
            <td>강의수강불편</td>
            <td>강의재생/화질/음질 불만</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/refund">오류가 뜹니다.</router-link></td>
            <td>●</td>
            <td>2021-05-19</td>
            <td>김*정<br/>(jim******)</td>
          </tr>
          <tr class="waited">
            <td>대기 중</td>
            <td>강의수강불편</td>
            <td>강의자료 인쇄 불만</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/refund">학원에서 직접 수강신청 하고 싶은데요 가능한지 확…</router-link></td>
            <td>●</td>
            <td>2021-05-15</td>
            <td>이*민<br/>(jim******)</td>
          </tr>
          <tr class="waited">
            <td>대기 중</td>
            <td>교재이용불편</td>
            <td>다른 경로로 교재 구매 (다른 사이트 이용)</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/refund">인쇄 횟수 추가 부탁드립니다.</router-link></td>
            <td></td>
            <td>2021-05-13</td>
            <td>강*민<br/>(jim******)</td>
          </tr>
          <tr>
            <td>답변 완료</td>
            <td>교재이용불편</td>
            <td>교재가격/배송비 불만</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/refund">동시 접속이라고 뜹니다.</router-link></td>
            <td>●</td>
            <td>2021-05-10</td>
            <td>서*민<br/>(jim******)</td>
          </tr>
          <tr>
            <td>답변 완료</td>
            <td>변경/결제</td>
            <td>직강<->인강 변경</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/refund">강좌 관련 문의드려요.</router-link></td>
            <td>●</td>
            <td>2021-04-30</td>
            <td>장*혁<br/>(jim******)</td>
          </tr>
          <tr>
            <td>답변 완료</td>
            <td>변경/결제</td>
            <td>할인, 이벤트, 쿠폰 적용 받기 위해</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/refund">회원 정보를 수정하고 싶은데 어디서 어떻게 하는걸…</router-link></td>
            <td>●</td>
            <td>2021-04-29</td>
            <td>오*현<br/>(jim******)</td>
          </tr>
          <tr>
            <td>답변 완료</td>
            <td>변경/결제</td>
            <td>결제 방법 변경 (할부, 결제방식 등)</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/refund">영수증 관련 문의 드립니다.</router-link></td>
            <td>●</td>
            <td>2021-04-29</td>
            <td>이*현<br/>(jim******)</td>
          </tr>
          <tr>
            <td>답변 완료</td>
            <td>사이트</td>
            <td>사이트 이용 불만</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/refund">동영상을 재생할 수 없다고 뜨는데 어떻게 해결하나…</router-link></td>
            <td></td>
            <td>2021-04-20</td>
            <td>주*라<br/>(jim******)</td>
          </tr>
          <!-- 데이터 없을 경우 -->
          <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'ReplyBoardRefund',
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
