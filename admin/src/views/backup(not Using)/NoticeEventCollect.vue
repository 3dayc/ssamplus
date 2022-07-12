<template lang="html">
  <div class="noticeEventCollect">
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <span class="frontTooltip">
          <em>ⓘ Front</em>
          <span>- 이벤트 진행중인 이벤트 > 기간 유효한 건 표시<br/>- 이벤트 지난 이벤트 > 기간 지난 건 표시</span>
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
    </div>
    <!-- //테이블 유틸 -->
    <!-- 목록써머리 -->
    <div class="listSummery">
      <div class="left">
        <span class="checkSet">
          <input type="checkbox" checked="checked">
          <label for=""><i></i>노출 허용으로 설정된 정보 조회</label>
        </span>
      </div>
      <div class="right">
        <router-link to="/mkup/bbs/noticeEvent/collectWrite" class="btnAdd">신규등록</router-link>
      </div>
    </div>
    <!-- //목록써머리 -->
    <!-- 테이블 목록 -->
    <div class="tls">
      <table>
        <colgroup>
          <col width="110">
          <col width="130">
          <col width="*">
          <col width="180">
          <col width="120">
          <col width="100">
          <col width="120">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">노출 여부</th>
            <th scope="col">이미지</th>
            <th scope="col">제목</th>
            <th scope="col">이벤트 기간</th>
            <th scope="col">발표일</th>
            <th scope="col">조회수</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <tbody>
          <!--Loop-->
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="" checked/>
                <label for="">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td>
              <span class="uploadThumb after">
                <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/noticeEvent/collect">첫 구매 학습지원 이벤트</router-link></td>
            <td>2021-05-01~2021-05-24</td>
            <td>2021-05-25</td>
            <td>1,500</td>
            <td>2021-05-25</td>
          </tr>
          <!--//Loop-->
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id=""/>
                <label for="">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td>
              <span class="uploadThumb after">
                <img img :src="require(`@/assets/images/img_event_sample02.png`)" alt="이벤트 이미지"/>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/noticeEvent/collect">[스승의날 이벤트] 마음배송 서비스</router-link></td>
            <td>2021-05-01~종료일 미정</td>
            <td>종료 시</td>
            <td>32</td>
            <td>2021-05-20</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="" checked/>
                <label for="">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td>
              <span class="uploadThumb after">
                <img img :src="require(`@/assets/images/img_event_sample03.png`)" alt="이벤트 이미지"/>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/noticeEvent/collect">5~6월 열공 지원 이벤트</router-link></td>
            <td>2021-05-01~2021-05-24</td>
            <td>추후 안내</td>
            <td>1</td>
            <td>2021-05-19</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="" />
                <label for="">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td>
              <span class="uploadThumb after">
                <img img :src="require(`@/assets/images/img_event_sample04.png`)" alt="이벤트 이미지"/>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/noticeEvent/collect">신규 회원가입 이벤트</router-link></td>
            <td>2021-05-01~종료일 미정</td>
            <td>종료 시</td>
            <td>333</td>
            <td>2021-05-15</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="" checked/>
                <label for="">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td>
              <span class="uploadThumb after">
                <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/noticeEvent/collect">첫 구매 학습지원 이벤트</router-link></td>
            <td>2021-05-01~2021-05-24</td>
            <td>2021-05-13</td>
            <td>1,500</td>
            <td>2021-05-13</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="" checked/>
                <label for="">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td>
              <span class="uploadThumb after">
                <img img :src="require(`@/assets/images/img_event_sample02.png`)" alt="이벤트 이미지"/>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/noticeEvent/collect">[스승의날 이벤트] 마음배송 서비스</router-link></td>
            <td>2021-05-01~종료일 미정</td>
            <td>종료 시</td>
            <td>32</td>
            <td>2021-05-10</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="" checked/>
                <label for="">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td>
              <span class="uploadThumb after">
                <img img :src="require(`@/assets/images/img_event_sample03.png`)" alt="이벤트 이미지"/>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/noticeEvent/collect">5~6월 열공 지원 이벤트</router-link></td>
            <td>2021-05-01~2021-05-24</td>
            <td>2021-04-30</td>
            <td>1</td>
            <td>2021-04-30</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="" checked/>
                <label for="">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td>
              <span class="uploadThumb after">
                <img img :src="require(`@/assets/images/img_event_sample04.png`)" alt="이벤트 이미지"/>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/noticeEvent/collect">신규 회원가입 이벤트</router-link></td>
            <td>2021-05-01~종료일 미정</td>
            <td>종료 시</td>
            <td>333</td>
            <td>2021-04-29</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="" checked/>
                <label for="">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td>
              <span class="uploadThumb after">
                <img img :src="require(`@/assets/images/img_event_sample01.png`)" alt="이벤트 이미지"/>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/noticeEvent/collect">첫 구매 학습지원 이벤트</router-link></td>
            <td>2021-05-01~2021-05-24</td>
            <td>2021-04-29</td>
            <td>1,500</td>
            <td>2021-04-29</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="" checked/>
                <label for="">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td>
              <span class="uploadThumb after">
                <img img :src="require(`@/assets/images/img_event_sample02.png`)" alt="이벤트 이미지"/>
              </span>
            </td>
            <td class="tL"><router-link to="/mkup/bbs/noticeEvent/collect">[스승의날 이벤트] 마음배송 서비스</router-link></td>
            <td>2021-05-01~종료일 미정</td>
            <td>종료 시</td>
            <td>32</td>
            <td>2021-04-20</td>
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
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'NoticeEventCollect',
  data(){
    return {
    }
  }
}
</script>

<style lang="css" scoped>
</style>
