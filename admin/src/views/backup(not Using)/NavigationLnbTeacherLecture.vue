<template lang="html">
	<div>
		<p class="infoMsg fRed mb20">※ 과목(LNB)메뉴에서 노출로 설정된 과목만 표시됩니다.</p>
		<div class="tls">
			<table>
				<colgroup>
					<col width="80"/>
					<col width="200"/>
					<col width="200"/>
					<col width="*"/>
				</colgroup>
				<thead>
					<tr>
						<th>순서</th>
						<th>상위 과목 (1 DEPTH)</th>
						<th>하위 과목 (2 DEPTH)</th>
						<th>선생님 (표시 순)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>교육학</td>
						<td>없음</td>
						<td class="tL"><router-link to="">김현, 권구현, 윤중샘</router-link></td>
					</tr>
					<tr>
						<td>2</td>
						<td>유아</td>
						<td>없음</td>
						<td class="tL"><router-link to="">배지윤, 이동건, 양재웅</router-link></td>
					</tr>
					<tr>
						<td>3</td>
						<td>중등</td>
						<td>국어</td>
						<td class="tL"><router-link to="">송헌/김준팀, 송헌, 김준, 박노송</router-link></td>
					</tr>
					<tr>
						<td>4</td>
						<td>중등</td>
						<td>영어</td>
						<td class="tL"><router-link to="">차류쉘팀, 차미아, 류지원, 미쉘김</router-link></td>
					</tr>
					<tr>
						<td>5</td>
						<td>중등</td>
						<td>수학</td>
						<td class="tL"><router-link to="">이정훈/안후상팀, 이정훈, 안후상, 김지혜</router-link></td>
					</tr>
					<tr>
						<td>6</td>
						<td>중등</td>
						<td>음악</td>
						<td class="tL"><router-link to="">서정팀, 서민정, 정희원, 박서형</router-link></td>
					</tr>
					<tr>
						<td>7</td>
						<td>중등</td>
						<td>미술</td>
						<td class="tL"><router-link to="">위상팀</router-link></td>
					</tr>
					<tr>
						<td>8</td>
						<td>중등</td>
						<td>체육</td>
						<td class="tL"><router-link to="">오정환, 김용호, 임서윤</router-link></td>
					</tr>
					<tr>
						<td>9</td>
						<td>중등</td>
						<td>중국어</td>
						<td class="tL"><router-link to="">희소중국어팀, 한정은, 이해진</router-link></td>
					</tr>
					<tr>
						<td>10</td>
						<td>중등</td>
						<td>일본어</td>
						<td class="tL"><router-link to="">동소현</router-link></td>
					</tr>
					<tr>
						<td>11</td>
						<td>중등</td>
						<td>한문</td>
						<td class="tL"><router-link to="">원주용</router-link></td>
					</tr>
					<tr>
						<td>12</td>
						<td>중등</td>
						<td>가정</td>
						<td class="tL"><router-link to="">문영은</router-link></td>
					</tr>
					<tr>
						<td>13</td>
						<td>중등</td>
						<td>도덕윤리</td>
						<td class="tL"><router-link to="">김성무</router-link></td>
					</tr>
					<tr>
						<td>14</td>
						<td>중등</td>
						<td>미용</td>
						<td class="tL"><router-link to="">이영미</router-link></td>
					</tr>
					<tr>
						<td>15</td>
						<td>사회/과학</td>
						<td>역사</td>
						<td class="tL"><router-link to="">이순권, 반철진, 진용팀</router-link></td>
					</tr>
					<tr>
						<td>16</td>
						<td>사회/과학</td>
						<td>지리</td>
						<td class="tL"><router-link to="">한무일</router-link></td>
					</tr>
					<tr>
						<td>17</td>
						<td>사회/과학</td>
						<td>물리</td>
						<td class="tL"><router-link to="">최만영</router-link></td>
					</tr>
					<tr>
						<td>18</td>
						<td>사회/과학</td>
						<td>화학</td>
						<td class="tL"><router-link to="">안병천/권혁팀, 안병천, 권혁</router-link></td>
					</tr>
					<tr>
						<td>19</td>
						<td>사회/과학</td>
						<td>생물</td>
						<td class="tL"><router-link to="">엄은미</router-link></td>
					</tr>
					<tr>
						<td>20</td>
						<td>사회/과학</td>
						<td>과학교육론</td>
						<td class="tL"><router-link to="">김창만</router-link></td>
					</tr>
					<tr>
						<td>21</td>
						<td>비교과</td>
						<td>전문상담</td>
						<td class="tL"><router-link to="">이진영</router-link></td>
					</tr>
					<tr>
						<td>22</td>
						<td>비교과</td>
						<td>보건</td>
						<td class="tL"><router-link to="">임수진</router-link></td>
					</tr>
					<tr>
						<td>23</td>
						<td>특수</td>
						<td>유아특수</td>
						<td class="tL"><router-link to="">한경, 박해인</router-link></td>
					</tr>
					<tr>
						<td>24</td>
						<td>특수</td>
						<td>초등특수</td>
						<td class="tL"><router-link to="">한경, 박해인</router-link></td>
					</tr>
					<tr>
						<td>25</td>
						<td>특수</td>
						<td>중등특수</td>
						<td class="tL"><router-link to="">한경, 박해인</router-link></td>
					</tr>
					<tr>
						<td>26</td>
						<td>면접</td>
						<td>면접</td>
						<td class="tL"><router-link to="">양재웅, 권구현, 윤중샘</router-link></td>
					</tr>
					<tr>
						<td>27</td>
						<td>한국사</td>
						<td>한국사</td>
						<td class="tL"><router-link to="">정재학</router-link></td>
					</tr>
					<tr>
						<td>28</td>
						<td>사서직</td>
						<td>사서직</td>
						<td class="tL"><router-link to="">신인수</router-link></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'BannerLnbTeacherLecture',
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
