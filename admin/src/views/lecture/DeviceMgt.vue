<template lang="html">
  <div>
		<div class="pageTit">
			<h2>학습기기 등록/현황</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/deviceMgt">학습기기 관리</router-link><em>학습기기 등록/현황</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="goodsMgt">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">분류</option>
                      <option value="">노트북</option>
                      <option value="">태블릿</option>
                      <option value="">스마트폰</option>
                      <option value="">기타</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <div class="multiselectSet">
                    <div class="selectSet lCase" @click="multiSelect($event)">
                      <select>
                        <option>재고 상태</option>
                      </select>
                      <div class="overSelect"></div>
                    </div>
                    <div class="checkArea">
                      <span class="checkSet">
                        <input type="checkbox" id="one" checked/>
                        <label for="one"><i></i>판매예정</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="two" checked/>
                        <label for="two"><i></i>재고보유</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="three" checked/>
                        <label for="three"><i></i>주문필요</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="four" checked/>
                        <label for="four"><i></i>일시품절</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="five" checked/>
                        <label for="five"><i></i>판매종료</label>
                      </span>
                    </div>
                  </div>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="학습기기 코드, 학습기기명 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
          <div class="right-po">
            <router-link to="/mkup/lecture/deviceMgt/write" class="btnAdd">신규등록</router-link>
            <button class="btnDownload">다운로드</button>
          </div>
        </div>
        <!-- //테이블 유틸 -->

        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="120">
              <col width="60">
              <col width="120">
              <col width="160">
              <col width="*">
              <col width="140">
              <col width="80">
              <col width="80">
              <col width="80">
              <col width="100">
              <col width="100">
            </colgroup>
            <thead class="duble">
              <tr>
                <th scope="col" rowspan="2">노출여부</th>
                <th scope="col" rowspan="2">쌤몰홈<br/>추천</th>
                <th scope="col" rowspan="2">학습기기<br/>분류</th>
                <th scope="col" rowspan="2">학습기기 코드</th>
                <th scope="col" rowspan="2">학습기기명</th>
                <th scope="col" rowspan="2">정가<br/>(일반 회원가)</th>
                <th scope="col" colspan="3">재고 상태</th>
                <th scope="col" rowspan="2">총 판매량</th>
                <th scope="col" rowspan="2">잔여재고<br/>(합계)</th>
              </tr>
              <tr>
                <th>온라인</th>
                <th>이데아</th>
                <th class="borderRight">아이비</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1" checked>
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="recommend10" checked>
                    <label for="recommend10"><i></i></label>
                  </span>
                </td>
                <td>노트북</td>
                <td>e1521a00001</td>
                <td class="tL"><router-link to="/mkup/lecture/deviceMgt/view">갤럭시 북 FLEX 알파</router-link></td>
                <td>1,449,000<br/>(1,400,000)</td>
                <td colspan="3">재고보유</td>
                <td>
                  <span class="memoTooltip">
    								<em>143</em>
    								<span class="tC">온라인 (141) | 학원 (2)</span>
    							</span>
                </td>
                <td>
                  <span class="memoTooltip">
    								<em>8</em>
    								<span class="tC">온라인 (5) | 학원 (3)</span>
    							</span>
                </td>
              </tr>
              <!--//Loop-->
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push2" checked>
                    <label for="push2">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="recommend9" >
                    <label for="recommend9"><i></i></label>
                  </span>
                </td>
                <td>태블릿</td>
                <td>e1521a00001</td>
                <td class="tL"><router-link to="/mkup/lecture/deviceMgt/view">갤럭시 탭A 10.1</router-link></td>
                <td>330,000<br/>(13,500)</td>
                <td colspan="3" class="fRed">일시품절</td>
                <td>
                  <span class="memoTooltip">
    								<em>3</em>
    								<span class="tC">온라인 (2) | 학원 (1)</span>
    							</span>
                </td>
                <td>
                  <span class="memoTooltip">
    								<em>0</em>
    								<span class="tC">온라인 (0) | 학원 (0)</span>
    							</span>
                </td>
              </tr>
              <tr class="expiry">
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push3" >
                    <label for="push3">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="recommend9" >
                    <label for="recommend9"><i></i></label>
                  </span>
                </td>
                <td>스마트폰</td>
                <td>e1521a00001</td>
                <td class="tL"><router-link to="/mkup/lecture/deviceMgt/view">갤럭시 S21 울트라</router-link></td>
                <td>990,000<br/>(900,000)</td>
                <td colspan="3">판매종료</td>
                <td>
                  <span class="memoTooltip">
    								<em>3</em>
    								<span class="tC">온라인 (2) | 학원 (1)</span>
    							</span>
                </td>
                <td>
                  <span class="memoTooltip">
    								<em>0</em>
    								<span class="tC">온라인 (0) | 학원 (0)</span>
    							</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push4" checked>
                    <label for="push4">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="recommend9" checked>
                    <label for="recommend9"><i></i></label>
                  </span>
                </td>
                <td>기타</td>
                <td>e1521a00001</td>
                <td class="tL"><router-link to="/mkup/lecture/deviceMgt/view">2021 교육학 OMR 답안지</router-link></td>
                <td>15,000<br/>(13,500)</td>
                <td>재고보유</td>
                <td>재고보유</td>
                <td>재고보유</td>
                <td>
                  <span class="memoTooltip">
    								<em>541</em>
    								<span class="tC">온라인 (300) | 이데아 (20) | 아이비 (23)</span>
    							</span>
                </td>
                <td>
                  <span class="memoTooltip">
    								<em>43</em>
    								<span class="tC">온라인 (10) | 이데아 (20) | 아이비 (13)</span>
    							</span>
                </td>
              </tr>
              <tr>
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
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="recommend9" >
                    <label for="recommend9"><i></i></label>
                  </span>
                </td>
                <td>노트북 </td>
                <td>e1521a00001</td>
                <td class="tL"><router-link to="/mkup/lecture/deviceMgt/view">갤럭시 북 FLEX 알파</router-link></td>
                <td>1,449,000<br/>(1,400,000)</td>
                <td class="fRed" colspan="3">일시품절</td>
                <td>
                  <span class="memoTooltip">
    								<em>0</em>
    								<span class="tC">온라인 (0) | 학원 (0)</span>
    							</span>
                </td>
                <td>
                  <span class="memoTooltip">
    								<em>0</em>
    								<span class="tC">온라인 (0) | 학원 (0)</span>
    							</span>
                </td>
              </tr>
              <tr>
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
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="recommend9" >
                    <label for="recommend9"><i></i></label>
                  </span>
                </td>
                <td>태블릿 </td>
                <td>e1521a00001</td>
                <td class="tL"><router-link to="/mkup/lecture/deviceMgt/view">갤럭시 탭A 10.1</router-link></td>
                <td>330,000<br/>(13,500)</td>
                <td colspan="3">재고보유</td>
                <td>
                  <span class="memoTooltip">
    								<em>343</em>
    								<span class="tC">온라인 (331) | 학원 (12)</span>
    							</span>
                </td>
                <td>
                  <span class="memoTooltip">
    								<em>43</em>
    								<span class="tC">온라인 (22) | 학원 (21)</span>
    							</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push7" checked>
                    <label for="push7">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="recommend9" >
                    <label for="recommend9"><i></i></label>
                  </span>
                </td>
                <td>스마트폰</td>
                <td>e1521a00001</td>
                <td class="tL"><router-link to="/mkup/lecture/deviceMgt/view">갤럭시 S21 울트라</router-link></td>
                <td>990,000<br/>(900,000)</td>
                <td colspan="3" class="fRed">주문필요</td>
                <td>
                  <span class="memoTooltip">
    								<em>0</em>
    								<span class="tC">온라인 (0) | 학원 (0)</span>
    							</span>
                </td>
                <td>
                  <span class="memoTooltip">
    								<em>0</em>
    								<span class="tC">온라인 (0) | 학원 (0)</span>
    							</span>
                </td>
              </tr>
              <tr>
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
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="recommend9" >
                    <label for="recommend9"><i></i></label>
                  </span>
                </td>
                <td>기타</td>
                <td>e1521a00001</td>
                <td class="tL"><router-link to="/mkup/lecture/deviceMgt/view">2021 교육학 OMR 답안지</router-link></td>
                <td>15,000<br/>(13,500)</td>
                <td class="fRed">주문필요</td>
                <td>재고보유</td>
                <td class="fRed">일시품절</td>
                <td>
                  <span class="memoTooltip">
    								<em>111</em>
    								<span class="tC">온라인 (1) | 이데아 (110) | 아이비 (0)</span>
    							</span>
                </td>
                <td>
                  <span class="memoTooltip">
    								<em>23</em>
    								<span class="tC">온라인 (22) | 이데아 (1) | 아이비 (0)</span>
    							</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push9">
                    <label for="push9">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="recommend9" >
                    <label for="recommend9"><i></i></label>
                  </span>
                </td>
                <td>노트북 </td>
                <td>e1521a00001</td>
                <td class="tL"><router-link to="/mkup/lecture/deviceMgt/view">갤럭시 북 FLEX 알파</router-link></td>
                <td>1,449,000<br/>(1,400,000)</td>
                <td colspan="3">재고보유</td>
                <td>
                  <span class="memoTooltip">
    								<em>0</em>
    								<span class="tC">온라인 (0) | 학원 (0)</span>
    							</span>
                </td>
                <td>
                  <span class="memoTooltip">
    								<em>100</em>
    								<span class="tC">온라인 (44) | 학원 (56)</span>
    							</span>
                </td>
              </tr>
              <tr>
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
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="recommend9" >
                    <label for="recommend9"><i></i></label>
                  </span>
                </td>
                <td>태블릿 </td>
                <td>e1521a00001</td>
                <td class="tL"><router-link to="/mkup/lecture/deviceMgt/view">갤럭시 탭A 10.1</router-link></td>
                <td>330,000<br/>(13,500)</td>
                <td colspan="3" class="fRed">판매예정</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="11" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'DeviceMgt',
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
