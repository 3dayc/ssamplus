<template lang="html">
  <div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="singleCourseViewAttend">
          <!-- 검색 -->
          <div class="subTit cpRight">
            <div class="listSearch left">
              <div class="back">
                <div class="bdLine">
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">직강일</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">출석 구분</option>
                        <option value="">출석</option>
                        <option value="">결석</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <input type="text" placeholder="이름. 아이디 검색" />
                    <button class="btnSearch">검색</button>
                  </span>
                </div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
            <span class="right"><em>MO-2104-001 | MS-2104-001 |  장영희 | 전공중국어 – 80점 도약모의고사반</em> 강좌입니다.</span><!-- 2021-07-14 수정 -->
          </div>
          <!-- //검색 -->
          <!-- 출결 리스트 -->
          <div class="listSummery">
            <div class="left">
              <strong>회원 개인정보 표출</strong>
              <span class="toggleSet">
                <input type="checkbox" id="push" />
                <label for="push"><!--적용여부--></label>
              </span>
            </div>
            <div class="right">
              <button class="btnT line " @click="SingleCourseSubjectQr();">강좌 QR코드</button>
              <button class="btnT line ml10" @click="LectureAttendStatistics();">날짜별 출석통계</button>
              <button class="btnT line ml10" @click="alertTrigger2 = true">보충강의 제공</button>
              <button class="btnMsg mrl10" @click="MemberPartnerMsgSend();">메세지발송</button>
              <button class="btnDownload" @click="popTrigger = true">다운로드</button>
            </div>
          </div>
          <div class="tls wHalf">
            <table>
              <colgroup>
                <col width="60">
                <col width="120">
                <col width="100">
                <col width="100">
                <col width="120">
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="svu">
                      <label for="svu"><i></i></label>
                    </span>
                  </th>
                  <th>직강일</th>
                  <th>출석구분</th>
                  <th>회원번호</th>
                  <th>이름/아이디</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="svu1">
                      <label for="svu1"><i></i></label>
                    </span>
                  </td>
                  <td>2021-01-16</td>
                  <td>출석</td>
                  <td>300813</td>
                  <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="svu1">
                      <label for="svu1"><i></i></label>
                    </span>
                  </td>
                  <td>2021-01-16</td>
                  <td>출석</td>
                  <td>300813</td>
                  <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="svu1">
                      <label for="svu1"><i></i></label>
                    </span>
                  </td>
                  <td>2021-01-16</td>
                  <td>결석</td>
                  <td>300813</td>
                  <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="svu1">
                      <label for="svu1"><i></i></label>
                    </span>
                  </td>
                  <td>2021-01-16</td>
                  <td>출석</td>
                  <td>300813</td>
                  <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="svu1">
                      <label for="svu1"><i></i></label>
                    </span>
                  </td>
                  <td>2021-01-16</td>
                  <td>출석</td>
                  <td>300813</td>
                  <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="svu1">
                      <label for="svu1"><i></i></label>
                    </span>
                  </td>
                  <td>2021-01-16</td>
                  <td>결석</td>
                  <td>300813</td>
                  <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="svu1">
                      <label for="svu1"><i></i></label>
                    </span>
                  </td>
                  <td>2021-01-16</td>
                  <td>출석</td>
                  <td>300813</td>
                  <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                </tr>
                <tr style="display:none;">
                  <td colspan="5" class="noneData">등록된 데이터가 없습니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //출결 리스트 -->

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


		<!-- 다운로드 마스터 팝업 -->
    <Popup v-if='popTrigger' @close="popTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>다운로드 마스터 – 회원</h1>
        <span>* 다운로드 조건을 설정하여 엑셀 파일로 다운로드 할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
				<!-- 항목선택 -->
				<div class="downloadForm">
					<dl>
						<dt>조건1</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">가입기간</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="calDupSet">
	              <VCalendar class="calSet" v-model="downloadCal1" color="green">
	                <template v-slot="{ inputValue, togglePopover }">
	                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
	                </template>
	              </VCalendar>
	              <em>~</em>
	              <VCalendar class="calSet" v-model="downloadCal2" color="green">
	                <template v-slot="{ inputValue, togglePopover }">
	                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
	                </template>
	              </VCalendar>
	            </span>
						</dd>
					</dl>
					<dl>
						<dt>조건2</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">수강구분</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">유료수강</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
						</dd>
					</dl>
					<dl>
						<dt>조건3</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">수강교수</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">교육학</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">김현</option>
	                <option value="" >Select Option 1</option>
	              </select>
	            </span>
						</dd>
					</dl>
					<a class="btnDownload" download>다운로드</a>
				</div>
				<!-- //항목선택 -->
      </div>
    </Popup>
		<!-- //다운로드 마스터 팝업 -->
    <!-- Popup -->
    <Alert v-if='alertTrigger2' @close="alertTrigger2 = false">
      <template slot="modalbody">
        <div>
          선택한 회원에게 보충강의로 제공할<br/>직강 일자를 선택해 주세요.
          <span class="selectSet mt10">
            <select name="" id="">
              <option value="no" class="label">직강일 선택</option>
            </select>
          </span>
        </div>
      </template>
      <template slot="modalfooter">
        <div>
          <button class="btnM gray" @click="alertTrigger2 = false">취소</button>
          <button class="btnM green" @click="alertTrigger2 = false">완료</button>
        </div>
      </template>
    </Alert>
    <Alert v-if='alertTrigger3' @close="alertTrigger3 = false">
      <template slot="modalbody">
        <div>
          선택한 회원의 수강기간 연장일을<br/>입력해 주세요
          <div class="mt10">
            - 연장일수
            <span class="unit small ml5"><input type="number"><em>일</em></span>
          </div>
        </div>
      </template>
      <template slot="modalfooter">
        <div>
          <button class="btnM gray" @click="alertTrigger3 = false">취소</button>
          <button class="btnM green" @click="alertTrigger3 = false">완료</button>
        </div>
      </template>
    </Alert>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SingleCourseViewAttend',
  data() {
    return {
      classValue: "downloadPop",
      popTrigger: false,
      downloadCal1: '',
      downloadCal2: '',
      date: '',
      alertTrigger: false,
      alertTrigger2: false,
      alertTrigger3: false,
      userOnlineTigger: true,
      userDirectTigger: false,
    }
  },
  methods: {
    MemberPartnerMsgSend() {
      let routeData = this.$router.resolve({name: 'MemberPartnerMsgSend', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrPartnerMsgSend', '_blank', `width=850,height=20000`);
    },
    LectureAttendStatistics() {
      let routeData = this.$router.resolve({name: 'LectureAttendStatistics', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceAttendStatistics', '_blank', `width=570,height=750`);
    },
    SingleCourseSubjectQr() {
      let routeData = this.$router.resolve({name: 'SingleCourseSubjectQr', query: {data: "someData"}});
      window.open('/mkup/windowPopup/SingleCourseSubjectQr', '_blank', `width=1025,height=700`);
    },
    onChange(event) {
      let value = event.target.value;
      this.userOnlineTigger = false;
      this.userDirectTigger = false;

      if (value == '0') {
        this.userOnlineTigger = true;
      } else {
        this.userDirectTigger = true;
      }
    }
  },
  components: {
  },
}
</script>

<style lang="css" scoped>
</style>
