<template lang="html">
  <div>
    <div class="pageTit">
      <h2>강좌별 수강생 조회</h2>
      <span><router-link to="/mkup/teacher/studentOnline">강좌/수강생</router-link><em>강좌별 수강생 조회</em></span>
    </div>

    <div class="content">
    <article>
      <!-- page layout -->
      <div class="studentDirect"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li>
                    <a href="/mkup/teacher/studentOnline">온라인 강좌</a>
                  </li>
                  <li class="on">
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
            <!-- 온라인 강좌 -->
            <div v-if="lectureTab == 0" class="tabData">
            </div>
            <!-- //온라인 강좌 -->
            <!-- 학원 강좌 -->
            <div v-if="lectureTab == 1" class="tabData">
              <div class="boardTop">
                <div class="left-po">
                  <b class="fBlue">[21 3~4월] 국어교육론 실전대비 과정 |  단과</b> 정보입니다.
                </div>
                <div class="right-po">
                  <a href="/mkup/teacher/studentDirect" class="btnList">목록으로</a>
                </div>
              </div>
              <div class="tls wHalf">
                <table>
                  <colgroup>
                    <col width="300">
                    <col width="200">
                  </colgroup>
                  <thead>
                    <tr>
                      <th>직강일</th>
                      <th>채팅 보기</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2021-02-07</td>
                      <td><button class="btnS line" @click="LectureLiveChat()">채팅 보기</button></td>
                    </tr>
                    <tr>
                      <td>2021-02-10</td>
                      <td><button class="btnS line" @click="LectureLiveChat()">채팅 보기</button></td>
                    </tr>
                    <tr>
                      <td>2021-02-13</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>2021-02-16</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- //학원 강좌 -->
          </div>
        </div>
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
  name: 'StudentDirectLive',
  data() {
    return {
      lectureTab: 1,
    }
  },
  methods: {
    LectureLiveChat() {
      let routeData = this.$router.resolve({name: 'LectureLiveChat', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceLiveChat', '_blank', `width=850,height=20000`);
    },
  },
  components: {
  }
}
</script>
