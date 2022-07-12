<template>
  <div id="mobileGnb">
    <div class="mobileGnbBack2">
      <div class="mobileGnbBack">
        <header>
          <h1><router-link to="/mkup/main" @click.native="mobilegnbClose($event)">쌤플러스</router-link></h1>
          <button class="btnGnbClose" @click="mobilegnbClose($event)">닫기</button>
        </header>
        <ul id="mGnb">
          <!-- 쌤팩 -->
          <li class="gnb1" :class="{on:gnb===1}">
            <strong @click="gnbToggle(1)">쌤팩</strong>
            <div class="mLnb">
              <ol>
                <li class="lnb01"><router-link to="/mkup/ssampack/index" @click.native="mobilegnbClose($event)">쌤팩소개</router-link></li>
                <!-- <li class="lnb02"><a href="">2022 쌤팩 베이직</a></li>
                <li class="lnb03"><a href="">쌤팩 프리미엄</a></li>
                <li class="lnb04"><a href="">쌤팩 프리미엄 플러스</a></li>
                <li class="lnb05"><router-link to href="/mkup/ssampack/index" @click.native="mobilegnbClose($event)">구매하기</router-link></li> -->
              </ol>
            </div>
          </li>
          <!-- //쌤팩 -->
          <!-- 수강신청 -->
          <li class="gnb2" :class="{on:gnb===2}">
            <strong @click="gnbToggle(2)">수강신청</strong>
            <div class="mLnb gnb2Back">
              <div class="gnb2Col1">
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjedu" @click.native="mobilegnbClose($event)">교육학</router-link></dt>
                  <dd>
                    <router-link to="/mkup/lecture/teachermjedu01" @click.native="mobilegnbClose($event)">김현</router-link>
                    <router-link to="/mkup/lecture/teachermjedu02" @click.native="mobilegnbClose($event)">권구현</router-link>
                    <router-link to="/mkup/lecture/teachermjedu03" @click.native="mobilegnbClose($event)">윤중샘</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjchild" @click.native="mobilegnbClose($event)">유아</router-link></dt>
                  <dd>
                    <router-link to="/mkup/lecture/teachermjchild01" @click.native="mobilegnbClose($event)">배지윤</router-link>
                    <router-link to="/mkup/lecture/teachermjchild02" @click.native="mobilegnbClose($event)">이동건</router-link>
                    <router-link to="/mkup/lecture/teachermjchild03" @click.native="mobilegnbClose($event)">양재웅</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjmiddle01" @click.native="mobilegnbClose($event)">국어</router-link></dt>
                  <dd>
                    <router-link to="/mkup/lecture/teachermjmiddle011" @click.native="mobilegnbClose($event)">송헌/김준팀</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle012" @click.native="mobilegnbClose($event)">송헌</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle013" @click.native="mobilegnbClose($event)">김준</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle014" @click.native="mobilegnbClose($event)">박노송</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjmiddle02" @click.native="mobilegnbClose($event)">영어</router-link></dt>
                  <dd>
                    <router-link to="/mkup/lecture/teachermjmiddle021" @click.native="mobilegnbClose($event)">차류쉘팀</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle022" @click.native="mobilegnbClose($event)">차미아</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle023" @click.native="mobilegnbClose($event)">류지원</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle024" @click.native="mobilegnbClose($event)">미쉘김</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjmiddle03" @click.native="mobilegnbClose($event)">수학</router-link></dt>
                  <dd>
                    <router-link to="/mkup/lecture/teachermjmiddle031" @click.native="mobilegnbClose($event)">이정훈/안후상팀</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle032" @click.native="mobilegnbClose($event)">이정훈</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle033" @click.native="mobilegnbClose($event)">안후상</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle034" @click.native="mobilegnbClose($event)" class="new">김지혜</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjmiddle04" @click.native="mobilegnbClose($event)">음악</router-link></dt>
                  <dd>
                    <router-link to="/mkup/lecture/teachermjmiddle041" @click.native="mobilegnbClose($event)">서정팀</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle042" @click.native="mobilegnbClose($event)">서민정</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle043" @click.native="mobilegnbClose($event)">정희원</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle044" @click.native="mobilegnbClose($event)">박서형</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjmiddle05" @click.native="mobilegnbClose($event)">미술</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjmiddle051" @click.native="mobilegnbClose($event)">위상팀</router-link></dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjmiddle06" @click.native="mobilegnbClose($event)">체육</router-link></dt>
                  <dd>
                    <router-link to="/mkup/lecture/teachermjmiddle061" @click.native="mobilegnbClose($event)">오정환</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle062" @click.native="mobilegnbClose($event)">김용호</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle063" @click.native="mobilegnbClose($event)">임서윤</router-link>
                  </dd>
                </dl>
              </div>
              <div class="gnb2Col2">
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjmiddle07" @click.native="mobilegnbClose($event)">중국어</router-link></dt>
                  <dd>
                    <router-link to="/mkup/lecture/teachermjmiddle071" @click.native="mobilegnbClose($event)">희소 중국어팀</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle072" @click.native="mobilegnbClose($event)">한정은</router-link>
                    <router-link to="/mkup/lecture/teachermjmiddle073" @click.native="mobilegnbClose($event)">이해진</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjmiddle08" @click.native="mobilegnbClose($event)">일본어</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjmiddle081" @click.native="mobilegnbClose($event)">동소현</router-link></dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjmiddle09" @click.native="mobilegnbClose($event)">한문</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjmiddle091" @click.native="mobilegnbClose($event)">원주용</router-link></dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjmiddle10" @click.native="mobilegnbClose($event)">가정</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjmiddle101" @click.native="mobilegnbClose($event)">문영은</router-link></dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjmiddle11" @click.native="mobilegnbClose($event)">도덕윤리</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjmiddle111" @click.native="mobilegnbClose($event)">김성무</router-link></dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjmiddle12" @click.native="mobilegnbClose($event)">미용</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjmiddle121" @click.native="mobilegnbClose($event)">이영미</router-link></dd>
                </dl>
              </div>
              <div class="gnb2Col3">
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjss01" @click.native="mobilegnbClose($event)">역사</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjss011" @click.native="mobilegnbClose($event)">이순권</router-link>
                    <router-link to="/mkup/lecture/teachermjss012" @click.native="mobilegnbClose($event)">반철진</router-link></dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjss02" @click.native="mobilegnbClose($event)">지리</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjss021" @click.native="mobilegnbClose($event)">한무일</router-link></dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjss03" @click.native="mobilegnbClose($event)">물리</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjss031" @click.native="mobilegnbClose($event)">최만영</router-link></dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjss04" @click.native="mobilegnbClose($event)">화학</router-link></dt>
                  <dd>
                    <router-link to="/mkup/lecture/teachermjss041" @click.native="mobilegnbClose($event)">안병천/권혁팀</router-link>
                    <router-link to="/mkup/lecture/teachermjss042" @click.native="mobilegnbClose($event)">안병천</router-link>
                    <router-link to="/mkup/lecture/teachermjss043" @click.native="mobilegnbClose($event)">권혁</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjss05" @click.native="mobilegnbClose($event)">생물</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjss051" @click.native="mobilegnbClose($event)">엄은미</router-link></dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjss06" @click.native="mobilegnbClose($event)">과학교육론</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjss061" @click.native="mobilegnbClose($event)">김창만</router-link></dd>
                </dl>
              </div>
              <div class="gnb2Col4">
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjnomj" @click.native="mobilegnbClose($event)">전문상담</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjnomj01" @click.native="mobilegnbClose($event)">이진영	</router-link></dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjnomj" @click.native="mobilegnbClose($event)">보건</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjnomj02" @click.native="mobilegnbClose($event)">임수진</router-link></dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjspe" @click.native="mobilegnbClose($event)">중등특수</router-link></dt>
                  <dd>
                    <router-link to="/mkup/lecture/teachermjspe01" @click.native="mobilegnbClose($event)">한경</router-link>
                    <router-link to="/mkup/lecture/teachermjspe02" @click.native="mobilegnbClose($event)">박해인</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjessay" @click.native="mobilegnbClose($event)">면접</router-link></dt>
                  <dd>
                    <router-link to="/mkup/lecture/teachermjessay01" @click.native="mobilegnbClose($event)">양재웅</router-link>
                    <router-link to="/mkup/lecture/teachermjessay02" @click.native="mobilegnbClose($event)">권구현</router-link>
                    <router-link to="/mkup/lecture/teachermjessay03" @click.native="mobilegnbClose($event)">윤중샘</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjhistory" @click.native="mobilegnbClose($event)">한국사</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermhistory01" @click.native="mobilegnbClose($event)">정재학</router-link></dd>
                </dl>
                <dl>
                  <dt><router-link to="/mkup/lecture/index/mjlibr" @click.native="mobilegnbClose($event)">사서직(공무원)</router-link></dt>
                  <dd><router-link to="/mkup/lecture/teachermjlibr01" class="new" @click.native="mobilegnbClose($event)">신인수</router-link></dd>
                </dl>
              </div>
            </div>
          </li>
          <!-- //수강신청 -->
          <!-- 쌤 Mall -->
          <li class="gnb3" :class="{on:gnb===3}">
            <strong @click="gnbToggle(3)">쌤 Mall</strong>
            <div class="mLnb">
              <ol>
                <li class="lnb01" :class="{on:lnb===301}"><router-link to="/mkup/ssammall/index" @click.native="mobilegnbClose($event)">쌤 Mall 홈</router-link></li>
                <li class="lnb02" :class="{on:lnb===302}"><router-link to="/mkup/ssammall/book" @click.native="mobilegnbClose($event)">교재도서</router-link></li>
                <li class="lnb03" :class="{on:lnb===303}"><router-link to="/mkup/ssammall/device" @click.native="mobilegnbClose($event)">학습기기</router-link></li>
                <li class="lnb05" :class="{on:lnb===304}"><router-link to="/mkup/ssammall/review/book" @click.native="mobilegnbClose($event)">백퍼후기</router-link></li>
              </ol>
            </div>
          </li>
          <!-- //쌤 Mall -->
          <!-- 선생님 스페셜 -->
          <li class="gnb4" :class="{on:gnb===4}">
            <strong @click="gnbToggle(4)">선생님 스페셜</strong>
            <div class="mLnb">
              <ol>
                <li class="lnb01" :class="{on:lnb===401}"><router-link to="/mkup/special/index" @click.native="mobilegnbClose($event)">선생님 스페셜 홈</router-link></li>
                <li class="lnb02" :class="{on:lnb===402}"><router-link to="/mkup/special/event" @click.native="mobilegnbClose($event)">선생님 이벤트</router-link></li>
                <li class="lnb03" :class="{on:lnb===403}"><router-link to="/mkup/special/hit" @click.native="mobilegnbClose($event)">리얼적중</router-link></li>
                <li class="lnb04" :class="{on:lnb===404}"><router-link to="/mkup/special/interview" @click.native="mobilegnbClose($event)">선생님 인터뷰</router-link></li>
                <li class="lnb05" :class="{on:lnb===405}"><router-link to="/mkup/special/review" @click.native="mobilegnbClose($event)">수강후기</router-link></li>
              </ol>
            </div>
          </li>
          <!-- //선생님 스페셜 -->
          <!-- 무료강의 -->
          <li class="gnb5" :class="{on:gnb===5}">
            <strong @click="gnbToggle(5)">무료강의</strong>
            <div class="mLnb">
              <ol>
                <li class="lnb01" :class="{on:lnb===501}"><router-link to="/mkup/openlec/index" @click.native="mobilegnbClose($event)">무료강의 홈</router-link></li>
                <li class="lnb02" :class="{on:lnb===502}"><router-link to="/mkup/openlec/highlight" @click.native="mobilegnbClose($event)">강의 하이라이트</router-link></li>
                <li class="lnb03" :class="{on:lnb===503}"><router-link to="/mkup/openlec/comment" @click.native="mobilegnbClose($event)">기출해설</router-link></li>
                <li class="lnb04" :class="{on:lnb===504}"><router-link to="/mkup/openlec/presentation" @click.native="mobilegnbClose($event)">설명회</router-link></li>
                <li class="lnb05" :class="{on:lnb===505}"><router-link to="/mkup/openlec/freelec" @click.native="mobilegnbClose($event)">무료특강</router-link></li>
              </ol>
            </div>
          </li>
          <!-- //무료강의 -->
          <!-- 시험정보 -->
          <li class="gnb6" :class="{on:gnb===6}">
            <strong @click="gnbToggle(6)">시험정보</strong>
            <div class="mLnb">
              <ol>
                <li class="lnb01" :class="{on:lnb===601}"><router-link to="/mkup/exam/info/guide" @click.native="mobilegnbClose($event)">시험정보</router-link></li>
                <li class="lnb02" :class="{on:lnb===602}"><router-link to="/mkup/exam/reference/previous" @click.native="mobilegnbClose($event)">임용 자료실</router-link></li>
                <li class="lnb03" :class="{on:lnb===603}"><router-link to="/mkup/exam/column" @click.native="mobilegnbClose($event)">임용 칼럼</router-link></li>
              </ol>
            </div>
          </li>
          <!-- //시험정보 -->
          <!-- 합격수기 -->
          <li class="gnb7" :class="{on:gnb===7}">
            <strong @click="gnbToggle(7)">합격수기</strong>
            <div class="mLnb">
              <ol>
                <li class="lnb01" :class="{on:lnb===701}"><router-link to="/mkup/pass/index" @click.native="mobilegnbClose($event)">합격수기 홈</router-link></li>
                <li class="lnb02" :class="{on:lnb===702}"><router-link to="/mkup/pass/interview" @click.native="mobilegnbClose($event)">선생님 합격수기/인터뷰</router-link></li>
              </ol>
            </div>
          </li>
          <!-- //합격수기 -->
          <!-- 인사이드희소 -->
          <li class="gnb8" :class="{on:gnb===8}">
            <router-link to="/mkup/inside/index" class="btnInside" @click.native="mobilegnbClose($event)">인사이드희소</router-link>
          </li>
          <!-- //인사이드희소 -->
          <!-- 희소고시학원 -->
          <li class="gnb9" :class="{on:gnb===9}">
            <router-link to="/mkup/academy/index" class="btnAcademy" @click.native="mobilegnbClose($event)">희소고시학원</router-link>
          </li>
          <!-- //희소고시학원 -->
        </ul>
        <div class="academyInfo">
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
        <div class="snsBox">
          <a href="https://www.facebook.com/KGeduoneheeso/" target="-_blank" class="btnFaceBook">페이스북</a>
          <a href="https://www.instagram.com/kgeduone_heeso/" target="-_blank" class="btnInsta">인스타그램</a>
          <a href="https://blog.naver.com/myheeso" target="-_blank" class="btnBlog">블로그</a>
          <a href="https://www.youtube.com/channel/UCrKs4hCEUOeFQV-O2NSE_Wg" target="-_blank" class="btnYoutube">유튜브</a>
        </div>
        <div class="util">
          <ul>
            <li><a href="http://www.kgeduone.com/" target="_blank">회사소개</a></li>
            <li><router-link to="/mkup/inside/index" @click.native="mobilegnbClose($event)">강사모집</router-link></li>
            <li><router-link to="/mkup/inside/index" @click.native="mobilegnbClose($event)">제휴문의</router-link></li>
          </ul>
        </div>
        <div class="siteInfo">
          <button class="btnFamilySite" @click="familyTrigger()" :class="{ on:familySiteTrigger }">패밀리 사이트</button>
          <button class="btnEduSite" @click="eduTrigger()" :class="{ on:eduSiteTrigger }">교육관련 사이트</button>
        </div>
        <div class="siteDim" v-if='familySiteTrigger'>
          <div class="siteBack">
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
        </div>
        <div class="siteDim" v-if='eduSiteTrigger'>
          <div class="siteBack eduCase">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  name: 'MobileGnb',
  data() {
    return {
      gnb:0,
      lnb:0,
      familySiteTrigger:false,
      eduSiteTrigger: false,
    }
  },
  computed: {
  },
  methods: {
    eduTrigger() {
      this.eduSiteTrigger = !this.eduSiteTrigger;
      this.familySiteTrigger = false;
    },
    familyTrigger() {
      this.familySiteTrigger = !this.familySiteTrigger;
      this.eduSiteTrigger = false;
    },
    gnbToggle(num) {
      if (this.gnb == num) {
        this.gnb = null;
      } else {
        this.gnb = num;
      }
    },
    gnbChange(url) {
      this.gnb = 0;
      this.lnb = 0;
      if (url.includes('/ssampack')) {
        this.gnb = 1;
      } else if(url.includes('/lecture')) {
        this.gnb = 2;
      }
      else if(url.includes('/ssammall')) {
        this.gnb = 3;
        if (url.includes('/mkup/ssammall/index')) this.lnb = 301;
        else if(url.includes('/mkup/ssammall/book')) this.lnb = 302;
        else if(url.includes('/mkup/ssammall/device')) this.lnb = 303;
        else if(url.includes('/mkup/ssammall/goods')) this.lnb = 304;
        else if(url.includes('/mkup/ssammall/review')) this.lnb = 305;
      }
      else if(url.includes('/special')) {
        this.gnb = 4;
        if(url.includes('/mkup/special/index')) this.lnb = 401;
        else if(url.includes('/mkup/special/event')) this.lnb = 402;
        else if(url.includes('/mkup/special/hit')) this.lnb = 403;
        else if(url.includes('/mkup/special/interview')) this.lnb = 404;
        else if(url.includes('/mkup/special/review')) this.lnb = 405;
      }
      else if(url.includes('/openlec')) {
        this.gnb = 5;
        if(url.includes('/mkup/openlec/index')) this.lnb = 501;
        else if(url.includes('/mkup/openlec/highlight')) this.lnb = 502;
        else if(url.includes('/mkup/openlec/comment')) this.lnb = 503;
        else if(url.includes('/mkup/openlec/presentation')) this.lnb = 504;
        else if(url.includes('/mkup/openlec/freelec')) this.lnb = 505;
      }
      else if(url.includes('/exam')) {
        this.gnb = 6;
        if(url.includes('/mkup/exam/info')) this.lnb = 601;
        else if(url.includes('/mkup/exam/reference')) this.lnb = 602;
        else if(url.includes('/mkup/exam/column')) this.lnb = 603;
      }
      else if(url.includes('/pass')) {
        this.gnb = 7;
        if(url.includes('/mkup/pass/index')) this.lnb = 701;
        else if(url.includes('/mkup/pass/interview')) this.lnb = 702;
      }
      else if(url.includes('/mkup/inside/index')) {
        this.gnb = 8;
      }
      else if(url.includes('/mkup/academy/index')) {
        this.gnb = 9;
      }
    },
    mobilegnbClose(event) {
      if (event) {
        let sitebody = document.body;
        let mobileGnbArea = document.getElementById("mobileGnb");
        sitebody.classList.remove("scrollHiden");
        mobileGnbArea.classList.remove("on");
      }
    }
  },
  watch: {
    $route(to, from) {
      this.gnbChange(to.path);
    }
  },
  mounted() {
    this.gnbChange(window.location.pathname);
  }
};
</script>
