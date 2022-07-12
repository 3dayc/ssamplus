<template lang="html">
  <div class="replyReview">
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <span class="frontTooltip">
          <em>ⓘ Front</em>
          <span>- 쌤몰 학습기기 > 학습기기별 표시<br/>- 쌤몰 백퍼후기  > 학습기기별 표시</span>
        </span>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">분류</option>
                  <option value="">노트북</option>
                  <option value="">태블릿</option>
                  <option value="">스마트폰</option>
                  <option value="">기타</option>
                  <option value="">결합상품</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <input type="text" placeholder="상품명, 이름, 아이디, 제목 검색" />
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
        <button class="btnT mr20" v-show="statusModify" @click="statusModify = false">노출여부 저장</button>
        <button class="btnT mr20" v-show="!statusModify" @click="statusModify = true">노출여부 수정</button>
        <span class="checkSet">
          <input type="checkbox" checked="checked">
          <label for=""><i></i>BEST로 설정된 정보 조회</label>
        </span>
      </div>
      <div class="right">
        <strong class="vMiddle mr10">회원 개인정보 표출</strong>
        <span class="toggleSet">
          <input type="checkbox" id="push" />
          <label for="push"><!--적용여부--></label>
        </span>
      </div>
    </div>
    <!-- //목록써머리 -->
    <!-- 테이블 목록 -->
    <div class="tls tlsFixed">
      <table>
        <colgroup>
          <col width="50">
          <col width="60">
          <col width="140">
          <col width="130">
          <col width="200">
          <col width="100">
          <col width="120">
          <col width="150">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">
              <span v-if="statusModify" class="checkSet noLabel">
                <input type="checkbox" id="showStsAll">
                <label for="showStsAll"><i></i></label>
              </span>
              <span v-else="statusModify">노출 여부</span>
            </th>
            <th scope="col">BEST</th>
            <th scope="col">분류</th>
            <th scope="col">상품명</th>
            <th scope="col">제목</th>
            <th scope="col">파일</th>
            <th scope="col">작성일</th>
            <th scope="col">작성자</th>
          </tr>
        </thead>
        <tbody>
          <!--Loop-->
          <tr class="waited">
            <td>
              <span v-if="statusModify" class="checkSet noLabel">
                <input type="checkbox" id="showSts01">
                <label for="showSts01"><i></i></label>
              </span>
              <span v-else="statusModify" class="fGray">숨김</span>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" checked="checked" id="check01">
                <label for="check01"><i></i></label>
              </span>
            </td>
            <td>노트북</td>
            <td class="tL">LG gram</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/device" class="ellipsis01">노트북으로 수강하니까 너무 좋아요</router-link></td>
            <td><span class="uploadThumb after"><img img :src="require(`@/assets/images/img_replyReview_sample.png`)" alt="샘플 이미지"/></span></td>
            <td>2021-05-25</td>
            <td>김*민<br/>(jim******)</td>
          </tr>
          <!--//Loop-->
          <tr class="waited">
            <td>
              <span v-if="statusModify" class="checkSet noLabel">
                <input type="checkbox" id="showSts02">
                <label for="showSts02"><i></i></label>
              </span>
              <span v-else="statusModify" class="fGray">숨김</span>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="check02">
                <label for="check02"><i></i></label>
              </span>
            </td>
            <td>태블릿</td>
            <td class="tL">갤럭시 탭A 10.1</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/device" class="ellipsis01">들고 다니면서 수강하니까 시간 절약하고 좋아요</router-link></td>
            <td><span class="uploadThumb after"><img img :src="require(`@/assets/images/img_replyReview_sample.png`)" alt="샘플 이미지"/></span></td>
            <td>2021-05-20</td>
            <td>홍*동<br/>(jim******)</td>
          </tr>
          <tr>
            <td>
              <span v-if="statusModify" class="checkSet noLabel">
                <input type="checkbox" id="showSts03" checked>
                <label for="showSts03"><i></i></label>
              </span>
              <span v-else="statusModify" class="fGreen">노출</span>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="check03">
                <label for="check03"><i></i></label>
              </span>
            </td>
            <td>스마트폰</td>
            <td class="tL">갤럭시 S21 울트라</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/device" class="ellipsis01">쌤플러스에서 싸게 샀어요</router-link></td>
            <td><span class="uploadThumb after"><img img :src="require(`@/assets/images/img_replyReview_sample.png`)" alt="샘플 이미지"/></span></td>
            <td>2021-05-19</td>
            <td>김*정<br/>(jim******)</td>
          </tr>
          <tr>
            <td>
              <span v-if="statusModify" class="checkSet noLabel">
                <input type="checkbox" id="showSts04">
                <label for="showSts04"><i></i></label>
              </span>
              <span v-else="statusModify" class="fGray">숨김</span>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="check04" checked>
                <label for="check04"><i></i></label>
              </span>
            </td>
            <td>결합상품</td>
            <td class="tL">교육학 김현+애플 아이패드</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/device" class="ellipsis01">강좌랑 기기랑 같이 구매하니까 가성비 최고임</router-link></td>
            <td><span class="uploadThumb after"><img img :src="require(`@/assets/images/img_replyReview_sample.png`)" alt="샘플 이미지"/></span></td>
            <td>2021-05-15</td>
            <td>이*민<br/>(jim******)</td>
          </tr>
          <tr>
            <td>
              <span v-if="statusModify" class="checkSet noLabel">
                <input type="checkbox" id="showSts05" checked>
                <label for="showSts05"><i></i></label>
              </span>
              <span v-else="statusModify" class="fGreen">노출</span>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="check05">
                <label for="check05"><i></i></label>
              </span>
            </td>
            <td>노트북</td>
            <td class="tL">갤럭시 북 FLEX 알파</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/device" class="ellipsis01">노트북 샀습니다</router-link></td>
            <td></td>
            <td>2021-05-13</td>
            <td>강*민<br/>(jim******)</td>
          </tr>
          <tr>
            <td>
              <span v-if="statusModify" class="checkSet noLabel">
                <input type="checkbox" id="showSts06" checked>
                <label for="showSts06"><i></i></label>
              </span>
              <span v-else="statusModify" class="fGreen">노출</span>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="check06">
                <label for="check06"><i></i></label>
              </span>
            </td>
            <td>기타</td>
            <td class="tL">갤럭시 탭A 10.1</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/device" class="ellipsis01">노트북으로 수강하니까 너무 좋아요</router-link></td>
            <td></td>
            <td>2021-05-10</td>
            <td>서*민<br/>(jim******)</td>
          </tr>
          <tr>
            <td>
              <span v-if="statusModify" class="checkSet noLabel">
                <input type="checkbox" id="showSts07" checked>
                <label for="showSts07"><i></i></label>
              </span>
              <span v-else="statusModify" class="fGreen">노출</span>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="check07">
                <label for="check07"><i></i></label>
              </span>
            </td>
            <td>태블릿</td>
            <td class="tL">갤럭시 탭A 10.1</td>
            <td class="tL "><router-link to="/mkup/bbs/replyReview/device" class="ellipsis01">들고 다니면서 수강하니까 시간 절약하고 좋아요 모두 들고 다니면서 수강하니까 시간 절약하고 좋아요 모두…</router-link></td>
            <td><span class="uploadThumb after"><img img :src="require(`@/assets/images/img_replyReview_sample.png`)" alt="샘플 이미지"/></span></td>
            <td>2021-04-30</td>
            <td>장*혁<br/>(jim******)</td>
          </tr>
          <tr>
            <td>
              <span v-if="statusModify" class="checkSet noLabel">
                <input type="checkbox" id="showSts08" checked>
                <label for="showSts08"><i></i></label>
              </span>
              <span v-else="statusModify" class="fGreen">노출</span>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="check08">
                <label for="check08"><i></i></label>
              </span>
            </td>
            <td>스마트폰</td>
            <td class="tL">갤럭시 탭A 10.1</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/device" class="ellipsis01">쌤플러스에서 싸게 샀어요</router-link></td>
            <td><span class="uploadThumb after"><img img :src="require(`@/assets/images/img_replyReview_sample.png`)" alt="샘플 이미지"/></span></td>
            <td>2021-04-29</td>
            <td>오*현<br/>(jim******)</td>
          </tr>
          <tr>
            <td>
              <span v-if="statusModify" class="checkSet noLabel">
                <input type="checkbox" id="showSts09" checked>
                <label for="showSts09"><i></i></label>
              </span>
              <span v-else="statusModify" class="fGreen">노출</span>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="check09" checked>
                <label for="check09"><i></i></label>
              </span>
            </td>
            <td>결합상품</td>
            <td class="tL">갤럭시 탭A 10.1</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/device" class="ellipsis01">강좌랑 기기랑 같이 구매하니까 가성비 최고임</router-link></td>
            <td><span class="uploadThumb after"><img img :src="require(`@/assets/images/img_replyReview_sample.png`)" alt="샘플 이미지"/></span></td>
            <td>2021-04-29</td>
            <td>이*현<br/>(jim******)</td>
          </tr>
          <tr>
            <td>
              <span v-if="statusModify" class="checkSet noLabel">
                <input type="checkbox" id="showSts10" checked>
                <label for="showSts10"><i></i></label>
              </span>
              <span v-else="statusModify" class="fGreen">노출</span>
            </td>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" id="check10" checked>
                <label for="check10"><i></i></label>
              </span>
            </td>
            <td>노트북</td>
            <td class="tL">갤럭시 탭A 10.1</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/device" class="ellipsis01">노트북 샀습니다</router-link></td>
            <td></td>
            <td>2021-04-20</td>
            <td>주*라<br/>(jim******)</td>
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
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'ReplyReviewDevice',
  data() {
    return {
      statusModify: false,
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
