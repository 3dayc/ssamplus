<template lang="html">
  <div class="replyCleanFixed">
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <span class="frontTooltip">
          <em>ⓘ Front</em>
          <span>- 상담센터 불법공유자 명단 > 노출 건 표시</span>
        </span>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <input type="text" placeholder="제목 검색" class="soloCase" />
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <div>
            <button class="btnRefresh">초기화</button>
          </div>
        </div>
      </div>
      <span class="right-po">
        <router-link to="/mkup/bbs/replyClean/fixedWrite" class="btnAdd">신규등록</router-link>
      </span>
    </div>
    <!-- //테이블 유틸 -->
    <!-- 목록써머리 -->
    <div class="listSummery">
      <div class="left">
        <span class="checkSet">
          <input type="checkbox" id="ch1" />
          <label for="ch1"><i></i>노출 허용으로 설정된 정보 조회</label>
        </span>
      </div>
    </div>
    <!-- //목록써머리 -->
    <!-- 테이블 목록 -->
    <div class="tls">
      <table>
        <colgroup>
          <col width="150"/>
          <col width="*" />
          <col width="150"/>
        </colgroup>
        <thead>
          <tr>
            <th scope="col">노출 여부</th>
            <th scope="col">제목</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <tbody>
          <!--Loop-->
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="toggle1" checked />
                <label for="toggle1">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/fixed">2021-05-01~2021-05-30 불법 공유자 명단</router-link></td>
            <td>2021-05-25</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="toggle2" />
                <label for="toggle2">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/fixed">2021-04-01~2021-04-30 불법 공유자 명단</router-link></td>
            <td>2021-05-20</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="toggle3" checked />
                <label for="toggle3">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/fixed">2021-03-01~2021-03-30 불법 공유자 명단</router-link></td>
            <td>2021-05-19</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="toggle4" />
                <label for="toggle4">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/fixed">2021-02-01~2021-02-29 불법 공유자 명단</router-link></td>
            <td>2021-05-15</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="toggle5" checked />
                <label for="toggle5">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/fixed">2021-01-01~2021-01-30 불법 공유자 명단</router-link></td>
            <td>2021-05-13</td>
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
            <td class="tL"><router-link to="/mkup/bbs/replyClean/fixed">2021-05-01~2021-05-30 불법 공유자 명단</router-link></td>
            <td>2021-05-10</td>
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
            <td class="tL"><router-link to="/mkup/bbs/replyClean/fixed">2021-05-01~2021-05-30 불법 공유자 명단</router-link></td>
            <td>2021-04-30</td>
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
            <td class="tL"><router-link to="/mkup/bbs/replyClean/fixed">2021-05-01~2021-05-30 불법 공유자 명단</router-link></td>
            <td>2021-04-29</td>
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
            <td class="tL"><router-link to="/mkup/bbs/replyClean/fixed">2021-05-01~2021-05-30 불법 공유자 명단</router-link></td>
            <td>2021-04-29</td>
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
            <td class="tL"><router-link to="/mkup/bbs/replyClean/fixed">2021-05-01~2021-05-30 불법 공유자 명단</router-link></td>
            <td>2021-04-20</td>
          </tr>
          <!--//Loop-->
          <!-- 데이터 없을 경우 -->
          <tr style="display:none;"><td colspan="3" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'ReplyCleanFixed',
  data(){
    return {
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  }
}
</script>

<style lang="css" scoped>
</style>
