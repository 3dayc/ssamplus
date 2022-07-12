<template lang="html">
  <div>
    <div class="pageTit">
      <h2>강좌별 수강생 조회</h2>
      <span><router-link to="/mkup/teacher/studentOnline">강좌/수강생</router-link><em>강좌별 수강생 조회</em></span>
    </div>

    <div class="content">
    <article>
      <!-- page layout -->
      <div class="studentDirect"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li>
                    <a href="/mkup/teacher/studentOnline">온라인 강좌</a>
                  </li>
                  <li class="on">
                    <a href="/mkup/teacher/studentDirect">학원 강좌</a>
                  </li>
                  <li class="">
                    <a href="/mkup/teacher/studentLive">라이브 강좌</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="tabLayout">
            <!-- 온라인 강좌 -->
            <div v-if="lectureTab == 0" class="tabData">
            </div>
            <!-- //온라인 강좌 -->
            <!-- 학원 강좌 -->
            <div v-if="lectureTab == 1" class="tabData">
              <!-- 테이블 유틸 -->
              <div class="boardTop">
                <div class="listSearch">
                  <div class="back">
                    <div class="bdLine">
                      <span class="lsItem">
                        <div class="multiselectSet">
                          <div class="selectSet lCase" @click="multiSelect($event)">
                            <select>
                              <option>강좌 구분</option>
                            </select>
                            <div class="overSelect"></div>
                          </div>
                          <div class="checkArea">
                            <span class="checkSet">
                              <input type="checkbox" id="one" />
                              <label for="one"><i></i>패키지</label>
                            </span>
                            <span class="checkSet">
                              <input type="checkbox" id="two" />
                              <label for="two"><i></i>단과</label>
                            </span>
                          </div>
                        </div>
                      </span>
                      <span class="lsItem">
                        <span class="selectSet lCase">
                          <select name="" id="">
                            <option value="no" class="label">제작연도</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                            <option value="">2019</option>
                            <option value="">2018</option>
                          </select>
                        </span>
                      </span>
                      <span class="lsItem">
                        <input type="text" placeholder="과목, 강좌명으로 검색" />
                        <button class="btnSearch">검색</button>
                      </span>
                    </div>
                    <div><button class="btnRefresh">초기화</button></div>
                  </div>
                </div>
              </div>
              <!-- //테이블 유틸 -->

              <!-- 테이블 목록 -->
              <div class="tls">
                <table>
                  <colgroup><col style="width:8%" span="2"><col><col style="width:11%" span="5"></colgroup>
                  <thead class="duble">
                    <tr>
                      <th scope="col" rowspan="2">사이트 구분</th>
                      <th scope="col" rowspan="2">과목</th>
                      <th scope="col" rowspan="2">강좌명</th>
                      <th scope="col" rowspan="2">강좌 옵션</th>
                      <th scope="col" rowspan="2">수강기간<br/>(개강일 ~ 종강일)</th>
                      <th scope="col" colspan="3" class="dubleCol">수강인원</th>
                    </tr>
                    <tr>
                      <th scope="col">단과(무료)</th>
                      <th scope="col">패키지(무료)</th>
                      <th scope="col">총인원(무료)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!--Loop-->
                    <tr>
                      <td>서울</td>
                      <td>국어</td>
                      <td class="tL">
                        [21.3~4월]  <em class="iSet blue">패키지</em><br/>
                        상반기 쌤팩(문학)
                      </td>
                      <td><router-link to="/mkup/teacher/student/board" class="btnS line">첨삭게시판</router-link></td>
                      <td>2021.04.04<br/>~ 2021.04.05</td>
                      <td>-</td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                    </tr>
                    <!--//Loop-->
                    <tr>
                      <td>서울</td>
                      <td>국어</td>
                      <td class="tL">
                        [21.3~4월] <em class="iSet sky">단과</em><br/>
                        국어교육론 실전대비과정3
                      </td>
                      <td></td>
                      <td>2021.04.04<br/>~ 2021.04.05</td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                    </tr>
                    <tr>
                      <td>서울</td>
                      <td>국어</td>
                      <td class="tL">
                        [21.3~4월] <em class="iSet sky">단과</em><br/>
                        국어교육론 실전대비과정3
                      </td>
                      <td><router-link to="/mkup/teacher/student/board" class="btnS line">첨삭게시판</router-link></td>
                      <td>2021.04.04<br/>~ 2021.04.05</td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                    </tr>
                    <tr>
                      <td>서울</td>
                      <td>국어</td>
                      <td class="tL">
                        [21.3~4월] <em class="iSet sky">단과</em><br/>
                        국어교육론 실전대비과정3
                      </td>
                      <td>-</td>
                      <td>2021.04.04<br/>~ 2021.04.05</td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                    </tr>
                    <tr>
                      <td>서울</td>
                      <td>국어</td>
                      <td class="tL">
                        [21.3~4월] <em class="iSet sky">단과</em><br/>
                        국어교육론 실전대비과정3
                      </td>
                      <td>-</td>
                      <td>2021.04.04<br/>~ 2021.04.05</td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                    </tr>
                    <tr>
                      <td>서울</td>
                      <td>국어</td>
                      <td class="tL">
                        [21.3~4월] <em class="iSet sky">단과</em><br/>
                        국어교육론 실전대비과정3
                      </td>
                      <td>-</td>
                      <td>2021.04.04<br/>~ 2021.04.05</td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                    </tr>
                    <tr>
                      <td>서울</td>
                      <td>국어</td>
                      <td class="tL">
                        [21.3~4월] <em class="iSet sky">단과</em><br/>
                        국어교육론 실전대비과정3
                      </td>
                      <td></td>
                      <td>2021.04.04<br/>~ 2021.04.05</td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                    </tr>
                    <tr>
                      <td>서울</td>
                      <td>국어</td>
                      <td class="tL">
                        [21.3~4월] <em class="iSet sky">단과</em><br/>
                        국어교육론 실전대비과정3
                      </td>
                      <td><router-link to="/mkup/teacher/student/board" class="btnS line">첨삭게시판</router-link></td>
                      <td>2021.04.04<br/>~ 2021.04.05</td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                    </tr>
                    <tr>
                      <td>서울</td>
                      <td>국어</td>
                      <td class="tL">
                        [21.3~4월] <em class="iSet sky">단과</em><br/>
                        국어교육론 실전대비과정3
                      </td>
                      <td>-</td>
                      <td>2021.04.04<br/>~ 2021.04.05</td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                    </tr>
                    <tr>
                      <td>서울</td>
                      <td>국어</td>
                      <td class="tL">
                        [21.3~4월] <em class="iSet sky">단과</em><br/>
                        국어교육론 실전대비과정3
                      </td>
                      <td>-</td>
                      <td>2021.04.04<br/>~ 2021.04.05</td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                      <td><a href="/mkup/teacher/studentDirect/view">35(2)</a></td>
                    </tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
                  </tbody>
                </table>
              </div>
              <!-- //테이블 목록 -->
              <Paginate />
            </div>
            <!-- //학원 강좌 -->
          </div>
        </div>
      </div>
      <!-- //page layout -->
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'StudentDirect',
  data() {
    return {
      lectureTab: 1,
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
