<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="mockExplainView">
          <div class="subTit">
            <h3>모의고사 성적/해설</h3>
          </div>
          <div class="boardDetail">
            <div class="boardHead mockCase">
              <em class="iMockSet">수강 중</em>
              <div class="lecKind">현장 응시 모의고사</div>
              <strong>제 16회 희소 모의고사 (현장 응시, 2022학년도)</strong>
              <div class="boardInfo">
                <em>1교시 : <i>교육학(김현)</i></em>
                <em>2교시 : <i>국어(김준)</i></em>
                <em>3교시 : <i>국어(김준)</i></em>
                <em><i>응시기간  </i> : 2021-08-01</em>
              </div>
            </div>
          </div>
          <!-- 진행 현황 -->
          <div class="subTit mt30">
            <h3>진행 현황</h3>
          </div>
          <div class="resTls mockTestSchedule">
            <!-- list -->
            <div class="tbody">
              <!--현장 -->
              <ul>
                <li class="listGrid">
                  <span class="lgItem item0">신청 및 결제 완료</span>
                  <span class="lgItem item1"><em class="mTit">마감일자 : </em>2021-06-25</span>
                  <span class="lgItem item2"></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">수험표 출력</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-07-25 ~ 2021-07-31</span>
                  <span class="lgItem item2">
                    <button class="btnPrint" @click="popupTrigger = true, scrollHiden($event)">수험표 출력</button>
                    <em>수험표 출력 기간이 아닙니다</em>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">고사장 방문</span>
                  <span class="lgItem item1"><em class="mTit">수험일자 : </em>22021-08-01</span>
                  <span class="lgItem item2"></span>
                </li>
                <li class="listGrid ing"> <!-- 진행중 일 경우 -->
                  <span class="lgItem item0">해설 강의</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~ 2021-08-31 </span>
                  <span class="lgItem item2">
                    <span class="examReviewPlay">
                      <router-link to="/mkup/mylec/mock/explain/view/player" class="btnS">1교시 수강</router-link>
                      <router-link to="/mkup/mylec/mock/explain/view/player" class="btnS">2교시 수강</router-link>
                      <router-link to="/mkup/mylec/mock/explain/view/player" class="btnS">3교시 수강</router-link>
                    </span>
                    <em>해설 강의 기간이 아닙니다</em>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">성적표 확인</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~</span>
                  <span class="lgItem item2">
                    <button class="btnS" @click="morkupExamResultTrigger = true, scrollHiden($event)">성적표 확인</button>
                    <em>성적표 확인 기간이 아닙니다</em>
                  </span>
                </li>
              </ul>
              <!--//현장 -->
              <!-- 온라인/ 봉투, 채점 O -->
              <ul>
                <li class="listGrid">
                  <span class="lgItem item0">신청 및 결제 완료</span>
                  <span class="lgItem item1"><em class="mTit">마감일자 : </em>2021-06-25</span>
                  <span class="lgItem item2"></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">수험표 출력</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-07-25 ~ 2021-07-31 </span>
                  <span class="lgItem item2">
                    <button class="btnPrint" @click="popupTrigger = true, scrollHiden($event)">수험표 출력</button>
                    <em>수험표 출력 기간이 아닙니다</em>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">시험지 배송</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-01 ~ 2021-08-08</span>
                  <span class="lgItem item2"><button class="btnS" @click="popupTrigger2 = true, scrollHiden($event)">배송 정보 확인</button></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">시험 응시</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~ 2021-08-31</span>
                  <span class="lgItem item2"><em>시험 응시 기간이 아닙니다</em></span>
                </li>
                <li class="listGrid ing"> <!-- 진행중 일 경우 -->
                  <span class="lgItem item0">답안지 업로드</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~ 2021-09-07</span>
                  <span class="lgItem item2">
                    <button class="btnS" @click="popupTrigger3 = true, scrollHiden($event)">답안지 업로드</button>
                    <em>답안지 업로드기간이 아닙니다</em>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">채점 결과 확인</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~</span>
                  <span class="lgItem item2">
                    <button class="btnS" @click="popupTrigger4 = true, scrollHiden($event)">채점 결과 확인</button>
                    <em>채점 결과 확인 기간이 아닙니다</em>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">해설 강의</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~ 2021-09-07</span>
                  <span class="lgItem item2">
                    <span class="examReviewPlay">
                      <router-link to="/mkup/mylec/mock/explain/view/player" class="btnS">1교시 수강</router-link>
                      <router-link to="/mkup/mylec/mock/explain/view/player" class="btnS">2교시 수강</router-link>
                      <router-link to="/mkup/mylec/mock/explain/view/player" class="btnS">3교시 수강</router-link>
                    </span>
                    <em>해설 강의 기간이 아닙니다</em>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">성적표 확인</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~</span>
                  <span class="lgItem item2">
                    <button class="btnS" @click="morkupExamResultTrigger = true, scrollHiden($event)">성적표 확인</button>
                    <em>성적표 확인 기간이 아닙니다</em>
                  </span>
                </li>
              </ul>
              <!-- //온라인/ 봉투, 채점 O -->
              <!-- 온라인/ 비봉투, 채점 X -->
              <ul>
                <li class="listGrid">
                  <span class="lgItem item0">신청 및 결제 완료</span>
                  <span class="lgItem item1"><em class="mTit">마감일자 : </em>2021-06-25</span>
                  <span class="lgItem item2"></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">수험표 출력</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-07-25 ~ 2021-07-31</span>
                  <span class="lgItem item2">
                    <button class="btnPrint" @click="popupTrigger = true, scrollHiden($event)">수험표 출력</button>
                    <em>수험표 출력 기간이 아닙니다</em>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">시험지 출력</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-01 ~ 2021-08-08</span>
                  <span class="lgItem item2">
                    <button class="btnPrint" @click="popupTrigger6 = true, scrollHiden($event)">시험지/답안지 출력(3)</button>
                    <em>시험지/답안지 출력 기간이 아닙니다</em>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">시험 응시</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~ 2021-08-31</span>
                  <span class="lgItem item2"><em>시험 응시 기간이 아닙니다</em></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">자가 채점</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~ 2021-09-07</span>
                  <span class="lgItem item2">
                    <button class="btnS" @click="popupTrigger5 = true, scrollHiden($event)">자가 채점 입력</button>
                    <em>답안지 업로드기간이 아닙니다</em>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">해설 강의</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15</span>
                  <span class="lgItem item2">
                    <span class="examReviewPlay">
                      <router-link to="/mkup/mylec/mock/explain/view/player" class="btnS">1교시 수강</router-link>
                      <router-link to="/mkup/mylec/mock/explain/view/player" class="btnS">2교시 수강</router-link>
                      <router-link to="/mkup/mylec/mock/explain/view/player" class="btnS">3교시 수강</router-link>
                    </span>
                    <em>해설 강의 기간이 아닙니다</em>
                  </span>
                </li>
                <li class="listGrid ing"> <!-- 진행중 일 경우 -->
                  <span class="lgItem item0">성적표 확인</span>
                  <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~</span>
                  <span class="lgItem item2">
                    <button class="btnS" @click="morkupExamResultTrigger = true, scrollHiden($event)">성적표 확인</button>
                    <em>성적표 확인 기간이 아닙니다</em>
                  </span>
                </li>
                <!-- //온라인/ 비봉투, 채점 X -->
              </ul>
            </div>
            <!-- //list -->
          </div>
          <!-- //진행 현황 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->


    <!-- 수험표확인 팝업 -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" class="examTicketPopup">
      <template slot="modalheader">
        <div>
          <h1>수험표 확인</h1>
        </div>
      </template>
      <template slot="modalbody">
        <div class="resTls subCase">
          <div class="tbody">
            <ul>
              <li class="listGrid">
                <div class="lgItem th">성명</div>
                <span class="lgItem">홍길동</span>
              </li>
              <li class="listGrid">
                <div class="lgItem th">응시시험</div>
                <span class="lgItem">2022학년도 희소 봉투 모의고사</span>
              </li>
              <li class="listGrid">
                <div class="lgItem th">수험번호</div>
                <span class="lgItem">12345678</span>
              </li>
              <li class="listGrid">
                <div class="lgItem th">과목(선생님)</div>
                <span class="lgItem">중국어(한정은)</span>
              </li>
              <li class="listGrid">
                <div class="lgItem th">응시지역</div>
                <span class="lgItem">서울</span>
              </li>
              <li class="listGrid">
                <div class="lgItem th">응시일자</div>
                <span class="lgItem">2021-04-15 ~ 2021-04-21</span>
              </li>
            </ul>
          </div>
        </div>
        <dl>
          <dt>※ 온라인 모의고사 유의사항</dt>
          <dd>
            <span>온라인 모의고사 시스템은 <em>1회만 응시 가능</em>합니다.</span>
            <span>기간 내 원하는 시간 어느 때나 시험응시가 가능하오나, <em>실제 시험과 동일한 환경에서 응시를 원하시는 분은 8시 40분에 응시하기를 클릭</em>해 주시기 바랍니다.</span>
            <span>시험 응시 시작버튼 클릭과 동시에 <em>시험이 바로 시작되오니 준비가 완료 된 상태에서 시험을 시작</em>해주시기 바랍니다. 시험 중간에 브라우저 창을 닫아도, 처음 시작하기 버튼을 누른 시간부터 시험은 계속됩니다.</span>
            <span>시험지와 <em>답안지 출력은 모두 3회 씩만 출력이 가능</em>하오니 참고하시어 이용하시기 바랍니다.</span>
          </dd>
        </dl>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger = false, scrollHiden($event)" >닫기</button>
          <button class="btnL" v-if="!this.mobile">인쇄</button>
        </div>
      </template>
    </Popup>
    <!-- //수험표확인 팝업 -->
    <!-- 배송지 정보 Popup -->
    <Popup v-if='popupTrigger2' @close="popupTrigger2 = false" class="deliveryAddressPop">
      <template slot="modalheader">
        <div>
          <h1>배송지 정보</h1>
          <button @click="popupTrigger2 = false, scrollHiden($event)" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardWrite">
          <dl>
            <dt>수령인(이름)</dt>
            <dd><input type="text" /></dd>
          </dl>
          <dl>
            <dt>연락처</dt>
            <dd><input type="text" placeholder="- (하이픈)을 제외하고 입력" /></dd>
          </dl>
          <dl>
            <dt>배송 주소</dt>
            <dd>
              <div class="addressSet">
                <div @click="agencyOKTrigger = true">
                  <span v-if="!this.addressRecord">우편번호 찾기</span>
                  <p v-if="addressRecord">[00000] 서울특별시 마포구 상암동</p>
                </div>
                <input type="text" placeholder="상세주소" v-if="addressRecord" />
              </div>
            </dd>
          </dl>
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger2 = false, scrollHiden($event)">취소</button>
          <button class="btnL" @click="popupTrigger2 = false, scrollHiden($event)">확인</button>
        </div>
      </template>
    </Popup>
    <!-- 배송지 정보 Popup -->
    <!-- 우편번호 검색 예시  -->
    <Popup v-if='agencyOKTrigger' @close="agencyOKTrigger = false" class="agencyOKPop">
      <template slot="modalbody">
        <img :src="require(`@/assets/images/img_agencyOK2.png`)" alt="" @click="agencyOKTrigger = false; addressRecord = true" />
      </template>
    </Popup>
    <!-- //우편번호 검색 예시 -->
    <!-- 답안지 업로드 팝업 -->
    <Popup v-if='popupTrigger3' @close="popupTrigger3 = false" class="examEndUploadPopup">
      <template slot="modalheader">
        <div>
          <h1>답안지 제출</h1>
          <button @click="popupTrigger3 = false, scrollHiden($event)" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardDetail write">
          <div class="box">
            <span class="uploadFile verM">
              <i>파일명 규칙은 <strong>수험번호(응시자성명).pdf</strong> 입니다.</i>
              <span>
                <input type="file" id="fileUpload"/>
                <label for="fileUpload">+ 파일첨부</label>
              </span>
            </span>
            <ul class="uploadFileList">
              <li>
                <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                <span class="btnBox">
                  <button class="btnDownload">다운로드</button>
                  <button class="btnDelete">삭제</button>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <p>
          <span>※ 1. 답안지는 제출기한 내에 제출해 주세요 (기한만료 후 제출 불가)</span>
          <span>※ 2. 파일명 명명 규칙을 준수하여 업로드 해 주세요.</span>
          <span>※ 3. 답안지는 1개의 pdf 파일로 제출이 가능합니다.</span>
          <span>※ 4. 여러 번 파일을 제출할 경우 최종 파일로 채점이 됩니다.</span>
        </p>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger3 = false, scrollHiden($event)">취소</button>
          <button class="btnL"  @click="popupTrigger3 = false, scrollHiden($event)">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //답안지 업로드 팝업 -->
    <!-- 채점 결과 확인 팝업 -->
    <Popup v-if='popupTrigger4' @close="popupTrigger4 = false" class="examEndResultPopup">
      <template slot="modalheader">
        <div>
          <h1>채점 결과 확인</h1>
          <button @click="popupTrigger4 = false, scrollHiden($event)" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <strong>모의고사 채점 결과를 다운로드하여 확인하실 수 있습니다.</strong>
        <div class="boardDetail write">
          <div class="box">
            <ul class="uploadFileList">
              <li>
                <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                <span class="btnBox">
                  <button class="btnDownload">다운로드</button>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <p>
          <span>※ 1. 채점결과에 이의가 있다면, &lt;1:1 게시판 상담&gt;으로 문의해 주세요.</span>
        </p>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL"  @click="popupTrigger4 = false, scrollHiden($event)">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //채점 결과 확인 팝업 -->
    <!-- 시험지/답안지 출력 팝업 -->
    <Popup v-if='popupTrigger6' @close="popupTrigger6 = false" class="examPrintPopup">
      <template slot="modalheader">
        <div>
          <h1>시험지/답안지 출력</h1>
          <button @click="popupTrigger6 = false, scrollHiden($event)" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardDetail write">
          <div class="box">
            <ul class="uploadFileList">
              <li class="printCase">
                <i>시험지</i>
                <span class="name">10010001(홍길동).PDF</span>
                <span class="btnBox">
                  <em>(인쇄횟수제한 : <strong>3</strong>/5)</em>
                  <button class="btnPrint" v-if="!this.mobile">인쇄하기</button>
                </span>
              </li>
              <li class="printCase">
                <i>답안지</i>
                <span class="name">10010001(홍길동).PDF</span>
                <span class="btnBox">
                  <em>(인쇄횟수제한 : <strong>0</strong>/5)</em>
                  <button class="btnPrint" v-if="!this.mobile">인쇄하기</button>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <p>
          <span>※ 1. 인쇄에 횟수제한이 있을 경우 지정 횟수 이상으로 인쇄할 수 없습니다. <em>인쇄 횟수에 유의해 주세요</em></span>
        </p>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger6 = false, scrollHiden($event)">취소</button>
          <button class="btnL"  @click="popupTrigger6 = false, scrollHiden($event)">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //시험지/답안지 출력 팝업 -->
    <!-- 자가 채점 입력 팝업 -->
    <Popup v-if='popupTrigger5' @close="popupTrigger5 = false" class="large examSelfResultPopup">
      <template slot="modalheader">
        <div>
          <h1>자가 채점 입력 <em>10010001 / 홍길동</em></h1>
          <button @click="popupTrigger5 = false, scrollHiden($event)" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <MorkExamSelfResult />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line"  @click="popupTrigger5 = false, scrollHiden($event)">취소</button>
          <button class="btnL"  @click="popupTrigger5 = false, scrollHiden($event)">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //자가 채점 입력 팝업 -->
    <!-- 시험성적표 팝업-->
    <Popup v-if='morkupExamResultTrigger' @close="morkupExamResultTrigger = false" class="morkupExamResultPopup">
      <template slot="modalheader">
        <div>
          <h1>모의고사 성적 분석</h1>
          <span>해당 응시 과목의 전체 응시생 데이터를 바탕으로 분석한 결과 입니다.</span>
          <button class="btnPrint" v-if="!this.mobile">인쇄하기</button>
          <button @click="morkupExamResultTrigger = false, scrollHiden($event)" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <MorkExamResult />
      </template>
    </Popup>
    <!-- //수험표확인 팝업 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import MorkExamResult from '@/views/mylec/MorkExamResult.vue';
import MorkExamSelfResult from '@/views/mylec/MorkExamSelfResult.vue';

export default {
  mixins: [Mixin],
  name: 'MockExplainView',
  components: {
    MorkExamResult,
    MorkExamSelfResult
  },
  data() {
    return {
      currentTab: 0,
      popupTrigger: false,
      popupTrigger2: false,
      popupTrigger3: false,
      popupTrigger4: false,
      popupTrigger5: false,
      popupTrigger6: false,
      agencyOKTrigger: false,
      addressRecord: false,
      morkupExamResultTrigger: false
    }
  },
  mounted() {
  },
}
</script>
