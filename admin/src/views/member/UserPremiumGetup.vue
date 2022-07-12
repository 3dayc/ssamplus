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
						<span class="lsItem">
							<strong class="title">인증일자</strong>
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
			<div class="right">
				<button class="btnM line" @click="alertTrigger = true;">기상인증 시간 설정</button>
			</div>
		</div>
		<!-- //2021-09-27 검색 -->
		<!-- //2021-09-27 목록써머리 삭제 -->
		<!-- 목록 -->
		<div class="tls">
			<table>
				<colgroup>
					<col width="200"/>
					<col width="350"/>
					<col width="200"/>
					<col width="*"/>
					<col width="400"/>
				</colgroup>
				<thead>
					<tr>
						<th>회원번호</th>
						<th>이름/아이디</th>
						<th>구분</th>
						<th>프리미엄 패키지명</th>
						<th>기상인증 내역</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>361145</td>
						<td>김*민<br/>(jim******)</td>
						<td>온라인</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>2021 완전정복 쌤팩 – 임고생 필승전략 강의</td>
						<td><button class="btnS line" @click="goodMorningTrigger = true;">기상인증 내역</button></td>
					</tr>
					<tr>
						<td>361144</td>
						<td>김*민<br/>(jim******)</td>
						<td>직강</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>2021 완전정복 쌤팩 – 임고생 필승전략 강의</td>
						<td><button class="btnS line">기상인증 내역</button></td>
					</tr>
					<tr>
						<td>361143</td>
						<td>김*민<br/>(jim******)</td>
						<td>온라인</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>2021 완전정복 쌤팩 – 임고생 필승전략 강의</td>
						<td><button class="btnS line">기상인증 내역</button></td>
					</tr>
					<tr>
						<td>361142</td>
						<td>김*민<br/>(jim******)</td>
						<td>직강</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>2021 완전정복 쌤팩 – 임고생 필승전략 강의</td>
						<td><button class="btnS line">기상인증 내역</button></td>
					</tr>
					<tr>
						<td>361141</td>
						<td>김*민<br/>(jim******)</td>
						<td>온라인</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>2021 완전정복 쌤팩 – 임고생 필승전략 강의</td>
						<td><button class="btnS line">기상인증 내역</button></td>
					</tr>
					<tr>
						<td>361140</td>
						<td>김*민<br/>(jim******)</td>
						<td>직강</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>2021 완전정복 쌤팩 – 임고생 필승전략 강의</td>
						<td><button class="btnS line">기상인증 내역</button></td>
					</tr>
					<tr>
						<td>361139</td>
						<td>김*민<br/>(jim******)</td>
						<td>온라인</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>2021 완전정복 쌤팩 – 임고생 필승전략 강의</td>
						<td><button class="btnS line">기상인증 내역</button></td>
					</tr>
					<tr>
						<td>361138</td>
						<td>김*민<br/>(jim******)</td>
						<td>직강</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>2021 완전정복 쌤팩 – 임고생 필승전략 강의</td>
						<td><button class="btnS line">기상인증 내역</button></td>
					</tr>
					<tr>
						<td>361137</td>
						<td>김*민<br/>(jim******)</td>
						<td>온라인</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>2021 완전정복 쌤팩 – 임고생 필승전략 강의</td>
						<td><button class="btnS line">기상인증 내역</button></td>
					</tr>
					<tr>
						<td>361136</td>
						<td>김*민<br/>(jim******)</td>
						<td>직강</td>
						<td class="tL">[21 1~2월]<em class="iSet hotpink">프리미엄</em><br/>2021 완전정복 쌤팩 – 임고생 필승전략 강의</td>
						<td><button class="btnS line">기상인증 내역</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		<Paginate/>
		<!-- //목록 -->


		<!-- Popup -->
		<!-- 기상인증 시간 설정 -->
		<Alert v-if='alertTrigger' @close="alertTrigger = false">
			<template slot="modalbody">
				<p>기상인증이 가능한 시작~종료 시간을 선택해 주세요</p>
				<p class="infoMsg fRed tC mt5 fs12">※ 변경 시 모든 프리미엄 회원의 기상인증 가능 시간이 변경 되오니, 신중하게 선택해주세요</p>
				<div class="mt10">
					<span class="selectSet mr10">
						<select id="" name="">
							<option value="">07:00</option>
						</select>
					</span>
					<em>~</em>
					<span class="selectSet ml10">
						<select id="" name="">
							<option value="">09:00</option>
						</select>
					</span>
				</div>
			</template>
			<template slot="modalfooter">
				<button class="btnM gray" @click="alertTrigger = false">취소</button>
				<button class="btnM green" @click="alertTrigger = false">변경</button>
			</template>
		</Alert>
		<!-- //기상인증 시간 설정 -->
		<!-- 아침기상인증 팝업 -->
    <Popup v-if='goodMorningTrigger' @close="goodMorningTrigger = false" class="goodMorningPop">
      <template slot="modalheader">
        <div>
          <span>쌤팩 프리미엄 회원만을 위한</span>
          <h1>Morning Miracle Pick</h1>
          <p>나는 매일 아침 7 시 ~ 9 시 아침 기상 인증을 Pick 합니다. <em><strong>Today’s Miracle Pick (아침 기상 인증하기)</strong> 버튼을 클릭하여 인증 해주세요.</em></p>
          <button class="btnMorning">아침 기상 인증하기</button>
          <button @click="goodMorningTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <v-calendar
          :columns="2"
          :rows="2"
          :is-expanded="true"
          />
      </template>
    </Popup>
    <!-- //아침기상인증 팝업 -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'UserPremiumGetup',
	data() {
			return {
        alertTrigger: false,
				goodMorningTrigger: false,
				dragValue: null,
				days: [],
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
  mounted() {
  },
  computed: {
  }
}
</script>

<style lang="css" scoped>
</style>
