<template lang="html">
  <div>
    <div class="pageTit">
			<h2>합격자 수기</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/passReview">합격수기</router-link><em>합격자 수기</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="passReview">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <span class="frontTooltip">
              <em>ⓘ Front</em>
              <span>- 합격수기홈 내공내합 비법 > BEST 1건 표시<br/>- 합격수기홈 > BEST 6건 표시<br/>- 선생님별 합격수기 BEST > BEST건 표시<br/>- 선생님별 합격수기 리스트 > 노출건 표시</span>
            </span>
          </div>
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">연도</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">지역</option>
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
                  <input type="text" placeholder="작성자, 제목 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
          </div>
          <div class="right-po">
            <router-link to="/mkup/bbs/passReview/write" class="btnAdd">신규등록</router-link>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 목록써머리 -->
        <div class="listSummery">
          <div class="left">
            <span class="checkSet">
              <input type="checkbox" checked/>
              <label for=""><i></i>BEST로 설정된 정보 조회</label>
            </span>
            <strong>회원 개인정보 표출</strong>
            <span class="toggleSet">
              <input type="checkbox" id="push" />
              <label for="push"><!--적용여부--></label>
            </span>
          </div>
        </div>
        <!-- //목록써머리 -->
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="90">
              <col width="80">
              <col width="90">
              <col width="90">
              <col width="90">
              <col width="450">
              <col width="130">
              <col width="100">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">노출여부</th>
                <th scope="col">BEST</th>
                <th scope="col">합격연도</th>
                <th scope="col">응시 지역</th>
                <th scope="col">응시 과목</th>
                <th scope="col">제목</th>
                <th scope="col">작성자</th>
                <th scope="col">작성일</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
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
                    <input type="checkbox" id="" checked/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td>2021</td>
                <td>경기</td>
                <td>유아</td>
                <td class="tL"><router-link to="/mkup/bbs/passReview/view">1차 커트라인 뒤집기 성공! 포기하지 말고 공부하세요.</router-link></td>
                <td>김*민<br/>(jim******)</td>
                <td>2021-05-30</td>
              </tr>
              <!--//Loop-->
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push2" />
                    <label for="push2">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td>2021</td>
                <td>서울</td>
                <td>교육학</td>
                <td class="tL"><router-link to="/mkup/bbs/passReview/view">자신의 환경을 충분히 고려하고 스터디를 활용하세요.</router-link></td>
                <td>홍*동<br/>(jim******)</td>
                <td>2021-05-29</td>
              </tr>
              <tr>
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
                    <input type="checkbox" id="" />
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td>2021</td>
                <td>전북</td>
                <td>국어</td>
                <td class="tL"><router-link to="/mkup/bbs/passReview/view">왜 틀렸는지 파악하기</router-link></td>
                <td class="fBlue">김민정<br/>(jim123)</td>
                <td>2021-05-28</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push4" />
                    <label for="push4">
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
                <td>2021</td>
                <td>전남</td>
                <td>영어</td>
                <td class="tL"><router-link to="/mkup/bbs/passReview/view">자신만의 암기 카드를 만들어보세요.</router-link></td>
                <td class="fBlue">이호민<br/>(jim144)</td>
                <td>2021-05-27</td>
              </tr>
              <tr>
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
                    <input type="checkbox" id="" />
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td>2021</td>
                <td>경북</td>
                <td>수학</td>
                <td class="tL"><router-link to="/mkup/bbs/passReview/view">1차 커트라인 뒤집기 성공! 포기하지 말고 공부하세요.</router-link></td>
                <td>강*민<br/>(jim******)</td>
                <td>2021-05-26</td>
              </tr>
              <tr>
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
                    <input type="checkbox" id="" />
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td>2021</td>
                <td>경남</td>
                <td>음악</td>
                <td class="tL"><router-link to="/mkup/bbs/passReview/view">자신의 환경을 충분히 고려하고 스터디를 활용하세요.</router-link></td>
                <td>서*민<br/>(jim******)</td>
                <td>2021-05-25</td>
              </tr>
              <tr>
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
                    <input type="checkbox" id="" />
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td>2021</td>
                <td>인천</td>
                <td>미술</td>
                <td class="tL"><router-link to="/mkup/bbs/passReview/view">왜 틀렸는지 파악하기</router-link></td>
                <td class="fBlue">김민정<br/>(jim123)</td>
                <td>2021-05-24</td>
              </tr>
              <tr>
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
                    <input type="checkbox" id="" />
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td>2021</td>
                <td>서울</td>
                <td>체육</td>
                <td class="tL"><router-link to="/mkup/bbs/passReview/view">자신만의 암기 카드를 만들어보세요.</router-link></td>
                <td class="fBlue">이호민<br/>(jim144)</td>
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
                    <input type="checkbox" id="" checked/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td>2021</td>
                <td>경기</td>
                <td>중국어</td>
                <td class="tL"><router-link to="/mkup/bbs/passReview/view">1차 커트라인 뒤집기 성공! 포기하지 말고 공부하세요.</router-link></td>
                <td>이*현<br/>(jim******)</td>
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
                    <input type="checkbox" id="" checked/>
                    <label for="one"><i></i></label>
                  </span>
                </td>
                <td>2020</td>
                <td>경북</td>
                <td>일본어</td>
                <td class="tL"><router-link to="/mkup/bbs/passReview/view">1차 커트라인 뒤집기 성공! 포기하지 말고 공부하세요.</router-link></td>
                <td>주*라<br/>(jim******)</td>
                <td>2021-05-21</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'PassReview',
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
