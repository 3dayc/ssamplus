<template lang="html">
  <div>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="lectureSsamList">
          <div class="subTit noLine">
            <h3>교육학</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>키워주기 위한 교육학<span></span></span>
                  <em>교육학</em>
                  <strong>김현</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjedu01.png`)" alt="" />
              </router-link>
              <router-link to="/mkup/special/event/view1" class="eventArea">
                <span>스페셜 대면첨삭 이벤트!</span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>EBS 교육학 논술 전문가의 적중 강의<span></span></span>
                  <em>교육학</em>
                  <strong>권구현</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjedu02.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>이해중심! 쉽게 설명하는 교육학!<span></span></span>
                  <em>교육학</em>
                  <strong>윤중샘</strong>
                </span>
                <i>신규입성</i>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjedu03.png`)" alt="" />
              </router-link>
              <router-link to="/mkup/special/event/view1" class="eventArea">
                <span>스페셜 대면첨삭 이벤트!</span>
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>유아</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>결과가 다른 시작, 기대한다면 합격예감<span></span></span>
                  <em>유아</em>
                  <strong>배지윤</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjchild01.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>핵심 콕! 이해 쏙!<span></span></span>
                  <em>유아</em>
                  <strong>이동건</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjchild02.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>20년 현장 경험과 완벽한 분석을 통한 실전 강의<span></span></span>
                  <em>유아</em>
                  <strong>양재웅</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjchild03.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <!-- 중등 -->
          <div class="subTit noLine">
            <h3>국어</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>박사와 교사가 만났다.<span></span></span>
                  <em>국어</em>
                  <strong>송헌/김준팀 </strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ko01.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>출제자의 눈으로 국어의 핵심을 찌르다!<span></span></span>
                  <em>국어</em>
                  <strong>송헌</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ko02.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>문법을 관통하는 시원하고 거침없는 질주<span></span></span>
                  <em>국어</em>
                  <strong>김준</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ko03.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공국어 神의 한수<span></span></span>
                  <em>국어</em>
                  <strong>박노송</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ko04.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>영어</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>누구도 따라올 수 없는 전공영어의 막강파워<span></span></span>
                  <em>영어</em>
                  <strong>차류쉘팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_En01.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공영어의 막강파워!<span></span></span>
                  <em>영어</em>
                  <strong>차미아</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_En02.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공영어의 막강파워!<span></span></span>
                  <em>영어</em>
                  <strong>류지원</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_En03.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공영어 New, Paradigm shift<span></span></span>
                  <em>영어</em>
                  <strong>미쉘김</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_En04.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>수학</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>수학과 합격의 연결고리!<span></span></span>
                  <em>수학</em>
                  <strong>이정훈/안후상팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Math01.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>함께 만드는 합격!임용 수학 러닝메이트<span></span></span>
                  <em>수학</em>
                  <strong>이정훈</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Math02.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>수교론의 정석! 완벽 이해!<span></span></span>
                  <em>수학</em>
                  <strong>안후상</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Math03.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>기본부터 고득점까지 모든 것을 충족시키는 수교론<span></span></span>
                  <em>수학</em>
                  <strong>김지혜</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Math04.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>음악</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>엘리트 음악교육, 서울대 서정팀!<span></span></span>
                  <em>음악</em>
                  <strong>서정팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Music01.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>기본적인 사항부터 핵심 적중 내용까지 체계적인 강의<span></span></span>
                  <em>음악</em>
                  <strong>서민정</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Music02.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>엘리트 음악교육, 서울대 서정팀!<span></span></span>
                  <em>음악</em>
                  <strong>정희원</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Music03.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>슬기로운 작곡가 서울대 박서형<span></span></span>
                  <em>음악</em>
                  <strong>박서형</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Music04.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>미술</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>팀티칭을 통한 미술임용 완벽분석<span></span></span>
                  <em>미술</em>
                  <strong>위상팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Art01.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>체육</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>MAP구조도를 통한 이해와 암기의 효율적 연결!<span></span></span>
                  <em>체육</em>
                  <strong>오정환</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Pys01.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>합격의 KEY! 체육 임용 마스터<span></span></span>
                  <em>체육</em>
                  <strong>김용호</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Pys02.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>합격으로 가는 스파르타 학습<span></span></span>
                  <em>체육</em>
                  <strong>임서윤</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Pys03.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>중국어</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>영역별 전문가의 고품격 명강의!<span></span></span>
                  <em>중국어</em>
                  <strong>희소 중국어팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Zh01.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>검증된 중국어 문법 강의로 정확한 중국어 도출<span></span></span>
                  <em>중국어</em>
                  <strong>한정은</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Zh02.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>풍부한 강의경력으로 이해하기 쉬운 학습법 제시<span></span></span>
                  <em>중국어</em>
                  <strong>이해진</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Zh03.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>일본어</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>일본어 정통의 내공, 완벽 이해의 수업<span></span></span>
                  <em>일본어</em>
                  <strong>동소현</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ja01.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>한문</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>합격을 여는 단 한가지 문, 유지사성(有志事成)<span></span></span>
                  <em>한문</em>
                  <strong>원주용</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_ZhWr01.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>가정</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>가정 임용의 절대강자!<span></span></span>
                  <em>가정</em>
                  <strong>문영은</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Home01.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>도덕윤리</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>유쾌,명쾌한 강의<span></span></span>
                  <em>도덕윤리</em>
                  <strong>김성무</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Mor01.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>미용</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>쉽고 재미있게, 핵심을 콕콕!!<span></span></span>
                  <em>미용</em>
                  <strong>이영미</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Beauty01.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <!-- 사회/과학 -->
          <div class="subTit noLine">
            <h3>역사</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>최강역사! 교사들의 스승!<span></span></span>
                  <em>역사</em>
                  <strong>이순권</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_History01.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>분석과 집중 知彼知己<span></span></span>
                  <em>역사</em>
                  <strong>반철진</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_History02.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>지리</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공지리 Only-One<span></span></span>
                  <em>지리</em>
                  <strong>한무일</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Geo01.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>물리</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>뼈대부터 다른 진짜 이론물리학자의 CLASS<span></span></span>
                  <em>물리</em>
                  <strong>최만영</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Phy01.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>화학</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>출제 예상 영역 완벽대비!!<span></span></span>
                  <em>화학</em>
                  <strong>안병천/권혁팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Chemi01.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>단순 암기를 탈피한 철저한 이해 위주의 해설식 강의!<span></span></span>
                  <em>화학</em>
                  <strong>안병천</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Chemi02.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>핵심을 짚어주는 강의, 출제 예상 영역 완벽 대비!<span></span></span>
                  <em>화학</em>
                  <strong>권혁</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Chemi03.png`)" alt="" />
              </router-link>
            </li>
          </ul>


          <div class="subTit noLine">
            <h3>생물</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>방대한 생물학의 이정표가 되어 줄 Biology Master<span></span></span>
                  <em>생물</em>
                  <strong>엄은미</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Bio01.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>과학교육론</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>전국유일! 과교론 전문강사<span></span></span>
                  <em>과학교육론</em>
                  <strong>김창만</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Sc01.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <!-- 비교과 -->
          <div class="subTit noLine">
            <h3>전문상담</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>현직 상담교사들이 가장 많이 추천하는 강의<span></span></span>
                  <em>전문상담</em>
                  <strong>이진영</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjnomj_Counsel01.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>보건</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>마이-맵으로 완성하는 최단기 보건합격!<span></span></span>
                  <em>보건</em>
                  <strong>임수진</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjnomj_Health01.png`)" alt="" />
              </router-link>
            </li>
          </ul>


          <!-- 특수 -->
          <div class="subTit noLine">
            <h3>유아특수</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span><span></span></span>
                  <em>초등특수</em>
                  <strong></strong>
                </span>
              </router-link>
            </li>
          </ul>
          <div class="subTit noLine">
            <h3>초등특수</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span><span></span></span>
                  <em>초등특수</em>
                  <strong></strong>
                </span>
              </router-link>
            </li>
          </ul>
          <div class="subTit noLine">
            <h3>중등특수</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>합격 PLAN을 경험하라<span></span></span>
                  <em>중등특수</em>
                  <strong>한경</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjspe_Middle01.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>철저한 분석, 체계적인 명품 특수 강의<span></span></span>
                  <em>중등특수</em>
                  <strong>박해인</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjspe_Middle02.png`)" alt="" />
              </router-link>
            </li>
          </ul>


          <!-- 논술·면접 -->
          <div class="subTit noLine">
            <h3>면접</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>EBS 교육학 논술 전문가의 적중 강의<span></span></span>
                  <em>면접</em>
                  <strong>양재웅</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjessay01.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>키워주기 위한 교육학<span></span></span>
                  <em>면접</em>
                  <strong>권구현</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjessay02.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>이해중심! 쉽게 설명하는 교육학!<span></span></span>
                  <em>면접</em>
                  <strong>윤중샘</strong>
                </span>

                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjessay03.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <!-- 한국사 -->
          <div class="subTit noLine">
            <h3>한국사</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span>합격 선(線)을 넘는<span>한국사</span></span>
                  <em>한국사</em>
                  <strong>정재학</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjhistory01.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <!-- 사서직(공무원) -->
          <div class="subTit noLine">
            <h3>사서직(공무원)</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span><span></span></span>
                  <em>사서직(공무원)</em>
                  <strong>신인수</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjLib01.png`)" alt="" />
              </router-link>
            </li>
          </ul>

        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'Index',
  components: {
  },
  data() {
    return {
      swiperOption01: {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: { nextEl: '.topArea .swiper-button-next', prevEl: '.topArea .swiper-button-prev' },
        //centeredSlides: true,
      },
    }
  },
  mounted() {
  },
}
</script>
