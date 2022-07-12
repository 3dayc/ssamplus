<template lang="html">
  <div>
    <div class="teacherViewLecture"><!-- class 없어도 유지 -->
      <!-- 수강신청 리스트 -->
      <div class="subTit cpRight">
        <h3>수강신청 리스트</h3>
        <span class="grayBgBox">
          <span class="checkSet">
            <input type="checkbox" name="" id=""/>
            <label for=""><i></i>신규입성 체크</label>
          </span>
        </span>
        <span class="right">
          <button class="btnPreview mr20">미리보기</button>
          <em>T0101-249 |  교육학  | 김현</em> 선생님 정보입니다.
        </span>
      </div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="630"/>
            <col width="160"/>
            <col width="630"/>
          </colgroup>
          <tbody>
            <tr>
              <th>이미지 <sup>필수</sup></th>
              <td><!-- 2021-12-02 colspan 삭제 -->
                <button class="btnS line" @click="SiteTeacherImage();">선생님 이미지</button>
                <div class="mt10">
                  <span class="uploadMulty">
                    <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                    <span class="fileChoice" style="display:none;">
                      <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                      <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                    </span>
                    <span class="fileModify">김현_B.선생님(대).png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                  </span>
                </div>
              </td>
              <!-- 2021-12-02 컬럼 추가 -->
              <th>스마트 수강신청 이미지 <sup>필수</sup></th>
              <td>
                <button class="btnS line" @click="SiteTeacherImage();">선생님 이미지</button>
                <div class="mt10">  
                  <span class="uploadMulty">
                    <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                    <span class="fileChoice" style="display:none;">
                      <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                      <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                    </span>
                    <span class="fileModify">김현_B.선생님(대).png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                  </span>
                </div>
              </td>
              <!-- //2021-12-02 컬럼 추가 -->
            </tr>
            <tr>
              <th>대표 문구 <sup>필수</sup></th>
              <td colspan="3">
                <span class="countSet wFull">
                  <input type="text" value="점수를 키우기 위한 <br> 교육학"/><span class="counter"><em class="">11/30</em></span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //수강신청 리스트 -->
      <!-- 이벤트 (1) -->
      <div class="subTit"><h3>이벤트 (1)</h3></div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="1420"/>
          </colgroup>
          <tbody>
            <tr>
              <th>타이틀</th>
              <td colspan="3"><input type="text" value="스페셜 대면첨삭 이벤트!"/></td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
								<LandingTypeComponent></LandingTypeComponent>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //이벤트 (1) -->
      <!-- 이벤트 (2) -->
      <div class="subTit"><h3>이벤트 (2)</h3></div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="1420"/>
          </colgroup>
          <tbody>
            <tr>
              <th>타이틀</th>
              <td colspan="3"><input type="text"/></td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
								<LandingTypeComponent></LandingTypeComponent>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //이벤트 (2) -->
      <!-- 이벤트 (3) -->
      <div class="subTit"><h3>이벤트 (3)</h3></div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="1420"/>
          </colgroup>
          <tbody>
            <tr>
              <th>타이틀</th>
              <td colspan="3"><input type="text"/></td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
								<LandingTypeComponent></LandingTypeComponent>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //이벤트 (3) -->
      <!-- 이벤트 (4) -->
      <div class="subTit"><h3>이벤트 (4)</h3></div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="1420"/>
          </colgroup>
          <tbody>
            <tr>
              <th>타이틀</th>
              <td colspan="3"><input type="text"/></td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
								<LandingTypeComponent></LandingTypeComponent>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //이벤트 (4) -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'TeacherViewLectureList',
  data() {
    return {
      fileOff:false,
      fileOn:true,
      fileName:"김현_B.선생님(대).png",
    }
  },
  methods: {
    fileUpload(event) {
      this.fileOff = false;
      this.fileOn = true;
      this.fileName = event.target.value;
    },
    SiteTeacherImage() {
      let routeData = this.$router.resolve({name: 'SiteTeacherImage', query: {data: "someData"}});
      window.open('/mkup/windowPopup/siteTeacherImage', '_blank', `width=570,height=750`);
    }, // 선생님 이미지 팝업
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
