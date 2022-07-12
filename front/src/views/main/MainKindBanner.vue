<template lang="html">
  <div>
    <!-- 하이라이트 배너 Set -->
    <div class="mainKindBanner">
      <div class="frameBack">
        <!-- tab -->
        <div class="tabBack">
          <div>
            <nav>
              <ul>
                <li :class="{on:currentTab===0}"><button @click="currentTab = 0">강의 하이라이트</button></li>
                <li :class="{on:currentTab===1}"><button @click="currentTab = 1">기출해설</button></li>
                <li :class="{on:currentTab===2}"><button @click="currentTab = 2">입문강의</button></li>
                <li :class="{on:currentTab===3}"><button @click="currentTab = 3">무료특강</button></li>
                <li :class="{on:currentTab===4}"><button @click="currentTab = 4">이벤트</button></li>
                <li :class="{on:currentTab===5}"><button @click="currentTab = 5">임용칼럼</button></li>
                <li :class="{on:currentTab===6}"><button @click="currentTab = 6">최신교재</button></li>
                <li :class="{on:currentTab===7}"><button @click="currentTab = 7">수강기기</button></li>
              </ul>
            </nav>
          </div>
        </div>
        <!--// tab -->
        <div class="tabLayout">
         <!-- 강의 하이라이트 -->
          <div v-if="currentTab == 0" class="tabData" :key="currentTab">
            <div class="firstImportant">
              <span class="indexBig playCase">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img28.png`)" alt="" /></span>
                <router-link to="">
                  <em><!--<small>유아 배지윤</small>--><i>호통 국어 박노송<br/>국어임용 수험생을 위한 진심을 담은 강좌</i></em>
                </router-link>
              </span>
              <span class="indexBig imgCase" style="display:none;"><!-- 이미지일 경우 사용 -->
                <router-link to="">
                  <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img13.png`)" alt="" /></span>
                  <em><i>교육과정 총론 부모 교육론<br/>단기합격 최다배출 명료한 유아강의!</i></em>
                </router-link>
              </span>
              <ul>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img29.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>언제나 변함없는 교육학의 정답<br/>키위 교육학</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img30.png`)" alt="" /></span>
                    <em><i>2022학년도 합격생 다수 배출!<br/>합격 페스티벌</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img31.png`)" alt="" /></span>
                    <em><i>유아 이동건<br/>개론 기본서 &amp; 기출의 구조화</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img32.png`)" alt="" /></span>
                    <em><i>교육과정 총론 부모 교육론<br/>단기합격 최다배출 명료한 유아강의!</i></em>
                  </router-link>
                </li>
                <!-- <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img18.png`)" alt="" /></span>
                    <em><i>직강생 전용 이론 복습용 강의<br/>1~4월 이론 전 강좌 무료 맛보기</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img19.png`)" alt="" /></span>
                    <em><i>합격을 위한 마지막 강의<br/>파이널 핵심팩</i></em>
                  </router-link>
                </li> -->
              </ul>
            </div>
            <div class="tC"><router-link to="/mkup/openlec/highlight" class="btnL line">강의 하이라이트 더보기</router-link></div>
          </div>
          <!-- //강의 하이라이트 -->
          <!-- 기출해설 -->
          <div v-if="currentTab == 1" class="tabData">
            <div class="allSame">
              <ul>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img32.png`)" alt="" /></span>
                    <em><i>교육과정 총론 부모 교육론<br/>단기합격 최다배출 명료한 유아강의!</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img33.png`)" alt="" /></span>
                    <em><i>교육학 논술학교<br/>교육학의 [핵심KEY]가 필요합니다!</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img34.png`)" alt="" /></span>
                    <em><i>음악 박서형<br/>기본/심화 자가진단 청음테스트</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img35.png`)" alt="" /></span>
                    <em><i>2015 개정 교육과정<br/>음악 교육과정 MP3다운로드 받기</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img36.png`)" alt="" /></span>
                    <em><i>일본어 동소현 선생님과 함께 꿈을 이룬<br/>합격수기&amp;인터뷰</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img37.png`)" alt="" /></span>
                    <em><i>가정 문영은 선생님과 함께 꿈을 이룬<br/>합격수기&amp;인터뷰</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img28.png`)" alt="" /></span>
                    <em><i>호통 국어 박노송<br/>국어임용 수험생을 위한 진심을 담은 강좌</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img29.png`)" alt="" /></span>
                    <em><i>언제나 변함없는 교육학의 정답<br/>키위 교육학</i></em>
                  </router-link>
                </li>   
                <!-- <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img27.png`)" alt="" /></span>
                    <em><i>한국사 슬쩍보기</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img15.png`)" alt="" /></span>
                    <em><i>2021학년도 임용시험대비<br/>5~6월 신규 강좌</i></em>
                  </router-link>
                </li> -->
              </ul>
            </div>
            <div class="tC"><router-link to="/mkup/openlec/comment" class="btnL line">기출해설 더보기</router-link></div>
          </div>
          <!-- //기출해설 -->
          <!-- 입문강의 -->
          <div v-if="currentTab == 2" class="tabData">
            <div class="firstImportant">
              <span class="indexBig imgCase"><!-- 이미지일 경우 사용 -->
                <router-link to="">
                  <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img13.png`)" alt="" /></span>
                  <em><i>교육과정 총론 부모 교육론<br/>단기합격 최다배출 명료한 유아강의!</i></em>
                </router-link>
              </span>
              <ul>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img14.png`)" alt="" /></span>
                    <em><i>올해도 완벽적중!<br/>2020 희소 적중 강좌</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img15.png`)" alt="" /></span>
                    <em><i>2021학년도 임용시험대비<br/>5~6월 신규 강좌</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img16.png`)" alt="" /></span>
                    <em><i>희소 이론강의설명서<br/>어떻게 선택할까?</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img17.png`)" alt="" /></span>
                    <em><i>온라인 청강이벤트<br/>2020년 3월~4월 강의 무료 맛보기</i></em>
                  </router-link>
                </li>
                <!-- <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img18.png`)" alt="" /></span>
                    <em><i>직강생 전용 이론 복습용 강의<br/>1~4월 이론 전 강좌 무료 맛보기</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img19.png`)" alt="" /></span>
                    <em><i>합격을 위한 마지막 강의<br/>파이널 핵심팩</i></em>
                  </router-link>
                </li> -->
              </ul>
            </div>
            <div class="tC"><router-link to="/mkup/special/hit" class="btnL line">입문강의 더보기</router-link></div>
          </div>
          <!-- //입문강의 -->
          <!-- 무료특강 -->
          <div v-if="currentTab == 3" class="tabData">
            <div class="allSame">
              <ul>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img20.png`)" alt="" /></span>
                    <em><i>유기화학 기본이론 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img21.png`)" alt="" /></span>
                    <em><i>한국사 용어 의미의 중요성<br/>(사심관/유향소/경재소)</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img22.png`)" alt="" /></span>
                    <em><i>과학교육론 기출해설 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img23.png`)" alt="" /></span>
                    <em><i>세포&amp;분자 생물학 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img24.png`)" alt="" /></span>
                    <em><i>10분 복습 time:<br/>교육행정&amp;교육심리</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img25.png`)" alt="" /></span>
                    <em><i>엄쌤 워드파워 활용<br/>꿀팁 대방출</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img26.png`)" alt="" /></span>
                    <em><i>미술 이론이 헷갈린다면?<br/>피아제vs로웬펠트</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img15.png`)" alt="" /></span>
                    <em><i>2021학년도 임용시험대비<br/>5~6월 신규 강좌</i></em>
                  </router-link>
                </li>
                <!-- <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img23.png`)" alt="" /></span>
                    <em><i>세포&amp;분자 생물학 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <router-link to="">
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img27.png`)" alt="" /></span>
                    <em><i>한국사 슬쩍보기</i></em>
                  </router-link>
                </li> -->
              </ul>
            </div>
            <div class="tC"><router-link to="/mkup/openlec/freelec" class="btnL line">무료특강 더보기</router-link></div>
          </div>
          <!-- //무료특강 -->
          <!-- 이벤트 -->
          <div v-if="currentTab == 4" class="tabData">
            <div class="allSame">
              <ul>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img27.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>한국사 슬쩍보기</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img20.png`)" alt="" /></span>
                    <em><i>유기화학 기본이론 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img24.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>10분 복습 time:<br/>교육행정&amp;교육심리</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img22.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>과학교육론 기출해설 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img25.png`)" alt="" /></span>
                    <em><i>엄쌤 워드파워 활용<br/>꿀팁 대방출</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img23.png`)" alt="" /></span>
                    <em><i>세포&amp;분자 생물학 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img15.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>2021학년도 임용시험대비<br/>5~6월 신규 강좌</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img21.png`)" alt="" /></span>
                    <em><i>한국사 용어 의미의 중요성<br/>(사심관/유향소/경재소)</i></em>
                  </router-link>
                </li>
                <!-- <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img22.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>과학교육론 기출해설 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img23.png`)" alt="" /></span>
                    <em><i>세포&amp;분자 생물학 하이라이트</i></em>
                  </router-link>
                </li> -->
              </ul>
            </div>
            <div class="tC"><router-link to="/mkup/bbs/event" class="btnL line">이벤트 더보기</router-link></div>
          </div>
          <!-- //이벤트 -->
          <!-- 임용칼럼 -->
          <div v-if="currentTab == 5" class="tabData">
            <div class="allSame">
              <ul>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img20.png`)" alt="" /></span>
                    <em><i>유기화학 기본이론 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img23.png`)" alt="" /></span>
                    <em><i>세포&amp;분자 생물학 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img21.png`)" alt="" /></span>
                    <em><i>한국사 용어 의미의 중요성<br/>(사심관/유향소/경재소)</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img22.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>과학교육론 기출해설 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img23.png`)" alt="" /></span>
                    <em><i>세포&amp;분자 생물학 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img24.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>10분 복습 time:<br/>교육행정&amp;교육심리</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img25.png`)" alt="" /></span>
                    <em><i>엄쌤 워드파워 활용<br/>꿀팁 대방출</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img26.png`)" alt="" /></span>
                    <em><i>미술 이론이 헷갈린다면?<br/>피아제vs로웬펠트</i></em>
                  </router-link>
                </li>
                <!-- <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img15.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>2021학년도 임용시험대비<br/>5~6월 신규 강좌</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img23.png`)" alt="" /></span>
                    <em><i>세포&amp;분자 생물학 하이라이트</i></em>
                  </router-link>
                </li> -->
              </ul>
            </div>
            <div class="tC"><router-link to="/mkup/exam/column" class="btnL line">임용칼럼 더보기</router-link></div>
          </div>
          <!-- //임용칼럼 -->
          <!-- 최신교재 -->
          <div v-if="currentTab == 6" class="tabData">
            <div class="allSame">
              <ul>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img20.png`)" alt="" /></span>
                    <em><i>유기화학 기본이론 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img22.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>과학교육론 기출해설 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img21.png`)" alt="" /></span>
                    <em><i>한국사 용어 의미의 중요성<br/>(사심관/유향소/경재소)</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img23.png`)" alt="" /></span>
                    <em><i>세포&amp;분자 생물학 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img15.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>2021학년도 임용시험대비<br/>5~6월 신규 강좌</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img25.png`)" alt="" /></span>
                    <em><i>엄쌤 워드파워 활용<br/>꿀팁 대방출</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img24.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>10분 복습 time:<br/>교육행정&amp;교육심리</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img27.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>한국사 슬쩍보기</i></em>
                  </router-link>
                </li>
                <!-- <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img26.png`)" alt="" /></span>
                    <em><i>미술 이론이 헷갈린다면?<br/>피아제vs로웬펠트</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img23.png`)" alt="" /></span>
                    <em><i>세포&amp;분자 생물학 하이라이트</i></em>
                  </router-link>
                </li> -->
              </ul>
            </div>
            <div class="tC"><router-link to="/mkup/ssammall/book" class="btnL line">최신교재 더보기</router-link></div>
          </div>
          <!-- //최신교재 -->
          <!-- 수강기기 -->
          <div v-if="currentTab == 7" class="tabData">
            <div class="allSame">
              <ul>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img23.png`)" alt="" /></span>
                    <em><i>세포&amp;분자 생물학 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img25.png`)" alt="" /></span>
                    <em><i>엄쌤 워드파워 활용<br/>꿀팁 대방출</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img20.png`)" alt="" /></span>
                    <em><i>유기화학 기본이론 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img23.png`)" alt="" /></span>
                    <em><i>세포&amp;분자 생물학 하이라이트</i></em>
                  </router-link>
                </li>
                <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img26.png`)" alt="" /></span>
                    <em><i>미술 이론이 헷갈린다면?<br/>피아제vs로웬펠트</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img24.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>10분 복습 time:<br/>교육행정&amp;교육심리</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img27.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>한국사 슬쩍보기</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img27.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>한국사 슬쩍보기</i></em>
                  </router-link>
                </li>
                <!-- <li class="imgCase">
                  <router-link to="">
                    <span><img :src="require(`@/assets/images/thumbnail/@tmp_main_img21.png`)" alt="" /></span>
                    <em><i>한국사 용어 의미의 중요성<br/>(사심관/유향소/경재소)</i></em>
                  </router-link>
                </li>
                <li class="playCase">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img22.png`)" alt="" /></span>
                  <router-link to="">
                    <em><i>과학교육론 기출해설 하이라이트</i></em>
                  </router-link>
                </li> -->
              </ul>
            </div>
            <div class="tC"><router-link to="/mkup/ssammall/device" class="btnL line">수강기기 더보기</router-link></div>
          </div>
          <!-- //수강기기 -->
        </div>
      </div>
    </div>
    <!-- /하이라이트 배너 Set -->

    <!-- 영상팝업 샘플  -->
    <VideoPopup videoId="VkfezYhAC_E" v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MainKindBanner.vue',
  components: {
  },
  data() {
    return {
      currentTab: 0,
      videoPopTrigger01: false,
    }
  },
	methods: {
	},
  computed: {
  },
  mounted() {
  }
}
</script>
