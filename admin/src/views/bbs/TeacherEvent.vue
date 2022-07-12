<template lang="html">
  <div>
    <div class="pageTit">
			<h2>선생님 이벤트</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/noticeNews">선생님 게시판</router-link><em>선생님 이벤트</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="teacherEvent">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <span class="frontTooltip">
              <em>ⓘ Front</em>
              <span>- 수강신청홈 상단 > 노출 건 표시<br/>- 선생님스페셜 홈 > 노출 건 표시<br/>- 선생님스페셜 선생님 이벤트 > 노출 건 표시</span>
            </span>
          </div>
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
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
                  <input type="text" placeholder="제목 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
          </div>
          <div class="right-po">
            <router-link to="/mkup/bbs/teacherEvent/write" class="btnAdd">신규등록</router-link>
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
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="110">
              <col width="130">
              <col width="*">
              <col width="200">
              <col width="100">
              <col width="140">
              <col width="120">
              <col width="120">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">노출 여부</th>
                <th scope="col">이미지</th>
                <th scope="col">제목</th>
                <th scope="col">이벤트 기간</th>
                <th scope="col">조회수</th>
                <th scope="col">작성일</th>
                <th scope="col">Front</th>
                <th scope="col">이벤트<br/>관리페이지</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/teacherEvent/view">[유아 이동건] 전범위 단기복습 이벤트</router-link></td>
                <td>2021-05-01~2021-05-24</td>
                <td>1,500</td>
                <td>2021-05-25</td>
                <td><button class="btnS line">바로가기</button></td>
                <td><button class="btnS line">바로가기</button></td>
              </tr>
              <!--//Loop-->
              <tr>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample02.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/teacherEvent/view">[유아 배지윤] 초단기 이론 정리반!</router-link></td>
                <td>2021-05-01~종료일 미정</td>
                <td>32</td>
                <td>2021-05-20</td>
                <td><button class="btnS line">바로가기</button></td>
                <td></td>
              </tr>
              <tr>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample03.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/teacherEvent/view">[지리 한무일] 초시생 필수 패키지 OPEN</router-link></td>
                <td>2021-05-01~2021-05-24</td>
                <td>1</td>
                <td>2021-05-19</td>
                <td><button class="btnS line">바로가기</button></td>
                <td><button class="btnS line">바로가기</button></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push4" />
                    <label for="push4">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample04.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/teacherEvent/view">[가정 문영은] 가정의 달 이벤트</router-link></td>
                <td>2021-05-01~종료일 미정</td>
                <td>333</td>
                <td>2021-05-15</td>
                <td><button class="btnS line">바로가기</button></td>
                <td><button class="btnS line">바로가기</button></td>
              </tr>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/teacherEvent/view">첫[유아 배지윤] 배쌤과 함께하는 힐링타임1</router-link></td>
                <td>2021-05-01~2021-05-24</td>
                <td>1,500</td>
                <td>2021-05-13</td>
                <td><button class="btnS line">바로가기</button></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push6" checked/>
                    <label for="push6">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample02.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/teacherEvent/view">[유아 이동건] 전범위 단기복습 이벤트</router-link></td>
                <td>2021-05-01~종료일 미정</td>
                <td>32</td>
                <td>2021-05-10</td>
                <td><button class="btnS line">바로가기</button></td>
                <td></td>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample03.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/teacherEvent/view">[유아 배지윤] 초단기 이론 정리반!</router-link></td>
                <td>2021-05-01~2021-05-24</td>
                <td>1</td>
                <td>2021-04-30</td>
                <td><button class="btnS line">바로가기</button></td>
                <td><button class="btnS line">바로가기</button></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push8" checked/>
                    <label for="push8">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample04.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/teacherEvent/view">[지리 한무일] 초시생 필수 패키지 OPEN</router-link></td>
                <td>2021-05-01~종료일 미정</td>
                <td>333</td>
                <td>2021-04-29</td>
                <td><button class="btnS line">바로가기</button></td>
                <td><button class="btnS line">바로가기</button></td>
              </tr>
              <tr class="gray">
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/teacherEvent/view">[가정 문영은] 가정의 달 이벤트</router-link></td>
                <td>2021-05-01~2021-05-24</td>
                <td>1,500</td>
                <td>2021-04-29</td>
                <td><button class="btnS line">바로가기</button></td>
                <td><button class="btnS line">바로가기</button></td>
              </tr>
              <tr class="gray">
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample02.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/teacherEvent/view">[유아 배지윤] 배쌤과 함께하는 힐링타임1</router-link></td>
                <td>2021-05-01~종료일 미정</td>
                <td>32</td>
                <td>2021-04-20</td>
                <td><button class="btnS line">바로가기</button></td>
                <td><button class="btnS line">바로가기</button></td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'TecherEvent',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  },
}
</script>

<style lang="css" scoped>
</style>
