<template lang="html">
  <div>
		<div class="pageTit">
			<h2>무료 강의</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><em>무료 강의</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="freeCourse">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <span class="checkSet">
              <input type="checkbox" checked="checked">
              <label for=""><i></i>BEST만 조회</label>
            </span>
          </div>
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
                  <input type="text" placeholder="강의명 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
          </div>
          <div class="right-po">
            <router-link class="btnAdd" to="/mkup/lecture/freeCourse/write">신규등록</router-link>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="60"/>
              <col width="60"/>
              <col width="120"/>
              <col width="80"/>
              <col width="80"/>
              <col width="340"/>
            </colgroup>
            <thead>
              <tr>
                <th scope="col">노출여부</th>
                <th scope="col">BEST</th>
                <th scope="col">카테고리</th>
                <th scope="col">과목</th>
                <th scope="col">선생님</th>
                <th scope="col">강의명</th>
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
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="best1" checked/>
                    <label for="best1"><i></i></label>
                  </span>
                </td>
                <td>강의 하이라이트</td>
                <td>국어</td>
                <td>송헌</td>
                <td class="tL"><router-link to="/mkup/lecture/freeCourse/view">국어 고득점을 원한다면 송헌 선생님의 하이라이트 체크는 필수!</router-link></td>
              </tr>
              <!--//Loop-->
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle2" checked>
                    <label for="toggle2">
                      <span>숨김</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="best2"/>
                    <label for="best2"><i></i></label>
                  </span>
                </td>
                <td>기출해설</td>
                <td>영어</td>
                <td>차미아</td>
                <td class="tL"><router-link to="/mkup/lecture/freeCourse/view">영어 공부가 지루해? 지금 차미아 선생님과 함께 해결하기!</router-link></td>
              </tr>
              <tr class="expiry"><!--20210715 class 변경-->
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle3">
                    <label for="toggle3">
                      <span>숨김</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="best3"/>
                    <label for="best3"><i></i></label>
                  </span>
                </td>
                <td>설명회</td>
                <td>수학</td>
                <td>이정훈</td>
                <td class="tL"><router-link to="/mkup/lecture/freeCourse/view">모두가 인정한 벡터미적분의 노답, 이정훈 선생님의 해결법 확인하기</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle4" checked>
                    <label for="toggle4">
                      <span>숨김</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="best4" checked/>
                    <label for="best4"><i></i></label>
                  </span>
                </td>
                <td>강의 하이라이트</td>
                <td>음악</td>
                <td>서민정</td>
                <td class="tL"><router-link to="/mkup/lecture/freeCourse/view">서민정 선생님이 알려주는 스라밸을 위한 팁</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle5" checked>
                    <label for="toggle5">
                      <span>숨김</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="best5"/>
                    <label for="best5"><i></i></label>
                  </span>
                </td>
                <td>기출해설</td>
                <td>국어</td>
                <td>송헌</td>
                <td class="tL"><router-link to="/mkup/lecture/freeCourse/view">국어 고득점을 원한다면 송헌 선생님의 하이라이트 체크는 필수!</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle6" checked>
                    <label for="toggle6">
                      <span>숨김</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="best6"/>
                    <label for="best6"><i></i></label>
                  </span>
                </td>
                <td>설명회</td>
                <td>영어</td>
                <td>차미아</td>
                <td class="tL"><router-link to="/mkup/lecture/freeCourse/view">영어 공부가 지루해? 지금 차미아 선생님과 함께 해결하기!</router-link></td>
              </tr>
              <tr class="expiry"><!--20210715 class 변경-->
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle7">
                    <label for="toggle6">
                      <span>숨김</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="best7"/>
                    <label for="best7"><i></i></label>
                  </span>
                </td>
                <td>강의 하이라이트</td>
                <td>수학</td>
                <td>이정훈</td>
                <td class="tL"><router-link to="/mkup/lecture/freeCourse/view">모두가 인정한 벡터미적분의 노답, 이정훈 선생님의 해결법 확인하기</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle7" checked>
                    <label for="toggle6">
                      <span>숨김</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="best7"/>
                    <label for="best7"><i></i></label>
                  </span>
                </td>
                <td>강의 하이라이트</td>
                <td>수학</td>
                <td>이정훈</td>
                <td class="tL"><router-link to="/mkup/lecture/freeCourse/view">모두가 인정한 벡터미적분의 노답, 이정훈 선생님의 해결법 확인하기</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle9" checked>
                    <label for="toggle9">
                      <span>숨김</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="best9" checked/>
                    <label for="best9"><i></i></label>
                  </span>
                </td>
                <td>설명회</td>
                <td>국어</td>
                <td>송헌</td>
                <td class="tL"><router-link to="/mkup/lecture/freeCourse/view">국어 고득점을 원한다면 송헌 선생님의 하이라이트 체크는 필수!</router-link></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle10" checked>
                    <label for="toggle10">
                      <span>숨김</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="best10" checked/>
                    <label for="best10"><i></i></label>
                  </span>
                </td>
                <td>강의 하이라이트</td>
                <td>영어</td>
                <td>차미아</td>
                <td class="tL"><router-link to="/mkup/lecture/freeCourse/view">영어 공부가 지루해? 지금 차미아 선생님과 함께 해결하기!</router-link></td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'FreeCourse',
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
