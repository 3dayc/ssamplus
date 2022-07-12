<template lang="html">
  <div>
		<div class="pageTit">
			<h2>단과 강좌</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><router-link to="/mkup/lecture/SingleCourse">단과 강좌</router-link><em>수강신청홈 강좌순서</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="packageCourseWrite">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
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
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">수강유형</option>
                        <option value="">온라인 강좌</option>
                        <option value="">학원 강좌</option>
                        <option value="">라이브 강좌</option>
                      </select>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 패키지 -->
        <div class="subTit">
          <h3>패키지</h3>
        </div>
        <div class="tls w80p">
          <table>
            <colgroup>
              <col width="120"/>
              <col width="160"/>
              <col width="200"/>
              <col width="*"/>
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>정렬</th>
                <th>패키지번호</th>
                <th>패키지명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
                <td>2504</td>
                <td class="tL">[21 1~2월]<br/>2021 완전정복 쌤팩</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
                <td>2503</td>
                <td class="tL">[21 1~2월]<br/>2021 중국어 전략 패키지</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
                <td>2502</td>
                <td class="tL">[21 1~2월]<br/>2021 완전정복 쌤팩 + LG Gram</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //패키지 -->
        <!-- 이론강의 -->
        <div class="subTit">
          <h3>이론강의</h3>
        </div>
        <div class="tls w80p">
          <table>
            <colgroup>
              <col width="120"/>
              <col width="160"/>
              <col width="200"/>
              <col width="*"/>
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>정렬</th>
                <th>강좌번호</th>
                <th>강좌명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
                <td>S2201000010</td>
                <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
                <td>S2201000010</td>
                <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
                <td>S2201000010</td>
                <td class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //이론강의 -->
        <!-- 문제풀이 -->
        <div class="subTit">
          <h3>문제풀이</h3>
        </div>
        <!-- 문제풀이 -->
        <!-- 모의고사 -->
        <div class="subTit">
          <h3>모의고사</h3>
        </div>
        <div class="tls w80p">
          <table>
            <colgroup>
              <col width="120"/>
              <col width="160"/>
              <col width="200"/>
              <col width="*"/>
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>정렬</th>
                <th>강좌번호</th>
                <th>강좌명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
                <td>S2201000010</td>
                <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
                <td>S2201000010</td>
                <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
                <td>S2201000010</td>
                <td class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //모의고사 -->
         <!-- 면접실연 -->
        <div class="subTit">
          <h3>면접실연</h3>
        </div>
        <!-- 면접실연 -->
         <!-- 기타특강 -->
        <div class="subTit">
          <h3>기타특강</h3>
        </div>
        <!-- 기타특강 -->
      </div>
    </article>
    </div>

    <!-- Layer Popup -->
    <!-- //Layer Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SingleCourseRegHome',
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
