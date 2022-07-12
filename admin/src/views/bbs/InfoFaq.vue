<template lang="html">
  <div>
    <div class="pageTit">
			<h2>자주 하는 질문</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><em>자주 하는 질문</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoFaq">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <span class="frontTooltip">
              <em>ⓘ Front</em>
              <span>- 상담센터 홈 > TOP 8 건 표시<br/>- 상담센터 자주하는 질문 > 노출 건 표시</span>
            </span>
          </div>
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">대분류</option>
                      <option value="">강의수강/신청</option>
                      <option value="">교재/학습자료</option>
                      <option value="">결제/환불</option>
                      <option value="">사이트이용/오류</option>
                      <option value="">모바일</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">중분류</option>
                      <option value="">패키지강의</option>
                      <option value="">온라인강의</option>
                      <option value="">학원강의</option>
                      <option value="">보너스강의</option>
                      <option value="">연장/홀딩</option>
                      <option value="">교재구매</option>
                      <option value="">교재배송</option>
                      <option value="">학습자료</option>
                      <option value="">결제</option>
                      <option value="">환불</option>
                      <option value="">회원정보관리</option>
                      <option value="">사이트이용</option>
                      <option value="">PC오류</option>
                      <option value="">모바일오류</option>
                      <option value="">자료오류</option>
                      <option value="">모바일</option>
                      <option value="">이용방법</option>
                      <option value="">기기/사용환경</option>
                      <option value="">데이터관련</option>
                      <option value="">강의관련</option>
                      <option value="">재생오류</option>
                      <option value="">동시접속</option>
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
            <router-link to="/mkup/bbs/infoFaq/write" class="btnAdd">신규등록</router-link>
            <button class="btnS line" @click="InfoFaqCategory();">카테고리 추가</button>
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
              <col width="120">
              <col width="80">
              <col width="150">
              <col width="120">
              <col width="*">
              <col width="100">
              <col width="130">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">노출 여부</th>
                <th scope="col">TOP 8</th>
                <th scope="col">대분류</th>
                <th scope="col">중분류</th>
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
                    <input type="checkbox" id="push1" checked/>
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" checked/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>사이트이용/오류</td>
                <td>사이트이용</td>
                <td class="tL"><router-link to="/mkup/bbs/infoFaq/view">크롬과 엣지 브라우저 로그인이 안 될 경우</router-link></td>
                <td>25,320</td>
                <td>2021-05-30</td>
              </tr>
              <!--//Loop-->
              <tr class="waited">
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push2"/>
                    <label for="push2">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" checked/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>결제/환불</td>
                <td>환불</td>
                <td class="tL"><router-link to="/mkup/bbs/infoFaq/view">환불 규정 알려주세요</router-link></td>
                <td>24,320</td>
                <td>2021-05-29</td>
              </tr>
              <tr class="waited">
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push3" checked/>
                    <label for="push3">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" checked/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>사이트이용/오류</td>
                <td>사이트 이용</td>
                <td class="tL"><router-link to="/mkup/bbs/infoFaq/view">동시접속이라고 경고가 떴어요. 동시접속이 무엇인가요?</router-link></td>
                <td>23,320</td>
                <td>2021-05-28</td>
              </tr>
              <tr class="waited">
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push4"/>
                    <label for="push4">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" checked/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>교재/학습자료</td>
                <td>학습자료</td>
                <td class="tL"><router-link to="/mkup/bbs/infoFaq/view">인쇄전용자료가 무엇인가요?</router-link></td>
                <td>22,320</td>
                <td>2021-05-27</td>
              </tr>
              <tr class="waited">
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push5" checked/>
                    <label for="push5">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" checked/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>모바일</td>
                <td>이용방법</td>
                <td class="tL"><router-link to="/mkup/bbs/infoFaq/view">어떻게 이용할 수 있나요?</router-link></td>
                <td>21,320</td>
                <td>2021-05-26</td>
              </tr>
              <tr class="waited">
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push6" checked/>
                    <label for="push6">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" checked/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>강의수강/신청</td>
                <td>보너스 강의</td>
                <td class="tL"><router-link to="/mkup/bbs/infoFaq/view">강의 무료 제공된다고 했는데 어떻게 신청하나요?</router-link></td>
                <td>20,320</td>
                <td>2021-05-25</td>
              </tr>
              <tr class="waited">
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push7" checked/>
                    <label for="push7">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" checked/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>초시생</td>
                <td>동영상 강의</td>
                <td class="tL"><router-link to="/mkup/bbs/infoFaq/view">1.6배수, 1.4배수가 무엇인가요?</router-link></td>
                <td>5,320</td>
                <td>2021-05-24</td>
              </tr>
              <tr class="waited">
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push8" checked/>
                    <label for="push8">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" checked/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>강의수강/신청</td>
                <td>패키지 강의</td>
                <td class="tL"><router-link to="/mkup/bbs/infoFaq/view">일부 강의를 직강(인강)으로 변경하고 싶어요</router-link></td>
                <td>4,320</td>
                <td>2021-05-23</td>
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
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>모바일</td>
                <td>동시접속</td>
                <td class="tL"><router-link to="/mkup/bbs/infoFaq/view">동시접속이란</router-link></td>
                <td>320</td>
                <td>2021-05-22</td>
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
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>사이트이용/오류</td>
                <td>부정사용</td>
                <td class="tL"><router-link to="/mkup/bbs/infoFaq/view">클린 캠페인- 건전한 강의 수강이란</router-link></td>
                <td>20</td>
                <td>2021-05-21</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'InfoFaq',
  data() {
    return {
    }
  },
  methods: {
    InfoFaqCategory() {
      let routeData = this.$router.resolve({name: 'InfoFaqCategory', query: {data: "someData"}});
      window.open('/mkup/windowPopup/infoFaqCategory', '_blank', `width=570,height=750`);
    },
  },
  components: {
  }
}
</script>
