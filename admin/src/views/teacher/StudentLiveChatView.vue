<template lang="html">
  <div>
    <div class="pageTit">
      <h2>강좌별 수강생 조회</h2>
      <span><router-link to="/mkup/teacher/studentOnline">강좌/수강생</router-link><router-link to="/mkup/teacher/studentOnline">강좌별 수강생 조회</router-link><em>라이브채팅</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="studentLiveLectureLive"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li class="">
                    <a href="/mkup/teacher/studentOnline">온라인 강좌</a>
                  </li>
                  <li>
                    <a href="/mkup/teacher/studentDirect">학원 강좌</a>
                  </li>
                  <li class="on">
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
                  <a href="/mkup/teacher/studentLive" class="btnList">목록으로</a>
                </div>
              </div>
              <div class="tls w33p">
                <table>
                  <colgroup><col style="width:12%" span="2"></colgroup>
                  <thead>
                    <tr>
                      <th scope="col">직강일</th>
                      <th scope="col">채팅 보기</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!--Loop-->
                    <tr>
                      <td>2021-02-07</td>
                      <td><button class="btnS line" @click="TeacherLiveChat()">채팅 보기</button></td>
                    </tr>
                    <!--//Loop-->
                    <tr>
                      <td>2021-02-07</td>
                      <td><button class="btnS line" @click="TeacherLiveChat()">채팅 보기</button></td>
                    </tr>
                    <tr>
                      <td>2021-02-07</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>2021-02-07</td>
                      <td></td>
                    </tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="2" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
    <!-- Popup -->
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'StudentLiveChatView',
  data() {
    return {
      lectureTab: 1,
      TeacherLiveChat() {
        let routeData = this.$router.resolve({name: 'TeacherLiveChat', query: {data: "someData"}});
        window.open('/mkup/windowPopup/teacherLiveChat', '_blank', `width=570,height=750`);
      },
    }
  },
  methods: {

  },
  components: {
  }
}
</script>
