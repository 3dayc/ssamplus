<template lang="html">
  <div class="replyReview">
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <span class="frontTooltip">
          <em>ⓘ Front</em>
          <span>- 쌤몰 홈 > BEST 건 모두 표출<br/>- 쌤몰 교재도서 > 교재별 표시<br/>- 쌤몰 백퍼후기 > 노출건 표시</span>
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
              <input type="text" placeholder="교재명, 제목, 이름, 아이디 검색" />
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
            <th scope="col">과목/선생님</th>
            <th scope="col">교재명</th>
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
            <td>교육학<br/>김현</td>
            <td class="tL">키위교육학(기초)</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/goods" class="ellipsis01">교육학의 기본 교재</router-link></td>
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
            <td>중국어<br/>장영희</td>
            <td class="tL">중국어(실전)</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/goods" class="ellipsis01">중국어는 희소중국어팀 교재가 최고입니다.</router-link></td>
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
            <td>국어<br/>박노송</td>
            <td class="tL">국어(기본)</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/goods" class="ellipsis01">박노송 강좌 듣는 분은 필수템</router-link></td>
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
            <td>교육학<br/>김이안</td>
            <td class="tL">레몬교육학</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/goods" class="ellipsis01">교육학 교재 추천</router-link></td>
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
            <td>수학<br/>홍길동</td>
            <td class="tL">수학의 정석</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/goods" class="ellipsis01">수학 교재 구매함</router-link></td>
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
            <td>역사<br/>이순권</td>
            <td class="tL">역사 길잡이</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/goods" class="ellipsis01">역사 교재 추천</router-link></td>
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
            <td>수학<br/>안후상</td>
            <td class="tL">수학(기초)</td>
            <td class="tL "><router-link to="/mkup/bbs/replyReview/goods" class="ellipsis01">수학 기초부터 시작하는 분은 사세요</router-link></td>
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
            <td>미술<br/>김길동</td>
            <td class="tL">갤미술교재</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/goods" class="ellipsis01">미술 정리의 최종본</router-link></td>
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
            <td>영어<br/>차미아</td>
            <td class="tL">차미아의 영어기초</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/goods" class="ellipsis01">차미아 선생님의 팁이 전부 담겨있는 교재</router-link></td>
            <td></td>
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
            <td>국어<br/>박노송</td>
            <td class="tL">박노송의 국어</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/goods" class="ellipsis01">국어 교재 추천합니다.</router-link></td>
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
  name: 'ReplyReviewGoods',
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
