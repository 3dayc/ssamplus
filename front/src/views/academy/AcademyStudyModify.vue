<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="academyStudyWrite">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>스터디 모집</h3>
          </div>
          <!-- //서브 타이틀 -->
          <p>
            - 스터디 모집 이외에 상업적, 욕설, 비방 등 부적절한 내용은 삭제 처리됩니다. <br/>
            - 건전한 스터디 문화를 만들기 위해서 희소/쌤플러스는 항상 노력합니다.
          </p>
          <!-- 상세 -->
          <div class="boardDetail write">
            <!-- 입력영역 -->
            <div class="box kindSet">
              <span class="autoCom">
                <input type="text" placeholder="스터디 과목 검색" value="" />
              </span>
            </div>
            <div class="box timeSet">
              <span class="radioArea">
                <strong>구분</strong>
                <span class="radioSet">
                  <input type="radio" name="radio1" id="rd1" checked />
                  <label for="rd1"><i></i>오프라인</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio1" id="rd2" />
                  <label for="rd2"><i></i>온라인</label>
                </span>
              </span>
              <span class="dayArea">
                <strong>요일</strong>
    						<span class="sortSet rndCase">
    	            <span>
    	              <input type="radio" id="radioTab1" name="tadioTab" /><label for="radioTab1">매일</label>
    	            </span>
    	            <span>
    	              <input type="radio" id="radioTab2" name="tadioTab" checked /><label for="radioTab2">월</label>
    	            </span>
    	            <span>
    	              <input type="radio" id="radioTab3" name="tadioTab" checked /><label for="radioTab3">화</label>
    	            </span>
    	            <span>
    	              <input type="radio" id="radioTab4" name="tadioTab" checked /><label for="radioTab4">수</label>
    	            </span>
    	            <span>
    	              <input type="radio" id="radioTab5" name="tadioTab" checked /><label for="radioTab5">목</label>
    	            </span>
    	            <span>
    	              <input type="radio" id="radioTab6" name="tadioTab" checked /><label for="radioTab6">금</label>
    	            </span>
    	            <span>
    	              <input type="radio" id="radioTab7" name="tadioTab" checked /><label for="radioTab7">토</label>
    	            </span>
    	            <span>
    	              <input type="radio" id="radioTab8" name="tadioTab" /><label for="radioTab8">일</label>
    	            </span>
    						</span>
              </span>
            </div>
            <div class="box detailSet">
              <div class="inputBox">
                <span>
                  <input type="text" placeholder="시/군/구 지역명">
                </span>
              </div>
              <div class="inputBox">
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">시간</option>
                  </select>
                </span>
              </div>
              <div class="inputBox">
                <span class="unit">
                  <input type="text" placeholder="인원">
                  <em>명</em>
                </span>
              </div>
              <div class="inputBox">
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">성별</option>
                  </select>
                </span>
              </div>
              <div class="inputBox">
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">마감여부</option>
                  </select>
                </span>
              </div>
            </div>
            <div class="box">
              <input type="text" placeholder="제목을 입력해 주세요." value="김현 교육학 짝스터디 구합니다." />
            </div>
            <div class="box">
              <pre>
<textarea placeholder="제목을 입력해 주세요.">
- 연락처 또는 카카오톡 ID : hhhhh00
- 스터디 내용
1. 강의가 올라오는 매주 목,토 오후 11:59까지 강의 수강 인증. 1분이라도 늦으면 지각처리
2. 복습 인증(백지인출) 평일 매일 오후 11:59까지
강의 밀리지 않고 열심히 같이 으쌰으쌰하면서 짝스터디 하실 분 구합니다!
혹시 인출 방법이나 수강 인증 시간을 조율하고 싶으신 분들은 카톡아이디로 문의주세요!
조율 가능합니다. 편하게 연락주세요 :)</textarea>
              </pre>
            </div>
            <!-- //입력영역 -->
            <!-- 상세 버튼영역 -->
            <div class="boardBtn">
              <router-link to="/mkup/academy/study" class="btnL line">취소</router-link>
              <router-link to="/mkup/academy/study/view2" class="btnL">확인</router-link>
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
  name: 'AcademyStudyModify',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>
