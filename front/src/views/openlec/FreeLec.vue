<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="openLecFree">
          <div class="frameBack">
            <!-- 서브 타이틀 -->
          <div class="subTit lineforM">
            <h3>강의 맛집이 바로 여기, 무료특강</h3>
          </div>
          <div class="subTit for_search wdNew">
            <span class="search_box">
              <span class="selectSet hf">
                <select name="" id="">
                  <option value="">분류</option>
                  <option value="">전체</option>
                </select>
              </span>
              <span class="selectSet hf">
                <select name="" id="">
                  <option value="">전공</option>
                  <option value="">유아</option>
                  <option value="">교육학</option>
                  <option value="">국어</option>
                  <option value="">수학</option>
                  <option value="">중국어</option>
                  <option value="">음악</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">선생님</option>
                  <option value="">배지윤</option>
                  <option value="">김현</option>
                  <option value="">송헌</option>
                  <option value="">이정훈/안후상</option>
                  <option value="">한정은</option>
                  <option value="">서정팀</option>
                </select>
              </span>
            </span>
          </div>
          <!-- //서브 타이틀 -->
            <!-- 무료특강 목록 -->
            <div class="openSpecialList">
              <!-- 과목 별 -->
              <div class="subjectSet">
                <h4>교육학</h4>
                <!-- 선생님 별 -->
                <div class="ssamSet">
                  <div class="ssamBasic gridSet">
                    <div class="gridItem name">
                      <span class="ssamImg"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
                      <div>
                        <em class="iSbjSetMini">교육학</em><strong>김현</strong>
                        <span class="msg">점수를 키우기 위한 교육학</span>
                      </div>
                    </div>
                    <div class="gridItem goBtn">
                      <span>
                        <router-link to="/mkup/lecture/teachermjedu01" class="ssamHome">선생님 홈</router-link>
                        <router-link to="/mkup/lecture/teachermjedu01" class="curriculum">연간 커리큘럼</router-link>
                        <router-link to="/mkup/lecture/teachermjedu01" class="ssamNotice">선생님 공지사항</router-link>
                      </span>
                    </div>
                  </div>
                  <div class="ssamLecList">
                    <ul>
                      <!--Loop-->
                      <li>
                        <!---->
                        <div class="lecBasic">
                          <div class="lecTt">
                            <strong class="tt">
                              그린키위반(기본반)<i class="division">이론강의</i>
                              <span class="msg">키위 마인드맵반 맛보기 강의 외</span>
                            </strong>
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
                                <i></i><em>수업자료</em>
                              </label>
                            </span>
                          </div>
                        </div>
                        <!--//-->
                      </li>
                      <!--//Loop-->
                    </ul>
                  </div>
                </div>
                <!-- //선생님 별 -->
              </div>
              <!-- //과목 별 -->
              <div class="subjectSet">
                <h4>중국어</h4>
                <!-- 선생님 별 -->
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
                        <router-link to="/mkup/lecture/teachermjmiddle071" class="ssamHome">선생님 홈</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle071" class="curriculum">연간 커리큘럼</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle071" class="ssamNotice">선생님 공지사항</router-link>
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
                              그린키위반(기본반)<i class="division">이론강의</i>
                              <span class="msg">키위 마인드맵반 맛보기 강의 외</span>
                            </strong>
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
                        <div class="inPackage on">
                          <div class="widthList noLine">
                            <ol>
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
                                    <span class="checkSet">
                                      <input type="checkbox" id="book01" />
                                      <label for="book01"><i></i>교재 구매</label>
                                    </span>
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
                      </li>
                      <!--//Loop-->
                      <li>
                        <div class="lecBasic">
                          <div class="lecTt">
                            <strong class="tt">
                              그린키위반(기본반)<i class="division">이론강의</i>
                              <span class="msg">키위 마인드맵반 맛보기 강의 외</span>
                            </strong>
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
                        <div class="inPackage on">
                          <div class="widthList noLine">
                            <ol>
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
                      </li>
                      <li>
                        <div class="lecBasic">
                          <div class="lecTt">
                            <strong class="tt">
                              그린키위반(기본반)<i class="division">이론강의</i>
                              <span class="msg">키위 마인드맵반 맛보기 강의 외</span>
                            </strong>
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
                        <div class="inPackage on">
                          <div class="widthList noLine">
                            <ol>
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
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- //선생님 별 -->
              </div>
              <!---->
              <div class="subjectSet">
                <h4>국어</h4>
                <!-- 선생님 별 -->
                <div class="ssamSet">
                  <div class="ssamBasic gridSet">
                    <div class="gridItem name">
                      <span class="ssamImg"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare07.png`)" alt="" /></span>
                      <div>
                        <em class="iSbjSetMini">국어</em><strong>박노송</strong>
                        <span class="msg">영역별 전문가의 고품격 명강의</span>
                      </div>
                    </div>
                    <div class="gridItem goBtn">
                      <span>
                        <router-link to="/mkup/lecture/teachermjmiddle014" class="ssamHome">선생님 홈</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle014" class="curriculum">연간 커리큘럼</router-link>
                        <router-link to="/mkup/lecture/teachermjmiddle014" class="ssamNotice">선생님 공지사항</router-link>
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
                              그린키위반(기본반)<i class="division">이론강의</i>
                              <span class="msg">키위 마인드맵반 맛보기 강의 외</span>
                            </strong>
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
                      <!--//Loop-->
                    </ul>
                  </div>
                </div>
                <!-- //선생님 별 -->
              </div>
              <!--//-->
            </div>
            <!-- //무료특강 목록 -->
          </div>
          <!-- 가격 -->
          <div class="lecturePriceTotal openCase" v-if="!this.mobile">
            <div class="frameBack">
              <dl>
                <dt class="iPayTit">수강료</dt>
                <dd>
                  <span class="price"><del>5,136,000</del><strong>2,712,000<i>원</i></strong></span>
                </dd>
              </dl>
              <dl>
                <dt class="iPayTit">교재비</dt>
                <dd>
                  <span class="price"><del>193,000</del><strong>172,000<i>원</i></strong></span>
                </dd>
              </dl>
              <dl class="last">
                <dt class="iPayTit">배송비</dt>
                <dd>
                  <span class="price"><strong>9,000<i>원</i></strong></span>
                </dd>
              </dl>
              <span class="right">
                <button class="btnS redline">장바구니</button>
                <button class="btnS red">즉시결제</button>
              </span>
            </div>
          </div>
          <!-- //가격 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'FreeLec',
  components: {
  },
  data() {
    return {
      videoPopTrigger01: false,
    }
  },
}
</script>
