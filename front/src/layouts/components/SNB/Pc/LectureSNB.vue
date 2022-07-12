<template>  
  <div id="pcSnb">    
    <!-- 수강신청 -->
    <div class="snb04 on">
      <strong class="pcMtit">수강신청</strong>
      <ul class="classKind">
        <li class="depth1" :class="{on:lecMenuTrigger == 1}">
          <router-link to="/lecture/index/mjedu">교육학</router-link>
          <ol>
            <li><router-link to="/lecture/teachermjedu01">김현</router-link></li>
            <li><router-link to="/lecture/teachermjedu02">권구현</router-link></li>
            <li><router-link to="/lecture/teachermjedu03">윤중샘</router-link></li>
          </ol>
        </li>
        <li class="depth1" :class="{on:lecMenuTrigger == 2}">
          <router-link to="/lecture/index/mjchild">유아</router-link>
          <ol>
            <li><router-link to="/lecture/teachermjchild01">배지윤</router-link></li>
            <li><router-link to="/lecture/teachermjchild02">이동건</router-link></li>
            <li><router-link to="/lecture/teachermjchild03">양재웅</router-link></li>
          </ol>
        </li>
        <li class="depth2" :class="{on:lecMenuTrigger == 3}">
          <router-link to="/lecture/index/mjmiddle">중등</router-link>
          <ul>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 301}">
              <router-link to="/lecture/index/mjmiddle01">국어</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjmiddle011">송헌/김준팀</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle012">송헌</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle013">김준</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle014">박노송</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 302}">
              <router-link to="/lecture/index/mjmiddle02">영어</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjmiddle021">차류쉘팀</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle022">차미아</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle023">류지원</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle024">미쉘김</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 303}">
              <router-link to="/lecture/index/mjmiddle03">수학</router-link>
              <ol>
                <li class="long"><router-link to="/lecture/teachermjmiddle031">이정훈/안후상팀</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle032">이정훈</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle033">안후상</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle034">김지혜</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 304}">
              <router-link to="/lecture/index/mjmiddle04">음악</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjmiddle041">서정팀</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle042">서민정</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle043">정희원</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle044">박서형</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 305}">
              <router-link to="/lecture/index/mjmiddle05">미술</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjmiddle051">위상팀</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 306}">
              <router-link to="/lecture/index/mjmiddle06">체육</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjmiddle061">오정환</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle062">김용호</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle063">임서윤</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 307}">
              <router-link to="/lecture/index/mjmiddle07">중국어</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjmiddle071">희소중국어팀</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle072">한정은</router-link></li>
                <li><router-link to="/lecture/teachermjmiddle073">이해진</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 308}">
              <router-link to="/lecture/index/mjmiddle08">일본어</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjmiddle081">동소현</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 309}">
              <router-link to="/lecture/index/mjmiddle09">한문</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjmiddle091">원주용</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 310}">
              <router-link to="/lecture/index/mjmiddle10">가정</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjmiddle101">문영은</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 311}">
              <router-link to="/lecture/index/mjmiddle11">도덕윤리</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjmiddle111">김성무</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 312}">
              <router-link to="/lecture/index/mjmiddle12">미용</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjmiddle121">이영미</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth2" :class="{on:lecMenuTrigger == 4}">
          <router-link to="/lecture/index/mjss">사회/과학</router-link>
          <ul>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 401}">
              <router-link to="/lecture/index/mjss01">역사</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjss011">이순권</router-link></li>
                <li><router-link to="/lecture/teachermjss012">반철진</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 402}">
              <router-link to="/lecture/index/mjss02">지리</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjss021">한무일</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 403}">
              <router-link to="/lecture/index/mjss03">물리</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjss031">최민영</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 404}">
              <router-link to="/lecture/index/mjss04">화학</router-link>
              <ol>
                <li class="long"><router-link to="/lecture/teachermjss041">안병천/권혁팀</router-link></li>
                <li><router-link to="/lecture/teachermjss042">안병천</router-link></li>
                <li><router-link to="/lecture/teachermjss043">권혁</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 405}">
              <router-link to="/lecture/index/mjss05">생물</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjss051">엄은미</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 406}">
              <router-link to="/lecture/index/mjss06">과학교육론</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjss061">이진영</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth2" :class="{on:lecMenuTrigger == 5}">
          <router-link to="/lecture/index/mjnomj">비교과</router-link>
          <ul>
            <li class="depth3" :class="{on:lecMenuTrigger == 5}">
              <router-link to="/lecture/index/mjnomj">전문상담</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjnomj02">이진영</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecMenuTrigger == 5}">
              <router-link to="/lecture/index/mjnomj">보건</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjnomj01">임수진</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth2" :class="{on:lecMenuTrigger == 6}">
          <router-link to="/lecture/index/mjspe">특수</router-link>
          <ul>
            <li class="depth3">
              <em>유아특수</em>
            </li>
            <li class="depth3">
              <em>초등특수</em>
            </li>
            <li class="depth3" :class="{on:lecMenuTrigger == 6}">
              <router-link to="/lecture/index/mjspe">중등특수</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjspe01">한경</router-link></li>
                <li><router-link to="/lecture/teachermjspe02">박해인</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth2" :class="{on:lecMenuTrigger == 7}">
          <router-link to="/lecture/index/mjessay">논술 · 면접</router-link>
          <ul>
            <li class="depth3" :class="{on:lecMenuTrigger == 7}">
              <router-link to="/lecture/index/mjessay">면접</router-link>
              <ol>
                <li><router-link to="/lecture/teachermjessay01">양재웅</router-link></li>
                <li><router-link to="/lecture/teachermjessay02">권구현</router-link></li>
                <li><router-link to="/lecture/teachermjessay03">윤중샘</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth1" :class="{on:lecMenuTrigger == 8}">
          <router-link to="/lecture/index/mjhistory">한국사</router-link>
          <ol>
            <li><router-link to="/lecture/teachermhistory01">정재학</router-link></li>
          </ol>
        </li>
        <li class="depth1" :class="{on:lecMenuTrigger == 9}">
          <router-link to="/lecture/index/mjlibr">사서직(공무원)</router-link>
          <ol>
            <li><router-link to="/lecture/teachermjlibr01">신인수</router-link></li>
          </ol>
        </li>
      </ul>
    </div>
  </div>
  <!-- //수강신청 -->    
</template>

<script>
export default {
  name: 'LectureSNB',
  data() {
    return {      
      lecMenuTrigger:0,      
      lecSubMenuTrigger:0,
      mobileSnb2:0,
      ssamChoiceTrigger:''
    }
  },
  computed: {
  },      
  created() {    
  }
};
</script>
