<template lang="html">
	<div>
		<!-- 1:1 게시판상담 -->
		<div class="subTit">
			<h3>1:1 게시판상담</h3>
			<span class="right"><em>361145 / 김지민 / jimin0123</em> 님의 정보입니다.</span>
		</div>
		<div class="tls">
			<table>
				<colgroup>
					<col width="160"/>
					<col width="160"/>
					<col width="160"/>
					<col width="160"/>
					<col width="*"/>
					<col width="100"/>
					<col width="160"/>
				</colgroup>
				<thead>
					<tr>
						<th>상태</th>
						<th>대분류</th>
						<th>중분류</th>
						<th>소분류</th>
						<th>제목</th>
						<th>SMS</th>
						<th>작성일</th>
					</tr>
				</thead>
				<tbody>
					<tr class="waited">
						<td>대기 중</td>
						<td>수강 및 이용</td>
						<td>회원정보</td>
						<td>회원가입/탈퇴</td>
						<td class="tL"><router-link to="/mkup/bbs/replyBoard/useView" class="ellipsis02">크롬에서 로그인이 안 됩니다.</router-link></td>
						<td>●</td>
						<td>2021-04-05</td>
					</tr>
					<tr>
						<td>답변 완료</td>
						<td>임용학습상담</td>
						<td>중등</td>
						<td>중국어</td>
						<td class="tL"><router-link to="/mkup/bbs/replyBoard/useView" class="ellipsis02">중국어 초수생인데 어떤 강의를 들으면 좋을지 막막해서 상담 요청 드립니다.</router-link></td>
						<td>●</td>
						<td>2021-04-05</td>
					</tr>
					<tr>
						<td>답변 완료</td>
						<td>환불</td>
						<td>강의수강불편</td>
						<td>수강료 불편</td>
						<td class="tL"><router-link to="/mkup/bbs/replyBoard/useView" class="ellipsis02">영수증 관련 문의 드립니다.</router-link></td>
						<td></td>
						<td>2021-04-05</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //1:1 게시판상담 -->
		<!-- 1:1 상담 (학원) -->
		<div class="subTit"><h3>1:1 상담 (학원)</h3></div>
		<div class="tls">
			<table>
				<colgroup>
					<col width="160"/>
					<col width="160"/>
					<col width="160"/>
					<col width="160"/>
					<col width="200"/>
					<col width="200"/>
					<col width="100"/>
					<col width="140"/>
				</colgroup>
				<thead>
					<tr>
						<th>신청일</th>
						<th>상담 과목</th>
						<th>상담 유형</th>
						<th>상담 장소</th>
						<th>상담일자</th>
						<th>상담시간</th>
						<th>상담자</th>
						<th>참석</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><router-link to="/mkup/bbs/replyCounsel/direct">2021-05-26</router-link></td>
						<td>유아</td>
						<td>1:1 방문</td>
						<td>아이비</td>
						<td>2021-05-30</td>
						<td>17:00~18:00</td>
						<td>-</td>
						<td>-</td>
					</tr>
					<tr class="blue">
						<td><router-link to="/mkup/bbs/replyCounsel/direct">2021-05-24</router-link></td>
						<td>교육학</td>
						<td>전화</td>
						<td>아이비</td>
						<td>2021-05-27</td>
						<td>14:00~13:00</td>
						<td>김길동</td>
						<td>참석</td>
					</tr>
					<tr>
						<td><router-link to="/mkup/bbs/replyCounsel/direct">2021-05-24</router-link></td>
						<td>체육</td>
						<td>1:1 방문</td>
						<td>이데아</td>
						<td>2021-05-26</td>
						<td>13:00~14:00</td>
						<td>강길동</td>
						<td>비참석</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //1:1 상담 (학원) -->
		<!-- 1:1 상담 (선생님) -->
		<div class="subTit"><h3>1:1 상담 (선생님)</h3></div>
		<div class="tls">
			<table>
				<colgroup>
					<col width="160"/>
					<col width="160"/>
					<col width="160"/>
					<col width="200"/>
					<col width="200"/>
					<col width="100"/>
					<col width="140"/>
				</colgroup>
				<thead>
					<tr>
						<th>신청일</th>
						<th>과목</th>
						<th>선생님</th>
						<th>상담유형</th>
						<th>상담일자</th>
						<th>상담시간</th>
						<th>참석</th>
					</tr>
				</thead>
				<tbody>
					<tr class="blue">
						<td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-05-25</router-link></td>
						<td>전문상담</td>
						<td>박노송</td>
						<td>ZOOM</td>
						<td>2021-05-29</td>
						<td>16:00~17:00</td>
						<td>참석</td>
					</tr>
					<tr>
						<td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-05-24</router-link></td>
						<td>음악</td>
						<td>서민정</td>
						<td>전화</td>
						<td>2021-05-28</td>
						<td>15:00~16:00</td>
						<td>취소</td>
					</tr>
					<tr>
						<td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-05-24</router-link></td>
						<td>교육학</td>
						<td>동소현</td>
						<td>1:1 방문</td>
						<td>2021-05-27</td>
						<td>14:00~13:00</td>
						<td>-</td>
					</tr>
					<tr>
						<td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-05-24</router-link></td>
						<td>체육</td>
						<td>위상팀</td>
						<td>ZOOM</td>
						<td>2021-05-26</td>
						<td>13:00~14:00</td>
						<td>비참석</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //1:1 상담 (선생님) -->

	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'UserMgtViewOnetoone',
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
