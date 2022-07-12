<template lang="html">
  <div class="monthTestViewNotice">
    <!-- 목록 -->
    <div class="listView" v-if="view == 'list'">
      <div class="subTit">
        <span class="right">
          <em> M-99999999999 |  단일  |  국어  |  박노송  |  2.3교시 타입  |  박노송 전공국어 – 월별 모의고사</em>입니다.
        </span>
      </div>
      <div class="boardTop">
        <div class="left-po">
          <span class="checkSet">
            <input type="checkbox" checked="checked">
            <label for=""><i></i>노출 허용으로 설정된 정보 조회</label>
          </span>
        </div>
        <div class="listSearch">
          <div class="back">
            <div class="bdLine">
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">구분</option>
                    <option value="">일반</option>
                    <option value="">전공</option>
                    <option value="">선생님</option>
                  </select>
                </span>
              </span>
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">과목</option>
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
                <span class="calDupSet">
                  <VCalendar class="calSet" v-model="date02" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly placeholder="시작일 선택" />
                    </template>
                  </VCalendar>
                  <em>~</em>
                  <VCalendar class="calSet" v-model="date03" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly placeholder="종료일 선택" />
                    </template>
                  </VCalendar>
                </span>
              </span>
              <span class="lsItem">
                <input type="text" placeholder="작성자, 제목 검색" />
                <button class="btnSearch">검색</button>
              </span>
            </div>
            <div><button class="btnRefresh">초기화</button></div>
          </div>
        </div>
        <div class="right-po">
          <a class="btnAdd" @click="view = 'write'">신규등록</a>
        </div>
      </div>
      <!-- 상단고정 테이블 목록 -->
      <div class="tls mb20">
        <table>
          <colgroup>
            <col width="120">
            <col width="120">
            <col width="80">
            <col width="100">
            <col width="*">
            <col width="80">
            <col width="80">
            <col width="130">
            <col width="130">
          </colgroup>
          <thead>
            <tr>
              <th scope="col">노출 여부</th>
              <th scope="col">순서</th>
              <th scope="col">상단 고정</th>
              <th scope="col">과목/선생님</th>
              <th scope="col">제목</th>
              <th scope="col">PC</th>
              <th scope="col">모바일</th>
              <th scope="col">조회수</th>
              <th scope="col">작성일</th>
              <th scope="col">작성자</th>
            </tr>
          </thead>
          <tbody>
            <!--Loop-->
            <tr class="waited">
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push1" checked/>
                  <label for="push1">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
              <td>
                <button class="btnPosArrow">위로</button>
                <button class="btnPosArrow down">아래로</button>
              </td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" checked/>
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>국어</br>박노송</td>
              <td class="tL"><a @click="view = 'detail'">[재도전 응원] 연간쌤팩, 3월 신규강의 할인 혜택</a></td>
              <td>●</td>
              <td>●</td>
              <td>1,500</td>
              <td>2021-05-25</td>
              <td>홍길동<br/>(hon123)</td>
            </tr>
            <!--//Loop-->
            <tr class="waited">
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push2"/>
                  <label for="push2">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
              <td>
                <button class="btnPosArrow">위로</button>
                <button class="btnPosArrow down">아래로</button>
              </td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" checked/>
                  <label for=""><i></i></label>
                </span>
              </td>
              <td></td>
              <td class="tL"><a @click="view = 'detail'">[전원100%증정] 21학년도 최종합격수기 이벤트</a></td>
              <td>●</td>
              <td></td>
              <td>32</td>
              <td>2021-05-20</td>
              <td>고길동<br/>(hon125)</td>
            </tr>
            <tr class="waited">
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push3" checked/>
                  <label for="push3">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
              <td>
                <button class="btnPosArrow">위로</button>
                <button class="btnPosArrow down">아래로</button>
              </td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" checked/>
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>중국어</br>gkswjddms</td>
              <td class="tL"><a @click="view = 'detail'">[중국어] 2021년 3~4월 강의 접수 안내</a></td>
              <td></td>
              <td>●</td>
              <td>1</td>
              <td>2021-05-19</td>
              <td>김길동<br/>(hon124)</td>
            </tr>
            <tr class="waited">
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push4"/>
                  <label for="push4">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
              <td>
                <button class="btnPosArrow">위로</button>
                <button class="btnPosArrow down">아래로</button>
              </td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" checked/>
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>유아</br>배지윤</td>
              <td class="tL"><a @click="view = 'detail'">[유아 배지윤]1~2월 강의 연간 쌤팩 지금 전환!</a></td>
              <td></td>
              <td>●</td>
              <td>333</td>
              <td>2021-05-15</td>
              <td>이길동<br/>(hon126)</td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="10" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
          </tbody>
        </table>
      </div>
      <!-- //상단고정 테이블 목록 -->
      <!-- 테이블 목록 -->
      <div class="tls">
        <table>
          <colgroup>
            <col width="120">
            <col width="70">
            <col width="110">
            <col width="*">
            <col width="80">
            <col width="80">
            <col width="130">
            <col width="130">
          </colgroup>
          <thead>
            <tr>
              <th scope="col">노출 여부</th>
              <th scope="col">상단 고정</th>
              <th scope="col">과목/선생님</th>
              <th scope="col">제목</th>
              <th scope="col">PC</th>
              <th scope="col">모바일</th>
              <th scope="col">조회수</th>
              <th scope="col">작성일</th>
              <th scope="col">작성자</th>
            </tr>
          </thead>
          <tbody>
            <!--Loop-->
            <tr>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push5" checked/>
                  <label for="push5">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" checked/>
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>국어<br/>박노송</td>
              <td class="tL"><a @click="view = 'detail'">[재도전 응원] 연간쌤팩, 3월 신규강의 할인 혜택</a></td>
              <td>●</td>
              <td>●</td>
              <td>1,500</td>
              <td>2021-05-25</td>
              <td>홍길동<br/>(hon123)</td>
            </tr>
            <!--//Loop-->
            <tr>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push6"/>
                  <label for="push6">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox"/>
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>-</td>
              <td class="tL"><a @click="view = 'detail'">[전원100%증정] 21학년도 최종합격수기 이벤트</a></td>
              <td>●</td>
              <td></td>
              <td>32</td>
              <td>2021-05-20</td>
              <td>고길동<br/>(hon123)</td>
            </tr>
            <tr>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push7" checked/>
                  <label for="push7">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" checked/>
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>중국어<br/>한정은</td>
              <td class="tL"><a @click="view = 'detail'">[중국어] 2021년 3~4월 강의 접수 안내</a></td>
              <td></td>
              <td>●</td>
              <td>1</td>
              <td>2021-05-19</td>
              <td>이길동<br/>(hon123)</td>
            </tr>
            <tr>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push8"/>
                  <label for="push8">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox"/>
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>유아<br/>배지윤</td>
              <td class="tL"><a @click="view = 'detail'">[유아 배지윤]1~2월 강의 연간 쌤팩 지금 전환!</a></td>
              <td>●</td>
              <td>●</td>
              <td>333</td>
              <td>2021-05-15</td>
              <td>이길동<br/>(hon123)</td>
            </tr>
            <tr>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push9" checked/>
                  <label for="push9">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox"/>
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>-</td>
              <td class="tL"><a @click="view = 'detail'">[16회 희소모의고사] 온라인 응시생 대상 배송지정보 등록 안내</a></td>
              <td>●</td>
              <td></td>
              <td>1,500</td>
              <td>2021-05-13</td>
              <td>서길동<br/>(hon123)</td>
            </tr>
            <tr>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push10" checked/>
                  <label for="push10">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox"/>
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>-</td>
              <td class="tL"><a @click="view = 'detail'">희소 5~6월 온라인 강의 0원 무료체험</a></td>
              <td></td>
              <td>●</td>
              <td>32</td>
              <td>2021-05-10</td>
              <td>장길동<br/>(hon123)</td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="9" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
          </tbody>
        </table>
      </div>
      <Paginate />
      <!-- 테이블 목록 -->
    </div>
    <!-- //목록 -->
    <!-- 신규등록 -->
    <div class="writeView" v-else-if="view == 'write'">
      <!-- 설정 -->
      <div class="subTit">
        <h3>설정</h3>
        <span class="right">
          <button class="btnM ml10">저장</button>
          <a class="btnM gray ml10" @click="view = 'list'">취소</a>
        </span>
      </div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160">
            <col width="40%">
            <col width="160">
            <col width="*">
          </colgroup>
          <tbody>
            <tr>
              <th>구분 <sup>필수</sup></th>
              <td>
                <span class="selectSet mr5">
                  <select name="" id="">
                    <option value="no" class="label">선택</option>
                    <option value="">일반</option>
                    <option value="">전공</option>
                  </select>
                </span>
                <!--상위에서 전공 선택 시 -->
                <span class="selectSet mr5">
                  <select name="" id="">
                    <option value="no" class="label">과목</option>
                  </select>
                </span>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="no" class="label">선생님</option>
                    <option value="">일반</option>
                  </select>
                </span>
                <!--//상위에서 전공 선택 시 -->
              </td>
              <th>노출 미디어 <sup>필수</sup></th>
              <td>
                <span class="checkSet">
                  <input type="checkbox" checked/>
                  <label for=""><i></i>PC</label>
                </span>
                <span class="checkSet">
                  <input type="checkbox"/>
                  <label for=""><i></i>모바일</label>
                </span>
              </td>
            </tr>
            <tr>
              <th>상단 고정</th>
              <td>
                <span class="checkSet">
                  <input type="checkbox" checked/>
                  <label for=""><i></i>상단에 고정함</label>
                </span>
              </td>
              <th>노출 여부</th>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="" checked>
                  <label for="">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //설정 -->
      <!-- 전공게시대상 설정 -->
      <div class="subTit">
        <h3>전공게시대상 설정</h3>
        <span class="ml10">※ <과목>을 선택하고 [추가]버튼을 클릭하면 <과목>만 등록할 수 있음</span>
      </div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160">
            <col width="*">
          </colgroup>
          <tbody>
            <tr>
              <th>과목, 선생님 <sup>필수</sup></th>
              <td>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">과목</option>
                  </select>
                </span>
                <span class="selectSet ml5">
                  <select name="" id="">
                    <option value="">선생님</option>
                  </select>
                </span>
                <button class="btnS line ml5">추가</button>
                <div class="mt10 selectCase">
                  <span class="saveBox"><input type="checkbox" id="quick2"><label for="quick2">교육학</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick3"><label for="quick3">교육학 김현</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick4"><label for="quick4">국어</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick5"><label for="quick5">국어 송헌</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick6"><label for="quick6">국어 김준</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick7"><label for="quick7">영어</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick8"><label for="quick8">영어 송헌</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick9"><label for="quick9">유아 배지윤</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick10"><label for="quick10">수학</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick11"><label for="quick11">과학교육론</label><button>닫기</button></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //전공게시대상 설정 -->
      <!-- 내용 -->
      <div class="subTit"><h3>공지 내용</h3></div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <th>제목 <sup>필수</sup></th>
              <td><input type="text"/></td>
            </tr>
            <tr>
              <th>내용 <sup>필수</sup></th>
              <td>
                <textarea rows="4"></textarea>
              </td>
            </tr>
            <tr>
              <th>파일첨부</th>
              <td>
                <button class="btnS line">+ 파일추가</button>
                <ul class="fileList writeCase">
                  <li><span><a href="#" download>로그인에러1.png</a><button class="btnDelete ml5">삭제</button></span></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //내용 -->
    </div>
    <!-- //신규등록 -->
    <!-- 상세 -->
    <div class="detailView" v-else-if="view == 'detail'">
      <!-- 설정 -->
      <div class="subTit">
        <h3>설정</h3>
        <span class="right">
          <button class="btnM ml10">저장</button>
          <a class="btnM line ml10">삭제</a>
        </span>
      </div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160">
            <col width="40%">
            <col width="160">
            <col width="*">
          </colgroup>
          <tbody>
            <tr>
              <th>구분 <sup>필수</sup></th>
              <td>
                <span class="selectSet mr5">
                  <select name="" id="">
                    <option value="no" class="label">선택</option>
                    <option value="">일반</option>
                    <option value="">전공</option>
                  </select>
                </span>
                <!--상위에서 전공 선택 시 -->
                <span class="selectSet mr5">
                  <select name="" id="">
                    <option value="no" class="label">과목</option>
                  </select>
                </span>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="no" class="label">선생님</option>
                    <option value="">일반</option>
                  </select>
                </span>
                <!--//상위에서 전공 선택 시 -->
              </td>
              <th>노출 미디어 <sup>필수</sup></th>
              <td>
                <span class="checkSet">
                  <input type="checkbox" checked/>
                  <label for=""><i></i>PC</label>
                </span>
                <span class="checkSet">
                  <input type="checkbox"/>
                  <label for=""><i></i>모바일</label>
                </span>
              </td>
            </tr>
            <tr>
              <th>상단 고정</th>
              <td>
                <span class="checkSet">
                  <input type="checkbox" checked/>
                  <label for=""><i></i>상단에 고정함</label>
                </span>
              </td>
              <th>노출 여부</th>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="" checked>
                  <label for="">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //설정 -->
      <!-- 전공게시대상 설정 -->
      <div class="subTit">
        <h3>전공게시대상 설정</h3>
        <span class="ml10">※ <과목>을 선택하고 [추가]버튼을 클릭하면 <과목>만 등록할 수 있음</span>
      </div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160">
            <col width="*">
          </colgroup>
          <tbody>
            <tr>
              <th>과목, 선생님 <sup>필수</sup></th>
              <td>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">과목</option>
                  </select>
                </span>
                <span class="selectSet ml5">
                  <select name="" id="">
                    <option value="">선생님</option>
                  </select>
                </span>
                <button class="btnS line ml5">추가</button>
                <div class="mt10 selectCase">
                  <span class="saveBox"><input type="checkbox" id="quick2"><label for="quick2">교육학</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick3"><label for="quick3">교육학 김현</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick4"><label for="quick4">국어</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick5"><label for="quick5">국어 송헌</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick6"><label for="quick6">국어 김준</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick7"><label for="quick7">영어</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick8"><label for="quick8">영어 송헌</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick9"><label for="quick9">유아 배지윤</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick10"><label for="quick10">수학</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick11"><label for="quick11">과학교육론</label><button>닫기</button></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //전공게시대상 설정 -->
      <!-- 내용 -->
      <div class="subTit"><h3>공지 내용</h3></div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <th>제목 <sup>필수</sup></th>
              <td><input type="text" value="희소모고 응시생 8,ㅁ130명 요청, 교육학 필수 특강할인"/></td>
            </tr>
            <tr>
              <th>내용 <sup>필수</sup></th>
              <td>
                <textarea rows="4">안녕하세요.
                교사의 꿈을 위한 수험 동반자,
                KG에듀원 교원임용 희소/쌤플러스 입니다.

                이제는 확실하게 선택하고 집중해야 할 때!
                희소모의고사 응시생 8,130명이 요청한
                교육학 필수특강 할인 이벤트 안내 드립니다.
                </textarea>
              </td>
            </tr>
            <tr>
              <th>파일첨부</th>
              <td>
                <button class="btnS line">+ 파일추가</button>
                <ul class="fileList writeCase">
                  <li>
                    <span>공지사항안내.pdf</span>
                    <em>
                      <button class="btnDelete">삭제</button>
                    </em>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //내용 -->
      <!--관리-->
      <div class="subTit"><h3>관리</h3></div>
      <div class="tvs record">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <th>수정 이력</th>
              <td>
                <ul class="recordList">
                  <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 제목 변경</li>
                  <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 파일첨부 변경</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--//관리-->
    </div>
    <!-- //상세 -->
  </div>

    <!-- Popup -->
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MonthTestViewNotice',
  data() {
    return {
      view: 'list',
      alertTrigger: false,
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
