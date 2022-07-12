<template lang="html">
	<div>
		<div class="pageTit">
			<h2>선생님 조회</h2>
			<span><router-link to="/mkup/member/userMgt">회원/선생님</router-link><router-link to="/mkup/member/teacher">선생님 관리</router-link><em>선생님 조회</em></span><!-- 2021-07-14 메뉴명 변경 -->
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="teacher"><!-- class 없어도 유지 -->
					<div class="boardTop">
			      <div class="left-po">
			        <span class="checkSet">
			          <input type="checkbox"/>
			          <label for=""><i></i>노출 허용으로 설정된 정보 조회</label>
			        </span>
			      </div>
						<!-- 검색 -->
						<div class="listSearch">
							<div class="back">
								<div class="bdLine">
									<span class="lsItem">
										<span class="selectSet lCase">
											<select name="" id="">
												<option value="no" class="label">과목</option>
											</select>
										</span>
									</span>
									<span class="lsItem">
										<input type="text" placeholder="선생님명, 선생님코드 검색" />
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
							<router-link to="/mkup/member/teacher/write" class="btnAdd">신규등록</router-link>
							<a href="#" class="btnDownload ml10" download>다운로드</a>
						</span>
					</div>
					<div class="noList">검색 결과가 없습니다.</div>
			    <!-- 목록 -->
					<div class="teacherList">
						<ul>
							<li>
								<div class="teacherCard">
									<div class="tSumnail">
										<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
									</div>
									<div class="tDetail">
										<router-link to="/mkup/member/teacher/view"><strong class="name">김현<em>T0101-249</em></strong></router-link>
										<span class="subject">교육학</span>
										<div class="frontSet">
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush11" checked>
												<label for="tpush11">
													<span>온라인</span>
													<span>온라인</span>
												</label>
											</span>
											<span class="labelToggleSet">
												<input type="checkbox" id="tpush12" checked>
												<label for="tpush12">
													<span>서울</span>
													<span>서울</span>
												</label>
											</span>
											<!-- 2021-09-02 라이브 강의 toggle -->
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush13" checked>
												<label for="tpush13">
													<span>라이브</span>
													<span>라이브</span>
												</label>
											</span>
											<!-- //2021-09-02 라이브 강의 toggle -->
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="teacherCard">
									<div class="tSumnail">
										<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
									</div>
									<div class="tDetail">
										<router-link to="/mkup/member/teacher/view"><strong class="name">희소중국어팀<em>C030702-278</em></strong></router-link>
										<span class="subject">중국어</span>
										<div class="frontSet">
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush21" checked>
												<label for="tpush21">
													<span>온라인</span>
													<span>온라인</span>
												</label>
											</span>
											<span class="labelToggleSet">
												<input type="checkbox" id="tpush22">
												<label for="tpush22">
													<span>서울</span>
													<span>서울</span>
												</label>
											</span>
											<!-- 2021-09-02 라이브 강의 toggle -->
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush23" checked>
												<label for="tpush23">
													<span>라이브</span>
													<span>라이브</span>
												</label>
											</span>
											<!-- //2021-09-02 라이브 강의 toggle -->
										</div>
									</div>
								</div>
							</li>
							<li class="hide">
								<div class="teacherCard">
									<div class="tSumnail">
										<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
									</div>
									<div class="tDetail">
										<router-link to="/mkup/member/teacher/view"><strong class="name">차미아<em>C030702-278</em></strong></router-link>
										<span class="subject">영어</span>
										<div class="frontSet">
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush31">
												<label for="tpush31">
													<span>온라인</span>
													<span>온라인</span>
												</label>
											</span>
											<span class="labelToggleSet">
												<input type="checkbox" id="tpush32">
												<label for="tpush32">
													<span>서울</span>
													<span>서울</span>
												</label>
											</span>
											<!-- 2021-09-02 라이브 강의 toggle -->
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush33">
												<label for="tpush33">
													<span>라이브</span>
													<span>라이브</span>
												</label>
											</span>
											<!-- //2021-09-02 라이브 강의 toggle -->
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="teacherCard">
									<div class="tSumnail">
										<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
									</div>
									<div class="tDetail">
										<router-link to="/mkup/member/teacher/view"><strong class="name">권구현<em>T0101-249</em></strong></router-link>
										<span class="subject">교육학</span>
										<div class="frontSet">
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush41" checked>
												<label for="tpush41">
													<span>온라인</span>
													<span>온라인</span>
												</label>
											</span>
											<span class="labelToggleSet">
												<input type="checkbox" id="tpush42" checked>
												<label for="tpush42">
													<span>서울</span>
													<span>서울</span>
												</label>
											</span>
											<!-- 2021-09-02 라이브 강의 toggle -->
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush43" checked>
												<label for="tpush43">
													<span>라이브</span>
													<span>라이브</span>
												</label>
											</span>
											<!-- //2021-09-02 라이브 강의 toggle -->
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="teacherCard">
									<div class="tSumnail">
										<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="양재웅"/></span>
									</div>
									<div class="tDetail">
										<router-link to="/mkup/member/teacher/view"><strong class="name">양재웅<em>T0101-249</em></strong></router-link>
										<span class="subject">유아</span>
										<div class="frontSet">
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush51" checked>
												<label for="tpush51">
													<span>온라인</span>
													<span>온라인</span>
												</label>
											</span>
											<span class="labelToggleSet">
												<input type="checkbox" id="tpush52">
												<label for="tpush52">
													<span>서울</span>
													<span>서울</span>
												</label>
											</span>
											<!-- 2021-09-02 라이브 강의 toggle -->
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush53" checked>
												<label for="tpush53">
													<span>라이브</span>
													<span>라이브</span>
												</label>
											</span>
											<!-- //2021-09-02 라이브 강의 toggle -->
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="teacherCard">
									<div class="tSumnail">
										<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="양재웅"/></span>
									</div>
									<div class="tDetail">
										<router-link to="/mkup/member/teacher/view"><strong class="name">양재웅<em>T0101-249</em></strong></router-link>
										<span class="subject">면접</span>
										<div class="frontSet">
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush61">
												<label for="tpush61">
													<span>온라인</span>
													<span>온라인</span>
												</label>
											</span>
											<span class="labelToggleSet">
												<input type="checkbox" id="tpush62" checked>
												<label for="tpush62">
													<span>서울</span>
													<span>서울</span>
												</label>
											</span>
											<!-- 2021-09-02 라이브 강의 toggle -->
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush63" checked>
												<label for="tpush63">
													<span>라이브</span>
													<span>라이브</span>
												</label>
											</span>
											<!-- //2021-09-02 라이브 강의 toggle -->
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="teacherCard">
									<div class="tSumnail">
										<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
									</div>
									<div class="tDetail">
										<router-link to="/mkup/member/teacher/view"><strong class="name">김현<em>T0101-249</em></strong></router-link>
										<span class="subject">교육학</span>
										<div class="frontSet">
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush71" checked>
												<label for="tpush11">
													<span>온라인</span>
													<span>온라인</span>
												</label>
											</span>
											<span class="labelToggleSet">
												<input type="checkbox" id="tpush72" checked>
												<label for="tpush12">
													<span>서울</span>
													<span>서울</span>
												</label>
											</span>
											<!-- 2021-09-02 라이브 강의 toggle -->
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush73" checked>
												<label for="tpush73">
													<span>라이브</span>
													<span>라이브</span>
												</label>
											</span>
											<!-- //2021-09-02 라이브 강의 toggle -->
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="teacherCard">
									<div class="tSumnail">
										<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
									</div>
									<div class="tDetail">
										<router-link to="/mkup/member/teacher/view"><strong class="name">희소중국어팀<em>C030702-278</em></strong></router-link>
										<span class="subject">중국어</span>
										<div class="frontSet">
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush81" checked>
												<label for="tpush21">
													<span>온라인</span>
													<span>온라인</span>
												</label>
											</span>
											<span class="labelToggleSet">
												<input type="checkbox" id="tpush82">
												<label for="tpush22">
													<span>서울</span>
													<span>서울</span>
												</label>
											</span>
											<!-- 2021-09-02 라이브 강의 toggle -->
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush83" checked>
												<label for="tpush83">
													<span>라이브</span>
													<span>라이브</span>
												</label>
											</span>
											<!-- //2021-09-02 라이브 강의 toggle -->
										</div>
									</div>
								</div>
							</li>
							<li class="hide">
								<div class="teacherCard">
									<div class="tSumnail">
										<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
									</div>
									<div class="tDetail">
										<router-link to="/mkup/member/teacher/view"><strong class="name">차미아<em>C030702-278</em></strong></router-link>
										<span class="subject">영어</span>
										<div class="frontSet">
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush91">
												<label for="tpush31">
													<span>온라인</span>
													<span>온라인</span>
												</label>
											</span>
											<span class="labelToggleSet">
												<input type="checkbox" id="tpush92">
												<label for="tpush32">
													<span>서울</span>
													<span>서울</span>
												</label>
											</span>
											<!-- 2021-09-02 라이브 강의 toggle -->
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush93">
												<label for="tpush93">
													<span>라이브</span>
													<span>라이브</span>
												</label>
											</span>
											<!-- //2021-09-02 라이브 강의 toggle -->
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="teacherCard">
									<div class="tSumnail">
										<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
									</div>
									<div class="tDetail">
										<router-link to="/mkup/member/teacher/view"><strong class="name">권구현<em>T0101-249</em></strong></router-link>
										<span class="subject">교육학</span>
										<div class="frontSet">
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush101" checked>
												<label for="tpush41">
													<span>온라인</span>
													<span>온라인</span>
												</label>
											</span>
											<span class="labelToggleSet">
												<input type="checkbox" id="tpush102" checked>
												<label for="tpush42">
													<span>서울</span>
													<span>서울</span>
												</label>
											</span>
											<!-- 2021-09-02 라이브 강의 toggle -->
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush103" checked>
												<label for="tpush103">
													<span>라이브</span>
													<span>라이브</span>
												</label>
											</span>
											<!-- //2021-09-02 라이브 강의 toggle -->
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="teacherCard">
									<div class="tSumnail">
										<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="양재웅"/></span>
									</div>
									<div class="tDetail">
										<router-link to="/mkup/member/teacher/view"><strong class="name">양재웅<em>T0101-249</em></strong></router-link>
										<span class="subject">유아</span>
										<div class="frontSet">
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush111" checked>
												<label for="tpush51">
													<span>온라인</span>
													<span>온라인</span>
												</label>
											</span>
											<span class="labelToggleSet">
												<input type="checkbox" id="tpush112">
												<label for="tpush52">
													<span>서울</span>
													<span>서울</span>
												</label>
											</span>
											<!-- 2021-09-02 라이브 강의 toggle -->
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush113" checked>
												<label for="tpush113">
													<span>라이브</span>
													<span>라이브</span>
												</label>
											</span>
											<!-- //2021-09-02 라이브 강의 toggle -->
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="teacherCard">
									<div class="tSumnail">
										<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="양재웅"/></span>
									</div>
									<div class="tDetail">
										<router-link to="/mkup/member/teacher/view"><strong class="name">양재웅<em>T0101-249</em></strong></router-link>
										<span class="subject">면접</span>
										<div class="frontSet">
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush121">
												<label for="tpush61">
													<span>온라인</span>
													<span>온라인</span>
												</label>
											</span>
											<span class="labelToggleSet">
												<input type="checkbox" id="tpush122" checked>
												<label for="tpush62">
													<span>서울</span>
													<span>서울</span>
												</label>
											</span>
											<!-- 2021-09-02 라이브 강의 toggle -->
											<span class="labelToggleSet tLength3">
												<input type="checkbox" id="tpush123" checked>
												<label for="tpush123">
													<span>라이브</span>
													<span>라이브</span>
												</label>
											</span>
											<!-- //2021-09-02 라이브 강의 toggle -->
										</div>
									</div>
								</div>
							</li>
						</ul>
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
  name: 'Teacher',
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

<style lang="css" scoped>
</style>
