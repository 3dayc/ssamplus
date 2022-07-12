<template lang="html">
  <div>
		<div class="pageTit">
			<h2>교재 등록/현황</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/bookMgt">교재 관리</router-link><em>교재 등록/현황</em></span>
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
                  <input type="text" placeholder="교재명, 저자 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
          <div class="right-po">
            <router-link to="/mkup/lecture/bookMgt/write" class="btnAdd">신규등록</router-link>
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
              <col width="110"/>
              <col width="*">
              <col width="100"/>
              <col width="150"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead class="duble">
              <tr>
                <th scope="col" rowspan="2">노출여부</th>
                <th scope="col" rowspan="2">도서코드</th>
                <th scope="col" rowspan="2">과목<br/>/선생님</th>
                <th scope="col" rowspan="2">교재명</th>
                <th scope="col" rowspan="2">저자</th>
                <th scope="col" rowspan="2">정가<br/>(일반 회원가)</th>
                <th scope="col" colspan="3">재고 상태</th>
                <th scope="col" rowspan="2">최근 7일<br/>판매량</th>
                <th scope="col" rowspan="2">잔여재고<br/>(합계)</th>
              </tr>
              <tr>
                <th>온라인</th>
                <th>이데아</th>
                <th>아이비</th>
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
                <td>a1520B00008</td>
                <td>영어<br/>류지원</td>
                <td class="tL"><router-link to="/mkup/lecture/bookMgt/view">류지원 영어교육학 기출문제집</router-link></td>
                <td>류지원</td>
                <td>15,000<br/>(13,500)</td>
                <td><a class="fRed">주문필요</a></td>
                <td>재고보유</td>
                <td>재고보유</td>
                <td>
                  <span class="memoTooltip">
    								<em>143</em>
    								<span class="tC">온라인 (100) | 이데아 (42) | 아이비 (1)</span>
    							</span>
                </td>
                <td>
                  <span class="memoTooltip">
    								<em>8</em>
    								<span class="tC">온라인 (2) | 이데아 (3) | 아이비 (3)</span>
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
                <td>a1520B00008</td>
                <td>영어<br/>류지원</td>
                <td class="tL"><router-link to="/mkup/lecture/bookMgt/view">류지원 영어교육학 기출문제집</router-link></td>
                <td>류지원</td>
                <td>15,000<br/>(13,500)</td>
                <td><a class="fRed">일시품절</a></td>
                <td><a class="fRed">일시품절</a></td>
                <td><a class="fRed">일시품절</a></td>
                <td>
                  <span class="memoTooltip">
                    <em>256</em>
                    <span class="tC">온라인 (100) | 이데아 (100) | 아이비 (56)</span>
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
                <td>a1520B00008</td>
                <td>영어<br/>류지원</td>
                <td class="tL"><router-link to="/mkup/lecture/bookMgt/view">류지원 영어교육학 기출문제집</router-link></td>
                <td>류지원</td>
                <td>15,000<br/>(13,500)</td>
                <td>판매종료</td>
                <td>판매종료</td>
                <td>판매종료</td>
                <td>
                  <span class="memoTooltip">
                    <em>3</em>
                    <span class="tC">온라인 (3) | 이데아 (0) | 아이비 (0)</span>
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
                <td>a1520B00008</td>
                <td>영어<br/>류지원</td>
                <td class="tL"><router-link to="/mkup/lecture/bookMgt/view">류지원 영어교육학 기출문제집</router-link></td>
                <td>류지원</td>
                <td>15,000<br/>(13,500)</td>
                <td>재고보유</td>
                <td>재고보유</td>
                <td>재고보유</td>
                <td>
                  <span class="memoTooltip">
                    <em>541</em>
                    <span class="tC">온라인 (300) | 이데아 (200) | 아이비 (41)</span>
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
                <td>a1520B00008</td>
                <td>영어<br/>류지원</td>
                <td class="tL"><router-link to="/mkup/lecture/bookMgt/view">류지원 영어교육학 기출문제집</router-link></td>
                <td>류지원</td>
                <td>15,000<br/>(13,500)</td>
                <td>재고보유</td>
                <td><a class="fRed">주문필요</a></td>
                <td>재고보유</td>
                <td>
                  <span class="memoTooltip">
                    <em>0</em>
                    <span class="tC">온라인 (0) | 이데아 (0) | 아이비 (0)</span>
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
                <td>a1520B00008</td>
                <td>영어<br/>류지원</td>
                <td class="tL"><router-link to="/mkup/lecture/bookMgt/view">류지원 영어교육학 기출문제집</router-link></td>
                <td>류지원</td>
                <td>15,000<br/>(13,500)</td>
                <td>재고보유</td>
                <td>재고보유</td>
                <td>재고보유</td>
                <td>
                  <span class="memoTooltip">
                    <em>343</em>
                    <span class="tC">온라인 (100) | 이데아 (243) | 아이비 (0)</span>
                  </span>
                </td>
                <td>
                  <span class="memoTooltip">
                    <em>43</em>
                    <span class="tC">온라인 (22) | 이데아 (21) | 아이비 (0)</span>
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
                <td>a1520B00008</td>
                <td>영어<br/>류지원</td>
                <td class="tL"><router-link to="/mkup/lecture/bookMgt/view">류지원 영어교육학 기출문제집</router-link></td>
                <td>류지원</td>
                <td>15,000<br/>(13,500)</td>
                <td><a class="fRed">주문필요</a></td>
                <td>재고보유</td>
                <td><a class="fRed">일시품절</a></td>
                <td>
                  <span class="memoTooltip">
                    <em>0</em>
                    <span class="tC">온라인 (0) | 이데아 (0) | 아이비 (0)</span>
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
                <td>a1520B00008</td>
                <td>영어<br/>류지원</td>
                <td class="tL"><router-link to="/mkup/lecture/bookMgt/view">류지원 영어교육학 기출문제집</router-link></td>
                <td>류지원</td>
                <td>15,000<br/>(13,500)</td>
                <td>재고보유</td>
                <td>재고보유</td>
                <td>재고보유</td>
                <td>
                  <span class="memoTooltip">
                    <em>111</em>
                    <span class="tC">온라인 (111) | 이데아 (0) | 아이비 (0)</span>
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
                <td>a1520B00008</td>
                <td>영어<br/>류지원</td>
                <td class="tL"><router-link to="/mkup/lecture/bookMgt/view">류지원 영어교육학 기출문제집</router-link></td>
                <td>류지원</td>
                <td>15,000<br/>(13,500)</td>
                <td>재고보유</td>
                <td>재고보유</td>
                <td>재고보유</td>
                <td>
                  <span class="memoTooltip">
                    <em>0</em>
                    <span class="tC">온라인 (0) | 이데아 (0) | 아이비 (0)</span>
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
                <td>a1520B00008</td>
                <td>영어<br/>류지원</td>
                <td class="tL"><router-link to="/mkup/lecture/bookMgt/view">류지원 영어교육학 기출문제집</router-link></td>
                <td>류지원</td>
                <td>15,000<br/>(13,500)</td>
                <td>발간예정</td>
                <td>발간예정</td>
                <td>발간예정</td>
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
  name: 'BookMgt',
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
