<template>
  <div id="pcHeader" :class="mainCaseClass">
    <header>
      <div class="pcGnb">
        <div class="frameBack">
          <strong><h1><router-link to="/mkup/main">쌤플러스</router-link></h1></strong>
          <ul id="pcGnbMenu">
            <li class="gnb1" :class="{on:gnb===1}"><router-link to="/mkup/ssampack/index">쌤팩<em>2022 쌤팩 판매중</em></router-link>
              <div class="gnbBack">
                <div class="frameBack">
                  <ol>
                    <li><router-link to="/mkup/ssampack/index">쌤팩소개</router-link></li>
                    <!-- <li><router-link to="/mkup/ssampack/index">2023 쌤팩 베이직</router-link></li>
                    <li><router-link to="/mkup/ssampack/index">쌤팩 프리미엄</router-link></li>
                    <li><router-link to="/mkup/ssampack/index">쌤팩 프리미엄 플러스</router-link></li>
                    <li><router-link to="/mkup/ssampack/index">구매하기</router-link></li> -->
                  </ol>
                </div>
              </div>
            </li>
            <li class="gnb2" :class="{on:gnb===2}"><router-link to="/mkup/lecture/index">수강신청</router-link>
              <div class="gnb2Back">
                <div class="frameBack">
                  <div class="gnb2Col1">
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjedu">교육학</router-link></dt>
                      <dd>
                        <router-link to="/mkup/lecture/teachermjedu01" :class="{on:lnb02Trigger===101}">김현</router-link>
                        <router-link to="/mkup/lecture/teachermjedu02" :class="{on:lnb02Trigger===102}">권구현</router-link>
                        <router-link to="/mkup/lecture/teachermjedu03" :class="{on:lnb02Trigger===103}">윤중샘</router-link>
                      </dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjchild">유아</router-link></dt>
                      <dd>
                        <router-link to="/mkup/lecture/teachermjchild01" :class="{on:lnb02Trigger===201}">배지윤</router-link>
                        <router-link to="/mkup/lecture/teachermjchild02" :class="{on:lnb02Trigger===202}">이동건</router-link>
                        <router-link to="/mkup/lecture/teachermjchild03" :class="{on:lnb02Trigger===203}">양재웅</router-link>
                      </dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjmiddle01">국어</router-link></dt>
                      <dd>
                        <router-link to="/mkup/lecture/teachermjmiddle011" :class="{on:lnb02Trigger===301}">송헌/김준팀</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle012" :class="{on:lnb02Trigger===302}">송헌</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle013" :class="{on:lnb02Trigger===303}">김준</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle014" :class="{on:lnb02Trigger===304}">박노송</router-link>
                      </dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjmiddle02">영어</router-link></dt>
                      <dd>
                        <router-link to="/mkup/lecture/teachermjmiddle021" :class="{on:lnb02Trigger===305}">차류쉘팀</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle022" :class="{on:lnb02Trigger===306}">차미아</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle023" :class="{on:lnb02Trigger===307}">류지원</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle024" :class="{on:lnb02Trigger===308}">미쉘김</router-link>
                      </dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjmiddle03">수학</router-link></dt>
                      <dd>
                        <router-link to="/mkup/lecture/teachermjmiddle031" :class="{on:lnb02Trigger===309}">이정훈/안후상팀</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle032" :class="{on:lnb02Trigger===310}">이정훈</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle033" :class="{on:lnb02Trigger===311}">안후상</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle034" class="new" :class="{on:lnb02Trigger===312}">김지혜</router-link>
                      </dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjmiddle04">음악</router-link></dt>
                      <dd>
                        <router-link to="/mkup/lecture/teachermjmiddle041" :class="{on:lnb02Trigger===313}">서정팀</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle042" :class="{on:lnb02Trigger===314}">서민정</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle043" :class="{on:lnb02Trigger===315}">정희원</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle044" :class="{on:lnb02Trigger===316}">박서형</router-link>
                      </dd>
                    </dl>
                  </div>
                  <div class="gnb2Col2">
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjmiddle05">미술</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermjmiddle051" :class="{on:lnb02Trigger===317}">위상팀</router-link></dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjmiddle06">체육</router-link></dt>
                      <dd>
                        <router-link to="/mkup/lecture/teachermjmiddle061" :class="{on:lnb02Trigger===318}">오정환</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle062" :class="{on:lnb02Trigger===319}">김용호</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle063" :class="{on:lnb02Trigger===320}">임서윤</router-link>
                      </dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjmiddle07">중국어</router-link></dt>
                      <dd>
                        <router-link to="/mkup/lecture/teachermjmiddle071" :class="{on:lnb02Trigger===321}">희소 중국어팀</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle072" :class="{on:lnb02Trigger===322}">한정은</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle073" :class="{on:lnb02Trigger===323}">이해진</router-link>
                      </dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjmiddle08">일본어</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermjmiddle081" :class="{on:lnb02Trigger===324}">동소현</router-link></dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjmiddle09">한문</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermjmiddle091" :class="{on:lnb02Trigger===325}">원주용</router-link></dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjmiddle10">가정</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermjmiddle101" :class="{on:lnb02Trigger===326}">문영은</router-link></dd>
                    </dl>
                  </div>
                  <div class="gnb2Col3">
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjmiddle11">도덕윤리</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermjmiddle111" :class="{on:lnb02Trigger===327}">김성무</router-link></dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjmiddle12">미용</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermjmiddle121" :class="{on:lnb02Trigger===328}">이영미</router-link></dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjss01">역사</router-link></dt>
                      <dd>
                        <router-link to="/mkup/lecture/teachermjss011" :class="{on:lnb02Trigger===401}">이순권</router-link>
                        <router-link to="/mkup/lecture/teachermjss012" :class="{on:lnb02Trigger===402}">반철진</router-link>
                      </dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjss02">지리</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermjss021" :class="{on:lnb02Trigger===403}">한무일</router-link></dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjss03">물리</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermjss031" :class="{on:lnb02Trigger===404}">최만영</router-link></dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjss04">화학</router-link></dt>
                      <dd>
                        <router-link to="/mkup/lecture/teachermjss041" :class="{on:lnb02Trigger===405}">안병천/권혁팀</router-link>
                        <router-link to="/mkup/lecture/teachermjss042" :class="{on:lnb02Trigger===406}">안병천</router-link>
                        <router-link to="/mkup/lecture/teachermjss043" :class="{on:lnb02Trigger===407}">권혁</router-link>
                      </dd>
                    </dl>
                  </div>
                  <div class="gnb2Col4">
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjss05">생물</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermjss051" :class="{on:lnb02Trigger===408}">엄은미</router-link></dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjss06">과학교육론</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermjss061" :class="{on:lnb02Trigger===409}">김창만</router-link></dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjnomj">전문상담</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermjnomj01" :class="{on:lnb02Trigger===501}">이진영</router-link></dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjnomj">보건</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermjnomj02" :class="{on:lnb02Trigger===502}">임수진</router-link></dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjspe">중등특수</router-link></dt>
                      <dd>
                        <router-link to="/mkup/lecture/teachermjspe01" :class="{on:lnb02Trigger===601}">한경</router-link>
                        <router-link to="/mkup/lecture/teachermjspe02" :class="{on:lnb02Trigger===602}">박해인</router-link>
                      </dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjessay">면접</router-link></dt>
                      <dd>
                        <router-link to="/mkup/lecture/teachermjessay01" :class="{on:lnb02Trigger===701}">양재웅</router-link>
                        <router-link to="/mkup/lecture/teachermjessay02" :class="{on:lnb02Trigger===702}">권구현</router-link>
                        <router-link to="/mkup/lecture/teachermjessay03" :class="{on:lnb02Trigger===703}">윤중샘</router-link>
                      </dd>
                    </dl>
                  </div>
                  <div class="gnb2Col5">
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjhistory">한국사</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermhistory01" :class="{on:lnb02Trigger===801}">정재학</router-link></dd>
                    </dl>
                    <dl>
                      <dt><router-link to="/mkup/lecture/index/mjlibr">사서직(공무원)</router-link></dt>
                      <dd><router-link to="/mkup/lecture/teachermjlibr01" class="new" :class="{on:lnb02Trigger===901}">신인수</router-link></dd>
                    </dl>
                  </div>
                </div>
              </div>
            </li>
            <li class="gnb3" :class="{on:gnb===3}"><router-link to="/mkup/ssammall/index">쌤 Mall</router-link>
              <div class="gnbBack">
                <div class="frameBack">
                  <ol>
                    <li class="lnb01" :class="{on:lnb031}"><router-link to="/mkup/ssammall/index">쌤 Mall 홈</router-link></li>
                    <li class="lnb02" :class="{on:lnb032}"><router-link to="/mkup/ssammall/book">교재도서</router-link></li>
                    <li class="lnb03" :class="{on:lnb033}"><router-link to="/mkup/ssammall/device">학습기기</router-link></li>
                    <li class="lnb04" :class="{on:lnb034}"><router-link to="/mkup/ssammall/goods/fabric">굿즈</router-link></li>
                    <li class="lnb05" :class="{on:lnb035}"><router-link to="/mkup/ssammall/review/book">백퍼후기</router-link></li>
                  </ol>
                </div>
              </div>
            </li>
            <li class="gnb4" :class="{on:gnb===4}"><router-link to="/mkup/special/index">선생님 스페셜</router-link>
              <div class="gnbBack">
                <div class="frameBack">
                  <ol>
                    <li class="lnb01" :class="{on:lnb041}"><router-link to="/mkup/special/index">선생님 스페셜 홈</router-link></li>
                    <li class="lnb02" :class="{on:lnb042}"><router-link to="/mkup/special/event">선생님 이벤트</router-link></li>
                    <li class="lnb03" :class="{on:lnb043}"><router-link to="/mkup/special/hit">리얼적중</router-link></li>
                    <li class="lnb04" :class="{on:lnb044}"><router-link to="/mkup/special/interview">선생님 인터뷰</router-link></li>
                    <li class="lnb05" :class="{on:lnb045}"><router-link to="/mkup/special/review">수강후기</router-link></li>
                  </ol>
                </div>
              </div>
            </li>
            <li class="gnb5" :class="{on:gnb===5}"><router-link to="/mkup/openlec/index">무료강의</router-link>
              <div class="gnbBack">
                <div class="frameBack">
                  <ol>
                    <li class="lnb01" :class="{on:lnb051}"><router-link to="/mkup/openlec/index">무료강의 홈</router-link></li>
                    <li class="lnb02" :class="{on:lnb052}"><router-link to="/mkup/openlec/highlight">강의 하이라이트</router-link></li>
                    <li class="lnb03" :class="{on:lnb053}"><router-link to="/mkup/openlec/comment">기출해설</router-link></li>
                    <li class="lnb04" :class="{on:lnb054}"><router-link to="/mkup/openlec/presentation">설명회</router-link></li>
                    <li class="lnb05" :class="{on:lnb055}"><router-link to="/mkup/openlec/freelec">무료특강</router-link></li>
                  </ol>
                </div>
              </div>
            </li>
            <li class="gnb6" :class="{on:gnb===6}"><router-link to="/mkup/exam/info/guide">시험정보</router-link>
              <div class="gnbBack">
                <div class="frameBack">
                  <ol>
                    <li class="lnb01" :class="{on:lnb061}"><router-link to="/mkup/exam/info/guide">시험정보</router-link></li>
                    <li class="lnb02" :class="{on:lnb062}"><router-link to="/mkup/exam/reference/previous">임용 자료실</router-link></li>
                    <li class="lnb03" :class="{on:lnb063}"><router-link to="/mkup/exam/column">임용 칼럼</router-link></li>
                  </ol>
                </div>
              </div>
            </li>
            <li class="gnb7" :class="{on:gnb===7}"><router-link to="/mkup/pass/index">합격수기</router-link>
              <div class="gnbBack">
                <div class="frameBack">
                  <ol>
                    <li class="lnb01" :class="{on:lnb071}"><router-link to="/mkup/pass/index">합격수기 홈</router-link></li>
                    <li class="lnb02" :class="{on:lnb072}"><router-link to="/mkup/pass/interview">선생님 합격수기/인터뷰</router-link></li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
          <span class="right">
            <router-link to="/mkup/inside/index" class="btnInside" :class="{on:gnb===8}">인사이드희소</router-link>
            <router-link to="/mkup/academy/index" class="btnAcademy" :class="{on:gnb===9}">희소고시학원</router-link>
          </span>
        </div>
      </div>
      <!-- 쌤팩 -->
      <div class="pcLnb" :class="{on:lnb01}" v-if="lnb01">
        <div class="frameBack">
          <ol>
            <li><router-link to="/mkup/ssampack/index">쌤팩소개</router-link></li>
            <!-- <li><router-link to="/mkup/ssampack/index">2023 쌤팩 베이직</router-link></li>
            <li><router-link to="/mkup/ssampack/index">쌤팩 프리미엄</router-link></li>
            <li><router-link to="/mkup/ssampack/index">쌤팩 프리미엄 플러스</router-link></li>
            <li><router-link to="/mkup/ssampack/index">구매하기</router-link></li> -->
          </ol>
        </div>
      </div>
      <!-- //쌤팩 -->
      <!-- 수강신청 : 별도로 GNB 안에 진행 -->
      <!-- 쌤 Mall -->
      <div class="pcLnb" :class="{on:lnb03}" v-if="lnb03">
        <div class="frameBack">
          <ol>
            <li class="lnb01" :class="{on:lnb031}"><router-link to="/mkup/ssammall/index">쌤 Mall 홈</router-link></li>
            <li class="lnb02" :class="{on:lnb032}"><router-link to="/mkup/ssammall/book">교재도서</router-link></li>
            <li class="lnb03" :class="{on:lnb033}"><router-link to="/mkup/ssammall/device">학습기기</router-link></li>
            <li class="lnb04" :class="{on:lnb034}"><router-link to="/mkup/ssammall/goods/fabric">굿즈</router-link></li>
            <li class="lnb05" :class="{on:lnb035}"><router-link to="/mkup/ssammall/review/book">백퍼후기</router-link></li>
          </ol>
        </div>
      </div>
      <!-- //쌤 Mall -->
      <!-- 선생님 스페셜 -->
      <div class="pcLnb" :class="{on:lnb04}" v-if="lnb04">
        <div class="frameBack">
          <ol>
            <li class="lnb01" :class="{on:lnb041}"><router-link to="/mkup/special/index">선생님 스페셜 홈</router-link></li>
            <li class="lnb02" :class="{on:lnb042}"><router-link to="/mkup/special/event">선생님 이벤트</router-link></li>
            <li class="lnb03" :class="{on:lnb043}"><router-link to="/mkup/special/hit">리얼적중</router-link></li>
            <li class="lnb04" :class="{on:lnb044}"><router-link to="/mkup/special/interview">선생님 인터뷰</router-link></li>
            <li class="lnb05" :class="{on:lnb045}"><router-link to="/mkup/special/review">수강후기</router-link></li>
          </ol>
        </div>
      </div>
      <!-- //선생님 스페셜 -->
      <!-- 무료강의 -->
      <div class="pcLnb" :class="{on:lnb05}" v-if="lnb05">
        <div class="frameBack">
          <ol>
            <li class="lnb01" :class="{on:lnb051}"><router-link to="/mkup/openlec/index">무료강의 홈</router-link></li>
            <li class="lnb02" :class="{on:lnb052}"><router-link to="/mkup/openlec/highlight">강의 하이라이트</router-link></li>
            <li class="lnb03" :class="{on:lnb053}"><router-link to="/mkup/openlec/comment">기출해설</router-link></li>
            <li class="lnb04" :class="{on:lnb054}"><router-link to="/mkup/openlec/presentation">설명회</router-link></li>
            <li class="lnb05" :class="{on:lnb055}"><router-link to="/mkup/openlec/freelec">무료특강</router-link></li>
          </ol>
        </div>
      </div>
      <!-- //무료강의 -->
      <!-- 시험정보 -->
      <div class="pcLnb" :class="{on:lnb06}" v-if="lnb06">
        <div class="frameBack">
          <ol>
            <li class="lnb01" :class="{on:lnb061}"><router-link to="/mkup/exam/info/guide">시험정보</router-link></li>
            <li class="lnb02" :class="{on:lnb062}"><router-link to="/mkup/exam/reference/previous">임용 자료실</router-link></li>
            <li class="lnb03" :class="{on:lnb063}"><router-link to="/mkup/exam/column">임용 칼럼</router-link></li>
          </ol>
        </div>
      </div>
      <!-- //시험정보 -->
      <!-- 합격수기 -->
      <div class="pcLnb" :class="{on:lnb07}" v-if="lnb07">
        <div class="frameBack">
          <ol>
            <li class="lnb01" :class="{on:lnb071}"><router-link to="/mkup/pass/index">합격수기 홈</router-link></li>
            <li class="lnb02" :class="{on:lnb072}"><router-link to="/mkup/pass/interview">선생님 합격수기/인터뷰</router-link></li>
          </ol>
        </div>
      </div>
      <!-- //합격수기 -->
      <!-- 인사이드희소 -->
      <!-- <div class="pcLnb" :class="{on:lnb08}">
        <div class="frameBack">
          <ol>
            <li class="lnb01"><router-link to="">희소/쌤플러스 소개</router-link></li>
            <li class="lnb02"><router-link to="">히스토리</router-link></li>
            <li class="lnb03"><router-link to="">장학제도</router-link></li>
            <li class="lnb04"><router-link to="">대학제휴</router-link></li>
            <li class="lnb05"><router-link to="">강사모집</router-link></li>
          </ol>
        </div>
      </div> -->
      <!-- //인사이드희소 -->
      <!-- 희소고시학원 -->
      <!-- <div class="pcLnb" :class="{on:lnb09}">
        <div class="frameBack">
          <ol>
            <li class="lnb01"><router-link to="">강의실 배정표</router-link></li>
            <li class="lnb02"><router-link to="">학원 보충강의</router-link></li>
            <li class="lnb03"><router-link to="">사물함 신청</router-link></li>
            <li class="lnb04"><router-link to="">스터디 하실래요</router-link></li>
            <li class="lnb05"><router-link to="">학원 시설</router-link></li>
            <li class="lnb06"><router-link to="">1:1 상담하기</router-link></li>
            <li class="lnb07"><router-link to="">학원 위치</router-link></li>
          </ol>
        </div>
      </div> -->
      <!-- //희소고시학원 -->
    </header>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PcHeader',
  data() {
    return {
      lnb01: false,
      lnb02: false,
      lnb03: false,
      lnb04: false,
      lnb05: false,
      lnb06: false,
      lnb07: false,
      //lnb08: false,
      //lnb09: false,
      gnb:0,
      lnb02Trigger: null,
      lnb031: false,
      lnb032: false,
      lnb033: false,
      lnb034: false,
      lnb035: false,
      lnb041: false,
      lnb042: false,
      lnb043: false,
      lnb044: false,
      lnb045: false,
      lnb051: false,
      lnb052: false,
      lnb053: false,
      lnb054: false,
      lnb055: false,
      lnb061: false,
      lnb062: false,
      lnb063: false,
      lnb071: false,
      lnb072: false,
      mianCheck :null,
      mainCaseClass:''
    }
  },
  computed: {
  },
  methods: {
    lnbChange(url) {
      this.lnb01 = false;
      this.lnb02 = false;
      this.lnb03 = false;
      this.lnb04 = false;
      this.lnb05 = false;
      this.lnb06 = false;
      this.lnb07 = false;
      if (url.includes('/mkup/ssampack')) this.lnb01 = true;
      else if(url.includes('/mkup/lecture')) this.lnb02 = true;
      else if(url.includes('/mkup/ssammall')) this.lnb03 = true;
      else if(url.includes('/mkup/special')) this.lnb04 = true;
      else if(url.includes('/mkup/openlec')) this.lnb05 = true;
      else if(url.includes('/mkup/exam')) this.lnb06 = true;
      else if(url.includes('/mkup/pass')) this.lnb07 = true;
    },
    gnbChange(url) {
      this.gnb = 0;
      if (url.includes('/ssampack')) this.gnb = 1;
      else if(url.includes('/lecture')) this.gnb = 2;
      else if(url.includes('/ssammall')) this.gnb = 3;
      else if(url.includes('/special')) this.gnb = 4;
      else if(url.includes('/openlec')) this.gnb = 5;
      else if(url.includes('/exam')) this.gnb = 6;
      else if(url.includes('/pass')) this.gnb = 7;
      else if(url.includes('/inside')) this.gnb = 8;
      else if(url.includes('/academy')) this.gnb = 9;
    },
    lnbSubChange(url) {
      this.lnb031 = false;
      this.lnb032 = false;
      this.lnb033 = false;
      this.lnb034 = false;
      this.lnb035 = false;
      this.lnb041 = false;
      this.lnb042 = false;
      this.lnb043 = false;
      this.lnb044 = false;
      this.lnb045 = false;
      this.lnb051 = false;
      this.lnb052 = false;
      this.lnb053 = false;
      this.lnb054 = false;
      this.lnb055 = false;
      this.lnb061 = false;
      this.lnb062 = false;
      this.lnb063 = false;
      this.lnb071 = false;
      this.lnb072 = false;
      if (url.includes('/mkup/ssammall/index')) this.lnb031 = true;
      else if(url.includes('/mkup/ssammall/book')) this.lnb032 = true;
      else if(url.includes('/mkup/ssammall/device')) this.lnb033 = true;
      else if(url.includes('/mkup/ssammall/goods')) this.lnb034 = true;
      else if(url.includes('/mkup/ssammall/review')) this.lnb035 = true;
      else if(url.includes('/mkup/special/index')) this.lnb041 = true;
      else if(url.includes('/mkup/special/event')) this.lnb042 = true;
      else if(url.includes('/mkup/special/hit')) this.lnb043 = true;
      else if(url.includes('/mkup/special/interview')) this.lnb044 = true;
      else if(url.includes('/mkup/special/review')) this.lnb045 = true;
      else if(url.includes('/mkup/openlec/index')) this.lnb051 = true;
      else if(url.includes('/mkup/openlec/highlight')) this.lnb052 = true;
      else if(url.includes('/mkup/openlec/comment')) this.lnb053 = true;
      else if(url.includes('/mkup/openlec/presentation')) this.lnb054 = true;
      else if(url.includes('/mkup/openlec/freelec')) this.lnb055 = true;
      else if(url.includes('/mkup/exam/info')) this.lnb061 = true;
      else if(url.includes('/mkup/exam/reference')) this.lnb062 = true;
      else if(url.includes('/mkup/exam/column')) this.lnb063 = true;
      else if(url.includes('/mkup/pass/index')) this.lnb071 = true;
      else if(url.includes('/mkup/pass/interview')) this.lnb072 = true;

      this.lnb02Trigger = null;
      if (url.includes('/mkup/lecture/teachermjedu01')) this.lnb02Trigger = 101;
      else if (url.includes('/mkup/lecture/teachermjedu02')) this.lnb02Trigger = 102;
      else if (url.includes('/mkup/lecture/teachermjedu03')) this.lnb02Trigger = 103;
      else if (url.includes('/mkup/lecture/teachermjchild01')) this.lnb02Trigger = 201;
      else if (url.includes('/mkup/lecture/teachermjchild02')) this.lnb02Trigger = 202;
      else if (url.includes('/mkup/lecture/teachermjchild03')) this.lnb02Trigger = 203;
      else if (url.includes('/mkup/lecture/teachermjmiddle011')) this.lnb02Trigger = 301;
      else if (url.includes('/mkup/lecture/teachermjmiddle012')) this.lnb02Trigger = 302;
      else if (url.includes('/mkup/lecture/teachermjmiddle013')) this.lnb02Trigger = 303;
      else if (url.includes('/mkup/lecture/teachermjmiddle014')) this.lnb02Trigger = 304;
      else if (url.includes('/mkup/lecture/teachermjmiddle021')) this.lnb02Trigger = 305;
      else if (url.includes('/mkup/lecture/teachermjmiddle022')) this.lnb02Trigger = 306;
      else if (url.includes('/mkup/lecture/teachermjmiddle023')) this.lnb02Trigger = 307;
      else if (url.includes('/mkup/lecture/teachermjmiddle024')) this.lnb02Trigger = 308;
      else if (url.includes('/mkup/lecture/teachermjmiddle031')) this.lnb02Trigger = 309;
      else if (url.includes('/mkup/lecture/teachermjmiddle032')) this.lnb02Trigger = 310;
      else if (url.includes('/mkup/lecture/teachermjmiddle033')) this.lnb02Trigger = 311;
      else if (url.includes('/mkup/lecture/teachermjmiddle034')) this.lnb02Trigger = 312;
      else if (url.includes('/mkup/lecture/teachermjmiddle041')) this.lnb02Trigger = 313;
      else if (url.includes('/mkup/lecture/teachermjmiddle042')) this.lnb02Trigger = 314;
      else if (url.includes('/mkup/lecture/teachermjmiddle043')) this.lnb02Trigger = 315;
      else if (url.includes('/mkup/lecture/teachermjmiddle044')) this.lnb02Trigger = 316;
      else if (url.includes('/mkup/lecture/teachermjmiddle051')) this.lnb02Trigger = 317;
      else if (url.includes('/mkup/lecture/teachermjmiddle061')) this.lnb02Trigger = 318;
      else if (url.includes('/mkup/lecture/teachermjmiddle062')) this.lnb02Trigger = 319;
      else if (url.includes('/mkup/lecture/teachermjmiddle063')) this.lnb02Trigger = 320;
      else if (url.includes('/mkup/lecture/teachermjmiddle071')) this.lnb02Trigger = 321;
      else if (url.includes('/mkup/lecture/teachermjmiddle072')) this.lnb02Trigger = 322;
      else if (url.includes('/mkup/lecture/teachermjmiddle073')) this.lnb02Trigger = 323;
      else if (url.includes('/mkup/lecture/teachermjmiddle081')) this.lnb02Trigger = 324;
      else if (url.includes('/mkup/lecture/teachermjmiddle091')) this.lnb02Trigger = 325;
      else if (url.includes('/mkup/lecture/teachermjmiddle101')) this.lnb02Trigger = 326;
      else if (url.includes('/mkup/lecture/teachermjmiddle111')) this.lnb02Trigger = 327;
      else if (url.includes('/mkup/lecture/teachermjmiddle121')) this.lnb02Trigger = 328;
      else if (url.includes('/mkup/lecture/teachermjss011')) this.lnb02Trigger = 401;
      else if (url.includes('/mkup/lecture/teachermjss012')) this.lnb02Trigger = 402;
      else if (url.includes('/mkup/lecture/teachermjss021')) this.lnb02Trigger = 403;
      else if (url.includes('/mkup/lecture/teachermjss031')) this.lnb02Trigger = 404;
      else if (url.includes('/mkup/lecture/teachermjss041')) this.lnb02Trigger = 405;
      else if (url.includes('/mkup/lecture/teachermjss042')) this.lnb02Trigger = 406;
      else if (url.includes('/mkup/lecture/teachermjss043')) this.lnb02Trigger = 407;
      else if (url.includes('/mkup/lecture/teachermjss051')) this.lnb02Trigger = 408;
      else if (url.includes('/mkup/lecture/teachermjss061')) this.lnb02Trigger = 409;
      else if (url.includes('/mkup/lecture/teachermjnomj01')) this.lnb02Trigger = 501;
      else if (url.includes('/mkup/lecture/teachermjnomj02')) this.lnb02Trigger = 502;
      else if (url.includes('/mkup/lecture/teachermjspe01')) this.lnb02Trigger = 601;
      else if (url.includes('/mkup/lecture/teachermjspe02')) this.lnb02Trigger = 602;
      else if (url.includes('/mkup/lecture/teachermjessay01')) this.lnb02Trigger = 701;
      else if (url.includes('/mkup/lecture/teachermjessay02')) this.lnb02Trigger = 702;
      else if (url.includes('/mkup/lecture/teachermjessay03')) this.lnb02Trigger = 703;
      else if (url.includes('/mkup/lecture/teachermhistory01')) this.lnb02Trigger = 801;
      else if (url.includes('/mkup/lecture/teachermjlibr01')) this.lnb02Trigger = 901;
    },
    headerLine(url) {
      if (url.includes('/mkup/main')) {
        this.mainCaseClass = 'mainCase';
      } else {
         this.mainCaseClass = '';
      }
    }
  },
  watch: {
    $route(to, from) {
      this.lnbChange(to.path);
      this.gnbChange(to.path);
      this.lnbSubChange(to.path);
      this.headerLine(to.path);
    }
  },
  mounted() {
    this.lnbChange(window.location.pathname);
    this.gnbChange(window.location.pathname);
    this.lnbSubChange(window.location.pathname);
    this.headerLine(window.location.pathname);
  }
};
</script>
