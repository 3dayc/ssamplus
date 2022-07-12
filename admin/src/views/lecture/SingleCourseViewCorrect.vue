<template lang="html">
  <div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="singleCourseViewCorrect">
          <!-- 검색 -->
          <div class="subTit cpRight">
            <div class="listSearch left">
              <div class="back">
                <div class="bdLine">
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">온라인</option>
                        <option value="">서울</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <input type="text" placeholder="논제 검색" />
                    <button class="btnSearch">검색</button>
                  </span>
                </div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
            <span class="right"><em>MO-2104-001 | MS-2104-001 | MD-2104-001 |  장영희 | 전공중국어 – 80점 도약모의고사반</em> 강좌입니다.</span><!-- 2021-07-14 수정 -->
          </div>
          <!-- //검색 -->
          <!-- 게시판 목록 -->
          <div class="listSummery">
            <div class="right">
              <button class="btnT line" @click="LectureCorrectWrite()">문제 등록</button>
            </div>
          </div>
          <div class="tls">
            <table>
              <colgroup>
                <col width="100">
                <col width="*">
                <col width="150">
                <col width="100">
                <col width="100">
                <col width="180">
                <col width="150">
                <col width="150">
              </colgroup>
              <thead>
                <tr>
                  <th>회차</th>
                  <th>논제</th>
                  <th>답안 제출 기한</th>
                  <th>문제지</th>
                  <th>답안지</th>
                  <th>첨삭현황</th>
                  <th>첨삭하기</th>
                  <th>등록일자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td class="tL"><a @click="LectureCorrectView()">도약 모의고사 1A</a></td>
                  <td>2021-03-20</td>
                  <td><em class="iFile">첨부파일</em></td>
                  <td><em class="iFile">첨부파일</em></td>
                  <td>12 / 20<br/>(60%)</td>
                  <td><button class="btnS line" @click="LectureCorrectMgt()">첨삭하기</button></td>
                  <td>2021-03-10</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td class="tL"><a @click="LectureCorrectView()">도약 모의고사 1A</a></td>
                  <td>2021-03-20</td>
                  <td><em class="iFile">첨부파일</em></td>
                  <td>-</td>
                  <td>12 / 20<br/>(60%)</td>
                  <td><button class="btnS line" @click="LectureCorrectMgt()">첨삭하기</button></td>
                  <td>2021-03-10</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td class="tL"><a @click="LectureCorrectView()">도약 모의고사 1A</a></td>
                  <td>2021-03-20</td>
                  <td>-</td>
                  <td>-</td>
                  <td>12 / 20<br/>(60%)</td>
                  <td><button class="btnS line" @click="LectureCorrectMgt()">첨삭하기</button></td>
                  <td>2021-03-10</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td class="tL"><a @click="LectureCorrectView()">도약 모의고사 1A</a></td>
                  <td>2021-03-20</td>
                  <td><em class="iFile">첨부파일</em></td>
                  <td><em class="iFile">첨부파일</em></td>
                  <td>12 / 20<br/>(60%)</td>
                  <td><button class="btnS line" @click="LectureCorrectMgt()">첨삭하기</button></td>
                  <td>2021-03-10</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td class="tL"><a @click="LectureCorrectView()">도약 모의고사 1A</a></td>
                  <td>2021-03-20</td>
                  <td>-</td>
                  <td><em class="iFile">첨부파일</em></td>
                  <td>12 / 20<br/>(60%)</td>
                  <td><button class="btnS line" @click="LectureCorrectMgt()">첨삭하기</button></td>
                  <td>2021-03-10</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td class="tL"><a @click="LectureCorrectView()">도약 모의고사 1A</a></td>
                  <td>2021-03-20</td>
                  <td><em class="iFile">첨부파일</em></td>
                  <td>-</td>
                  <td>12 / 20<br/>(60%)</td>
                  <td><button class="btnS line" @click="LectureCorrectMgt()">첨삭하기</button></td>
                  <td>2021-03-10</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td class="tL"><a @click="LectureCorrectView()">도약 모의고사 1A</a></td>
                  <td>2021-03-20</td>
                  <td><em class="iFile">첨부파일</em></td>
                  <td>-</td>
                  <td>12 / 20<br/>(60%)</td>
                  <td><button class="btnS line" @click="LectureCorrectMgt()">첨삭하기</button></td>
                  <td>2021-03-10</td>
                </tr>
                <tr style="display:none;">
                  <td colspan="8" class="noneData">등록된 데이터가 없습니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //게시판 목록 -->
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
  name: 'SingleCourseViewCorrect',
  data() {
    return {
      fileName: 'pdf로 첨부',
    }
  },
  methods: {
    fileUpload(event) {
      this.fileName = event.target.value;
    },
    LectureCorrectWrite() {
      let routeData = this.$router.resolve({name: 'LectureCorrectWrite', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceCorrectWrite', '_blank', `width=1100,height=900`);
    },
    LectureCorrectView() {
      let routeData = this.$router.resolve({name: 'LectureCorrectView', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceCorrectView', '_blank', `width=1100,height=900`);
    },
    LectureCorrectMgt() {
      let routeData = this.$router.resolve({name: 'LectureCorrectMgt', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceCorrectMgt', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  },
}
</script>

<style lang="css" scoped>
</style>
