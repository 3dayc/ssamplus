<template lang="html">
  <div>
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <div class="listSearch">
          <div class="back">
            <div class="bdLine">
              <span class="lsItem">
                <input type="text" placeholder="발송시점, 메시지 내용 검색" />
                <button class="btnSearch">검색</button>
              </span>
            </div>
            <div>
              <button class="btnRefresh">초기화</button>
            </div>
          </div>
        </div>
      </div>
      <div class="right-po">
        <button class="btnAdd" @click="MsgSystemWrite()">신규등록</button>
        <button class="btnM line" @click="alertTrigger = true">삭제</button>
      </div>
    </div>
    <!-- //테이블 유틸 -->
    <!-- 테이블 목록 -->
    <div class="tls">
      <table>
        <colgroup>
          <col width="60">
          <col width="70">
          <col width="420">
          <col width="80">
          <col width="520">
          <col width="120">
          <col width="120">
        </colgroup>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">번호</th>
            <th scope="col">발송시점</th>
            <th scope="col">발송<br/>유형</th>
            <th scope="col">메시지 내용</th>
            <th scope="col">관리자</th>
            <th scope="col">등록일</th>
          </tr>
        </thead>
        <tbody>
          <!--Loop-->
          <tr>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="chk5">
                <label for="chk5"><i></i></label>
              </span>
            </td>
            <td>10</td>
            <td class="tL">
              <span class="ellipsis02">리뉴얼 후 홈페이지에 로그인 했으나 본인인증을 하지 않고 로그아웃 했을 때 발송</span>
            </td>
            <td>SMS</td>
            <td class="tL">
              <a @click="MsgSystemView()">[쌤플러스] 홈페이지 리뉴얼로 인해 인증이 필요합니다. 자세한 내용은 홈페이지의 공지사항에서 확인하세요.</a>
            </td>
            <td>박미진</td>
            <td>2021-03-22</td>
          </tr>
          <!--//Loop-->
          <tr>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="chk4">
                <label for="chk4"><i></i></label>
              </span>
            </td>
            <td>9</td>
            <td class="tL">‘아이디 찾기’ 또는 ‘비밀번호 찾기’에서  [인증] 버튼을 클릭 했을 때 발송</td>
            <td>SMS</td>
            <td class="tL"><a>[쌤+] 회원 인증번호는 {123456} 입니다.</a></td>
            <td>박미진</td>
            <td>2021-03-22</td>
          </tr>
          <tr>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="chk4">
                <label for="chk4"><i></i></label>
              </span>
            </td>
            <td>8</td>
            <td class="tL">리뉴얼 후 홈페이지에 로그인 했으나 본인인증을 하지 않고 로그아웃 했을 때 발송</td>
            <td>SMS</td>
            <td class="tL"><a>[쌤플러스] 홈페이지 리뉴얼로 인해 인증이 필요합니다. 자세한 내용은 홈페이지의 공지사항에서 확인하세요.</a></td>
            <td>박미진</td>
            <td>2021-03-22</td>
          </tr>
          <tr>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="chk4">
                <label for="chk4"><i></i></label>
              </span>
            </td>
            <td>7</td>
            <td class="tL">‘아이디 찾기’ 또는 ‘비밀번호 찾기’에서  [인증] 버튼을 클릭 했을 때 발송</td>
            <td>SMS</td>
            <td class="tL"><a>[쌤+] 회원 인증번호는 {123456} 입니다.</a></td>
            <td>박미진</td>
            <td>2021-03-22</td>
          </tr>
          <tr>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="chk4">
                <label for="chk4"><i></i></label>
              </span>
            </td>
            <td>6</td>
            <td class="tL">주문건에 대한 결제가 어드민에서 확인되어 상태값이 주문완료로 변경되었을 때 발송</td>
            <td>SMS</td>
            <td class="tL"><a>[쌤+] 결제가 정상적으로 완료되었습니다. 내 강의실>나의 주문내역에서 확인하세요.</a></td>
            <td>박미진</td>
            <td>2021-03-22</td>
          </tr>
          <tr>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="chk4">
                <label for="chk4"><i></i></label>
              </span>
            </td>
            <td>5</td>
            <td class="tL">카드결제 취소 요청에 대해  어드민에서 확인되어 상태값이 결제취소로 변경되었을 때 발송</td>
            <td>SMS</td>
            <td class="tL"><a>[희소] 카드결제가 취소되었습니다. 당일 결제가 아닌 경우 5~6일정도 소요됩니다.</a></td>
            <td>박미진</td>
            <td>2021-03-22</td>
          </tr>
          <tr>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="chk4">
                <label for="chk4"><i></i></label>
              </span>
            </td>
            <td>4</td>
            <td class="tL">해당 회원에게 보충강의가 지급되어 프론트에서 확인이 가능 할 때 발송</td>
            <td>SMS</td>
            <td class="tL"><a>[쌤플러스] {교수명}_보충강의 신청완료 {2021-00-00}까지 기간내 수강해주세요.</a></td>
            <td>박미진</td>
            <td>2021-03-22</td>
          </tr>
          <tr>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="chk4">
                <label for="chk4"><i></i></label>
              </span>
            </td>
            <td>3</td>
            <td class="tL">강좌가 연장신청이 승인되어  해당강좌에 대한 접근이 가능해졌을 때 발송</td>
            <td>SMS</td>
            <td class="tL"><a>[쌤+]무료기간 연장신청완료. 내 강의실에서 확인하실 수 있습니다.</a></td>
            <td>박미진</td>
            <td>2021-03-22</td>
          </tr>
          <tr>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="chk4">
                <label for="chk4"><i></i></label>
              </span>
            </td>
            <td>2</td>
            <td class="tL">첨삭게시판에 회원이 제출한 답안에 대해 첨삭이 완료된 파일을 업로드했을 때 발송</td>
            <td>SMS</td>
            <td class="tL"><a>[쌤+]첨삭완료! {홍길동}회원님의 답안지 첨삭이 완료되었습니다.^^</a></td>
            <td>박미진</td>
            <td>2021-03-22</td>
          </tr>
          <tr>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="chk4">
                <label for="chk4"><i></i></label>
              </span>
            </td>
            <td>1</td>
            <td class="tL">카드결제 취소가 어드민에서 확인되었을 때 발송</td>
            <td>LMS</td>
            <td class="tL"><a>[쌤플러스]카드결제가 취소되었습니다. </a></td>
            <td>박미진</td>
            <td>2021-03-22</td>
          </tr>
          <!-- 데이터 없을 경우 -->
          <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
          <!-- //데이터 없을 경우 -->
        </tbody>
      </table>
    </div>
    <!-- 테이블 목록 -->
    <Paginate />

    <!-- Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
        선택한 시스템 발송 메시지가 해당 리스트에서만 삭제됩니다.
      </template>
    </Alert>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SmsLmsSystem',
  data() {
    return {
      alertTrigger: false,
    }
  },
  methods: {
    MsgSystemWrite() {
      let routeData = this.$router.resolve({name: 'MsgSystemWrite', query: {data: "someData"}});
      window.open('/mkup/windowPopup/msgSystemWrite', '_blank', `width=570,height=750`);
    },
    MsgSystemView() {
      let routeData = this.$router.resolve({name: 'MsgSystemView', query: {data: "someData"}});
      window.open('/mkup/windowPopup/msgSystemView', '_blank', `width=570,height=750`);
    }
  },
  components: {
  }
}
</script>
