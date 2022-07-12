<template lang="html">
  <div>
    <div class="pageTit">
			<h2>공지사항</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/noticeNews">공지게시판</router-link><em>공지사항</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="noticeNews">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <span class="frontTooltip">
              <em>ⓘ Front</em>
              <span>* 기본 정렬 순서: 상단 고정 > 미고정 게시물 최신순<br/>- 메인 공지사항 > 일반공지 6건 표시<br/>- 메인 희소/쌤+ 소식 > 전공/선생님 공지 6건 표시<br/>- 수강신청 선생님홈 상단 > 선생님 공지 3건 표시<br/>- 수강신청 선생님홈 하단 > 선생님 공지 노출 건 표시<br/>- 내 강의실 선생님 공지 > 노출 건 표시<br/>- 공지사항 > 노출 건 표시</span>
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
                  <strong class="title">작성일</strong><!-- 2021-08-02 캘린더 사용 컴포넌트 앞에 타이틀 추가 -->
                  <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                    <template v-slot="{ inputValue, togglePopover, isDragging }">
                      <input :value="inputValue.start + ' ~ ' + inputValue.end" :class="isDragging ? 'text-green-600' : 'text-green-900'" @click="togglePopover()" placeholder="시작일 선택 ~ 종료일 선택" />
                    </template>
                  </Vcalendar>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="작성자, 제목 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
          </div>
          <div class="right-po">
            <router-link to="/mkup/bbs/noticeNews/write" class="btnAdd">신규등록</router-link>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 목록써머리 -->
        <div class="listSummery">
          <div class="left">
            <span class="checkSet">
              <input type="checkbox" checked="checked">
              <label for=""><i></i>노출 허용으로 설정된 정보 조회</label>
            </span>
          </div>
        </div>
        <!-- //목록써머리 -->
        <!-- 상단고정 테이블 목록 -->
        <div class="tls mb20">
          <table>
            <colgroup>
              <col width="100">
              <col width="140">
              <col width="70">
              <col width="100">
              <col width="170">
              <col width="400">
              <col width="130">
              <col width="140">
              <col width="100">
              <col width="140">
              <col width="150">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">노출 여부</th>
                <th scope="col">순서</th>
                <th scope="col">상단 고정</th>
                <th scope="col">구분</th>
                <th scope="col">과목/선생님</th>
                <th scope="col">제목</th>
                <th scope="col">PC 메인</th>
                <th scope="col">모바일 메인</th>
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
                      <span>숨김</span>
                      <span>노출</span>
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
                <td>일반</td>
                <td>-</td>
                <td class="tL"><router-link to="/mkup/bbs/noticeNews/view">[재도전 응원] 연간쌤팩, 3월 신규강의 할인 혜택</router-link></td>
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
                      <span>숨김</span>
                      <span>노출</span>
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
                <td>일반</td>
                <td>-</td>
                <td class="tL"><router-link to="/mkup/bbs/noticeNews/view">[전원100%증정] 21학년도 최종합격수기 이벤트</router-link></td>
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
                      <span>숨김</span>
                      <span>노출</span>
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
                <td>전공</td>
                <td class="tL">중국어 외</td>
                <td class="tL"><router-link to="/mkup/bbs/noticeNews/view">[중국어] 2021년 3~4월 강의 접수 안내</router-link></td>
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
                      <span>숨김</span>
                      <span>노출</span>
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
                <td>전공,</br>선생님</td>
                <td class="tL">유아 배지윤 외</td>
                <td class="tL"><router-link to="/mkup/bbs/noticeNews/view">[유아 배지윤]1~2월 강의 연간 쌤팩 지금 전환!</router-link></td>
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
              <col width="100">
              <col width="70">
              <col width="100">
              <col width="150">
              <col width="500">
              <col width="130">
              <col width="140">
              <col width="100">
              <col width="140">
              <col width="150">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">노출 여부</th>
                <th scope="col">상단 고정</th>
                <th scope="col">구분</th>
                <th scope="col">과목/선생님</th>
                <th scope="col">제목</th>
                <th scope="col">PC 메인 <button class="btnSort asc">정렬</button></th>
                <th scope="col">모바일 메인 <button class="btnSort desc">정렬</button></th>
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
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" checked/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>일반</td>
                <td>-</td>
                <td class="tL"><router-link to="/mkup/bbs/noticeNews/view">[재도전 응원] 연간쌤팩, 3월 신규강의 할인 혜택</router-link></td>
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
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>일반</td>
                <td>-</td>
                <td class="tL"><router-link to="/mkup/bbs/noticeNews/view">[전원100%증정] 21학년도 최종합격수기 이벤트</router-link></td>
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
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" checked/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>전공</td>
                <td>중국어</td>
                <td class="tL"><router-link to="/mkup/bbs/noticeNews/view">[중국어] 2021년 3~4월 강의 접수 안내</router-link></td>
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
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>전공,</br>선생님</td>
                <td>유아 배지윤 외</td>
                <td class="tL"><router-link to="/mkup/bbs/noticeNews/view">[유아 배지윤]1~2월 강의 연간 쌤팩 지금 전환!</router-link></td>
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
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>전공</td>
                <td>교육학 김현</td>
                <td class="tL"><router-link to="/mkup/bbs/noticeNews/view">[16회 희소모의고사] 온라인 응시생 대상 배송지정보 등록 안내</router-link></td>
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
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>전공,</br>선생님</td>
                <td>수학 외</td>
                <td class="tL"><router-link to="/mkup/bbs/noticeNews/view">희소 5~6월 온라인 강의 0원 무료체험</router-link></td>
                <td></td>
                <td>●</td>
                <td>32</td>
                <td>2021-05-10</td>
                <td>장길동<br/>(hon123)</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="10" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <Paginate />
        <!-- 테이블 목록 -->
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
  name: 'NoticeNews',
  data() {
    return {
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
