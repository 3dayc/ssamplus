<template lang="html">
  <div class="replyReview">
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <span class="frontTooltip">
          <em>ⓘ Front</em>
          <span>- 쌤몰 백퍼후기  > 상품별 표시</span>
        </span>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">분류</option>
                  <option value="">패브릭</option>
                  <option value="">문구</option>
                  <option value="">기타</option>
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
            <td>문구</td>
            <td>학습비법 노트</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/etc" class="ellipsis01">노트 세트 구매했습니다.</router-link></td>
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
            <td>문구</td>
            <td>적중 OMR 카드</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/etc" class="ellipsis01">OMR 쓰니까 좋아요.</router-link></td>
            <td></td>
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
            <td>패브릭</td>
            <td>다노 밸런스 쿠션</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/etc" class="ellipsis01">푹신푹신 좋습니다.</router-link></td>
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
            <td>문구</td>
            <td>학습비법 노트</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/etc" class="ellipsis01">펜 구매했는데 잘 써지고 좋네요</router-link></td>
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
            <td>문구</td>
            <td>학습비법 노트</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/etc" class="ellipsis01">쌤플러스에서 강의도 듣고 학습기기도 사고 노트도 사고</router-link></td>
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
            <td>적중 OMR 카드</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/etc" class="ellipsis01">실전 느낌 내보려고 구매해봤습니다.</router-link></td>
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
            <td>패브릭</td>
            <td>데님 워싱 방석</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/etc" class="ellipsis01">오래 앉아있으면 힘들어서 구매했어요</router-link></td>
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
            <td>문구</td>
            <td>파카 볼펜</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/etc" class="ellipsis01">추천해요</router-link></td>
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
            <td>문구</td>
            <td>학습비법 노트</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/etc" class="ellipsis01">종이 질이 안 좋은 노트도 많은데 쌤플러스 노트는 괜찮네요</router-link></td>
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
            <td>기타</td>
            <td>적중 OMR 카드</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/etc" class="ellipsis01">추천합니다.</router-link></td>
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
  name: 'ReplyReviewEtc',
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
