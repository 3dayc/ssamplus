<template lang="html">
  <div class="replyCleanFixed">
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <span class="frontTooltip">
          <em>ⓘ Front</em>
          <span>- 인사이드희소 > 대학제휴</span>
        </span>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">처리여부</option>
                  <option value="">미처리</option>
                  <option value="">완료</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <strong class="title">작성일</strong>
              <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                <template v-slot="{ inputValue, togglePopover, isDragging }">
                  <input :value="inputValue.start + ' ~ ' + inputValue.end" :class="isDragging ? 'text-green-600' : 'text-green-900'" @click="togglePopover()" placeholder="시작일 선택 ~ 종료일 선택" />
                </template>
              </Vcalendar>
            </span>
            <span class="lsItem">
              <input type="text" placeholder="제목, 내용 검색" />
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <div>
            <button class="btnRefresh">초기화</button>
          </div>
        </div>
      </div>
      <span class="right-po">
        <a href="#" class="btnDownload">다운로드</a>
      </span>
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
        <thead>
          <tr>
            <th scope="col">작성일시</th>
            <th scope="col">이메일</th>
            <th scope="col">연락처</th>
            <th scope="col">학교</th>
            <th scope="col">전공</th>
            <th scope="col">제목</th>
            <th scope="col">내용</th>
            <th scope="col">처리여부</th>
            <th scope="col">삭제</th>
          </tr>
        </thead>
        <tbody>
          <!--Loop-->
          <tr>
            <td>2021-05-26 17:00</td>
            <td>hong123@navev.con</td>
            <td>000-****-0000</td>
            <td>00대학교</td>
            <td>특수교육</td>
            <td>대학제휴 추가요청되나요?</td>
            <td class="tL">안녕하세요 대학제휴 문의 드립니다. 추가신청 되나요?</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">미처리</option>
                  <option value="">완료</option>
                </select>
              </span>
            </td>
            <td><button class="btnS line">삭제</button></td>
          </tr>
          <!--//Loop-->
          <tr>
            <td>2021-05-25 09:03</td>
            <td>hong123@navev.con</td>
            <td>000-****-0000</td>
            <td>00대학원</td>
            <td>초등특수교육과</td>
            <td>재삭생 제휴문의</td>
            <td class="tL">안녕하세요 대학제휴 문의 드립니다. 추가신청 되나요?</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">미처리</option>
                  <option value="">완료</option>
                </select>
              </span>
            </td>
            <td><button class="btnS line">삭제</button></td>
          </tr>
          <tr>
            <td>2021-05-24 10:03</td>
            <td>hong123@navev.con</td>
            <td>000-****-0000</td>
            <td>00대학교</td>
            <td>교대원</td>
            <td>쿠폰은 언제쯤 지급해주나요?</td>
            <td class="tL">안녕하세요 대학제휴 문의 드립니다. 추가신청 되나요?</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">미처리</option>
                  <option value="">완료</option>
                </select>
              </span>
            </td>
            <td><button class="btnS line">삭제</button></td>
          </tr>
          <tr>
            <td>2021-05-24 09:00</td>
            <td>hong123@navev.con</td>
            <td>000-****-0000</td>
            <td>00대학원</td>
            <td>상담교육</td>
            <td>동영상 강의 제휴문의</td>
            <td class="tL">안녕하세요 대학제휴 문의 드립니다. 추가신청 되나요?</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">미처리</option>
                  <option value="">완료</option>
                </select>
              </span>
            </td>
            <td><button class="btnS line">삭제</button></td>
          </tr>
          <tr>
            <td>2021-05-26 17:00</td>
            <td>hong123@navev.con</td>
            <td>000-****-0000</td>
            <td>00대학교</td>
            <td>특수교육</td>
            <td>대학제휴 추가요청되나요?</td>
            <td class="tL">안녕하세요 대학제휴 문의 드립니다. 추가신청 되나요?</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">미처리</option>
                  <option value="">완료</option>
                </select>
              </span>
            </td>
            <td><button class="btnS line">삭제</button></td>
          </tr>
          <tr>
            <td>2021-05-25 09:03</td>
            <td>hong123@navev.con</td>
            <td>000-****-0000</td>
            <td>00대학원</td>
            <td>초등특수교육과</td>
            <td>재삭생 제휴문의</td>
            <td class="tL">안녕하세요 대학제휴 문의 드립니다. 추가신청 되나요?</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">미처리</option>
                  <option value="">완료</option>
                </select>
              </span>
            </td>
            <td><button class="btnS line">삭제</button></td>
          </tr>
          <tr>
            <td>2021-05-24 10:03</td>
            <td>hong123@navev.con</td>
            <td>000-****-0000</td>
            <td>00대학교</td>
            <td>교대원</td>
            <td>쿠폰은 언제쯤 지급해주나요?</td>
            <td class="tL">안녕하세요 대학제휴 문의 드립니다. 추가신청 되나요?</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">미처리</option>
                  <option value="">완료</option>
                </select>
              </span>
            </td>
            <td><button class="btnS line">삭제</button></td>
          </tr>
          <tr>
            <td>2021-05-24 09:00</td>
            <td>hong123@navev.con</td>
            <td>000-****-0000</td>
            <td>00대학원</td>
            <td>상담교육</td>
            <td>동영상 강의 제휴문의</td>
            <td class="tL">안녕하세요 대학제휴 문의 드립니다. 추가신청 되나요?</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">미처리</option>
                  <option value="">완료</option>
                </select>
              </span>
            </td>
            <td><button class="btnS line">삭제</button></td>
          </tr>
          <tr class="gray">
            <td>2021-05-24 10:03</td>
            <td>hong123@navev.con</td>
            <td>000-****-0000</td>
            <td>00대학교</td>
            <td>화학과</td>
            <td>쿠폰은 언제쯤 지급해주나요?</td>
            <td class="tL">안녕하세요 대학제휴 문의 드립니다. 추가신청 되나요?</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">미처리</option>
                  <option value="" selected>완료</option>
                </select>
              </span>
            </td>
            <td><button class="btnS line">삭제</button></td>
          </tr>
          <tr class="gray">
            <td>2021-05-24 09:00</td>
            <td>hong123@navev.con</td>
            <td>000-****-0000</td>
            <td>00대학원</td>
            <td>물리교육과</td>
            <td>동영상 강의 제휴문의</td>
            <td class="tL">안녕하세요 대학제휴 문의 드립니다. 추가신청 되나요?</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">미처리</option>
                  <option value="" selected>완료</option>
                </select>
              </span>
            </td>
            <td><button class="btnS line">삭제</button></td>
          </tr>
          <!-- 데이터 없을 경우 -->
          <tr style="display:none;"><td colspan="9" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'ReplyCleanFixed',
  data(){
    return {
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  }
}
</script>

<style lang="css" scoped>
</style>
