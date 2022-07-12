<template lang="html">
	<div>
		<!-- 기본 정보 (필수) -->
		<div class="subTit">
			<h3>기본 정보 (필수)</h3>
			<span class="right"><em>361145 / 김지민 / jimin0123</em> 님의 정보입니다.</span>
		</div>
		<div class="tvs">
			<table>
				<colgroup>
					<col width="160"/>
					<col width="40%"/>
					<col width="160"/>
					<col width="*"/>
				</colgroup>
				<tbody>
					<tr>
						<th>회원구분</th>
						<td>일반</td>
						<th>회원번호</th>
						<td>361145</td>
					</tr>
					<tr>
						<th>아이디</th>
						<td>jimin0123
							<button type="button" name="button" class="btnSnsKind naver ml10">네이버</button>
							<button type="button" name="button" class="btnSnsKind kakao ml5">카카오</button>
						</td>
						<th>이름</th>
						<td>김지민<em class="iSet hotpink">프리미엄</em></td>
					</tr>
					<tr>
						<th>휴대폰번호</th>
						<td>010-1234-5678</td>
						<th>이메일</th>
						<td>Jjimin1234@naver.com</td>
					</tr>
					<tr>
						<th>생년월일/성별</th>
						<td>1990-01-01 (남자)</td>
						<th>준비중인 시험</th>
						<td>중국어</td>
					</tr>
					<tr>
						<th>개인정보 유효기간</th>
						<td colspan="3">5년</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //기본 정보 (필수) -->
		<!-- 기본 정보 (선택) -->
		<div class="subTit">
			<h3>기본 정보 (선택)</h3>
		</div>
		<div class="tvs">
			<table>
				<colgroup>
					<col width="160"/>
					<col width="40%"/>
					<col width="160"/>
					<col width="*"/>
				</colgroup>
				<tbody>
					<tr>
						<th>교직이수</th>
						<td>사범대</td>
						<th>학교/학과</th>
						<td>서울대학교  ┃  중국어교육학과</td>
					</tr>
					<tr>
						<th>재학유무</th>
						<td>재학생  |  2학년</td>
						<th>한국사자격증</th>
						<td>취득</td>
					</tr>
					<tr>
						<th>임용 응시횟수</th>
						<td>3회</td>
						<th>응시 희망지역</th>
						<td>서울</td>
					</tr>
					<tr>
						<th>마케팅 수신동의</th>
						<td>
							<span class="checkSet">
								<input type="checkbox" id="snsAgree1" name="snsAgree" checked disabled/>
								<label for="snsAgree1"><i></i>SMS 수신</label>
							</span>
							<span class="checkSet">
								<input type="checkbox" id="snsAgree2" name="snsAgree" disabled/>
								<label for="snsAgree2"><i></i>이메일 수신</label>
							</span>
						</td>
						<th>최근 회원정보 수정일</th>
						<td class="fBlue">2021-03-01 08:34</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //기본 정보 (선택) -->
		<!-- 가입/로그인 정보 -->
		<div class="subTit">
			<h3>가입/로그인 정보</h3>
			<span class="right"><button class="btnM greenline">임시 비밀번호 발송</button></span>
		</div>
		<div class="tvs">
			<table>
				<colgroup>
					<col width="160"/>
					<col width="40%"/>
					<col width="160"/>
					<col width="*"/>
				</colgroup>
				<tbody>
					<tr>
						<th>회원가입일시</th>
						<td>2021-02-04 13:45</td>
						<th>유입 경로</th>
						<td>블로그/카페 광고 배너 유입</td>
					</tr>
					<tr>
						<th>등록 IP/경로</th>
						<td>212.345.67.890 ┃  PC</td>
						<th>최근 로그인 일시</th>
						<td class="fBlue">2021-03-01 08:34</td>
					</tr>
					<tr>
						<th>로그인 횟수</th>
						<td class="fBlue fBold">12 회</td>
						<th>동시접속횟수</th>
						<td class="fBlue fBold">1 회</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //가입/로그인 정보 -->
		<!-- 가입 후 설정 정보 -->
		<div class="subTit"><h3>가입 후 설정 정보</h3></div>
		<div class="tvs">
			<table>
				<colgroup>
					<col width="160"/>
					<col width="*"/>
				</colgroup>
				<tbody>
					<tr>
						<th>전공모드</th>
						<td>
							<div class="hashTagSet">
								<!-- 수정불가한 전공모드 -->
		            <span class="darkCase">
		              <input type="checkbox" id="has1" disabled/><label for="has1"># 중국어 <strong>희소중국어팀</strong></label>
		            </span>
			            <span class="darkCase">
		              <input type="checkbox" id="has2" disabled/><label for="has2"># 중국어 <strong>한정은</strong></label>
		            </span>
			            <span class="darkCase">
		              <input type="checkbox" id="has3" disabled/><label for="has3"># 중국어 <strong>이해진</strong></label>
		            </span>
								<!-- //수정불가한 전공모드 -->
								<!-- 수정가능한 전공모드 -->
		            <span>
		              <input type="checkbox" id="has4" disabled/><label for="has4"># 교육학 <strong>김현</strong></label>
		            </span>
		            <span>
		              <input type="checkbox" id="has5" disabled/><label for="has5"># 교육학 <strong>권구현</strong></label>
		            </span>
		            <span>
		              <input type="checkbox" id="has6" disabled/><label for="has6"># 교육학 <strong>윤중샘</strong></label>
		            </span>
								<!-- //수정가능한 전공모드 -->
							</div>
						</td>
					</tr>
					<tr>
						<th>강좌 즐겨찾기</th>
						<td>
							<div class="hashTagSet favoriteTag">
		            <span>
		              <input type="checkbox" id="favorite1" disabled/><label for="favorite1">중국어 | 희소중국어팀 | 기출문제분석반1</label>
		            </span>
		            <span>
		              <input type="checkbox" id="favorite2" disabled/><label for="favorite2">중국어 | 희소중국어팀 | 기출문제분석반1</label>
		            </span>
		            <span>
		              <input type="checkbox" id="favorite3" disabled/><label for="favorite3">중국어 | 희소중국어팀 | 기출문제분석반1</label>
		            </span>
		            <span>
		              <input type="checkbox" id="favorite4" disabled/><label for="favorite4">중국어 | 희소중국어팀 | 기출문제분석반1</label>
		            </span>
		            <span>
		              <input type="checkbox" id="favorite5" disabled/><label for="favorite5">중국어 | 희소중국어팀 | 기출문제분석반1</label>
		            </span>
		            <span>
		              <input type="checkbox" id="favorite6" disabled/><label for="favorite6">중국어 | 희소중국어팀 | 기출문제분석반1중국어 | 희소중국어팀 | 기출문제분석반1</label>
		            </span>
							</div>
						</td>
					</tr>
					<tr>
						<th rowspan="2">기본 배송지</th>
						<td>홍상민 ┃ 010-9999-9999</td>
					</tr>
					<tr>
						<td>(03902) 서울시 종로구 종로3길 428  한강아파트 101동 1123호</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //가입 후 설정 정보 -->
		<!-- 관리 -->
		<div class="subTit"><h3>관리</h3></div>
		<div class="tvs record">
			<table>
				<colgroup>
					<col width="160"/>
					<col width="*"/>
				</colgroup>
				<tbody>
					<tr>
						<th>메모</th>
						<td>
							<span class="ipBtn sizeM">
								<input type="text" />
								<button class="btnM line">저장</button>
							</span>
							<ul class="recordList">
								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong>   수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임. <button class="btnDelete">삭제</button></li>
								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong>   수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임. </li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //관리 -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'UserMgtViewInfo',
	data() {
			return {
			}
	},
	methods: {
	},
	components: {
	},
}
</script>
