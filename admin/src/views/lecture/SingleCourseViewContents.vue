<template lang="html">
  <div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="singleCourseViewContents">
          <!-- 영상 관리 정보 -->
          <div class="subTit cpRight">
            <h3>영상 관리 정보</h3>
            <span class="infoMsg ml10">(영상 형식은 MP4 / 와이드 사이즈 / 고화질(640*360)으로 고정됩니다)</span>
            <span class="right"><em>MO-2104-001 | MS-2104-001 |  장영희 | 전공중국어 – 80점 도약모의고사반</em> 강좌입니다.</span><!-- 2021-07-14 수정 -->
          </div>
					<div class="tvs">
		  			<table>
		  				<colgroup>
		  					<col width="160"/>
		  					<col width="24%"/>
		  					<col width="160"/>
		  					<col width="24%"/>
		  					<col width="160"/>
		  					<col width="*"/>
		  				</colgroup>
		  				<tbody>
								<tr>
									<th class="backBrown">게시지점 <sup>필수</sup></th>
									<td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">게시지점 선택</option>
                        <option value="">ssamplusp</option>
                        <option value="">ssamplus_idea</option>
                        <option value="">ssamplus</option>
                      </select>
                    </span>
                  </td>
                  <th class="backBrown">연도 / 폴더명 <sup>필수</sup></th>
									<td class="halfUnit case37">
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">연도 선택</option>
                        <option value="">2021</option>
                        <option value="">2020</option>
                        <option value="">2019</option>
                      </select>
                    </span>
                    <input type="text" placeholder="폴더명 입력"/>
                  </td>
  								<th class="backBrown">맛보기 영상 <sup>필수</sup></th>
									<td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">강의 선택</option>
                        <option value="">1강</option>
                        <option value="">2강</option>
                      </select>
                    </span>
                  </td>
								</tr>
		  				</tbody>
		  			</table>
		  		</div>
          <!-- //영상 관리 정보 -->
          <!-- 강의 리스트 -->
					<div class="subTit mt10">
            <h3>강의 리스트</h3>
            <span class="checkSet ml20">
              <input type="checkbox" id="one" />
              <label for="one"><i></i>제작완료</label>
            </span>
            <span class="right">
              <button class="btnT line" @click="LectureCategoryMgt()">카테고리 추가</button>
              <button class="btnT line ml10" @click="LectureUpdateMgt()">직강일 관리</button>
            </span>
          </div>
          <div class="tls">
            <table>
              <colgroup>
                <col width="60"/>
                <col width="150"/>
                <col width="60"/>
                <col width="300"/>
                <col width="300"/>
                <col width="80"/>
                <col width="200"/>
                <col width="60"/>
              </colgroup>
              <thead>
                <tr>
                  <th>순번</th>
                  <th>카테고리</th>
                  <th>회차</th>
                  <th>강의 제목</th>
                  <th>파일명</th>
                  <th>시간</th>
                  <th>직강일(업데이트일)</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="handleDraggable"></td>
                  <td>
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">중국철학</option>
                      </select>
                    </span>
                  </td>
                  <td>1강</td>
                  <td class="lgItem item3"><input type="text" /></td>
                  <td class="lgItem item4"><input type="text" /></td>
                  <td class="lgItem item5"><input type="text" placeholder=":" class="tC" /></td>
                  <td class="lgItem item6">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td class="lgItem item8">
                    <button class="btnDelete">삭제</button>
                  </td>
                </tr>
                <tr>
                  <td class="handleDraggable">=</td>
                  <td>
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">중국철학</option>
                      </select>
                    </span>
                  </td>
                  <td>2강</td>
                  <td class="lgItem item3"><input type="text" /></td>
                  <td class="lgItem item4"><input type="text" /></td>
                  <td class="lgItem item5"><input type="text" placeholder=":" class="tC" /></td>
                  <td class="lgItem item6">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td class="lgItem item8">
                    <button class="btnDelete">삭제</button>
                  </td>
                </tr>
                <tr>
                  <td class="handleDraggable">=</td>
                  <td>
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">중국철학</option>
                      </select>
                    </span>
                  </td>
                  <td>3강</td>
                  <td class="lgItem item3"><input type="text" /></td>
                  <td class="lgItem item4"><input type="text" /></td>
                  <td class="lgItem item5"><input type="text" placeholder=":" class="tC" /></td>
                  <td class="lgItem item6">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td class="lgItem item8">
                    <button class="btnDelete">삭제</button>
                  </td>
                </tr>
                <tr>
                  <td class="handleDraggable">=</td>
                  <td>
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">중국철학</option>
                      </select>
                    </span>
                  </td>
                  <td>4강</td>
                  <td class="lgItem item3"><input type="text" /></td>
                  <td class="lgItem item4"><input type="text" /></td>
                  <td class="lgItem item5"><input type="text" placeholder=":" class="tC" /></td>
                  <td class="lgItem item6">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </td>
                  <td class="lgItem item8">
                    <button class="btnDelete">삭제</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="resTls lectureContentsList mt10">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem item0">순번</span>
              <span class="lgItem item2">카테고리</span>
              <span class="lgItem item1">회차</span>
              <span class="lgItem item3">강의 제목</span>
              <span class="lgItem item4">파일명</span>
              <span class="lgItem item5">시간</span>
              <span class="lgItem item6">직강일(업데이트일)</span>
              <span class="lgItem item8">삭제</span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid">
                  <span class="lgItem item0">==</span>
                  <span class="lgItem item2">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">중국철학</option>
                      </select>
                    </span>
                  </span>
                  <span class="lgItem item1">1강</span>
                  <span class="lgItem item3"><input type="text" /></span>
                  <span class="lgItem item4"><input type="text" /></span>
                  <span class="lgItem item5"><input type="text" placeholder=":" class="tC" /></span>
                  <span class="lgItem item6">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="">2021-01-01(월)</option>
                      </select>
                    </span>
                  </span>
                  <span class="lgItem item8">
                    <button class="btnDelete">삭제</button>
                  </span>
                </li>
                <!--//Loop-->
                <li class="listGrid">
                  <span class="lgItem item0">==</span>
                  <span class="lgItem item2">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="" selected>중국철학</option>
                      </select>
                    </span>
                  </span>
                  <span class="lgItem item1">2강</span>
                  <span class="lgItem item3"><input type="text" /></span>
                  <span class="lgItem item4"><input type="text" value="21ks_ysh_210301" /></span>
                  <span class="lgItem item5"><input type="text" placeholder=":" class="tC" value="27:35" /></span>
                  <span class="lgItem item6">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="" selected>2021-01-01(월)</option>
                      </select>
                    </span>
                  </span>
                  <span class="lgItem item8">
                    <button class="btnDelete">삭제</button>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">==</span>
                  <span class="lgItem item2">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="" selected>중국철학</option>
                      </select>
                    </span>
                  </span>
                  <span class="lgItem item1">3강</span>
                  <span class="lgItem item3"><input type="text" /></span>
                  <span class="lgItem item4"><input type="text" /></span>
                  <span class="lgItem item5"><input type="text" placeholder=":" class="tC" /></span>
                  <span class="lgItem item6">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="" selected>2021-01-01(월)</option>
                      </select>
                    </span>
                  </span>
                  <span class="lgItem item8">
                    <button class="btnDelete">삭제</button>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">==</span>
                  <span class="lgItem item2">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="" selected>중국철학</option>
                      </select>
                    </span>
                  </span>
                  <span class="lgItem item1">4강</span>
                  <span class="lgItem item3"><input type="text" /></span>
                  <span class="lgItem item4"><input type="text" /></span>
                  <span class="lgItem item5"><input type="text" placeholder=":" class="tC" /></span>
                  <span class="lgItem item6">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="" selected>2021-01-01(월)</option>
                      </select>
                    </span>
                  </span>
                  <span class="lgItem item8">
                    <button class="btnDelete">삭제</button>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">==</span>
                  <span class="lgItem item2">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="" selected>중국철학</option>
                      </select>
                    </span>
                  </span>
                  <span class="lgItem item1">5강</span>
                  <span class="lgItem item3"><input type="text" /></span>
                  <span class="lgItem item4"><input type="text" /></span>
                  <span class="lgItem item5"><input type="text" placeholder=":" class="tC" /></span>
                  <span class="lgItem item6">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="" selected>2021-01-01(월)</option>
                      </select>
                    </span>
                  </span>
                  <span class="lgItem item8">
                    <button class="btnDelete">삭제</button>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">==</span>
                  <span class="lgItem item2">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="" selected>중국철학</option>
                      </select>
                    </span>
                  </span>
                  <span class="lgItem item1">6강</span>
                  <span class="lgItem item3"><input type="text" /></span>
                  <span class="lgItem item4"><input type="text" /></span>
                  <span class="lgItem item5"><input type="text" placeholder=":" class="tC" /></span>
                  <span class="lgItem item6">
                    <span class="selectSet wFull">
                      <select name="" id="">
                        <option value="no" class="label">선택</option>
                        <option value="" selected>2021-01-01(월)</option>
                      </select>
                    </span>
                  </span>
                  <span class="lgItem item8">
                    <button class="btnDelete">삭제</button>
                  </span>
                </li>
                <!-- 데이터 없을 경우 -->
                <li class="listGrid" style="display:none;"><div class="lgItem noneData">등록된 데이터가 없습니다.</div></li>
                <!-- //데이터 없을 경우 -->
                <li class="listGrid"><div class="lgItem"><button class="btnM blueline wFull">+ 행 추가</button></div></li>
              </ul>
            </div>
            <!-- //list -->
          </div>
          <div class="tR mt5">
            <input type="text" class="w100 mr5"/>
            <button class="btnS line">강 추가</button>
          </div>
          <!-- //강의 리스트  -->

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
  name: 'SingleCourseViewContents',
  data() {
    return {
    }
  },
  methods: {
    LectureCategoryMgt() {
      let routeData = this.$router.resolve({name: 'LectureCategoryMgt', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceCategoryMgt', '_blank', `width=570,height=750`);
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