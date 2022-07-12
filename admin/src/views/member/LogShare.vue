<template lang="html">
	<div>
		<div class="pageTit">
	  	<h2>공유 의심 리스트</h2>
			<span><router-link to="/mkup/member/userMgt">회원/선생님</router-link><router-link to="/mkup/member/logDuply">회원 로그</router-link><em>공유 의심 리스트</em></span><!-- 2021-07-14 메뉴명 변경 -->
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="logShare"><!-- class 없어도 유지 -->
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
										<input type="text" placeholder="회원번호, 아이디 검색" />
										<button class="btnSearch">검색</button>
									</span>
								</div>
								<div>
									<button class="btnRefresh">초기화</button>
								</div>
							</div>
						</div>
						<span class="right-po">
							<router-link class="btnMsg ml10" to="/mkup/message/smsLms">메세지발송</router-link>
							<button class="btnDownload" @click="popTrigger = true">다운로드</button>
							<!-- <button class="btnS line">삭제</button> -->
						</span>
          </div>
			    <!-- //검색 -->
			    <!-- 목록 -->
					<div class="tls">
						<table>
							<colgroup>
								<!-- <col width="80"/> -->
								<col width="120"/>
								<col width="160"/>
								<col width="340"/>
								<col width="160"/>
								<col width="180"/>
								<col width="180"/>
								<!-- <col width="140"/> -->
								<col width="120"/>
								<col width="120"/>
							</colgroup>
							<thead>
								<tr>
									<!-- <th>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</th> -->
									<th>회원번호</th>
									<th>이름/아이디</th>
									<th>공유 의심 일시</th>
									<th>접속 환경</th>
									<th>공유 의심 횟수<br/>(유효/취소)</th>
									<th>수강제한</th>
									<!-- <th>브랜드(환경)</th> -->
									<th>비고</th>
									<th>관리</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<!-- <td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td> -->
									<td>361145</td><!-- <router-link to="/mkup/member/userMgt/view">361145</router-link> -->
									<td>김*민<br/>(jim*****)</td><!-- <router-link to="/mkup/member/userMgt/view">김*민<br/>(jim*****)</router-link> -->
									<td>2021-03-15 (금) 10:06:39</td>
									<td>42.82.4677</td>
									<td>1회<br/>(1회/0회)</td>
									<td>1강좌</td>
									<!-- <td>Chrome(Windows)</td> -->
									<td>
										<span class="memoTooltip">
											<em>메모</em>
											<span>
												- 강좌정보: 유아 |  배지윤  |  유아교육각론 2021 대비 심화반 기출<br/>
												- 메모: 중복재생 확인되어 강좌 수강제한 처리함
											</span>
										</span>
									</td>
									<td><button class="btnS line" @click="MemberShareUserLimit()">관리</button></td>
								</tr>
								<tr>
									<!-- <td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td> -->
									<td>361144</td>
									<td>김*민<br/>(jim*****)</td>
									<td>2021-03-15 (금) 10:06:39</td>
									<td>Safari(Mac)</td>
									<td>1회<br/>(1회/0회)</td>
									<td>1강좌</td>
									<!-- <td>Windows(PC)</td> -->
									<td>
										<span class="memoTooltip">
											<em>메모</em>
											<span>
												- 강좌정보: 유아 |  배지윤  |  유아교육각론 2021 대비 심화반 기출<br/>
												- 메모: 중복재생 확인되어 강좌 수강제한 처리함
											</span>
										</span>
									</td>
									<td><button class="btnS line" @click="MemberShareUserLimit()">관리</button></td>
								</tr>
								<tr>
									<!-- <td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td> -->
									<td>361144</td>
									<td>김*민<br/>(jim*****)</td>
									<td>2021-03-15 (금) 10:06:39</td>
									<td>Edge(Windows)</td>
									<td>1회<br/>(1회/0회)</td>
									<td>1강좌</td>
									<!-- <td>Windows(PC)</td> -->
									<td>
										<span class="memoTooltip">
											<em>메모</em>
											<span>
												- 강좌정보: 유아 |  배지윤  |  유아교육각론 2021 대비 심화반 기출<br/>
												- 메모: 중복재생 확인되어 강좌 수강제한 처리함
											</span>
										</span>
									</td>
									<td><button class="btnS line" @click="MemberShareUserLimit()">관리</button></td>
								</tr>
								<tr>
									<!-- <td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td> -->
									<td>361144</td>
									<td>김*민<br/>(jim*****)</td>
									<td>2021-03-15 (금) 10:06:39</td>
									<td>Android(M)</td>
									<td>1회<br/>(1회/0회)</td>
									<td>1강좌</td>
									<!-- <td>Windows(PC)</td> -->
									<td>
										<span class="memoTooltip">
											<em>메모</em>
											<span>
												- 강좌정보: 유아 |  배지윤  |  유아교육각론 2021 대비 심화반 기출<br/>
												- 메모: 중복재생 확인되어 강좌 수강제한 처리함
											</span>
										</span>
									</td>
									<td><button class="btnS line" @click="MemberShareUserLimit()">관리</button></td>
								</tr>
								<tr>
									<!-- <td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td> -->
									<td>361144</td>
									<td>김*민<br/>(jim*****)</td>
									<td>2021-03-15 (금) 10:06:39</td>
									<td>iOS(M)</td>
									<td>1회<br/>(1회/0회)</td>
									<td>1강좌</td>
									<!-- <td>Windows(PC)</td> -->
									<td>
										<span class="memoTooltip">
											<em>메모</em>
											<span>
												- 강좌정보: 유아 |  배지윤  |  유아교육각론 2021 대비 심화반 기출<br/>
												- 메모: 중복재생 확인되어 강좌 수강제한 처리함
											</span>
										</span>
									</td>
									<td><button class="btnS line" @click="MemberShareUserLimit()">관리</button></td>
								</tr>
								<tr>
									<!-- <td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td> -->
									<td>361144</td>
									<td>김*민<br/>(jim*****)</td>
									<td>2021-03-15 (금) 10:06:39</td>
									<td>Chrome(Windows)</td>
									<td>1회<br/>(1회/0회)</td>
									<td>1강좌</td>
									<!-- <td>Windows(PC)</td> -->
									<td>
										<span class="memoTooltip">
											<em>메모</em>
											<span>
												- 강좌정보: 유아 |  배지윤  |  유아교육각론 2021 대비 심화반 기출<br/>
												- 메모: 중복재생 확인되어 강좌 수강제한 처리함
											</span>
										</span>
									</td>
									<td><button class="btnS line" @click="MemberShareUserLimit()">관리</button></td>
								</tr>
								<tr>
									<!-- <td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td> -->
									<td>361144</td>
									<td>김*민<br/>(jim*****)</td>
									<td>2021-03-15 (금) 10:06:39</td>
									<td>Safari(Mac)</td>
									<td>1회<br/>(1회/0회)</td>
									<td>1강좌</td>
									<!-- <td>Windows(PC)</td> -->
									<td>
										<span class="memoTooltip">
											<em>메모</em>
											<span>
												- 강좌정보: 유아 |  배지윤  |  유아교육각론 2021 대비 심화반 기출<br/>
												- 메모: 중복재생 확인되어 강좌 수강제한 처리함
											</span>
										</span>
									</td>
									<td><button class="btnS line" @click="MemberShareUserLimit()">관리</button></td>
								</tr>
								<tr>
									<!-- <td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td> -->
									<td>361144</td>
									<td>김*민<br/>(jim*****)</td>
									<td>2021-03-15 (금) 10:06:39</td>
									<td>Edge(Windows)</td>
									<td>1회<br/>(1회/0회)</td>
									<td>1강좌</td>
									<!-- <td>Windows(PC)</td> -->
									<td>
										<span class="memoTooltip">
											<em>메모</em>
											<span>
												- 강좌정보: 유아 |  배지윤  |  유아교육각론 2021 대비 심화반 기출<br/>
												- 메모: 중복재생 확인되어 강좌 수강제한 처리함
											</span>
										</span>
									</td>
									<td><button class="btnS line" @click="MemberShareUserLimit()">관리</button></td>
								</tr>
								<tr>
									<!-- <td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td> -->
									<td>361144</td>
									<td>김*민<br/>(jim*****)</td>
									<td>2021-03-15 (금) 10:06:39</td>
									<td>Android(M)</td>
									<td>1회<br/>(1회/0회)</td>
									<td>1강좌</td>
									<!-- <td>Windows(PC)</td> -->
									<td>
										<span class="memoTooltip">
											<em>메모</em>
											<span>
												- 강좌정보: 유아 |  배지윤  |  유아교육각론 2021 대비 심화반 기출<br/>
												- 메모: 중복재생 확인되어 강좌 수강제한 처리함
											</span>
										</span>
									</td>
									<td><button class="btnS line" @click="MemberShareUserLimit()">관리</button></td>
								</tr>
								<tr>
									<!-- <td>
										<span class="checkSet noLabel">
				              <input type="checkbox" />
				              <label for=""><i></i></label>
				            </span>
									</td> -->
									<td>361144</td>
									<td>김*민<br/>(jim*****)</td>
									<td>2021-03-15 (금) 10:06:39</td>
									<td>iOS(M)</td>
									<td>1회<br/>(1회/0회)</td>
									<td>1강좌</td>
									<!-- <td>Windows(PC)</td> -->
									<td>
										<span class="memoTooltip">
											<em>메모</em>
											<span>
												- 강좌정보: 유아 |  배지윤  |  유아교육각론 2021 대비 심화반 기출<br/>
												- 메모: 중복재생 확인되어 강좌 수강제한 처리함
											</span>
										</span>
									</td>
									<td><button class="btnS line" @click="MemberShareUserLimit()">관리</button></td>
								</tr>
								<!-- 데이터 없을 경우 -->
								<tr style="display:none;"><td colspan="10" class="noneData">등록된 데이터가 없습니다.</td></tr>
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

		<!-- 다운로드 마스터 팝업 -->
    <Popup v-if='popTrigger' @close="popTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>다운로드 마스터 – 공유의심 회원</h1>
        <span>* 다운로드 조건을 설정하여 엑셀 파일로 다운로드 할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
				<!-- 항목선택 -->
				<div class="downloadForm">
					<dl>
						<dt>조건1</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">결제일</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="calDupSet">
	              <VCalendar class="calSet" v-model="downloadCal1" color="green">
	                <template v-slot="{ inputValue, togglePopover }">
	                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
	                </template>
	              </VCalendar>
	              <em>~</em>
	              <VCalendar class="calSet" v-model="downloadCal2" color="green">
	                <template v-slot="{ inputValue, togglePopover }">
	                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
	                </template>
	              </VCalendar>
	            </span>
						</dd>
					</dl>
					<dl>
						<dt>조건2</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">수강시점</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="calDupSet">
	              <VCalendar class="calSet" v-model="downloadCal1" color="green">
	                <template v-slot="{ inputValue, togglePopover }">
	                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
	                </template>
	              </VCalendar>
	              <em>~</em>
	              <VCalendar class="calSet" v-model="downloadCal2" color="green">
	                <template v-slot="{ inputValue, togglePopover }">
	                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
	                </template>
	              </VCalendar>
	            </span>
						</dd>
					</dl>
					<dl>
						<dt>조건3</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">결제금액</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
							<span class="unit w100">
								<input type="text" value="" class="tR">
								<em>원</em>
							</span>
							<span class="selectSet ml5">
	              <select name="" id="">
	                <option value="">이상</option>
	                <option value="">이하</option>
	              </select>
	            </span>
						</dd>
					</dl>
					<a class="btnDownload" download>다운로드</a>
				</div>
				<!-- //항목선택 -->
      </div>
    </Popup>
		<!-- //다운로드 마스터 팝업 -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LogShare',
	data() {
			return {
        range: {
          start: '',
          end: '',
        },
				classValue: "downloadPop",
	      popTrigger: false,
        downloadCal1: '',
        downloadCal2: '',
			}
	},
	methods: {
		MemberPartnerMsgSend() {
      let routeData = this.$router.resolve({name: 'MemberPartnerMsgSend', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrPartnerMsgSend', '_blank', `width=850,height=20000`);
    },
		MemberShareUserLimit() {
      let routeData = this.$router.resolve({name: 'MemberShareUserLimit', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrShareUserLimit', '_blank', `width=1100,height=900`);
    },
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
