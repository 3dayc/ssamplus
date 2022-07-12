<template lang="html">
    <div id="windowLayout">
      <div class="winHeader">
        <h1>보충강의 관리</h1>
        <span class="supTxt">* 학원 수강생이 보충강의를 신청 및 수강한 이력을 관리</span>
      </div>
      <div class="winContent">
        <!-- 써머리 -->
        <div class="subStatusBox gridSet grid6-4">
          <div class="gridItem">
            <strong>[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사 반</strong>
            <ul>
              <li><em class="wAtuo">구분 :</em> 이데아관 (직강)</li>
              <li><em class="wAtuo">개강~종강일 :</em> 2021-02-04 ~ 2021-03-15 (70일)</li>
            </ul>
          </div>
          <div class="gridItem">
            <strong class="tit">성명/아이디 : 김지민 / jimin0123</strong>
            <ul>
              <li><em>준비시험 :</em> 중등중국어</li>
              <li><em class="wAtuo">연락처 :</em> 010-1234-5678</li>
            </ul>
          </div>
        </div>
        <!-- //써머리 -->
				<!-- tab-wrap -->
				<div class="tabwrap">
					<!-- tab -->
					<div class="tabBack">
						<div class="tabNav">
							<nav>
								<ul class="sub">
									<li :class="{on:memberTab===0}"><button @click="memberTab = 0">보충강의 신청</button></li>
									<li :class="{on:memberTab===1}"><button @click="memberTab = 1">보충강의 수강</button></li>
									<!-- <li :class="{on:memberTab===2}"><button @click="memberTab = 2">보충강의 자료실</button></li> 2021-08-23 보충강의 자료실 삭제 -->
									<li :class="{on:memberTab===3}"><button @click="memberTab = 3">보충강의 다운로드</button></li>
								</ul>
							</nav>
						</div>
					</div>
					<!--// tab -->
					<div class="tabLayout boxGray">
  					<!-- 보충강의 신청 -->
            <div v-if="memberTab == 0" class="tabData">
              <!---->
          		<h3>
                <strong>보충강의 관리</strong>
                <span class="right">
                  <button class="btnM">보충강의 추가</button>
                </span>
              </h3>
          		<div class="tls subGreen supplementAdd">
          			<table>
          				<colgroup>
                    <col width="3"/>
          					<col width="90"/>
          					<col width="60"/>
          					<col width="360"/>
          					<col width="*"/>
          					<col width="4"/>
          					<col width="8"/>
          				</colgroup>
          				<thead>
          					<tr>
          						<th>보강<br/>회차</th>
          						<th>신청일자</th>
          						<th>직강수업일자</th>
          						<th>수강가능 기간</th>
          						<th>신청사유/결제금액</th>
          						<th>증빙<br/>첨부</th>
          						<th>처리상태</th>
          					</tr>
          				</thead>
          				<tbody>
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <VCalendar class="calSet" v-model="calDate13" color="green">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input :value="inputValue" @click="togglePopover()" readonly placeholder="날짜 선택" />
                          </template>
                        </VCalendar>
                      </td>
                      <td class="tL">
                        <span class="calDupSet">
                          <VCalendar class="calSet" v-model="calDate11" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="수강 시작일 선택" />
                            </template>
                          </VCalendar>
                          <em>~</em>
                          <VCalendar class="calSet" v-model="calDate12" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="수강 종료일 선택" />
                            </template>
                          </VCalendar>
                        </span>
                      </td>
                      <td>-</td>
                      <td>-</td>
                      <td><button class="btnS line">완료</button></td>
                    </tr>
                    <tr>
                      <td>유료<br/>1회</td>
                      <td>2021-02-01</td>
                      <td>2021-02-04</td>
                      <td class="tL">
                        <span class="calDupSet">
                          <VCalendar class="calSet" v-model="calDate21" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="수강 시작일 선택" />
                            </template>
                          </VCalendar>
                          <em>~</em>
                          <VCalendar class="calSet" v-model="calDate22" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="수강 종료일 선택" />
                            </template>
                          </VCalendar>
                        </span>
                        <button class="btnS line">변경</button>
                      </td>
                      <td>14,000원</td>
                      <td>-</td>
                      <td>자동처리</td>
                    </tr>
                    <tr>
                      <td>무료<br/>1회</td>
                      <td>2021-02-10</td>
                      <td>2021-01-30</td>
                      <td class="tL">
                        <span class="calDupSet">
                          <VCalendar class="calSet" v-model="calDate31" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="수강 시작일 선택" />
                            </template>
                          </VCalendar>
                          <em>~</em>
                          <VCalendar class="calSet" v-model="calDate32" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="수강 종료일 선택" />
                            </template>
                          </VCalendar>
                        </span>
                        <button class="btnS line">변경</button>
                      </td>
                      <td>-</td>
                      <td>-</td>
                      <td>자동처리</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>2021-02-05</td>
                      <td>2021-01-30</td>
                      <td class="tL">
                        <span class="calDupSet">
                          <VCalendar class="calSet" v-model="calDate41" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="수강 시작일 선택" />
                            </template>
                          </VCalendar>
                          <em>~</em>
                          <VCalendar class="calSet" v-model="calDate42" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="수강 종료일 선택" />
                            </template>
                          </VCalendar>
                        </span>
                      </td>
                      <td>당일 발열증상이 있어 직강 출석을 못함</td>
                      <td><a class="btnDownloadSmall">다운로드</a></td>
                      <td><button class="btnS line">승인</button></td>
          					</tr>
                    <tr>
                      <td>-</td>
                      <td>2021-02-05</td>
                      <td>2021-01-30</td>
                      <td class="tL">
                        <span class="calDupSet">
                          <VCalendar class="calSet" v-model="calDate41" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="수강 시작일 선택" />
                            </template>
                          </VCalendar>
                          <em>~</em>
                          <VCalendar class="calSet" v-model="calDate42" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="수강 종료일 선택" />
                            </template>
                          </VCalendar>
                        </span>
                        <button class="btnS line">변경</button>
                      </td>
                      <td>당일 발열증상이 있어 직강 출석을 못함</td>
                      <td><a class="btnDownloadSmall">다운로드</a></td>
                      <td>승인완료</td>
          					</tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
          				</tbody>
          			</table>
          		</div>
              <!---->
          		<h3><strong>보충강의 횟수</strong></h3>
              <div class="supplementCount">
                <div class="tvsWhite">
                  <table>
            				<colgroup>
            					<col width="200"/>
              				<col width="200"/>
            					<col width="*" />
            				</colgroup>
                    <thead>
                      <tr>
                        <th>무료 보충강의 현황</th>
                        <th>무료 보충강의 횟수</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="tC">3회 / 3회</td>
                        <td class="tC">
                          <span class="quantityBox">
    												<button class="countMinus">-</button>
    												<strong>1</strong>
    												<button class="countPlus">+</button>
    											</span>
                        </td>
                        <td><button class="btnT line">적용</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="tvsWhite">
                  <table>
            				<colgroup>
            					<col width="200"/>
              				<col width="200"/>
            					<col width="*" />
            				</colgroup>
                    <thead>
                      <tr>
                        <th>유료 보충강의 현황</th>
                        <th>유료 보충강의 횟수</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="tC">3회 / 3회</td>
                        <td class="tC">
                          <span class="quantityBox">
    												<button class="countMinus">-</button>
    												<strong>1</strong>
    												<button class="countPlus">+</button>
    											</span>
                        </td>
                        <td><button class="btnT line">적용</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!---->
              <h3><strong>관리</strong></h3>
              <div class="tvs record">
                <table>
                  <colgroup>
                    <col width="160"/>
                    <col width="*"/>
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>수정 이력</th>
                      <td>
                        <ul class="recordList">
                          <li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 수정</li>
                          <li><strong>[2021-02-23 15:35  / 홍길동 ]</strong> 등록</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!---->
            </div>
  					<!--//보충강의 신청 -->
  					<!-- 보충강의 수강 -->
            <div v-if="memberTab == 1" class="tabData">
              <h3>
                <strong>보충강의 수강기록</strong>
                <span class="right">
                  <span class="checkSet">
                    <input type="checkbox" />
                    <label for=""><i></i>IP, 맥어드레스 조회</label>
                  </span>
                </span>
              </h3>
          		<div class="tls subGreen">
          			<table>
          				<colgroup>
            				<col width="120"/>
            				<col width="30"/>
            				<col width="140"/>
          					<col width="140"/>
          					<col width="120"/>
          				</colgroup>
          				<thead>
          					<tr>
                      <th>직강 수업일자</th>
          						<th>강의회차</th>
                      <th>입실시간</th>
                      <th>퇴실시간</th>
                      <th>수강현황</th>
          					</tr>
          				</thead>
          				<tbody>
          					<tr>
                      <td>2021-02-04</td>
          						<td>2강</td>
                      <td>2021-02-05(금) 22:32:48</td>
                      <td>2021-02-05(금) 32:34:48</td>
                      <td>수강: <span class="fBlue">10분 02초</span><br/>잔여: <span class="fBlue">29분 10초</span></td>
          					</tr>
          					<tr>
                      <td>2021-02-04</td>
                      <td>2강</td>
                      <td>2021-02-05(금) 22:32:48</td>
                      <td>2021-02-05(금) 32:34:48</td>
                      <td>수강: <span class="fBlue">10분 02초</span><br/>잔여: <span class="fBlue">29분 10초</span></td>
          					</tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
          				</tbody>
          			</table>
          		</div>
            </div>
  					<!--//보충강의 수강 -->
  					<!-- 보충강의 자료실 -->
            <div v-if="memberTab == 2" class="tabData">
              <h3><strong>자료리스트</strong></h3>
          		<div class="tls subGreen">
          			<table>
          				<colgroup>
          					<col width="30"/>
          					<col width="100"/>
          					<col width="130"/>
          					<col width="*"/>
          					<col width="90"/>
          					<col width="100"/>
          				</colgroup>
          				<thead>
          					<tr>
          						<th>번호</th>
          						<th>직강 수업일자</th>
          						<th>자료제목</th>
          						<th>자료상세</th>
          						<th>인쇄 현황</th>
          						<th>인쇄횟수 추가</th>
          					</tr>
          				</thead>
          				<tbody>
          					<tr>
          						<td rowspan="2">2</td>
                      <td rowspan="2">2021-02-10</td>
                      <td rowspan="2">[0211] 강의자료</td>
                      <td>2022학년도 대비_1,2월 서술식 대비_6회차</td>
                      <td>2회 / 3회</td>
                      <td><span class="unit"><input type="text" class="tC"><em>회</em></span></td>
          					</tr>
          					<tr>
                      <td>2022학년도 대비_1,2월 논술 대비_5회차</td>
                      <td>1회 / 3회</td>
                      <td><span class="unit"><input type="text" class="tC"><em>회</em></span></td>
          					</tr>
          					<tr>
                      <td>1</td>
                      <td>2021-02-05</td>
                      <td>강좌 full 교안</td>
                      <td>80점 도약 모의고사반 강좌 교안</td>
                      <td>3회 / 3회</td>
                      <td><span class="unit"><input type="text" class="tC"><em>회</em></span></td>
          					</tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
          				</tbody>
          			</table>
          		</div>
              <div class="tR pt10">
                <button class="btnM">추가</button>
              </div>
              <!---->
              <h3><strong>관리</strong></h3>
              <div class="tvs record">
                <table>
                  <colgroup>
                    <col width="160"/>
                    <col width="*"/>
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>수정 이력</th>
                      <td>
                        <ul class="recordList">
                          <li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 수정</li>
                          <li><strong>[2021-02-23 15:35  / 홍길동 ]</strong> 등록</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!---->
            </div>
  					<!--//보충강의 자료실 -->
  					<!-- 보충강의 다운로드 -->
            <div v-if="memberTab == 3" class="tabData">
              <h3><strong>보충강의 다운로드 관리</strong></h3>
          		<div class="tls subGreen">
          			<table>
          				<colgroup>
                    <col width="100"/>
          					<col width="30"/>
          					<col width="*"/>
          					<col width="150"/>
          					<col width="90"/>
          				</colgroup>
          				<thead>
          					<tr>
                      <th>직강 수업일자</th>
          						<th>강의회차</th>
          						<th>강의명</th>
          						<th>모바일 다운로드 현황</th>
          						<th>다운로드 횟수 추가</th>
          					</tr>
          				</thead>
          				<tbody>
          					<tr>
          						<td>2021-02-04</td>
          						<td>1강</td>
                      <td>O.T 안내 / 도약 모고 A형 해설</td>
                      <td>2회 / 3회</td>
                      <td><span class="unit"><input type="text" class="tC"><em>회</em></span></td>
          					</tr>
          					<tr>
          						<td>2021-02-04</td>
                      <td>2강</td>
                      <td>도약 모고 (1회) 첨삭 해설 / 도약 모고 2회 A형 설명</td>
                      <td>1회 / 3회</td>
                      <td><span class="unit"><input type="text" class="tC"><em>회</em></span></td>
          					</tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
          				</tbody>
          			</table>
          		</div>
              <div class="tR pt10">
                <button class="btnM">추가</button>
              </div>
              <h3><strong>관리</strong></h3>
          		<div class="tvs record">
          			<table>
          				<colgroup>
          					<col width="160"/>
          					<col width="*"/>
          				</colgroup>
          				<tbody>
          					<tr>
          						<th>수정 이력</th>
          						<td>
          							<ul class="recordList">
          								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 수정</li>
          								<li><strong>[2021-02-23 15:35  / 홍길동 ]</strong> 등록</li>
          							</ul>
          						</td>
          					</tr>
          				</tbody>
          			</table>
          		</div>
            </div>
  					<!--//보충강의 다운로드 -->
					</div>
				</div>
				<!-- //tab-wrap -->
  		</div>
    </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MemberSupplementMgt',
  data() {
    return {
        memberTab: 0,
        calDate01: '',
        calDate02: '',
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
