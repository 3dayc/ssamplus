<template lang="html">
  <div>
    <div class="pageTit">
      <h2>선생님 조회</h2>
      <span><router-link to="/mkup/member/user">회원/선생님</router-link><router-link to="/mkup/member/teacher/view">선생님 관리</router-link><router-link to="/mkup/member/teacher">선생님 조회</router-link><em>신규등록</em></span><!-- 2021-07-14 메뉴명 변경 -->
    </div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="teacherWrite"><!-- class 없어도 유지 -->
          <!-- 선생님 기본정보 -->
          <div class="subTit">
            <h3>선생님 기본정보</h3>
            <span class="checkSet ml10">
              <input type="checkbox" checked/>
              <label for=""><i></i>현재 오픈된 데이터만 조회</label>
            </span>
            <span class="right">
              <router-link to="/mkup/member/teacher/view" class="btnM green">저장</router-link>
              <router-link to="/mkup/member/teacher" class="btnM ml10">취소</router-link>
            </span>
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
                  <th>선생님 구분 <sup>필수</sup></th>
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
                  <td><p class="infoMsg fGreen">* 신규 등록 후 생성됩니다</p></td>
                </tr>
                <template v-if="tKind == 'one'">
                  <tr>
                    <th>강사<sup>필수</sup></th>
                    <td>
                      <div class="ipSearch wHalf">
                        <input type="text" placeholder="강사명" />
                        <button class="btnSearch">검색</button>
                      </div>
                    </td>
                    <th>과목 <sup>필수</sup></th>
                    <td>
                      <span class="selectSet">
                        <select name="" id="">
                          <option value="no" class="label">과목 선택</option>
                        </select>
                      </span>
                    </td>
                  </tr>
                </template>
                <template v-if="tKind == 'team'">
                  <tr>
                    <th>팀 명 <sup>필수</sup></th>
                    <td><input type="text"/></td>
                    <th>과목 <sup>필수</sup></th>
                    <td>
                      <span class="selectSet">
                        <select name="" id="">
                          <option value="no" class="label">과목 선택</option>
                        </select>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>소속 선생님 <sup>필수</sup></th>
                    <td colspan="3">
                      <span class="selectSet mr10">
                        <select name="" id="">
                          <option value="no" class="label">선생님 선택 1</option>
                        </select>
                      </span>
                      <span class="selectSet mr10">
                        <select name="" id="">
                          <option value="no" class="label">선생님 선택 2</option>
                        </select>
                      </span>
                      <span class="selectSet mr10">
                        <select name="" id="">
                          <option value="no" class="label">선생님 선택 3</option>
                        </select>
                      </span>
                      <span class="selectSet mr10">
                        <select name="" id="">
                          <option value="no" class="label">선생님 선택 4</option>
                        </select>
                      </span>
                      <span class="selectSet mr10">
                        <select name="" id="">
                          <option value="no" class="label">선생님 선택 5</option>
                        </select>
                      </span>
                      <div class="mt10">
                        <button class="btnS line">+ 선생님 추가</button>
                      </div>
                    </td>
                  </tr>
                </template>
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
                      <input type="text"/><span class="counter"><em class="">0/30</em></span>
                    </span>
                  </td>
                </tr>
                <!-- 2021-12-01 약력/저서 분리 -->
                <tr>
                  <th>약력 <sup>필수</sup></th>
                  <td>
                    <div class="countSet fullStyle">
                      <textarea rows="3"></textarea>
                      <span class="counter"><em class="">0/3,000</em></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>저서 <sup>필수</sup></th>
                  <td>
                    <div class="countSet fullStyle">
                      <textarea rows="3"></textarea>
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
                    <td class="tL">기본 이미지 <sup>필수</sup></td>
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
                    <td class="tL">선생님 (대) <sup>필수</sup></td>
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
                    <td class="tL">선생님 (중)</td>
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
                    <td>D</td>
                    <td class="tL"><input type="text"/></td>
                    <td>
                      <span class="uploadThumb">
                        <input type="file" id="imgUpload"/>
                        <label for="imgUpload">파일 첨부</label>
                      </span>
                    </td>
                    <td></td>
                    <td><button class="btnS line">삭제</button></td>
                  </tr>
                  <tr>
                    <td colspan="5"><button class="btnS blueline wFull">추가</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div class="imgUse">
              <strong>(예시)</strong>
              <div class="imgUseList">
                <ul>
                  <li><strong>A. 교수홈</strong><a href="www.ssamplus.com/teacher" target="_blank">www.ssamplus.com/teacher</a></li>
                  <li><strong>B. 아이콘</strong><a href="www.ssamplus.com/teachericon" target="_blank">www.ssamplus.com/teachericon</a></li>
                  <li><strong>C. 교수홈</strong><a href="www.ssamplus.com/teacher" target="_blank">www.ssamplus.com/teacher</a></li>
                  <li><strong>D. 아이콘</strong><a href="www.ssamplus.com/teachericon" target="_blank">www.ssamplus.com/teachericon</a></li>
                  <li><strong>E. 교수홈</strong><a href="www.ssamplus.com/teacher" target="_blank">www.ssamplus.com/teacher</a></li>
                  <li><strong>F. 아이콘</strong><a href="www.ssamplus.com/teachericon" target="_blank">www.ssamplus.com/teachericon</a></li>
                  <li><strong>G. 교수홈</strong><a href="www.ssamplus.com/teacher" target="_blank">www.ssamplus.com/teacher</a></li>
                  <li><strong>H. 아이콘</strong><a href="www.ssamplus.com/teachericon" target="_blank">www.ssamplus.com/teachericon</a></li>
                  <li><strong>I. 교수홈</strong><a href="www.ssamplus.com/teacher" target="_blank">www.ssamplus.com/teacher</a></li>
                  <li><strong>J. 아이콘</strong><a href="www.ssamplus.com/teachericon" target="_blank">www.ssamplus.com/teachericon</a></li>
                </ul>
              </div>
            </div> -->
            <!-- <div class="miniView">
              <ul>
                <li class="empty">
                  <div class="uploadThumb">
                    <input type="file" id="imgUpload"/>
                    <label for="imgUpload">이미지 등록</label>
                  </div>
                  <strong>A. 교수홈</strong>
                  <span class="size">(520*400)</span>
                </li>
                <li class="empty">
                  <div class="uploadThumb">
                    <input type="file" id="imgUpload"/>
                    <label for="imgUpload">이미지 등록</label>
                  </div>
                  <strong>B. 아이콘 소</strong>
                  <span class="size">(240*120)</span>
                </li>
                <li class="empty">
                  <div class="uploadThumb">
                    <input type="file" id="imgUpload"/>
                    <label for="imgUpload">이미지 등록</label>
                  </div>
                  <strong>C. 아이콘 중</strong>
                  <span class="size">(520*400)</span>
                </li>
                <li class="empty">
                  <div class="uploadThumb">
                    <input type="file" id="imgUpload"/>
                    <label for="imgUpload">이미지 등록</label>
                  </div>
                  <strong>D. 교수홈</strong>
                  <span class="size">(520*400)</span>
                </li>
                <li class="empty">
                  <div class="uploadThumb">
                    <input type="file" id="imgUpload"/>
                    <label for="imgUpload">이미지 등록</label>
                  </div>
                  <strong>E. 아이콘 소</strong>
                  <span class="size">(520*400)</span>
                </li>
                <li class="empty">
                  <div class="uploadThumb">
                    <input type="file" id="imgUpload"/>
                    <label for="imgUpload">이미지 등록</label>
                  </div>
                  <strong>F. 아이콘 중</strong>
                  <span class="size">(520*400)</span>
                </li>
                <li class="empty">
                  <div class="uploadThumb">
                    <input type="file" id="imgUpload"/>
                    <label for="imgUpload">이미지 등록</label>
                  </div>
                  <strong>G. 교수홈</strong>
                  <span class="size">(520*400)</span>
                </li>
                <li class="empty">
                  <div class="uploadThumb">
                    <input type="file" id="imgUpload"/>
                    <label for="imgUpload">이미지 등록</label>
                  </div>
                  <strong>H. 교수홈</strong>
                  <span class="size">(520*400)</span>
                </li>
                <li class="empty">
                  <div class="uploadThumb">
                    <input type="file" id="imgUpload"/>
                    <label for="imgUpload">이미지 등록</label>
                  </div>
                  <strong>I. 교수홈</strong>
                  <span class="size">(520*400)</span>
                </li>
                <li class="empty">
                  <div class="uploadThumb">
                    <input type="file" id="imgUpload"/>
                    <label for="imgUpload">이미지 등록</label>
                  </div>
                  <strong>J. 교수홈</strong>
                  <span class="size">(520*400)</span>
                </li>
              </ul>
            </div> -->
          </div>
          <!-- //선새인 이미지 -->
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
  name: 'TeacherWrite',
  data() {
    return {
      teacherTrigger:1,
      tKind:'one',
      fileOff:true,
      fileOn:false,
    }
  },
  methods: {
    teacherKind(event) {
      let optionText = event.target.value;
      this.tKind = optionText;
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
