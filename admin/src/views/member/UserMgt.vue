<template lang="html">
	<div>
		<div class="pageTit">
			<h2>회원 조회</h2>
			<span><router-link to="/mkup/member/userMgt">회원/선생님</router-link><router-link to="/mkup/member/userMgt">회원 관리</router-link><em>회원 조회</em></span><!-- 2021-07-14 메뉴명 변경 -->
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="userMgt">
		      <!-- 검색 -->
          <div class="boardTop">
						<div class="listSearch">
							<div class="back">
								<div class="bdLine">
									<span class="lsItem">
										<span class="selectSet lCase">
											<select name="" id="">
												<option value="no" class="label">회원구분</option>
												<option value="">일반</option>
												<option value="">휴면회원</option>
												<option value="">탈퇴</option>
											</select>
										</span>
									</span>
									<span class="lsItem">
										<span class="selectSet lCase">
											<select name="" id="">
												<option value="no" class="label">수강구분</option>
												<option value="">유료수강</option>
												<option value="">무료수강</option>
												<option value="">미수강</option>
											</select>
										</span>
									</span>
									<span class="lsItem">
										<span class="selectSet lCase">
											<select name="" id="">
												<option value="no" class="label">준비시험</option>
												<option value="">중국어</option>
											</select>
										</span>
									</span>
									<span class="lsItem">
										<input type="text" placeholder="이름, 아이디, 휴대폰 검색" />
										<button class="btnSearch">검색</button>
									</span>
								</div>
								<div>
									<button class="btnRefresh">초기화</button>
								</div>
							</div>
						</div>
						<span class="right-po"><button class="btnM line" @click="MemberCounselingWrite();">전화상담</button></span>
          </div>
			    <!-- //검색 -->
			    <!-- 목록써머리 -->
					<div class="listSummery">
						<div class="left">
							<strong>회원 개인정보 표출</strong>
							<span class="toggleSet">
								<input type="checkbox" id="push" @change="toastPop('default', '회원 개인정보 표출이 허용되었습니다. 꼭 필요한 경우에만 허용해주세요.')"/>
								<label for="push"><!--적용여부--></label>
							</span>
						</div>
						<div class="right">
							<dl>
								<dt>가입자 현황</dt>
								<dd>전일 <strong>14</strong>명</dd>
								<dd>당월 <strong>365</strong>명</dd>
							</dl>
						</div>
					</div>
			    <!-- //목록써머리 -->
			    <!-- 목록 -->
					<div class="tls">
						<table>
							<colgroup>
								<col width="160"/>
								<col width="160"/>
								<col width="160"/>
								<col width="160"/>
								<col width="160"/>
								<col width="160"/>
								<col width="160"/>
								<col width="160"/>
							</colgroup>
							<thead>
								<tr>
									<th>회원번호</th>
									<th>이름/아이디</th>
									<th>회원구분</th>
									<th>수강구분</th>
									<th>과목 (준비시험)</th>
									<th>재학유무</th>
									<th>휴대폰번호</th>
									<th>가입일시/경로<br/>(탈퇴사유)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><router-link to="/mkup/member/userMgt/view">361145</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>일반</td>
									<td>유료수강</td>
									<td>중국어</td>
									<td>재학생 (4학년)</td>
									<td>010-****-5678</td>
									<td>2021-02-25 13:55<br/>PC</td>
								</tr>
								<tr>
									<td><router-link to="/mkup/member/userMgt/view">361144</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>일반</td>
									<td>무료수강</td>
									<td>중국어</td>
									<td>재학생 (2학기)</td>
									<td>010-****-5678</td>
									<td>2021-02-25 13:55<br/>모바일 Web</td>
								</tr>
								<tr>
									<td><router-link to="/mkup/member/userMgt/view">361143</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>일반</td>
									<td>무료수강</td>
									<td>중국어</td>
									<td>졸업생</td>
									<td>010-****-5678</td>
									<td>2021-02-25 13:55<br/>모바일 App</td>
								</tr>
								<tr>
									<td><router-link to="/mkup/member/userMgt/view">361142</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>일반</td>
									<td>무료수강</td>
									<td>중국어</td>
									<td>-</td>
									<td>010-****-5678</td>
									<td>22021-02-25 13:55<br/>PC</td>
								</tr>
								<tr>
									<td><router-link to="/mkup/member/userMgt/view">361141</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>일반</td>
									<td>미수강</td>
									<td>중국어</td>
									<td>재학생 (2학기)</td>
									<td>010-****-5678</td>
									<td>2021-02-25 13:55<br/>모바일 Web</td>
								</tr>
								<tr class="expiry"><!--20210715 class 변경-->
									<td><router-link to="/mkup/member/userMgt/view">361140</router-link></td>
									<td>-</td>
									<td>탈퇴</td>
									<td>미수강</td>
									<td>-</td>
									<td>-</td>
									<td>-</td>
									<td>
										<span class="memoTooltip">
	    								<em class="ellipsis02 borderNone tC">수강하려는 강좌가 없음</em>
	    								<span>수강하려는 강좌가 없음<br/> | 풍부한 내용이 필요함 |<br/>  타 강의사이트로 변경 |<br/> 기타 사유</span>
	    							</span>
									</td>
								</tr>
								<tr class="expiry"><!--20210715 class 변경-->
									<td><router-link to="/mkup/member/userMgt/view">361139</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">(jim******)</router-link></td>
									<td>휴면삭제</td>
									<td>미수강</td>
									<td>중국어</td>
									<td>-</td>
									<td>-</td>
									<td>2021-02-25 13:55<br/>PC</td>
								</tr>
								<tr>
									<td><router-link to="/mkup/member/userMgt/view">361138</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>일반</td>
									<td>유료수강</td>
									<td>중국어</td>
									<td>재학생 (4학년)</td>
									<td>010-****-5678</td>
									<td>2021-02-25 13:55<br/>모바일 Web</td>
								</tr>
								<tr>
									<td><router-link to="/mkup/member/userMgt/view">361132</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>일반</td>
									<td>유료수강</td>
									<td>중국어</td>
									<td>-</td>
									<td>010-****-5678</td>
									<td>2021-02-25 13:55<br/>모바일 Web</td>
								</tr>
								<tr>
									<td><router-link to="/mkup/member/userMgt/view">361131</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>일반</td>
									<td>무료수강</td>
									<td>중국어</td>
									<td>졸업생</td>
									<td>010-****-5678</td>
									<td>2021-02-25 13:55<br/>모바일 App</td>
								</tr>
								<!-- 데이터 없을 경우 -->
								<tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
								<!-- //데이터 없을 경우 -->
							</tbody>
						</table>
					</div>
					<Paginate/>
			    <!-- //목록 -->
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
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'UserMgt',
	data() {
			return {
	      classValue: "downloadPop",
	      popTrigger: false,
        downloadCal1: '',
        downloadCal2: '',
			}
	},
	methods: {
		MemberCounselingWrite() {
      let routeData = this.$router.resolve({name: 'MemberCounselingWrite', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrCounseling/write', '_blank', `width=1100,height=900`);
    },
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
