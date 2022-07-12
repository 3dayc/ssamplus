<template lang="html">
    <div id="windowLayout">
      <div class="winHeader">
        <h1>수강기록</h1>
        <span class="supTxt">* 선택한 강좌의 수강기록을 표시함</span>
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
									<li :class="{on:memberTab===0}"><button @click="memberTab = 0">수강상세기록</button></li>
									<li :class="{on:memberTab===1}"><button @click="memberTab = 1">중복재생내역</button></li>
								</ul>
							</nav>
						</div>
					</div>
					<!--// tab -->
					<div class="tabLayout boxGray">
  					<!-- 수강상세기록 -->
            <div v-if="memberTab == 0" class="tabData">
              <h3>
                <strong>수강기록</strong>
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
          					<col width="30"/>
            				<col width="120"/>
            				<col width="120"/>
          					<col width="150"/>
          					<col width="150"/>
          					<col width="110"/>
          				</colgroup>
          				<thead>
          					<tr>
          						<th>강의회차</th>
                      <th>접속 IP</th>
                      <th>수강 맥어드레스</th>
                      <th>입실시간</th>
                      <th>퇴실시간</th>
                      <th>수강현황</th>
          					</tr>
          				</thead>
          				<tbody>
          					<tr>
          						<td>2강</td>
                      <td>1.214.204.138</td>
                      <td>54-05-DB-E2-89-62</td>
                      <td>2021-02-05(금) 22:32:48</td>
                      <td>2021-02-05(금) 32:34:48</td>
                      <td>수강: <span class="fBlue">10분 02초</span><br/>잔여: <span class="fBlue">29분 10초</span></td>
          					</tr>
          					<tr>
                      <td>2강</td>
                      <td>1.214.204.138</td>
                      <td>54-05-DB-E2-89-62</td>
                      <td>2021-02-05(금) 22:32:48</td>
                      <td>2021-02-05(금) 32:34:48</td>
                      <td>수강: <span class="fBlue">10분 02초</span><br/>잔여: <span class="fBlue">29분 10초</span></td>
          					</tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
          				</tbody>
          			</table>
          		</div>
            </div>
  					<!--//수강상세기록 -->
  					<!-- 중복재생내역 -->
            <div v-if="memberTab == 1" class="tabData">
              <h3>
                <strong>중복재생내역</strong>
                <span class="right">
                  <button class="btnM">중복재생리스트로 이동</button>
                </span>
              </h3>
          		<div class="tls subGreen">
          			<table>
          				<colgroup>
          					<col width="60"/>
          					<col width="100"/>
          					<col width="120"/>
          					<col width="130"/>
          					<col width="90"/>
          					<col width="90"/>
          				</colgroup>
          				<thead>
          					<tr>
          						<th>수강제한</th>
          						<th>충돌 IP</th>
          						<th>중복 재생 일시</th>
          						<th>브라우저</th>
          						<th>OS</th>
          						<th>중복 재생 횟수<br/>(유효/취소)</th>
          					</tr>
          				</thead>
          				<tbody>
                    <tr>
                      <td>1강좌</td>
                      <td>3.254.38.998</td>
                      <td>2020.07.15 (목) 20:18:33</td>
                      <td>Mozilla/5.0 (Windows)</td>
                      <td>Trident/7.0</td>
                      <td>1회<br/>(1회/0회)</td>
                   </tr>
                   <tr>
                      <td>1강좌</td>
                      <td>3.254.38.998</td>
                      <td>2020.07.15 (목) 20:18:33</td>
                      <td>Mozilla/5.0 (Windows)</td>
                      <td>Trident/7.0</td>
                      <td>1회<br/>(1회/0회)</td>
                    </tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
          				</tbody>
          			</table>
          		</div>
            </div>
  					<!--//중복재생내역 -->
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
  name: 'MemberLectureHistory',
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
