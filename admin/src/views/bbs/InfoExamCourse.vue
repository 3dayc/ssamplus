<template lang="html">
  <div class="infoExamCourse">
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <span class="frontTooltip">
          <em>ⓘ Front</em>
          <span>- 시험정보 임용자료실 – 교육과정 자료실 > 노출 건 표시</span>
        </span>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">연도</option>
                  <option value="">2021</option>
                  <option value="">2020</option>
                  <option value="">2019</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">과목</option>
                  <option value="">유아</option>
                  <option value="">초등</option>
                  <option value="">특수</option>
                  <option value="">중등</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <input type="text" placeholder="제목 검색" />
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <div>
            <button class="btnRefresh">초기화</button>
          </div>
        </div>
      </div>
      <div class="right-po">
        <router-link to="/mkup/bbs/infoExam/courseWrite" class="btnAdd">신규등록</router-link>
      </div>
    </div>
    <!-- //테이블 유틸 -->
    <!-- 목록써머리 -->
    <div class="listSummery">
      <div class="left">
        <span class="checkSet">
          <input type="checkbox" checked/>
          <label for=""><i></i>노출 허용으로 설정된 정보 조회</label>
        </span>
      </div>
    </div>
    <!-- //목록써머리 -->
    <!-- 테이블 목록 -->
    <div class="tls">
      <table>
        <colgroup>
          <col width="100">
          <col width="80">
          <col width="120">
          <col width="*">
          <col width="100">
          <col width="120">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">노출 여부</th>
            <th scope="col">연도</th>
            <th scope="col">과목</th>
            <th scope="col">제목</th>
            <th scope="col">조회수</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <tbody>
          <!--Loop-->
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push1" checked/>
                <label for="push1">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>2021</td>
            <td>초등</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/course">[교육부 고시 제2021-226호]특수교육 교육과정 일부 개정 고시</router-link></td>
            <td>1,500</td>
            <td>2021-05-25</td>
          </tr>
          <!--//Loop-->
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push2"/>
                <label for="push2">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>2021</td>
            <td></td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/course">2021 개정 누리 과정</router-link></td>
            <td>32</td>
            <td>2021-05-20</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push3" checked/>
                <label for="push3">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>2021</td>
            <td>역사</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/course">2015개정시기_중등교과_영역</router-link></td>
            <td>1</td>
            <td>2021-05-19</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push4" />
                <label for="push4">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>2021</td>
            <td>보건</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/course">[교육부 고시 제2021-226호]특수교육 교육과정 일부 개정 고시</router-link></td>
            <td>333</td>
            <td>2021-05-15</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push5" checked/>
                <label for="push5">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>2021</td>
            <td>논술</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/course">2021 개정 누리 과정</router-link></td>
            <td>1,500</td>
            <td>2021-05-13</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push6" checked/>
                <label for="push6">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>2021</td>
            <td>유아</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/course">2015개정시기_중등교과_영역</router-link></td>
            <td>32</td>
            <td>2021-05-10</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push7" checked/>
                <label for="push7">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>2020</td>
            <td>수학</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/course">[교육부 고시 제2021-226호]특수교육 교육과정 일부 개정 고시</router-link></td>
            <td>1</td>
            <td>2021-04-30</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push8" checked/>
                <label for="push8">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>2020</td>
            <td>지리</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/course">2021 개정 누리 과정</router-link></td>
            <td>333</td>
            <td>2021-04-29</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push9" checked/>
                <label for="push9">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>2020</td>
            <td>특수</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/course">2015개정시기_중등교과_영역</router-link></td>
            <td>1,500</td>
            <td>2021-04-29</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push10" checked/>
                <label for="push10">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>2020</td>
            <td>논술</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/course">2021 개정 누리 과정</router-link></td>
            <td>32</td>
            <td>2021-04-20</td>
          </tr>
          <!-- 데이터 없을 경우 -->
          <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
          <!-- //데이터 없을 경우 -->
        </tbody>
      </table>
    </div>
    <Paginate />
    <!-- //테이블 목록 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'InfoExamCourse',
  data(){
    return {
    }
  }
}
</script>

<style lang="css" scoped>
</style>
