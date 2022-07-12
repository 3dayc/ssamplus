<template lang="html">
  <div>
    <div class="subTit">
      <span class="right">
        <em>A20210101010 |  복합  |  1,2.3교시 타입  |  2022년 상반기 희소 모의고사</em>입니다.
      </span>
    </div>
    <div class="boardTop">
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">응시 구분</option>
                  <option value="">전체</option>
                  <option value="">현장</option>
                  <option value="">온라인</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">채점 여부</option>
                  <option value="">전체</option>
                  <option value="">채점</option>
                  <option value="">자가채점</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">결제 구분</option>
                  <option value="">전체</option>
                  <option value="">결제완료</option>
                  <option value="">미결제</option>
                  <option value="">환불</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <input type="text" placeholder="수험번호, 회원번호, 아이디, 이름" />
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <div><button class="btnRefresh">초기화</button></div>
        </div>
      </div>
    </div>
    <div class="listSummery">
      <div class="right">
        <a href="#" class="btnDownload">목록 다운로드</a>
        <a href="#" class="btnDownload ml10">답안지 일괄 다운로드</a>
        <a href="#" class="btnDownload ml10">채점 결과 일괄 업로드</a>
        <a href="#" class="btnDownload ml10">점수 입력 포맷 다운로드</a>
        <a href="#" class="btnDownload ml10">점수 입력 일괄 업로드</a>
      </div>
    </div>
    <div class="tls mockTestList">
      <table>
        <colgroup>
          <col width="50">
          <col width="90">
          <col width="90">
          <col width="130">
          <col width="110">
          <col width="60">
          <col width="80">
          <col width="80">
          <col width="80">
          <col width="80">
          <col width="80">
          <col width="80">
          <col width="80">
          <col width="80">
          <col width="80">
          <col width="120">
          <col width="40">
          <col width="160">
          <col width="40">
          <col width="160">
          <col width="40">
          <col width="120">
          <col width="40">
        </colgroup>
        <thead>
          <tr>
            <th>No</th>
            <th>수험번호</th>
            <th>회원번호</th>
            <th>이름<br/>(아이디)</th>
            <th>휴대전화</th>
            <th>SMS</th>
            <th>판매유형</th>
            <th>과목(1)</th>
            <th>선생님(1)</th>
            <th>과목(2)</th>
            <th>선생님(2)</th>
            <th>과목(3)</th>
            <th>선생님(3)</th>
            <th>응시구분</th>
            <th>채점여부</th>
            <th colspan="2">시험시작시간<br/>시험종료시간</th>
            <th colspan="2">답안지 제출</th>
            <th colspan="2">채점 결과</th>
            <th colspan="2">성적표</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10</td>
            <td>10210001</td>
            <td>361145</td>
            <td>김*민<br/>(jim******)</td>
            <td>010-9999-9999</td>
            <td>Y</td>
            <td>복합</td>
            <td>교육학</td>
            <td>김현</td>
            <td>국어</td>
            <td>박노송</td>
            <td>국어</td>
            <td>박노송</td>
            <td>현장</td>
            <td>채점</td>
            <td>2021-05-03 22:32:48<br/>2021-05-03 23:55:03</td>
            <td><button class="btnDelete">삭제</button></td>
            <td class="tL">
              <ul class="miniMock">
                <li><strong>[1교시]</strong> 2021-05-04 09:06:38 <button class="btnT blueline">파일보기</button></li>
                <li><strong>[2교시]</strong> 2021-05-04 09:06:38 <button class="btnT blueline">파일보기</button></li>
                <li><strong>[3교시]</strong> 2021-05-04 09:06:38 <button class="btnT blueline">파일보기</button></li>
              </ul>
            </td>
            <td><button class="btnDelete">삭제</button></td>
            <td class="tL">
              <ul class="miniMock">
                <li><strong>[1교시]</strong> 2021-05-12 22:55:14 <button class="btnT blueline">파일보기</button></li>
                <li><strong>[2교시]</strong> 2021-05-12 22:55:14 <button class="btnT blueline">파일보기</button></li>
                <li><strong>[3교시]</strong> 2021-05-12 22:55:14 <button class="btnT blueline">파일보기</button></li>
              </ul>
            </td>
            <td><button class="btnDelete">삭제</button></td>
            <td>
              <button class="btnT blueline">성적표보기</button>
              <div>2021-05-04 09:06:38</div>
            </td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td>9</td>
            <td>10210003</td>
            <td>361145</td>
            <td>김*민<br/>(jim******)</td>
            <td>010-9999-9999</td>
            <td>Y</td>
            <td>복합</td>
            <td>교육학</td>
            <td>김현</td>
            <td>국어</td>
            <td>박노송</td>
            <td>국어</td>
            <td>박노송</td>
            <td>현장</td>
            <td>채점</td>
            <td>2021-05-03 22:32:48<br/>2021-05-03 23:55:03</td>
            <td><button class="btnDelete">삭제</button></td>
            <td class="tL">
              <ul class="miniMock">
                <li><strong>[1교시]</strong> 2021-05-04 09:06:38 <button class="btnT blueline">파일보기</button></li>
                <li><strong>[2교시]</strong> 2021-05-04 09:06:38 <button class="btnT blueline">파일보기</button></li>
                <li><strong>[3교시]</strong> 2021-05-04 09:06:38 <button class="btnT blueline">파일보기</button></li>
              </ul>
            </td>
            <td><button class="btnDelete">삭제</button></td>
            <td class="tL">
              <ul class="miniMock">
                <li><strong class="fBlue">[1교시]</strong><button class="btnT line">불러오기</button></li>
                <li><strong class="fBlue">[2교시]</strong><button class="btnT line">불러오기</button></li>
                <li><strong class="fBlue">[3교시]</strong><button class="btnT line">불러오기</button></li>
              </ul>
            </td>
            <td><button class="btnDelete">삭제</button></td>
            <td>
              <button class="btnT line" @click="MocktestMultiTestPoint()">점수입력</button>
            </td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td>8</td>
            <td>10210002</td>
            <td>361145</td>
            <td>김*민<br/>(jim******)</td>
            <td>010-9999-9999</td>
            <td>Y</td>
            <td>복합</td>
            <td>교육학</td>
            <td>김현</td>
            <td>국어</td>
            <td>박노송</td>
            <td>국어</td>
            <td>박노송</td>
            <td>현장</td>
            <td>채점</td>
            <td>2021-05-03 22:32:48</td>
            <td><button class="btnDelete">삭제</button></td>
            <td class="tL">
              <ul class="miniMock">
                <li><strong class="fBlue">[1교시]</strong><button class="btnT line">불러오기</button></li>
                <li><strong class="fBlue">[2교시]</strong><button class="btnT line">불러오기</button></li>
                <li><strong class="fBlue">[3교시]</strong><button class="btnT line">불러오기</button></li>
              </ul>
            </td>
            <td><button class="btnDelete">삭제</button></td>
            <td class="tL">
              <ul class="miniMock">
                <li><strong class="fBlue">[1교시]</strong><button class="btnT line">불러오기</button></li>
                <li><strong class="fBlue">[2교시]</strong><button class="btnT line">불러오기</button></li>
                <li><strong class="fBlue">[3교시]</strong><button class="btnT line">불러오기</button></li>
              </ul>
            </td>
            <td><button class="btnDelete">삭제</button></td>
            <td>
              <button class="btnT line" @click="MocktestMultiTestPoint()">점수입력</button>
            </td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr class="gray">
            <td>7</td>
            <td>10210003</td>
            <td>361145</td>
            <td>김*민<br/>(jim******)</td>
            <td>010-9999-9999</td>
            <td>Y</td>
            <td>복합</td>
            <td>교육학</td>
            <td>김현</td>
            <td>국어</td>
            <td>박노송</td>
            <td>국어</td>
            <td>박노송</td>
            <td>현장</td>
            <td>자가채점</td>
            <td>2021-05-03 22:32:48<br/>2021-05-03 23:55:03</td>
            <td><button class="btnDelete">삭제</button></td>
            <td>없음</td>
            <td></td>
            <td>없음</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="gray">
            <td>6</td>
            <td>10210002</td>
            <td>361145</td>
            <td>김*민<br/>(jim******)</td>
            <td>010-9999-9999</td>
            <td>N</td>
            <td>복합</td>
            <td>교육학</td>
            <td>윤중샘</td>
            <td>국어</td>
            <td>박노송</td>
            <td>국어</td>
            <td>박노송</td>
            <td>현장</td>
            <td>자가채점</td>
            <td>-<br/>-</td>
            <td><button class="btnDelete">삭제</button></td>
            <td>없음</td>
            <td></td>
            <td>없음</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>21210001</td>
            <td>361145</td>
            <td>김*민<br/>(jim******)</td>
            <td>010-9999-9999</td>
            <td>N</td>
            <td>복합</td>
            <td>교육학</td>
            <td>윤중샘</td>
            <td>국어</td>
            <td>박노송</td>
            <td>국어</td>
            <td>박노송</td>
            <td>온라인</td>
            <td>채점</td>
            <td>2021-05-03 22:32:48<br/>2021-05-03 23:55:03</td>
            <td><button class="btnDelete">삭제</button></td>
            <td class="tL">
              <ul class="miniMock">
                <li><strong>[1교시]</strong> 2021-05-04 09:06:38 <button class="btnT blueline">파일보기</button></li>
                <li><strong>[2교시]</strong> 2021-05-04 09:06:38 <button class="btnT blueline">파일보기</button></li>
                <li><strong>[3교시]</strong> 2021-05-04 09:06:38 <button class="btnT blueline">파일보기</button></li>
              </ul>
            </td>
            <td><button class="btnDelete">삭제</button></td>
            <td class="tL">
              <ul class="miniMock">
                <li><strong>[1교시]</strong> 2021-05-12 22:55:14 <button class="btnT blueline">파일보기</button></li>
                <li><strong>[2교시]</strong> 2021-05-12 22:55:14 <button class="btnT blueline">파일보기</button></li>
                <li><strong>[3교시]</strong> 2021-05-12 22:55:14 <button class="btnT blueline">파일보기</button></li>
              </ul>
            </td>
            <td><button class="btnDelete">삭제</button></td>
            <td>
              <button class="btnT blueline">성적표보기</button>
              <div>2021-05-04 09:06:38</div>
            </td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>21210002</td>
            <td>361145</td>
            <td>김*민<br/>(jim******)</td>
            <td>010-9999-9999</td>
            <td></td>
            <td>복합</td>
            <td>교육학</td>
            <td>김현</td>
            <td>국어</td>
            <td>박노송</td>
            <td>국어</td>
            <td>박노송</td>
            <td>온라인</td>
            <td>채점</td>
            <td>2021-05-03 22:32:48<br/>2021-05-03 23:55:03</td>
            <td><button class="btnDelete">삭제</button></td>
            <td class="tL">
              <ul class="miniMock">
                <li><strong>[1교시]</strong> 2021-05-04 09:06:38 <button class="btnT blueline">파일보기</button></li>
                <li><strong>[2교시]</strong> 2021-05-04 09:06:38 <button class="btnT blueline">파일보기</button></li>
                <li><strong>[3교시]</strong> 2021-05-04 09:06:38 <button class="btnT blueline">파일보기</button></li>
              </ul>
            </td>
            <td><button class="btnDelete">삭제</button></td>
            <td class="tL">
              <ul class="miniMock">
                <li><strong class="fBlue">[1교시]</strong><button class="btnT line">불러오기</button></li>
                <li><strong class="fBlue">[2교시]</strong><button class="btnT line">불러오기</button></li>
                <li><strong class="fBlue">[3교시]</strong><button class="btnT line">불러오기</button></li>
              </ul>
            </td>
            <td><button class="btnDelete">삭제</button></td>
            <td>
              <button class="btnT line" @click="MocktestMultiTestPoint()">점수입력</button>
            </td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>21210001</td>
            <td>361145</td>
            <td>김*민<br/>(jim******)</td>
            <td>010-9999-9999</td>
            <td>Y</td>
            <td>복합</td>
            <td>교육학</td>
            <td>권구현</td>
            <td>국어</td>
            <td>박노송</td>
            <td>국어</td>
            <td>박노송</td>
            <td>온라인</td>
            <td>채점</td>
            <td>2021-05-03 22:32:48<br/>-</td>
            <td><button class="btnDelete">삭제</button></td>
            <td class="tL">
              <ul class="miniMock">
                <li><strong class="fBlue">[1교시]</strong><button class="btnT line">불러오기</button></li>
                <li><strong class="fBlue">[2교시]</strong><button class="btnT line">불러오기</button></li>
                <li><strong class="fBlue">[3교시]</strong><button class="btnT line">불러오기</button></li>
              </ul>
            </td>
            <td><button class="btnDelete">삭제</button></td>
            <td class="tL">
              <ul class="miniMock">
                <li><strong class="fBlue">[1교시]</strong><button class="btnT line">불러오기</button></li>
                <li><strong class="fBlue">[2교시]</strong><button class="btnT line">불러오기</button></li>
                <li><strong class="fBlue">[3교시]</strong><button class="btnT line">불러오기</button></li>
              </ul>
            </td>
            <td><button class="btnDelete">삭제</button></td>
            <td>
              <button class="btnT line" @click="MocktestMultiTestPoint()">점수입력</button>
            </td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr class="gray">
            <td>2</td>
            <td>22210001</td>
            <td>361145</td>
            <td>김*민<br/>(jim******)</td>
            <td>010-9999-9999</td>
            <td>N</td>
            <td>복합</td>
            <td>교육학</td>
            <td>권구현</td>
            <td>국어</td>
            <td>박노송</td>
            <td>국어</td>
            <td>박노송</td>
            <td>현장</td>
            <td>자가채점</td>
            <td>-<br/>-</td>
            <td><button class="btnDelete">삭제</button></td>
            <td>없음</td>
            <td></td>
            <td>없음</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="gray">
            <td>1</td>
            <td>22210002</td>
            <td>361145</td>
            <td>김*민<br/>(jim******)</td>
            <td>010-9999-9999</td>
            <td>N</td>
            <td>복합</td>
            <td>교육학</td>
            <td>윤중샘</td>
            <td>국어</td>
            <td>박노송</td>
            <td>국어</td>
            <td>박노송</td>
            <td>현장</td>
            <td>자가채점</td>
            <td>2021-05-03 22:32:48<br/>2021-05-03 23:55:03</td>
            <td><button class="btnDelete">삭제</button></td>
            <td>없음</td>
            <td></td>
            <td>없음</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <Paginate />
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MultiTestViewExam',
  data() {
    return {
      alertTrigger: false,
    }
  },
  methods: {
    MocktestMultiTestPoint() {
      let routeData = this.$router.resolve({name: 'MocktestMultiTestPoint', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mocktestMultiTestPoint', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  }
}
</script>
