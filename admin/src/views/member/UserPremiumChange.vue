<template lang="html">
	<div>
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
									<option value="">처리완료</option>
									<option value="">대기</option>
								</select>
							</span>
						</span>
						<!-- 2021-08-23 항목 추가 -->
						<span class="lsItem">
							<span class="selectSet lCase">
								<select name="" id="">
									<option value="no" class="label">직/인강</option>
									<option value="">직강</option>
									<option value="">인강</option>
								</select>
							</span>
						</span>
						<span class="lsItem">
							<span class="selectSet lCase">
								<select name="" id="">
									<option value="no" class="label">과목</option>
								</select>
							</span>
						</span>
						<!-- //2021-08-23 항목 추가 -->
						<span class="lsItem">
							<strong class="title">신청일자</strong><!-- 2021-08-02 캘린더 사용 컴포넌트 앞에 타이틀 추가 -->
							<VCalendar class="calSet dupCal" v-model="range" is-range color="green">
								<template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
									<input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" @click="togglePopover()" placeholder="시작일 선택"/>
									<em>~</em>
									<input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" @click="togglePopover()" placeholder="종료일 선택"/>
								</template>
							</Vcalendar>
						</span>
						<span class="lsItem">
							<input type="text" placeholder="회원번호, 이름, 아이디, 강좌코드, 강좌명 검색" class="w300"/><!-- 2021-08-23 수정 -->
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
						<th>신청일자</th>
						<th>구분</th>
						<th>프리미엄 패키지명</th><!-- 2021-09-02 텍스트 수정 -->
						<th>관리</th>
						<th>처리상태<button class="btnSort">정렬</button></th>
					</tr>
				</thead>
				<tbody>
					<tr class="blue"> <!-- 대기상태 인 경우 -->
						<td>361145</td><!-- 2021-09-02 링크 삭제 -->
						<td>김*민<br/>(jim******)</td>
						<td>2021-02-10</td>
						<td>온라인</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>장영희 과목중국어 실력강화반 – 이론</td>
						<td><button class="btnS line" @click="MemberDirectSwitch()">직강 전환</button></td>
						<td>
							<span class="selectSet">
								<select name="" id="">
									<option value="">대기</option>
									<option value="">처리완료</option>
								</select>
							</span>
						</td>
					</tr>
					<tr class="blue"> <!-- 대기상태 인 경우 -->
						<td>361144</td><!-- 2021-09-02 링크 삭제 -->
						<td>김*민<br/>(jim******)</td>
						<td>2021-02-05</td>
						<td>직강</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>장영희 과목중국어 실력강화반 – 이론</td>
						<td><button class="btnS line" @click="MemberOnlineSwitch()">인강 전환</button></td>
						<td>
							<span class="selectSet">
								<select name="" id="">
									<option value="">대기</option>
									<option value="">처리완료</option>
								</select>
							</span>
						</td>
					</tr>
					<tr>
						<td>361143</td><!-- 2021-09-02 링크 삭제 -->
						<td>김*민<br/>(jim******)</td>
						<td>2021-02-05</td>
						<td>온라인</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>장영희 과목중국어 실력강화반 – 이론</td>
						<td><button class="btnS line" @click="alertTrigger = true">전환 취소</button></td>
						<td>
							<span class="selectSet">
								<select name="" id="">
									<option value="">대기</option>
									<option value="" selected>처리완료</option>
								</select>
							</span>
						</td>
					</tr>
					<tr>
						<td>361142</td><!-- 2021-09-02 링크 삭제 -->
						<td>김*민<br/>(jim******)</td>
						<td>2021-02-10</td>
						<td>직강</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>장영희 과목중국어 실력강화반 – 이론</td>
						<td><button class="btnS line" @click="alertTrigger02 = true">전환 취소</button></td>
						<td>
							<span class="selectSet">
								<select name="" id="">
									<option value="">대기</option>
									<option value="" selected>처리완료</option>
								</select>
							</span>
						</td>
					</tr>
					<tr class="blue"> <!-- 대기상태 인 경우 -->
						<td>361141</td><!-- 2021-09-02 링크 삭제 -->
						<td>김*민<br/>(jim******)</td>
						<td>2021-02-10</td>
						<td>온라인</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>장영희 과목중국어 실력강화반 – 이론</td>
						<td><button class="btnS line" @click="MemberDirectSwitch()">직강 전환</button></td>
						<td>
							<span class="selectSet">
								<select name="" id="">
									<option value="">대기</option>
									<option value="">처리완료</option>
								</select>
							</span>
						</td>
					</tr>
					<tr>
						<td>361140</td><!-- 2021-09-02 링크 삭제 -->
						<td>김*민<br/>(jim******)</td>
						<td>2021-02-10</td>
						<td>직강</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>장영희 과목중국어 실력강화반 – 이론</td>
						<td><button class="btnS line" @click="alertTrigger02 = true">전환 취소</button></td>
						<td>
							<span class="selectSet">
								<select name="" id="">
									<option value="">대기</option>
									<option value="" selected>처리완료</option>
								</select>
							</span>
						</td>
					</tr>
					<tr class="blue"> <!-- 대기상태 인 경우 -->
						<td>361139</td><!-- 2021-09-02 링크 삭제 -->
						<td>(jim******)</td>
						<td>2021-02-10</td>
						<td>온라인</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>장영희 과목중국어 실력강화반 – 이론</td>
						<td><button class="btnS line" @click="MemberDirectSwitch()">직강 전환</button></td>
						<td>
							<span class="selectSet">
								<select name="" id="">
									<option value="">대기</option>
									<option value="">처리완료</option>
								</select>
							</span>
						</td>
					</tr>
					<tr>
						<td>361138</td><!-- 2021-09-02 링크 삭제 -->
						<td>김*민<br/>(jim******)</td>
						<td>2021-02-10</td>
						<td>직강</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>장영희 과목중국어 실력강화반 – 이론</td>
						<td><button class="btnS line" @click="alertTrigger02 = true">전환 취소</button></td>
						<td>
							<span class="selectSet">
								<select name="" id="">
									<option value="">대기</option>
									<option value="" selected>처리완료</option>
								</select>
							</span>
						</td>
					</tr>
					<tr>
						<td>361132</td><!-- 2021-09-02 링크 삭제 -->
						<td>김*민<br/>(jim******)</td>
						<td>2021-02-10</td>
						<td>온라인</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>장영희 과목중국어 실력강화반 – 이론</td>
						<td><button class="btnS line" @click="alertTrigger = true">전환 취소</button></td>
						<td>
							<span class="selectSet">
								<select name="" id="">
									<option value="">대기</option>
									<option value="" selected>처리완료</option>
								</select>
							</span>
						</td>
					</tr>
					<tr>
						<td>361131</td><!-- 2021-09-02 링크 삭제 -->
						<td>김*민<br/>(jim******)</td>
						<td>2021-02-10</td>
						<td>직강</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>장영희 과목중국어 실력강화반 – 이론</td>
						<td><button class="btnS line" @click="alertTrigger02 = true">전환 취소</button></td>
						<td>
							<span class="selectSet">
								<select name="" id="">
									<option value="">대기</option>
									<option value="" selected>처리완료</option>
								</select>
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<Paginate/>
		<!-- //목록 -->


		<!-- Popup -->
		<!-- 구분이 온라인인 경우 -->
		<Alert v-if='alertTrigger' @close="alertTrigger = false">
			<template slot="modalbody">
				직강 전환을 취소하시겠습니까?
			</template>
			<template slot="modalfooter">
				<button class="btnM gray" @click="alertTrigger = false">아니오</button>
				<button class="btnM green" @click="alertTrigger = false">예</button>
			</template>
		</Alert>
		<!-- //구분이 온라인인 경우 -->
		<!-- 구분이 직강인 경우 -->
		<Alert v-if='alertTrigger02' @close="alertTrigger02 = false">
			<template slot="modalbody">
				인강 전환을 취소하시겠습니까?
			</template>
			<template slot="modalfooter">
				<button class="btnM gray" @click="alertTrigger02 = false">아니오</button>
				<button class="btnM green" @click="alertTrigger02 = false">예</button>
			</template>
		</Alert>
		<!-- //구분이 직강인 경우 -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'UserPremiumChange',
	data() {
			return {
        alertTrigger: false,
        alertTrigger02: false,
        range: {
          start: '',
          end: '',
        },
			}
	},
	methods: {
		MemberDirectSwitch() {
			let routeData = this.$router.resolve({name: 'MemberDirectSwitch', query: {data: "someData"}});
			window.open('/mkup/windowPopup/mmrDirectSwitch', '_blank', `width=1100,height=20000`);
		},
		MemberOnlineSwitch() {
			let routeData = this.$router.resolve({name: 'MemberOnlineSwitch', query: {data: "someData"}});
			window.open('/mkup/windowPopup/mmrOnlineSwitch', '_blank', `width=1100,height=20000`);
		},
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
