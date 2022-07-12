<template lang="html">
  <div class="replyReview">
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <span class="frontTooltip">
          <em>ⓘ Front</em>
          <span>- 메인 선생님 영역 > BEST 1건 랜덤 표시<br/>- 메인 하단 > BEST건 랜덤 표시<br/>- 수강신청 선생님홈 상단 > BEST 1건이 랜덤 표시<br/>- 수강신청 선생님홈 하단 > 동일 선생님 건 전체<br/>- 선생님스페셜 수강후기 > BEST건 랜덤 표시</span>
        </span>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">과목</option>
                  <option value="">교육학</option>
                  <option value="">논술면접</option>
                  <option value="">한국사</option>
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
              <input type="text" placeholder="강좌, 제목, 이름, 아이디 검색" />
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
    <div class="tls">
      <table>
        <colgroup>
          <col width="50">
          <col width="60">
          <col width="190">
          <col width="140">
          <col width="200">
          <col width="380">
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
            <th scope="col">강좌</th>
            <th scope="col">과목/선생님</th>
            <th scope="col">제목</th>
            <th scope="col">내용</th>
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
            <td class="tL">[21 3~4월] <em class="iSet hotpink">프리미엄</em><br/>상반기 쌤팩(문학)</td>
            <td>교육학<br/>김현</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/course">김현선생님 강좌 추천</router-link></td>
            <td class="tL">추천합니다^^이해가기 쉽게 강의해주셔서요ㅎㅎㅎ</td>
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
            <td class="tL">[21 3~4월]<br/>상반기 썜팩(국어교육론)</td>
            <td>중국어<br/>장영희</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/course">중국어는 희소중국어팀!</router-link></td>
            <td class="tL">추천해요! 엄청 많은 양은 아니지만 그래도 범위가 꽤 되는 임용에서 선택과 집중은 무엇보다 중요한데 이쌤은 그걸 잘 해주셔서 어떤 부분에 더 초점을 맞춰야 하는 지 알게 해주세여!</td>
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
            <td class="tL">[21 3~4월] <em class="iSet yellow">제작중</em><br/>국어교육론 실전대비</td>
            <td>국어<br/>박노송</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/course">박노송 선생님 강좌 정말 좋아요</router-link></td>
            <td class="tL">완전 추천해요~이해가 먼저 돼야 암기를 할 수 있는 타입인데 배쌤은 기본적인 이해를 중점으로 쉽게 설명해주셔서 정말 좋아요!! 암기도 중요하지만 이해기반이 더 중요하다고 생각되는 선생님들께 정말 추천드립니다!</td>
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
                <input type="checkbox" checked="checked" id="check04">
                <label for="check04"><i></i></label>
              </span>
            </td>
            <td class="tL">[21 3~4월] <em class="iSet orange">제작완료</em><br/>국어교육론 실전대비</td>
            <td>교육학<br/>김이안</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/course">교육학 강좌 추천</router-link></td>
            <td class="tL">간결한 핵심만 최종합격 다이렉트로</td>
            <td>-</td>
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
            <td class="tL">[21 3~4월] <em class="iSet yellow">제작중</em><br/>국어교육론 실전대비</td>
            <td>수학<br/>홍길동</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/course">강좌추천합니다</router-link></td>
            <td class="tL">중요한 부분을 잘 짚어주시고 탄탄한 자료로 든든하다</td>
            <td><span class="uploadThumb after"><img img :src="require(`@/assets/images/img_replyReview_sample.png`)" alt="샘플 이미지"/></span></td>
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
            <td class="tL">[21 3~4월] <em class="iSet orange">제작완료</em><br/>문학 실전대비과정3</td>
            <td>역사<br/>이순권</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/course">이순권 선생님 강좌 최고에요</router-link></td>
            <td class="tL">큰 맥락을 통해 문제를 파악하는 방법을 알 수 있게 도와주는 강의여서 추천합니다!!</td>
            <td><span class="uploadThumb after"><img img :src="require(`@/assets/images/img_replyReview_sample.png`)" alt="샘플 이미지"/></span></td>
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
            <td class="tL">[21 3~4월] <em class="iSet yellow">제작중</em><br/>문학 실전대비과정2</td>
            <td>수학<br/>안후상</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/course">이정훈선생님과 안후상선생님의 강좌가 큰 도움이 됐습니다.</router-link></td>
            <td class="tL">추천합니다. 기본 강의임에도 불구하고 심화내용도 맛볼 수가 있고 전년도 기출문제 풀이까지 해줘서 매우 좋습니다</td>
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
            <td class="tL">[21 3~4월] <em class="iSet orange">제작완료</em><br/>문학 실전대비과정1</td>
            <td>미술<br/>김길동</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/course">미술 강좌 추천</router-link></td>
            <td class="tL">시험에서 필요한 부분, 필요하지 않은 부분을 가려 줌. 최근에 학자들이 주목하고 있는 부분 등의 업데이트가 빠름.</td>
            <td>-</td>
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
                <input type="checkbox" checked="checked" id="check09">
                <label for="check09"><i></i></label>
              </span>
            </td>
            <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>국어교육론 실전대비</td>
            <td>영어<br/>차미아</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/course">차미아 선생님 최고에요</router-link></td>
            <td class="tL">추천합니다. 논술에 대해 감이 안잡히는 선생님들에게 큰 도움이 될 것 같습니다</td>
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
                <input type="checkbox" checked="checked" id="check10">
                <label for="check10"><i></i></label>
              </span>
            </td>
            <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>국어교육론 실전대비</td>
            <td>국어<br/>박노송</td>
            <td class="tL"><router-link to="/mkup/bbs/replyReview/course">국어는 박노송 선생님이죠</router-link></td>
            <td class="tL">추천합니다. 기본 강의임에도 불구하고 심화내용도 맛볼 수가 있고 전년도 기출문제 풀이까지 해줘서 매우 좋습니다</td>
            <td>-</td>
            <td>2021-04-20</td>
            <td>주*라<br/>(jim******)</td>
          </tr>
          <!-- 데이터 없을 경우 -->
          <tr style="display:none;"><td colspan="9" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'ReplyReviewCourse',
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
