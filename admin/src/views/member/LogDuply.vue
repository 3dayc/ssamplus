<template lang="html">
	<div>
		<div class="pageTit">
	  	<h2>중복 재생 리스트</h2>
			<span><router-link to="/mkup/member/userMgt">회원/선생님</router-link><router-link to="/mkup/member/logDuply">회원 로그</router-link><em>중복 재생 리스트</em></span><!-- 2021-07-14 메뉴명 변경 -->
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="logDuply">
		      <!-- 검색 -->
          <div class="boardTop">
						<div class="listSearch">
							<div class="back">
								<div class="dateSelect">
									<button>오늘</button>
									<button>어제</button>
									<button>이번 달</button>
									<button>지난 달</button>
								</div>
								<div class="bdLine">
									<!-- <span class="lsItem">
										<span class="selectSet lCase">
											<select name="" id="">
												<option value="no" class="label">오늘</option>
												<option value="">이번주</option>
												<option value="">이번달</option>
											</select>
										</span>
									</span> -->
									<span class="lsItem">
	                  <strong class="title">조회</strong><!-- 2021-08-02 캘린더 사용 컴포넌트 앞에 타이틀 추가 -->
                    <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                      <template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
												<input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" @click="togglePopover()" placeholder="시작일 선택"/>
												<em>~</em>
												<input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" @click="togglePopover()" placeholder="종료일 선택"/>
											</template>
                    </Vcalendar>
                  </span>
									<span class="lsItem">
										<input type="text" placeholder="회원명, 아이디 검색" />
										<button class="btnSearch">검색</button>
									</span>
								</div>
								<div>
									<button class="btnRefresh">초기화</button>
								</div>
							</div>
						</div>
						<span class="right-po"><button class="btnDownload">다운로드</button> <!--2021-06-30--></span>
          </div>
			    <!-- //검색 -->

			    <!-- 목록 -->
					<div class="tls">
						<table>
							<thead>
								<tr>
									<th>회원번호</th>
									<th>이름/아이디<button class="btnSort">정렬</button></th>
									<th>중복 재생 일시</th>
									<th>접속환경</th>
									<!-- <th>OS</th> -->
									<th>중복 재생 횟수<br/>(유효/취소)</th>
									<th>수강제한</th>
									<th>수강관리</th>
								</tr>
							</thead>
							<tbody>
								<tr @click="viewMove">
									<td>361145</td>
									<td><router-link to="/mkup/member/logDuply/view">김*민<br/>(jim******)</router-link></td>
									<td>2021-02-22(금) 10:06:39</td>
									<td>Chrome(Windows)</td>
									<!-- <td>Trident/7.0</td> -->
									<td>1회<br/>(1회/0회)</td>
									<td>1 강좌 </td>
									<td><button class="btnS line" @click.stop="MemberDuplyUserLimit()">관리</button></td>
								</tr>
								<tr @click="viewMove">
									<td>361144</td>
									<td><router-link to="/mkup/member/logDuply/view">김*민<br/>(jim******)</router-link></td>
									<td>2021-02-22(금) 10:06:39</td>
									<td>Safari(Mac)</td>
									<!-- <td>Trident/7.0</td> -->
									<td>1회<br/>(1회/0회)</td>
									<td>1 강좌 </td>
									<td><button class="btnS line" @click.stop="MemberDuplyUserLimit()">관리</button></td>
								</tr>
								<tr @click="viewMove">
									<td>361143</td>
									<td><router-link to="/mkup/member/logDuply/view">서지윤<br/>(jiyunssam)</router-link></td>
									<td>2021-02-22(금) 10:06:39</td>
									<td>Edge(Windows)</td>
									<!-- <td>Trident/7.0</td> -->
									<td>1회<br/>(1회/0회)</td>
									<td>1 강좌 </td>
									<td><button class="btnS line" @click.stop="MemberDuplyUserLimit()">관리</button></td>
								</tr>
								<tr @click="viewMove">
									<td>361142</td>
									<td><router-link to="/mkup/member/logDuply/view">박미진<br/>(mjpark111)</router-link></td>
									<td>2021-02-22(금) 10:06:39</td>
									<td>Android(M)</td>
									<!-- <td>Trident/7.0</td> -->
									<td>1회<br/>(1회/0회)</td>
									<td>1 강좌 </td>
									<td><button class="btnS line" @click.stop="MemberDuplyUserLimit()">관리</button></td>
								</tr>
								<tr @click="viewMove">
									<td>361141</td>
									<td><router-link to="/mkup/member/logDuply/view">김*민<br/>(jim******)</router-link></td>
									<td>2021-02-22(금) 10:06:39</td>
									<td>iOS(M)</td>
									<!-- <td>Trident/7.0</td> -->
									<td>1회<br/>(1회/0회)</td>
									<td>1 강좌 </td>
									<td><button class="btnS line" @click.stop="MemberDuplyUserLimit()">관리</button></td>
								</tr>
								<tr @click="viewMove">
									<td>361140</td>
									<td><router-link to="/mkup/member/logDuply/view">김*민<br/>(jim******)</router-link></td>
									<td>2021-02-22(금) 10:06:39</td>
									<td>Chrome(Windows)</td>
									<!-- <td>Trident/7.0</td> -->
									<td>1회<br/>(1회/0회)</td>
									<td>1 강좌 </td>
									<td><button class="btnS line" @click.stop="MemberDuplyUserLimit()">관리</button></td>
								</tr>
								<tr @click="viewMove">
									<td>361139</td>
									<td><router-link to="/mkup/member/logDuply/view">김*민<br/>(jim******)</router-link></td>
									<td>2021-02-22(금) 10:06:39</td>
									<td>Safari(Mac)</td>
									<!-- <td>Trident/7.0</td> -->
									<td>1회<br/>(1회/0회)</td>
									<td>1 강좌 </td>
									<td><button class="btnS line" @click.stop="MemberDuplyUserLimit()">관리</button></td>
								</tr>
								<tr @click="viewMove">
									<td>361138</td>
									<td><router-link to="/mkup/member/logDuply/view">김*민<br/>(jim******)</router-link></td>
									<td>2021-02-22(금) 10:06:39</td>
									<td>Edge(Windows)</td>
									<!-- <td>Trident/7.0</td> -->
									<td>1회<br/>(1회/0회)</td>
									<td>1 강좌 </td>
									<td><button class="btnS line" @click.stop="MemberDuplyUserLimit()">관리</button></td>
								</tr>
								<tr @click="viewMove">
									<td>361137</td>
									<td><router-link to="/mkup/member/logDuply/view">김*민<br/>(jim******)</router-link></td>
									<td>2021-02-22(금) 10:06:39</td>
									<td>Android(M)</td>
									<!-- <td>Trident/7.0</td> -->
									<td>1회<br/>(1회/0회)</td>
									<td>1 강좌 </td>
									<td><button class="btnS line" @click.stop="MemberDuplyUserLimit()">관리</button></td>
								</tr>
								<tr @click="viewMove">
									<td>361136</td>
									<td><router-link to="/mkup/member/logDuply/view">김*민<br/>(jim******)</router-link></td>
									<td>2021-02-22(금) 10:06:39</td>
									<td>iOS(M)</td>
									<!-- <td>Trident/7.0</td> -->
									<td>1회<br/>(1회/0회)</td>
									<td>1 강좌 </td>
									<td><button class="btnS line" @click.stop="MemberDuplyUserLimit()">관리</button></td>
								</tr>
								<!-- 데이터 없을 경우 -->
								<tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
								<!-- //데이터 없을 경우 -->
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
  name: 'LogDuply',
	data() {
			return {
        range: {
          start: '',
          end: '',
        },
			}
	},
	methods: {
		viewMove() {
			location.href = "/mkup/member/logDuply/view";
		},
		MemberDuplyUserLimit() {
      let routeData = this.$router.resolve({name: 'MemberDuplyUserLimit', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrDuplyUserLimit', '_blank', `width=1100,height=900`);
    },
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
