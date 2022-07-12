<template lang="html">
  <div>
    <div class="pageTit"><h2>회원 조회</h2><span><router-link to="">회원/선생님</router-link><em>회원 조회</em></span></div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div> <!-- class 없어도 유지 -->
          <div class="boardTop">
            <div class="left-po">
              <strong>회원 개인정보 표출</strong>
              <span class="toggleSet">
                <input type="checkbox" id="push" />
                <label for="push"><!--적용여부--></label>
              </span>
            </div>
            <div class="listSearch">
              <div class="back">
                <div class="bdLine">
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">회원구분</option>
                        <option value="">일반</option>
                        <option value="">휴면회원</option>
                        <option value="">탈퇴</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">수강구분</option>
                        <option value="">유료수강</option>
                        <option value="">무료수강</option>
                        <option value="">미수강</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">과목</option>
                        <option value="">중등중국어</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <multiselect class="w120" v-model="multiValue2" :options="optionsMulti2" :internal-search="false" group-values="dep2" group-label="dep1" :group-select="true" placeholder="과목" track-by="name" label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                  </span>
                  <span class="lsItem">
                    <VCalendar class="calSet" v-model="date" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                  </span>
                  <span class="lsItem">
                    <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                      <template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
                        <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" placeholder="시작일 선택"/>
                        <em>~</em>
                        <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" placeholder="종료일 선택"/>
                      </template>
                    </Vcalendar>
                  </span>
                  <span class="lsItem">
                    <input type="text" placeholder="이름, 아이디, 휴대폰, IP 검색" />
                    <button class="btnSearch">검색</button>
                  </span>
                </div>
                <div>
                  <button class="btnRefresh">초기화</button>
                </div>
              </div>
            </div>
            <div class="right-po"><button class="btnDownload">다운로드</button></div>
          </div>
          <br /><br />
          <div class="boardTop">
            <span class="supUtilTxt">ⓘ 조건을 활용하여 SMS 발송대상을 csv 파일로 추출할 수 있습니다.</span>
            <span class="right-po">
              <button class="btnDownload">다운로드</button>
              <button class="btnUpdate">초기화</button>
            </span>
          </div>
          <br /><br />
          <div class="listSummery">
            <div class="left">
              <strong>회원 개인정보 표출</strong>
              <span class="toggleSet">
                <input type="checkbox" id="push" />
                <label for="push"><!--적용여부--></label>
              </span>
            </div>
            <div class="right">
              <dl>
                <dt>실시간 가입현황</dt>
                <dd>당일 <strong>14</strong>명</dd>
                <dd>당월 <strong>365</strong>명</dd>
              </dl>
              <dl>
                <dt>수강중 인원</dt>
                <dd><strong>1,240</strong>명</dd>
              </dl>
            </div>
          </div>

          <div class="tls">
            <table>
              <colgroup>
                <col width="80" />
                <col width="80" />
                <col width="140" />
                <col width="480" />
                <col width="160" />
                <col width="160" />
                <col width="140" />
                <col width="140" />
                <col width="180" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </th>
                  <th>No</th>
                  <th>카테고리</th>
                  <th>타이틀</th>
                  <th>수신성공/전체수신자</th>
                  <th>발송시간</th>
                  <th>발송자</th>
                  <th>발송형태</th>
                  <th>발송상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" checked />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>67</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td class="blue">성공</td>
                </tr>
                <tr class="dropOpen">
                  <td><button class="dropToggle" :class="{on:dropTrigger == true}" @click="dropTrigger = !dropTrigger">토글 버튼</button></td>
                  <td>67</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td class="blue">성공</td>
                </tr>
                <tr class="dropClose" v-show="dropTrigger">
                  <td></td>
                  <td>67</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td class="blue">성공</td>
                </tr>
                <tr class="dropClose" v-show="dropTrigger">
                  <td></td>
                  <td>67</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td class="blue">성공</td>
                </tr>
                <tr class="expiry">
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>64</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td><span class="red">실패(1명)</span><button class="btnT gray ml10">재발송</button></td>
                </tr>
                <tr class="notOnline">
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>64</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">학원 강좌/교재일 경우</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td><span class="red">실패(1명)</span><button class="btnT gray ml10">재발송</button></td>
                </tr>
                <tr class="newAdd">
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>64</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">신규 행일 경우</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td><span class="red">실패(1명)</span><button class="btnT gray ml10">재발송</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <Paginate />

          
          <div class="tls">
            <table>
              <colgroup>
                <col width="80" />
                <col width="80" />
                <col width="140" />
                <col width="480" />
                <col width="160" />
                <col width="160" />
                <col width="140" />
                <col width="140" />
                <col width="180" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </th>
                  <th>No</th>
                  <th>카테고리</th>
                  <th>타이틀</th>
                  <th>수신성공/전체수신자</th>
                  <th>발송시간</th>
                  <th>발송자</th>
                  <th>발송형태</th>
                  <th>발송상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" checked />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>67</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td class="blue">성공</td>
                </tr>
                <tr class="dropOpen">
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>64</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td><span class="red">실패(1명)</span><button class="btnS gray ml5px">재발송</button></td>
                </tr>
                <tr class="dropClose">
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>64</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td><span class="red">실패(1명)</span><button class="btnS gray ml5px">재발송</button></td>
                </tr>
                <tr class="expiry"><!--20210715 class 변경-->
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>64</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td><span class="red">실패(1명)</span><button class="btnS gray ml5px">재발송</button></td>
                </tr>
                <tr class="notOnline">
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>64</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td><span class="red">실패(1명)</span><button class="btnS gray ml5px">재발송</button></td>
                </tr>
                <tr class="notOnline">
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>64</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td><span class="red">실패(1명)</span><button class="btnS gray ml5px">재발송</button></td>
                </tr>
                <tr class="newAdd">
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>64</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td><span class="red">실패(1명)</span><button class="btnS gray ml5px">재발송</button></td>
                </tr>
                <tr class="finish">
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>64</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td><span class="red">실패(1명)</span><button class="btnS gray ml5px">재발송</button></td>
                </tr>
                <tr class="waited">
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>64</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td><span class="red">실패(1명)</span><button class="btnS gray ml5px">재발송</button></td>
                </tr>
                <tr class="cancel">
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>64</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td><span class="red">실패(1명)</span><button class="btnS gray ml5px">재발송</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <Paginate />
          <!-------------------------------------->
          <br /><br />
          <div class="tls">
            <table>
              <colgroup>
                <col width="80" />
                <col width="80" />
                <col width="140" />
                <col width="480" />
                <col width="160" />
                <col width="160" />
                <col width="140" />
                <col width="140" />
                <col width="180" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </th>
                  <th>No</th>
                  <th>카테고리</th>
                  <th>타이틀</th>
                  <th>수신성공/전체수신자</th>
                  <th>발송시간</th>
                  <th>발송자</th>
                  <th>발송형태</th>
                  <th>발송상태</th>
                </tr>
              </thead>
              <tbody>
                <!-- 데이터 없을 경우 -->
                <tr><td colspan="10" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
              </tbody>
            </table>
          </div>
          <!-------------------------------------->
          <br /><br />
          <div class="boardTop">
            <div class="left-po">
              <div class="listSearch">
                <div class="back">

                    <div class="bdLine">
                      <input type="text" placeholder="발송시점, 메시지 내용 검색" />
                      <button class="btnSearch">검색</button>
                    </div>
                    <div>
                      <button class="btnRefresh">초기화</button>
                    </div>

                </div>
              </div>
            </div>
            <div class="right-po">
              <button class="btnAdd">신규등록</button>
              <button class="btnM line">취소</button>
            </div>
          </div>
          <div class="tls subGreen">
            <table>
              <colgroup>
                <col width="80" />
                <col width="80" />
                <col width="140" />
                <col width="480" />
                <col width="160" />
                <col width="160" />
                <col width="140" />
                <col width="140" />
                <col width="180" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </th>
                  <th>No</th>
                  <th>카테고리</th>
                  <th>타이틀</th>
                  <th>수신성공/전체수신자</th>
                  <th>발송시간</th>
                  <th>발송자</th>
                  <th>발송형태</th>
                  <th>발송상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" checked />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>67</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td class="blue">성공</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-------------------------------------->
          <br /><br />
          <div class="subTit">
            <h3>기본 정보</h3>
          </div>
          <div class="tls subBrown">
            <table>
              <colgroup>
                <col width="80" />
                <col width="80" />
                <col width="140" />
                <col width="480" />
                <col width="160" />
                <col width="160" />
                <col width="140" />
                <col width="140" />
                <col width="180" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </th>
                  <th>No</th>
                  <th>카테고리</th>
                  <th>타이틀</th>
                  <th>수신성공/전체수신자</th>
                  <th>발송시간</th>
                  <th>발송자</th>
                  <th>발송형태</th>
                  <th>발송상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" checked />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>67</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td class="blue">성공</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-------------------------------------->
          <br /><br />
          <div class="subTit">
            <h3>기본 정보</h3>
      			<span class="right"><em>361145 / 김지민 / jimin0123</em> 님의 정보입니다.</span>
          </div>
          <div class="tls record">
            <table>
              <colgroup>
                <col width="80" />
                <col width="80" />
                <col width="140" />
                <col width="480" />
                <col width="160" />
                <col width="160" />
                <col width="140" />
                <col width="140" />
                <col width="180" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <span class="checkSet noLabel">
                      <input type="checkbox" />
                      <label for=""><i></i></label>
                    </span>
                  </th>
                  <th>No</th>
                  <th>카테고리</th>
                  <th>타이틀</th>
                  <th>수신성공/전체수신자</th>
                  <th>발송시간</th>
                  <th>발송자</th>
                  <th>발송형태</th>
                  <th>발송상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" checked />
                      <label for=""><i></i></label>
                    </span>
                  </td>
                  <td>67</td>
                  <td>공지사항</td>
                  <td class="tL"><a href="">앱다운로드 페이지 링크가 문자(sms)로 전송되었습니다.</a></td>
                  <td>1 / 1</td>
                  <td>2021-02-08 12:23:20</td>
                  <td>s-work</td>
                  <td>즉시발송</td>
                  <td class="blue">성공</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-------------------------------------->
          <br /><br />
          <div class="subTit">
            <h3>기본 정보</h3>
            <span class="right"><button class="btnM greenline">임시 비밀번호 발송</button></span>
          </div>
          <div class="tvs">
            <table>
              <colgroup>
      					<col width="160"/>
      					<col width="*"/>
              </colgroup>
              <tbody>
                <tr>
                  <th></th>
                  <td></td>
                </tr>
                <tr>
                  <th></th>
                  <td class="halfUnit case37">
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">연도 선택</option>
                        <option value="">2021</option>
                        <option value="">2020</option>
                        <option value="">2019</option>
                      </select>
                    </span>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td class="halfUnit">
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">영상종류 선택</option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </span>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">게시지점 선택</option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td class="halfUnit">
                    <span><input type="text"></span>
                    <span><input type="text"></span>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <ul class="fileList">
                      <li><span>신간교재 목차 정리.PDF</span>  <a download class="btnDownloadSmall">파일다운로드</a></li>
                      <li><span>부록_마음을열어주는가비국어부록_마음을열어주는가비국어부록_마음을열어주는가비국어부록_마음을열어주는가비국어부록_마음을열어주는가비국어부록_마음을열어주는가비국어부록_마음을열어주는가비국어.PDF</span>  <a download class="btnDownloadSmall">파일다운로드</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="tvs record">
            <table>
              <colgroup>
      					<col width="160"/>
      					<col width="*"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>메모</th>
                  <td>
      							<span class="ipBtn sizeM">
      								<input type="text" />
      								<button class="btnM line">저장</button>
      							</span>
                    <ul class="recordList">
                      <li><strong>[2021-02-23 15:35  / 박미진 ]</strong>   수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임. <button class="btnDelete">삭제</button></li>
                      <li><strong>[2021-02-23 15:35  / 박미진 ]</strong>   수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임. </li>
                      <li><strong>[2021-02-23 15:35  / 박미진 ]</strong>   수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임. </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-------------------------------------->
        </div>
        <!-- //page layout -->
      </article>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'Layout',
  components: {
  },
  data() {
    return {
      dropTrigger: false,
      date: '',
      range: {
        start: new Date(),
        end: new Date(),
      },
      multiValue2: null,
      optionsMulti2: [
        {
          dep1: '교육학',
          dep2: [
            { name: '교육학', category: 'subject01' },
          ]
        },
        {
          dep1: '논술·면접',
          dep2: [
            { name: '면접', category: 'subject02' },
            { name: '논술', category: 'subject02' },
          ]
        },
        {
          dep1: '유아',
          dep2: [
            { name: '유아', category: 'subject03' },
          ]
        },
        {
          dep1: '초등',
          dep2: [
            { name: '초등', category: 'subject04' },
          ]
        },
        {
          dep1: '중등',
          dep2: [
            { name: '국어', category: 'subject05' },
            { name: '영어', category: 'subject05' },
            { name: '수학교육론', category: 'subject05' },
          ]
        },
        {
          dep1: '전기 전자 통신',
          dep2: [
            { name: '전기 전자 통신', category: 'subject06' },
          ]
        }
      ],
    }
  },
}
</script>

<style lang="css" scoped>
</style>
