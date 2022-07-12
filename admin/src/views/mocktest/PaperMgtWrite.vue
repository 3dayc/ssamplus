<template lang="html">
  <div>
    <div class="pageTit">
      <h2>과목별 시험지 관리</h2>
      <span><router-link to="/mkup/mocktest/multiTest">모의고사 관리</router-link><router-link to="/mkup/mocktest/paperMgt">과목별 시험지 관리</router-link><em>신규등록</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="paperMgtWrite"><!-- class 없어도 유지 -->
        <!-- tab-wrap -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:paperTab===0}"><button @click="paperTab = 0">기본정보</button></li>
                </ul>
              </nav>
            </div>
            <span class="btnArea">
              <router-link to="/mkup/mocktest/paperMgt" class="btnList">목록으로</router-link>
              <button class="btnM" @click="validate = true">저장</button>
              <router-link to="/mkup/mocktest/paperMgt" class="btnM line ml10">취소</router-link>
            </span>
          </div>
          <div class="tabLayout">
            <div v-if="paperTab == 0" class="tabData">
              <!-- 기본정보 -->
              <div class="subTit">
                <h3>기본정보</h3>
              </div>
              <div class="tvs">
                <table>
                  <colgroup>
                    <col width="160">
                    <col width="40%">
                    <col width="160">
                    <col width="*">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th class="backBrown">노출 여부 <sup>필수</sup></th>
                      <td>
                        <span class="labelToggleSet">
                          <input type="checkbox" id="push1">
                          <label for="push1">
                            <span>숨김</span>
                            <span>허용</span>
                          </label>
                        </span>
                      </td>
                      <th class="backBrown">시험코드</th>
                      <td><strong>K2021010101001</strong></td>
                    </tr>
                    <tr>
                      <th class="backBrown">시험 명 <sup>필수</sup></th>
                      <td colspan="3">
                        <div>
                          <input type="text" :class="{error:validate===true}">
                          <span class="erMsg" v-if="validate">필수항목 입니다</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th class="backBrown">과목(선생님)코드 <sup>필수</sup></th>
                      <td>
                        <span class="selectSet wFull">
                          <select name="" id="">
                            <option value="no" class="label">선택해 주세요</option>
                          </select>
                        </span>
                      </td>
                      <th class="backBrown">제작일자 <sup>필수</sup></th>
                      <td>
                        <VCalendar class="calSet" v-model="date" color="green">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input :value="inputValue" @click="togglePopover()" readonly />
                          </template>
                        </VCalendar>
                      </td>
                    </tr>
                    <tr>
                      <th>시험분류 <sup>필수</sup></th>
                      <td>
                        <span class="radioSet">
                          <input type="radio" name="radio1" checked/>
                          <label for=""><i></i>유아,유초특</label>
                        </span>
                        <span class="radioSet">
                          <input type="radio" name="radio1" />
                          <label for=""><i></i>중등, 중특</label>
                        </span>
                      </td>
                      <th>시험시간 <sup>필수</sup></th>
                      <td>
                        <span class="unit w100">
                          <input type="text"><em>분</em>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- //기본정보 -->
              <!-- 해설강의 등록정보 -->
              <div class="subTit">
                <h3>해설강의 등록정보</h3>
              </div>
              <div class="tvs">
                <table>
                  <colgroup>
                    <col width="160">
                    <col width="40%">
                    <col width="160">
                    <col width="*">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>해설강의</th>
                      <td>
                        <span class="radioSet">
                          <input type="radio" name="radio2"/>
                          <label for=""><i></i>미제공</label>
                        </span>
                        <span class="radioSet">
                          <input type="radio" name="radio2" checked/>
                          <label for=""><i></i>제공</label>
                        </span>
                      </td>
                      <th>기기제한</th>
                      <td>
                        <span class="radioSet">
                          <input type="radio" name="radio3" checked/>
                          <label for=""><i></i>PC+모바일</label>
                        </span>
                        <span class="radioSet">
                          <input type="radio" name="radio3" />
                          <label for=""><i></i>모바일 전용</label>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>수강기간 / 수강제한</th>
                      <td>
                        <span class="unit small mr5">
                          <input type="text" value="3" class="tR">
                          <em>일</em>
                        </span>
                        <em>/</em>
                        <span class="unit small ml5 mr5">
                          <input type="text" value="140" class="tR">
                          <em>%</em>
                        </span>
                        <span class="checkSet">
                          <input type="checkbox" id="tit01" />
                          <label for="tit01"><i></i>통배수</label>
                        </span>
                      </td>
                      <th>문서보안</th>
                      <td>
                        <span class="checkSet">
                          <input type="checkbox" id="down" checked/>
                          <label for="down"><i></i>다운로드 제한</label>
                        </span>
                        <span class="unit small">
                          <input type="text" value="5" class="tR" disabled>
                          <em>회</em>
                        </span>
                        <span class="checkSet ml20">
                          <input type="checkbox" id="print" />
                          <label for="print"><i></i>인쇄제한</label>
                        </span>
                        <span class="unit small">
                          <input type="text" value="5" class="tR">
                          <em>회</em>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>수강권한</th>
                      <td colspan="3"><p class="infoMsg fGreen">* 모의고사 구매자 전체</p></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- //해설강의 등록정보 -->
            </div>
          </div>
        </div>
        <!-- //tab-wrap -->
      </div>
      <!-- //page layout -->
    </article>
    </div>

    <!-- Popup -->
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaperMgtWrite',
  data() {
    return {
      paperTab: 0,
      date: new Date(),
      validate: false,
    }
  },
  methods: {
  },
	components: {
	},
}
</script>
