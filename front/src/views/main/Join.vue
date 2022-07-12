<template lang="html">
	<div>
	  <!-- loginWrap -->
		<div id="joinWrap">
	  	<div class="formBack">
	  		<div class="whiteBox">
	    		<div class="JoinWrap">
	    			<h1><img :src="require(`@/assets/images/i_logo_login.svg`)" alt="KG에듀원 쌤플러스" /></h1>
						<!-- 동의 -->
						<div class="joinStep1" v-if="joinStep == 0">
							<div class="subTit">
								<h2>
									쌤 Plus 회원가입
									<em>이용약관, 개인정보, 마케팅 수신에 관한 내용을 확인하실 수 있습니다.</em>
								</h2>
							</div>
							<div class="agreeCheck">
								<span class="checkSet">
									<input type="checkbox" id="one" />
									<label for="one"><i></i>모두 동의합니다.</label>
								</span>
								<div class="info">
									<p>전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, <br/>개별적으로도 동의를 선택하실 수 있습니다.</p>
									<p>선택 항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이 가능합니다.</p>
								</div>
								<ul>
									<li>
										<span class="checkSet">
											<input type="checkbox" id="one" />
											<label for="one"><i></i>쌤플러스 이용약관 <em>(필수)</em></label>
										</span>
										<button type="button" name="button" @click="popupTrigger = true">더보기</button>
									</li>
									<li>
										<span class="checkSet">
											<input type="checkbox" id="one" />
											<label for="one"><i></i>개인정보 수집 및 이용 <em>(필수)</em></label>
										</span>
										<button type="button" name="button" @click="popupTrigger = true, currentTab = 1">더보기</button>
									</li>
									<li>
										<span class="checkSet">
											<input type="checkbox" id="one" />
											<label for="one"><i></i>SNS 마케팅 수신동의 <em>(선택)</em></label>
										</span>
										<button type="button" name="button" @click="popupTrigger = true, currentTab = 2">더보기</button>
									</li>
									<li>
										<span class="checkSet">
											<input type="checkbox" id="one" />
											<label for="one"><i></i>이메일 마케팅 수신동의 <em>(선택)</em></label>
										</span>
										<button type="button" name="button" @click="popupTrigger = true, currentTab = 3">더보기</button>
									</li>
								</ul>
							</div>
							<div class="subTit snsCase">
								<h2>
									인증방법 선택
									<em>SNS 계정 혹은 PASS으로 본인인증 처리를 완료하실 수 있습니다.</em>
								</h2>
							</div>
							<div class="findkindChoice">
								<button type="button" name="button" class="btnSnsKind phone" @click="joinStep = 4">휴대폰인증</button>
								<button type="button" name="button" class="btnSnsKind naver" @click="agencyOKTrigger = true">네이버</button>
								<button type="button" name="button" class="btnSnsKind kakao" @click="agencyOKTrigger = true">카카오</button>
								<button type="button" name="button" class="btnSnsKind email" @click="emailOKTrigger = 1">이메일</button>
								<button type="button" name="button" class="btnSnsKind sns" @click="snsOKTrigger = 1">문자인증</button>
							</div>
							<router-link to="./login" class="btnL line">취소</router-link>
						</div>
						<!-- //동의 -->
						<!-- 이미가입된 경우 -->
						<div class="joinBefore" v-if="joinStep == 4">
							<div class="back">
								<p>
									고객님은 이미 <strong>쌤플러스 회원</strong>입니다.<br/>
									<em>입력하신 정보는 이미 쌤플러스 회원으로 가입되어 있습니다.</em>
								</p>
								<span class="endTxt" v-if="findIdCase == 0">아이디 <strong>don******</strong></span>
								<div class="endTxt2" v-if="findIdCase == 1">
									조회되는 회원님의 아이디가 복수 개 입니다.
									<div>
										<span class="radioSet">
											don***
											<!-- <input type="radio" name="radio1" id="idmulty01" checked />
											<label for="idmulty01"><i></i>don***</label> -->
										</span>
										<span class="radioSet">
											hgo******
											<!-- <input type="radio" name="radio1" id="idmulty02" />
											<label for="idmulty02"><i></i>hgo******</label> -->
										</span>
										<span class="radioSet">
											Ert**********
											<!-- <input type="radio" name="radio1" id="idmulty03" />
											<label for="idmulty03"><i></i>Ert**********</label> -->
										</span>
									</div>
								</div>
							</div>
							<button class="btnL" @click="findIdCase = 1" v-if="findIdCase == 0">로그인</button>
							<router-link to="./login" class="btnL" v-if="findIdCase == 1">로그인</router-link>
							<router-link to="./findAccount" class="btnL line">비밀번호 재설정</router-link>
							<router-link to="./login" class="btnL line">취소</router-link>
						</div>
						<!-- //이미가입된 경우 -->
						<!-- 필수정보 -->
						<div class="joinStep2" v-if="joinStep == 1">
							<div class="subTit">
								<h2>필수정보
									<em>모든 정보를 입력해야 회원가입이 가능합니다.</em>
								</h2>
							</div>
							<div class="joinForm">
								<input type="text" placeholder="아이디" />
								<p class="infoMsg">사용 가능한 아이디 입니다</p>
								<input type="password" id="" name="" placeholder="비밀번호" class="pwCheck" :class="{ok:pwcase1===true}" @blur="pwcase1 = true"/>
								<p class="erMsg" style="display:none;">* 영문, 숫자, 특수기호를 포함하여 8자리 이상으로 입력해 주세요.</p>
								<input type="password" id="" name="" placeholder="비밀번호 확인" class="pwCheck" :class="{error:pwcase2===true}" @blur="pwcase2 = true"/>
								<p class="erMsg" v-if="pwcase2 == true">* 비밀번호가 일치하지 않습니다.</p>
								<p class="infoMsg">비밀번호는 영문, 숫자, 특수기호를 포함하여 8자리 이상으로 입력해 주세요.</p>
								<!-- 기관인증 , 문자 인증인 경우 -->
								<div v-if="mustInfoTrigger == 0">
									<div class="disabledData">
										<input type="text" disabled value="홍길동" />
										<input type="text" disabled value="010-0000-0000" />
										<input type="text" disabled value="1990-01-01 (남자)" />
									</div>
									<input type="text" placeholder="이메일" />
								</div>
								<!-- //기관인증 , 문자 인증인 경우 -->
								<!-- 이메일 인증인 경우 -->
								<div v-if="mustInfoTrigger == 1">
									<div class="disabledData">
										<input type="text" disabled value="홍길동" />
										<input type="text" disabled value="010-0000-0000" />
										<input type="text" disabled value="1990-01-01 (남자)" />
										<input type="text" disabled value="gd.hong@gmail.com" />
									</div>
								</div>
								<!-- //이메일 인증인 경우 -->
								<multiselect v-model="value" :options="options" :close-on-select="true" placeholder="준비 중인 시험" class="autoComplete">
									<span slot="noResult">검색결과가 없습니다. 다시 입력해주세요.</span>
								</multiselect> <!-- 2021-11-09  자동완성 변경 -->
								<h3>개인정보활용 동의에 관한 유효기간</h3>
								<div class="choiceSet col4">
									<span>
										<input type="radio" id="one1" name="agreeYear" checked />
										<label for="one1">탈퇴시까지</label>
									</span>
									<span>
										<input type="radio" id="one2" name="agreeYear" />
										<label for="one2">5년</label>
									</span>
									<span>
										<input type="radio" id="one3" name="agreeYear" />
										<label for="one3">2년</label>
									</span>
									<span>
										<input type="radio" id="one4" name="agreeYear" />
										<label for="one4">1년</label>
									</span>
								</div>
							</div>
							<button class="btnL" @click="joinStep = 2">다음</button>
							<router-link to="./login" class="btnL line">취소</router-link>
						</div>
						<!-- //필수정보 -->
						<!-- 기본 정보 -->
						<div class="joinStep3" v-if="joinStep == 2">
							<div class="subTit">
								<h2>
									선택정보
									<em>입력하신 정보를 기반으로 맞춤서비스를 진행하고 있습니다.</em>
								</h2>
							</div>
							<div class="joinForm">
	              <span class="selectSet">
	                <select>
	                  <option>교원 자격증 취득 경로 선택</option>
										<option>사범대</option>
										<option>교육대학교</option>
										<option>교육대학원</option>
										<option>일반대</option>
	                </select>
	              </span>
								<multiselect v-model="value2" :options="options2" :close-on-select="true" placeholder="학교" class="autoComplete">
									<span slot="noResult">검색결과가 없습니다. 다시 입력해주세요.</span>
								</multiselect> <!-- 2021-11-09  자동완성 변경 -->
								<multiselect v-model="value3" :options="options3" :close-on-select="true" placeholder="전공" class="autoComplete">
									<span slot="noResult">검색결과가 없습니다. 다시 입력해주세요.</span>
								</multiselect> <!-- 2021-11-09  자동완성 변경 -->
								<div class="infoMsg pb20">학교를 먼저 입력해 주세요.</div>
								<div class="choiceSet">
			            <span>
			              <input type="radio" name="radio1" id="radio11" value="radio11" @change="onChange($event)" />
			              <label for="radio11">졸업생</label>
			            </span>
			            <span>
			              <input type="radio" name="radio1" id="radio12" value="radio12" @change="onChange($event)" />
			              <label for="radio12">재학생</label>
			            </span>
								</div>
	              <span class="selectSet" v-if="kindTrigger == true">
	                <select>
	                  <option>학년 선택</option>
										<option>1학년</option>
										<option>2학년</option>
										<option>3학년</option>
										<option>4학년</option>
	                </select>
	              </span>
								<div class="infoMsg pd0">휴학중인 경우도 재학중으로 선택해주세요.</div>
								<h3>한국사 자격증</h3>
								<div class="choiceSet mb15">
			            <span>
			              <input type="radio" name="radio1" id="radio21" />
			              <label for="radio21">취득</label>
			            </span>
			            <span>
			              <input type="radio" name="radio1" id="radio22" />
			              <label for="radio22">미취득</label>
			            </span>
								</div>
								<span class="unit">
									<input type="text" placeholder="임용 응시횟수" />
									<em>회</em>
								</span>
								<multiselect v-model="value4" :options="options4" :close-on-select="true" placeholder="임용 응시희망지역" class="autoComplete">
									<span slot="noResult">검색결과가 없습니다. 다시 입력해주세요.</span>
								</multiselect> <!-- 2021-11-09  자동완성 변경 -->
							</div>
							<button class="btnL" @click="joinStep = 3">가입하기</button>
							<router-link to="./login" class="btnL line">취소</router-link>
						</div>
						<!-- //기본 정보 -->
						<!-- 가입완료 -->
						<div class="joinStep4" v-if="joinStep == 3">
							<p>
								내일의 <strong>홍길동 선생님</strong> <br/>회원가입을 축하합니다.
								<span>로그인하여 서비스를 이용해주세요.</span>
							</p>
							<router-link to="./main" class="btnL">메인화면으로 이동</router-link>
						</div>
						<!-- //가입완료 -->
	    		</div>
	      </div>
	      <div class="joinFooter">
	        <a href="http://kgeduone.co.kr/" target="_blank">회사소개</a>
	        <button @click="popupTrigger = true, currentTab = 0">이용약관</button>
	        <button @click="popupTrigger = true, currentTab = 1">개인정보처리방침</button>
	      </div>
	    </div>
		</div>
	  <!-- //loginWrap -->

		<!-- 필수항목 : 기관인증인 경우  -->
		<Popup v-if='agencyOKTrigger' @close="agencyOKTrigger = false" class="agencyOKPop">
			<template slot="modalbody">
				<img :src="require(`@/assets/images/img_agencyOK.png`)" alt="" @click="agencyOKTrigger = false; joinStep = 1; mustInfoTrigger = 0" />
			</template>
		</Popup>
		<!-- //필수항목 : 기관인증인 경우  -->
		<!-- 필수항목 : 이메일인증인 경우  -->
		<Popup v-if='emailOKTrigger' @close="emailOKTrigger = false" class="myInfoPop">
			<template slot="modalheader">
				<div><h1>이메일 인증</h1></div>
				<button @click="emailOKTrigger = false; joinStep = 1; mustInfoTrigger = 1" class="modalClose">close</button>
			</template>
			<template slot="modalbody">
				<span class="fGray">입력하는 회원정보는 회원가입 시에 사용될 정보로 인증 후에는 수정이 불가능하므로 정확하게 입력해 주세요.</span>
				<div class="boardWrite">
					<dl>
						<dt>이름</dt>
						<dd>
							<input type="text" placeholder="" value="홍길동" />
						</dd>
					</dl>
          <dl>
            <dt>휴대전화번호</dt>
            <dd>
              <input type="text" placeholder="- (하이픈)을 제외하고 입력" />
              <span class="erMsg" style="display:none;">휴대전화번호가 올바르지 않습니다.</span>
            </dd>
          </dl>
					<dl>
						<dt>생년월일</dt>
						<dd>
							<input type="text" placeholder="8자리 숫자로만 입력" />
							<span class="erMsg" style="display:none;">생년월일 형식이 올바르지 않습니다.</span>
						</dd>
					</dl>
					<dl>
						<dt>성별</dt>
						<dd>
							<div class="choiceSet">
								<span>
									<input type="radio" name="radio1" id="radio11" checked />
									<label for="radio11">남자</label>
								</span>
								<span>
									<input type="radio" name="radio1" id="radio12" />
									<label for="radio12">여자</label>
								</span>
							</div>
						</dd>
					</dl>
				</div>
				<div class="boardWrite changeData">
					<dl>
						<dt>이메일 주소</dt>
						<dd>
							<span class="ipBtn">
								<input type="text" placeholder="이메일 주소 입력" />
								<button class="btnS line" @click="emailOKNum = true">인증하기</button>
							</span>
							<span class="erMsg" style="display:none;">이메일 형식이 올바르지 않습니다.</span>
						</dd>
					</dl>
					<dl v-if="emailOKNum">
						<dt>인증번호</dt>
						<dd>
							<span class="ipSecurity">
								<input type="text" placeholder="인증번호 입력" />
								<em>02:59</em>
								<button class="btnS">재발송</button>
							</span>
							<span class="erMsg" style="display:none;">올바르지 않은 인증번호 입니다.</span>
						</dd>
					</dl>
				</div>
			</template>
			<template slot="modalfooter">
				<div class="modalBtn line">
					<button class="btnL line" @click="emailOKTrigger = false; joinStep = 1; mustInfoTrigger = 1">취소</button>
					<button class="btnL" @click="emailOKTrigger = false; joinStep = 1; mustInfoTrigger = 1">확인</button>
				</div>
			</template>
		</Popup>
		<!-- //필수항목 : 이메일인증인 경우  -->
		<!-- 필수항목 : 문자인증인 경우  -->
		<Popup v-if='snsOKTrigger' @close="snsOKTrigger = false" class="myInfoPop">
			<template slot="modalheader">
				<div><h1>문자 인증</h1></div>
				<button @click="snsOKTrigger = false; joinStep = 1; mustInfoTrigger = 0" class="modalClose">close</button>
			</template>
			<template slot="modalbody">
				<span class="fGray">입력하는 회원정보는 회원가입 시에 사용될 정보로 인증 후에는 수정이 불가능하므로 정확하게 입력해 주세요.</span>
				<div class="boardWrite">
					<dl>
						<dt>이름</dt>
						<dd>
							<input type="text" placeholder="" value="홍길동" />
						</dd>
					</dl>
          <dl>
            <dt>휴대전화번호</dt>
            <dd>
              <input type="text" placeholder="- (하이픈)을 제외하고 입력" />
              <span class="erMsg" style="display:none;">휴대전화번호가 올바르지 않습니다.</span>
            </dd>
          </dl>
					<dl>
						<dt>생년월일</dt>
						<dd>
							<input type="text" placeholder="8자리 숫자로만 입력" />
							<span class="erMsg" style="display:none;">생년월일 형식이 올바르지 않습니다.</span>
						</dd>
					</dl>
					<dl>
						<dt>성별</dt>
						<dd>
							<div class="choiceSet">
								<span>
									<input type="radio" name="radio1" id="radio11" checked />
									<label for="radio11">남자</label>
								</span>
								<span>
									<input type="radio" name="radio1" id="radio12" />
									<label for="radio12">여자</label>
								</span>
							</div>
						</dd>
					</dl>
				</div>
				<div class="boardWrite changeData">
					<dl>
						<dt>휴대전화번호</dt>
						<dd>
							<span class="ipBtn">
								<input type="text" placeholder="휴대전화 숫자만 입력" />
								<button class="btnS line" @click="snsOKNum = true">인증하기</button>
							</span>
							<span class="erMsg" style="display:none;">휴대전화번호 형식이 올바르지 않습니다.</span>
						</dd>
					</dl>
					<dl v-if="snsOKNum">
						<dt>인증번호</dt>
						<dd>
							<span class="ipSecurity">
								<input type="text" placeholder="인증번호 입력" />
								<em>02:59</em>
								<button class="btnS">재발송</button>
							</span>
							<span class="erMsg" style="display:none;">올바르지 않은 인증번호 입니다.</span>
						</dd>
					</dl>
				</div>
			</template>
			<template slot="modalfooter">
				<div class="modalBtn line">
					<button class="btnL line" @click="snsOKTrigger = false; joinStep = 1; mustInfoTrigger = 0">취소</button>
					<button class="btnL" @click="snsOKTrigger = false; joinStep = 1; mustInfoTrigger = 0">확인</button>
				</div>
			</template>
		</Popup>
		<!-- //필수항목 : 이메일인증인 경우  -->
		<!-- 동의 본문 팝업 Popup -->
		<Popup v-if='popupTrigger' @close="popupTrigger = false" class="agreePop">
			<template slot="modalbody">
				<button @click="popupTrigger = false" class="modalClose">close</button>
				<!-- tab-wrap2 -->
				<div class="tabwrap">
					<!-- tab -->
					<div class="tabBack">
						<div class="tabNav">
							<nav>
								<ul class="lineTab">
									<li :class="{on:currentTab===0}"><button @click="currentTab = 0">이용약관</button></li>
									<li :class="{on:currentTab===1}"><button @click="currentTab = 1">개인정보 수집 및 이용약관</button></li>
									<li :class="{on:currentTab===2}"><button @click="currentTab = 2">SNS 마케팅 수신동의</button></li>
									<li :class="{on:currentTab===3}"><button @click="currentTab = 3">이메일 마케팅 수신동의</button></li>
								</ul>
							</nav>
						</div>
					</div>
					<!--// tab -->
					<div class="tabLayout">
						<div v-if="currentTab == 0" class="tabData" :key="currentTab"><PolicyService /></div>
						<div v-if="currentTab == 1" class="tabData"><PolicyPrivacy /></div>
						<div v-if="currentTab == 2" class="tabData"><PolicySms /></div>
						<div v-if="currentTab == 3" class="tabData"><PolicyEmail /></div>
					</div>
				</div>
				<!-- //tab-wrap -->
			</template>
		</Popup>
		<!-- 동의 본문 팝업 Popup -->
	</div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import PolicyService from '@/views/main/PolicyService.vue';
