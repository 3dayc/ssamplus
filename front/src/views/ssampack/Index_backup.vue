<template lang="html">
  <div>
    <!-- container -->
    <div id="container" class="subCase">
    <section>
      <!-- TopBanner -->
      <div class="topArea">
        <!-- 메인 배너 -->
        <div class="topVisual">
            <img :src="require(`@/assets/images/img_ssampack_top.png`)" alt="" v-if="!this.mobile" />
            <img :src="require(`@/assets/images/m/img_ssampack_top.png`)" alt="" v-else-if="this.mobile" />
        </div>
        <!-- //메인 배너 -->
      </div>
      <!-- //TopBanner -->
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="ssampackApply">
          <!---->
          <div class="applyStep1">
            <div class="subTit"><h3><img :src="require(`@/assets/images/img_ssampack_tit.png`)" alt="쌤팩베이직" /></h3></div>
            <div class="selectArea">
              <span class="kind">
                <label>과목</label>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">과목</option>
                    <option value="">중국어</option>
                  </select>
                </span>
              </span>
              <span class="kind">
                <label>선생님</label>
                <span class="selectSet">
                  <select name="" id="" @change="onChange($event)">
                    <option value="0">선생님</option>
                    <option value="1">희소 중국어팀</option>
                  </select>
                </span>
              </span>
            </div>
            <!-- 선생님 수강신청 간략 버전 (ex - 쌤팩, 무료강의) -->
            <div class="subjectSet" v-if="choice == 1">
              <div class="ssamSet">
                <div class="ssamBasic gridSet">
                  <div class="gridItem name">
                    <span class="ssamImg"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamL_mjmiddle_Zh01.png`)" alt="" /></span>
                    <div>
                      <em class="iSbjSetMini">중국어</em><strong>희소 중국어팀</strong>
                      <span class="msg">영역별 전문가의 고품격 명강의</span>
                    </div>
                  </div>
                  <div class="gridItem goBtn">
                    <span>
                      <router-link to="" class="ssamHome">선생님 홈</router-link>
                      <router-link to="" class="curriculum">연간 커리큘럼</router-link>
                      <router-link to="" class="ssamNotice">선생님 공지사항</router-link>
                    </span>
                  </div>
                </div>
                <div class="ssamLecList">
                  <ul>
                    <!--Loop-->
                    <li>
                      <div class="lecBasic">
                        <div class="lecTt">
                          <strong class="tt">
                            상반기쌤팩
                            <span class="msg">키위 마인드맵반 맛보기 강의 외</span>
                          </strong>
                          <!-- <div class="tL">
                            <em class="iPro book">교재</em>그린키위 교육학(기본)
                          </div> -->
                          <!---->
                          <div class="lecBtnSet">
                            <button class="btnPgOpner" :class="{on:toggleTrigger01===true}" @click="toggleTrigger01 = !toggleTrigger01">포함 강좌 및 교재</button>
                            <button @click="benefitsPop = true">수강혜택</button>
                            <button @click="discountTipsPop = true" class="lecSale">수강할인 팁</button>
                          </div>
                        </div>
                        <div class="choice">
                          <span class="priceCheck">
                            <input type="checkbox" id="price0" checked />
                            <label for="price0">
                              <i></i><em>강좌(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>0<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                          <span class="priceCheck">
                            <input type="checkbox" id="price01" />
                            <label for="price01">
                              <i></i><em>교재(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>1,356,600<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <!---->
                      <div class="inPackage" :class="{on:toggleTrigger01===true}">
                        <div class="widthList">
                          <ol>
                            <!--Loop-->
                            <li>
                              <div class="singleLec"> <!-- 패키지 내 단과일 경우 -->
                                <div class="item">
                                  <span class="tL">
                                    <em class="iPro">강좌 1</em>
                                    <strong>키위 마인드맵반<i class="division">면접실연</i></strong>
                                  </span>
                                  <span class="tR">
                                    <span class="lecLimit">
                                      <em>70일간</em><em>1.4배수</em><em>제작중</em>
                                    </span>
                                  </span>
                                </div>
                                <div class="lecBtnSet">
                                  <button @click="lecturePop = true, lecturePopTab = 0">맛보기</button>
                                  <button @click="lecturePop = true, lecturePopTab = 1">강좌소개</button>
                                  <button @click="lecturePop = true, lecturePopTab = 2">강좌리스트</button>
                                </div>
                              </div>
                              <div class="item">
                                <span class="tL">
                                  <em class="iPro book">교재</em>
                                  <strong>키위 마인드맵 설정</strong>
                                </span>
                                <span class="tR">
                                  <span class="price">
                                    <del>2,568,000</del>
                                    <strong>1,356,600<i>원</i></strong>
                                  </span>
                                  <span class="checkSet">
                                    <input type="checkbox" id="book01" />
                                    <label for="book01"><i></i>교재 구매</label>
                                  </span>
                                </span>
                              </div>
                            </li>
                            <!--//Loop-->
                            <li>
                              <div class="singleLec">
                                <div class="item">
                                  <span class="tL">
                                    <em class="iPro">강좌 2</em>
                                    <strong>키위 최종 모의고사반<i class="division">기타특강</i></strong>
                                  </span>
                                  <span class="tR">
                                    <span class="lecLimit">
                                      <em>70일간</em><em>1.4배수</em><em>제작중</em>
                                    </span>
                                  </span>
                                </div>
                                <div class="lecBtnSet">
                                  <button @click="lecturePop = true, lecturePopTab = 0">맛보기</button>
                                  <button @click="lecturePop = true, lecturePopTab = 1">강좌소개</button>
                                  <button @click="lecturePop = true, lecturePopTab = 2">강좌리스트</button>
                                </div>
                              </div>
                            </li>
                          </ol>
                          <div class="openerLine"><button @click="toggleTrigger01 = !toggleTrigger01">포함 강좌 및 교재</button></div>
                        </div>
                      </div>
                      <!--//-->
                    </li>
                    <!--//Loop-->
                    <li>
                      <div class="lecBasic">
                        <div class="lecTt">
                          <strong class="tt">
                            이론핵심정리 및 문제풀이반<i class="division">이론강의</i>
                            <span class="msg">출제 포인트에 맞춘 영역별 핵심 문제&키워드 정리</span>
                          </strong>
                          <!-- <div class="tL">
                            <em class="iPro book">교재</em>그린키위 교육학(기본)
                          </div> -->
                          <!---->
                          <div class="lecBtnSet">
                            <button @click="lecturePop2 = true">맛보기</button>
                          </div>
                        </div>
                        <div class="choice">
                          <span class="priceCheck">
                            <input type="checkbox" id="price0" checked />
                            <label for="price0">
                              <i></i><em>강좌(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>0<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                          <span class="priceCheck">
                            <input type="checkbox" id="price01" disabled />
                            <label for="price01">
                              <i></i><em>교재(0)</em>
                              <!-- <span class="price">
                                <del>2,568,000</del>
                                <strong>1,356,600<i>원</i></strong>
                              </span> -->
                            </label>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="lecBasic">
                        <div class="lecTt">
                          <strong class="tt">
                            하프모고반<i class="division">모의고사</i>
                            <span class="msg">강의 진도에 맞춘 기출과 자체 출제 문제 풀이를 통한 복습과 문제풀이 능력 향상</span>
                          </strong>
                          <div class="tL">
                            <em class="iPro book">교재</em>그린키위 교육학(기본)
                          </div>
                          <!---->
                        </div>
                        <div class="choice">
                          <span class="priceCheck">
                            <input type="checkbox" id="price0" checked />
                            <label for="price0">
                              <i></i><em>강좌(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>0<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                          <span class="priceCheck">
                            <input type="checkbox" id="price01" />
                            <label for="price01">
                              <i></i><em>교재(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>1,356,600<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- //선생님 수강신청 간략 버전 (ex - 쌤팩, 무료강의) -->
          </div>
          <!---->
          <div class="applyStep2">
            <span class="checkSet big" id="ck03">
              <input type="checkbox" />
              <label for="ck03"><i></i>쌤팩 프리미엄<em>(120만원 상당의 서비스가 0원)</em></label>
            </span>
          </div>
          <!---->
          <div class="applyStep3">
            <span class="checkSet big" id="">
              <input type="checkbox" />
              <label for="">
                <i></i>
                <span><img :src="require(`@/assets/images/thumbnail/@tmp_device05.png`)" alt="" /></span>
                <strong><em>LG</em>gram</strong>
              </label>
            </span>
            <span class="checkSet big" id="">
              <input type="checkbox" />
              <label for="">
                <i></i>
                <span><img :src="require(`@/assets/images/thumbnail/@tmp_device03.png`)" alt="" /></span>
                <strong><em>Apple</em>iPad Pro</strong>
              </label>
            </span>
            <span class="checkSet big" id="">
              <input type="checkbox" />
              <label for="">
                <i></i>
                <span><img :src="require(`@/assets/images/thumbnail/@tmp_device01.png`)" alt="" /></span>
                <strong><em>SAMSUNG</em>노트북 Plus2</strong>
              </label>
            </span>
            <span class="checkSet big" id="">
              <input type="checkbox" />
              <label for="">
                <i></i>
                <span><img :src="require(`@/assets/images/thumbnail/@tmp_device02.png`)" alt="" /></span>
                <strong><em>Apple</em>iPad mini</strong>
              </label>
            </span>
          </div>
          <!---->
          <div class="applyWishList" v-if="choice == 1">
            <strong class="tit">주문내역</strong>
            <div class="gridSet">
              <div class="gridItem productSet">
                <ul>
                  <li>영역별 전문가의 고품격 명강의</li>
                  <li>이론핵심정리 및 문제풀이반</li>
                  <li>하프모고반</li>
                  <li>쌤팩 프리미엄</li>
                  <li>SAMSUNG 노트북 Plus2</li>
                  <li>Apple iPad mini</li>
                </ul>
              </div>
              <div class="gridItem priceSet">
                <dl>
                  <dt>합계 금액</dt>
                  <dd><span class="price"><strong>86,000<i>원</i></strong></span></dd>
                </dl>
                <dl class="total">
                  <dt>최종 금액</dt>
                  <dd><span class="price"><strong>1,860,000<i>원</i></strong></span></dd>
                </dl>
              </div>
            </div>
            <span class="checkSet big" id="">
              <input type="checkbox" />
              <label for="">
                <i></i>아래의 이용안내 및 유의사항을 확인하였고, 이에 동의하여 구매합니다.</label>
            </span>
            <div class="btnArea">
                <button class="cart" @click="popupTrigger01 = true">장바구니</button>
                <button class="buy" @click="popupTrigger02 = true">즉시결제</button>
            </div>
          </div>
          <!---->
          <div class="appyNotice">
            <strong class="tit">이용안내 및 유의사항</strong>
            <div>
  						<strong>쌤팩 이용안내</strong>
  						<ul>
  							<li>쌤팩은 단과강의를 묶어 할인 판매하는 상품으로, 포함된 강의는 각 단과 강의 수강 규정(수강기간, 수강시간, 연장, 홀딩 등) 기준으로 제공됩니다.</li>
  							<li>포함된 강의는 각 단과강의 단위로 인강/직강 변경할 수 있습니다. 다만, 인강/직강 변경은 학원 운영정책에 따라 적용되며 일부 강의는 변경이 불가할 수 있습니다. 상세한 변경방법은 FAQ에서 내용을 확인할 수 있습니다.</li>
  							<li>학원 사정으로 일부 강의 구성이 변경될 수 있습니다.</li>
  							<li>과목에 따라 포함강의가 상이할 수 있습니다. 상세 구성을 꼭 확인하시기 바랍니다.</li>
  							<li>학원 강의는 수강증 발급이 되어 있지 않아도, 학원 강의 개강 후에는 수강한 것으로 간주되어 수강료가 공제됩니다.</li>
  							<li>동영상 강의 시작일은 결제일 기준 7일 이내에 강의를 수강하지 않은 경우 최대 10일까지 변경이 가능하며, 포함된 각 강의 별로 설정이 가능합니다.(개강하지 않은 강의는 개강일 기준으로 시작일을 설정할 수 있습니다)</li>
  							<li>동영상 강의는 시작일 기준으로 자동 시작되며, 환불 시 시작된 강의는 실제 수강여부와 관계 없이 수강한 것으로 간주되어 수강료가 공제됩니다.</li>
  							<li>추가적으로 동영상 강의 수강 일정 변경을 원하시면 강의 시작 후 홀딩서비스를 통해 변경할 수 있습니다. 사용 가능한 홀딩기간은 각 강의별로 표기되어 있습니다.</li>
  						</ul>
  						<strong>수강기기 상품 이용안내</strong>
  						<ul>
  							<li>패드 상품 배송을 위해 배송 받으실 주소를 정확하게 입력하시기 바랍니다.</li>
  							<li>구매완료일로부터 순차적으로 배송되며, 주문 후 제작/배송 되는 상품으로 최대 2주 가량 소요될 수 있습니다.</li>
  							<li>A/S는 공식 판매처 서비스센터를 통해 가능합니다.</li>
  						</ul>
  						<strong>쌤팩 환불규정</strong>
  						<dl>
  							<dd>쌤팩 환불 시에는 이미 수강한 상품의 정가(단과 기준)를 기준으로 공제하고 환불함을 원칙으로 합니다.</dd>
  							<dd>보너스 강의가 포함된 경우 보너스강의의 원 수강료가 차감됩니다.</dd>
  						</dl>
  						<dl>
  							<dt>[학원]</dt>
  							<dd>[전액환불] 교습개시 이전</dd>
  							<dd>[부분환불] 교습개시후 교습시간의 1/2경과 하지 않은 경우 부분환불 적용됩니다. <a href="">[1]</a>(학원 환불규정 보기)</dd>
  						</dl>
  						<dl>
  							<dt>[동영상]</dt>
  							<dd>[전액환불] 결제일로부터 7일이내 샘플강의 제외 1강 이하로 수강했을 경우</dd>
  							<dd>[부분환불] 결제일로부터 7일이 경과하거나 샘플강의 제외 1강을 초과하여 수강했을 경우 동영상강의 환불규정에 따라 부분환불이 적용됩니다. <a href="">[2]</a>(동영상환불 규정 보기)</dd>
  						</dl>
  						<strong>수강기기 상품 환불규정</strong>
  						<ul>
  							<li>강의에 대한 환불 규정은 위 [쌤팩 환불규정]에 따릅니다.</li>
  							<li>수강기기 상품(패드)은 수령 이후 환불이 불가능합니다. 구매 시 신중하게 판단하여 구매 부탁 드립니다.</li>
  						</ul>
  					</div>
          </div>
          <!---->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
    <!-- 장바구니 -->
    <Alert v-if='popupTrigger01' @close="popupTrigger01 = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>선택한 교재를 장바구니에 추가하였습니다.</p></div>
      </template>
      <template slot="modalfooter">
        <router-link class="btnM line" to="/mkup/mypage/payment/basket">장바구니로 이동</router-link>
        <button class="btnM" @click="popupTrigger01 = false">구매를 계속함</button>
      </template>
    </Alert>
    <!-- //장바구니 -->
    <!-- 즉시결제 -->
    <Alert v-if='popupTrigger02' @close="popupTrigger02 = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>즉시결제를 하시겠습니까?</p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="popupTrigger02 = false">취소</button>
        <button class="btnM" @click="popupTrigger02 = false">확인</button>
      </template>
    </Alert>
    <!-- //즉시결제 -->
    <!-- 수강할인 팁 Popup -->
    <Popup v-if='discountTipsPop' @close="discountTipsPop = false" class="large discountTipsPop">
      <template slot="modalheader">
        <div>
          <h1>수강할인 팁</h1>
          <span>최근 2년 이내 특정강좌를 수강했다면 보다 높은 할인이 적용됩니다.</span>
        </div>
        <button @click="discountTipsPop = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <div class="ratePriceTit">
          <span class="left">그린키위반(기본반)</span>
          <span class="price">
            <del>500,000</del><strong>2,712,000<i>원</i></strong>
          </span>
        </div>
        <TeacherLecDiscount />
      </template>
    </Popup>
    <!-- //수강할인 팁 Popup -->
    <!-- 강좌관련 팝업(맛보기묭만 있음)  -->
    <Popup v-if='lecturePop2' @close="lecturePop2 = false" class="large lecturePop">
      <template slot="modalheader" class="noLine">
        <div>
          <h1>그린키위반 (기본반)</h1>
          <span>기초부터 탄탄하게 쌓아가는 키위 교육학</span>
          <button @click="lecturePop2 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="tabBack">
          <div class="tabNav">
            <nav>
              <ul class="blackLineTab">
                <li :class="{on:lecturePopTab2===0}"><button @click="lecturePopTab2 = 0">강좌맛보기</button></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="tabLayout">
          <div v-if="lecturePopTab2 == 0" class="tabData" :key="lecturePopTab2">
            <div class="videoPlay"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></div>
          </div>
        </div>
      </template>
    </Popup>
    <!-- //강좌관련 샘플(맛보기묭만 있음)  -->
    <!-- 수강혜택 Popup -->
    <Popup v-if='benefitsPop' @close="benefitsPop = false" class="large benefitsPop">
      <template slot="modalheader">
        <div><h1>수강혜택</h1></div>
        <button @click="benefitsPop = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <div>
          관리자 시스템에서 등록한 패키지 강좌의 특징 및 수강혜택을 표시함. 관리자 시스템에서 등록한 패키지 강좌의 특징 및 수강혜택을 표시함.<br/>
          관리자 시스템에서 등록한 패키지 강좌의 특징 및 수강혜택을 표시함.<br/>
          관리자 시스템에서 등록한 패키지 강좌의 특징 및 수강혜택을 표시함.<br/>
          관리자 시스템에서 등록한 패키지 강좌의 특징 및 수강혜택을 표시함.<br/>
          관리자 시스템에서 등록한 패키지 강좌의 특징 및 수강혜택을 표시함.<br/><br/><br/>
          수강생 선호도 1위, 전타임 조기마감 신화!<br/>
          신체(건강, 안전), 의사, 사회, 예술, 자연, 교육 · 누리과정 해설서, 지침서, 연수자료, 법령 등 · 기출문제, 구조화 자료, 확인 문제
        </div>
      </template>
    </Popup>
    <!-- //수강혜택 Popup -->
    <!-- 강좌관련 팝업 -->
    <Popup v-if='lecturePop' @close="lecturePop = false" class="large lecturePop">
      <template slot="modalheader" class="noLine">
        <div>
          <h1>그린키위반 (기본반)</h1>
          <span>기초부터 탄탄하게 쌓아가는 키위 교육학</span>
          <button @click="lecturePop = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="tabBack">
          <div class="tabNav">
            <nav>
              <ul class="blackLineTab">
                <li :class="{on:lecturePopTab===0}"><button @click="lecturePopTab = 0">강좌맛보기</button></li>
                <li :class="{on:lecturePopTab===1}"><button @click="lecturePopTab = 1">강좌소개</button></li>
                <li :class="{on:lecturePopTab===2}"><button @click="lecturePopTab = 2">강의 리스트</button></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="tabLayout">
          <div v-if="lecturePopTab == 0" class="tabData" :key="lecturePopTab">
            <div class="videoPlay"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></div>
          </div>
          <div v-if="lecturePopTab == 1" class="tabData">
            <TeacherLecDetailInfo />
          </div>
          <div v-if="lecturePopTab == 2" class="tabData">
            <TeacherLecSchedule />
          </div>
        </div>
      </template>
    </Popup>
    <!-- //강좌관련 팝업  -->
    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import TeacherLecDetailInfo from '@/views/lecture/TeacherLecDetailInfo.vue';
import TeacherLecSchedule from '@/views/lecture/TeacherLecSchedule.vue';
import TeacherLecDiscount from '@/views/lecture/TeacherLecDiscount.vue';

export default {
  mixins: [Mixin],
  name: 'Index',
  components: {
    TeacherLecDetailInfo,
    TeacherLecSchedule,
    TeacherLecDiscount
  },
  data() {
    return {
      choice:0,
      popupTrigger01:false,
      popupTrigger02:false,
      toggleTrigger01:false,
      discountTipsPop:false,
      lecturePop2:false,
      benefitsPop:false,
      lecturePop:false,
      videoPopTrigger01:false,
      unOpenPopupTrigger:false,
      lecturePopTab:0,
      lecturePopTab2:0
    }
  },
  methods: {
    onChange(event) {
      let value = event.target.value;
      if (value == '0') this.choice = 0;
      else if (value == '1') this.choice = 1;
    }
  },
}
</script>
