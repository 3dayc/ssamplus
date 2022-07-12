<template lang="html">
  <div>
    <div class="pageTit">
      <h2>선생님 상담</h2>
      <span><router-link to="/mkup/teacher/studentOnline">강좌/수강생</router-link><router-link to="/mkup/teacher/studentOnline">수강생 지원</router-link><em>선생님 상담</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="counsel"><!-- class 없어도 유지 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">진행상태</option>
                      <option value="">상담 예정</option>
                      <option value="">상담 취소</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="이름, 아이디, 휴대폰, IP 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
        </div>
        <div class="tls">
          <table>
            <colgroup><col style="width:10%;" span="6"><col><col style="width:20%;"></colgroup>
            <thead>
              <tr>
                <th scope="col">진행 상태</th>
                <th scope="col">내담자</th>
                <th scope="col">수강이력</th>
                <th scope="col">상담장소</th>
                <th scope="col">상담일자</th>
                <th scope="col">상담시간</th>
                <th scope="col">상담유형</th>
                <th scope="col">상담수단</th>
                <th scope="col">상담내용</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>상담 예정</td>
                <td>김희수<br/>(kimhs0123)</td>
                <td>●</td>
                <td>-</td>
                <td>2021-03-27</td>
                <td>13:00 ~ 14:00</td>
                <td>ZOOM</td>
                <td>
                  <span class="ipBtn">
                    <input type="text" />
                    <button class="btnS" @click="alertTrigger = true">저장</button>
                  </span>
                </td>
                <td><button class="btnS line" @click="TeacherCounsel()">보기</button></td>
              </tr>
              <!--//Loop-->
              <tr>
                <td>상담 예정</td>
                <td>김희수<br/>(kimhs0123)</td>
                <td></td>
                <td>-</td>
                <td>2021-03-27</td>
                <td>13:00 ~ 14:00</td>
                <td>ZOOM</td>
                <td>
                  <span class="ipBtn">
                    <input type="text" />
                    <button class="btnS" @click="alertTrigger = true">저장</button>
                  </span>
                </td>
                <td><button class="btnS line" @click="TeacherCounsel()">보기</button></td>
              </tr>
              <tr class="cancel"> <!-- 상담취소시 클래스 cancel 추가 -->
                <td class="fRed">상담 취소</td>
                <td>김희수<br/>(kimhs0123)</td>
                <td>●</td>
                <td>아이비</td>
                <td>2021-03-27</td>
                <td>13:00 ~ 14:00</td>
                <td>전화</td>
                <td>-</td>
                <td><button class="btnS line" @click="TeacherCounsel()">보기</button></td>
              </tr>
              <tr>
                <td>상담 예정</td>
                <td>김희수<br/>(kimhs0123)</td>
                <td>●</td>
                <td>이데아</td>
                <td>2021-03-27</td>
                <td>13:00 ~ 14:00</td>
                <td>1:1 방문</td>
                <td>-</td>
                <td><button class="btnS line" @click="TeacherCounsel()">보기</button></td>
              </tr>
              <tr>
                <td>상담 예정</td>
                <td>김희수<br/>(kimhs0123)</td>
                <td></td>
                <td>-</td>
                <td>2021-03-27</td>
                <td>13:00 ~ 14:00</td>
                <td>전화</td>
                <td>010-1234-5678</td>
                <td><button class="btnS line" @click="TeacherCounsel()">보기</button></td>
              </tr>
              <tr>
                <td>상담 예정</td>
                <td>김희수<br/>(kimhs0123)</td>
                <td>●</td>
                <td>-</td>
                <td>2021-03-27</td>
                <td>13:00 ~ 14:00</td>
                <td>전화</td>
                <td>010-1234-5678</td>
                <td><button class="btnS line" @click="TeacherCounsel()">보기</button></td>
              </tr>
              <tr class="expiry">
                <td>상담 불참</td>
                <td>김희수<br/>(kimhs0123)</td>
                <td>●</td>
                <td>이데아</td>
                <td>2021-03-27</td>
                <td>13:00 ~ 14:00</td>
                <td>1:1 방문</td>
                <td>-</td>
                <td><button class="btnS line" @click="TeacherCounsel()">보기</button></td>
              </tr>
              <tr class="expiry">
                <td>상담 불참</td>
                <td>김희수<br/>(kimhs0123)</td>
                <td>●</td>
                <td>아이비</td>
                <td>2021-03-27</td>
                <td>13:00 ~ 14:00</td>
                <td>1:1 방문</td>
                <td>-</td>
                <td><button class="btnS line" @click="TeacherCounsel()">보기</button></td>
              </tr>
              <tr class="complete"> <!-- 상담완료시 클래스 complete 추가 -->
                <td>상담 완료</td>
                <td>김희수<br/>(kimhs0123)</td>
                <td>●</td>
                <td>아이비</td>
                <td>2021-03-27</td>
                <td>13:00 ~ 14:00</td>
                <td>1:1 방문</td>
                <td>-</td>
                <td><button class="btnS line" @click="TeacherCounsel()">보기</button></td>
              </tr>
              <tr class="complete"> <!-- 상담완료시 클래스 complete 추가 -->
                <td>상담 완료</td>
                <td>김희수<br/>(kimhs0123)</td>
                <td>●</td>
                <td>이데아</td>
                <td>2021-03-27</td>
                <td>13:00 ~ 14:00</td>
                <td>1:1 방문</td>
                <td>-</td>
                <td><button class="btnS line" @click="TeacherCounsel()">보기</button></td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="9" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <Paginate />
      </div>
      <!-- //page layout -->
    </article>
    </div>

    <!-- Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false" :popClass="classValue">
      <template slot="modalbody">
        확인 선택시 아래 메시지가 상담신청 회원에게 발송됩니다. 발송 하시겠습니까?
        <div class="mt10 tL border1Gray pd10">
          안녕하세요 희소 고시학원입니다.<br/>회원님이 신청하신 김현 선생님 – ZOOM 상담의 접속링크를 안내 드립니다<br/><br/>- 상담 날짜: 2021-03-27(금)<br/>- 상담 시간: 13:00 ~ 14:00<br/>- url: https://zoom.com/1B2F32g<br/><br/>내용 확인하시어 알찬 상담 진행하시기 바랍니다.<br/>희소고시학원
        </div>
      </template>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">취소</button>
        <button class="btnM blue" @click="alertTrigger = false">완료</button>
      </template>
    </Alert>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'Counsel',
  data() {
    return {
      alertTrigger: false,
      classValue: "teacherCounselPop",
    }
  },
  methods: {
    TeacherCounsel() {
      let routeData = this.$router.resolve({name: 'TeacherCounsel', query: {data: "someData"}});
      window.open('/mkup/windowPopup/teacherCounsel', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  }
}
</script>
