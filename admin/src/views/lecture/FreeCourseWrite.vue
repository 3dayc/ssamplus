<template lang="html">
  <div>
		<div class="pageTit">
			<h2>무료 강의</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><router-link to="/mkup/lecture/freeCourse">무료 강의</router-link><em>신규등록</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="freeCourseWrite">
        <!-- 강의 기본정보 -->
        <div class="subTit">
          <h3>강의 기본정보</h3>
          <span class="right">
            <button class="btnM green" @click="toastPop('error', '필수 항목 및 입력 형식을 확인해주세요.'), urlLink()">저장</button>
            <router-link to="/mkup/lecture/freeCourse" class="btnM gray ml10">취소</router-link>
          </span>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="40%"/>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>BEST 설정</th>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i> BEST 설정</label>
                  </span>
                </td>
                <th>노출여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle">
                    <label for="toggle">
                      <span>숨김</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>카테고리 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select class="" name="">
                      <option value="no" class="label">카테고리 선택</option>
                      <option value="">강의 하이라이트</option>
                      <option value="">기출해설</option>
                      <option value="">설명회</option>
                    </select>
                  </span>
                </td>
                <th>과목/선생님 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select class="" name="">
                      <option value="no" class="label">과목 선택</option>
                      <option value="">교육학</option>
                      <option value="">유아</option>
                      <option value="">초등</option>
                      <option value="">국어</option>
                      <option value="">영어</option>
                      <option value="">수학</option>
                      <option value="">음악</option>
                      <option value="">미술</option>
                      <option value="">체육</option>
                      <option value="">중국어</option>
                      <option value="">일본어</option>
                      <option value="">한문</option>
                      <option value="">가정</option>
                      <option value="">도덕윤리</option>
                      <option value="">미용</option>
                      <option value="">역사</option>
                      <option value="">지리</option>
                      <option value="">물리</option>
                      <option value="">화학</option>
                      <option value="">생물</option>
                      <option value="">전문상담</option>
                      <option value="">보건</option>
                      <option value="">유아특수</option>
                      <option value="">초등특수</option>
                      <option value="">중등특수</option>
                      <option value="">과학교육론</option>
                      <option value="">면접</option>
                      <option value="">한국사</option>
                      <option value="">사서직(공무원)</option>
                    </select>
                  </span>
                  <span class="selectSet ml10">
                    <select class="" name="">
                      <option value="no" class="label">선생님 선택</option>
                      <option value="">송현</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <th>강의명 <sup>필수</sup></th>
                <td><input type="text"/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //강의 기본정보 -->
        <!-- 영상 및 썸네일 -->
        <div class="subTit">
          <h3>영상 및 썸네일</h3>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th>강의정보</th>
                <td><button class="btnS line" @click="LectureSearch();">강의검색</button></td>
              </tr>
              <tr>
                <th>썸네일 이미지 <sup>필수</sup></th>
                <td>
                  <span class="uploadMulty">
  		              <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" style="display:none;"/><em>등록된 이미지가 없습니다.</em></span>
  		              <span class="fileChoice"  v-if="showFileChoice">
  		                <strong><input type="file" id="fileMulty2" @change="uploadMulty" /><label for="fileMulty2">파일 첨부</label></strong>
  		                <em>* 권장 이미지 사이즈: 2048 X 1024</em>
  		              </span>
  		              <span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
  		            </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //영상 및 썸네일 -->
      </div>
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'FreeCourseWrite',
  data() {
    return {
      multyFuleName: '파일첨부',
      showFileChoice: true,
      showFileModify: false,
    }
  },
  methods: {
		uploadMulty(event) {
			this.multyFuleName = event.target.value;
			this.showFileChoice = false;
			this.showFileModify = true;
		}, // 파일 업로드2
    LectureSearch() {
      let routeData = this.$router.resolve({name: 'LectureSearch', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceSearch', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  }
}
</script>
