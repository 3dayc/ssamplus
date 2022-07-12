<template lang="html">
  <div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" /> <!-- Pc SNB가 있는 경우 없는 경우에 따라 넣거나 빼주세요 -->
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="layoutBbs"> <!-- class는 반드시 넣어주기 : 작업 시 본 주석은 삭제 -->
          <div class="subTit">
            <h3>일반 목록 예시</h3>
          </div>
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <div class="lgItem itemGroup ig1">
                <div class="lgSubGrid">
                  <span class="lgItem item0"><span class="sorting">사용자 명</span></span>
                  <span class="lgItem item1"><span class="sorting">아이디</span></span>
                  <span class="lgItem item2"><span class="sorting">카테고리</span></span>
                </div>
              </div>
              <span class="lgItem item3">단체</span>
              <div class="lgItem itemGroup ig2">
                <div class="lgSubGrid">
                  <span class="lgItem item4"><span class="sorting">마지막 결제일</span></span>
                  <span class="lgItem item5"><span class="sorting">가입일자</span></span>
                </div>
              </div>
              <span class="lgItem item6">내용</span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <a class="lgSubGrid" href="user_view_waiting.html">
                      <strong class="lgItem item0">내용</strong>
                      <span class="lgItem item1"></span>
                      <span class="lgItem item2"></span>
                    </a>
                  </div>
                  <span class="lgItem item3">내용</span>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4">미 결제</span>
                      <span class="lgItem item5">가입 대기중</span>
                    </span>
                  </div>
                  <span class="lgItem item6">내용</span>
                </li>
                <!--//Loop-->
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <a class="lgSubGrid" href="user_view.html">
                      <strong class="lgItem item0">이민균</strong>
                      <span class="lgItem item1"><em class="mTxt">(</em>mklee70</span>
                      <span class="lgItem item2"><em class="mTxt"> / </em>1970-10-09<em class="mTxt">)</em></span>
                    </a>
                  </div>
                  <span class="lgItem item3">내용</span>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4"><em class="mTit">마지막 결제일</em>2021-06-10</span>
                      <span class="lgItem item5"><em class="mTit">가입일자</em>2021-06-07</span>
                    </span>
                  </div>
                  <span class="lgItem item6">내용</span>
                </li>
                <li class="listGrid noList">
                  <div class="lgItem">등록된 게시글이 없습니다.</div>
                </li>
              </ul>
            </div>
            <!-- //list -->
          </div>
          <!-- //반응형 목록 -->
          <div class="paging">
            <Paginate v-if="!this.mobile" />
            <div class="moreBtnWrap" v-if="this.mobile">
              <button class="mobileMore">더보기</button>
            </div>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit noLine">
            <h3>서브 목록 예시</h3>
          </div>
          <!-- 반응형 목록2 -->
          <div class="resTls subCase">
            <!-- listTitle -->
            <div class="thead listGrid">
              <div class="lgItem itemGroup ig1">
                <div class="lgSubGrid">
                  <span class="lgItem item0"><span class="sorting">사용자 명</span></span>
                  <span class="lgItem item1"><span class="sorting">아이디</span></span>
                  <span class="lgItem item2"><span class="sorting">카테고리</span></span>
                </div>
              </div>
              <span class="lgItem item3">단체</span>
              <div class="lgItem itemGroup ig2">
                <div class="lgSubGrid">
                  <span class="lgItem item4"><span class="sorting">마지막 결제일</span></span>
                  <span class="lgItem item5"><span class="sorting">가입일자</span></span>
                </div>
              </div>
              <span class="lgItem item6">내용</span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <a class="lgSubGrid" href="user_view_waiting.html">
                      <strong class="lgItem item0">내용</strong>
                      <span class="lgItem item1"></span>
                      <span class="lgItem item2"></span>
                    </a>
                  </div>
                  <span class="lgItem item3">내용</span>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4">미 결제</span>
                      <span class="lgItem item5">가입 대기중</span>
                    </span>
                  </div>
                  <span class="lgItem item6">내용</span>
                </li>
                <!--//Loop-->
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <a class="lgSubGrid" href="user_view.html">
                      <strong class="lgItem item0">이민균</strong>
                      <span class="lgItem item1"><em class="mTxt">(</em>mklee70</span>
                      <span class="lgItem item2"><em class="mTxt"> / </em>1970-10-09<em class="mTxt">)</em></span>
                    </a>
                  </div>
                  <span class="lgItem item3">내용</span>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4"><em class="mTit">마지막 결제일</em>2021-06-10</span>
                      <span class="lgItem item5"><em class="mTit">가입일자</em>2021-06-07</span>
                    </span>
                  </div>
                  <span class="lgItem item6">내용</span>
                </li>
              </ul>
            </div>
            <!-- //list -->
          </div>
          <!-- //반응형 목록2 -->
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit noLine">
            <h3>강좌 목록 예시</h3>
          </div>
          <div class="ssamLecList">
            <ul class="myCase">
              <li>
                <div class="lecBasic">
                  <span class="kind">
                    <span>
                      <em class="iSbjSet">교육학</em>
                      <em class="iStartSet continue">연장</em>
                    </span>
                  </span>
                  <div class="lecTt">
                    <router-link to="/mkup/lecture/teacher/online">
                      <em class="ssam"><i>교육학</i><span>김현</span> 선생님</em>
                      <span class="lecUnit">
                        <em class="iStartSet continue">연장</em>
                        <em class="iLocSet online">온라인</em>
                        <em class="iPro bonus">보너스</em>
                        <em class="iMaking ing">제작중</em>
                      </span>
                      <strong class="tt">교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용 <em class="iMaking ing">강의 제작중</em></strong>
                    </router-link>
                    <span class="limitNtime">수강기간 40일 <em>2021-03-01 ~ 2021-03-31</em> <i class="lecTimes">1.4배수</i></span>
                    <div class="ingRate">
                      <span class="rateBar green"><span style="width:75%;"></span></span><em>진도율<strong>4/10강</strong></em> <!-- 제작중일 경우 rateBar green / 제작완료일 경우 rateBar blue  -->
                    </div>
                  </div>
                  <div class="choice">
                    <div class="lecBbsSet">
                      <span>
                        <button class="lecAtt">첨삭게시판</button>
                        <button class="lecData">강의자료</button>
                        <button class="lecReceipt">수강확인증</button>
                      </span>
                    </div>
                    <span class="lecReAddSet">
                      <button>재수강신청</button>
                      <button>연장신청</button>
                      <button>홀딩신청</button>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <br/>
            <ul class="myCase">
              <li>
                <div class="lecBasic">
                  <span class="kind">
                    <span>
                      <em class="iSbjSet">교육학</em>
                      <em class="iApplySet ing">신청중</em>
                    </span>
                  </span>
                  <div class="lecTt">
                    <em class="ssam"><i>교육학</i><span>김현</span> 선생님</em>
                    <span class="lecUnit">
                      <em class="iApplySet ing">신청중</em>
                      <em class="iLocSet idea">이데아</em>
                      <em class="iPro bonus">보너스</em>
                      <em class="iMaking end">제작완료</em>
                    </span>
                    <strong class="tt">교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용</strong>
                    <span class="limitNtime">개강일 <em>2021-03-01 ~ 2021-03-31</em> <em class="red">월, 목 09:00 ~ 13:00</em></span>
                  </div>
                  <div class="choice">
                    <div class="lecBbsSet">
                      <span>
                        <button class="lecAtt">첨삭게시판</button>
                        <button class="lecData">강의자료</button>
                        <button class="lecReceipt">수강확인증</button>
                      </span>
                    </div>
                    <span class="lecReAddSet">
                      <button>재수강신청</button>
                      <button>연장신청</button>
                      <button>홀딩신청</button>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <br /><div class="backBeige"><br /><br /><br /></div><br />
            <ul>
              <li>
                <!---->
                <div class="lecBasic">
                  <span class="kind">
                    <span><em class="iApplySet ing">신청중</em></span>
                  </span>
                  <div class="lecTt">
                    <router-link to="/mkup/lecture/teacher/online">
                      <span class="lecUnit">
                        <em class="iLocSet online">온라인</em>
                        <em class="iSet">패키지</em>
                        <em class="iSet">2021</em>
                      </span>
                      <strong class="tt">
                        교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용
                         <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                      </strong>
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
                  <!---->
                  <div class="lecBtnSet">
                    <button class="btnPgOpner" :class="{on:toggleTrigger===true}" @click="toggleTrigger = !toggleTrigger, toggleOpner($event, 'inPackage01')">포함 강좌 및 교재</button>
                    <button>수강혜택</button>
                  </div>
                </div>
                <!---->
                <div class="inPackage" id="inPackage01">
                  <div class="widthList">
                    <ol>
                      <!--Loop-->
                      <li>
                        <div class="singleLec"> <!--단과 혹은 보너스 일 경우 -->
                          <div class="item">
                            <span class="tL">
                              <em class="iSet">단과</em>
                              <strong>
                                키위 마인드맵반
                                <i class="division">면접실연</i>
                              </strong>
                            </span>
                            <span class="tR">
                              <span class="lecLimit">
                                <em>70일간</em><em>1.4배수</em><em>제작중</em>
                              </span>
                            </span>
                          </div>
                          <div class="lecBtnSet">
                            <button @click="videoPopTrigger01 = true">맛보기</button>
                            <button>강좌소개</button>
                            <button>강좌리스트</button>
                          </div>
                        </div>
                        <div class="item">
                          <span class="tL">
                            <em class="iPro book">교재</em>
                            <strong>
                              키위 마인드맵 설정
                            </strong>
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
                              <em class="iSet">단과</em>
                              <strong>
                                키위 최종 모의고사반
                                <i class="division">기타특강</i>
                              </strong>
                            </span>
                            <span class="tR">
                              <span class="lecLimit">
                                <em>70일간</em><em>1.4배수</em><em>제작중</em>
                              </span>
                            </span>
                          </div>
                          <div class="lecBtnSet">
                            <button @click="videoPopTrigger01 = true">맛보기</button>
                            <button>강좌소개</button>
                            <button>강좌리스트</button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="singleLec">
                          <div class="item">
                            <span class="tL">
                              <em class="iSet">단과</em>
                              <strong>
                                키위 마인드맵반
                                <i class="division">면접실연</i>
                              </strong>
                            </span>
                            <span class="tR">
                              <span class="lecLimit">월, 목 09:00 ~ 13:00</span>
                              <span class="lecLimit red">개강일 2021-03-01</span>
                            </span>
                          </div>
                        </div>
                        <div class="item">
                          <span class="tL">
                            <em class="iPro book">교재</em>
                            <strong>
                              키위 마인드맵 설정
                            </strong>
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
                    <div class="openerLine"><button @click="toggleOpner($event, 'inPackage01')">포함 강좌 및 교재</button></div>
                  </div>
                </div>
                <!--//-->
              </li>
              <li>
                <!---->
                <div class="lecBasic">
                  <span class="kind">
                    <span><em class="iApplySet ing">신청중</em></span>
                  </span>
                  <div class="lecTt">
                    <router-link to="/mkup/lecture/teacher/online">
                      <span class="lecUnit">
                        <em class="iLocSet online">온라인</em>
                        <em class="iSet">단과</em>
                        <em class="iSet">2021</em>
                        <em class="iSet red">신규개설</em>
                        <span class="iSetLine" v-if="!this.mobile">
                          <em>첨삭</em>
                          <em>PC+모바일</em>
                          <em>인패키지</em>
                          <em>제작예정(2021년 09~12월)</em>
                        </span>
                      </span>
                      <strong class="tt">
                        교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용 <i class="division">이론강의</i>
                        <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                      </strong>
                      <span class="lecLimit"><em>70일간</em><em>1.4배수</em><em>제작중</em><em>신청시작일 2021-05-03</em></span>
                      <span class="iSetLine" v-if="this.mobile">
                        <em>첨삭</em>
                        <em>PC+모바일</em>
                        <em>인패키지</em>
                        <em>제작예정(2021년 09~12월)</em>
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
                  <div class="lecBtnSet">
                    <button @click="videoPopTrigger01 = true">맛보기</button>
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
                            <strong>
                              그린키위반(한국교육사, 서양교육사)
                            </strong>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="tL">
                            <em class="iPro book">교재</em>
                            <strong>
                            키위 마인드맵 설정
                            </strong>
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
                    </ol>
                  </div>
                </div>
                <!--//-->
              </li>
              <li>
                <!---->
                <div class="lecBasic">
                  <span class="kind">
                    <span><em class="iApplySet apply">신청예정</em></span>
                  </span>
                  <div class="lecTt">
                    <router-link to="/mkup/lecture/teacher/online">
                      <span class="lecUnit">
                        <em class="iLocSet idea">이데아</em>
                        <em class="iSet">단과</em>
                        <em class="iSet">2021</em>
                        <em class="iSet red">신규개설</em>
                        <span class="iSetLine" v-if="!this.mobile">
                          <em>첨삭</em>
                          <em>PC+모바일</em>
                          <em>인패키지</em>
                          <em>제작예정(2021년 09~12월)</em>
                        </span>
                      </span>
                      <strong class="tt">
                        교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용 <i class="division">이론강의</i>
                        <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                      </strong>
                      <span class="lecLimit"><span>월, 목 09:00 ~ 13:00</span><em>신청시작일 2021-05-03</em></span>
                      <span class="lecLimit red multy">개강일 2021-03-01</span>
                      <span class="iSetLine" v-if="this.mobile">
                        <em>첨삭</em>
                        <em>PC+모바일</em>
                        <em>인패키지</em>
                        <em>제작예정(2021년 09~12월)</em>
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
                      <input type="checkbox" disabled />
                      <label for="price01">
                        <i></i><em>교재(1)</em>
                        <span class="notOnline">
                          학원에서 구매가능
                        </span>
                      </label>
                    </span>
                  </div>
                  <div class="lecBtnSet">
                    <button>수강할인 팁</button>
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
                            <strong>
                              그린키위반(한국교육사, 서양교육사)
                            </strong>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="tL">
                            <em class="iPro book">교재</em>
                            <strong>
                            키위 마인드맵 설정
                            </strong>
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
                  </div>
                </div>
                <!--//-->
              </li>
            </ul>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!-- 백퍼후기 제목영역 -->
          <div class="boardDetail reviewCase">
            <div class="boardHead">
              <span class="imgBox"><img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/></span>
              <div class="hashTag">
                <em>#태블릿</em><em>#아이패드 프로</em>
              </div>
              <strong>영어 공부 하시는 분들은 꼭 사세요!</strong>
              <div class="boardInfo">
                <em>작성자 : <i>gusj758</i></em>
                <em>작성일 : <i>2021-05-29</i></em>
                <em>조회수 : <i>222</i></em>
              </div>
              <router-link to="/mkup/ssammall/device" class="btnS line">상품 자세히 보기</router-link>
            </div>
          </div>
          <!-- //백퍼후기 제목영역 -->
          <div class="backBeige"><br /><br /><br /></div>
          <div class="subTit">
            <h3>일반 상세 예시</h3>
          </div>
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead">
              <strong><em class="iBbsSet notice">공지</em>[국어 송헌/김준팀] 3~4월 신간교재 무료증정 (공지사항 일반)</strong>
              <div class="boardInfo">
                <em>작성일 : <i>2021-05-29</i></em>
              </div>
              <span class="right-po"><router-link to="/mkup/special" class="btnTcHome">선생님 홈 <em>바로가기</em></router-link></span>
            </div>
            <!-- //제목영역 -->
            <!-- 제목영역 -->
            <div class="boardHead">
              <div class="hashTag">
                <em>#중등중국어</em><em>#중등영어</em>
              </div>
              <strong>[국어 송헌/김준팀] 3~4월 신간교재 무료증정 (공지사항 일반)</strong>
              <div class="boardInfo">
                <em>작성일 : <i>2021-05-29</i></em>
                <em>조회수 : <i>222</i></em>
              </div>
            </div>
            <!-- //제목영역 -->
            <!-- 제목영역 -->
            <div class="boardHead">
              <div class="hashTag">
                <em>#중등중국어</em><em>#중등영어</em>
              </div>
              <strong><em class="iBbsSet notice">공지</em>[국어 송헌/김준팀] 3~4월 신간교재 무료증정 (공지사항 공지)</strong>
              <div class="boardInfo">
                <em>작성일 : <i>2021-05-29</i></em>
                <em>조회수 : <i>222</i></em>
              </div>
            </div>
            <!-- //제목영역 -->
            <!-- 제목영역 -->
            <div class="boardHead stateCase">
              <em class="iBbsSet">대기중</em>
              <div class="lecKind">김현 선생님/ Making Map 교육학</div>
              <strong>종합문제 답안은 어디서 볼 수 있나요?</strong>
              <div class="boardInfo">
                <em>작성자 : <i>gusj758</i></em>
                <em>작성일 : <i>2021-05-29</i></em>
                <em>조회수 : <i>222</i></em>
              </div>
            </div>
            <!-- //제목영역 -->
            <!-- 제목영역 -->
            <div class="boardHead stateCase">
              <em class="iBbsSet end">답변완료</em>
              <div class="lecKind">김현 선생님/ Making Map 교육학</div>
              <strong>종합문제 답안은 어디서 볼 수 있나요?</strong>
              <div class="boardInfo">
                <em>작성자 : <i>gusj758</i></em>
                <em>작성일 : <i>2021-05-29</i></em>
                <em>조회수 : <i>222</i></em>
              </div>
            </div>
            <!-- //제목영역 -->
            <!-- 제목영역 -->
            <div class="boardHead ssamCase">
              <span class="imgBox sbjChild"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare04.png`)" alt="" /></span>
              <div class="hashTag">
                <em>#교육학 김현 선생님의 키위 교육학 (실전)</em>
              </div>
              <strong>처음으로 도전하는 임용에 선생님의 많은 응원과 가르침이 있었습니다.</strong>
              <div class="boardInfo">
                <em>작성일 : <i>2021-05-29</i></em>
                <em>조회수 : <i>222</i></em>
              </div>
            </div>
            <!-- //제목영역 -->
            <!-- 제목영역 -->
            <div class="boardHead">
              <div class="hashTag"><em>#임용필수체크</em><em>#학습전략</em></div>
              <strong>쌤플러스가 정리한 연간 학습전략 가이드</strong>
              <div class="boardInfo">
                <em>작성일 : <i>2021-05-19</i></em>
                <em>조회수 : <i>222</i></em>
              </div>
              <div class="right-po shareBox">
                <span class="likeNum">
                  <input type="checkbox" id="likeNum" name="likeNum" /><label for="likeNum">892</label>
                </span>
                <div class="shareSet">
                  <span class="btnShare">공유하기</span>
                  <div style="display:none;">페이스북, 트위터, 카카오톡, 카카오스토리, 라인, URL</div>
                </div>
              </div>
            </div>
            <!-- //제목영역 -->
            <!-- 기사출처 -->
            <div class="boardSource">
              <em>출처</em> <router-link to="https://www.jbe.go.kr/board/view.jbe?boardId=BBS_0000146&startPage=1&menuCd=DOM_000000102001002000&dataSid=799131">[매일노동뉴스] www.labortoday.co.kr</router-link>
            </div>
            <!-- //기사출처 -->
            <!-- 파일영역 -->
            <div class="boardFile">
              <ul class="uploadFileList">
                <li>
                  <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                  </span>
                </li>
                <li class="printCase">
                  <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <em>(인쇄횟수제한 : <strong>3</strong>/5)</em>
                    <button class="btnPrint" v-if="!this.mobile">인쇄하기</button>
                  </span>
                </li>
              </ul>
            </div>
            <!-- //파일영역 -->
            <!-- 내용영역 -->
            <div class="boardView">
              <!-- 에디터 내용 -->
              내용이 들어갈 자리
            </div>
            <!-- //내용영역 -->
            <!-- 이벤트 당첨자 영역 -->
            <div class="boardOnList">
              <div class="back">
                <strong>당첨자 안내</strong>
                <div class="listNum">
                  <table>
                    <thead>
                      <tr>
                        <th class="item0">순번</th>
                        <th class="item1">이름</th>
                        <th class="item2">아이디</th>
                        <th class="item3">경품</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>김*진</td>
                        <td>ddr******</td>
                        <td>KFC 3만원 상품권</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>김*진</td>
                        <td>ddr******</td>
                        <td>KFC 3만원 상품권</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>김*진</td>
                        <td>ddr******</td>
                        <td>KFC 3만원 상품권</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- //이벤트 당첨자 영역 -->
            <!-- 답변영역 -->
            <div class="boardViewReply">
              <em class="iBbsSet answer">답변</em>
              <div class="replyDate">
                <em>작성일 : <i>2021-05-19</i></em>
              </div>
              <div class="replyFull">
                의견 올려줘서 고마와요.. 며칠전까지 이해가 잘 안되고 뭔가 잘못된 게 아닌가 했는데 이제 이해가 되네요.....<br/>
                그 문제는 일단 그냥 넘어가려 했는데 ,,수업 때 다시 언급할게요!!! 이런 문제는 운동 게임을 즐겨보지 않는 여성에게는 어렵겠네요....<br/>
                게임 룰에 대한 전 후 충분한 설명이 있어야 공평하겠네요... 열공!!!
              </div>
            </div>
            <!-- //답변영역 -->
            <!-- <div class="boardBtn"></div> 상세 버튼영역 -->
            <!-- 상세 네비게이션 영역 -->
            <div class="boardNavi">
              <button class="prev">
                <strong>PREV</strong>
                <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
              </button>
              <router-link to="/mkup/bbs/notice" class="btnList">목록</router-link>
              <button class="next">
                <strong>NEXT</strong>
                <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
              </button>
            </div>
            <!-- //상세 네비게이션 영역 -->
            <br/>
            <!-- 태그 & 좋아요 & 댓글 수 & 댓글 -->
            <div class="tagNlike">
              <div class="hashTag"><em>#임용필수체크</em><em>#학습전략</em></div>
              <span class="replyBox">
                <span class="likeNum">
                  <input type="checkbox" id="likeNum" name="likeNum" /><label for="likeNum">892</label>
                </span>
                <span class="replyNum">12</span>
              </span>
            </div>
            <div class="comment">
              <div class="writeBox">
                <strong>로그인 후 등록 할 수 있습니다.</strong>
                <textarea placeholder="미래의 선생님! 쌤플러스가 더욱 따뜻해지는 댓글을 부탁드립니다."></textarea>
                <button class="regist">등록하기</button>
              </div>
              <div class="commentBox">
                <ul>
                  <li>
                    <div>
                      <strong>rse******</strong>
                      <button class="btnDelete">삭제</button>
                      <p>1년을 어떻게 준비해야하나 막막했는데, 쌤플러스의 연간 학습 전략 가이드 따라서 한 번 해보려고요. 꼭 합격하겠습니다! 1년을 어떻게 준비해야하나 막막했는데, 쌤플러스의 연간 학습 전략 가이드 따라서 한 번 해보려고요. 꼭 합격하겠습니다! 1년을 어떻게 준비해야하나 막막했는데, 쌤플러스의 연간 학습 전략 가이드 따라서 한 번 해보려고요. 꼭 합격하겠습니다! 1년을 어떻게 준비해야하나 막막했는데, 쌤플러스의 연간 학습 전략 가이드 따라서 한 번 해보려고요. 꼭 합격하겠습니다! 1년을 어떻게 준비해야하나 막막했는데, 쌤플러스의 연간 학습 전략 가이드 따라서 한 번 해보려고요. 꼭 합격하겠습니다!</p>
                      <span>2021-04-03 18:53:39</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <strong>rse******</strong>
                      <button class="btnDelete">삭제</button>
                      <p>쌤플러스의 연간 학습 전략 가이드 따라서 한 번 해보려고요. 꼭 합격하겠습니다!</p>
                      <span>2021-04-03 18:53:39</span>
                    </div>
                    <ol>
                      <li>
                        <div>
                          <strong>쌤플러스</strong>
                          <p>안녕하세요. 쌤플러스입니다. 합격을 응원하겠습니다!</p>
                          <span>2021-04-03 18:53:39</span>
                        </div>
                      </li>
                    </ol>
                  </li>
                  <li class="noList">
                    <div>
                      <em>등록된 댓글이 없습니다.</em>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <br/><br/>
            <div class="comment">
              <div class="writeBox">
                <strong>로그인 후 등록 할 수 있습니다.</strong>
                <textarea placeholder="미래의 선생님! 쌤플러스가 더욱 따뜻해지는 댓글을 부탁드립니다."></textarea>
                <button class="regist">등록하기</button>
              </div>
              <div class="commentBox">
                <ul>
                  <li class="noList">
                    <div>
                      <em>등록된 댓글이 없습니다.</em>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- //태그 & 좋아요 & 댓글 수 & 댓글 -->
          </div>
          <!-- //상세 -->
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit">
            <h3>일반 등록 예시</h3>
          </div>
          <!-- 상세등록-->
          <div class="boardDetail write">
            <!-- 내용영역 -->
            <div class="box">
              <span class="selectSet">
                <select name="" id="">
                  <option value="counselType01">회원/로그인</option>
                  <option value="counselType02">사이트오류</option>
                  <option value="counselType03">교재/학습자료</option>
                </select>
              </span>
            </div>
            <div class="box sortSet rndCase">
              <span>
                <input type="radio" id="radioTab1" name="tadioTab" checked /><label for="radioTab1">서울학원</label>
              </span>
              <span>
                <input type="radio" id="radioTab2" name="tadioTab" /><label for="radioTab2">대구학원</label>
              </span>
              <span>
                <input type="radio" id="radioTab3" name="tadioTab" /><label for="radioTab3">온라인</label>
              </span>
              <span>
                <input type="radio" id="radioTab4" name="tadioTab" /><label for="radioTab4">모바일</label>
              </span>
              <span>
                <input type="radio" id="radioTab5" name="tadioTab" /><label for="radioTab5">초시생</label>
              </span>
            </div>
            <div class="box">
              <input type="text" placeholder="제목을 입력해 주세요.">
            </div>
            <div class="box">
              <textarea></textarea>
            </div>
            <div class="box">
              <span class="uploadFile verM">
                <!-- <em>첨부파일</em> -->
                <span>
                  <input type="file" id="fileUpload"/>
                  <label for="fileUpload">+ 파일첨부</label>
                </span>
                <i class="fRed">※ 첨부파일은 최대 5개까지로 압축파일(zip)은 첨부할 수 없습니다</i>
              </span>
              <ul class="uploadFileList mt10">
                <li>
                  <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                    <button class="btnDelete">삭제</button>
                  </span>
                </li>
                <li>
                  <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                    <button class="btnDelete">삭제</button>
                  </span>
                </li>
              </ul>
            </div>
            <div class="box">
              <span class="checkSet">
                <input type="checkbox" id="chk01" />
                <label for="chk01"><i></i>SMS 알림 받기 (답변완료 여부를 문자메시지로 알려드립니다.)</label>
              </span>
            </div>
            <!-- //내용영역 -->
            <!-- 상세 버튼영역 -->
            <div class="boardBtn">
              <router-link to="/mkup/mypage/counsel/bbs" class="btnL line">취소</router-link>
              <router-link to="/mkup/mypage/counsel/bbs" class="btnL">상담신청</router-link>
            </div>
            <!-- //상세 버튼영역 -->
          </div>
          <!-- //상세등록 -->
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit noLine">
            <h3>서브 상세 예시</h3>
          </div>
          <!-- 반응형 상세 -->
          <div class="resTls subCase">
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid">
                  <div class="lgItem th">1</div>
                  <span class="lgItem">2</span>
                </li>
                <!--//Loop-->
                <li class="listGrid">
                  <div class="lgItem th">3</div>
                  <span class="lgItem">4</span>
                </li>
              </ul>
            </div>
            <!-- //list -->
          </div>
          <!-- //반응형 상세 -->
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit noLine">
            <h3>제품 목록 예시</h3>
          </div>
          <div class="productList">
            <ul>
              <li class="new"> <!-- 새 제품일 경우 클래스 new 추가 -->
                <a href="#none;">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
                  </span>
                  <span class="productDetail">
                    <span class="labelInfo">
                      <em class="iPro line">교재도서</em>
                      <em class="iSbjSetMini">교육학</em>
                    </span>
                    <strong>2021 류지원 <span class="fGreen">영어교육학</span> 기출문제집</strong>
                    <span class="moreInfo">
                      <span>류지원 저</span>
                      <span>아람출판사</span>
                      <span>2021-03-02</span>
                      <span>ISBN : 9791197198373</span>
                    </span>
                    <span class="price">
                      <strong>15,000<i>원</i></strong>
                    </span>
                  </span>
                </a>
                <div class="productBtn">
                  <span>
                    <button class="btnContents">목차보기</button>
                    <button class="btnBasket">장바구니</button>
                    <button class="btnPay">즉시결제</button>
                  </span>
                </div>
              </li>
              <li class="soldYet"> <!-- 발간예정일 경우 클래스 soldYet 추가 -->
                <a href="#none;">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
                  </span>
                  <span class="productDetail">
                    <span class="labelInfo">
                      <em class="iPro line">교재도서</em>
                      <em class="iSbjSetMini">교육학</em>
                    </span>
                    <strong>2021 류지원 <span class="fGreen">영어교육학</span> 기출문제집</strong>
                    <span class="moreInfo">
                      <span>류지원 저</span>
                      <span>아람출판사</span>
                      <span>2021-03-02</span>
                      <span>ISBN : 9791197198373</span>
                    </span>
                    <span class="price">
                      <strong>13,500<i>원</i></strong>
                      <del>15,000원</del>
                      <em>10<b>%</b></em>
                    </span>
                  </span>
                </a>
                <div class="productBtn">
                  <span>
                    <button class="btnContents">목차보기</button>
                    <button class="btnInBook">입고안내</button>
                  </span>
                </div>
              </li>
              <li class="soldOut"> <!-- 품절일 경우 클래스 soldOut 추가 -->
                <a href="#none;">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
                  </span>
                  <span class="productDetail">
                    <span class="labelInfo">
                      <em class="iPro line">교재도서</em>
                      <em class="iSbjSetMini">교육학</em>
                    </span>
                    <strong>2021 류지원 <span class="fGreen">영어교육학</span> 기출문제집</strong>
                    <span class="moreInfo">
                      <span>류지원 저</span>
                      <span>아람출판사</span>
                      <span>2021-03-02</span>
                      <span>ISBN : 9791197198373</span>
                    </span>
                    <span class="price">
                      <strong>13,500<i>원</i></strong>
                      <del>15,000원</del>
                      <em>10<b>%</b></em>
                    </span>
                  </span>
                </a>
                <div class="productBtn">
                  <span>
                    <button class="btnContents">목차보기</button>
                    <button class="btnInBook">입고안내</button>
                  </span>
                </div>
              </li>
              <li class="soldEnd"> <!-- 판매종료일 경우 클래스 soldEnd 추가 -->
                <a href="#none;">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
                  </span>
                  <span class="productDetail">
                    <span class="labelInfo">
                      <em class="iPro line">교재도서</em>
                      <em class="iSbjSetMini">교육학</em>
                    </span>
                    <strong>2021 류지원 <span class="fGreen">영어교육학</span> 기출문제집</strong>
                    <span class="moreInfo">
                      <span>류지원 저</span>
                      <span>아람출판사</span>
                      <span>2021-03-02</span>
                      <span>ISBN : 9791197198373</span>
                    </span>
                    <span class="price">
                      <strong>13,500<i>원</i></strong>
                      <del>15,000원</del>
                      <em>10<b>%</b></em>
                    </span>
                  </span>
                </a>
                <div class="productBtn">
                  <span>
                    <button class="btnContents">목차보기</button>
                    <button class="btnInBook">입고안내</button>
                  </span>
                </div>
              </li>
              <li>
                <a href="#none;">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_device01.png`)" alt="2021 영어교육학 이벤트"/>
                  </span>
                  <span class="productDetail">
                    <span class="labelInfo">
                      <em class="iSet line">학습기기</em>
                    </span>
                    <strong>2021 <span class="fGreen">영어교육학</span> 이벤트</strong>
                    <span class="moreInfo">
                      <span>류지원 저</span>
                      <span>아람출판사</span>
                      <span>2021-03-02</span>
                      <span>ISBN : 9791197198373</span>
                    </span>
                    <span class="price">
                      <strong>13,500<i>원</i></strong>
                      <del>15,000원</del>
                      <em>10<b>%</b></em>
                    </span>
                  </span>
                </a>
                <div class="productBtn">
                  <span>
                    <button class="btnBasket">장바구니</button>
                    <button class="btnPay">즉시결제</button>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit noLine">
            <h3>제품 목록 예시</h3>
          </div>
          <div class="bookGoods">
            <div class="goodsImg">
              <img :src="require(`@/assets/images/thumbnail/@tmp_book02.png`)" alt=""/>
            </div>
            <div class="goodsDetail">
              <em class="iSbjSetMini">교육학</em>
              <strong>2021 차미아 영어교육학 기출문제집</strong>
              <span class="price">
                <strong>13,500<i>원</i></strong>
                <del>15,000원</del>
                <em>10<b>%</b></em>
              </span>
            </div>
          </div>&nbsp;&nbsp;
          <div class="reviewBox">
            <a href="#">
              <div class="reviewImg">
                <img :src="require(`@/assets/images/thumbnail/@tmp_review01.png`)" alt=""/>
              </div>
              <div class="reviewInfo">
                <em class="iSbjSetMini sbjZh solo">중국어</em>
                <strong>중국현대문학사 이해</strong>
                <p>중국현대문학사의 개요부터 중국현대시까지 한 권의 교재에 총정리된 알알이 알찬 교재 중국현대문학사의 개요부터 중국현대시까지 한 권의 교재에 총정리된 알알이 알찬 교재</p>
                <span class="author">jyr******</span>
                <span class="about">
                  <em>3~4월 패키지 (이론+독해+기출)<br/>희소 중국어팀</em>
                </span>
              </div>
            </a>
          </div>
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
  name: 'LayoutBbs',
  components: {
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
      },
      swiperOption01: {
        loop:true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      date: '',
      range: {
        start: new Date(),
        end: new Date(),
      },
      toggleTrigger:false
    }
  },
  methods: {
  },
  mounted() {
  },
}
</script>

<style lang="css" scoped>

</style>
