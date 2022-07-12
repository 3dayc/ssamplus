<template lang="html">
  <div>
    <div class="pageTit">
			<h2>스터디하실래요</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><em>스터디하실래요</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="replyStudy">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <span class="frontTooltip">
              <em>ⓘ Front</em>
              <span>- 희소고시학원 스터디 하실래요> 노출 건 모두 표시</span>
            </span>
          </div>
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
								<span class="lsItem">
									<span class="selectSet lCase">
										<select name="" id="">
											<option value="no" class="label">상태</option>
											<option value="">모집 중</option>
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
                  <input type="text" placeholder="이름, 아이디, 제목 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
          </div>
        </div>
        <!-- //테이블 유틸 -->
		    <!-- 목록써머리 -->
				<div class="listSummery">
					<div class="left">
            <span class="checkSet">
              <input type="checkbox" id="ch1" checked/>
              <label for="ch1"><i></i>노출 허용으로 설정된 정보 조회</label>
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
              <col width="130"/>
              <col width="130"/>
              <col width="180"/>
              <col width="130"/>
              <col width="150"/>
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">노출 여부</th>
                <th scope="col">작성일</th>
                <th scope="col">작성자</th>
                <th scope="col">상태</th>
                <th scope="col">과목</th>
                <th scope="col">제목</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle1"  />
                    <label for="toggle1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021-05-25</td>
                <td>김*민<br/>(jim******)</td>
                <td>모집 중</td>
                <td>수학</td>
                <td class="tL"><router-link to="/mkup/bbs/replyStudy/view">기본서와 심화이론 읽기</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle2" checked/>
                    <label for="toggle2">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021-05-20</td>
                <td>홍*동<br/>(jim******)</td>
                <td>모집 마감</td>
                <td>교육학</td>
                <td class="tL"><router-link to="/mkup/bbs/replyStudy/view">김현 교육학 짝스터디 구합니다.</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle3"  />
                    <label for="toggle3">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021-05-19</td>
                <td>김*정<br/>(jim******)</td>
                <td>모집 중</td>
                <td>체육</td>
                <td class="tL"><router-link to="/mkup/bbs/replyStudy/view">체육 온라인 스터디 모집</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle4" checked/>
                    <label for="toggle4">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021-05-15</td>
                <td>이*민<br/>(jim******)</td>
                <td>모집 마감</td>
                <td>국어</td>
                <td class="tL"><router-link to="/mkup/bbs/replyStudy/view">짝스터디</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle5" />
                    <label for="toggle5">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021-05-13</td>
                <td>강*민<br/>(jim******)</td>
                <td>모집 중</td>
                <td>수학</td>
                <td class="tL"><router-link to="/mkup/bbs/replyStudy/view">기본서와 심화이론 읽기</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle6" checked />
                    <label for="toggle6">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021-05-10</td>
                <td>서*민<br/>(jim******)</td>
                <td>모집 마감</td>
                <td>교육학</td>
                <td class="tL"><router-link to="/mkup/bbs/replyStudy/view">김현 교육학 짝스터디 구합니다.</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle7" checked />
                    <label for="toggle7">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021-04-30</td>
                <td>장*혁<br/>(jim******)</td>
                <td>모집 중</td>
                <td>체육</td>
                <td class="tL"><router-link to="/mkup/bbs/replyStudy/view">체육 온라인 스터디 모집</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle8" checked />
                    <label for="toggle8">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021-04-29</td>
                <td>오*현<br/>(jim******)</td>
                <td>모집 마감</td>
                <td>국어</td>
                <td class="tL"><router-link to="/mkup/bbs/replyStudy/view">짝스터디</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle9" checked />
                    <label for="toggle9">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021-04-29</td>
                <td>이*현<br/>(jim******)</td>
                <td>모집 중</td>
                <td>수학</td>
                <td class="tL"><router-link to="/mkup/bbs/replyStudy/view">기본서와 심화이론 읽기</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle10" checked />
                    <label for="toggle10">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021-04-20</td>
                <td>주*라<br/>(jim******)</td>
                <td>모집 마감</td>
                <td>교육학</td>
                <td class="tL"><router-link to="/mkup/bbs/replyStudy/view">김현 교육학 짝스터디 구합니다.</router-link></td>
              </tr>
              <!--//Loop-->
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
  name: 'ReplyStudy',
  data() {
    return {
      replyTab: 0,
    }
  },
  methods: {
  },
  components: {
  },
}
</script>

<style lang="css" scoped>
</style>
