<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="ssammallDeviceView">
          <div class="mallProductView">
            <!---->
            <div class="productBox">
              <div class="productInfo">
                <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                <!-- <span class="dday">D-day<span>2<i>일</i></span></span> -->
                <div class="imgBox"><span><img :src="require(`@/assets/images//thumbnail/@tmp_device01.png`)"/></span></div>
                <div class="txtBox">
                  <em>#SAMSUNG</em>
                  <strong class="notBook">갤럭시 북 FLEX 알파</strong>
                  <div class="moreInfo">
                    <span><em>모델명</em>12XZ09P-AD8BK</span>
                    <span><em>OS</em>Windows 10 Home</span>
                    <span><em>화면크기</em>40.6cm</span>
                    <span><em>메모리</em>LPDDR4x 8GB SSD 256GB</span>
                  </div>
                </div>
              </div>
              <!---->
              <div class="orderInfo">
                <div class="priceArea">
                  <dl v-if="!this.mobile">
                    <dt>주문수량</dt>
                    <dd>
                      <span class="countBox">
                        <button class="minus">-</button>
                        <span class="count">1</span>
                        <button class="plus">+</button>
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>정가</dt>
                    <dd><em class="cost">86,000</em>원</dd>
                  </dl>
                  <dl class="productPrice">
                    <dt>판매가</dt>
                    <dd>
                      <span class="price"><strong>2,712,000<i>원</i></strong><em>10<b>%</b></em></span>
                    </dd>
                  </dl>
                  <!-- <dl class="productPrice">
                    <dt>판매가</dt>
                    <dd>
                      <span class="price"><strong>1,586,000<i>원</i></strong><em>10<b>%</b></em></span>
                    </dd>
                  </dl>
                  <div class="withLec">
                    <dl>
                      <dt>기기</dt>
                      <dd>2,000,000 원</dd>
                    </dl>
                    <dl>
                      <dt>[교육학/김현] 키위 이른 과목 제목이 나옵니다</dt>
                      <dd>1,556,000 원</dd>
                    </dl>
                  </div> -->
                  <dl>
                    <dt>배송비</dt>
                    <dd class="deliveryTxt">무료</dd>
                  </dl>
                </div>
                <div class="btnArea" v-if="!this.mobile">
                  <button class="btnL redline" @click="popupTrigger01 = true">장바구니</button>
                  <button class="btnL red" @click="popupTrigger02 = true">즉시결제</button>
                  <!-- 품목이 품절일 시 -->
                  <button class="btnL line solo" style="display:none;" @click="popupTrigger03 = true">입고 안내문자 신청</button>
                </div>
              </div>
              <!---->
            </div>
            <!-- 학습기기 강좌선택 -->
            <!-- <div class="choiceLecture" v-if="!this.mobile">
              <div @click="isLec = !isLec" :class="{on:isLec==true}">강좌 선택</div>
              <transition name="slide">
                <ul v-show="isLec">
                  <li @click="isLec = !isLec">
                    <span class="tit"><em>[교육학/김현] 키위 이론반  키위 이론반  키위 이론반  키위 이론반  키위 이론반  키위 이론반 키위 이론반  키위 이론반  키위 이론반  키위 이론반  키위 이론반  키위 이론반</em></span>
                    <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong></span>
                  </li>
                  <li @click="isLec = !isLec">
                    <span class="tit"><em>[중등수학/홍길동] 키위 이론반</em></span>
                    <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong></span>
                  </li>
                  <li @click="isLec = !isLec">
                    <span class="tit"><em>[중등중국어/김길동] 키위 이론반</em></span>
                    <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong></span>
                  </li>
                </ul>
              </transition>
            </div> -->
            <!-- //학습기기 강좌선택 -->
            <!-- 구매할인 팁 -->
            <div class="mallDiscount">
              <div class="subTit">
                <h3>구매할인 팁</h3>
                <!-- <span class="right"><button class="btnDiscount" @click="openDiscount = !openDiscount" v-if="openDiscount == false">펼쳐보기</button></span> -->
                <div><em>최근 2년 이내 특정강좌를 수강했다면 보다 높은 할인이 적용됩니다.</em></div>
              </div>
              <div class="mallDiscountBack" :class="{open:openDiscount===true}" >
                <MallDiscount />
              </div><!-- 20220321 수정 -->
              <button class="moreBtn" :class="{open:reviewMore07===true}" @click="reviewToggle07">
                {{reviewMoreTxt07}}
              </button><!-- 20220321 수정 -->
            </div>
            <!-- //구매할인 팁 -->
            <!-- 퀵무브 -->
            <div class="quickMove">
              <ul>
                <li :class="{on:currentTab===0}"><button @click="gotoMallView('mallViewTrigger01')">제품 상세</button></li>
                <li :class="{on:currentTab===1}"><button @click="gotoMallView('mallViewTrigger02')">스펙</button></li>
                <li :class="{on:currentTab===2}"><button @click="gotoMallView('mallViewTrigger03')">기기+강좌</button></li>
                <li :class="{on:currentTab===3}"><button @click="gotoMallView('mallViewTrigger04')">백퍼후기</button></li>
              </ul>
            </div>
            <!-- //퀵무브 -->
            <div class="mallContents">
              <!-- 제품 상세 -->
              <div class="contentsBox" id="intro" ref="mallViewTrigger01">
                <div class="productDetailView" :class="{open:openDetail===true}">
                  <div class="detailArea">
                    <!-- editor style (start) -->
                    <p><span style="background-color:hsl(60,75%,60%);">미용 모의고사</span></p>
                    <p><strong>에디터 테스트</strong></p>
                    <p><i>에디터 테스트</i></p>
                    <p><s>에디터 테스트</s></p>
                    <p><u>에디터 테스트</u></p>
                    <p>&nbsp;</p>
                    <figure class="table">
                      <table style="border-style:solid;">
                        <thead>
                          <tr>
                            <th>에디터</th>
                            <th>테스트</th>
                            <th>테스트</th>
                            <th>테스트</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>&nbsp;</th>
                            <td>가나다라마바사</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr>
                            <th>&nbsp;</th>
                            <td>ABCDEFU</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </figure>
                    <p>&nbsp;</p>
                    <ul>
                      <li>문단부호</li>
                      <li>문단부호 문단부호 문단부호 문단부호 문단부호 문단부호 문단부호 문단부호 문단부호 문단부호 문단부호 문단부호 문단부호 문단부호</li>
                    </ul>
                    <ol>
                      <li>문단부호</li>
                      <li>문단부호부호 문단부호 문단부호 문단부호 문단부호 문단부호 문단부호 문단부호 문단부호 문단부호 문단부호</li>
                    </ol>
                    <ul class="todo-list">
                      <li><label class="todo-list__label"><input type="checkbox" disabled="disabled"><span
                            class="todo-list__label__description">&nbsp;가나다라마</span></label></li>
                    </ul>
                    <figure class="image"><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAH2GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA3LTA4VDE2OjI1OjUyKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA3LTA5VDEzOjI2OjQyKzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNy0wOVQxMzoyNjo0MiswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MmJiZjQxNS01Mjk5LTllNDMtYWUyNC03YWJjMDBmNmZlZWUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZGVhOWRiMi0yMTNlLWEzNDAtODJhNS0yZTg1MWU4ZTNkMDYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphNmJjZTEwZS0zYTVlLTQwNDMtYjUzMS0wMzk4NDAxZWY3MTMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE2YmNlMTBlLTNhNWUtNDA0My1iNTMxLTAzOTg0MDFlZjcxMyIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wOFQxNjoyNTo1MiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozOWM3ZTQyNC0wYjMxLWNiNDUtOWRiYi03YjRjMzEyMDAzYmMiIHN0RXZ0OndoZW49IjIwMjEtMDctMDhUMTY6MjU6NTIrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDJiYmY0MTUtNTI5OS05ZTQzLWFlMjQtN2FiYzAwZjZmZWVlIiBzdEV2dDp3aGVuPSIyMDIxLTA3LTA5VDEzOjI2OjQyKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MjBi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">
                    </figure>
                    <!-- editor style (end) -->
                    <!-- <img :src="require(`@/assets/images/thumbnail/@tmp_ssamMall.png`)" alt=""/> -->
                  </div>
                  <button class="btnL solo" @click="detailToggle">
                    상품정보 {{productMoreTxt}}
                  </button>
                </div>
              </div>
              <!-- //제품 상세 -->
              <!-- 스펙 -->
              <div class="contentsBox" id="list" ref="mallViewTrigger02">
                <!-- <div class="subTit">
                  <h3>스펙</h3>
                </div> -->
                <div class="detailArea">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamMall2.png`)" alt=""/>
                </div>
              </div>
              <!-- //스펙 -->
              <!-- 학습기기 + 강좌 -->
              <div class="contentsBox" id="deviceLecture" ref="mallViewTrigger03">
                <div class="subTit">
                  <h3>이 학습기기에 강좌를 추가한다면?!</h3>
                </div>
                <div class="deviceList withLecCase">
                  <swiper :options="deviceLectureOption">
                    <swiper-slide>
                      <router-link to="/mkup/ssammall/device/view">
                        <span class="deviceGoods">
                          <span class="goodsImg">
                            <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device01.png`)" alt=""/></span>
                          </span>
                          <div class="goodsDetail2">
                            <span class="selectSet">
                              <select name="" id="">
                                <option value="">[교육학 김현] 2022 대비 교육 사전준비 특강 패키지</option>
                              </select>
                            </span>
                            <div class="priceArea">
                              <dl>
                                <dt>기기</dt>
                                <dd><em>2,440,000<i>원</i></em></dd>
                                <dt>강좌</dt>
                                <dd><em>1,000,000<i>원</i></em></dd>
                              </dl>
                              <p>
                                <strong>1,729,000<i>원</i></strong>
                              </p>
                            </div>
                          </div>
                        </span>
                      </router-link>
                      <div class="btn">
                        <button class="btnL redline" @click="popupTrigger01 = true">장바구니</button>
                        <button class="btnL red" @click="popupTrigger02 = true">즉시결제</button>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <router-link to="/mkup/ssammall/device/view">
                        <span class="deviceGoods">
                          <span class="goodsImg">
                            <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device01.png`)" alt=""/></span>
                          </span>
                          <span class="goodsDetail">
                            <span class="corp">SAMSUNG</span>
                            <strong class="name">갤럭시북 이온2</strong>
                            <span class="price">
                              <strong>1,729,000<i>원</i></strong>
                              <del>15,000원</del>
                              <em>10<b>%</b></em>
                            </span>
                          </span>
                        </span>
                      </router-link>
                      <div class="btn">
                        <button class="btnL redline" @click="popupTrigger01 = true">장바구니</button>
                        <button class="btnL red" @click="popupTrigger02 = true">즉시결제</button>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <div class="swiper-scrollbar"></div>
                </div>
              </div>
              <!-- //학습기기 + 강좌 -->
              <!-- 백퍼후기 -->
              <div class="contentsBox" id="review" ref="mallViewTrigger04">
                <div class="subTit">
                  <h3>백퍼후기</h3>
                </div>
                <div class="bookReview">
                  <ul>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" @click="imgPopTrigger01 = true" alt=""/></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore01===true}">처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img02.png`)" @click="imgPopTrigger02 = true" alt=""/></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore01===true}" @click="reviewToggle01">
                        {{reviewMoreTxt01}}
                      </button>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore02===true}">모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세요 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에도 잘 남게 정리되어 있어요. 진짜 핵강추입니다. 모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세 요. 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에 도 잘 남게 정리되어 있어요. 진짜 핵강추입니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore02===true}" @click="reviewToggle02">
                        {{reviewMoreTxt02}}
                      </button>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" @click="imgPopTrigger01 = true" alt=""/></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore03===true}">처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img02.png`)" @click="imgPopTrigger02 = true" alt=""/></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore03===true}" @click="reviewToggle03">
                        {{reviewMoreTxt03}}
                      </button>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore04===true}">모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세요 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에도 잘 남게 정리되어 있어요. 진짜 핵강추입니다. 모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세 요. 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에 도 잘 남게 정리되어 있어요. 진짜 핵강추입니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore04===true}" @click="reviewToggle04">
                        {{reviewMoreTxt04}}
                      </button>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore05===true}">처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img02.png`)" @click="imgPopTrigger02 = true" alt=""/></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore05===true}" @click="reviewToggle05">
                        {{reviewMoreTxt05}}
                      </button>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore06===true}">모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세요 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에도 잘 남게 정리되어 있어요. 진짜 핵강추입니다. 모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세 요. 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에 도 잘 남게 정리되어 있어요. 진짜 핵강추입니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore06===true}" @click="reviewToggle06">
                        {{reviewMoreTxt06}}
                      </button>
                    </li>
                  </ul>
                <div class="paging">
                  <Paginate v-if="!this.mobile" />
                  <div class="moreBtnWrap" v-if="this.mobile">
                    <button class="mobileMore">더보기</button>
                  </div>
                </div>
                </div>
              </div>
              <!-- //백퍼후기 -->
            </div>
          </div>
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- //Popup -->
    <!-- 장바구니 -->
    <Alert v-if='popupTrigger01' @close="popupTrigger01 = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>선택한 상품을 장바구니에 추가하였습니다.</p></div>
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
    <!-- 입고 안내문자 신청 -->
    <Popup v-if='popupTrigger03' @close="popupTrigger03 = false" class="bookWearingrPop">
      <template slot="modalheader">
        <div><h1>입고 안내문자 신청</h1></div>
      </template>
      <template slot="modalbody">
        <div class="bookGuideContents">
          <span class="txt01">본 교재는 일시품절 상태입니다.</span>
          <span class="number">010-1234-5678</span>
          <span class="txt02">회원님의 연락처로 입고 즉시 SMS를 통해 안내해 드리겠습니다.</span>
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnM line" @click="popupTrigger03 = false">닫기</button>
          <button class="btnM" @click="popupTrigger03 = false">신청</button>
        </div>
      </template>
    </Popup>
    <!-- //입고 안내문자 신청 -->
    <ImgPopup v-if='imgPopTrigger01' @close="imgPopTrigger01 = false">
      <div slot="modalbody">
        <img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" alt=""/>
      </div>
    </ImgPopup>
    <ImgPopup v-if='imgPopTrigger02' @close="imgPopTrigger02 = false">
      <div slot="modalbody">
        <img :src="require(`@/assets/images/thumbnail/@tmp_img02.png`)" alt=""/>
      </div>
    </ImgPopup>
    <!-- //Popup -->

    <!-- 모바일용 결제내역 -->
    <div id="buyFloating" :class="{on:buyFloatingTrigger == true}" v-if="this.mobile">
      <div class="buyOpnerBack"><button class="buyOpner" @click="buyFloatingTrigger = !buyFloatingTrigger">여닫기</button></div>
      <!-- 데이터 영역 -->
      <div class="buyTemplate">
        <!-- 쌤 Mall 디바이스 (과목선택 있을 경우)  -->
        <div class="buySet">
          <dl>
            <dt>주문수량</dt>
            <dd>
              <span class="countBoxArrow">
                <select name="count">
                  <option value="1"selected="selected">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </span>
            </dd>
          </dl>
          <dl>
            <dt>정가</dt>
            <dd><span class="price"><strong>2,712,000<i>원</i></strong></span></dd>
          </dl>
          <dl>
            <dt>판매가</dt>
            <dd>
              <span class="price"><em>10<b>%</b></em><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <div class="choiceArea">
            <div class="totalChoice">
              <strong class="lec">강좌 선택</strong>
            </div>
            <div class="eachChoice">
              <span class="radioSet">
                <input type="radio" name="choiceLec" />
                <label>
                  <i></i><em class="tt">[중등중국어/김길동] 키위 이론반</em>
                  <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>172,000<i>원</i></strong></span>
                </label>
              </span>
              <span class="radioSet">
                <input type="radio" name="choiceLec" />
                <label>
                  <i></i><em class="tt">[중등수학/홍길동] 키위 이론반</em>
                  <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>172,000<i>원</i></strong></span>
                </label>
              </span>
              <span class="radioSet">
                <input type="radio" name="choiceLec" />
                <label>
                  <i></i><em class="tt">[교육학/김현] 키위 이론반</em>
                  <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>172,000<i>원</i></strong></span>
                </label>
              </span>
            </div>
            <dl>
              <dt>수강료</dt>
              <dd>
                <span class="price"><del>193,000</del><strong>172,000<i>원</i></strong></span>
              </dd>
            </dl>
          </div>
          <dl>
            <dt>배송비</dt>
            <dd>무료 <button @click="deliveryInfoPopTrigger = true">?</button></dd>
          </dl>
          <dl class="total">
            <dt>총 결제 금액</dt>
            <dd>
              <span class="price"><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
        </div>
        <!-- //쌤 Mall 디바이스 (과목선택 있을 경우)  -->
      </div>
      <!-- //데이터 영역 -->
      <div class="buyBtnSet">
        <button class="btnL red" v-if="!buyFloatingTrigger" @click="buyFloatingTrigger = !buyFloatingTrigger">구매하기</button>
        <span v-if="buyFloatingTrigger">
          <button class="btnL redline" @click="popupTrigger01 = true">장바구니</button>
          <button class="btnL red" @click="popupTrigger02 = true">즉시결제</button>
        </span>
      </div>
    </div>
    <!-- //데이터 결제내역 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import MallDiscount from '@/views/ssammall/MallDiscount.vue';

