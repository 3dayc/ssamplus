<template lang="html">
    <div id="windowLayout">
      <div class="winHeader">
        <h1>강좌변경내역</h1>
        <span class="supTxt">* 수강생이 해당 강좌에 홀딩, 연장, 재수강 신청한 내역을 표시합니다.</span>
      </div>
      <div class="winContent">
        <!-- 써머리 -->
        <div class="subStatusBox gridSet grid6-4">
          <div class="gridItem">
            <strong>[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사 반 <em class="iSet yellow">제작중</em></strong>
            <ul>
              <li><em>수강기간 :</em> 2021-02-04 ~ 2021-03-15 (70일)</li>
              <li><em>시간제한 :</em> 1.4배수</li>
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
									<li :class="{on:memberTab===0}"><button @click="memberTab = 0">시작일/홀딩</button></li>
									<li :class="{on:memberTab===1}"><button @click="memberTab = 1">연장</button></li>
									<li :class="{on:memberTab===2}"><button @click="memberTab = 2">재수강</button></li>
								</ul>
							</nav>
						</div>
					</div>
					<!--// tab -->
					<div class="tabLayout boxGray">
            <!-- 시작일/홀딩 -->
            <div v-if="memberTab == 0" class="tabData">
          		<h3>
          			<strong>시작일 변경 내역</strong>
          			<span class="right">시작일변경 기준 : 최대 <em>2</em>회</span>
          		</h3>
          		<div class="tls subGreen">
          			<table>
          				<colgroup>
          					<col width="50"/>
          					<col width="110" span="2" />
          				</colgroup>
          				<thead>
          					<tr>
          						<th>변경 회차</th>
          						<th>기존 시작일</th>
          						<th>변경 시작일</th>
          					</tr>
          				</thead>
          				<tbody>
          					<tr>
          						<td>2회</td>
          						<td>2021-01-30</td>
          						<td>2021-02-04</td>
          					</tr>
          					<tr>
          						<td>1회</td>
          						<td>2021-01-28</td>
          						<td>2021-01-25</td>
          					</tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="3" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
          				</tbody>
          			</table>
          		</div>
          		<h3>
          			<strong>강좌 홀딩 내역</strong>
          			<span class="right">홀딩 기준: 최대 <em>3</em>회/ <em>30</em>일</span>
          		</h3>
          		<div class="tls subGreen">
          			<table>
          				<colgroup>
          					<col width="40"/>
          					<col width="110"/>
          					<col width="160"/>
          					<col width="110"/>
          					<col width="60"/>
          				</colgroup>
          				<thead>
          					<tr>
          						<th>홀딩 회차</th>
          						<th>홀딩 신청일</th>
          						<th>홀딩 기간 (시작~종료)</th>
          						<th>홀딩 해제일 (재시작)</th>
          						<th>사용일수</th>
          					</tr>
          				</thead>
          				<tbody>
          					<tr>
          						<td>3회</td>
          						<td>2021-02-15</td>
          						<td>2021-02-16 ~ 2021-02-20</td>
          						<td>2021-02-19</td>
          						<td>3일</td>
          					</tr>
          					<tr>
          						<td>2회</td>
          						<td>2021-02-10</td>
          						<td>2021-02-11 ~ 2021-02-13</td>
          						<td>2021-02-14</td>
          						<td>3일</td>
          					</tr>
          					<tr>
          						<td>1회</td>
          						<td>2021-02-05</td>
          						<td>2021-02-06 ~ 2021-02-07</td>
          						<td>2021-02-08</td>
          						<td>1일</td>
          					</tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
          				</tbody>
          			</table>
          		</div>
            </div>
            <!-- //시작일/홀딩 -->
            <!-- 연장 -->
            <div v-if="memberTab == 1" class="tabData">
              <h3>
                <strong>강좌기간 연장 내역</strong>
                <span class="right">강좌기간 연장 기준: <em>3</em>회/ <em>15</em>일 (강좌 종료 D-7, D+15 기간에 사용 가능)</span>
              </h3>
              <div class="tls subGreen">
                <table>
                  <colgroup>
                    <col width="80"/>
                    <col width="110"/>
                    <col width="160"/>
                    <col width="60"/>
                    <col width="110"/>
                    <col width="80"/>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>연장 회차</th>
                      <th>연장 신청일</th>
                      <th>연장 기간 (시작~종료)</th>
                      <th>사용 일수</th>
                      <th>결제금액</th>
                      <th>결제수단<br/>결제여부</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3회</td>
                      <td>2021-02-15</td>
                      <td>2021-02-16 ~ 2021-02-16</td>
                      <td>1일</td>
                      <td>4,800원</td>
                      <td>신용카드<br/>결제완료</td>
                    </tr>
                    <tr>
                      <td>2회</td>
                      <td>2021-02-10</td>
                      <td>2021-02-11 ~ 2021-02-13</td>
                      <td>3일</td>
                      <td>14,600원</td>
                      <td>은행송금<br/>결제완료</td>
                    </tr>
                    <tr>
                      <td>1회</td>
                      <td>2021-02-05</td>
                      <td>2021-02-06 ~ 2021-02-07</td>
                      <td>5일</td>
                      <td>24,300원</td>
                      <td>신용카드<br/>결제완료</td>
                    </tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="6" class="noneData">연장 내역이 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
                  </tbody>
                </table>
              </div>
            </div>
            <!-- //연장 -->
            <!-- 재수강 -->
            <div v-if="memberTab == 2" class="tabData">
              <h3>
                <strong>재수강 신청 내역</strong>
                <span class="right">재수강신청 기준 : 최대 <em>1</em>회</span>
              </h3>
              <div class="tls subGreen">
                <table>
                  <colgroup>
                    <col width="80"/>
                    <col width="110"/>
                    <col width="160"/>
                    <col width="110"/>
                    <col width="80"/>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>재수강 회차</th>
                      <th>재수강 신청일</th>
                      <th>수강기간 (본강의 60%)</th>
                      <th>결제금액</th>
                      <th>결제수단<br/>결제여부</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1회</td>
                      <td>2021-02-10</td>
                      <td>2021-02-11~2021-04-10</td>
                      <td>155,000원</td>
                      <td>신용카드<br/>결제완료</td>
                    </tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
                  </tbody>
                </table>
              </div>
            </div>
            <!-- //재수강 -->
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
  name: 'MemberLectureChange',
  data() {
    return {
        memberTab: 0,
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
