<template lang="html">
	<div>
		<div class="pageTit">
	  	<h2>기관 관리</h2>
			<span><router-link to="/mkup/member/userMgt">회원/선생님</router-link><router-link to="/mkup/member/partnerAgency">대학제휴 회원</router-link><em>기관 관리</em></span><!-- 2021-07-14 메뉴명 변경 -->
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="partnerAgency"><!-- class 없어도 유지 -->
		      <div class="boardTop">
						<!-- 2021-09-27 추가 -->
						<div class="left-po">
							<span class="checkSet">
								<input type="checkbox" checked>
								<label for=""><i></i>만료된 기관 보기</label>
							</span>
						</div>
						<!-- //2021-09-27 추가 -->
						<!-- 검색 -->
						<div class="listSearch">
							<div class="back">
								<div class="bdLine">
									<span class="lsItem">
										<input type="text" placeholder="기관명, 기관코드, 담당자 검색" />
										<button class="btnSearch">검색</button>
									</span>
								</div>
								<div>
									<button class="btnRefresh">초기화</button>
								</div>
							</div>
						</div>
						<!-- //검색 -->
				    <span class="right-po">
							<router-link to="/mkup/member/partnerAgency/write" class="btnAdd">신규등록</router-link>
							<button class="btnMsg ml10" @click="MemberPartnerMsgSend();">메세지발송</button>
							<a href="#" class="btnDownload ml10" download>다운로드</a>
				    </span>
		      </div>
			    <!-- //2021-09-27 목록써머리 삭제 -->
			    <!-- 목록 -->
					<div class="tls">
						<table>
							<colgroup>
								<col width="80"/>
								<col width="140"/>
								<col width="220"/>
								<col width="220"/>
								<col width="130"/>
								<col width="160"/>
							</colgroup>
							<thead>
								<tr>
									<th>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</th>
									<th>기관코드</th>
									<th>기관명</th>
									<th>제휴기간</th>
									<th>기관 담당자</th>
									<th>담당자 연락처</th>
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
									<td>210101-001</td>
									<td><router-link to="/mkup/member/partnerAgency/view">서울대학교 사범대학</router-link></td>
									<td>2021-02-01~2022-01-31</td>
									<td>한희정</td>
									<td>010-1234-5678</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>210101-001</td>
									<td><router-link to="/mkup/member/partnerAgency/view">고려대햑교 교육대학원</router-link></td>
									<td>2021-01-01~2021-12-31</td>
									<td>김미정</td>
									<td>010-9876-5432</td>
								</tr>
								<tr class="expiry"><!--20210715 class 변경-->
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>210101-001</td>
									<td><router-link to="/mkup/member/partnerAgency/view">연세대학교 교육학과</router-link></td>
									<td>2019-11-01~2020-11-31</td>
									<td>김미정</td>
									<td>010-9876-5432</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>210101-001</td>
									<td><router-link to="/mkup/member/partnerAgency/view">서울대학교 사범대학</router-link></td>
									<td>2021-02-01~2022-01-31</td>
									<td>한희정</td>
									<td>010-1234-5678</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>210101-001</td>
									<td><router-link to="/mkup/member/partnerAgency/view">고려대햑교 교육대학원</router-link></td>
									<td>2021-01-01~2021-12-31</td>
									<td>김미정</td>
									<td>010-9876-5432</td>
								</tr>
								<tr class="expiry"><!--20210715 class 변경-->
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>210101-001</td>
									<td><router-link to="/mkup/member/partnerAgency/view">연세대학교 교육학과</router-link></td>
									<td>2019-11-01~2020-11-31</td>
									<td>김미정</td>
									<td>010-9876-5432</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>210101-001</td>
									<td><router-link to="/mkup/member/partnerAgency/view">서울대학교 사범대학</router-link></td>
									<td>2021-02-01~2022-01-31</td>
									<td>한희정</td>
									<td>010-1234-5678</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>210101-001</td>
									<td><router-link to="/mkup/member/partnerAgency/view">고려대햑교 교육대학원</router-link></td>
									<td>2021-01-01~2021-12-31</td>
									<td>김미정</td>
									<td>010-9876-5432</td>
								</tr>
								<tr class="expiry"><!--20210715 class 변경-->
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>210101-001</td>
									<td><router-link to="/mkup/member/partnerAgency/view">연세대학교 교육학과</router-link></td>
									<td>2019-11-01~2020-11-31</td>
									<td>김미정</td>
									<td>010-9876-5432</td>
								</tr>
								<tr>
									<td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td>
									<td>210101-001</td>
									<td><router-link to="/mkup/member/partnerAgency/view">서울대학교 사범대학</router-link></td>
									<td>2021-02-01~2022-01-31</td>
									<td>한희정</td>
									<td>010-1234-5678</td>
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
  name: 'PartnerAgency',
	data() {
			return {
			}
	},
	methods: {
		goDetail() {
      this.$router.push({path: '/mkup/member/partnerAgency/view'});
    },
		MemberPartnerMsgSend() {
      let routeData = this.$router.resolve({name: 'MemberPartnerMsgSend', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrPartnerMsgSend', '_blank', `width=850,height=20000`);
    },
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
