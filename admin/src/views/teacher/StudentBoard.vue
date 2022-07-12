<template lang="html">
  <div>
    <div class="pageTit">
      <h2>강좌별 수강생 조회</h2>
      <span><router-link to="/mkup/teacher/studentOnline">강좌/수강생</router-link><router-link to="/mkup/teacher/studentOnline">강좌별 수강생 조회</router-link><em>첨삭게시판</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="studentOnline"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li class="on">
                    <a href="/mkup/teacher/studentOnline">온라인 강좌</a>
                  </li>
                  <li>
                    <a href="/mkup/teacher/studentDirect">학원 강좌</a>
                  </li>
                  <li class="">
                    <a href="/mkup/teacher/studentLive">라이브 강좌</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="tabLayout">
            <div class="tabData">
              <div class="boardTop">
                <div class="left-po">
                  <b class="fBlue">[21 3~4월] 국어교육론 실전대비 과정 |  단과(무료)</b> 정보입니다.
                </div>
                <div class="right-po">
                  <button class="btnM line" @click="TeacherQuestionWrite()">문제 등록</button>
                  <a href="/mkup/teacher/studentOnline" class="btnList">목록으로</a>
                </div>
              </div>
              <div class="tls">
                <table>
                  <colgroup>
                    <col width="80"/>
                    <col width="*"/>
                    <col width="140"/>
                    <col width="100"/>
                    <col width="100"/>
                    <col width="140"/>
                    <col width="160"/>
                    <col width="160"/>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>회차</th>
                      <th>논제</th>
                      <th>답안 제출 기한</th>
                      <th>문제지</th>
                      <th>답안지</th>
                      <th>첨삭현황</th>
                      <th>첨삭하기</th>
                      <th>등록일자</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!--Loop-->
                    <tr>
                      <td>1</td>
                      <td class="tL"><a @click="TeacherQuestionView()">도약 모의고사 1A</a></td>
                      <td>2021-03-20</td>
                      <td><button class="btnDownloadSmall">다운로드</button></td>
                      <td><button class="btnDownloadSmall">다운로드</button></td>
                      <td>12 / 20<br/>(60%)</td>
                      <td><button class="btnS line" @click="TeacherQuestionAnswer()">첨삭하기</button></td>
                      <td>2021-03-10</td>
                    </tr>
                    <!--//Loop-->
                    <tr>
                      <td>2</td>
                      <td class="tL"><a @click="TeacherQuestionView()">도약 모의고사 1A</a></td>
                      <td>2021-03-20</td>
                      <td><button class="btnDownloadSmall">다운로드</button></td>
                      <td>-</td>
                      <td>0 / 0<br/>(0%)</td>
                      <td><button class="btnS line" @click="TeacherQuestionAnswer()">첨삭하기</button></td>
                      <td>2021-03-10</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td class="tL"><a @click="TeacherQuestionView()">도약 모의고사 1A</a></td>
                      <td>2021-03-20</td>
                      <td>-</td>
                      <td>-</td>
                      <td>0 / 0<br/>(0%)</td>
                      <td><button class="btnS line" @click="TeacherQuestionAnswer()">첨삭하기</button></td>
                      <td>2021-03-10</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td class="tL"><a @click="TeacherQuestionView()">도약 모의고사 1A</a></td>
                      <td>2021-03-20</td>
                      <td><button class="btnDownloadSmall">다운로드</button></td>
                      <td><button class="btnDownloadSmall">다운로드</button></td>
                      <td>12 / 20<br/>(60%)</td>
                      <td><button class="btnS line" @click="TeacherQuestionAnswer()">첨삭하기</button></td>
                      <td>2021-03-10</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td class="tL"><a @click="TeacherQuestionView()">도약 모의고사 1A</a></td>
                      <td>2021-03-20</td>
                      <td>-</td>
                      <td><button class="btnDownloadSmall">다운로드</button></td>
                      <td>0 / 0<br/>(0%)</td>
                      <td><button class="btnS line" @click="TeacherQuestionAnswer()">첨삭하기</button></td>
                      <td>2021-03-10</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td class="tL"><a @click="TeacherQuestionView()">도약 모의고사 1A</a></td>
                      <td>2021-03-20</td>
                      <td><button class="btnDownloadSmall">다운로드</button></td>
                      <td>-</td>
                      <td>0 / 10<br/>(0%)</td>
                      <td><button class="btnS line" @click="TeacherQuestionAnswer()">첨삭하기</button></td>
                      <td>2021-03-10</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td class="tL"><a @click="TeacherQuestionView()">도약 모의고사 1A</a></td>
                      <td>2021-03-20</td>
                      <td><button class="btnDownloadSmall">다운로드</button></td>
                      <td>-</td>
                      <td>12 / 20<br/>(60%)</td>
                      <td><button class="btnS line" @click="TeacherQuestionAnswer()">첨삭하기</button></td>
                      <td>2021-03-10</td>
                    </tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'StudentBoard',
  data() {
    return {
    }
  },
  methods: {
    TeacherQuestionWrite() {
      let routeData = this.$router.resolve({name: 'TeacherQuestionWrite', query: {data: "someData"}});
      window.open('/mkup/windowPopup/teacherQuestionWrite', '_blank', `width=1100,height=900`);
    }, // 윈도우팝업 호출
    TeacherQuestionView() {
      let routeData = this.$router.resolve({name: 'TeacherQuestionView', query: {data: "someData"}});
      window.open('/mkup/windowPopup/teacherQuestionView', '_blank', `width=1100,height=900`);
    }, // 윈도우팝업 관리
    TeacherQuestionAnswer() {
      let routeData = this.$router.resolve({name: 'TeacherQuestionAnswer', query: {data: "someData"}});
      window.open('/mkup/windowPopup/teacherQuestionAnswer', '_blank', `width=1100,height=900`);
    }, // 첨삭하기
  },
  components: {
  }
}
</script>
