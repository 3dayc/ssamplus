<template lang="html">
  <div>
    <div class="pageTit">
			<h2>모집인원 및 경쟁률</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><em>모집인원 및 경쟁률</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoCompetition">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <span class="frontTooltip">
              <em>ⓘ Front</em>
              <span>- 시험정보 모집인원 및 경쟁률 > 연도별 표시</span>
            </span>
          </div>
          <span class="selectSet">
            <select name="" id="">
              <option value="no" class="label">학년도</option>
              <option value="">2022년</option>
              <option value="">2021년</option>
              <option value="">2020년</option>
            </select>
          </span>
          <span class="selectSet mlr5">
            <select name="" id="">
              <option value="no" class="label">정시/추시</option>
              <option value="">정시</option>
              <option value="">추시</option>
            </select>
          </span>
          <button class="btnS">신규 생성</button>
          <div class="right-po">
            <router-link to="" class="btnDownload">다운로드</router-link>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="160">
              <col width="140">
              <col width="100">
              <col width="160">
              <col width="100">
              <col width="160">
              <col width="140">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">학년도</th>
                <th scope="col">정시/추시</th>
                <th scope="col" colspan="4">시험</th>
                <th scope="col">최종수정일</th>
              </tr>
            </thead>
            <tbody>
              <tr class="blue">
                <td>2022 학년도</td>
                <td>정시</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1">
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" disabled/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <a @click="popupTrigger02 = true">유·초등</a>
                </td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push2">
                    <label for="push2">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" disabled/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <a @click="popupTrigger02 = true">중등</a>
                </td>
                <td>-</td>
              </tr>
              <tr class="blue">
                <td>2021 학년도</td>
                <td>정시</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push3">
                    <label for="push3">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" disabled/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <a @click="popupTrigger02 = true">유·초등</a>
                </td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push4">
                    <label for="push4">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" disabled/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <a @click="popupTrigger02 = true">중등</a>
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>2021 학년도</td>
                <td>추시</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push5" checked>
                    <label for="push5">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">유·초등</router-link>
                </td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push6">
                    <label for="push6">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">중등</router-link>
                </td>
                <td>2021-05-28</td>
              </tr>
              <tr>
                <td>2020 학년도</td>
                <td>정시</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push7">
                    <label for="push7">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">유·초등</router-link>
                </td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push8" checked>
                    <label for="push8">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">중등</router-link>
                </td>
                <td>2021-05-27</td>
              </tr>
              <tr>
                <td>2019 학년도</td>
                <td>정시</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push9" checked>
                    <label for="push9">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">유·초등</router-link>
                </td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push10" checked>
                    <label for="push10">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">중등</router-link>
                </td>
                <td>2021-05-26</td>
              </tr>
              <tr>
                <td>2019 학년도</td>
                <td>추시</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push11">
                    <label for="push11">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">유·초등</router-link>
                </td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push12">
                    <label for="push12">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" disabled/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <a @click="popupTrigger02 = true">중등</a>
                </td>
                <td>2021-05-25</td>
              </tr>
              <tr>
                <td>2018 학년도</td>
                <td>정시</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push13" checked>
                    <label for="push13">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">유·초등</router-link>
                </td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push14">
                    <label for="push14">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" disabled/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <a @click="popupTrigger02 = true">중등</a>
                </td>
                <td>2021-05-24</td>
              </tr>
              <tr>
                <td>2017 학년도</td>
                <td>정시</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push15">
                    <label for="push15">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">유·초등</router-link>
                </td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push16" checked>
                    <label for="push16">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">중등</router-link>
                </td>
                <td>2021-05-23</td>
              </tr>
              <tr>
                <td>2017 학년도</td>
                <td>추시</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push17" checked>
                    <label for="push17">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">유·초등</router-link>
                </td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push18" checked>
                    <label for="push18">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">중등</router-link>
                </td>
                <td>2021-05-22</td>
              </tr>
              <tr>
                <td>2016 학년도</td>
                <td>정시</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push19">
                    <label for="push19">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">유·초등</router-link>
                </td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push20">
                    <label for="push20">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>체크</label>
                  </span>
                  <router-link to="/mkup/bbs/infoCompetitionView" class="fBlue">중등</router-link>
                </td>
                <td>2021-05-21</td>
              </tr>

              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <!-- //테이블 목록 -->
        <Paginate />
      </div>
      <!-- //page layout -->
    </article>
    </div>
    <!-- Popup -->
    <Popup v-if='popupTrigger02' @close="popupTrigger02 = false" :popClass="classValue2" class="recruitment">
      <h1 slot="modalheader" class="tC">모집인원 및 경쟁률<div class="fBlue">2022학년도 | 정시 | 유·초등</div></h1>
      <div slot="modalbody">
        <div class="area">
          <ul>
            <li><strong>서울</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>경기</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>인천</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>세종</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>부산</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>대전</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>대구</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>광주</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>울산</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>강원</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>충북</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>충남</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>경북</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>경남</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>전북</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>전남</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
          <ul>
            <li><strong>제주</strong></li>
            <RecruitmentTypeComponent class="rTC"></RecruitmentTypeComponent>
          </ul>
        </div>
      </div>
      <div slot="modalfooter" class="modalfooter">
        <button class="btnM line" @click="popupTrigger02 = false">취소</button>
        <button class="btnM green" onclick = "location.href='/mkup/bbs/infoCompetitionWrite'">등록</button>
      </div>
    </Popup>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'InfoCompetition',
  data() {
    return {
      fileName: '',
      popupTrigger02: false,
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
