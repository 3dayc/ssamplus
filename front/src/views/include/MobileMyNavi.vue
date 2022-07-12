<template>
  <div id="mobileMyNavi">
    <div class="naviBack">
      <!---->
      <div class="naviBase">
        <div class="btnNav">
          <router-link to="" class="btnNaviSet">설정</router-link>
          <button class="btnNaviClose" @click="mobileMynaviClose($event)">닫기</button>
        </div>
        <span class="labelToggleSet mode" v-if="this.isMyToggle">
          <input type="checkbox" id="push55" checked>
          <label for="push55">
            <span>전공모드</span>
            <span>일반모드</span>
          </label>
        </span>
        <!-- 로그인 전 -->
        <div class="naviLogin" v-if="!this.isLoginToggle">
          <div class="noName">
            <strong>로그인 해주세요.</strong>
            로그인을 하시면<br/>더 많은 서비스를 이용하실 수 있습니다.
          </div>
          <span class="goMy">
            <router-link to="/mkup/login" class="btnM btnLogin" @click.native="mobileMynaviClose($event)">로그인</router-link>
            <router-link to="/mkup/join" class="btnM btnJoin" @click.native="mobileMynaviClose($event)">회원가입</router-link>
          </span>
        </div>
        <!-- 로그인 후 -->
        <div class="naviMyInfo" v-else-if="this.isLoginToggle">
          <div class="name">
            내일의 중국어 <strong>홍길동</strong> 선생님,<br/> 반갑습니다.
          </div>
          <!-- <span class="goMy"> -->
            <!-- <router-link to="/mkup/mypage/payment/history" class="btnMypage" >마이페이지</router-link> -->
            <!-- <router-link to="/mkup/setting" class="btnM" @click.native="mobileMynaviClose($event)">설정하기</router-link> -->
            <!-- <router-link to="/mkup/login" class="btnM" @click.native="scrollHiden($event)">로그아웃</router-link> -->
          <!-- </span> -->
        </div>
        <!---->
        <span class="goBtn">
          <router-link to="/mkup/mypage/payment/basket" class="btnCart" @click.native="mobileMynaviClose($event)">장바구니</router-link>
          <router-link to="/mkup/bbs/notice" class="btnNotice new" @click.native="mobileMynaviClose($event)">공지사항</router-link>
          <router-link to="/mkup/bbs/event" class="btnEvent new" @click.native="mobileMynaviClose($event)">이벤트</router-link>
          <router-link to="/mkup/counsel/index" class="btnCounsel" @click.native="mobileMynaviClose($event)">상담센터</router-link>
        </span>
      </div>
      <!---->
      <div class="naviService">
        <router-link to="/mkup/smart" class="btnSmartGoNot" @click.native="mobileMynaviClose($event)" v-if="!this.isLoginToggle">SMART <strong>수강신청</strong></router-link>
        <template v-if="this.isLoginToggle">
          <router-link to="/mkup/smart" class="btnSmartGo" @click.native="mobileMynaviClose($event)">스마트 수강신청</router-link>
          <router-link to="/mkup/mylec/online/my" class="btnMylec" @click.native="mobileMynaviClose($event)">내 강의실</router-link>
        </template>
      </div>
      <!---->
      <div class="naviLecture">
        <!---->
        <ul class="favoritesList" v-if="this.isLecToggle && this.isLoginToggle">
          <li>
            <div class="listBack">
              <div>
                <span class="back">
                  <router-link to="/mkup/mylec/online/my/player">
                    <span class="thum">
                      <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
                    </span>
                    <span class="info">
                      <span>
                        <em>교육학 김현</em>
                        <strong>키위 기출분석반</strong>
                      </span>
                    </span>
                  </router-link>
                  <button class="btnDelete" @click="naviPopupTrigger01 = true">삭제</button>
                </span>
              </div>
            </div>
            <div class="listBack">
              <div>
                <span class="back">
                  <router-link to="/mkup/mylec/online/my/player">
                    <span class="thum">
                      <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare09.png`)" alt="" /></span>
                    </span>
                    <span class="info">
                      <span>
                        <em>수학 이정훈/안후상팀</em>
                        <strong>선대,미기+수교 이론 총정리</strong>
                      </span>
                    </span>
                  </router-link>
                  <button class="btnDelete" @click="naviPopupTrigger01 = true">삭제</button>
                </span>
              </div>
            </div>
            <div class="listBack">
              <div>
                <span class="back">
                  <router-link to="/mkup/mylec/online/my/player">
                    <span class="thum">
                      <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare09.png`)" alt="" /></span>
                    </span>
                    <span class="info">
                      <span>
                        <em>유아 배지윤</em>
                        <strong>영역별 핵심 총정리 문제풀이반</strong>
                      </span>
                    </span>
                  </router-link>
                  <button class="btnDelete" @click="naviPopupTrigger01 = true">삭제</button>
                </span>
              </div>
            </div>
            <div class="listBack">
              <div>
                <span class="back">
                  <router-link to="/mkup/mylec/online/my/player">
                    <span class="thum">
                      <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare09.png`)" alt="" /></span>
                    </span>
                    <span class="info">
                      <span>
                        <em>유아 배지윤</em>
                        <strong>영역별 핵심 총정리 문제풀이반</strong>
                      </span>
                    </span>
                  </router-link>
                  <button class="btnDelete">삭제</button>
                </span>
              </div>
            </div>
            <div class="listBack">
              <div>
                <button class="btnAdd" @click="favoritesTrigger = true">선생님 추가하기</button>
                <span class="info"><em>선생님 추가하기</em></span>
              </div>
            </div>
          </li>
        </ul>
        <template v-if="this.isLoginToggle"> 
          <button @click="isLoginToggle = false">로그인 안한 경우</button><br/>
          <button @click="isLecToggle = true">강의 있는 경우</button><br/>
          <button @click="isLecToggle = false">강의 없는 경우</button><br/>
          <button @click="isMyToggle = !isMyToggle">전공 여부</button>
        </template>
        <button @click="isLoginToggle = true" v-if="!this.isLoginToggle">로그인 한 경우</button>
        <!--//-->
      </div>
      <div class="naviFoot">
        <span class="naviCounsel">
          <router-link to="/mkup/mypage/payment/history" class="my" @click.native="mobileMynaviClose($event)">마이페이지</router-link>
          <router-link to="/mkup/login" class="logout" @click.native="scrollHiden($event)">로그아웃</router-link>
          <a href="https://pf.kakao.com/_qhFuj" target="_blank" class="chatbot">챗봇상담</a>
          <a href="https://pf.kakao.com/_WPrLl" target="_blank" class="quick">빠른문의</a>
          <router-link to="/mkup/intro" class="guide" @click.native="mobileMynaviClose($event)">초보자 가이드</router-link>
          <router-link to="/mkup/counsel/faq" class="faq" @click.native="mobileMynaviClose($event)">자주 하는 질문</router-link>
        </span>
      </div>
    </div>

      <!--즐겨찾기 삭제 -->
      <Alert v-if='naviPopupTrigger01' @close="naviPopupTrigger01 = false">
        <template slot="modalbody">
          선택한 수강강좌의 즐겨찾기를 해제 하시겠습니까?
        </template>
        <template slot="modalfooter">
          <button class="btnM line" @click="naviPopupTrigger01 = false">취소</button>
          <button class="btnM" @click="naviPopupTrigger01 = false">확인</button>
        </template>
      </Alert>
      <!-- //즐겨찾기 삭제 -->
		<!-- 즐겨찾기 Popup -->
		<Popup v-if='favoritesTrigger' @close="favoritesTrigger = false" class="favoritesPopup">
      <template slot="modalheader">
        <div><h1><em>내 강의실</em> 즐겨 찾기 설정</h1></div>
        <button @click="favoritesTrigger = false" class="modalClose">close</button>
      </template>
			<template slot="modalbody">
        <favoritesList />
			</template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnM line" @click="favoritesTrigger = false">취소</button>
          <button class="btnM" @click="favoritesTrigger = false">저장</button>
        </div>
      </template>
		</Popup>
		<!-- 즐겨찾기 Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import Popup from '@/views/include/Popup.vue';
import Alert from '@/views/include/Alert.vue';
import FavoritesList from '@/views/include/FavoritesList.vue';

export default {
  name: 'MobileMyNavi',
  components: {
    Popup,
    Alert,
    FavoritesList
  },
  data() {
    return {
      naviPopupTrigger01:false,
      isLecToggle:false,
      isMyToggle:false,
      isLoginToggle:false,
      favoritesTrigger:false
    }
  },
  computed: {
  },
  methods: {
    scrollHiden(event) {
      if (event) {
        let sitebody = document.body;
        this.active ? sitebody.classList.add("scrollHiden") : sitebody.classList.remove("scrollHiden");
      }
    },
    mobileMynaviClose(event) {
      if (event) {
        let sitebody = document.body;
        let mobileMyNaviArea = document.getElementById("mobileMyNavi");
        sitebody.classList.remove("scrollHiden");
        mobileMyNaviArea.classList.remove("on");
      }
    }
  }
};
</script>
