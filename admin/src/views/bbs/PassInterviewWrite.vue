<template lang="html">
  <div>
    <div class="pageTit">
			<h2>합격자 인터뷰</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/passReview">합격수기</router-link><router-link to="/mkup/bbs/passInterview">합격자 인터뷰</router-link><em>신규등록</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="passInterviewWrite">
        <!-- 기본 설정 -->
        <div class="subTit">
          <h3>기본 설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/passInterview/view" class="btnM green">저장</router-link>
            <router-link to="/mkup/bbs/passInterview" class="btnM ml10">취소</router-link>
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
                    <input type="checkbox" id="chk1">
                    <label for="chk1"><i></i>BEST 설정</label>
                  </span>
                </td>
                <th>노출여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1">
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>연도 / 지역 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">2021</option>
                    </select>
                  </span>
                  <span class="selectSet ml10">
                    <select name="" id="">
                      <option value="no" class="label">지역</option>
                    </select>
                  </span>
                </td>
                <th>과목/선생님 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">과목</option>
                    </select>
                  </span>
                  <span class="selectSet ml10">
                    <select name="" id="">
                      <option value="no" class="label">선생님</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <th>썸네일 이미지 <sup>필수</sup></th>
                <td colspan="3">
                  <span class="uploadMulty">
                    <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" style="display:none;"/><em>등록된 이미지가 없습니다.</em></span>
                    <span class="fileChoice" v-show="showFileChoice">
                      <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                      <em>* 권장 이미지 사이즈: 693 X 395</em>
                    </span>
                    <span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete">삭제</button></span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //기본 설정 -->
        <!-- 영상 -->
        <div class="subTit"><h3>영상</h3></div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="500"/>
              <col width="160"/>
              <col width="500"/>
            </colgroup>
            <tbody>
              <tr>
                <th>제목 <sup>필수</sup></th>
                <td colspan="3"><input type="text"/></td>
              </tr>
              <tr>
                <th>URL <sup>필수</sup></th>
                <td colspan="3">
  								<LandingTypeComponent></LandingTypeComponent>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //영상 -->
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
  name: 'PassInterviewWrite',
  data() {
    return {
      urlTrg1: true,
      urlTrg2: false,
      urlTrg3: false,
      urlTrg4: false,
      urlTrg5: false,
      showFileChoice: true,
      showFileModify: false,
    }
  },
  methods: {
    onChange(event) {
      let optionText = event.target.value;

      this.urlTrg1 = false;
      this.urlTrg2 = false;
      this.urlTrg3 = false;
      this.urlTrg4 = false;
      this.urlTrg5 = false;

      if (optionText == 'urlType1') {
        this.urlTrg1 = true;
      } else if (optionText == 'urlType2') {
        this.urlTrg2 = true;
      } else if (optionText == 'urlType3') {
        this.urlTrg3 = true;
      } else if (optionText == 'urlType4') {
        this.urlTrg4 = true;
      } else {
        this.urlTrg5 = true;
      }
    },
    fileUpload(event) {
      this.fileName = event.target.value;
    }, // 파일 업로드
    uploadMulty(event) {
      this.multyFuleName = event.target.value;
      this.showFileChoice = false;
      this.showFileModify = true;
    }, // 파일 업로드2
  },
  components: {
  }
}
</script>
