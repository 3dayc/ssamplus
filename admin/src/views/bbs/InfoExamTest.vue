<template lang="html">
  <div class="infoExamTest">
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <span class="frontTooltip">
          <em>ⓘ Front</em>
          <span>* 기본 정렬 순서: 상단 고정 > 미고정 게시물 최신순<br/>- 시험정보 시험공고 > 노출 건 표시</span>
        </span>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">지역</option>
                  <option value="">종합</option>
                  <option value="">서울</option>
                  <option value="">경기</option>
                  <option value="">인천</option>
                  <option value="">세종</option>
                  <option value="">부산</option>
                  <option value="">대전</option>
                  <option value="">대구</option>
                  <option value="">울산</option>
                  <option value="">강원</option>
                  <option value="">충북</option>
                  <option value="">충남</option>
                  <option value="">경북</option>
                  <option value="">경남</option>
                  <option value="">전북</option>
                  <option value="">전남</option>
                  <option value="">제주</option>
                  <option value="">광주</option>
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
        <router-link to="/mkup/bbs/infoExam/testWrite" class="btnAdd">신규등록</router-link>
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
          <col width="100">
          <col width="120">
          <col width="120">
          <col width="120">
          <col width="*">
          <col width="100">
          <col width="120">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">노출 여부</th>
            <th scope="col">순서</th>
            <th scope="col">상단 고정</th>
            <th scope="col">지역</th>
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
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="" checked/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td>종합</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/test">2021학년도 공립 유아 교사 임용 최종 합격자 안내</router-link></td>
            <td>1,500</td>
            <td>2021-05-25</td>
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
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="" checked/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td>서울</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/test">2021학년도 공립 초등 교사 임용 최종 합격자 안내</router-link></td>
            <td>32</td>
            <td>2021-05-20</td>
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
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="" checked/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td>경기</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/test">2021학년도 공립 중등 교사 임용 최종 합격자 안내</router-link></td>
            <td>1</td>
            <td>2021-05-19</td>
          </tr>
          <tr class="waited">
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
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="" checked/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td>인천</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/test">2021학년도 공립 특수(유,초) 교사 임용 최종 합격자 안내</router-link></td>
            <td>333</td>
            <td>2021-05-15</td>
          </tr>
          <!-- 데이터 없을 경우 -->
          <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
          <!-- //데이터 없을 경우 -->
        </tbody>
      </table>
    </div>
    <div class="tls mt20">
      <table>
        <colgroup>
          <col width="100">
          <col width="120">
          <col width="120">
          <col width="*">
          <col width="100">
          <col width="120">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">노출 여부</th>
            <th scope="col">상단 고정</th>
            <th scope="col">지역</th>
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
                <input type="checkbox" id="push5" checked/>
                <label for="push5">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="" checked/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td>종합</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/test">2021학년도 공립 유아 교사 임용 최종 합격자 안내</router-link></td>
            <td>1,500</td>
            <td>2021-05-25</td>
          </tr>
          <!--//Loop-->
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push6"/>
                <label for="push6">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id=""/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td>서울</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/test">2021학년도 공립 초등 교사 임용 최종 합격자 안내</router-link></td>
            <td>32</td>
            <td>2021-05-20</td>
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
                <input type="checkbox" id=""/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td>경기</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/test">2021학년도 공립 중등 교사 임용 최종 합격자 안내</router-link></td>
            <td>1</td>
            <td>2021-05-19</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push8" />
                <label for="push8">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id=""/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td>인천</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/test">2021학년도 공립 특수(유,초) 교사 임용 최종 합격자 안내</router-link></td>
            <td>333</td>
            <td>2021-05-15</td>
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
                <input type="checkbox" id=""/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td>세종</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/test">2021학년도 공립 유아/초등 교사 임용 최종 합격자 안내</router-link></td>
            <td>1,500</td>
            <td>2021-05-13</td>
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
                <input type="checkbox" id=""/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td>부산</td>
            <td class="tL"><router-link to="/mkup/bbs/infoExam/test">2021학년도 공립 유아/초등/특수 교사 임용 최종 합격자 안내</router-link></td>
            <td>32</td>
            <td>2021-05-10</td>
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
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'InfoExamTest',
  data(){
    return {
    }
  }
}
</script>

<style lang="css" scoped>
</style>
