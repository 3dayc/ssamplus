<template lang="html">
  <div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="singleCourseViewData">
          <!-- 강좌 자료 관리 -->
          <div class="subTit">
            <span class="left">
              <div class="listSearch">
                <div class="back">
                  <div class="bdLine">
                    <span class="lsItem">
                      <span class="selectSet lCase">
                        <select name="" id="">
                          <option value="">온라인</option>
                          <option value="">서울학원</option>
                        </select>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <span class="right"><em>MO-2104-001 | MS-2104-001 |  장영희 | 전공중국어 – 80점 도약모의고사반</em> 강좌입니다.</span><!-- 2021-07-14 수정 -->
          </div>
          <!-- 2021-11-29 직강일 관리 추가 -->
          <div class="tR mb10">
            <button class="btnS line" @click="LectureUpdateMgt()">직강일 관리</button>
          </div>
          <!-- //2021-11-29 직강일 관리 추가 -->
          <div class="tls" v-show="academy=='online'">
            <table>
              <colgroup>
                <col width="40">
                <col width="220">
                <col width="220">
                <col width="140">
                <col width="100">
                <col width="80">
                <col width="100">
              </colgroup>
              <thead>
                <tr>
                  <th>노출 여부</th>
                  <th>제목</th>
                  <th>자료</th>
                  <th>직강일</th>
                  <th>인쇄전용 체크</th>
                  <th>조회수</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="push1" checked>
                      <label for="push1">
                        <span>차단</span>
                        <span>허용</span>
                      </label>
                    </span>
                  </td>
                  <td><input type="text" /></td>
                  <td>
                    <span class="uploadFile wFull">
                      <input type="file" id="file" @change="fileUpload">
                      <span class="upload-name">{{ fileName }}</span>
                      <label for="file">불러오기</label>
                    </span>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="d1" checked>
                      <label for="d1"><i></i></label>
                    </span>
                  </td>
                  <td>1,500</td>
                  <td>2021-05-25</td>
                </tr>
                <tr>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="push12">
                      <label for="push12">
                        <span>차단</span>
                        <span>허용</span>
                      </label>
                    </span>
                  </td>
                  <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
                  <td>
                    <span class="uploadFile wFull">
                      <input type="file" id="file2" @change="fileUpload">
                      <span class="upload-name">{{ fileName }}</span>
                      <label for="file2">불러오기</label>
                    </span>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="d1" checked>
                      <label for="d1"><i></i></label>
                    </span>
                  </td>
                  <td>32</td>
                  <td>2021-05-20</td>
                </tr>
                <tr>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="push13" checked>
                      <label for="push13">
                        <span>차단</span>
                        <span>허용</span>
                      </label>
                    </span>
                  </td>
                  <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
                  <td>
                    <span class="uploadFile wFull">
                      <input type="file" id="file3" @change="fileUpload">
                      <span class="upload-name">{{ fileName }}</span>
                      <label for="file3">불러오기</label>
                    </span>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="d1" >
                      <label for="d1"><i></i></label>
                    </span>
                  </td>
                  <td>1</td>
                  <td>2021-05-19</td>
                </tr>
                <tr>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="push14">
                      <label for="push14">
                        <span>차단</span>
                        <span>허용</span>
                      </label>
                    </span>
                  </td>
                  <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
                  <td>
                    <span class="uploadFile wFull">
                      <input type="file" id="file4" @change="fileUpload">
                      <span class="upload-name">{{ fileName }}</span>
                      <label for="file4">불러오기</label>
                    </span>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="d1" checked>
                      <label for="d1"><i></i></label>
                    </span>
                  </td>
                  <td>333</td>
                  <td>2021-05-15</td>
                </tr>
                <tr>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="push15" checked>
                      <label for="push15">
                        <span>차단</span>
                        <span>허용</span>
                      </label>
                    </span>
                  </td>
                  <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
                  <td>
                    <span class="uploadFile wFull">
                      <input type="file" id="file5" @change="fileUpload">
                      <span class="upload-name">{{ fileName }}</span>
                      <label for="file5">불러오기</label>
                    </span>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="d1" checked>
                      <label for="d1"><i></i></label>
                    </span>
                  </td>
                  <td>1,500</td>
                  <td>2021-05-13</td>
                </tr>
                <tr>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="push16" checked>
                      <label for="push16">
                        <span>차단</span>
                        <span>허용</span>
                      </label>
                    </span>
                  </td>
                  <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
                  <td>
                    <span class="uploadFile wFull">
                      <input type="file" id="file6" @change="fileUpload">
                      <span class="upload-name">{{ fileName }}</span>
                      <label for="file6">불러오기</label>
                    </span>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="d1" >
                      <label for="d1"><i></i></label>
                    </span>
                  </td>
                  <td>32</td>
                  <td>2021-05-10</td>
                </tr>
                <tr style="display:none;">
                  <td colspan="7" class="noneData">등록된 데이터가 없습니다.</td>
                </tr>
                <tr>
                  <td colspan="7">
                      <button class="btnM blueline wFull">+ 행 추가</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="tls" v-show="academy=='seoul'">
            <table>
              <colgroup>
                <col width="40">
                <col width="220">
                <col width="220">
                <col width="140">
                <col width="100">
                <col width="80">
                <col width="100">
              </colgroup>
              <thead>
                <tr>
                  <th>노출 여부</th>
                  <th>제목</th>
                  <th>자료</th>
                  <th>직강일</th>
                  <th>인쇄전용 체크</th>
                  <th>조회수</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="push1" checked>
                      <label for="push1">
                        <span>차단</span>
                        <span>허용</span>
                      </label>
                    </span>
                  </td>
                  <td><input type="text" /></td>
                  <td>
                    <span class="uploadFile wFull">
                      <input type="file" id="file" @change="fileUpload">
                      <span class="upload-name">{{ fileName }}</span>
                      <label for="file">불러오기</label>
                    </span>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td></td>
                  <td>1,500</td>
                  <td>2021-05-25</td>
                </tr>
                <tr>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="push12">
                      <label for="push12">
                        <span>차단</span>
                        <span>허용</span>
                      </label>
                    </span>
                  </td>
                  <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
                  <td>
                    <span class="uploadFile wFull">
                      <input type="file" id="file2" @change="fileUpload">
                      <span class="upload-name">{{ fileName }}</span>
                      <label for="file2">불러오기</label>
                    </span>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td></td>
                  <td>32</td>
                  <td>2021-05-20</td>
                </tr>
                <tr>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="push13" checked>
                      <label for="push13">
                        <span>차단</span>
                        <span>허용</span>
                      </label>
                    </span>
                  </td>
                  <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
                  <td>
                    <span class="uploadFile wFull">
                      <input type="file" id="file3" @change="fileUpload">
                      <span class="upload-name">{{ fileName }}</span>
                      <label for="file3">불러오기</label>
                    </span>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td></td>
                  <td>1</td>
                  <td>2021-05-19</td>
                </tr>
                <tr>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="push14">
                      <label for="push14">
                        <span>차단</span>
                        <span>허용</span>
                      </label>
                    </span>
                  </td>
                  <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
                  <td>
                    <span class="uploadFile wFull">
                      <input type="file" id="file4" @change="fileUpload">
                      <span class="upload-name">{{ fileName }}</span>
                      <label for="file4">불러오기</label>
                    </span>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td></td>
                  <td>333</td>
                  <td>2021-05-15</td>
                </tr>
                <tr>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="push15" checked>
                      <label for="push15">
                        <span>차단</span>
                        <span>허용</span>
                      </label>
                    </span>
                  </td>
                  <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
                  <td>
                    <span class="uploadFile wFull">
                      <input type="file" id="file5" @change="fileUpload">
                      <span class="upload-name">{{ fileName }}</span>
                      <label for="file5">불러오기</label>
                    </span>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td></td>
                  <td>1,500</td>
                  <td>2021-05-13</td>
                </tr>
                <tr>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="push16" checked>
                      <label for="push16">
                        <span>차단</span>
                        <span>허용</span>
                      </label>
                    </span>
                  </td>
                  <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
                  <td>
                    <span class="uploadFile wFull">
                      <input type="file" id="file6" @change="fileUpload">
                      <span class="upload-name">{{ fileName }}</span>
                      <label for="file6">불러오기</label>
                    </span>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td></td>
                  <td>32</td>
                  <td>2021-05-10</td>
                </tr>
                <tr style="display:none;">
                  <td colspan="7" class="noneData">등록된 데이터가 없습니다.</td>
                </tr>
                <tr>
                  <td colspan="7">
                    <button class="btnM blueline wFull">+ 행 추가</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //강좌 자료 관리-->

					<!-- 관리 -->
					<div class="subTit mt10"><h3>관리</h3></div>
					<div class="tvs record">
		  			<table>
		  				<colgroup>
		  					<col width="160"/>
		  					<col width="*"/>
		  				</colgroup>
		  				<tbody>
								<tr>
									<th>수정 이력</th>
									<td>
                    <ul class="recordList">
                      <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 수정</li>
                      <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 등록</li>
                    </ul>
                  </td>
								</tr>
		  				</tbody>
		  			</table>
		  		</div>
					<!-- //관리 -->

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
  name: 'SingleCourseViewData',
  data() {
    return {
      fileName: 'pdf, docx, pptx, xlsx로 첨부',
      academy: 'online',
    }
  },
  methods: {
    fileUpload(event) {
      this.fileName = event.target.value;
    },
    LectureUpdateMgt() {
      let routeData = this.$router.resolve({name: 'LectureUpdateMgt', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceUpdateMgt', '_blank', `width=570,height=780`);
    },
  },
  components: {
  },
}
</script>

<style lang="css" scoped>
</style>
