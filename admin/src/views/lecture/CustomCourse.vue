<template lang="html">
  <div>
		<div class="pageTit">
			<h2>사용자 정의강좌</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><em>사용자 정의강좌</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="customCourse">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">사용여부</option>
                      <option value="">사용</option>
                      <option value="">미사용</option>
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
            <router-link class="btnAdd" to="/mkup/lecture/customCourse/write">신규등록</router-link>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="60"/>
              <col width="60"/>
              <col width="80"/>
              <col width="260"/>
              <col width="140"/>
              <col width="80"/>
            </colgroup>
            <thead>
              <tr>
                <th scope="col">사용여부</th>
                <th scope="col">관려번호</th>
                <th scope="col">수강유형</th>
                <th scope="col">제목</th>
                <th scope="col">유효기간</th>
                <th scope="col">등록일자</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>
                  <span class="labelToggleSet tLength3"><!-- 2021-07-14 클래스 추가 -->
                    <input type="checkbox" id="toggle1" checked>
                    <label for="toggle1">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>650</td>
                <td>온라인</td>
                <td class="tL"><router-link to="/mkup/lecture/customCourse/view">하반기 합격전략 설명회 (샘플강의 묶음)</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <!--//Loop-->
              <tr>
                <td>
                  <span class="labelToggleSet tLength3"><!-- 2021-07-14 클래스 추가 -->
                    <input type="checkbox" id="toggle2" checked>
                    <label for="toggle2">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>649</td>
                <td>서울</td>
                <td class="tL"><router-link to="/mkup/lecture/customCourse/view">하이론점검 프로젝트-1~4월 정규 강의</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr class="expiry"><!--20210715 class 변경-->
                <td>
                  <span class="labelToggleSet tLength3"><!-- 2021-07-14 클래스 추가 -->
                    <input type="checkbox" id="toggle3">
                    <label for="toggle3">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>648</td>
                <td>대구</td>
                <td class="tL"><router-link to="/mkup/lecture/customCourse/view">하반기 합격전략 설명회 (샘플강의 묶음)</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet tLength3"><!-- 2021-07-14 클래스 추가 -->
                    <input type="checkbox" id="toggle4" checked>
                    <label for="toggle4">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>647</td>
                <td>온라인</td>
                <td class="tL"><router-link to="/mkup/lecture/customCourse/view">이론점검 프로젝트-1~4월 정규 강의</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet tLength3"><!-- 2021-07-14 클래스 추가 -->
                    <input type="checkbox" id="toggle5" checked>
                    <label for="toggle5">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>646</td>
                <td>서울</td>
                <td class="tL"><router-link to="/mkup/lecture/customCourse/view">하반기 합격전략 설명회 (샘플강의 묶음)</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet tLength3"><!-- 2021-07-14 클래스 추가 -->
                    <input type="checkbox" id="toggle6" checked>
                    <label for="toggle6">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>645</td>
                <td>대구</td>
                <td class="tL"><router-link to="/mkup/lecture/customCourse/view">이론점검 프로젝트-1~4월 정규 강의</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr class="expiry"><!--20210715 class 변경-->
                <td>
                  <span class="labelToggleSet tLength3"><!-- 2021-07-14 클래스 추가 -->
                    <input type="checkbox" id="toggle7">
                    <label for="toggle7">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>644</td>
                <td>온라인</td>
                <td class="tL"><router-link to="/mkup/lecture/customCourse/view">이론점검 프로젝트-1~4월 정규 강의</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet tLength3"><!-- 2021-07-14 클래스 추가 -->
                    <input type="checkbox" id="toggle8" checked>
                    <label for="toggle8">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>643</td>
                <td>서울</td>
                <td class="tL"><router-link to="/mkup/lecture/customCourse/view">이론점검 프로젝트-1~4월 정규 강의</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet tLength3"><!-- 2021-07-14 클래스 추가 -->
                    <input type="checkbox" id="toggle9" checked>
                    <label for="toggle9">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>642</td>
                <td>대구</td>
                <td class="tL"><router-link to="/mkup/lecture/customCourse/view">이론점검 프로젝트-1~4월 정규 강의</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet tLength3"><!-- 2021-07-14 클래스 추가 -->
                    <input type="checkbox" id="toggle10" checked>
                    <label for="toggle10">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>641</td>
                <td>온라인</td>
                <td class="tL"><router-link to="/mkup/lecture/customCourse/view">이론점검 프로젝트-1~4월 정규 강의</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <!-- //테이블 목록 -->
        <Paginate />
      </div>
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'CustomCourse',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
