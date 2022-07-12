<template lang="html">
	<div>
		<div class="pageTit">
			<h2>회원 조회</h2>
			<span><router-link to="/mkup/member/userMgt">회원/교수</router-link><router-link to="/mkup/member/userMgt">회원 관리</router-link><em>회원 조회</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="userMgt">
		      <!-- 검색 -->
          <div class="boardTop">
						<div class="listSearch">
							<div class="back">
								<form>
									<div class="bdLine">
										<span class="lsItem">
											<span class="selectSet lCase">
												<select name="" id="">
													<option value="no" class="label">회원구분</option>
													<option value="">일반</option>
													<option value="">휴면회원</option>
													<option value="">탈퇴</option>
												</select>
											</span>
										</span>
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
													<option value="no" class="label">전공과목</option>
													<option value="">중등중국어</option>
												</select>
											</span>
										</span>
										<span class="lsItem">
											<input type="text" placeholder="이름, 아이디, 휴대폰, IP 검색" />
											<button class="btnSearch" @click="search()">검색</button>
										</span>
									</div>
									<div>
										<button class="btnRefresh">초기화</button>
									</div>
								</form>
							</div>
						</div>
						<span class="right-po"><button class="btnDownload" @click="popTrigger = true">다운로드</button></span>
          </div>
			    <!-- //검색 -->
			    <!-- 목록써머리 -->
					<div class="listSummery">
						<div class="left">
							<strong>회원 개인정보 표출</strong>
							<span class="toggleSet">
								<input type="checkbox" id="push" @click="toggle()"/>
								<label for="push"><!--적용여부--></label>
							</span>
						</div>
						<div class="right">
							<dl>
								<dt>가입자 현황</dt>
								<dd>전일 <strong>14</strong>명</dd>
								<dd>당월 <strong>365</strong>명</dd>
							</dl>
						</div>
					</div>
			    <!-- //목록써머리 -->
			    <!-- 목록 -->
					<div class="tls">
						<table>
							<colgroup>
								<col width="160"/>
								<col width="160"/>
								<col width="160"/>
								<col width="160"/>
								<col width="160"/>
								<col width="160"/>
								<col width="160"/>
								<col width="160"/>
							</colgroup>
							<thead>
								<tr>
									<th>회원번호</th>
									<th>이름/아이디</th>
									<th>회원구분</th>
									<th>수강구분</th>
									<th>준비시험</th>
									<th>학교/학과</th>
									<th>휴대폰번호</th>
									<th>가입일/경로</th>
								</tr>
							</thead>
							<tbody v-if="obj.length > 0">
								<tr									
									v-for="o in obj"
									v-bind:key="o.a1"																		
								>	
									<td>{{ o.a1 }}</td>
									<td>{{ o.a2 }}</td>
									<td>{{ o.a3 }}</td>
									<td>{{ o.a4 }}</td>
									<td>{{ o.a5 }}</td>
									<td>{{ o.a6 }}</td>
									<td>{{ o.a7 }}</td>
									<td>{{ o.a8 }}</td>									
								</tr>								
							</tbody>
							<tbody v-else>
								<tr><td colspan="10" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
        <h1>다운로드 마스터 – 회원</h1>
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
	                <option value="no" class="label">가입기간</option>
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
	                <option value="no" class="label">수강구분</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">유료수강</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
						</dd>
					</dl>
					<dl>
						<dt>조건3</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">수강교수</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">교육학</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">김현</option>
	                <option value="" >Select Option 1</option>
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
  name: 'UserMgt',
	data() {
			return {
	      classValue: "downloadPop",
	      popTrigger: false,
        downloadCal1: '',
        downloadCal2: '',
				isCheck: false,
				obj: [],
			}
	},	
	methods: {		
		test() {
			axios.get('/a-manager/list1').then(({ data }) => {
        this.obj = data.data;
				console.log(data);
			});			

		},
		test1() {
			axios.get('/a-manager/list2').then(({ data }) => {
        this.obj = data.data;
				console.log(data);
			});
		},
		search() {
			// this.test();
		},
		toggle() {			
			if (this.isCheck === false) this.test1();
			else this.test();

			this.isCheck = !this.isCheck;
		}
	},
	created() {    
		this.test();
	}
	
}
</script>

<style lang="css" scoped>
</style>
