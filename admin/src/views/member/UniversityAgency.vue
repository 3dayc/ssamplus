<template lang="html">
	<div>
		<div class="pageTit">
			<h2>제휴 회원 관리</h2>
			<span><router-link to="/mkup/member/userMgt">회원/선생님</router-link><router-link to="/mkup/member/partnerAgency">대학제휴회원</router-link><em>제휴 회원 관리</em></span><!-- 2021-07-14 메뉴명 변경 -->
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="universityAgency">
		      <div class="boardTop">
						<div class="listSearch">
							<div class="back">
								<div class="bdLine">
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
												<option value="">교육학</option>
												<option value="">논술면접</option>
												<option value="">한국사</option>
												<option value="">유아</option>
												<option value="">초등</option>
												<option value="">국어</option>
												<option value="">영어</option>
												<option value="">수학</option>
												<option value="">음악</option>
												<option value="">체육</option>
												<option value="">중국어</option>
												<option value="">미술</option>
												<option value="">일본어</option>
												<option value="">한문</option>
												<option value="">가정</option>
												<option value="">윤리</option>
												<option value="">미용</option>
												<option value="">진로상담</option>
												<option value="">역사</option>
												<option value="">지리</option>
												<option value="">물리</option>
												<option value="">화학</option>
												<option value="">생물</option>
												<option value="">과학교과교육론</option>
												<option value="">전문상담</option>
												<option value="">특수</option>
												<option value="">보건</option>
												<option value="">사서직</option>
											</select>
										</span>
									</span>
									<span class="lsItem">
										<span class="selectSet lCase">
											<select name="" id="">
												<option value="no" class="label">사용여부</option>
												<option value="">사용완료</option>
												<option value="">미사용</option>
												<option value="">기간만료</option>
											</select>
										</span>
									</span>
									<span class="lsItem">
										<input type="text" placeholder="기관명, 쿠폰명, 쿠폰번호 검색" />
										<button class="btnSearch">검색</button>
									</span>
								</div>
								<div>
									<button class="btnRefresh">초기화</button>
								</div>
							</div>
						</div>
				    <span class="right-po">
							<button class="btnMsg ml10" @click="MemberMsgSend();">메세지발송</button>
							<a href="#" class="btnDownload ml10" download>다운로드</a>
				    </span>
		      </div>
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
                <dt>실시간 제휴 현황</dt>
                <dd>당해 제휴쿠폰 지급 회원 <strong>600</strong>명</dd>
                <dd>당해 제휴쿠폰 결제금액 <strong>9,825,000</strong>명</dd><!-- 2021-08-23 -->
              </dl>
            </div>
          </div>
			    <!-- 목록 -->
					<div class="tls">
						<table>
							<colgroup>
								<col width="60"/>
								<col width="190"/>
								<col width="100"/>
								<col width="130"/>
								<col width="150"/>
								<col width="110"/>
								<col width="130"/>
								<col width="330"/>
								<col width="150"/>
								<col width="150"/>
								<col width="200"/>
							</colgroup>
							<thead>
								<tr>
									<th>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</th>
									<th>기관명<button class="btnSort">정렬</button></th>
									<th>회원번호</th>
									<th>이름/아이디</th>
									<th>과목<br/>(준비시험)</th>
									<th>재학유무</th>
									<th>쿠폰번호</th>
									<th>대학제휴 쿠폰</th>
									<th>사용여부</th>
									<th>사용일자<button class="btnSort">정렬</button></th>
									<th>결제 금액<br/>(쿠폰 사용)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>서울대학교<br/>사범대학</td>
									<td><router-link to="/mkup/member/userMgt/view">361145</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>중국어</td>
									<td>재학생<br/>(4학년)</td>
									<td>101234</td>
									<td>
										<ul>
											<li class="tC">[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</li>
										</ul>
									</td>
									<td>사용완료</td>
									<td>2021-02-05</td>
									<td>560,000<br/>(5,600)</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>고려대햑교<br/>교육대학원</td>
									<td><router-link to="/mkup/member/userMgt/view">361144</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>중국어</td>
									<td>재학생<br/>(4학년)</td>
									<td>101234</td>
									<td>
										<ul>
											<li class="tC">[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</li>
										</ul>
									</td>
									<td>사용완료</td>
									<td>2021-02-05</td>
									<td>560,000<br/>(5,600)</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>연세대학교<br/>교육학과</td>
									<td><router-link to="/mkup/member/userMgt/view">361143</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>중국어</td>
									<td>재학생</td>
									<td>101234</td>
									<td>
										<ul>
											<li class="tC">이동건 해설편 배송비 쿠폰</li>
										</ul>
									</td>
									<td>사용완료</td>
									<td>2021-02-05</td>
									<td>560,000<br/>(5,600)</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>서울대학교<br/>사범대학</td>
									<td><router-link to="/mkup/member/userMgt/view">361142</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>중국어</td>
									<td>-</td>
									<td>101234</td>
									<td>
										<ul>
											<li class="tC">LG Gram_5만원 할인쿠폰</li>
										</ul>
									</td>
									<td>기간만료</td>
									<td>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>고려대햑교<br/>교육대학원</td>
									<td><router-link to="/mkup/member/userMgt/view">361141</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>중국어</td>
									<td>재학생<br/>(4학년)</td>
									<td>101234</td>
									<td>
										<ul>
											<li class="tC">[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</li>
										</ul>
									</td>
									<td>미사용</td>
									<td>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>고려대햑교<br/>교육대학원</td>
									<td><router-link to="/mkup/member/userMgt/view">361140</router-link></td>
									<td>-</td>
									<td>중국어</td>
									<td>재학생<br/>(2학기)</td>
									<td>101234</td>
									<td>
										<ul>
											<li class="tC">[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</li>
										</ul>
									</td>
									<td>사용완료</td>
									<td>2021-02-05</td>
									<td>560,000<br/>(5,600)</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>서울대학교<br/>사범대학</td>
									<td><router-link to="/mkup/member/userMgt/view">361139</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">(jim******)</router-link></td>
									<td>중국어</td>
									<td>졸업생</td>
									<td>101234</td>
									<td>
										<ul>
											<li class="tC">이동건 해설편 배송비 쿠폰</li>
										</ul>
									</td>
									<td>사용완료</td>
									<td>2021-02-05</td>
									<td>560,000<br/>(5,600)</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>고려대햑교<br/>교육대학원</td>
									<td><router-link to="/mkup/member/userMgt/view">361138</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>중국어</td>
									<td>재학생<br/>(2학기)</td>
									<td>101234</td>
									<td>
										<ul>
											<li class="tC">LG Gram_5만원 할인쿠폰</li>
										</ul>
									</td>
									<td>사용완료</td>
									<td>2021-02-05</td>
									<td>560,000<br/>(5,600)</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>연세대학교<br/>교육학과</td>
									<td><router-link to="/mkup/member/userMgt/view">361132</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>중국어</td>
									<td>재학생<br/>(2학기)</td>
									<td>101234</td>
									<td>
										<ul>
											<li class="tC">이동건 해설편 배송비 쿠폰</li>
										</ul>
									</td>
									<td>기간만료</td>
									<td>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>서울대학교<br/>사범대학</td>
									<td><router-link to="/mkup/member/userMgt/view">361132</router-link></td>
									<td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
									<td>중국어</td>
									<td>재학생<br/>(2학기)</td>
									<td>101234</td>
									<td>
										<ul>
											<li class="tC">LG Gram_5만원 할인쿠폰</li>
										</ul>
									</td>
									<td>미사용</td>
									<td>-</td>
									<td>-</td>
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
  name: 'UniversityAgency',
	data() {
			return {
			}
	},
	methods: {
		MemberMsgSend() {
      let routeData = this.$router.resolve({name: 'MemberMsgSend', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrMsgSend', '_blank', `width=850,height=20000`);
    },
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
