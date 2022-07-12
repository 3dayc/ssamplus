<template lang="html">
	<div>
		<div class="pageTit">
			<h2>사용자 정의교재</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/bookMgt">교재 관리</router-link><router-link to="/mkup/lecture/bookMgt">사용자 정의교재</router-link><em>신규등록</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="bookCustomView">
					<!-- 사용자 정의교재 기본정보 -->
					<div class="subTit">
						<h3>사용자 정의교재 기본정보</h3>
						<span class="right">
							<router-link to="/mkup/lecture/bookCustom" class="btnList">목록으로</router-link>
							<button class="btnM green ml10">저장</button>
							<router-link to="/mkup/lecture/bookCustom" class="btnM line ml10">삭제</router-link>
						</span>
					</div>
					<div class="tvs">
						<table>
							<colgroup>
								<col width="160"/>
								<col width="40%"/>
								<col width="160"/>
								<col width="*"/>
							</colgroup>
							<tbody>
								<tr>
									<th>사용여부</th>
									<td colspan="3">
	                  <span class="labelToggleSet tLength3">
	                    <input type="checkbox" id="toggle1">
	                    <label for="toggle1">
	                      <span>미사용</span>
	                      <span>사용</span>
	                    </label>
	                  </span>
									</td>
								</tr>
								<tr>
									<th>제목 <sup>필수</sup></th>
									<td><input type="text" value="이론교재 스포일러 (2021년 이론교재 프로모션)"/></td>
									<th>유효기간 <sup>필수</sup></th>
									<td>
										<span class="calDupSet">
				              <VCalendar class="calSet" v-model="date02" color="green">
				                <template v-slot="{ inputValue, togglePopover }">
				                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" />
				                </template>
				              </VCalendar>
				              <em>~</em>
				              <VCalendar class="calSet" v-model="date03" color="green">
				                <template v-slot="{ inputValue, togglePopover }">
				                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" />
				                </template>
				              </VCalendar>
				            </span>
									</td>
								</tr>
								<tr>
									<th>비고</th>
									<td colspan="3"><input type="text"/></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //사용자 정의교재 기본정보 -->
					<!-- 포함교재 -->
					<div class="subTit">
						<h3>포함교재</h3>
						<button class="btnS line ml20" @click="LectureSearchCustomBook()">교재검색</button>
					</div>
					<!-- 1안 – 적용 희망 1순위 -->
        	<div class="tls w60p mt10">
        	  <table>
        	    <colgroup>
        	      <col width="80"/>
        	      <col width="160"/>
        	      <col width="140"/>
        	      <col width="*"/>
        	    </colgroup>
        	    <thead>
        	      <tr>
        	        <th>순번</th>
        	        <th>도서코드</th>
        	        <th>과목/선생님</th>
        	        <th>교재명</th>
        	      </tr>
        	    </thead>
        	    <tbody>
        	      <tr>
        	        <td>=</td>
        	        <td>a1520B00008</td>
        	        <td>영어</br>류지원</td>
        	        <td class="tL"><a>류지원 영어교육학 기출문제집</a></td>
        	      </tr>
        	      <tr>
        	        <td>=</td>
        	        <td>a1520B00008</td>
        	        <td>영어</br>류지원</td>
        	        <td class="tL"><a>류지원 영어교육학 기출문제집</a></td>
        	      </tr>
        	      <tr>
        	        <td>=</td>
        	        <td>a1520B00008</td>
        	        <td>영어</br>류지원</td>
        	        <td class="tL"><a>류지원 영어교육학 기출문제집</a></td>
        	      </tr>
        	      <tr>
        	        <td>=</td>
        	        <td>a1520B00008</td>
        	        <td>영어</br>류지원</td>
        	        <td class="tL"><a>류지원 영어교육학 기출문제집</a></td>
        	      </tr>
        	      <tr>
        	        <td>=</td>
        	        <td>a1520B00008</td>
        	        <td>영어</br>류지원</td>
        	        <td class="tL"><a>류지원 영어교육학 기출문제집</a></td>
        	      </tr>
        	    </tbody>
        	  </table>
        	</div>
        	<!-- //1안 – 적용 희망 1순위 -->
					<!-- //포함교재 -->
				</div>
				<!-- //page layout -->
			</article>
		</div>

		<!-- Popup -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'BookCustomView',
	data() {
		return {
      date02: '2021-01-01',
      date03: '2021-12-31',
		}
	},
	methods: {
    LectureSearchCustomBook() {
      let routeData = this.$router.resolve({name: 'LectureSearchCustomBook', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceSearchCustomBook', '_blank', `width=1100,height=900`);
    },
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
