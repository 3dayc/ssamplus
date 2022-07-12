<template lang="html">
  <div>
    <div class="teacherViewInfo"><!-- class 없어도 유지 -->
      <!-- 선생님 기본정보 -->
      <div class="subTit">
        <h3>선생님 기본정보</h3>
        <span class="right"><em>T0101-249 |  교육학  | 김현</em> 선생님 정보입니다.</span>
      </div>
      <div class="tvs mb10">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="500"/>
            <col width="160"/>
            <col width="500"/>
          </colgroup>
          <tbody>
            <tr>
              <th>선생님 구분<sup>필수</sup></th>
              <td>
                <span class="radioSet">
                  <input type="radio" name="teacherKind" id="teacherKindOne" value="one" @change="teacherKind($event)" checked/>
                  <label for="teacherKindOne"><i></i>단일 선생님</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="teacherKind" id="teacherKindTeam" value="team" @change="teacherKind($event)"/>
                  <label for="teacherKindTeam"><i></i>선생님 팀</label>
                </span>
              </td>
              <th>선생님 코드</th>
              <td>T0101-249</td>
            </tr>
            <tr>
              <th>강사<sup>필수</sup></th>
              <td>김현</td>
              <th>과목<sup>필수</sup></th>
              <td>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="no" class="label">과목 선택</option>
                    <option value="" selected>교육학</option>
                  </select>
                </span>
              </td>
            </tr>
            <tr>
              <th>사이트 노출 <sup>필수</sup></th>
              <td colspan="3">
                <span class="labelToggleSet tLength3 mr10">
                  <input type="checkbox" id="tpush11" checked>
                  <label for="tpush11">
                    <span>온라인</span>
                    <span>온라인</span>
                  </label>
                </span>
                <span class="labelToggleSet mr10">
                  <input type="checkbox" id="tpush12" checked>
                  <label for="tpush12">
                    <span>서울</span>
                    <span>서울</span>
                  </label>
                </span>
                <!-- 2021-09-02 라이브 강의 toggle -->
                <span class="labelToggleSet tLength3">
                  <input type="checkbox" id="tpush43" checked>
                  <label for="tpush43">
                    <span>라이브</span>
                    <span>라이브</span>
                  </label>
                </span>
                <!-- //2021-09-02 라이브 강의 toggle -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //선생님 기본정보 -->
      <!-- 선생님 소개 -->
      <div class="subTit"><h3>선생님 소개</h3></div>
      <div class="tvs mb10">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="1160"/>
          </colgroup>
          <tbody>
            <tr>
              <th>대표 문구 <sup>필수</sup></th>
              <td>
                <span class="countSet wFull">
                  <input type="text" value="점수를 키우기 위한 교육학"/><span class="counter"><em class="">11/30</em></span>
                </span>
              </td>
            </tr>
            <!-- 2021-12-01 약력/저서 분리 -->
            <tr>
              <th>약력 <sup>필수</sup></th>
              <td>
                <textarea rows="3">약력 -숙명여자대학교 교육학과, 숙명여자대학교 대학원 교육학과 졸업 -교육학 학사, 교육학 석사, 교육학 박사위 취득 -숙명여대, 고려대, 명지대, 한국체육대학, 서울보건대, 한남대, 목원대등 다수 대학에서 교육학 강의-前 을지대학교 교직과 선생님</textarea>
                <div class="countSet fullStyle">
                  <span class="counter"><em class="">0/3,000</em></span>
                </div>
              </td>
            </tr>
            <tr>
              <th>저서 <sup>필수</sup></th>
              <td>
                <textarea rows="3"></textarea>
                <div class="countSet fullStyle">
                  <span class="counter"><em class="">0/3,000</em></span>
                </div>
              </td>
            </tr>
            <!-- //2021-12-01 약력/저서 분리 -->
          </tbody>
        </table>
      </div>
      <!-- //선생님 소개 -->
      <!-- 선생님 이미지 -->
      <div class="subTit"><h3>선생님 이미지</h3></div>
      <div class="teacherImage">
        <div class="imgSlider">
          <div class="sliderContainer">
            <strong>B. 선생님 (대) (520*400)</strong>
            <div class="imgBack">
              <img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/>
            </div>
          </div>
          <button class="btnSlideRight">이전</button>
          <button class="btnSlideLeft">다음</button>
        </div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="60">
              <col width="300">
              <col width="200">
              <col width="120">
              <col width="80">
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>이미지 명</th>
                <th>이미지</th>
                <th>사이즈</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>기본 이미지 <sup>필수</sup></td>
                <td>
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/>
                    <button class="btnDelete">삭제</button>
                  </span>
                </td>
                <td>520 * 400</td>
                <td></td>
              </tr>
              <tr>
                <td>B</td>
                <td>선생님 (대) <sup>필수</sup></td>
                <td>
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/>
                    <button class="btnDelete">삭제</button>
                  </span>
                </td>
                <td>520 * 400</td>
                <td></td>
              </tr>
              <tr>
                <td>C</td>
                <td>선생님 (중)</td>
                <td>
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/>
                    <button class="btnDelete">삭제</button>
                  </span>
                </td>
                <td>520 * 400</td>
                <td><button class="btnS line">삭제</button></td>
              </tr>
              <tr>
                <td colspan="5"><button class="btnS blueline wFull">추가</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- //선생님 이미지 -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'TeacherViewInfo',
  data() {
    return {
      teacherTrigger:1,
      fileOff:false,
      fileOn:true,
      fileName:"김현_2021년도_커리큘럼. jpg",
    }
  },
  methods: {
    teacherKind(event) {
      let optionText = event.target.value;
      if (optionText == 'one') {
        teacherKind = 1;
      } else if (optionText == 'team') {
        teacherKind = 2;
      }
    },
    fileUpload(event) {
      this.fileOff = false;
      this.fileOn = true;
      this.fileName = event.target.value;
    },
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
