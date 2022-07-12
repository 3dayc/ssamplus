<template lang="html">
  <div class="replyCleanReport">
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <strong>회원 개인정보 표출</strong>
        <span class="toggleSet">
          <input type="checkbox" id="push" />
          <label for="push"><!--적용여부--></label>
        </span>
      </div>
      <div class="listSearch">
        <div class="back">
            <div class="bdLine">
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">구분</option>
                    <option value="">처리 중</option>
                    <option value="">처리 완료</option>
                  </select>
                </span>
              </span>
              <span class="lsItem">
                <input type="text" placeholder="이름, 아이디, 제목, 강좌 검색" />
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
    <!-- 테이블 목록 -->
    <div class="tls tlsFixed">
      <table>
        <colgroup>
          <col width="60"/>
          <col width="110"/>
          <col width="200"/>
          <col width="*"/>
          <col width="150"/>
          <col width="80"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
        </colgroup>
        <thead>
          <tr>
            <th scope="col">구분</th>
            <th scope="col">과목/<br/>선생님</th>
            <th scope="col">강좌</th>
            <th scope="col">제목</th>
            <th scope="col">신고자</th>
            <th scope="col">개별상담</th>
            <th scope="col">작성일</th>
            <th scope="col">상태</th>
            <th scope="col">처리자</th>
          </tr>
        </thead>
        <tbody>
          <!--Loop-->
          <tr class="waited">
            <td>개인</td>
            <td>교육학<br/>김현</td>
            <td class="tL"><p class="ellipsis01">[21 3~4월]<em class="iSet hotpink">프리미엄</em><br/>상반기 쌤팩(문학)</p></td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/report"  class="ellipsis01">김현 선생님 불법수강 신고합니다.</router-link></td>
            <td>김*민<br/>(jim******)</td>
            <td>●</td>
            <td>2021-05-25</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="">처리 중</option>
                  <option value="">처리완료</option>
                </select>
              </span>
            </td>
            <td>-</td>
          </tr>
          <!--//Loop-->
          <tr class="waited">
            <td>단체</td>
            <td>중국어<br/>장영희</td>
            <td class="tL"><p class="ellipsis01">[21 3~4월]<br/>상반기 썜팩(국어교육론)</p></td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/report"  class="ellipsis01">학교에서 불법수강하고 있네요.</router-link></td>
            <td>홍*동<br/>(jim******)</td>
            <td></td>
            <td>2021-05-20</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="">처리 중</option>
                  <option value="">처리완료</option>
                </select>
              </span>
            </td>
            <td>-</td>
          </tr>
          <tr class="waited">
            <td>개인</td>
            <td>국어<br/>박노송</td>
            <td class="tL">-</td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/report"  class="ellipsis01">신고합니다.</router-link></td>
            <td>김*정<br/>(jim******)</td>
            <td>●</td>
            <td>2021-05-19</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>처리 중</option>
                  <option value="">처리완료</option>
                </select>
              </span>
            </td>
            <td>-</td>
          </tr>
          <tr class="waited">
            <td>단체</td>
            <td>교육학<br/>김이안</td>
            <td class="tL"><p class="ellipsis01">[21 3~4월]<em class="iSet orange">제작완료</em><br/>국어교육론 실전대비과정2</p></td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/report"  class="ellipsis01">단체 수강 신고</router-link></td>
            <td>이*민<br/>(jim******)</td>
            <td>●</td>
            <td>2021-05-15</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>처리 중</option>
                  <option value="">처리완료</option>
                </select>
              </span>
            </td>
            <td>-</td>
          </tr>
          <tr class="waited">
            <td>개인</td>
            <td>수학<br/>홍길동</td>
            <td class="tL"><p class="ellipsis01">[21 3~4월]<em class="iSet yellow">제작중</em><br/>국어교육론 실전대비과정1</p></td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/report"  class="ellipsis01">김현 선생님 불법수강 신고합니다.</router-link></td>
            <td>강*민<br/>(jim******)</td>
            <td></td>
            <td>2021-05-15</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>처리 중</option>
                  <option value="">처리완료</option>
                </select>
              </span>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>단체</td>
            <td>역사<br/>이순권</td>
            <td class="tL">-</td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/report"  class="ellipsis01">학교에서 불법수강하고 있네요.</router-link></td>
            <td>서*민<br/>(jim******)</td>
            <td>●</td>
            <td>2021-05-10</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="">처리 중</option>
                  <option value="" selected>처리완료</option>
                </select>
              </span>
            </td>
            <td>홍길동<br/>2021-05-30</td>
          </tr>
          <tr>
            <td>개인</td>
            <td>수학<br/>안후상</td>
            <td class="tL"><p class="ellipsis01">[21 3~4월]<em class="iSet yellow">제작중</em><br/>문학 실전대비과정2</p></td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/report"  class="ellipsis01">신고합니다.</router-link></td>
            <td>장*혁<br/>(jim******)</td>
            <td>●</td>
            <td>2021-04-30</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="">처리 중</option>
                  <option value="" selected>처리완료</option>
                </select>
              </span>
            </td>
            <td>홍길동<br/>2021-05-30</td>
          </tr>
          <tr>
            <td>단체</td>
            <td>미술<br/>김길동</td>
            <td class="tL"><p class="ellipsis01">[21 3~4월]<em class="iSet orange">제작완료</em><br/>문학 실전대비과정1</p></td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/report"  class="ellipsis01">단체 수강 신고</router-link></td>
            <td>오*현<br/>(jim******)</td>
            <td>●</td>
            <td>2021-04-29</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="">처리 중</option>
                  <option value="" selected>처리완료</option>
                </select>
              </span>
            </td>
            <td>홍길동<br/>2021-05-30</td>
          </tr>
          <tr>
            <td>개인</td>
            <td>영어<br/>차미아</td>
            <td class="tL"><p class="ellipsis01">[21 1~2월]<em class="iSet yellow">제작중</em><br/>국어교육론 실전대비과정1</p></td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/report"  class="ellipsis01">신고</router-link></td>
            <td>이*현<br/>(jim******)</td>
            <td>●</td>
            <td>2021-04-29</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="">처리 중</option>
                  <option value="" selected>처리완료</option>
                </select>
              </span>
            </td>
            <td>홍길동<br/>2021-05-30</td>
          </tr>
          <tr>
            <td>단체</td>
            <td>국어<br/>박노송</td>
            <td class="tL">-</td>
            <td class="tL"><router-link to="/mkup/bbs/replyClean/report"  class="ellipsis01">불법수강 신고합니다.</router-link></td>
            <td>주*라<br/>(jim******)</td>
            <td></td>
            <td>2021-04-20</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="">처리 중</option>
                  <option value="" selected>처리완료</option>
                </select>
              </span>
            </td>
            <td>홍길동<br/>2021-05-30</td>
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
  name: 'ReplyCleanReport',
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
