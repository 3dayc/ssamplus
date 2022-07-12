<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="myInfoModify">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>내 정보</h3>
          </div>
          <!-- //서브 타이틀 -->
          <div class="loginInfo">
            <h4>로그인 정보</h4>
            <div class="boardWrite">
              <dl>
                <dt>아이디</dt>
                <dd class="data">abcd1234</dd>
                <dd class="txt">※ 아이디는 변경이 불가능 합니다.</dd>
              </dl>
              <dl>
                <dt>비밀번호</dt>
                <dd class="data"><button class="btnPwChange" @click="popupTrigger01 = true">비밀번호 변경</button></dd>
                <dd class="txt">※ 비밀번호를 화면에 표시하지 않습니다.</dd>
              </dl>
            </div>
          </div>
          <div class="leaveGo">회원 탈퇴 후에는 동일한 아이디로 재가입할 수 없습니다. <button @click="popupTrigger06 = true">회원탈퇴 &gt;</button></div>
          <div class="gridSet grid2">
            <div class="gridItem mustArea">
              <h4>필수정보
                <span class="right">
                  <em @click="mustInfoTrigger = 0">기관인증(네이버,카카오,패스)</em>&nbsp;&nbsp;
                  <em @click="mustInfoTrigger = 1">이메일</em>&nbsp;&nbsp;
                  <em @click="mustInfoTrigger = 2">문자</em>
                </span>
              </h4>
              <div class="boardWrite">
                <!-- 기관인증(네이버,카카오,패스) 인 경우 -->
                <div v-if="mustInfoTrigger == 0">
                  <dl>
                    <dt>이름</dt>
                    <dd>
                      <span class="ipModify">
                        <input type="text" value="홍길동" disabled />
                        <button class="modifyOpen" @click="agencyOKTrigger = true">수정하기</button>
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>휴대전화</dt>
                    <dd>
                      <span class="ipModify">
                        <input type="text" value="010-0000-0000" disabled />
                        <button class="modifyOpen" @click="agencyOKTrigger = true">수정하기</button>
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>생년월일</dt>
                    <dd>
                      <span class="ipModify">
                        <input type="text" value="1990-01-01 (남자)" disabled />
                        <button class="modifyOpen" @click="agencyOKTrigger = true">수정하기</button>
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>이메일</dt>
                    <dd><input type="text" value="gd.hong@gmail.com" /></dd>
                  </dl>
                </div>
                <!-- //기관인증(네이버,카카오,패스) 인 경우 -->
                <!-- 이메일인증 인 경우 -->
                <div v-if="mustInfoTrigger == 1">
                  <dl>
                    <dt>이름</dt>
                    <dd>
                      <span class="ipModify">
                        <input type="text" value="홍길동" disabled />
                        <button class="modifyOpen" @click="emailOKTrigger = true">수정하기</button>
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>휴대전화</dt>
                    <dd>
                      <span class="ipModify">
                        <input type="text" value="010-0000-0000" disabled />
                        <button class="modifyOpen" @click="emailOKTrigger = true">수정하기</button>
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>생년월일</dt>
                    <dd>
                      <span class="ipModify">
                        <input type="text" value="1990-01-01 (남자)" disabled />
                        <button class="modifyOpen" @click="emailOKTrigger = true">수정하기</button>
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>이메일</dt>
                    <dd>
                      <span class="ipModify">
                        <input type="text" value="gd.hong@gmail.com" disabled />
                        <button class="modifyOpen" @click="emailOKTrigger = true">수정하기</button>
                      </span>
                    </dd>
                  </dl>
                </div>
                <!-- //이메일인증 인 경우 -->
                <!-- 문자인증 인 경우 -->
                <div v-if="mustInfoTrigger == 2">
                  <dl>
                    <dt>이름</dt>
                    <dd>
                      <span class="ipModify">
                        <input type="text" value="홍길동" disabled />
                        <button class="modifyOpen" @click="snsOKTrigger = true">수정하기</button>
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>휴대전화</dt>
                    <dd>
                      <span class="ipModify">
                        <input type="text" value="010-0000-0000" disabled />
                        <button class="modifyOpen" @click="snsOKTrigger = true">수정하기</button>
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>생년월일</dt>
                    <dd>
                      <span class="ipModify">
                        <input type="text" value="1990-01-01 (남자)" disabled />
                        <button class="modifyOpen" @click="snsOKTrigger = true">수정하기</button>
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>이메일</dt>
                    <dd><input type="text" value="gd.hong@gmail.com" /></dd>
                  </dl>
                </div>
                <!-- //문자인증 인 경우 -->
                <dl>
                  <dt>준비 중인 시험</dt>
                  <dd>
    								<!-- <multiselect v-model="value" :options="options" :close-on-select="true" placeholder="준비 중인 시험" class="autoComplete">
    									<span slot="noResult">검색결과가 없습니다. 다시 입력해주세요.</span>
    								</multiselect> 2021-11-09  자동완성 변경 -->
                    <div class="box columMulty">
                      <span class="selectSet">
                        <select name="" id="">
                          <option>분류</option>
                        </select>
                      </span>
                      <span class="selectSet">
                        <select name="" id="">
                          <option>전공</option>
                        </select>
                      </span>
                    </div>
                  </dd>
                </dl>
                <dl class="marketingArea">
                  <dt>SMS 문자 및 <span>이메일 수신 동의</span></dt>
                  <dd>
                    <div class="checkWrap">
                      <span class="checkSet">
                        <input type="checkbox" id="one" />
                        <label for="one"><i></i>SMS 문자</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="two" />
                        <label for="two"><i></i>이메일</label>
                      </span>
                    </div>
                    <div class="fGray">※ 마케팅 및 광고, 강좌정보, 교재변동사항에 대한 정보를 수신합니다.</div>
                  </dd>
                </dl>
                <dl class="agreeArea">
                  <dt>개인정보활용 동의에 관한 유효기간</dt>
                  <dd>
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
                  </dd>
                </dl>
              </div>
              <span class="hrLine"></span>
            </div>
            <div class="gridItem optionArea">
              <h4>선택정보</h4>
              <div class="boardWrite">
                <dl>
                  <dt>교직이수</dt>
                  <dd>
                    <span class="selectSet wFull">
                      <select>
                        <option>교원 자격증 취득 경로 선택</option>
                        <option selected>사범대</option>
                      </select>
                    </span>
                  </dd>
                </dl>
                <dl>
                  <dt>최종학교</dt>
                  <dd>
    								<multiselect v-model="value2" :options="options2" :close-on-select="true" placeholder="학교" class="autoComplete">
    									<span slot="noResult">검색결과가 없습니다. 다시 입력해주세요.</span>
    								</multiselect> <!-- 2021-11-09  자동완성 변경 -->
                  </dd>
                </dl>
                <dl>
                  <dt>전공학과</dt>
                  <dd>
    								<multiselect v-model="value3" :options="options3" :close-on-select="true" placeholder="전공" class="autoComplete">
    									<span slot="noResult">검색결과가 없습니다. 다시 입력해주세요.</span>
    								</multiselect> <!-- 2021-11-09  자동완성 변경 -->
                  </dd>
                </dl>
                <dl class="schoolIng">
                  <dt>재학/졸업생</dt>
                  <dd>
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
    	              <span class="selectSet wFull mt5" v-if="kindTrigger == true">
    	                <select>
    	                  <option>학년 선택</option>
    										<option>1학년</option>
    										<option>2학년</option>
    										<option>3학년</option>
    										<option>4학년</option>
    	                </select>
    	              </span>
                    <div class="fGray">휴학중인 경우도 재학중으로 선택해주세요.</div>
                  </dd>
                </dl>
                <dl>
                  <dt>한국사 자격증</dt>
                  <dd>
      							<div class="choiceSet">
      		            <span>
      		              <input type="radio" name="radio2" id="radio21" checked />
      		              <label for="radio21">취득</label>
      		            </span>
      		            <span>
      		              <input type="radio" name="radio2" id="radio22" />
      		              <label for="radio22">미취득</label>
      		            </span>
      							</div>
                  </dd>
                </dl>
                <dl>
                  <dt>임용 응시횟수</dt>
                  <dd>
      							<span class="unit">
      								<input type="text" placeholder="임용 응시횟수" />
      								<em>회</em>
      							</span>
                  </dd>
                </dl>
                <dl>
                  <dt>응시희망지역</dt>
                  <dd>
    								<multiselect v-model="value4" :options="options4" :close-on-select="true" placeholder="임용 응시희망지역" class="autoComplete select_arrow">
    									<span slot="noResult">검색결과가 없습니다. 다시 입력해주세요.</span>
    								</multiselect> <!-- 2021-11-09  자동완성 변경 -->
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <span class="hrLine"></span>
          <div class="smsArea">
            <h4>소셜 로그인 설정</h4>
            <p class="fGray">※ 소셜 계정과 쌤플러스 계정을 연동하여 이메일과 비밀번호 없이 로그인하실 수 있습니다.</p>
            <div class="sms_btn_wrap">
	  					<button class="btnSns naver"><em>네이버 연동하기</em><i>설정일시 : <span>2021-05-08 14:51:23</span></i></button>
  						<button class="btnSns kakao"><em>카카오 연동하기</em><i>설정일시 : <span>미설정</span></i></button>
            </div>
          </div>
          <!-- 상세 버튼영역 -->
          <div class="boardBtn">
            <button class="btnL line">취소</button>
            <button class="btnL">확인</button>
          </div>
          <!-- //상세 버튼영역 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->


    <!-- 비밀번호 변경 -->
    <Popup v-if='popupTrigger01' @close="popupTrigger01 = false" class="pwChangePop">
      <template slot="modalheader">
        <div><h1>비밀번호를 변경하시겠습니까?</h1></div>
        <button @click="popupTrigger01 = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <input type="password" placeholder="현재 비밀번호" />
        <span class="erMsg" style="display:none;">비밀번호가 일치하지 않습니다.</span>
        <div>
          <input type="password" id="" name="" placeholder="신규 비밀번호" class="pwCheck" :class="{ok:pwcase1===true}" @blur="pwcase1 = true"/>
          <input type="password" id="" name="" placeholder="신규 비밀번호 확인" class="pwCheck" :class="{error:pwcase2===true}" @blur="pwcase2 = true"/>
          <p class="erMsg" v-if="pwcase2 == true">* 비밀번호가 일치하지 않습니다.</p>
          <span class="fGray">비밀번호는 영문, 숫자, 특수기호를 포함하여 8자리 이상으로 입력해 주세요.</span>
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn line">
          <button class="btnL line" @click="popupTrigger01 = false">취소</button>
          <button class="btnL" @click="popupTrigger01 = false">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //비밀번호 변경 -->
    <!-- 필수항목 : 기관인증인 경우  -->
    <Popup v-if='agencyOKTrigger' @close="agencyOKTrigger = false" class="agencyOKPop">
      <template slot="modalbody">
        <img :src="require(`@/assets/images/img_agencyOK.png`)" alt="" @click="agencyOKTrigger = false" />
      </template>
    </Popup>
    <!-- //필수항목 : 기관인증인 경우  -->
    <!-- 필수항목 : 이메일인증인 경우  -->
    <Popup v-if='emailOKTrigger' @close="emailOKTrigger = false" class="myInfoPop">
      <template slot="modalheader">
        <div><h1>개인정보를 변경하시겠습니까?</h1></div>
        <button @click="emailOKTrigger = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <span class="fGray">아이디, 비밀번호 찾기 등 본인확인이 필요한 경우에 사용되는 정보 입니다.</span>
        <div class="boardWrite">
          <dl>
            <dt>이름</dt>
            <dd>
              <input type="text" :placeholder="[[ namePlaceholder ]]" value="홍길동" />
            </dd>
          </dl>
          <dl>
            <dt>휴대전화번호</dt>
            <dd>
              <input type="text" :placeholder="[[ phonePlaceholder ]]" value="010-0000-0000" />
              <span class="erMsg" style="display:none;">휴대전화번호가 올바르지 않습니다.</span>
            </dd>
          </dl>
          <dl>
            <dt>생년월일</dt>
            <dd>
              <input type="text" :placeholder="[[ birthPlaceholder ]]" value="1988-00-00" />
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
                <input type="text" :placeholder="[[ emailPlaceholder ]]" />
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
          <button class="btnL line" @click="emailOKTrigger = false">취소</button>
          <button class="btnL" @click="emailOKTrigger = false">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //필수항목 : 이메일인증인 경우  -->
    <!-- 필수항목 : 문자인증인 경우  -->
    <Popup v-if='snsOKTrigger' @close="snsOKTrigger = false" class="myInfoPop">
      <template slot="modalheader">
        <div><h1>개인정보를 변경하시겠습니까?</h1></div>
        <button @click="snsOKTrigger = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <span class="fGray">아이디, 비밀번호 찾기 등 본인확인이 필요한 경우에 사용되는 정보 입니다.</span>
        <div class="boardWrite">
          <dl>
            <dt>이름</dt>
            <dd>
              <input type="text" value="홍길동" :placeholder="[[ namePlaceholder ]]" />
            </dd>
          </dl>
          <dl>
            <dt>휴대전화번호</dt>
            <dd>
              <input type="text" :placeholder="[[ phonePlaceholder ]]" value="010-0000-0000" />
              <span class="erMsg" style="display:none;">휴대전화번호가 올바르지 않습니다.</span>
            </dd>
          </dl>
          <dl>
            <dt>생년월일</dt>
            <dd>
              <input type="text" :placeholder="[[ birthPlaceholder ]]" value="1988-00-00" />
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
                <input type="text" :placeholder="[[ phonePlaceholder ]]" />
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
          <button class="btnL line" @click="snsOKTrigger = false">취소</button>
          <button class="btnL" @click="snsOKTrigger = false">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //필수항목 : 이메일인증인 경우  -->
    <!-- 회원탈퇴 -->
    <Popup v-if='popupTrigger06' @close="popupTrigger06 = false" class="myInfoPop">
      <template slot="modalheader">
        <div><h1>회원탈퇴 하시겠습니까?</h1></div>
        <button @click="popupTrigger06 = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <span class="fGray">탈퇴하면 모든 회원 정보는 삭제되며 복구할 수 없습니다. <br/>회원 탈퇴 후에는 동일한 아이디로 재가입할 수 없습니다.</span>
        <div class="leaveData">
          <span class="selectSet wFull">
            <select>
              <option>탈퇴사유를 선택해 주세요.</option>
              <option>수강하고 싶은 강좌가 없습니다.</option>
              <option>수강하고 싶은 선생님이 없습니다.</option>
              <option>홈페이지 서비스 속도가 느립니다.</option>
              <option>온라인 강의의 영상품질이 좋지 않습니다</option>
              <option>적합한 상담을 받을 수 없습니다.</option>
              <option>학원서비스가 불친절합니다.</option>
              <option>아이디를 변경합니다.</option>
              <option>기타 (직접입력)</option>
            </select>
          </span>
          <input type="text" placeholder="탈퇴사유 직접 입력" class="mt5" />
          <p>그동안 쌤플러스를 이용해 주셔서 감사합니다.</p>
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn line">
          <button class="btnL line" @click="popupTrigger06 = false">취소</button>
          <button class="btnL" @click="popupTrigger06 = false">회원탈퇴 합니다</button>
        </div>
      </template>
    </Popup>
    <!-- //필수항목 : 이메일 수정 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MyInfoModify',
  components: {
  },
  data() {
    return {
      agencyOKTrigger:false,
      emailOKTrigger:false,
      emailOKNum:false,
      snsOKTrigger:false,
      snsOKNum:false,
      mustInfoTrigger:0,

      popupTrigger01: false,
      popupTrigger02: false,
      popupTrigger03: false,
      popupTrigger04: false,
      popupTrigger05: false,
      popupTrigger06: false,
			kindTrigger: false,
			pwcase1:false,
			pwcase2:false,

			value: '중국어',
			options: ['교육학', '전공시험', '중국어', '한국사능력검정시험'],
			value2: '한양대학교',
			options2: ['서울대', '연세대', '고려대', '한양대학교'],
			value3: '수학교육과',
			options3: ['국어국문학과', '중국어과', '영어과', '수학교육과'],
			value4: '서울',
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
    placeholderChange() {
      //let namePlaceholder = this.$ref.name;
      if (!this.mobile) {
        this.namePlaceholder = '';
        this.phonePlaceholder = '- (하이픈)을 제외하고 입력';
        this.birthPlaceholder = '8자리 숫자로만 입력';
        this.emailPlaceholder = '';
      } else {
        this.namePlaceholder = '이름';
        this.phonePlaceholder = '휴대전화 (- 제외 입력)';
        this.birthPlaceholder = '생년월일 (8자리 숫자)';
        this.emailPlaceholder = '이메일 주소 입력';
      }
    }
  },
  mounted() {
    this.placeholderChange();
  },
}
</script>
