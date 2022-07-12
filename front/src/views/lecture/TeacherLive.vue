<template lang="html">
  <div>
    <div class="lecContainer lecSpace">
      <!-- 강의가 없을 경우 -->
      <div class="comment noList">
        <div class="commentBox">
          <ul>
            <li>
              <div>
                <em>등록된 라이브 강의가 없습니다.</em>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- //강의가 없을 경우 -->
      <div class="onlineMenu" id="liveKindBtn">
        <div>
          <span><button :class="{on:lecKindTab===1}" @click="gotoLive('lecKindTrigger01')" id="liveKindBtn01">패키지</button></span>
          <span><button :class="{on:lecKindTab===2}" @click="gotoLive('lecKindTrigger02')" id="liveKindBtn02">이론강의</button></span>
          <span><button :class="{on:lecKindTab===3}" @click="gotoLive('lecKindTrigger03')" id="liveKindBtn03">문제풀이</button></span>
          <span><button :class="{on:lecKindTab===4}" @click="gotoLive('lecKindTrigger04')" id="liveKindBtn04">모의고사</button></span>
          <span><button :class="{on:lecKindTab===5}" @click="gotoLive('lecKindTrigger05')" id="liveKindBtn05">면접실연</button></span>
          <span><button :class="{on:lecKindTab===6}" @click="gotoLive('lecKindTrigger06')" id="liveKindBtn06">기타특강</button></span>
          <span><button :class="{on:lecKindTab===7}" @click="gotoLive('lecKindTrigger07')" id="liveKindBtn07">설명회</button></span>
          <span><button :class="{on:lecKindTab===8}" @click="gotoLive('lecKindTrigger08')" id="liveKindBtn08">사례발표</button></span>
        </div>
      </div><!-- 20220308 수정 : 추가 -->
      <!---->
      <div class="lecContents">
        <p class="guideBox info">라이브 강의의 경우 학원에서 교재를 구매해 주세요.</p>
        <!---->
        <div class="subTit" id="liveKind01" ref="lecKindTrigger01"><h3>연간 쌤팩 및 패키지</h3></div><!-- 20220308 수정 : id, ref 추가 -->
        <div class="ssamLecList">
          <ul>
            <!--Loop-->
            <li>
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet ing">신청중</em></span>
                </span>
                <div class="lecTt">
                  <router-link to="/mkup/lecture/teacher/live">
                    <span class="lecUnit">
                      <em class="iLocSet live">라이브</em>
                      <em class="iPro">패키지</em>
                      <em class="iSet">2021</em>
                    </span>
                    <strong class="tt">
                      연간쌤팩 베이직
                      <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                    </strong>
                  </router-link>
                </div>
                <div class="choice">
                  <span class="priceCheck">
                    <input type="checkbox" id="price0" checked />
                    <label for="price0">
                      <i></i><em>강좌(2)</em>
                      <span class="price">
                        <del>2,568,000</del>
                        <strong>1,356,600<i>원</i></strong>
                      </span>
                    </label>
                  </span>
                  <span class="priceCheck">
                    <input type="checkbox" id="price01" disabled />
                    <label for="price01">
                      <i></i><em>교재(1)</em>
                      <span class="notOnline">
                        학원에서 구매가능
                      </span>
                    </label>
                  </span>
                </div>
                <div class="lecBtnSet">
                  <button class="btnPgOpner" :class="{on:toggleTrigger11===true}" @click="toggleTrigger11 = !toggleTrigger11">포함 강좌 및 교재</button>
                  <button @click="benefitsPop = true">수강혜택</button>
                  <button @click="discountTipsPop = true">수강할인 팁</button>
                </div>
              </div>
              <div class="inPackage" :class="{on:toggleTrigger11===true}">
                <div class="widthList">
                  <ol>
                    <!--Loop-->
                    <li>
                      <div class="singleLec"><!-- 패키지 내 단과일 경우 -->
                        <div class="item">
                          <span class="tL">
                            <em class="iPro">강좌 1</em>
                            <strong>키위 마인드맵반
                            <i class="division">면접실연</i></strong>
                          </span>
                          <span class="tR">
                            <span class="lecLimit">월, 목 9:30~13:00</span>
                            <span class="lecLimit red">개강 : 2021-05-03</span>
                          </span>
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
                          <span class="notOnline">학원에서 구매가능</span>
                        </span>
                      </div>
                    </li>
                    <!--//Loop-->
                    <li>
                      <div class="singleLec"><!-- 패키지 내 단과일 경우 -->
                        <div class="item">
                          <span class="tL">
                            <em class="iPro">강좌 2</em>
                            <strong>키위 최종 모의고사반
                            <i class="division">기타특강</i></strong>
                          </span>
                          <span class="tR">
                            <span class="lecLimit">월, 목 9:30~13:00</span>
                            <span class="lecLimit red">개강 : 2021-05-03</span>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ol>
                  <div class="openerLine"><button @click="toggleTrigger11 = !toggleTrigger11">포함 강좌 및 교재</button></div>
                </div>
              </div>
            </li>
            <!--//Loop-->
            <li>
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet ing">신청중</em></span>
                </span>
                <div class="lecTt">
                  <router-link to="/mkup/lecture/teacher/live">
                    <span class="lecUnit">
                      <em class="iLocSet live">라이브</em>
                      <em class="iPro">패키지</em>
                      <em class="iSet">2021</em>
                      <em class="iSet red">신규개설</em>
                    </span>
                    <strong class="tt">
                      연간쌤팩 프리미엄
                      <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                    </strong>
                  </router-link>
                </div>
                <div class="choice">
                  <span class="priceCheck">
                    <input type="checkbox" id="price0" checked />
                    <label for="price0">
                      <i></i><em>강좌(5)</em>
                      <span class="price">
                        <del>2,568,000</del>
                        <strong>1,356,600<i>원</i></strong>
                      </span>
                    </label>
                  </span>
                  <span class="priceCheck">
                    <input type="checkbox" id="price01" disabled />
                    <label for="price01">
                      <i></i><em>교재(5)</em>
                      <span class="notOnline">
                        학원에서 구매가능
                      </span>
                    </label>
                  </span>
                </div>
                <div class="lecBtnSet">
                  <button class="btnPgOpner" :class="{on:toggleTrigger12===true}" @click="toggleTrigger12 = !toggleTrigger12">포함 강좌 및 교재</button>
                </div>
              </div>
              <div class="inPackage" :class="{on:toggleTrigger12===true}">
                <div class="widthList">
                  <ol>
                    <!--Loop-->
                    <li>
                      <div class="singleLec">
                        <div class="item">
                          <span class="tL">
                            <em class="iPro">강좌 1</em>
                            <strong>그린키위반(기본반)
                            <i class="division">이론강의</i></strong>
                          </span>
                          <span class="tR">
                            <span class="lecLimit">월, 목 9:30~13:00</span>
                            <span class="lecLimit red">개강 : 2021-05-03</span>
                          </span>
                        </div>
                      </div>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro bonus">보너스</em>
                          <strong>그린키위반(한국교육사, 서양교육사)</strong>
                        </span>
                      </div>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro book">교재</em>
                          <strong>그린키위 교육학(기본)</strong>
                        </span>
                        <span class="tR">
                          <span class="price">
                            <del>2,568,000</del>
                            <strong>1,356,600<i>원</i></strong>
                          </span>
                          <span class="notOnline">학원에서 구매가능</span>
                        </span>
                      </div>
                    </li>
                    <!--//Loop-->
                    <li>
                      <div class="singleLec">
                        <div class="item">
                          <span class="tL">
                            <em class="iPro">강좌 2</em>
                            <strong>골드키위반(심화반)
                            <i class="division">문제풀이</i></strong>
                          </span>
                          <span class="tR">
                            <span class="lecLimit">월, 목 9:30~13:00</span>
                            <span class="lecLimit red">개강 : 2021-05-03</span>
                          </span>
                        </div>
                      </div>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro book">교재</em>
                          <strong>골드키위 교육학(심화-상)</strong>
                        </span>
                        <span class="tR">
                          <span class="price">
                            <del>2,568,000</del>
                            <strong>1,356,600<i>원</i></strong>
                          </span>
                          <span class="notOnline">학원에서 구매가능</span>
                        </span>
                      </div>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro book">교재</em>
                          <strong>골드키위 교육학(심화-하)</strong>
                        </span>
                        <span class="tR">
                          <span class="price">
                            <del>2,568,000</del>
                            <strong>1,356,600<i>원</i></strong>
                          </span>
                          <span class="notOnline">학원에서 구매가능</span>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="singleLec">
                        <div class="item">
                          <span class="tL">
                            <em class="iPro">강좌 3</em>
                            <strong>키위 기출분석반
                            <i class="division">모의고사</i></strong>
                          </span>
                          <span class="tR">
                            <span class="lecLimit">월, 목 9:30~13:00</span>
                            <span class="lecLimit red">개강 : 2021-05-03</span>
                          </span>
                        </div>
                      </div>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro book">교재</em>
                          <strong>키위 기출문제모음</strong>
                        </span>
                        <span class="tR">
                          <span class="price">
                            <del>2,568,000</del>
                            <strong>1,356,600<i>원</i></strong>
                          </span>
                          <span class="notOnline">학원에서 구매가능</span>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="singleLec">
                        <div class="item">
                          <span class="tL">
                            <em class="iPro">강좌 4</em>
                            <strong>키위 마인드맵반
                            <i class="division">면접실연</i></strong>
                          </span>
                          <span class="tR">
                            <span class="lecLimit">월, 목 9:30~13:00</span>
                            <span class="lecLimit red">개강 : 2021-05-03</span>
                          </span>
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
                          <span class="notOnline">학원에서 구매가능</span>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="singleLec">
                        <div class="item">
                          <span class="tL">
                            <em class="iPro">강좌 5</em>
                            <strong>키위 최종 모의고사반
                            <i class="division">기타특강</i></strong>
                          </span>
                          <span class="tR">
                            <span class="lecLimit">월, 목 9:30~13:00</span>
                            <span class="lecLimit red">개강 : 2021-05-03</span>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro bonus">보너스</em>
                          <strong>그린키위반(한국교육사, 서양교육사)<i class="division">기타특강</i></strong>
                        </span>
                      </div>
                    </li>
                    <li>
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
                          <span class="notOnline">학원에서 구매가능</span>
                        </span>
                      </div>
                    </li>
                  </ol>
                  <div class="openerLine"><button @click="toggleTrigger12 = !toggleTrigger12">포함 강좌 및 교재</button></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!---->
        <div class="subTit" id="liveKind02" ref="lecKindTrigger02"><h3>이론강의</h3></div><!-- 20220308 수정 : id, ref 추가 -->
        <div class="ssamLecList">
          <ul>
            <!--Loop-->
            <li>
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet ing">신청중</em></span>
                </span>
                <div class="lecTt">
                  <router-link to="/mkup/lecture/teacher/live2">
                    <span class="lecUnit">
                      <em class="iLocSet live">라이브</em>
                      <em class="iPro">단과</em>
                      <em class="iSet">2021</em>
                      <em class="iSet red">신규개설</em>
                      <span class="iSetLine" v-if="!this.mobile">
                        <em>첨삭</em>
                        <em>PC+모바일</em>
                        <em>인패키지</em>
                      </span>
                    </span>
                    <strong class="tt">
                      그린키위반(한국교육사, 서양교육사) 강좌의 타이틀이 길어지면 2~N행으로 확장이 됩니다.<i class="division">이론강의</i>
                      <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                    </strong>
                    <span class="lecLimit">월, 목 9:30~13:00</span>
                    <span class="lecLimit red">개강 : 2021-05-03</span>
                    <span class="iSetLine" v-if="this.mobile">
                      <em>첨삭</em>
                      <em>PC+모바일</em>
                      <em>인패키지</em>
                    </span>
                  </router-link>
                </div>
                <div class="choice">
                  <span class="priceCheck">
                    <input type="checkbox" id="price0" checked />
                    <label for="price0">
                      <i></i><em>강좌(1)</em>
                      <span class="price">
                        <del>2,568,000</del>
                        <strong>1,356,600<i>원</i></strong>
                      </span>
                    </label>
                  </span>
                  <span class="priceCheck">
                    <input type="checkbox" id="price01" disabled />
                    <label for="price01">
                      <i></i><em>교재(1)</em>
                      <span class="notOnline">
                        학원에서 구매가능
                      </span>
                    </label>
                  </span>
                </div>
                <!---->
                <div class="lecBtnSet">
                  <button @click="discountTipsPop = true">수강할인 팁</button>
                </div>
              </div>
              <!---->
              <div class="inbLecture">
                <div class="widthList">
                  <ol>
                    <li>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro bonus">보너스</em>
                          <strong>그린키위반(한국교육사, 서양교육사)</strong>
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
            <!--//Loop-->
            <li class="unOpen"><!-- 미개강일 경우 -->
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet complete">신청마감</em></span>
                </span>
                <div class="lecTt">
                  <router-link to="">
                    <span class="lecUnit">
                      <em class="iLocSet live">라이브</em>
                      <em class="iPro">단과</em>
                      <em class="iSet">2021</em>
                      <em class="iSet red">신규개설</em>
                      <span class="iSetLine" v-if="!this.mobile">
                        <em>첨삭</em>
                        <em>PC+모바일</em>
                        <em>인패키지</em>
                      </span>
                    </span>
                    <strong class="tt">
                      연간쌤팩 베이직<i class="division">이론강의</i>
                      <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                    </strong>
                    <span class="lecLimit">월, 목 9:30~13:00</span>
                    <span class="lecLimit red">개강 : 2021-05-03</span>
                    <span class="iSetLine" v-if="this.mobile">
                      <em>첨삭</em>
                      <em>PC+모바일</em>
                      <em>인패키지</em>
                    </span>
                  </router-link>
                </div>
                <div class="choice">
                  <span class="priceCheck">
                    <input type="checkbox" id="price0" disabled />
                    <label for="price0">
                      <i></i><em>강좌(1)</em>
                      <span class="price">
                        <del>2,568,000</del>
                        <strong>1,356,600<i>원</i></strong>
                      </span>
                    </label>
                  </span>
                  <span class="priceCheck">
                    <input type="checkbox" id="price01" disabled />
                    <label for="price01">
                      <i></i><em>교재(2)</em>
                      <span class="notOnline">
                        학원에서 구매가능
                      </span>
                    </label>
                  </span>
                </div>
                <!---->
                <div class="lecBtnSet">
                  <button @click="benefitsPop = true">수강혜택</button>
                  <button @click="discountTipsPop = true">수강할인 팁</button>
                </div>
              </div>
              <!---->
              <div class="inbLecture">
                <div class="widthList">
                  <ol>
                    <li>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro book">교재</em>
                          <strong>골드키위 교육학(심화-상)</strong>
                        </span>
                        <span class="tR">
                          <span class="price">
                            <del>2,568,000</del>
                            <strong>1,356,600<i>원</i></strong>
                          </span>
                          <span class="notOnline">(학원에서 구매가능)</span>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro book">교재</em>
                          골드키위 교육학(심화-하)
                        </span>
                        <span class="tR">
                          <span class="price">
                            <del>2,568,000</del>
                            <strong>1,356,600<i>원</i></strong>
                          </span>
                          <span class="notOnline">(학원에서 구매가능)</span>
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!---->
        <div class="subTit" id="liveKind03" ref="lecKindTrigger03"><h3>문제풀이</h3></div><!-- 20220308 수정 : id, ref 추가 -->
        <div class="ssamLecList">
          <ul>
            <!--Loop-->
            <li class="unOpen">
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet complete">신청마감</em></span>
                </span>
                <div class="lecTt">
                  <router-link to="">
                    <span class="lecUnit">
                      <em class="iLocSet live">라이브</em>
                      <em class="iPro">단과</em>
                      <em class="iSet">2021</em>
                      <em class="iSet red">신규개설</em>
                      <span class="iSetLine" v-if="!this.mobile">
                        <em>첨삭</em>
                        <em>PC+모바일</em>
                        <em>인패키지</em>
                      </span>
                    </span>
                    <strong class="tt">
                      그린키위반(한국교육사, 서양교육사) 강좌의 타이틀이 길어지면 2~N행으로 확장이 됩니다.<i class="division">문제풀이</i>
                      <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                    </strong>
                    <span class="lecLimit">월, 목 9:30~13:00</span>
                    <span class="lecLimit red">개강 : 2021-05-03</span>
                    <span class="iSetLine" v-if="this.mobile">
                      <em>첨삭</em>
                      <em>PC+모바일</em>
                      <em>인패키지</em>
                    </span>
                  </router-link>
                </div>
                <div class="choice">
                  <span class="priceCheck">
                    <input type="checkbox" id="price0" disabled />
                    <label for="price0">
                      <i></i><em>강좌(1)</em>
                      <span class="price">
                        <del>2,568,000</del>
                        <strong>1,356,600<i>원</i></strong>
                      </span>
                    </label>
                  </span>
                  <span class="priceCheck">
                    <input type="checkbox" id="price01" disabled />
                    <label for="price01">
                      <i></i><em>교재(1)</em>
                      <span class="notOnline">
                        학원에서 구매가능
                      </span>
                    </label>
                  </span>
                </div>
                <!---->
                <div class="lecBtnSet">
                  <button @click="discountTipsPop = true">수강할인 팁</button>
                </div>
              </div>
              <!---->
              <div class="inbLecture">
                <div class="widthList">
                  <ol>
                    <li>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro bonus">보너스</em>
                          <strong>그린키위반(한국교육사, 서양교육사)</strong>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro book">교재</em>
                          <strong>골드키위 교육학(심화-상)</strong>
                        </span>
                        <span class="tR">
                          <span class="price">
                            <del>2,568,000</del>
                            <strong>1,356,600<i>원</i></strong>
                          </span>
                          <span class="notOnline">(학원에서 구매가능)</span>
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
            <!--//Loop-->
            <li>
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet apply">신청예정</em></span>
                </span>
                <div class="lecTt">
                  <router-link to="/mkup/lecture/teacher/live2">
                    <span class="lecUnit">
                      <em class="iLocSet live">라이브</em>
                      <em class="iPro">단과</em>
                      <em class="iSet">2021</em>
                      <em class="iSet red">신규개설</em>
                      <span class="iSetLine" v-if="!this.mobile">
                        <em>첨삭</em>
                        <em>PC+모바일</em>
                        <em>인패키지</em>
                      </span>
                    </span>
                    <strong class="tt">
                      연간쌤팩 베이직<i class="division">문제풀이</i>
                      <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                    </strong>
                    <span class="lecLimit">월, 목 9:30~13:00</span>
                    <span class="lecLimit">신청시작일 : 2021-05-03</span>
                    <span class="lecLimit red multy">개강 : 2021-05-03</span>
                    <span class="iSetLine" v-if="!this.mobile">
                      <em>첨삭</em>
                      <em>PC+모바일</em>
                      <em>인패키지</em>
                    </span>
                  </router-link>
                </div>
                <div class="choice">
                  <span class="priceCheck">
                    <input type="checkbox" id="price0" />
                    <label for="price0">
                      <i></i><em>강좌(1)</em>
                      <span class="price">
                        <del>2,568,000</del>
                        <strong>1,356,600<i>원</i></strong>
                      </span>
                    </label>
                  </span>
                  <span class="priceCheck">
                    <input type="checkbox" id="price01" disabled />
                    <label for="price01">
                      <i></i><em>교재(2)</em>
                      <span class="notOnline">
                        학원에서 구매가능
                      </span>
                    </label>
                  </span>
                </div>
                <!---->
                <div class="lecBtnSet">
                  <button @click="discountTipsPop = true">수강할인 팁</button>
                </div>
              </div>
              <!---->
              <div class="inbLecture">
                <div class="widthList">
                  <ol>
                    <li>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro book">교재</em>
                          골드키위 교육학(심화-상)
                        </span>
                        <span class="tR">
                          <span class="price">
                            <del>2,568,000</del>
                            <strong>1,356,600<i>원</i></strong>
                          </span>
                          <span class="notOnline">(학원에서 구매가능)</span>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro book">교재</em>
                          골드키위 교육학(심화-하)
                        </span>
                        <span class="tR">
                          <span class="price">
                            <del>2,568,000</del>
                            <strong>1,356,600<i>원</i></strong>
                          </span>
                          <span class="notOnline">(학원에서 구매가능)</span>
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!---->
        <div class="subTit" id="liveKind04" ref="lecKindTrigger04"><h3>모의고사</h3></div><!-- 20220308 수정 : id, ref 추가 -->
        <div class="ssamLecList">
          <ul>
            <!--Loop-->
            <li class="unOpen">
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet complete">신청마감</em></span>
                </span>
                <div class="lecTt">
                  <router-link to="">
                    <span class="lecUnit">
                      <em class="iLocSet live">라이브</em>
                      <em class="iPro">단과</em>
                      <em class="iSet">2021</em>
                      <span class="iSetLine" v-if="!this.mobile">
                        <em>첨삭</em>
                        <em>PC+모바일</em>
                        <em>인패키지</em>
                      </span>
                    </span>
                    <strong class="tt">
                      그린키위반(한국교육사, 서양교육사) 강좌의 타이틀이 길어지면 2~N행으로 확장이 됩니다.<i class="division">모의고사</i>
                      <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                    </strong>
                    <span class="lecLimit">월, 목 9:30~13:00</span>
                    <span class="lecLimit red">개강 : 2021-05-03</span>
                    <span class="iSetLine" v-if="this.mobile">
                      <em>첨삭</em>
                      <em>PC+모바일</em>
                      <em>인패키지</em>
                    </span>
                  </router-link>
                </div>
                <div class="choice">
                  <span class="priceCheck">
                    <input type="checkbox" id="price0" disabled />
                    <label for="price0">
                      <i></i><em>강좌(1)</em>
                      <span class="price">
                        <del>2,568,000</del>
                        <strong>1,356,600<i>원</i></strong>
                      </span>
                    </label>
                  </span>
                  <span class="priceCheck">
                    <input type="checkbox" id="price01" disabled />
                    <label for="price01">
                      <i></i><em>교재(1)</em>
                      <span class="notOnline">
                        학원에서 구매가능
                      </span>
                    </label>
                  </span>
                </div>
                <!---->
                <div class="lecBtnSet">
                  <button @click="discountTipsPop = true">수강할인 팁</button>
                </div>
              </div>
              <!---->
              <div class="inbLecture">
                <div class="widthList">
                  <ol>
                    <li>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro book">교재</em>
                          <strong>골드키위 교육학(심화-상)</strong>
                        </span>
                        <span class="tR">
                          <span class="price">
                            <del>2,568,000</del>
                            <strong>1,356,600<i>원</i></strong>
                          </span>
                          <span class="notOnline">(학원에서 구매가능)</span>
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
            <!--//Loop-->
            <li class="unOpen">
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet complete">신청마감</em></span>
                </span>
                <div class="lecTt">
                  <router-link to="">
                    <span class="lecUnit">
                      <em class="iLocSet live">라이브</em>
                      <em class="iPro">단과</em>
                      <em class="iSet">2021</em>
                      <span class="iSetLine" v-if="!this.mobile">
                        <em>첨삭</em>
                        <em>PC+모바일</em>
                        <em>인패키지</em>
                      </span>
                    </span>
                    <strong class="tt">
                      연간쌤팩 베이직<i class="division">모의고사</i>
                      <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                    </strong>
                    <span class="lecLimit">월, 목 9:30~13:00</span>
                    <span class="lecLimit red">개강 : 2021-05-03</span>
                    <span class="iSetLine" v-if="this.mobile">
                      <em>첨삭</em>
                      <em>PC+모바일</em>
                      <em>인패키지</em>
                    </span>
                  </router-link>
                </div>
                <div class="choice">
                  <span class="priceCheck">
                    <input type="checkbox" id="price0" disabled />
                    <label for="price0">
                      <i></i><em>강좌(1)</em>
                      <span class="price">
                        <del>2,568,000</del>
                        <strong>1,356,600<i>원</i></strong>
                      </span>
                    </label>
                  </span>
                  <span class="priceCheck">
                    <input type="checkbox" id="price01" disabled />
                    <label for="price01">
                      <i></i><em>교재(1)</em>
                      <span class="notOnline">
                        학원에서 구매가능
                      </span>
                    </label>
                  </span>
                </div>
                <!---->
                <div class="lecBtnSet">
                  <button @click="discountTipsPop = true">수강할인 팁</button>
                </div>
              </div>
              <!---->
              <div class="inbLecture">
                <div class="widthList">
                  <ol>
                    <li>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro book">교재</em>
                          <strong>골드키위 교육학(심화-하)</strong>
                        </span>
                        <span class="tR">
                          <span class="price">
                            <del>2,568,000</del>
                            <strong>1,356,600<i>원</i></strong>
                          </span>
                          <span class="notOnline">(학원에서 구매가능)</span>
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!---->
        <div class="subTit" id="liveKind05" ref="lecKindTrigger05"><h3>면접실연</h3></div><!-- 20220308 수정 : id, ref 추가 -->
        <div class="ssamLecList">
          <ul>
            <!--Loop-->
            <li class="unOpen">
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet complete">신청마감</em></span>
                </span>
                <div class="lecTt">
                  <router-link to="">
                    <span class="lecUnit">
                      <em class="iLocSet live">라이브</em>
                      <em class="iPro">단과</em>
                      <em class="iSet">2021</em>
                      <span class="iSetLine" v-if="!this.mobile">
                        <em>첨삭</em>
                        <em>PC+모바일</em>
                        <em>인패키지</em>
                      </span>
                    </span>
                    <strong class="tt">
                      그린키위반(한국교육사, 서양교육사) 강좌의 타이틀이 길어지면 2~N행으로 확장이 됩니다.  <i class="division">면접실연</i>
                      <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                    </strong>
                    <span class="lecLimit">월, 목 9:30~13:00</span>
                    <span class="lecLimit red">개강 : 2021-05-03</span>
                    <span class="iSetLine" v-if="this.mobile">
                      <em>첨삭</em>
                      <em>PC+모바일</em>
                      <em>인패키지</em>
                    </span>
                  </router-link>
                </div>
                <div class="choice">
                  <span class="priceCheck">
                    <input type="checkbox" id="price0" disabled />
                    <label for="price0">
                      <i></i><em>강좌(1)</em>
                      <span class="price">
                        <del>2,568,000</del>
                        <strong>1,356,600<i>원</i></strong>
                      </span>
                    </label>
                  </span>
                  <span class="priceCheck">
                    <input type="checkbox" id="price01" disabled />
                    <label for="price01">
                      <i></i><em>교재(1)</em>
                      <span class="notOnline">
                        학원에서 구매가능
                      </span>
                    </label>
                  </span>
                </div>
                <!---->
                <div class="lecBtnSet">
                  <button @click="discountTipsPop = true">수강할인 팁</button>
                </div>
              </div>
              <!---->
              <div class="inbLecture">
                <div class="widthList">
                  <ol>
                    <li>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro book">교재</em>
                          골드키위 교육학(심화-상)
                        </span>
                        <span class="tR">
                          <span class="price">
                            <del>2,568,000</del>
                            <strong>1,356,600<i>원</i></strong>
                          </span>
                          <span class="notOnline">(학원에서 구매가능)</span>
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
            <!--//Loop-->
            <li class="unOpen">
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet complete">신청마감</em></span>
                </span>
                <div class="lecTt">
                  <router-link to="">
                    <span class="lecUnit">
                      <em class="iLocSet live">라이브</em>
                      <em class="iPro">단과</em>
                      <em class="iSet">2021</em>
                      <span class="iSetLine" v-if="!this.mobile">
                        <em>첨삭</em>
                        <em>PC+모바일</em>
                        <em>인패키지</em>
                      </span>
                    </span>
                    <strong class="tt">
                      연간쌤팩 베이직<i class="division">면접실연</i>
                      <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                    </strong>
                    <span class="lecLimit">월, 목 9:30~13:00</span>
                    <span class="lecLimit red">개강 : 2021-05-03</span>
                    <span class="iSetLine" v-if="this.mobile">
                      <em>첨삭</em>
                      <em>PC+모바일</em>
                      <em>인패키지</em>
                    </span>
                  </router-link>
                </div>
                <div class="choice">
                  <span class="priceCheck">
                    <input type="checkbox" id="price0" disabled />
                    <label for="price0">
                      <i></i><em>강좌(1)</em>
                      <span class="price">
                        <del>2,568,000</del>
                        <strong>1,356,600<i>원</i></strong>
                      </span>
                    </label>
                  </span>
                  <span class="priceCheck">
                    <input type="checkbox" id="price01" disabled />
                    <label for="price01">
                      <i></i><em>교재(1)</em>
                      <span class="notOnline">
                        학원에서 구매가능
                      </span>
                    </label>
                  </span>
                </div>
                <!---->
                <div class="lecBtnSet">
                  <button @click="discountTipsPop = true">수강할인 팁</button>
                </div>
              </div>
              <!---->
              <div class="inbLecture">
                <div class="widthList">
                  <ol>
                    <li>
                      <div class="item">
                        <span class="tL">
                          <em class="iPro book">교재</em>
                          <strong>골드키위 교육학(심화-하)</strong>
                        </span>
                        <span class="tR">
                          <span class="price">
                            <del>2,568,000</del>
                            <strong>1,356,600<i>원</i></strong>
                          </span>
                          <span class="notOnline">(학원에서 구매가능)</span>
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!---->
        <div class="subTit" id="liveKind06" ref="lecKindTrigger06"><h3>기타특강</h3></div><!-- 20220308 수정 : id, ref 추가 -->
        <div class="ssamLecList">
          <ul>
            <!--Loop-->
            <li class="unOpen">
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet complete">신청마감</em></span>
                </span>
                <div class="lecTt">
                  <router-link to="">
                    <span class="lecUnit">
                      <em class="iLocSet live">라이브</em>
                      <em class="iPro">단과</em>
                      <em class="iSet">2021</em>
                      <span class="iSetLine" v-if="!this.mobile">
                        <em>첨삭</em>
                        <em>PC+모바일</em>
                        <em>인패키지</em>
                      </span>
                    </span>
                    <strong class="tt">
                      그린키위반(한국교육사, 서양교육사) 강좌의 타이틀이 길어지면 2~N행으로 확장이 됩니다.<i class="division">기타특강</i>
                      <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                    </strong>
                    <span class="lecLimit">월, 목 9:30~13:00</span>
                    <span class="lecLimit red">개강 : 2021-05-03</span>
                    <span class="iSetLine" v-if="!this.mobile">
                      <em>첨삭</em>
                      <em>PC+모바일</em>
                      <em>인패키지</em>
                    </span>
                  </router-link>
                </div>
                <div class="choice">
                  <span class="priceCheck">
                    <input type="checkbox" id="price0" disabled />
                    <label for="price0">
                      <i></i><em>강좌(1)</em>
                      <span class="price">
                        <del>2,568,000</del>
                        <strong>1,356,600<i>원</i></strong>
                      </span>
                    </label>
                  </span>
                </div>
                <!---->
                <div class="lecBtnSet">
                  <button @click="discountTipsPop = true">수강할인 팁</button>
                </div>
              </div>
              <!---->
            </li>
            <!--//Loop-->
          </ul>
        </div>
        <!---->
        <div class="subTit" id="liveKind07" ref="lecKindTrigger07"><h3>설명회</h3></div><!-- 20220308 수정 : id, ref 추가 -->
        <div class="ssamLecList">
          <ul>
            <!--Loop-->
            <li class="unOpen">
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet complete">신청마감</em></span>
                </span>
                <div class="lecTt">
                  <router-link to="">
                    <span class="lecUnit">
                      <em class="iLocSet live">라이브</em>
                      <em class="iPro">단과</em>
                      <em class="iSet">2021</em>
                      <span class="iSetLine" v-if="!this.mobile">
                        <em>첨삭</em>
                        <em>PC+모바일</em>
                        <em>인패키지</em>
                      </span>
                    </span>
                    <strong class="tt">
                      그린키위반(한국교육사, 서양교육사) 강좌의 타이틀이 길어지면 2~N행으로 확장이 됩니다.<i class="division">기타특강</i>
                      <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                    </strong>
                    <span class="lecLimit">월, 목 9:30~13:00</span>
                    <span class="lecLimit red">개강 : 2021-05-03</span>
                    <span class="iSetLine" v-if="!this.mobile">
                      <em>첨삭</em>
                      <em>PC+모바일</em>
                      <em>인패키지</em>
                    </span>
                  </router-link>
                </div>
                <div class="choice">
                  <span class="priceCheck">
                    <input type="checkbox" id="price07" disabled />
                    <label for="price07">
                      <i></i><em>강좌(1)</em>
                      <span class="price">
                        <del>2,568,000</del>
                        <strong>1,356,600<i>원</i></strong>
                      </span>
                    </label>
                  </span>
                </div>
                <!---->
                <div class="lecBtnSet">
                  <button @click="discountTipsPop = true">수강할인 팁</button>
                </div>
              </div>
              <!---->
            </li>
            <!--//Loop-->
          </ul>
        </div>
        <!---->
        <div class="subTit" id="liveKind08" ref="lecKindTrigger08"><h3>사례발표</h3></div><!-- 20220308 수정 : id, ref 추가 -->
        <div class="ssamLecList">
          <ul>
            <!--Loop-->
            <li class="unOpen">
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet complete">신청마감</em></span>
                </span>
                <div class="lecTt">
                  <router-link to="">
                    <span class="lecUnit">
                      <em class="iLocSet live">라이브</em>
                      <em class="iPro">단과</em>
                      <em class="iSet">2021</em>
                      <span class="iSetLine" v-if="!this.mobile">
                        <em>첨삭</em>
                        <em>PC+모바일</em>
                        <em>인패키지</em>
                      </span>
                    </span>
                    <strong class="tt">
                      그린키위반(한국교육사, 서양교육사) 강좌의 타이틀이 길어지면 2~N행으로 확장이 됩니다.<i class="division">기타특강</i>
                      <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                    </strong>
                    <span class="lecLimit">월, 목 9:30~13:00</span>
                    <span class="lecLimit red">개강 : 2021-05-03</span>
                    <span class="iSetLine" v-if="!this.mobile">
                      <em>첨삭</em>
                      <em>PC+모바일</em>
                      <em>인패키지</em>
                    </span>
                  </router-link>
                </div>
                <div class="choice">
                  <span class="priceCheck">
                    <input type="checkbox" id="price08" disabled />
                    <label for="price08">
                      <i></i><em>강좌(1)</em>
                      <span class="price">
                        <del>2,568,000</del>
                        <strong>1,356,600<i>원</i></strong>
                      </span>
                    </label>
                  </span>
                </div>
                <!---->
                <div class="lecBtnSet">
                  <button @click="discountTipsPop = true">수강할인 팁</button>
                </div>
              </div>
              <!---->
            </li>
            <!--//Loop-->
          </ul>
        </div>
      </div>
      <!--//-->
    </div>
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
    <!-- 마감강좌 안내 팝업 -->
    <Alert v-if='unOpenPopupTrigger' @close="unOpenPopupTrigger = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>이미 신청마감된 강좌입니다.</p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM" @click="unOpenPopupTrigger = false">확인</button>
      </template>
    </Alert>
    <!-- //마감강좌 안내 팝업  -->
    <!-- 신청예정 안내 팝업 -->
    <Alert v-if='applyPopupTrigger' @close="applyPopupTrigger = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>아직 신청기간이 아닙니다.</p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM" @click="applyPopupTrigger = false">확인</button>
      </template>
    </Alert>
    <!-- //신청예정 안내 팝업  -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import TeacherLecDiscount from '@/views/lecture/TeacherLecDiscount.vue';

