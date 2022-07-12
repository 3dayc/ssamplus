<template>
  <div>
    <!--footer-->
    <div id="pcFooter">
      <div class="topFooterArea">
        <div class="menuInfo">
          <div class="frameBack">
            <ul>
              <li><router-link to="/mkup/ssampack/index">쌤팩</router-link></li>
              <li><router-link to="/mkup/lecture/index">수강신청</router-link>
                <ol>
                  <li><router-link to="/mkup/lecture/index/mjedu">교육학</router-link></li>
                  <li><router-link to="/mkup/lecture/index/mjchild">유아</router-link></li>
                  <li><router-link to="/mkup/lecture/index/mjmiddle">중등</router-link></li>
                  <li><router-link to="/mkup/lecture/index/mjss">사회/과학</router-link></li>
                  <li><router-link to="/mkup/lecture/index/mjnomj">비교과</router-link></li>
                  <li><router-link to="/mkup/lecture/index/mjspe">특수</router-link></li>
                  <li><router-link to="/mkup/lecture/index/mjessay">논술 · 면접</router-link></li>
                  <li><router-link to="/mkup/lecture/index/mjhistory">한국사</router-link></li>
                  <li><router-link to="/mkup/lecture/index/mjlibr">사서직(공무원)</router-link></li>
                </ol>
              </li>
              <li><router-link to="/mkup/ssammall/index">쌤 Mall</router-link>
                <ol>
                  <li><router-link to="/mkup/ssammall/index">쌤 Mall 홈</router-link></li>
                  <li><router-link to="/mkup/ssammall/book">교재도서</router-link></li>
                  <li><router-link to="/mkup/ssammall/device">학습기기</router-link></li>
                  <li><router-link to="/mkup/ssammall/goods/fabric">굿즈</router-link></li>
                  <li><router-link to="/mkup/ssammall/review/book">백퍼후기</router-link></li>
                </ol>
              </li>
              <li><router-link to="/mkup/special/index">선생님 스페셜</router-link>
                <ol>
                  <li><router-link to="/mkup/special/index">선생님 스페셜 홈</router-link></li>
                  <li><router-link to="/mkup/special/event">선생님 이벤트</router-link></li>
                  <li><router-link to="/mkup/special/hit">리얼적중</router-link></li>
                  <li><router-link to="/mkup/special/interview">선생님 인터뷰</router-link></li>
                  <li><router-link to="/mkup/special/review">수강후기</router-link></li>
                </ol>
              </li>
              <li><router-link to="/mkup/openlec/index">무료강의</router-link>
                <ol>
                  <li><router-link to="/mkup/openlec/index">무료강의 홈</router-link></li>
                  <li><router-link to="/mkup/openlec/highlight">강의하이라이트</router-link></li>
                  <li><router-link to="/mkup/openlec/comment">기출해설</router-link></li>
                  <li><router-link to="/mkup/openlec/presentation">설명회</router-link></li>
                  <li><router-link to="/mkup/openlec/freelec">무료특강</router-link></li>
                </ol>
              </li>
              <li><router-link to="/mkup/exam/info/guide">시험정보</router-link>
                <ol>
                  <li><router-link to="/mkup/exam/info/guide">임용시험안내</router-link></li>
                  <li><router-link to="/mkup/exam/reference/previous">임용자료실</router-link></li>
                  <li><router-link to="/mkup/exam/column">임용칼럼</router-link></li>
                </ol>
              </li>
              <li><router-link to="/mkup/pass/index">합격수기/인터뷰</router-link>
                <ol>
                  <li><router-link to="/mkup/pass/index">합격수기 홈</router-link></li>
                  <li><router-link to="/mkup/pass/interview">선생님 별 합격수기</router-link></li>
                </ol>
              </li>
              <li><router-link to="/mkup/inside/index">인사이드희소</router-link></li>
              <li><router-link to="/mkup/academy/index">희소고시학원</router-link></li>
            </ul>
          </div>
        </div>
        <div class="academyInfo">
          <div class="frameBack">
            <ul>
              <li>
                <em class="iLocSet idea">idea</em>
                <address><strong>이데아관</strong>서울특별시 동작구 노량진로 146 이데아빌딩 4층</address>
              </li>
              <li>
                <em class="iLocSet ivy">ivy</em>
                <address><strong>아이비관</strong>서울특별시 동작구 장승배기로 171 아이비빌딩 5층</address>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="botFooterArea">
        <div class="frameBack">
          <div class="footNav">
            <span class="links">
              <a href="http://www.kgeduone.com/" target="_blank">회사소개</a>
              <router-link to="/mkup/inside/index">강사모집</router-link>
              <router-link to="/mkup/inside/index">제휴문의</router-link>
    	        <button @click="agreePopTrigger = true">이용약관</button>
    	        <button @click="agreePopTrigger = true" class="lighten">개인정보처리방침</button>
              <button>즐겨찾기등록</button>
            </span>
            <span class="right">
              <button class="btnSiteMore" @click="familyTrigger()" :class="{ on:familySiteTrigger }">Family Site</button>
              <div class="siteBack" v-if='familySiteTrigger'>
                <div class="siteMenu">
                  <strong class="siteTitle">KG 에듀원 교육사이트</strong>
                  <div class="gridArea familyGrid">
                    <div class="cols">
                      <dl>
                        <dt>교원임용 <span class="iLocSet">학원</span><span class="iLocSet online">온라인</span></dt>
                        <dd>
                          <a href="http://www.ssamplus.com/">교원임용(샘플러스, 희소고시학원)</a>
                        </dd>
                      </dl>
                      <dl>
                        <dt>IT교육 <span class="iLocSet">학원</span><span class="iLocSet online">온라인</span></dt>
                        <dd>
                          <a href="http://www.kgitbank.co.kr/" target="_blank">아이티뱅크</a>
                          <a href="https://edueroom.co.kr/" target="_blank">이:룸</a>
                          <a href="https://www.oncourse.co.kr/" target="_blank">온코스</a>
                        </dd>
                      </dl>
                    </div>
                    <div class="cols">
                      <dl>
                        <dt>법원/검찰 <span class="iLocSet">학원</span><span class="iLocSet online">온라인</span></dt>
                        <dd>
                          <a href="http://sis.passone.net/main/index_renewal.html?eduone=sis#none" target="_blank">사서직 공무원</a>
                          <a href="http://court.passone.net/main/index_renewal.html?eduone=court" target="_blank">법원/검찰직 공무원</a>
                        </dd>
                      </dl>
                      <dl>
                        <dt>인테리어교육 <span class="iLocSet">학원</span><span class="iLocSet online" target="_blank">온라인</span></dt>
                        <dd>
                          <a href="http://www.interiorbank.co.kr/" target="_blank">인테리어뱅크</a>
                        </dd>
                      </dl>
                    </div>
                    <div class="cols">
                      <dl>
                        <dt>회계사/세무사 <span class="iLocSet">학원</span><span class="iLocSet online">온라인</span></dt>
                        <dd>
                          <a href="http://www.miraecpa.com/victory/" target="_blank">회계사</a>
                          <a href="http://www.miraecpa.com/victory/" target="_blank">세무사</a>
                          <a href="http://www.miraecpa.com/victory/" target="_blank">재경/회계관리</a>
                        </dd>
                      </dl>
                      <dl>
                        <dt>공기업/대기업/금융 취업 <span class="iLocSet">학원</span></dt>
                        <dd>
                          <a href="http://www.naeiljob.co.kr/" target="_blank">내일코칭</a>
                        </dd>
                      </dl>
                    </div>
                    <div class="cols">
                      <dl>
                        <dt>직무교육 <span class="iLocSet online">온라인</span></dt>
                        <dd>
                          <a href="http://hrdb2b.passone.net/" target="_blank">직무교육</a>
                          <a href="http://hrd.kgeduone.co.kr/main/" target="_blank">국민내일배움카드</a>
                        </dd>
                      </dl>
                      <dl>
                        <dt>취업자격증 <span class="iLocSet">학원</span><span class="iLocSet online">온라인</span></dt>
                        <dd>
                          <a href="http://www.miraecpa.com/victory/" target="_blank">재경관리사/회계관리</a>
                          <a href="http://www.miraecpa.com/victory/" target="_blank">전산세무회계</a>
                        </dd>
                      </dl>
                    </div>
                    <div class="cols">
                      <dl>
                        <dt>학점은행 <span class="iLocSet online">온라인</span></dt>
                        <dd>
                          <a href="https://www.itbankcyber.com/" target="_blank">아이티뱅크 평생교육원</a>
                          <a href="https://welfare.passone.net/Default.asp" target="_blank">패스원 평생교육원</a>
                        </dd>
                      </dl>
                      <dl>
                        <dt>인문학/교양 <span class="iLocSet online">온라인</span></dt>
                        <dd>
                          <a href="https://www.ohmyschool.org/" target="_blank">오마이스쿨</a>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="kgFamily">
                  <strong>KG그룹 가족사</strong>
                  <a href="http://kgfamily.co.kr/" target="_blank">KG Family</a>
                  <a href="https://www.kgdongbusteel.co.kr/html/index.html" target="_blank">KG 동부체절</a>
                  <a href="http://www.kgchem.co.kr/main/main.php" target="_blank">KG 케미칼</a>
                  <a href="https://www.inicis.com/" target="_blank">KG 이니시스</a>
                  <a href="https://www.mobilians.co.kr/" target="_blank">KG 모빌리언스</a>
                  <a href="http://kgets.co.kr/K/main/" target="_blank">KG ETS</a>
                  <a href="https://zeroin.co.kr/main/main.do" target="_blank">KG 제로인</a>
                  <a href="http://www.sunningleader.co.kr/" target="_blank">KG써닝라이프</a>
                  <a href="http://www.enerchem.co.kr/main/" target="_blank">KG 에너캠</a>
                  <a href="https://www.kfckorea.com/" target="_blank">KFC</a>
                  <a href="https://www.edaily.co.kr/" target="_blank">이데일리</a>
                  <a href="https://tv.edaily.co.kr/" target="_blank">이데일리 C&#38;B</a>
                </div>
              </div>
              <button class="btnSiteMore" @click="eduTrigger()" :class="{ on:eduSiteTrigger }">교육관련 사이트</button>
              <div class="siteBack eduCase" v-if="eduSiteTrigger">
                <div class="siteMenu eduMenu">
                  <strong class="siteTitle">교육 관련 사이트</strong>
                  <div class="gridArea">
                    <div class="cols">
                      <a href="https://www.moe.go.kr/main.do" target="_blank">교육부</a>
                      <a href="https://www.textbook114.com/index.jsp" target="_blank">교육부 교육과정/교과서</a>
                      <a href="https://www.kice.re.kr/main.do?s=kice" target="_blank">한국교육과정평가원</a>
                      <a href="http://ncic.re.kr/mobile.index2.do" target="_blank">한국교육과정정보센터</a>
                      <a href="https://www.kedi.re.kr/index.jsp" target="_blank">한국교육개발원</a>
                    </div>
                    <div class="cols">
                      <a href="http://www.hangyo.com/" target="_blank">한국교육신문</a>
                      <a href="https://www.historyexam.go.kr/" target="_blank">한국사능력검정시험</a>
                    </div>
                  </div>
                </div>
                <div class="siteMenu officeMenu">
                  <strong class="siteTitle">전국 시/도 교육청</strong>
                  <div class="gridArea">
                    <div class="cols">
                      <a href="http://www.sen.go.kr/" target="_blank">서울특별시</a>
                      <a href="https://www.goe.go.kr/" target="_blank">경기도</a>
                      <a href="https://www.sje.go.kr/intro/intro.html" target="_blank">세종시</a>
                      <a href="https://www.jje.go.kr/corona.html" target="_blank">제주도</a>
                    </div>
                    <div class="cols">
                      <a href="http://www.ice.go.kr/intro/2020/new/intro.html" target="_blank">인천광역시</a>
                      <a href="http://www.dje.go.kr/intro_corona.html" target="_blank">대전광역시</a>
                      <a href="http://www.dge.go.kr/main/main.do" target="_blank">대구광역시</a>
                      <a href="http://www.gen.go.kr/main/main.php" target="_blank">광주광역시</a>
                      <a href="https://www.use.go.kr/index_main.jsp" target="_blank">울산광역시</a>
                    </div>
                    <div class="cols">
                      <a href="https://www.gwe.go.kr/mbshome/mbs/kr/index.do" target="_blank">강원도</a>
                      <a href="https://www.cbe.go.kr/" target="_blank">충청북도</a>
                      <a href="https://www.cne.go.kr/cne_intro.html" target="_blank">충청남도</a>
                      <a href="http://www.gbe.kr/main/main.do" target="_blank">경상북도</a>
                      <a href="http://www.gne.go.kr/coimsi.jsp" target="_blank">경상남도</a>
                    </div>
                    <div class="cols">
                      <a href="https://www.jbe.go.kr/intro/intro.html" target="_blank">전라북도</a>
                      <a href="https://www.jne.go.kr/main/tp/tempPage/tempPageView.do?typeCd=main&tpSeq=5" target="_blank">전라남도</a>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div class="footTxt">
            <ul>
              <li>서울특별시 중구 통일로 92 케이지타워 12층</li>
              <li>Tel : <em>1544-0678</em></li>
              <li>Fax : <em>02-814-7600</em></li>
            </ul>
            <ul>
              <li>사업자등록번호 : <em>119-81-39002</em></li>
              <li>통신판매업 신고번호 : 제 <em>03-570-232</em>호 쌤플러스 원격평생교육시설</li>
            </ul>
            <ul>
              <li>상호명 : (주)케이지에듀원</li>
              <li>대표자 : 이상준</li>
              <li>개인정보 관리 책임자 : 설동욱 <em>sdw9400@kggroup.co.kr</em></li>
            </ul>
            <small>Copyright ⓒ KG Eduone. All rights reserved.</small>
            <span class="snsBox">
              <a href="https://www.facebook.com/KGeduoneheeso/" target="-_blank" class="btnFaceBook">페이스북</a>
              <a href="https://www.instagram.com/kgeduone_heeso/" target="-_blank" class="btnInsta">인스타그램</a>
              <a href="https://blog.naver.com/myheeso" target="-_blank" class="btnBlog">블로그</a>
              <a href="https://www.youtube.com/channel/UCrKs4hCEUOeFQV-O2NSE_Wg" target="-_blank" class="btnYoutube">유튜브</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--//footer-->

		<!-- 동의 본문 팝업 Popup -->
		<Popup v-if='agreePopTrigger' @close="agreePopTrigger = false" class="agreePop">
			<template slot="modalbody">
				<button @click="agreePopTrigger = false" class="modalClose">close</button>
				<!-- tab-wrap2 -->
				<div class="tabwrap">
					<!-- tab -->
					<div class="tabBack">
						<div class="tabNav">
							<nav>
								<ul class="lineTab">
									<li :class="{on:agreetTab===0}"><button @click="agreetTab = 0">이용약관</button></li>
									<li :class="{on:agreetTab===1}"><button @click="agreetTab = 1">개인정보 수집 및 이용약관</button></li>
									<li :class="{on:agreetTab===2}"><button @click="agreetTab = 2">SNS 마케팅 수신동의</button></li>
									<li :class="{on:agreetTab===3}"><button @click="agreetTab = 3">이메일 마케팅 수신동의</button></li>
								</ul>
							</nav>
						</div>
					</div>
					<!--// tab -->
					<div class="tabLayout">
						<div v-if="agreetTab == 0" class="tabData" :key="agreetTab"><PolicyService /></div>
						<div v-if="agreetTab == 1" class="tabData"><PolicyPrivacy /></div>
						<div v-if="agreetTab == 2" class="tabData"><PolicySms /></div>
						<div v-if="agreetTab == 3" class="tabData"><PolicyEmail /></div>
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
  name: 'PcFooter',
  components: {
		PolicyService,
		PolicyPrivacy,
		PolicySms,
		PolicyEmail,
  },
  data() {
    return {
			agreePopTrigger: false,
			agreetTab: 0,
      familySiteTrigger: false,
      eduSiteTrigger: false,
    }
  },
  methods: {
    eduTrigger() {
      this.eduSiteTrigger = !this.eduSiteTrigger;
      this.familySiteTrigger = false;
    },
    familyTrigger() {
      this.familySiteTrigger = !this.familySiteTrigger;
      this.eduSiteTrigger = false;
    }
  }
};
</script>
