<template lang="html">
	<div>
		<div class="pageTit">
	  	<h2>중복 재생 리스트</h2>
			<span><router-link to="/mkup/member/userMgt">회원/선생님</router-link><router-link to="/mkup/member/logDuply">회원 로그</router-link><router-link to="/mkup/member/logDuply">중복 재생 리스트</router-link><em>상세</em></span><!-- 2021-07-14 메뉴명 변경 -->
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="logDuplyView">
					<!-- 중복 재생 회원 정보 -->
		      <div class="subTit"><h3>중복 재생 회원 정보</h3></div>
					<div class="tvs">
						<table>
							<colgroup>
								<col width="160"/>
								<col width="500"/>
								<col width="160"/>
								<col width="500"/>
							</colgroup>
							<tbody>
								<tr>
									<th>이름</th>
									<td>김지민</td>
									<th>회원번호</th>
									<td>361145</td>
								</tr>
								<tr>
									<th>아이디</th>
									<td>jimin01234</td>
									<th>휴대폰번호</th>
									<td>010-1234-5678</td>
								</tr>
								<tr>
									<th>준비시험</th>
									<td>전공중국어</td>
									<th>중복 재생 횟수<br/>(유효/취소)</th>
									<td>1회/0회</td>
								</tr>
								<tr>
									<th>기존 IP</th>
									<td><button class="fBlue underline" @click="logTab = 0">1.254.98.69</button></td>
									<th>충돌 IP</th>
									<td><button class="fBlue underline" @click="logTab = 1">1.254.98.69</button></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //중복 재생 회원 정보 -->
					<div class="tabwrap mt20">
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul>
                    <li :class="{on:logTab===0}">
                      <button @click="logTab = 0">기존 IP 사용 정보</button>
                    </li>
                    <li :class="{on:logTab===1}">
                      <button @click="logTab = 1">충돌 IP 사용 정보</button>
										</li>
                  </ul>
                </nav>
              </div>
            </div>
              <!--// tab -->
            <div class="tabLayout">
              <!-- 기존 IP 사용 정보 -->
              <div v-if="logTab == 0" class="tabData">
                <LogDuplyViewBefore />
              </div>
              <!-- //기존 IP 사용 정보 -->
              <!-- 충돌 IP 사용 정보 -->
              <div v-if="logTab == 1" class="tabData">
								<LogDuplyViewCrash />
              </div>
              <!-- //충돌 IP 사용 정보 -->
            </div>
          </div>


				</div>
				<!-- //page layout -->
			</article>
		</div>

	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import LogDuplyViewBefore from '@/views/member/LogDuplyViewBefore.vue';
import LogDuplyViewCrash from '@/views/member/LogDuplyViewCrash.vue';

export default {
  mixins: [Mixin],
  name: 'LogDuplyView',
	data() {
		return {
			logTab: 0,
		}
	},
	methods: {
	},
	components: {
		LogDuplyViewBefore,
		LogDuplyViewCrash
	},
}
</script>

<style lang="css" scoped>
</style>
