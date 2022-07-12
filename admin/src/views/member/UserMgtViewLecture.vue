<template lang="html">
	<div>
		<!-- 동영상강좌 -->
		<div class="subTit">
			<h3>동영상강좌</h3>
			<span class="right"><em>361145 / 김지민 / jimin0123</em> 님의 정보입니다.</span>
		</div>
		<div class="tls">
			<table>
				<colgroup>
					<col width="290"/>
					<col width="50"/>
					<col width="110"/>
					<col width="260"/>
					<col width="70"/>
					<col width="60"/>
					<col width="35"/>
					<col width="35"/>
					<col width="60"/>
				</colgroup>
				<thead>
					<tr>
						<th>강좌명</th>
						<th>강의실</th>
						<th>수강/전체</th>
						<th>수강기간 (일수)</th>
						<th>동시접속</th>
						<th>강좌변경내역</th>
						<th colspan="2">수강관리</th>
						<th>수강기록</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
						<td><button class="btnPlayer">Player</button></td>
						<td>10/50<br/>(20.0%)</td>
						<td>2021-02-04 ~ 2021-04-15 (70일)</td>
						<td>0회</td>
						<td><button class="btnT line" @click="MemberLectureChange()">내역보기</button></td>
						<td><button class="btnT line" @click="MemberEnrollment()">수강관리</button></td>
						<td><button class="btnT line" @click="MemberDirectSwitch()">직강 전환</button></td>
						<td><button class="btnT line" @click="MemberLectureHistory()">수강기록</button></td>
					</tr>
					<tr class="expiry">
						<td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
						<td><button class="btnPlayer" disabled>Player</button></td>
						<td>10/50<br/>(20.0%)</td>
						<td>2021-02-04 ~ 2021-04-15 (70일)</td>
						<td>2회</td>
						<td><button class="btnT line" @click="MemberLectureChange()">내역보기</button></td>
						<td><button class="btnT line" @click="MemberEnrollment()">수강관리</button></td>
						<td></td>
						<td><button class="btnT line" @click="MemberLectureHistory()">수강기록</button></td>
					</tr>
					<tr>
						<td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
						<td><button class="btnPlayer">Player</button></td>
						<td>10/50<br/>(20.0%)</td>
						<td>시작일 미설정</td>
						<td>0회</td>
						<td><button class="btnT line" @click="MemberLectureChange()">내역보기</button></td>
						<td><button class="btnT line" @click="MemberEnrollment()">수강관리</button></td>
						<td><button class="btnT line">전환 취소</button></td>
						<td><button class="btnT line" @click="MemberLectureHistory()">수강기록</button></td>
					</tr>
					<tr>
						<td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
						<td><button class="btnPlayer">Player</button></td>
						<td>10/50<br/>(20.0%)</td>
						<td><em class="fBlue">홀딩</em><br/>2021-02-04 ~ 2021-02-09 (5일)</td>
						<td>0회</td>
						<td><button class="btnT line" @click="MemberLectureChange()">내역보기</button></td>
						<td><button class="btnT line" @click="MemberEnrollment()">수강관리</button></td>
						<td><button class="btnT line" @click="MemberDirectSwitch()">직강 전환</button></td>
						<td><button class="btnT line" @click="MemberLectureHistory()">수강기록</button></td>
					</tr>
					<tr>
						<td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
						<td><button class="btnPlayer">Player</button></td>
						<td>10/50<br/>(20.0%)</td>
						<td><em class="fBlue">보너스</em><br/>시작일 미설정</td>
						<td>0회</td>
						<td><button class="btnT line" @click="MemberLectureChange()">내역보기</button></td>
						<td><button class="btnT line" @click="MemberEnrollment()">수강관리</button></td>
						<td><button class="btnT line" @click="MemberDirectSwitch()">직강 전환</button></td>
						<td><button class="btnT line" @click="MemberLectureHistory()">수강기록</button></td>
					</tr>
					<tr>
						<td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
						<td><button class="btnPlayer">Player</button></td>
						<td>10/50<br/>(20.0%)</td>
						<td><em class="fBlue">재수강</em><br/>2021-02-04 ~ 2021-04-15 (70일)</td>
						<td>0회</td>
						<td><button class="btnT line" @click="MemberLectureChange()">내역보기</button></td>
						<td><button class="btnT line" @click="MemberEnrollment()">수강관리</button></td>
						<td></td>
						<td><button class="btnT line" @click="MemberLectureHistory()">수강기록</button></td>
					</tr>
					<tr>
						<td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
						<td><button class="btnPlayer">Player</button></td>
						<td>10/50<br/>(20.0%)</td>
						<td><em class="fBlue">재수강</em><br/>2021-02-04 ~ 2021-04-15 (70일)</td>
						<td>0회</td>
						<td><button class="btnT line" @click="MemberLectureChange()">내역보기</button></td>
						<td><button class="btnT line" @click="MemberEnrollment()">수강관리</button></td>
						<td></td>
						<td><button class="btnT line" @click="MemberLectureHistory()">수강기록</button></td>
					</tr>
					<!-- 데이터 없을 경우 -->
					<tr style="display:none;"><td colspan="9" class="noneData">등록된 데이터가 없습니다.</td></tr>
					<!-- //데이터 없을 경우 -->
				</tbody>
			</table>
		</div>
		<!-- //동영상강좌 -->
		<!-- 학원강좌 -->
		<div class="subTit"><h3>학원강좌</h3></div>
		<div class="tls">
			<table>
				<colgroup>
					<col width="120"/>
					<col width="260"/>
					<col width="200"/>
					<col width="90"/>
					<col width="90"/>
					<col width="90"/>
				</colgroup>
				<thead>
					<tr>
						<th>구분</th>
						<th>강좌명</th>
						<th>개강~종강일</th>
						<th>보충강의 관리</th>
						<th>수강관리</th>
						<th>학원 출석</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>이데아관</td><!-- 2021-12-23 텍스트 수정 -->
						<td class="tL">[21 1~2월]<br/>장영희 과목중국어 실력강화반 – 이론</td>
						<td>2021-02-04 ~ 2021-03-15</td>
						<td><button class="btnT line" @click="MemberSupplementMgt()">보충강의 관리</button></td>
						<td class="tL"><button class="btnT line mr10" @click="MemberReferenceroom()">자료실</button></td><!-- 2021-08-23 자료실 버튼 추가 -->
						<td><button class="btnT line" @click="MemberAttendance()">출석/수강증</button></td>
					</tr>
					<tr>
						<td>라이브 전용</td><!-- 2021-12-23 텍스트 수정 -->
						<td class="tL">[21 1~2월]<br/>장영희 과목중국어 실력강화반 – 이론</td>
						<td>2021-02-04 ~ 2021-03-15 </td>
						<td><button class="btnT line" @click="MemberSupplementMgt()">보충강의 관리</button></td>
						<td class="tL"><button class="btnT line mr10" @click="MemberReferenceroom()">자료실</button><button class="btnT line" @click="MemberOnlineSwitch()">인강 전환</button></td><!-- 2021-08-23 자료실 버튼 추가 -->
						<td><button class="btnT line" @click="MemberAttendance()">출석/수강증</button></td>
					</tr>
					<!-- 데이터 없을 경우 -->
					<tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
					<!-- //데이터 없을 경우 -->
				</tbody>
			</table>
		</div>
		<!-- //학원강좌 -->
		<!-- 모의고사 -->
		<div class="subTit"><h3>모의고사</h3></div>
		<div class="tls">
			<table>
				<colgroup>
					<col width="100"/>
					<col width="90"/>
					<col width="110"/>
					<col width="250"/>
					<col width="90"/>
					<col width="150"/>
					<col width="80"/>
				</colgroup>
				<thead>
					<tr>
						<th>구분</th>
						<th>응시 구분</th>
						<th>과목/선생님</th>
						<th>모의고사명</th>
						<th>수험번호</th>
						<th>응시정보</th>
						<th>응시여부</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>희소모의고사</td>
						<td>현장 응시(채점)</td>
						<td>교육학/김현<br/>중국어/장영희</td>
						<td class="tL"><router-link to="">2021 임용대비 - 시험 10일전 최종 모의고사</router-link></td>
						<td>10010001</td>
						<td>마포고등학교<br/>2021-02-04 10:00</td>
						<td>미응시</td>
					</tr>
					<tr>
						<td>희소모의고사</td>
						<td>온라인 응시(채점)</td>
						<td>교육학/김현<br/>중국어/장영희</td>
						<td class="tL"><router-link to="">2021 임용대비 - 시험 10일전 최종 모의고사</router-link></td>
						<td>10010001</td>
						<td>온라인<br/>2021-02-04 10:00 ~ 2021-02-07 10:00</td>
						<td>미응시</td>
					</tr>
					<tr class="expiry"><!--20210715 class 변경-->
						<td>월별모의고사</td>
						<td>온라인 응시(미채점)</td>
						<td>교육학/김현<br/>중국어/장영희</td>
						<td class="tL"><router-link to="">2021 임용대비 - 시험 10일전 최종 모의고사</router-link></td>
						<td>10010001</td>
						<td>온라인<br/>2021-02-04 10:00 ~ 2021-02-07 10:00</td>
						<td>응시</td>
					</tr>
					<!-- 데이터 없을 경우 -->
					<tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
					<!-- //데이터 없을 경우 -->
				</tbody>
			</table>
		</div>
		<!-- //모의고사 -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'UserMgtViewLecture',
	data() {
			return {
			}
	},
	methods: {
    MemberLectureChange() {
      let routeData = this.$router.resolve({name: 'MemberLectureChange', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrLectureChange', '_blank', `width=1100,height=900`);
    },
    MemberEnrollment() {
      let routeData = this.$router.resolve({name: 'MemberEnrollment', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrEnrollment', '_blank', `width=1100,height=900`);
    },
    MemberLectureHistory() {
      let routeData = this.$router.resolve({name: 'MemberLectureHistory', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrLectureHistory', '_blank', `width=1100,height=900`);
    },
    MemberDirectSwitch() {
      let routeData = this.$router.resolve({name: 'MemberDirectSwitch', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrDirectSwitch', '_blank', `width=1100,height=20000`);
    },
		MemberOnlineSwitch() {
      let routeData = this.$router.resolve({name: 'MemberOnlineSwitch', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrOnlineSwitch', '_blank', `width=1100,height=20000`);
    },
		MemberAttendance() {
      let routeData = this.$router.resolve({name: 'MemberAttendance', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrAttendance', '_blank', `width=1100,height=900`);
    },
		MemberSupplementMgt() {
      let routeData = this.$router.resolve({name: 'MemberSupplementMgt', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrSupplementMgt', '_blank', `width=1100,height=20000`);
    },
		MemberReferenceroom() {
      let routeData = this.$router.resolve({name: 'MemberReferenceroom', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrReferenceroom', '_blank', `width=1100,height=900`);
    },
	},
	components: {
	},
}
</script>
