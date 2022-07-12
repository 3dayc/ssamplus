<template lang="html">
  <div>
    <div class="pageTit">
			<h2>상담센터 공지</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><em>상담센터 공지</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoCounsel">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <span class="frontTooltip">
              <em>ⓘ Front</em>
              <span>* 기본 정렬 순서: 상단 고정 > 미고정 게시물 최신순<br/>- 상담센터홈 공지 > 공지 6건 표시<br/>- 상담센터 공지 > 노출 건 표시<br/></span>
            </span>
          </div>
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
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
            <router-link to="/mkup/bbs/infoCounsel/write" class="btnAdd">신규등록</router-link>
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
              <col width="130">
              <col width="150">
              <col width="120">
              <col width="*">
              <col width="100">
              <col width="130">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">노출 여부</th>
                <th scope="col">순서</th>
                <th scope="col">상단 고정</th>
                <th scope="col">제목</th>
                <th scope="col">조회수</th>
                <th scope="col">작성일</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr class="waited">
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
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" checked/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">12월 무이자 할부 안내</router-link></td>
                <td>25,320</td>
                <td>2021-05-30</td>
              </tr>
              <!--//Loop-->
              <tr class="waited">
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
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">11월 무이자 할부 안내</router-link></td>
                <td>24,320</td>
                <td>2021-05-29</td>
              </tr>
              <tr class="waited">
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push3" checked>
                    <label for="push3">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">10월 무이자 할부 안내</router-link></td>
                <td>23,320</td>
                <td>2021-05-28</td>
              </tr>
              <tr class="waited">
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
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">9월 무이자 할부 안내</router-link></td>
                <td>22,320</td>
                <td>2021-05-27</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <div class="tls mt20">
          <table>
            <colgroup>
              <col width="130">
              <col width="120">
              <col width="*">
              <col width="100">
              <col width="130">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">노출 여부</th>
                <th scope="col">상단 고정</th>
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
                    <input type="checkbox" id="push5" checked>
                    <label for="push5">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" checked/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">12월 무이자 할부 안내</router-link></td>
                <td>25,320</td>
                <td>2021-05-30</td>
              </tr>
              <!--//Loop-->
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
                    <input type="checkbox" id=""/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">11월 무이자 할부 안내</router-link></td>
                <td>24,320</td>
                <td>2021-05-29</td>
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
                    <input type="checkbox" id=""/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">10월 무이자 할부 안내</router-link></td>
                <td>23,320</td>
                <td>2021-05-28</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push8">
                    <label for="push8">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">9월 무이자 할부 안내</router-link></td>
                <td>22,320</td>
                <td>2021-05-27</td>
              </tr>
              <tr>
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
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">8월 무이자 할부 안내</router-link></td>
                <td>22,320</td>
                <td>2021-05-26</td>
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
                    <input type="checkbox" id=""/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">7월 무이자 할부 안내</router-link></td>
                <td>21,320</td>
                <td>2021-05-25</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push11" checked>
                    <label for="push11">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">6월 무이자 할부 안내</router-link></td>
                <td>5,320</td>
                <td>2021-05-24</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push12" checked>
                    <label for="push12">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">5월 무이자 할부 안내</router-link></td>
                <td>4,320</td>
                <td>2021-05-23</td>
              </tr>
              <tr>
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
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">4월 무이자 할부 안내</router-link></td>
                <td>320</td>
                <td>2021-05-22</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push14" checked>
                    <label for="push14">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoCounsel/view">3월 무이자 할부 안내</router-link></td>
                <td>20</td>
                <td>2021-05-21</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <Paginate />
        <!-- //테이블 목록 -->
      </div>
      <!-- //page layout -->
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'InfoCounsel',
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
