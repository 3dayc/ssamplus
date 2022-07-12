<template lang="html">
  <div>
    <div class="teacherViewLecture"><!-- class 없어도 유지 -->
      <!-- 상단 중앙 이미지 -->
      <div class="subTit">
        <h3>상단 중앙 이미지</h3>
        <span class="right">
          <button class="btnPreview mr10">미리보기</button>
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
              <th>선생님 이미지 <sup>필수</sup></th>
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
              <th>텍스트 이미지 <sup>필수</sup></th>
              <td>
                <span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify">01_login_bgtext01_info…<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //상단 중앙 이미지 -->
      <!-- 좌배너 1 (학습전략설명회) -->
      <div class="subTit"><h3>좌배너 1 (학습전략설명회)</h3></div>
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
              <th>타이틀</th>
              <td><input type="text" value="21학년도 <br> 학습전략 설명회"/></td>
              <th>썸네일 이미지</th>
              <td>
                <span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify">01_login_01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner01" v-model="urlLeftBanner01" id="urlLeftBanner011" value="thisWindow" checked/>
                    <label for="urlLeftBanner011"><i></i>본 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner01" v-model="urlLeftBanner01" id="urlLeftBanner012" value="newWindow"/>
                    <label for="urlLeftBanner012"><i></i>새 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner01" v-model="urlLeftBanner01" id="urlLeftBanner013" value="no"/>
                    <label for="urlLeftBanner013"><i></i>링크 없음</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner01" v-model="urlLeftBanner01" id="urlLeftBanner014" value="player"/>
                    <label for="urlLeftBanner014"><i></i>Player 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner01" v-model="urlLeftBanner01" id="urlLeftBanner015" value="youtube"/>
                    <label for="urlLeftBanner015"><i></i>유튜브 열림</label>
                  </span>
                  <div class="mt10">
                    <template v-if="urlLeftBanner01 === 'no'">
                      <input type="text" value="http://" disabled/>
                    </template>
                    <template v-if="urlLeftBanner01 === 'player'">
                      <button class="btnS line" @click="LectureSearch();">강의 검색</button>
                    </template>
                    <template v-if="urlLeftBanner01 === 'youtube'">
                      <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
                    </template>
                    <template v-if="urlLeftBanner01 === 'thisWindow' || urlLeftBanner01 === 'newWindow'">
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //좌배너 1 (학습전략설명회) -->
      <!-- 좌배너 2 (합격전략) -->
      <div class="subTit"><h3>좌배너 2 (합격전략)</h3></div>
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
              <th>썸네일 이미지</th>
              <td colspan="3">
                <span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify">01_login_01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner02" v-model="urlLeftBanner02" id="urlLeftBanner021" value="thisWindow" checked/>
                    <label for="urlLeftBanner021"><i></i>본 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner02" v-model="urlLeftBanner02" id="urlLeftBanner022" value="newWindow"/>
                    <label for="urlLeftBanner022"><i></i>새 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner02" v-model="urlLeftBanner02" id="urlLeftBanner023" value="no"/>
                    <label for="urlLeftBanner023"><i></i>링크 없음</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner02" v-model="urlLeftBanner02" id="urlLeftBanner024" value="player"/>
                    <label for="urlLeftBanner024"><i></i>Player 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner02" v-model="urlLeftBanner02" id="urlLeftBanner025" value="youtube"/>
                    <label for="urlLeftBanner025"><i></i>유튜브 열림</label>
                  </span>
                  <div class="mt10">
                    <template v-if="urlLeftBanner02 === 'no'">
                      <input type="text" value="http://" disabled/>
                    </template>
                    <template v-if="urlLeftBanner02 === 'player'">
                      <button class="btnS line" @click="LectureSearch();">강의 검색</button>
                    </template>
                    <template v-if="urlLeftBanner02 === 'youtube'">
                      <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
                    </template>
                    <template v-if="urlLeftBanner02 === 'thisWindow' || urlLeftBanner02 === 'newWindow'">
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //좌배너 2 (합격전략) -->
      <!-- 좌배너 3 (적중사례) -->
      <div class="subTit"><h3>좌배너 3 (적중사례)</h3></div>
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
              <th>썸네일 이미지</th>
              <td colspan="3">
                <span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify">01_login_01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner03" v-model="urlLeftBanner03" id="urlLeftBanner031" value="thisWindow" checked/>
                    <label for="urlLeftBanner031"><i></i>본 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner03" v-model="urlLeftBanner03" id="urlLeftBanner032" value="newWindow"/>
                    <label for="urlLeftBanner032"><i></i>새 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner03" v-model="urlLeftBanner03" id="urlLeftBanner033" value="no"/>
                    <label for="urlLeftBanner033"><i></i>링크 없음</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner03" v-model="urlLeftBanner03" id="urlLeftBanner034" value="player"/>
                    <label for="urlLeftBanner034"><i></i>Player 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner03" v-model="urlLeftBanner03" id="urlLeftBanner035" value="youtube"/>
                    <label for="urlLeftBanner035"><i></i>유튜브 열림</label>
                  </span>
                  <div class="mt10">
                    <template v-if="urlLeftBanner03 === 'no'">
                      <input type="text" value="http://" disabled/>
                    </template>
                    <template v-if="urlLeftBanner03 === 'player'">
                      <button class="btnS line" @click="LectureSearch();">강의 검색</button>
                    </template>
                    <template v-if="urlLeftBanner03 === 'youtube'">
                      <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
                    </template>
                    <template v-if="urlLeftBanner03 === 'thisWindow' || urlLeftBanner03 === 'newWindow'">
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //좌배너 3 (적중사례) -->
      <!-- 좌배너 4 (나만의학습법) -->
      <div class="subTit"><h3>좌배너 4 (나만의학습법)</h3></div>
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
              <th>썸네일 이미지</th>
              <td colspan="3">
                <span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify">01_login_01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner04" v-model="urlLeftBanner04" id="urlLeftBanner041" value="thisWindow" checked/>
                    <label for="urlLeftBanner041"><i></i>본 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner04" v-model="urlLeftBanner04" id="urlLeftBanner042" value="newWindow"/>
                    <label for="urlLeftBanner042"><i></i>새 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner04" v-model="urlLeftBanner04" id="urlLeftBanner043" value="no"/>
                    <label for="urlLeftBanner043"><i></i>링크 없음</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner04" v-model="urlLeftBanner04" id="urlLeftBanner044" value="player"/>
                    <label for="urlLeftBanner044"><i></i>Player 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLeftBanner04" v-model="urlLeftBanner04" id="urlLeftBanner045" value="youtube"/>
                    <label for="urlLeftBanner045"><i></i>유튜브 열림</label>
                  </span>
                  <div class="mt10">
                    <template v-if="urlLeftBanner04 === 'no'">
                      <input type="text" value="http://" disabled/>
                    </template>
                    <template v-if="urlLeftBanner04 === 'player'">
                      <button class="btnS line" @click="LectureSearch();">강의 검색</button>
                    </template>
                    <template v-if="urlLeftBanner04 === 'youtube'">
                      <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
                    </template>
                    <template v-if="urlLeftBanner04 === 'thisWindow' || urlLeftBanner04 === 'newWindow'">
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //좌배너 4 (나만의학습법) -->
      <!-- 강의 맛보기 1 (영상 컨텐츠) -->
      <div class="subTit"><h3>강의 맛보기 1 (영상 컨텐츠)</h3></div>
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
              <th>타이틀</th>
              <td><input type="text" /></td>
              <th>썸네일 이미지</th>
              <td>
                <span class="uploadMulty">
                  <span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" v-show="showFileChoice">
                    <strong><input type="file" id="fileMulty21" @change="uploadMulty" /><label for="fileMulty21">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="urlPreview01" v-model="urlPreview01" id="urlPreview011" value="thisWindow" checked/>
                    <label for="urlPreview011"><i></i>본 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview01" v-model="urlPreview01" id="urlPreview012" value="newWindow"/>
                    <label for="urlPreview012"><i></i>새 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview01" v-model="urlPreview01" id="urlPreview013" value="no"/>
                    <label for="urlPreview013"><i></i>링크 없음</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview01" v-model="urlPreview01" id="urlPreview014" value="player"/>
                    <label for="urlPreview014"><i></i>Player 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview01" v-model="urlPreview01" id="urlPreview015" value="youtube"/>
                    <label for="urlPreview015"><i></i>유튜브 열림</label>
                  </span>
                  <div class="mt10">
                    <template v-if="urlPreview01 === 'no'">
                      <input type="text" value="http://" disabled/>
                    </template>
                    <template v-if="urlPreview01 === 'player'">
                      <button class="btnS line" @click="LectureSearch();">강의 검색</button>
                    </template>
                    <template v-if="urlPreview01 === 'youtube'">
                      <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
                    </template>
                    <template v-if="urlPreview01 === 'thisWindow' || urlPreview01 === 'newWindow'">
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //강의 맛보기 1 (영상 컨텐츠) -->
      <!-- 강의 맛보기 2 (영상 컨텐츠) -->
      <div class="subTit"><h3>강의 맛보기 2 (영상 컨텐츠)</h3></div>
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
              <th>타이틀</th>
              <td><input type="text" value="이론 강의"/></td>
              <th>썸네일 이미지</th>
              <td>
                <span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify">01_login_bgtext01_info…<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="urlPreview02" v-model="urlPreview02" id="urlPreview021" value="thisWindow" checked/>
                    <label for="urlPreview021"><i></i>본 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview02" v-model="urlPreview02" id="urlPreview022" value="newWindow"/>
                    <label for="urlPreview022"><i></i>새 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview02" v-model="urlPreview02" id="urlPreview023" value="no"/>
                    <label for="urlPreview023"><i></i>링크 없음</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview02" v-model="urlPreview02" id="urlPreview024" value="player"/>
                    <label for="urlPreview024"><i></i>Player 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview02" v-model="urlPreview02" id="urlPreview025" value="youtube"/>
                    <label for="urlPreview025"><i></i>유튜브 열림</label>
                  </span>
                  <div class="mt10">
                    <template v-if="urlPreview02 === 'no'">
                      <input type="text" value="http://" disabled/>
                    </template>
                    <template v-if="urlPreview02 === 'player'">
                      <button class="btnS line" @click="LectureSearch();">강의 검색</button>
                    </template>
                    <template v-if="urlPreview02 === 'youtube'">
                      <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
                    </template>
                    <template v-if="urlPreview02 === 'thisWindow' || urlPreview02 === 'newWindow'">
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //강의 맛보기 2 (영상 컨텐츠) -->
      <!-- 강의 맛보기 3 (영상 컨텐츠) -->
      <div class="subTit"><h3>강의 맛보기 3 (영상 컨텐츠)</h3></div>
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
              <th>타이틀</th>
              <td><input type="text" value="이론 강의"/></td>
              <th>썸네일 이미지</th>
              <td>
                <span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify">01_login_bgtext01_info…<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="urlPreview03" v-model="urlPreview03" id="urlPreview031" value="thisWindow" checked/>
                    <label for="urlPreview031"><i></i>본 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview03" v-model="urlPreview03" id="urlPreview032" value="newWindow"/>
                    <label for="urlPreview032"><i></i>새 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview03" v-model="urlPreview03" id="urlPreview033" value="no"/>
                    <label for="urlPreview033"><i></i>링크 없음</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview03" v-model="urlPreview03" id="urlPreview034" value="player"/>
                    <label for="urlPreview034"><i></i>Player 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview03" v-model="urlPreview03" id="urlPreview035" value="youtube"/>
                    <label for="urlPreview035"><i></i>유튜브 열림</label>
                  </span>
                  <div class="mt10">
                    <template v-if="urlPreview03 === 'no'">
                      <input type="text" value="http://" disabled/>
                    </template>
                    <template v-if="urlPreview03 === 'player'">
                      <button class="btnS line" @click="LectureSearch();">강의 검색</button>
                    </template>
                    <template v-if="urlPreview03 === 'youtube'">
                      <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
                    </template>
                    <template v-if="urlPreview03 === 'thisWindow' || urlPreview03 === 'newWindow'">
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //강의 맛보기 3 (영상 컨텐츠) -->
      <!-- 강의 맛보기 4 (영상 컨텐츠) -->
      <div class="subTit"><h3>강의 맛보기 4 (영상 컨텐츠)</h3></div>
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
              <th>타이틀</th>
              <td><input type="text" value="이론 강의"/></td>
              <th>썸네일 이미지</th>
              <td>
                <span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify">01_login_bgtext01_info…<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="urlPreview04" v-model="urlPreview04" id="urlPreview041" value="thisWindow" checked/>
                    <label for="urlPreview041"><i></i>본 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview04" v-model="urlPreview04" id="urlPreview042" value="newWindow"/>
                    <label for="urlPreview042"><i></i>새 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview04" v-model="urlPreview04" id="urlPreview043" value="no"/>
                    <label for="urlPreview043"><i></i>링크 없음</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview04" v-model="urlPreview04" id="urlPreview044" value="player"/>
                    <label for="urlPreview044"><i></i>Player 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview04" v-model="urlPreview04" id="urlPreview045" value="youtube"/>
                    <label for="urlPreview045"><i></i>유튜브 열림</label>
                  </span>
                  <div class="mt10">
                    <template v-if="urlPreview04 === 'no'">
                      <input type="text" value="http://" disabled/>
                    </template>
                    <template v-if="urlPreview04 === 'player'">
                      <button class="btnS line" @click="LectureSearch();">강의 검색</button>
                    </template>
                    <template v-if="urlPreview04 === 'youtube'">
                      <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
                    </template>
                    <template v-if="urlPreview04 === 'thisWindow' || urlPreview04 === 'newWindow'">
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //강의 맛보기 4 (영상 컨텐츠) -->
      <!-- 강의 맛보기 5 (영상 컨텐츠) -->
      <div class="subTit"><h3>강의 맛보기 5 (영상 컨텐츠)</h3></div>
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
              <th>타이틀</th>
              <td><input type="text" value="이론 강의"/></td>
              <th>썸네일 이미지</th>
              <td>
                <span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify">01_login_bgtext01_info…<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="urlPreview05" v-model="urlPreview05" id="urlPreview051" value="thisWindow" checked/>
                    <label for="urlPreview051"><i></i>본 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview05" v-model="urlPreview05" id="urlPreview052" value="newWindow"/>
                    <label for="urlPreview052"><i></i>새 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview05" v-model="urlPreview05" id="urlPreview053" value="no"/>
                    <label for="urlPreview053"><i></i>링크 없음</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview05" v-model="urlPreview05" id="urlPreview054" value="player"/>
                    <label for="urlPreview054"><i></i>Player 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlPreview05" v-model="urlPreview05" id="urlPreview055" value="youtube"/>
                    <label for="urlPreview055"><i></i>유튜브 열림</label>
                  </span>
                  <div class="mt10">
                    <template v-if="urlPreview05 === 'no'">
                      <input type="text" value="http://" disabled/>
                    </template>
                    <template v-if="urlPreview05 === 'player'">
                      <button class="btnS line" @click="LectureSearch();">강의 검색</button>
                    </template>
                    <template v-if="urlPreview05 === 'youtube'">
                      <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
                    </template>
                    <template v-if="urlPreview05 === 'thisWindow' || urlPreview05 === 'newWindow'">
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
                <div class="tls discountList mt10">
                  <table>
                    <colgroup>
                      <col width="160">
                      <col width="160">
                      <col width="160">
                      <col width="260">
                      <col width="160">
                    </colgroup>
                    <thead>
                      <tr>
                        <th>직/인강</th>
                        <th>강좌번호</th>
                        <th>선생님</th>
                        <th>선생님</th>
                        <th>수강료</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>인강</td>
                        <td>12345</td>
                        <td>장영희</td>
                        <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                        <td>50,000원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="tls discountList mt10">
                  <table>
                    <colgroup>
                      <col width="160">
                      <col width="160">
                      <col width="260">
                      <col width="160">
                      <col width="160">
                      <col width="160">
                      <col width="160">
                    </colgroup>
                    <thead>
                      <tr>
                        <th>카테고리</th>
                        <th>회차</th>
                        <th>강의 제목</th>
                        <th>파일명</th>
                        <th>시간</th>
                        <th>업데이트일</th>
                        <th>직강일</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>중국철학</td>
                        <td>1강</td>
                        <td class="tL">중국철학의 기원</td>
                        <td>21ks_ysh_210301</td>
                        <td>27:35</td>
                        <td>2021-01-01(월)</td>
                        <td>2021-01-01(월)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //강의 맛보기 5 (영상 컨텐츠) -->
      <!-- 중간 띠배너 1 -->
      <div class="subTit">
        <h3>중간 띠배너 1</h3>
				<span class="labelToggleSet ml10">
					<input type="checkbox" id="push1" checked>
					<label for="push1">
						<span>숨김</span>
						<span>노출</span>
					</label>
				</span>
      </div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="1420"/>
          </colgroup>
          <tbody>
            <tr>
              <th>썸네일 이미지</th>
              <td>
                <span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify">01_login_01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner01" v-model="urlLineBanner01" id="urlLineBanner011" value="thisWindow" checked/>
                    <label for="urlLineBanner011"><i></i>본 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner01" v-model="urlLineBanner01" id="urlLineBanner012" value="newWindow"/>
                    <label for="urlLineBanner012"><i></i>새 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner01" v-model="urlLineBanner01" id="urlLineBanner013" value="no"/>
                    <label for="urlLineBanner013"><i></i>링크 없음</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner01" v-model="urlLineBanner01" id="urlLineBanner014" value="player"/>
                    <label for="urlLineBanner014"><i></i>Player 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner01" v-model="urlLineBanner01" id="urlLineBanner015" value="youtube"/>
                    <label for="urlLineBanner015"><i></i>유튜브 열림</label>
                  </span>
                  <div class="mt10">
                    <template v-if="urlLineBanner01 === 'no'">
                      <input type="text" value="http://" disabled/>
                    </template>
                    <template v-if="urlLineBanner01 === 'player'">
                      <button class="btnS line" @click="LectureSearch();">강의 검색</button>
                    </template>
                    <template v-if="urlLineBanner01 === 'youtube'">
                      <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
                    </template>
                    <template v-if="urlLineBanner01 === 'thisWindow' || urlLineBanner01 === 'newWindow'">
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //중간 띠배너 1 -->
      <!-- 중간 띠배너 2 -->
      <div class="subTit">
        <h3>중간 띠배너 2</h3>
				<span class="labelToggleSet ml10">
					<input type="checkbox" id="push2" checked>
					<label for="push2">
						<span>숨김</span>
						<span>노출</span>
					</label>
				</span>
      </div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="1420"/>
          </colgroup>
          <tbody>
            <tr>
              <th>썸네일 이미지</th>
              <td>
                <span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify">01_login_01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner02" v-model="urlLineBanner02" id="urlLineBanner021" value="thisWindow" checked/>
                    <label for="urlLineBanner021"><i></i>본 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner02" v-model="urlLineBanner02" id="urlLineBanner022" value="newWindow"/>
                    <label for="urlLineBanner022"><i></i>새 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner02" v-model="urlLineBanner02" id="urlLineBanner023" value="no"/>
                    <label for="urlLineBanner023"><i></i>링크 없음</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner02" v-model="urlLineBanner02" id="urlLineBanner024" value="player"/>
                    <label for="urlLineBanner024"><i></i>Player 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner02" v-model="urlLineBanner02" id="urlLineBanner025" value="youtube"/>
                    <label for="urlLineBanner025"><i></i>유튜브 열림</label>
                  </span>
                  <div class="mt10">
                    <template v-if="urlLineBanner02 === 'no'">
                      <input type="text" value="http://" disabled/>
                    </template>
                    <template v-if="urlLineBanner02 === 'player'">
                      <button class="btnS line" @click="LectureSearch();">강의 검색</button>
                    </template>
                    <template v-if="urlLineBanner02 === 'youtube'">
                      <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
                    </template>
                    <template v-if="urlLineBanner02 === 'thisWindow' || urlLineBanner02 === 'newWindow'">
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //중간 띠배너 2 -->
      <!-- 중간 띠배너 3 -->
      <div class="subTit">
        <h3>중간 띠배너 3</h3>
				<span class="labelToggleSet ml10">
					<input type="checkbox" id="push2" checked>
					<label for="push2">
						<span>숨김</span>
						<span>노출</span>
					</label>
				</span>
      </div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="1420"/>
          </colgroup>
          <tbody>
            <tr>
              <th>썸네일 이미지</th>
              <td>
                <span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify">01_login_01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td colspan="3">
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner03" v-model="urlLineBanner03" id="urlLineBanner031" value="thisWindow" checked/>
                    <label for="urlLineBanner031"><i></i>본 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner03" v-model="urlLineBanner03" id="urlLineBanner032" value="newWindow"/>
                    <label for="urlLineBanner032"><i></i>새 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner03" v-model="urlLineBanner03" id="urlLineBanner033" value="no"/>
                    <label for="urlLineBanner033"><i></i>링크 없음</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner03" v-model="urlLineBanner03" id="urlLineBanner034" value="player"/>
                    <label for="urlLineBanner034"><i></i>Player 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlLineBanner03" v-model="urlLineBanner03" id="urlLineBanner035" value="youtube"/>
                    <label for="urlLineBanner035"><i></i>유튜브 열림</label>
                  </span>
                  <div class="mt10">
                    <template v-if="urlLineBanner03 === 'no'">
                      <input type="text" value="http://" disabled/>
                    </template>
                    <template v-if="urlLineBanner03 === 'player'">
                      <button class="btnS line" @click="LectureSearch();">강의 검색</button>
                    </template>
                    <template v-if="urlLineBanner03 === 'youtube'">
                      <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
                    </template>
                    <template v-if="urlLineBanner03 === 'thisWindow' || urlLineBanner03 === 'newWindow'">
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //중간 띠배너 3 -->
      <!-- 커리큘럼 (html) -->
      <div class="subTit">
        <h3>커리큘럼 (html)</h3>
        <span class="fGreen ml10">* html 커리큘럼, 영상 커리큘럼 중 하나를 반드시 입력해야 합니다.</span>
      </div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="1420"/>
          </colgroup>
          <tbody>
            <tr>
              <th>커리큘럼 (html)</th>
              <td>
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="" checked/>
                    <label for=""><i></i>본 창 열림</label>
                  </span>
                  <div class="mt10">
                    <template>
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //커리큘럼 (html) -->
      <!-- 커리큘럼 (영상) -->
      <div class="subTit">
        <h3>커리큘럼 (영상)</h3>
        <span class="fGreen ml10">* html 커리큘럼, 영상 커리큘럼 중 하나를 반드시 입력해야 합니다.</span>
      </div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="1420"/>
          </colgroup>
          <tbody>
            <tr>
              <th>썸네일 이미지</th>
              <td>
                <span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                  </span>
                  <span class="fileModify">01_login_01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td>
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="urlCurriculum" v-model="urlCurriculum" id="urlCurriculum1" value="thisWindow" checked/>
                    <label for="urlCurriculum1"><i></i>본 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlCurriculum" v-model="urlCurriculum" id="urlCurriculum2" value="newWindow"/>
                    <label for="urlCurriculum2"><i></i>새 창 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlCurriculum" v-model="urlCurriculum" id="urlCurriculum3" value="no"/>
                    <label for="urlCurriculum3"><i></i>링크 없음</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlCurriculum" v-model="urlCurriculum" id="urlCurriculum4" value="player"/>
                    <label for="urlCurriculum4"><i></i>Player 열림</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="urlCurriculum" v-model="urlCurriculum" id="urlCurriculum5" value="youtube"/>
                    <label for="urlCurriculum5"><i></i>유튜브 열림</label>
                  </span>
                  <div class="mt10">
                    <template v-if="urlCurriculum === 'no'">
                      <input type="text" value="http://" disabled/>
                    </template>
                    <template v-if="urlCurriculum === 'player'">
                      <button class="btnS line" @click="LectureSearch();">강의 검색</button>
                    </template>
                    <template v-if="urlCurriculum === 'youtube'">
                      <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
                    </template>
                    <template v-if="urlCurriculum === 'thisWindow' || urlCurriculum === 'newWindow'">
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>소개 문구</th>
              <td>
                <div class="landingType">
                  <span class="radioSet">
                    <input type="radio" name="" checked/>
                    <label for=""><i></i>본 창 열림</label>
                  </span>
                  <div class="mt10">
                    <template>
                      <input type="text" value="http://www.ssamplus.com/"/>
                    </template>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //커리큘럼 (영상) -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'TeacherViewLectureHome',
  data() {
    return {
      fileOff:false,
      fileOn:true,
      fileName:"김현_B.선생님(대).png",
      showFileChoice: true,
      showFileModify: false,
      urlPreview01: 'player',
      urlPreview02: 'player',
      urlPreview03: 'player',
      urlPreview04: 'player',
      urlPreview05: 'player',
      urlLeftBanner01: 'player',
      urlLeftBanner02: 'thisWindow',
      urlLeftBanner03: 'thisWindow',
      urlLeftBanner04: 'thisWindow',
      urlLineBanner01: 'thisWindow',
      urlLineBanner02: 'thisWindow',
      urlLineBanner03: 'thisWindow',
      urlCurriculum: 'thisWindow',
    }
  },
  methods: {
    fileUpload(event) {
      this.fileOff = false;
      this.fileOn = true;
      this.fileName = event.target.value;
    },
    uploadMulty(event) {
      this.multyFuleName = event.target.value;
      this.showFileChoice = false;
      this.showFileModify = true;
    }, // 파일 업로드2
    LectureSearch() {
      let routeData = this.$router.resolve({name: 'LectureSearch', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceSearch', '_blank', `width=1100,height=900`);
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
