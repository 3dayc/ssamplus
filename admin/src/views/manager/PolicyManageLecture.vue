<template lang="html">
  <div>
    <!-- page layout -->
    <div class="policyManageLecture">
      <!-- 공통 -->
      <div class="subTit">
        <h3>공통</h3>
        <span class="right">
          <button class="btnM green">저장</button>
          <button class="btnM gray ml10">취소</button>
        </span>
      </div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="150"/>
            <col width="500"/>
            <col width="150"/>
            <col width="500"/>
          </colgroup>
          <thead>
            <tr>
              <th>자동 시작일</th>
              <td>
                <span class="unit small">
                  <input type="text" value="10"><em>일</em>
                </span>
                후
              </td>
              <th>수강인원</th>
              <td>
                온라인
                <span class="unit small ml10 mr20">
                  <input type="text" value="1000"><em>명</em>
                </span>
                학원
                <span class="unit small ml10">
                  <input type="text" value="400"><em>명</em>
                </span>
              </td>
            </tr>
          </thead>
        </table>
      </div>
      <!-- //공통 -->
      <!-- 직강 주차별 정책 -->
      <div class="subTit"><h3>직강 주차별 정책 - <em class="fBlue">8주</em></h3></div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="150"/>
            <col width="500"/>
            <col width="150"/>
            <col width="500"/>
            <col width="150"/>
            <col width="500"/>
          </colgroup>
          <thead>
            <tr>
              <th>강의 횟수</th>
              <td>
                <span class="unit small">
                  <input type="text" value="8"><em>회</em>
                </span>
              </td>
              <th>수강기간</th>
              <td>
                <span class="unit small">
                  <input type="text" value="70"><em>일</em>
                </span>
              </td>
              <th>수강제한</th>
              <td>
                <span class="unit small">
                  <input type="text" value="140"><em>%</em>
                </span>
              </td>
            </tr>
            <tr>
              <th>홀딩</th>
              <td>
                <span class="unit small">
                  <input type="text" value="30"><em>일</em>
                </span>
                간
                <span class="unit small ml10">
                  <input type="text" value="3"><em>회</em>
                </span>
              </td>
              <th>연장</th>
              <td>
                <span class="unit small">
                  <input type="text" value="15"><em>일</em>
                </span>
                간
                <span class="unit small ml10">
                  <input type="text" value="3"><em>회</em>
                </span>
              </td>
              <th>재수강</th>
              <td>
                <span class="radioSet">
                  <input type="radio" name="radio1" />
                  <label for=""><i></i>가능</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio1" />
                  <label for=""><i></i>불가능</label>
                </span>
              </td>
              <tr>
                <th>학원 보강</th>
                <td colspan="5">
                  무료
                  <span class="unit small ml10">
                    <input type="text" value="2"><em>회</em>
                  </span>
                  <span class="ml10 mr10">/</span>
                  유료
                  <span class="unit small ml10">
                    <input type="text" value="2"><em>회</em>
                  </span>
                </td>
              </tr>
            </tr>
          </thead>
        </table>
      </div>
      <!-- //직강 주차별 정책 -->
      <!-- 직강 주차별 정책 -->
      <div class="subTit"><h3>직강 주차별 정책 - <em class="fBlue">10주</em></h3></div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="150"/>
            <col width="500"/>
            <col width="150"/>
            <col width="500"/>
            <col width="150"/>
            <col width="500"/>
          </colgroup>
          <thead>
            <tr>
              <th>강의 횟수</th>
              <td>
                <span class="unit small">
                  <input type="text" value="8"><em>회</em>
                </span>
              </td>
              <th>수강기간</th>
              <td>
                <span class="unit small">
                  <input type="text" value="70"><em>일</em>
                </span>
              </td>
              <th>수강제한</th>
              <td>
                <span class="unit small">
                  <input type="text" value="140"><em>%</em>
                </span>
              </td>
            </tr>
            <tr>
              <th>홀딩</th>
              <td>
                <span class="unit small">
                  <input type="text" value="30"><em>일</em>
                </span>
                간
                <span class="unit small ml10">
                  <input type="text" value="3"><em>회</em>
                </span>
              </td>
              <th>연장</th>
              <td>
                <span class="unit small">
                  <input type="text" value="15"><em>일</em>
                </span>
                간
                <span class="unit small ml10">
                  <input type="text" value="3"><em>회</em>
                </span>
              </td>
              <th>재수강</th>
              <td>
                <span class="radioSet">
                  <input type="radio" name="radio2" />
                  <label for=""><i></i>가능</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio2" />
                  <label for=""><i></i>불가능</label>
                </span>
              </td>
              <tr>
                <th>학원 보강</th>
                <td colspan="5">
                  무료
                  <span class="unit small ml10">
                    <input type="text" value="2"><em>회</em>
                  </span>
                  <span class="ml10 mr10">/</span>
                  유료
                  <span class="unit small ml10">
                    <input type="text" value="2"><em>회</em>
                  </span>
                </td>
              </tr>
            </tr>
          </thead>
        </table>
      </div>
      <!-- //직강 주차별 정책 -->
      <!-- 직강 주차별 정책 -->
      <div class="subTit"><h3>직강 주차별 정책 - <em class="fBlue">12주</em></h3></div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="150"/>
            <col width="500"/>
            <col width="150"/>
            <col width="500"/>
            <col width="150"/>
            <col width="500"/>
          </colgroup>
          <thead>
            <tr>
              <th>강의 횟수</th>
              <td>
                <span class="unit small">
                  <input type="text" value="8"><em>회</em>
                </span>
              </td>
              <th>수강기간</th>
              <td>
                <span class="unit small">
                  <input type="text" value="70"><em>일</em>
                </span>
              </td>
              <th>수강제한</th>
              <td>
                <span class="unit small">
                  <input type="text" value="140"><em>%</em>
                </span>
              </td>
            </tr>
            <tr>
              <th>홀딩</th>
              <td>
                <span class="unit small">
                  <input type="text" value="30"><em>일</em>
                </span>
                간
                <span class="unit small ml10">
                  <input type="text" value="3"><em>회</em>
                </span>
              </td>
              <th>연장</th>
              <td>
                <span class="unit small">
                  <input type="text" value="15"><em>일</em>
                </span>
                간
                <span class="unit small ml10">
                  <input type="text" value="3"><em>회</em>
                </span>
              </td>
              <th>재수강</th>
              <td>
                <span class="radioSet">
                  <input type="radio" name="radio3" />
                  <label for=""><i></i>가능</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio3" />
                  <label for=""><i></i>불가능</label>
                </span>
              </td>
              <tr>
                <th>학원 보강</th>
                <td colspan="5">
                  무료
                  <span class="unit small ml10">
                    <input type="text" value="2"><em>회</em>
                  </span>
                  <span class="ml10 mr10">/</span>
                  유료
                  <span class="unit small ml10">
                    <input type="text" value="2"><em>회</em>
                  </span>
                </td>
              </tr>
            </tr>
          </thead>
        </table>
      </div>
      <!-- //직강 주차별 정책 -->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PolicyManageLecture',
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
