<template lang="html">
  <div>
		<div class="pageTit">
			<h2>굿즈 등록/현황</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/merchMgt">굿즈 관리</router-link><em>굿즈 등록/현황</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="merchMgt">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">분류</option>
                      <option value="">패브릭</option>
                      <option value="">문구</option>
                      <option value="">기타(굿즈)</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <div class="multiselectSet" style="width:150px;">
                    <div class="selectSet lCase" @click="multiSelect($event)">
                      <select>
                        <option>재고 상태</option>
                      </select>
                      <div class="overSelect"></div>
                    </div>
                    <div class="checkArea">
                      <span class="checkSet">
                        <input type="checkbox" id="one" checked/>
                        <label for="one"><i></i>발간예정</label>
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
                  <input type="text" placeholder="굿즈 코드, 굿즈명 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
          <div class="right-po">
            <router-link to="/mkup/lecture/merchMgt/write" class="btnAdd">신규등록</router-link>
            <button class="btnDownload">다운로드</button> <!--2021-06-30-->
          </div>
        </div>
        <!-- //테이블 유틸 -->

        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="100"/>
              <col width="130"/>
              <col width="150"/>
              <col width="*">
              <col width="130"/>
              <col width="250"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th scope="col">노출여부</th>
                <th scope="col">굿즈 분류</th>
                <th scope="col">굿즈 코드</th>
                <th scope="col">굿즈명</th>
                <th scope="col">정가<br/>(일반 회원가)</th>
                <th scope="col">재고 상태(온라인)</th>
                <th scope="col">총 판매량</th>
                <th scope="col">잔여재고<br/>(합계)</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle1" checked>
                    <label for="toggle1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>패브릭</td>
                <td>e1521e00001</td>
                <td class="tL"><router-link to="/mkup/lecture/merchMgt/view">다노 밸런스 쿠션</router-link></td>
                <td>49,000<br/>(40,000)</td>
                <td>재고보유</td>
                <td>
                  <span class="memoTooltip">
    								<em>143</em>
    								<span class="tC">온라인 (100) | 학원 (43)</span>
    							</span>
                </td>
                <td>
                  <span class="memoTooltip">
    								<em>8</em>
    								<span class="tC">온라인 (8) | 이데아 (0) | 아이비 (0)</span>
    							</span>
                </td>
              </tr>
              <!--//Loop-->
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle2" checked>
                    <label for="toggle2">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>문구</td>
                <td>e1521e00001</td>
                <td class="tL"><router-link to="/mkup/lecture/merchMgt/view">합격 만능펜</router-link></td>
                <td>130,000<br/>(125,000)</td>
                <td><a class="fRed">일시품절</a></td>
                <td>
                  <span class="memoTooltip">
                    <em>256</em>
                    <span class="tC">온라인 (200) | 학원 (56)</span>
                  </span>
                </td>
                <td>
                  <span class="memoTooltip">
                    <em>0</em>
                    <span class="tC">온라인 (0) | 이데아 (0) | 아이비 (0)</span>
                  </span>
                </td>
              </tr>
              <tr class="expiry">
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle3" >
                    <label for="toggle3">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>기타(굿즈)</td>
                <td>e1521e00001</td>
                <td class="tL"><router-link to="/mkup/lecture/merchMgt/view">2021 합격엿</router-link></td>
                <td>12,000<br/>(10,000)</td>
                <td>판매종료</td>
                <td>
                  <span class="memoTooltip">
                    <em>3</em>
                    <span class="tC">온라인 (3) | 학원 (0)</span>
                  </span>
                </td>
                <td>
                  <span class="memoTooltip">
                    <em>0</em>
                    <span class="tC">온라인 (0) | 이데아 (0) | 아이비 (0)</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle4" checked>
                    <label for="toggle4">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>패브릭</td>
                <td>e1521e00001</td>
                <td class="tL"><router-link to="/mkup/lecture/merchMgt/view">다노 밸런스 쿠션</router-link></td>
                <td>49,000<br/>(40,000)</td>
                <td>-</td>
                <td>
                  <span class="memoTooltip">
                    <em>541</em>
                    <span class="tC">온라인 (0) | 학원 (541)</span>
                  </span>
                </td>
                <td>
                  <span class="memoTooltip">
                    <em>0</em>
                    <span class="tC">온라인 (0) | 이데아 (0) | 아이비 (0)</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle5" checked>
                    <label for="toggle5">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>문구</td>
                <td>e1521e00001</td>
                <td class="tL"><router-link to="/mkup/lecture/merchMgt/view">합격 만능펜</router-link></td>
                <td>130,000<br/>(125,000)</td>
                <td><a class="fRed">일시품절</a></td>
                <td>
                  <span class="memoTooltip">
                    <em>0</em>
                    <span class="tC">온라인 (0) | 학원 (0)</span>
                  </span>
                </td>
                <td>
                  <span class="memoTooltip">
                    <em>0</em>
                    <span class="tC">온라인 (0) | 이데아 (0) | 아이비 (0)</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle6" >
                    <label for="toggle6">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>기타(굿즈)</td>
                <td>e1521e00001</td>
                <td class="tL"><router-link to="/mkup/lecture/merchMgt/view">2021 합격엿</router-link></td>
                <td>12,000<br/>(10,000)</td>
                <td>재고보유</td>
                <td>
                  <span class="memoTooltip">
                    <em>343</em>
                    <span class="tC">온라인 (300) | 학원 (43)</span>
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
                    <input type="checkbox" id="toggle7" checked>
                    <label for="toggle7">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>패브릭</td>
                <td>e1521e00001</td>
                <td class="tL"><router-link to="/mkup/lecture/merchMgt/view">다노 밸런스 쿠션</router-link></td>
                <td>49,000<br/>(40,000)</td>
                <td><a class="fRed">주문필요</a></td>
                <td>
                  <span class="memoTooltip">
                    <em>0</em>
                    <span class="tC">온라인 (0) | 학원(0)</span>
                  </span>
                </td>
                <td>
                  <span class="memoTooltip">
                    <em>0</em>
                    <span class="tC">온라인 (0) | 이데아 (0) | 아이비 (0)</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle8" checked>
                    <label for="toggle8">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>문구</td>
                <td>e1521e00001</td>
                <td class="tL"><router-link to="/mkup/lecture/merchMgt/view">합격 만능펜</router-link></td>
                <td>130,000<br/>(125,000)</td>
                <td>-</td>
                <td>
                  <span class="memoTooltip">
                    <em>111</em>
                    <span class="tC">온라인 (111) | 학원(0)</span>
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
                    <input type="checkbox" id="toggle9">
                    <label for="toggle9">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>기타(굿즈)</td>
                <td>e1521e00001</td>
                <td class="tL"><router-link to="/mkup/lecture/merchMgt/view">2021 합격엿</router-link></td>
                <td>12,000<br/>(10,000)</td>
                <td>재고보유</td>
                <td>
                  <span class="memoTooltip">
                    <em>0</em>
                    <span class="tC">온라인 (0) | 학원(0)</span>
                  </span>
                </td>
                <td>
                  <span class="memoTooltip">
                    <em>100</em>
                    <span class="tC">온라인 (50) | 이데아 (30) | 아이비 (20)</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle10" checked>
                    <label for="toggle10">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>패브릭</td>
                <td>e1521e00001</td>
                <td class="tL"><router-link to="/mkup/lecture/merchMgt/view">다노 밸런스 쿠션</router-link></td>
                <td>49,000<br/>(40,000)</td>
                <td><a class="fRed">판매예정</a></td>
                <td>-</td>
                <td>-</td>
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
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MerchMgt',
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
