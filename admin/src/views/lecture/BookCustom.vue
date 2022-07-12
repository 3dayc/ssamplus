<template lang="html">
  <div>
		<div class="pageTit">
			<h2>사용자 정의교재</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/bookMgt">교재 관리</router-link><em>사용자 정의교재</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="bookMgt">
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
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
          <div class="right-po">
            <router-link to="/mkup/lecture/bookCustom/write" class="btnAdd">신규등록</router-link>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="100"/>
              <col width="100"/>
              <col width="*">
              <col width="250"/>
              <col width="150"/>
            </colgroup>
            <thead>
              <tr>
                <th>사용여부</th>
                <th>관리번호</th>
                <th>제목</th>
                <th>유효기간</th>
                <th>등록일자</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>
                  <span class="labelToggleSet tLength3">
                    <input type="checkbox" id="toggle1" checked>
                    <label for="toggle1">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>65</td>
                <td class="tL"><router-link to="/mkup/lecture/bookCustom/view">교재 이벤트</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <!--//Loop-->
              <tr>
                <td>
                  <span class="labelToggleSet tLength3">
                    <input type="checkbox" id="toggle2" checked>
                    <label for="toggle2">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>64</td>
                <td class="tL"><router-link to="/mkup/lecture/bookCustom/view">신태식 교육학 기출문제집</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr class="expiry">
                <td>
                  <span class="labelToggleSet tLength3">
                    <input type="checkbox" id="toggle3" >
                    <label for="toggle3">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>63</td>
                <td class="tL"><router-link to="/mkup/lecture/bookCustom/view">이론교재 스포일러 (2021년 이론교재 프로모션)</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet tLength3">
                    <input type="checkbox" id="toggle4" checked>
                    <label for="toggle4">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>62</td>
                <td class="tL"><router-link to="/mkup/lecture/bookCustom/view">희소와 함께하는 이론교재 빅3 이벤트</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet tLength3">
                    <input type="checkbox" id="toggle5" checked>
                    <label for="toggle5">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>61</td>
                <td class="tL"><router-link to="/mkup/lecture/bookCustom/view">교재 이벤트</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet tLength3">
                    <input type="checkbox" id="toggle6" checked>
                    <label for="toggle6">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>60</td>
                <td class="tL"><router-link to="/mkup/lecture/bookCustom/view">신태식 교육학 기출문제집</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr class="expiry">
                <td>
                  <span class="labelToggleSet tLength3">
                    <input type="checkbox" id="toggle7" >
                    <label for="toggle7">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>59</td>
                <td class="tL"><router-link to="/mkup/lecture/bookCustom/view">이론교재 스포일러 (2021년 이론교재 프로모션)</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet tLength3">
                    <input type="checkbox" id="toggle8" checked>
                    <label for="toggle8">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>58</td>
                <td class="tL"><router-link to="/mkup/lecture/bookCustom/view">희소와 함께하는 이론교재 빅3 이벤트</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet tLength3">
                    <input type="checkbox" id="toggle9" checked>
                    <label for="toggle9">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>57</td>
                <td class="tL"><router-link to="/mkup/lecture/bookCustom/view">희소와 함께하는 이론교재 빅3 이벤트</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
                <td>
                  <span class="labelToggleSet tLength3">
                    <input type="checkbox" id="toggle10" checked>
                    <label for="toggle10">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>56</td>
                <td class="tL"><router-link to="/mkup/lecture/bookCustom/view">희소와 함께하는 이론교재 빅3 이벤트</router-link></td>
                <td>2021-01-01 ~ 2021-12-31</td>
                <td>2021-01-01</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'BookCustom',
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