export default {
  mixins: [Mixin],
  name: 'BookView',
  components: {
    MallDiscount
  },
  data() {
    return {
      openDiscount: true,
      buyFloatingTrigger:false,
      popupTrigger01: false,
      popupTrigger02: false,
      popupTrigger03: false,
      imgPopTrigger01: false,
      imgPopTrigger02: false,
      currentTab: 0,
      openDetail: false,
      reviewMore01: true,
      reviewMore02: true,
      reviewMore03: true,
      reviewMore04: true,
      reviewMore05: true,
      reviewMore06: true,
      reviewMore07: true,
      quickLoc: 0,
      productMoreTxt: '더보기',
      reviewMoreTxt01: '접기',
      reviewMoreTxt02: '접기',
      reviewMoreTxt03: '접기',
      reviewMoreTxt04: '접기',
      reviewMoreTxt05: '접기',
      reviewMoreTxt06: '접기',
      reviewMoreTxt07: '접기',
      isLec: false,
      deviceLectureOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        scrollbar: {
          el: ".deviceList.withLecCase .swiper-scrollbar",
          hide: false,
          draggable: true,
        }
      },
    }
  },
  methods: {
    detailToggle() {
      if (this.openDetail) {
        this.openDetail = false;
        this.productMoreTxt = '더보기';
      } else {
        this.openDetail = true;
        this.productMoreTxt = '접기';
      }
    },
    reviewToggle01() {
      if (this.reviewMore01) {
        this.reviewMore01 = false;
        this.reviewMoreTxt01 = '더보기';
      } else {
        this.reviewMore01 = true;
        this.reviewMoreTxt01 = '접기';
      }
    },
    reviewToggle02() {
      if (this.reviewMore02) {
        this.reviewMore02 = false;
        this.reviewMoreTxt02 = '더보기';
      } else {
        this.reviewMore02 = true;
        this.reviewMoreTxt02 = '접기';
      }
    },
    reviewToggle03() {
      if (this.reviewMore03) {
        this.reviewMore03 = false;
        this.reviewMoreTxt03 = '더보기';
      } else {
        this.reviewMore03 = true;
        this.reviewMoreTxt03 = '접기';
      }
    },
    reviewToggle04() {
      if (this.reviewMore04) {
        this.reviewMore04 = false;
        this.reviewMoreTxt04 = '더보기';
      } else {
        this.reviewMore04 = true;
        this.reviewMoreTxt04 = '접기';
      }
    },
    reviewToggle05() {
      if (this.reviewMore05) {
        this.reviewMore05 = false;
        this.reviewMoreTxt05 = '더보기';
      } else {
        this.reviewMore05 = true;
        this.reviewMoreTxt05 = '접기';
      }
    },
    reviewToggle06() {
      if (this.reviewMore06) {
        this.reviewMore06 = false;
        this.reviewMoreTxt06 = '더보기';
      } else {
        this.reviewMore06 = true;
        this.reviewMoreTxt06 = '접기';
      }
    },
    reviewToggle07() {
      if (this.reviewMore07) {
        this.reviewMore07 = false;
        this.reviewMoreTxt07 = '더보기';
        this.openDiscount = false;
      } else {
        this.reviewMore07 = true;
        this.reviewMoreTxt07 = '접기';
        this.openDiscount = true;
      }
    },
    gotoMallView(refName) {
      var element = this.$refs[refName];
      var topPos = element.offsetTop + 100;
      window.scrollTo({
        top: topPos,
        left: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
      let introLoc = document.querySelector("#intro").offsetTop;
      let listLoc = document.querySelector("#list").offsetTop;
      let otherLoc = document.querySelector("#deviceLecture").offsetTop;
      let reviewLoc = document.querySelector("#review").offsetTop;

      if (introLoc <= scrollLocation && listLoc > scrollLocation) {
        this.currentTab = 0;
      } else if (listLoc <= scrollLocation && otherLoc > scrollLocation) {
        this.currentTab = 1;
      } else if (otherLoc <= scrollLocation && reviewLoc > scrollLocation) {
        this.currentTab = 2;
      } else if (reviewLoc <= scrollLocation) {
        this.currentTab = 3;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true);
  },
}
</script>
