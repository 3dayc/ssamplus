<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="counselBbsWrite">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>1:1 게시판 상담</h3>
            <div class="summeryTxt">학원의 전문 상담사가 답변을 드립니다.</div>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 상세 -->
          <div class="boardDetail write">
            <!-- 내용영역 -->
            <div class="box">
              <span class="selectSet">
                <select name="" id="" @change="onChange($event)">
                  <option value="">질문유형1 선택</option>
                  <option value="counselType01" selected>회원/로그인</option>
                  <option value="counselType02">사이트오류</option>
                  <option value="counselType03">교재/학습자료</option>
                  <option value="counselType04">강좌</option>
                  <option value="counselType05">결제/환불</option>
                  <option value="counselType06">학원</option>
                  <option value="counselType07">기타</option>
                  <option value="counselType08">임용학습상담</option>
                </select>
              </span>
              <!-- 회원/로그인 -->
              <span class="selectSet" v-if="counselType == 0">
                <select name="" id="">
                  <option value="">질문유형2 선택</option>
                  <option value="" selected>회원가입</option>
                  <option value="">회원정보수정</option>
                </select>
              </span>
              <!-- 사이트오픈 -->
              <span class="selectSet" v-if="counselType == 1">
                <select name="" id="">
                  <option value="">질문유형2 선택</option>
                  <option value="">이용환경</option>
                  <option value="">동영상오류</option>
                  <option value="">영상오류</option>
                  <option value="">결제오류</option>
                  <option value="">출력오류</option>
                  <option value="">모바일 오류</option>
                  <option value="">동시접속</option>
                </select>
              </span>
              <!-- 교재/학습자료 -->
              <span class="selectSet" v-if="counselType == 2">
                <select name="" id="">
                  <option value="">질문유형2 선택</option>
                  <option value="">학습자료</option>
                  <option value="">인쇄횟수추가</option>
                  <option value="">교재</option>
                  <option value="">배송</option>
                  <option value="">교환/반품</option>
                </select>
              </span>
              <!-- 강좌 -->
              <span class="selectSet" v-if="counselType == 3">
                <select name="" id="">
                  <option value="">질문유형 선택</option>
                  <option value="">강의신청/수강</option>
                  <option value="">패키지강좌</option>
                  <option value="">보너스/기획/특강</option>
                  <option value="">인강/직강변경</option>
                  <option value="">수강시간/연장</option>
                  <option value="">수강시간</option>
                  <option value="">홀딩</option>
                  <option value="">기타</option>
                </select>
              </span>
              <!-- 결제/환불 -->
              <span class="selectSet" v-if="counselType == 4">
                <select name="" id="">
                  <option value="">질문유형2 선택</option>
                  <option value="">결제</option>
                  <option value="">영수증</option>
                  <option value="">할인제도</option>
                  <option value="">환불</option>
                </select>
              </span>
              <!-- 학원 -->
              <span class="selectSet" v-if="counselType == 5">
                <select name="" id="">
                  <option value="">질문유형2 선택</option>
                  <option value="">수강신청문의</option>
                  <option value="">보충강의</option>
                  <option value="">학원/온라인변경</option>
                  <option value="">기타</option>
                </select>
              </span>
              <!-- 기타 -->
              <span class="selectSet" v-if="counselType == 6">
                <select name="" id="">
                  <option value="">질문유형2 선택</option>
                  <option value="">불법공유신고</option>
                  <option value="">모의고사</option>
                  <option value="">설명회</option>
                  <option value="">이벤트</option>
                  <option value="">건의사항</option>
                  <option value="">기타</option>
                </select>
              </span>
              <!-- 임용학습상담 -->
              <multiselect 
                v-if="counselType == 7"
                class="baseMultiSelect" 
                v-model="multiValue2" 
                :options="optionsMulti2" 
                :multiple="false" 
                :close-on-select="true" 
                group-values="dep2" 
                group-label="dep1" 
                :group-select="false" 
                :searchable="false"
                placeholder="과목" 
                track-by="name" 
                label="name">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
              </multiselect>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">질문유형3 선택</option>
                  <option value="">회원가입</option>
                  <option value="">회원정보수정</option>
                </select>
              </span>
            </div>
            <div class="box">
              <input type="text" value="종합문제 답안은 어디서 볼 수 있어요?">
            </div>
            <div class="box">
              <textarea>
                안녕하세요. 교사의 꿈을 위한 수험 동반자, KG에듀원 교원임용 희소/쌤플러스 입니다... 의견 올려줘서 고마와요.. 며칠전까지 이해가 잘 안되고 뭔가 잘못된 게 아닌가 했는데 이제 이해가 되네요..... 그 문제는 일단 그냥 넘어가려 했는데 ,,수업 때 다시 언급할게요!!! 이런 문제는 운동 게임을 즐겨보지 않는 여성에게는 어렵겠네요.... 게임 룰에 대한 전 후 충분한 설명이 있어야 공평하겠네요... 열공!!!
              </textarea>
            </div>
            <div class="box">
              <span class="uploadFile verM">
                <em>첨부파일</em>
                <span>
                  <input type="file" id="fileUpload"/>
                  <label for="fileUpload">+ 파일첨부</label>
                </span>
                <i class="fRed">※ 첨부파일은 최대 5개까지로 압축파일(zip)은 첨부할 수 없습니다</i>
              </span>
              <ul class="uploadFileList mt10">
                <li>
                  <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                    <button class="btnDelete">삭제</button>
                  </span>
                </li>
                <li>
                  <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                    <button class="btnDelete">삭제</button>
                  </span>
                </li>
              </ul>
            </div>
            <!-- //내용영역 -->
            <!-- 상세 버튼영역 -->
            <div class="boardBtn">
              <router-link to="/mkup/mypage/counsel/bbs" class="btnL line">취소</router-link>
              <router-link to="/mkup/mypage/counsel/bbs" class="btnL">확인</router-link>
            </div>
            <!-- //상세 버튼영역 -->
          </div>
          <!-- //상세 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'CounselBbsModify',
  data() {
    return {
      
      counselType:0,
      multiValue2: null,
      optionsMulti2: [
        {
          dep1: '교육학',
          dep2: [
            { name: '교육학', category: 'subject01' },
          ]
        },
        {
          dep1: '논술·면접',
          dep2: [
            { name: '면접', category: 'subject02' },
            { name: '논술', category: 'subject02' },
          ]
        },
        {
          dep1: '유아',
          dep2: [
            { name: '유아', category: 'subject03' },
          ]
        },
        {
          dep1: '초등',
          dep2: [
            { name: '초등', category: 'subject04' },
          ]
        },
        {
          dep1: '중등',
          dep2: [
            { name: '국어', category: 'subject05' },
            { name: '영어', category: 'subject05' },
            { name: '수학교육론', category: 'subject05' },
          ]
        }
      ],
    }
  },
  methods: {
    onChange(event) {
      let value = event.target.value;
      if (value == 'counselType01') this.counselType = 0;
      else if (value == 'counselType02') this.counselType = 1;
      else if (value == 'counselType03') this.counselType = 2;
      else if (value == 'counselType04') this.counselType = 3;
      else if (value == 'counselType05') this.counselType = 4;
      else if (value == 'counselType06') this.counselType = 5;
      else if (value == 'counselType07') this.counselType = 6;
      else if (value == 'counselType08') this.counselType = 7;
    },
  },
  components: {
  }
}
</script>