export default {
  mixins: [Mixin],
  name: 'Teacherlive',
  components: {
    TeacherLecDiscount
  },
  data() {
    return {
      applyPopupTrigger: false,
      unOpenPopupTrigger: false,
      toggleSTrigger:false,
      toggleSTrigger2:false,
      toggleTrigger11: false,
      toggleTrigger12: false,
      benefitsPop:false,
      discountTipsPop:false,
      lecKindTab:1
    }
  },
  methods: {
    gotoLive(refName) {
      var element = this.$refs[refName];
      if(!this.mobile){
        if ( refName === 'lecKindTrigger01'){
          var topPos = element.offsetTop - 67;
        } else {
          var topPos = element.offsetTop;
        }
      } else {
        if ( refName === 'lecKindTrigger01'){
          var topPos = element.offsetTop - 60;
        } else {
          var topPos = element.offsetTop;
        }
      }
      window.scrollTo({
        top: topPos,
        left: 0,
        behavior: 'smooth'
      });
    },
    liveHandleScroll: function() {
      let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
      let liveKind01 = document.getElementById("liveKind01").offsetTop;
      let liveKind02 = document.getElementById("liveKind02").offsetTop - 67;
      let liveKind03 = document.getElementById("liveKind03").offsetTop - 67;
      let liveKind04 = document.getElementById("liveKind04").offsetTop - 67;
      let liveKind05 = document.getElementById("liveKind05").offsetTop - 67;
      let liveKind06 = document.getElementById("liveKind06").offsetTop - 67;
      let liveKind07 = document.getElementById("liveKind07").offsetTop - 67;
      let liveKind08 = document.getElementById("liveKind08").offsetTop - 107;

      if (liveKind01 <= scrollLocation && liveKind02 > scrollLocation) {
        this.lecKindTab = 1;
      } else if (liveKind02 <= scrollLocation && liveKind03 > scrollLocation) {
        this.lecKindTab = 2;
      } else if (liveKind03 <= scrollLocation && liveKind04 > scrollLocation) {
        this.lecKindTab = 3;
      } else if (liveKind04 <= scrollLocation && liveKind05 > scrollLocation) {
        this.lecKindTab = 4;
      } else if (liveKind05 <= scrollLocation && liveKind06 > scrollLocation) {
        this.lecKindTab = 5;
      } else if (liveKind06 <= scrollLocation && liveKind07 > scrollLocation) {
        this.lecKindTab = 6;
      } else if (liveKind07 <= scrollLocation && liveKind08 > scrollLocation) {
        this.lecKindTab = 7;
      } else if (liveKind08 <= scrollLocation) {
        this.lecKindTab = 8;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.liveHandleScroll, true);
  },
  destroyed() {
    window.removeEventListener('scroll', this.liveHandleScroll, true);
  },
}
</script><!-- 20220308 수정 : 스크립트 추가 -->

<style lang="css" scoped>
</style>
