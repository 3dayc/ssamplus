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
                  <option value="">확인 중</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">대분류</option>
                  <option value="">강의수강, 사이트 이용 관련</option>
                  <option value="">환불</option>
                  <option value="">기타</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">중분류</option>
                  <option value="">회원정보</option>
                  <option value="">사이트 문의</option>
                  <option value="">온라인 강의</option>
                  <option value="">학원 강의(직강)</option>
                  <option value="">교재/학습자료</option>
                  <option value="">결제</option>
                  <option value="">기타/건의사항</option>
                  <option value="">모의고사</option>
                  <option value="">설명회</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">소분류</option>
                  <option value="">회원가입/탈퇴</option>
                  <option value="">회원정보 수정</option>
                  <option value="">이용환경 / OS</option>
                  <option value="">결제오류</option>
                  <option value="">PC 재생 장애 오류</option>
                  <option value="">모바일 재생 장애 오류</option>
                  <option value="">동시접속</option>
                  <option value="">강의 이용문의</option>
                  <option value="">수강시간</option>
                  <option value="">재수강</option>
                  <option value="">인강->직강 변경</option>
                  <option value="">강의변경</option>
                  <option value="">수강확인증</option>
                  <option value="">첨삭관련 문의</option>
                  <option value="">신청/수강문의</option>
                  <option value="">보충강의</option>
                  <option value="">직강->인강변경</option>
                  <option value="">강의변경</option>
                  <option value="">첨삭관련 문의</option>
                  <option value="">교재 출간문의</option>
                  <option value="">교재 배송문의</option>
                  <option value="">교재 교환/반품</option>
                  <option value="">학습자료</option>
                  <option value="">인쇄횟수 추가</option>
                  <option value="">결제</option>
                  <option value="">할인제도/쿠폰</option>
                  <option value="">영수증</option>
                  <option value="">이벤트</option>
                  <option value="">건의사항</option>
                  <option value="">불법사용접수</option>
                  <option value="">기타</option>
                  <option value="">현장모의고사</option>
                  <option value="">온라인모의고사</option>
                  <option value="">설명회</option>
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
    <div class="tls tlsFixed">
      <table>
        <colgroup>
          <col width="110">
          <col width="110">
          <col width="110">
          <col width="*">
          <col width="60">
          <col width="110">
          <col width="120">
          <col width="80">
          <col width="80">
          <col width="110">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">대분류</th>
            <th scope="col">중분류</th>
            <th scope="col">소분류</th>
            <th scope="col">제목</th>
            <th scope="col">SMS</th>
            <th scope="col">작성일</th>
            <th scope="col">이름/아이디</th>
            <th scope="col">상태</th>
            <th scope="col">처리자</th>
            <th scope="col">답변완료일</th>
          </tr>
        </thead>
        <tbody>
          <!--Loop-->
          <tr class="waited">
            <td>강의 수강,</br>사이트 이용 관련</td>
            <td>회원정보</td>
            <td>회원가입/탈퇴</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/use" class="ellipsis02">회원 탈퇴하고 싶습니다</router-link></td>
            <td>●</td>
            <td>2021-05-25</td>
            <td class="fPink">김*민<br/>(jim******)</td>
            <td>대기 중</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <!--//Loop-->
          <tr class="waited">
            <td>강의 수강,</br>사이트 이용 관련</td>
            <td>회원정보</td>
            <td>회원정보 수정</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/use" class="ellipsis02">회원 정보를 수정하고 싶은데 어디서 어떻게 하는지 잘 모르겠습니다. 확인 부탁</router-link></td>
            <td></td>
            <td>2021-05-20</td>
            <td>홍*동<br/>(jim******)</td>
            <td>대기 중</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr class="waited">
            <td>환불</td>
            <td>강의수강 불편</td>
            <td>강사/강의</br>내용 불만</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/use" class="ellipsis02">강의 환불 부탁드려요</router-link></td>
            <td>●</td>
            <td>2021-05-19</td>
            <td>김*정<br/>(jim******)</td>
            <td>대기 중</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr class="waited">
            <td>환불</td>
            <td>강의수강 불편</td>
            <td>수강료 불만</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/use" class="ellipsis02">동기보다 제가 더 수강료가 비싸던데 왜 그런거죠?</router-link></td>
            <td>●</td>
            <td>2021-05-15</td>
            <td>이*민<br/>(jim******)</td>
            <td>확인 중</td>
            <td>홍길동</td>
            <td>-</td>
          </tr>
          <tr class="waited">
            <td>기타</td>
            <td>기타</td>
            <td>-</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/use" class="ellipsis02">인쇄 횟수 추가 부탁드립니다.</router-link></td>
            <td></td>
            <td>2021-05-13</td>
            <td class="fPink">강*민<br/>(jim******)</td>
            <td>확인 중</td>
            <td>홍길동</td>
            <td>-</td>
          </tr>
          <tr>
            <td>강의 수강,</br>사이트 이용 관련</td>
            <td>회원정보</td>
            <td>회원가입/탈퇴</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/use2" class="ellipsis02">회원 탈퇴하고 싶습니다</router-link></td>
            <td>●</td>
            <td>2021-05-10</td>
            <td>서*민<br/>(jim******)</td>
            <td>답변 완료</td>
            <td>홍길동</td>
            <td>2021-05-10</td>
          </tr>
          <tr>
            <td>강의 수강,</br>사이트 이용 관련</td>
            <td>회원정보</td>
            <td>회원정보 수정</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/use2" class="ellipsis02">회원 정보를 수정하고 싶은데 어디서 어떻게 하는지 잘 모르겠습니다. 확인 부탁</router-link></td>
            <td>●</td>
            <td>2021-04-30</td>
            <td>장*혁<br/>(jim******)</td>
            <td>답변 완료</td>
            <td>홍길동</td>
            <td>2021-04-30</td>
          </tr>
          <tr>
            <td>환불</td>
            <td>강의수강 불편</td>
            <td>강사/강의</br>내용 불만</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/use2" class="ellipsis02">강의 환불 부탁드려요</router-link></td>
            <td>●</td>
            <td>2021-04-29</td>
            <td class="fPink">오*현<br/>(jim******)</td>
            <td>답변 완료</td>
            <td>홍길동</td>
            <td>2021-04-29</td>
          </tr>
          <tr>
            <td>환불</td>
            <td>강의수강 불편</td>
            <td>수강료 불만</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/use2" class="ellipsis02">동기보다 제가 더 수강료가 비싸던데 왜 그런거죠?</router-link></td>
            <td>●</td>
            <td>2021-04-29</td>
            <td>이*현<br/>(jim******)</td>
            <td>답변 완료</td>
            <td>홍길동</td>
            <td>2021-04-29</td>
          </tr>
          <tr>
            <td>기타</td>
            <td>기타</td>
            <td>-</td>
            <td class="tL"><router-link to="/mkup/bbs/replyBoard/use2" class="ellipsis02">인쇄 횟수 추가 부탁드립니다.</router-link></td>
            <td></td>
            <td>2021-04-20</td>
            <td>주*라<br/>(jim******)</td>
            <td>답변 완료</td>
            <td>홍길동</td>
            <td>2021-04-20</td>
          </tr>
          <!-- 데이터 없을 경우 -->
          <tr style="display:none;"><td colspan="10" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'ReplyBoardUse',
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
