<template lang="html">
  <div>
    <div class="pageTit">
      <h2>발송 결과 조회</h2>
      <span><router-link to="/mkup/message/smsLms">메시지 관리</router-link><router-link to="/mkup/message/smsLms">SMS 관리</router-link><em>발송 결과 조회</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="sendResult"><!-- class 없어도 유지 -->
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">발송 시점</option>
                      <option value="">예약 발송</option>
                      <option value="">즉시 발송</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">발송 구분</option>
                      <option value="">관리자 발송</option>
                      <option value="">매크로 발송</option>
                      <option value="">시스템 발송</option>
                      <option value="">사용자 유입</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <strong class="title">발송일</strong><!-- 2021-08-02 캘린더 사용 컴포넌트 앞에 타이틀 추가 -->
                  <VCalendar class="calSet dupCal calSetDate" v-model="range" is-range color="green">
                    <template v-slot="{ inputValue, togglePopover, isDragging }">
                      <input :value="inputValue.start + ' ~ ' + inputValue.end" :class="isDragging ? 'text-green-600' : 'text-green-900'" @click="togglePopover()" placeholder="시작일 선택 ~ 종료일 선택" />
                    </template>
                  </Vcalendar>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="내용, 발송자 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <div class="listSummery">
          <div class="right">
            <dl>
              <dt>당월 과금건수</dt>
              <dd>SMS <strong>29,071</strong>건</dd>
              <dd>LMS <strong>27,858</strong>건</dd>
            </dl>
          </div>
        </div>
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="60px;">
              <col span="4">
              <col width="30%;">
              <col span="3">
            </colgroup>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">발송 코드</th>
                <th scope="col">발송 시점</th>
                <th scope="col">발송 구분</th>
                <th scope="col">발송 목적</th>
                <th scope="col">내용</th>
                <th scope="col">발송(예정) 일자</th>
                <th scope="col">발송건수<br/>(성공)</th>
                <th scope="col">사용자 유입<br/>확인 건수</th><!-- 2021-09-02 텍스트 수정 -->
                <th scope="col">재발송</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td></td>
                <td><span class="iReserve">reserve</span>21040001</td><!-- 예약문자일 경우 -->
                <td>예약 발송</td>
                <td>관리자 발송</td>
                <td>홍보용</td>
                <td class="tL">
                  <a @click="MsgSendStatusReserve()">[Web발신]안녕하세요. 희소고시학원입니다.[Web발신]안녕하세요. 희소고시학원입니다</a>
                </td>
                <td>2021-04-03 (토)<br/>09:39:00</td>
                <td>-</td>
                <td>-</td>
                <td></td>
              </tr>
              <!--//Loop-->
              <tr>
                <td></td>
                <td><span class="iReserve">reserve</span>21040001</td><!-- 예약문자일 경우 -->
                <td>예약 발송</td>
                <td>사용자 유입</td><!-- 2021-09-02 텍스트컬러 삭제 -->
                <td>안내용</td>
                <td class="tL">
                  <a @click="MsgSendStatusReserve()">[Web발신]안녕하세요. 희소고시학원입니다.[Web발신]안녕하세요. 희소고시학원입니다</a>
                </td>
                <td>2021-04-03 (토)<br/>09:39:00</td>
                <td>-</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr class="dropOpen">
                <td><button class="dropToggle" @click="dropList">토글 버튼</button></td>
                <td>21040001</td>
                <td>즉시 발송</td>
                <td>관리자 발송</td>
                <td>홍보용</td>
                <td class="tL">
                  <a @click="MsgSendStatus()">[Web발신]안녕하세요. 희소고시학원입니다.[Web발신]안녕하세요. 희소고시학원입니다</a>
                </td>
                <td>2021-04-03 (토)<br/>09:39:00</td>
                <td>100<br/>(90)</td>
                <td>-</td>
                <td><button class="btnS line" @click="MsgResend()">재발송</button></td>
              </tr>
              <tr class="dropClose" v-show="dropTrigger">
                <td></td>
                <td>21040001</td>
                <td>재발송</td>
                <td>관리자 발송</td>
                <td>홍보용</td>
                <td class="tL">
                  <a @click="MsgSendStatus()">[Web발신]안녕하세요. 희소고시학원입니다.[Web발신]안녕하세요. 희소고시학원입니다</a>
                </td>
                <td>2021-04-03 (토)<br/>09:39:00</td>
                <td>10<br/>(7)</td>
                <td></td>
                <td></td>
              </tr>
              <tr class="dropClose" v-show="dropTrigger">
                <td></td>
                <td>21040001</td>
                <td>재발송</td>
                <td>관리자 발송</td>
                <td>홍보용</td>
                <td class="tL">
                  <a @click="MsgSendStatus()">[Web발신]안녕하세요. 희소고시학원입니다.[Web발신]안녕하세요. 희소고시학원입니다</a>
                </td>
                <td>2021-04-03 (토)<br/>09:39:00</td>
                <td>3<br/>(1)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>21040001</td>
                <td>즉시 발송</td>
                <td>시스템 발송</td>
                <td>안내용</td>
                <td class="tL">
                  <a @click="MsgSendStatus()">[Web발신]안녕하세요. 희소고시학원입니다.[Web발신]안녕하세요. 희소고시학원입니다</a>
                </td>
                <td>2021-04-03 (토)<br/>09:39:00</td>
                <td>100<br/>(100)</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>21040001</td>
                <td>즉시 발송</td>
                <td>관리자 발송</td>
                <td>안내용</td>
                <td class="tL">
                  <a @click="MsgSendStatus()">[Web발신]안녕하세요. 희소고시학원입니다.[Web발신]안녕하세요. 희소고시학원입니다</a>
                </td>
                <td>2021-04-03 (토)<br/>09:39:00</td>
                <td>100<br/>(90)</td>
                <td>-</td>
                <td><button class="btnS line" @click="MsgResend()">재발송</button></td>
              </tr>
              <tr class="expiry">
                <td></td>
                <td>21040001</td>
                <td>취소</td>
                <td>관리자 발송</td>
                <td>안내용</td>
                <td class="tL">
                  <a @click="MsgSendStatus()">[Web발신]안녕하세요. 희소고시학원입니다.[Web발신]안녕하세요. 희소고시학원입니다</a>
                </td>
                <td>2021-04-03 (토)<br/>09:39:00</td>
                <td>-</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>21040001</td>
                <td>즉시 발송</td>
                <td>사용자 유입</td><!-- 2021-09-02 텍스트컬러 삭제 -->
                <td>홍보용</td>
                <td class="tL">
                  <a @click="MsgSendStatusUser()">[Web발신]안녕하세요. 희소고시학원입니다.[Web발신]안녕하세요. 희소고시학원입니다</a>
                </td>
                <td>2021-04-03 (토)<br/>09:39:00</td>
                <td>100<br/>(90)</td>
                <td>85</td>
                <td><button class="btnS line" @click="MsgResendUser()">재발송</button></td>
              </tr>
              <tr>
                <td></td>
                <td>21040001</td>
                <td>즉시 발송</td>
                <td>관리자 발송</td>
                <td>홍보용</td>
                <td class="tL">
                  <a @click="MsgSendStatus()">[Web발신]안녕하세요. 희소고시학원입니다.[Web발신]안녕하세요. 희소고시학원입니다</a>
                </td>
                <td>2021-04-03 (토)<br/>09:39:00</td>
                <td>100<br/>(90)</td>
                <td>-</td>
                <td><button class="btnS line" @click="MsgResend()">재발송</button></td>
              </tr>
              <tr>
                <td></td>
                <td>21040001</td>
                <td>즉시 발송</td>
                <td>매크로 발송</td>
                <td>안내용</td>
                <td class="tL">
                  <a @click="MsgSendStatus()">[Web발신]안녕하세요. 희소고시학원입니다.[Web발신]안녕하세요. 희소고시학원입니다</a>
                </td>
                <td>2021-04-03 (토)<br/>09:39:00</td>
                <td>100<br/>(90)</td>
                <td>-</td>
                <td><button class="btnS line" @click="MsgResend()">재발송</button></td>
              </tr>
              <tr>
                <td></td>
                <td>21040001</td>
                <td>즉시 발송</td>
                <td>시스템 발송</td>
                <td>안내용</td>
                <td class="tL">
                  <a @click="MsgSendStatus()">[Web발신]안녕하세요. 희소고시학원입니다.[Web발신]안녕하세요. 희소고시학원입니다</a>
                </td>
                <td>2021-04-03 (토)<br/>09:39:00</td>
                <td>100<br/>(90)</td>
                <td>-</td>
                <td><button class="btnS line" @click="MsgResend()">재발송</button></td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="10" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <!-- //테이블 목록 -->
        <Paginate />
      </div>
    </article>
    </div>
    <!-- Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
        해당 예약 메시지를 발송 취소 하시겠습니까?
      </template>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">취소</button>
        <button class="btnM green" @click="alertTrigger = false">삭제</button>
      </template>
    </Alert>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SendResult',
  data() {
    return {
      dropTrigger: false,
      alertTrigger: false,
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  },
  methods: {
    MsgSendStatus() {
      let routeData = this.$router.resolve({name: 'MsgSendStatus', query: {data: "someData"}});
      window.open('/mkup/windowPopup/msgSendStatus', '_blank', `width=1100,height=900`);
    },
    MsgSendStatusUser() {
      let routeData = this.$router.resolve({name: 'MsgSendStatusUser', query: {data: "someData"}});
      window.open('/mkup/windowPopup/msgSendStatusUser', '_blank', `width=1100,height=900`);
    },
    MsgSendStatusReserve() {
      let routeData = this.$router.resolve({name: 'MsgSendStatusReserve', query: {data: "someData"}});
      window.open('/mkup/windowPopup/msgSendStatusReserve', '_blank', `width=1100,height=900`);
    },
    MsgResend() {
      let routeData = this.$router.resolve({name: 'MsgResend', query: {data: "someData"}});
      window.open('/mkup/windowPopup/msgResend', '_blank', `width=1100,height=900`);
    },
    MsgResendUser() {
      let routeData = this.$router.resolve({name: 'MsgResendUser', query: {data: "someData"}});
      window.open('/mkup/windowPopup/msgResendUser', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  }
}
</script>
