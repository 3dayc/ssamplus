<template lang="html">
  <div>
    <div class="pageTit">
      <h2>과목별 시험지 관리</h2>
      <span><router-link to="/mkup/mocktest/multiTest">모의고사 관리</router-link><em>과목별 시험지 관리</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="paperMgt"><!-- class 없어도 유지 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">노출여부</option>
                      <option value="">허용</option>
                      <option value="">숨김</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">과목</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">선생님</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="시험 명" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
          <div class="right-po"><router-link class="btnAdd" to="/mkup/mocktest/paperMgt/write">신규등록</router-link></div>
        </div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="200">
              <col width="550">
              <col width="180">
              <col width="160">
              <col width="160">
              <col width="140">
              <col width="140">
              <col width="160">
            </colgroup>
            <thead>
              <tr>
                <th>시험코드</th>
                <th>시험 명</th>
                <th>시험분류</th>
                <th>과목</th>
                <th>선생님</th>
                <th>시험시간</th>
                <th>해설강의</th>
                <th>노출여부</th>
              </tr>
            </thead>
            <tbody>
              <tr class="red">
                <td>K2021010101002</td>
                <td class="tL"><router-link to="/mkup/mocktest/paperMgt/view">2021학년도 대비-8월 적중 온라인 모의고사(2)</router-link></td>
                <td>유아,유초특</td>
                <td>유아</td>
                <td>배지윤</td>
                <td>100분</td>
                <td>제공</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1" checked>
                    <label for="push1">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr class="red">
                <td>K2021010101001</td>
                <td class="tL"><router-link to="/mkup/mocktest/paperMgt/view">2021학년도 대비-8월 적중 온라인 모의고사(1)</router-link></td>
                <td>유아,유초특</td>
                <td>유아</td>
                <td>배지윤</td>
                <td>100분</td>
                <td>제공</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push2" checked>
                    <label for="push2">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr>
                <td>K2021010101008</td>
                <td class="tL"><router-link to="/mkup/mocktest/paperMgt/view">2021학년도 대비-5월 적중 온라인 모의고사(2)</router-link></td>
                <td>중등, 중특</td>
                <td>체육</td>
                <td>김용호</td>
                <td>100분</td>
                <td>미제공</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push3" checked>
                    <label for="push3">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr>
                <td>K2021010101007</td>
                <td class="tL"><router-link to="/mkup/mocktest/paperMgt/view">2021학년도 대비-5월 적중 온라인 모의고사</router-link></td>
                <td>중등, 중특</td>
                <td>국어</td>
                <td>박노송</td>
                <td>100분</td>
                <td>제공</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push4" checked>
                    <label for="push4">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr class="blue">
                <td>K2021010101006</td>
                <td class="tL"><router-link to="/mkup/mocktest/paperMgt/view">2021학년도 대비-5월 적중 온라인모의고사(4)</router-link></td>
                <td>중등, 중특</td>
                <td>체육</td>
                <td>김용호</td>
                <td>100분</td>
                <td>미제공</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push5" checked>
                    <label for="push5">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr class="blue">
                <td>K2021010101005</td>
                <td class="tL"><router-link to="/mkup/mocktest/paperMgt/view">2021학년도 대비-5월 적중 온라인모의고사(3)</router-link></td>
                <td>중등, 중특</td>
                <td>체육</td>
                <td>김용호</td>
                <td>100분</td>
                <td>미제공</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push6" checked>
                    <label for="push6">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr class="gray">
                <td>K2021010101004</td>
                <td class="tL"><router-link to="/mkup/mocktest/paperMgt/view">2021학년도 대비-5월 적중 온라인모의고사(1)</router-link></td>
                <td>중등, 중특</td>
                <td>체육</td>
                <td>김용호</td>
                <td>100분</td>
                <td>제공</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push7">
                    <label for="push7">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr class="gray">
                <td>K2021010101003</td>
                <td class="tL"><router-link to="/mkup/mocktest/paperMgt/view">[희소전국모의고사] 체육 김용호 하프모의고사(A형)</router-link></td>
                <td>중등, 중특</td>
                <td>체육</td>
                <td>김용호</td>
                <td>100분</td>
                <td>제공</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push8">
                    <label for="push8">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr class="gray">
                <td>K2021010101002</td>
                <td class="tL"><router-link to="/mkup/mocktest/paperMgt/view">[희소전국모의고사] 국어 박노송 하프모의고사(A형)</router-link></td>
                <td>중등, 중특</td>
                <td>국어</td>
                <td>박노송</td>
                <td>100분</td>
                <td>미제공</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push9">
                    <label for="push9">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr class="gray">
                <td>K2021010101001</td>
                <td class="tL"><router-link to="/mkup/mocktest/paperMgt/view">[희소전국모의고사] 가정 문영은 하프모의고사(A형)</router-link></td>
                <td>중등, 중특</td>
                <td>가정</td>
                <td>문영은</td>
                <td>100분</td>
                <td>제공</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push10">
                    <label for="push10">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Paginate />
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
  name: 'PaperMgt',
  data() {
    return {
    }
  },
  methods: {
  },
	components: {
	},
}
</script>
