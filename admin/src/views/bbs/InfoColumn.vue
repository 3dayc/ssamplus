<template lang="html">
  <div>
    <div class="pageTit">
			<h2>임용칼럼</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><em>임용칼럼</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoColumn">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <span class="frontTooltip">
              <em>ⓘ Front</em>
              <span>- 시험정보 임용 칼럼 > 노출 건 표시</span>
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
            </div>
          </div>
          <div class="right-po">
            <router-link to="/mkup/bbs/infoColumn/write" class="btnAdd">신규등록</router-link>
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
              <col width="90">
              <col width="120">
              <col width="500">
              <col width="90">
              <col width="90">
              <col width="100">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">노출 여부</th>
                <th scope="col">이미지</th>
                <th scope="col">제목</th>
                <th scope="col">좋아요 수</th>
                <th scope="col">조회수</th>
                <th scope="col">작성일</th>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoColumn/view">쌤플러스가 정리한 연간 학습전략 가이드</router-link></td>
                <td>100</td>
                <td>1,500</td>
                <td>2021-05-25</td>
              </tr>
              <!--//Loop-->
              <tr>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoColumn/view">합격하고 싶어? 한국사능력 검정시험 100% 합격 가이드</router-link></td>
                <td>0</td>
                <td>32</td>
                <td>2021-05-20</td>
              </tr>
              <tr>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoColumn/view">교육학 논술은 이렇게 준비해 보세요.</router-link></td>
                <td>1</td>
                <td>1</td>
                <td>2021-05-19</td>
              </tr>
              <tr>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoColumn/view">이제는 2차 시험! 대비법은 쌤플러스가 다 준비했습니다.</router-link></td>
                <td>200</td>
                <td>333</td>
                <td>2021-05-15</td>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoColumn/view">전공별 참고도서 확인해 보세요</router-link></td>
                <td>1,000</td>
                <td>1,500</td>
                <td>2021-05-13</td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push6" checked>
                    <label for="push6">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoColumn/view">시험에 대한 모든 것! 지금 확인해 보세요!</router-link></td>
                <td>0</td>
                <td>32</td>
                <td>2021-05-10</td>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoColumn/view">쌤플러스가 정리한 연간 학습전략 가이드</router-link></td>
                <td>0</td>
                <td>1</td>
                <td>2021-04-30</td>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoColumn/view">합격하고 싶어? 한국사능력 검정시험 100% 합격 가이드</router-link></td>
                <td>11</td>
                <td>333</td>
                <td>2021-04-29</td>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoColumn/view">교육학 논술은 이렇게 준비해 보세요.</router-link></td>
                <td>1,111</td>
                <td>1,500</td>
                <td>2021-04-29</td>
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
                  <span class="uploadThumb after">
                    <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
                  </span>
                </td>
                <td class="tL"><router-link to="/mkup/bbs/infoColumn/view">이제는 2차 시험! 대비법은 쌤플러스가 다 준비했습니다.</router-link></td>
                <td>0</td>
                <td>32</td>
                <td>2021-04-20</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'InfoColumn',
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
