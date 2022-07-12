<template lang="html">
	<div>
		<div class="pageTit">
			<h2>보충강의 신청현황</h2>
			<span><router-link to="/mkup/member/userMgt">회원/선생님</router-link><router-link to="/mkup/member/userMgt">회원 관리</router-link><em>보충강의 신청현황</em></span><!-- 2021-07-14 메뉴명 변경 -->
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="userSupport"><!-- class 없어도 유지 --><!-- 2021-09-27 class 추가 -->
		      <!-- 2021-09-27 검색 -->
					<div class="boardTop">
						<div class="left-po">
							<strong>회원 개인정보 표출</strong>
							<span class="toggleSet">
								<input type="checkbox" id="push"/>
								<label for="push"><!--적용여부--></label>
							</span>
						</div>
						<div class="listSearch">
							<div class="back">
								<div class="bdLine">
									<span class="lsItem">
										<span class="selectSet lCase">
											<select name="" id="">
												<option value="no" class="label">처리상태</option>
												<option value="">승인완료</option>
												<option value="">승인대기</option>
											</select>
										</span>
									</span>
									<span class="lsItem">
										<strong class="title">신청일자</strong><!-- 2021-08-23 타이틀 수정 -->
										<VCalendar class="calSet dupCal" v-model="range" is-range color="green">
											<template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
												<input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" @click="togglePopover()" placeholder="시작일 선택"/>
												<em>~</em>
												<input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" @click="togglePopover()" placeholder="종료일 선택"/>
											</template>
										</Vcalendar>
									</span>
									<span class="lsItem">
										<input type="text" placeholder="이름, 아이디, 강좌코드, 강좌명, 회원번호  검색" class="w300"/>
										<button class="btnSearch">검색</button>
									</span>
								</div>
								<div>
									<button class="btnRefresh">초기화</button>
								</div>
							</div>
						</div>
					</div>
			    <!-- //2021-09-27 검색 -->
					<!-- //2021-09-27 목록써머리 삭제 -->
			    <!-- 목록 -->
					<div class="tls">
						<table>
							<colgroup>
								<col width="100"/>
								<col width="100"/>
								<col width="120"/>
								<col width="100"/>
								<col width="300"/>
								<col width="100"/>
								<col width="100"/>
							</colgroup>
							<thead>
								<tr>
									<th>회원번호</th>
									<th>이름/아이디</th>
									<th>보충강의 신청일자</th>
									<th>강좌코드</th>
									<th>강좌명</th>
									<th>직강수업일자</th>
									<th>처리상태 <button class="btnSort">정렬</button></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><router-link to="/mkup/member/userMgt/view">361145</router-link></td>
									<td>김*민<br/>(jim******)</td>
									<td>2021-02-10</td>
									<td>15123</td>
									<td class="tL"><a @click="MemberSupplementMgt()">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 실력강화반 – 이론</a></td>
									<td>2021-02-10</td>
									<td>승인완료</td>
								</tr>
								<tr>
									<td><router-link to="/mkup/member/userMgtMgt/view">361144</router-link></td>
									<td>김*민<br/>(jim******)</td>
									<td>2021-02-05</td>
									<td>15123</td>
									<td class="tL"><a @click="MemberSupplementMgt()">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 과목중국어 실력강화반 – 이론</a></td>
									<td>2021-02-05</td>
									<td>승인완료</td>
								</tr>
								<tr class="blue"> <!-- 대기상태 인 경우 -->
									<td><router-link to="/mkup/member/userMgtMgt/view">361143</router-link></td>
									<td>김*민<br/>(jim******)</td>
									<td>2021-02-05</td>
									<td>15123</td>
									<td class="tL"><a @click="MemberSupplementMgt()">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 실력강화반 – 이론</a></td>
									<td>2021-02-05</td>
									<td>승인대기</td>
								</tr>
								<tr>
									<td><router-link to="/mkup/member/userMgtMgt/view">361142</router-link></td>
									<td>김*민<br/>(jim******)</td>
									<td>2021-02-10</td>
									<td>15123</td>
									<td class="tL"><a @click="MemberSupplementMgt()">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 과목중국어 실력강화반 – 이론</a></td>
									<td>2021-02-10</td>
									<td>승인완료</td>
								</tr>
								<tr class="blue"> <!-- 대기상태 인 경우 -->
									<td><router-link to="/mkup/member/userMgtMgt/view">361141</router-link></td>
									<td>김*민<br/>(jim******)</td>
									<td>2021-02-10</td>
									<td>15123</td>
									<td class="tL"><a @click="MemberSupplementMgt()">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 실력강화반 – 이론</a></td>
									<td>2021-02-10</td>
									<td>승인대기</td>
								</tr>
								<tr>
									<td><router-link to="/mkup/member/userMgtMgt/view">361140</router-link></td>
									<td>김*민<br/>(jim******)</td>
									<td>2021-02-10</td>
									<td>15123</td>
									<td class="tL"><a @click="MemberSupplementMgt()">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 과목중국어 실력강화반 – 이론</a></td>
									<td>2021-02-10</td>
									<td>승인완료</td>
								</tr>
								<tr class="blue"> <!-- 대기상태 인 경우 -->
									<td><router-link to="/mkup/member/userMgtMgt/view">361139</router-link></td>
									<td>(jim******)</td>
									<td>2021-02-10</td>
									<td>15123</td>
									<td class="tL"><a @click="MemberSupplementMgt()">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 과목중국어 실력강화반 – 이론</a></td>
									<td>2021-02-10</td>
									<td>승인대기</td>
								</tr>
								<tr>
									<td><router-link to="/mkup/member/userMgtMgt/view">361138</router-link></td>
									<td>김*민<br/>(jim******)</td>
									<td>2021-02-10</td>
									<td>15123</td>
									<td class="tL"><a @click="MemberSupplementMgt()">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 실력강화반 – 이론</a></td>
									<td>2021-02-10</td>
									<td>승인완료</td>
								</tr>
								<tr>
									<td><router-link to="/mkup/member/userMgtMgt/view">361132</router-link></td>
									<td>김*민<br/>(jim******)</td>
									<td>2021-02-10</td>
									<td>15123</td>
									<td class="tL"><a @click="MemberSupplementMgt()">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 과목중국어 실력강화반 – 이론</a></td>
									<td>2021-02-10</td>
									<td>승인완료</td>
								</tr>
								<tr>
									<td><router-link to="/mkup/member/userMgtMgt/view">361131</router-link></td>
									<td>김*민<br/>(jim******)</td>
									<td>2021-02-10</td>
									<td>15123</td>
									<td class="tL"><a @click="MemberSupplementMgt()">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 과목중국어 실력강화반 – 이론</a></td>
									<td>2021-02-10</td>
									<td>승인완료</td>
								</tr>
							</tbody>
						</table>
					</div>
					<Paginate/>
			    <!-- //목록 -->
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
  name: 'UserSupport',
	data() {
			return {
        range: {
          start: '',
          end: '',
        },
			}
	},
	methods: {
		MemberSupplementMgt() {
			let routeData = this.$router.resolve({name: 'MemberSupplementMgt', query: {data: "someData"}});
			window.open('/mkup/windowPopup/mmrSupplementMgt', '_blank', `width=1100,height=20000`);
		},
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
