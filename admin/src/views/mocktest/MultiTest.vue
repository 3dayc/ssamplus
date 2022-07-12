<template lang="html">
  <div>
    <div class="pageTit">
      <h2>희소 모의고사 관리</h2>
      <span><router-link to="/mkup/mocktest/multiTest">모의고사 관리</router-link><em>희소 모의고사 관리</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="multiTest"><!-- class 없어도 유지 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">판매유형 </option>
                      <option value="">전체</option>
                      <option value="">복합</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">접수현황 </option>
                      <option value="">전체</option>
                      <option value="">접수예정</option>
                      <option value="">접수 중</option>
                      <option value="">신청마감</option>
                      <option value="">접수마감</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">응시현황 </option>
                      <option value="">전체</option>
                      <option value="">응시예정</option>
                      <option value="">응시 중</option>
                      <option value="">응시마감</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">과목 </option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">선생님 </option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="모의고사명 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
          <div class="right-po"><router-link class="btnAdd" to="/mkup/mocktest/multiTest/write">신규등록</router-link></div>
        </div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="100">
              <col width="140">
              <col width="450">
              <col width="200">
              <col width="100">
              <col width="100">
              <col width="120">
              <col width="80">
              <col width="80">
              <col width="80">
              <col width="100">
            </colgroup>
            <thead class="duble">
              <tr>
                <th scope="col" rowspan="2">판매여부</th>
                <th scope="col" rowspan="2">모의고사 코드</th>
                <th scope="col" rowspan="2">모의고사명</th>
                <th scope="col" rowspan="2">접수기간</th>
                <th scope="col" rowspan="2">판매유형</th>
                <th scope="col" rowspan="2">접수현황</th>
                <th scope="col" rowspan="2">모집인원<br/>(사전모집)</th>
                <th scope="col" colspan="3">접수인원 (일반/사전)</th>
                <th scope="col" rowspan="2">응시현황</th>
              </tr>
              <tr>
                <th scope="col">현장<br/>(채점)</th>
                <th scope="col">온라인<br/>(채점)</th>
                <th scope="col">온라인<br/>(자가채점)</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1" checked="">
                    <label for="push1">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td>A20210101010</td>
                <td class="tL"><router-link to="/mkup/mocktest/multiTest/view">2022년 상반기 희소 모의고사</router-link></td>
                <td>2021-04-26 ~ 2021-04-30</td>
                <td>복합(5)</td>
                <td>접수예정</td>
                <td>50/50/50<br/>(20/20/20)</td>
                <td>22/35<br/>(15/20)</td>
                <td>29/38<br/>(12/20)</td>
                <td>29/36<br/>(14/20)</td>
                <td>응시예정</td>
              </tr>
              <!--//Loop-->
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push2" checked="">
                    <label for="push2">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td>A20210101009</td>
                <td class="tL"><router-link to="/mkup/mocktest/multiTest/view">상반기 출제위원 모의고사</router-link></td>
                <td>2021-05-01 ~ 2021-05-06</td>
                <td>복합(10)</td>
                <td>접수예정</td>
                <td>50/50/50</td>
                <td>22/35<br/></td>
                <td>29/38<br/></td>
                <td>29/36<br/></td>
                <td>응시예정</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push3" checked="">
                    <label for="push3">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td>A20210101008</td>
                <td class="tL"><router-link to="/mkup/mocktest/multiTest/view">2021년 하반기 희소 모의고사</router-link></td>
                <td>2021-05-01 ~ 2021-05-06</td>
                <td>복합(5)</td>
                <td>접수 중</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>응시예정</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push4" checked="">
                    <label for="push4">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td>A20210101007</td>
                <td class="tL"><router-link to="/mkup/mocktest/multiTest/view">2021년 하반기 희소 모의고사</router-link></td>
                <td>2021-05-01 ~ 2021-05-06</td>
                <td>복합(10)</td>
                <td>접수 중</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>응시예정</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push5">
                    <label for="push5">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td>A20210101006</td>
                <td class="tL"><router-link to="/mkup/mocktest/multiTest/view">2020년 하반기 희소 모의고사</router-link></td>
                <td>2021-05-01 ~ 2021-05-06</td>
                <td>복합(5)</td>
                <td>접수 중</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>응시예정</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push6" checked="">
                    <label for="push6">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td>A20210101005</td>
                <td class="tL"><router-link to="/mkup/mocktest/multiTest/view">2020년 하반기 희소 모의고사</router-link></td>
                <td>2021-05-01 ~ 2021-05-06</td>
                <td>복합(10)</td>
                <td>신청마감</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>응시 중</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push7" checked="">
                    <label for="push7">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td>A20210101004</td>
                <td class="tL"><router-link to="/mkup/mocktest/multiTest/view">2019년 하반기 희소 모의고사</router-link></td>
                <td>2021-05-01 ~ 2021-05-06</td>
                <td>복합(5)</td>
                <td>신청마감</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>응시 중</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push8" checked="">
                    <label for="push8">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td>A20210101003</td>
                <td class="tL">2019년 하반기 희소 모의고사</td>
                <td>2021-05-01 ~ 2021-05-06</td>
                <td>복합(10)</td>
                <td>접수마감</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>응시 중</td>
              </tr>
              <tr class="gray">
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push9" checked="">
                    <label for="push9">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td>A20210101002</td>
                <td class="tL"><router-link to="/mkup/mocktest/multiTest/view">형성 평가1(봉투모의고사)</router-link></td>
                <td>2021-04-19 ~ 2021-04-23</td>
                <td>복합(5)</td>
                <td>접수마감</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>응시마감</td>
              </tr>
              <tr class="gray">
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push10" checked="">
                    <label for="push10">
                      <span>숨김</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td>A20210101001</td>
                <td class="tL"><router-link to="/mkup/mocktest/multiTest/view">가정 문영은 하프모의고사(A형)_비첨삭</router-link></td>
                <td>2021-04-19 ~ 2021-04-23</td>
                <td>복합(10)</td>
                <td>접수마감</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>응시마감</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="11" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
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
  name: 'MultiTest',
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