import PolicyPrivacy from '@/views/main/PolicyPrivacy.vue';
import PolicySms from '@/views/main/PolicySms.vue';
import PolicyEmail from '@/views/main/PolicyEmail.vue';

export default {
  mixins: [Mixin],
  name: 'Join',
  components: {
		PolicyService,
		PolicyPrivacy,
		PolicySms,
		PolicyEmail,
  },
  data() {
    return {
      agencyOKTrigger:false,
      emailOKTrigger:false,
      emailOKNum:false,
      snsOKTrigger:false,
      snsOKNum:false,
      mustInfoTrigger:0,

			popupTrigger: false,
			kindTrigger: false,
			joinStep: 0,
			currentTab: 0,
			findIdCase:0,
			pwcase1:false,
			pwcase2:false,

			value: null,
			options: ['교육학', '전공시험', '한국사능력검정시험'],
			value2: null,
			options2: ['서울대', '연세대', '고려대'],
			value3: null,
			options3: ['국어국문학과', '중국어과', '영어과'],
			value4: null,
			options4: ['서울', '경기도', '강원도'],
    }
  },
  methods: {
    onChange(event) {
      let optionText = event.target.value;
        this.kindTrigger = false;

      if (optionText == 'radio11') {
        this.kindTrigger = false;
      } else {
        this.kindTrigger = true;
      }
    },
  },
}
</script>
