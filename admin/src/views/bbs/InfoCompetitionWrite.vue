<template lang="html">
  <div>
    <div class="pageTit">
			<h2>모집인원 및 경쟁률</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><router-link to="/mkup/bbs/infoFaq">모집인원 및 경쟁률</router-link><em>신규등록</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoCompetitionWrite">
        <div class="updateForm clearBh">
          <span class="selectSet">
            <select name="" id="">
              <option value="no" class="label">전체</option>
              <option value="" selected>서울</option>
              <option value="">경기</option>
              <option value="">인천</option>
              <option value="">세종</option>
              <option value="">부산</option>
              <option value="">대전</option>
              <option value="">대구</option>
              <option value="">광주</option>
              <option value="">울산</option>
              <option value="">강원</option>
              <option value="">충북</option>
              <option value="">충남</option>
              <option value="">경북</option>
              <option value="">경남</option>
              <option value="">전북</option>
              <option value="">전남</option>
              <option value="">제주</option>
            </select>
          </span>
          <span class="selectSet">
            <select name="" id="">
              <option value="no" class="label">전체</option>
              <option value="">유아</option>
              <option value="">초등</option>
              <option value="">유아특수</option>
              <option value="">초등특수</option>
            </select>
          </span>
          <!-- <span class="selectSet">
            <select name="" id="">
              <option value="no" class="label">전체</option>
              <option value="">국어</option>
              <option value="">영어</option>
              <option value="">한국사</option>
            </select>
          </span> -->
          <span class="right">
            <router-link to="/mkup/bbs/infoCompetition" class="btnList">목록으로</router-link>
            <button class="btnM ml10">저장</button>
            <router-link to="/mkup/bbs/infoCompetition" class="btnM line ml10">삭제</router-link>
          </span>
        </div>
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="120">
              <col width="140">
              <col width="140">
              <col width="140">
              <col width="140">
              <col width="140">
              <col width="140">
              <col width="140">
              <col width="140">
              <col width="140">
            </colgroup>
            <thead class="duble">
              <tr>
                <th colspan="10" class="dubleCol"><span class="fBlue">2022학년도 | 정시 | 유·초등</span></th>
              </tr>
              <tr>
                <th scope="col" rowspan="2">과목</th>
                <th scope="col" rowspan="2">구분</th>
                <th scope="col" rowspan="2">사전예고<br/>모집인원</th>
                <th scope="col" rowspan="2">모집인원</th>
                <th scope="col" rowspan="2">지원인원</th>
                <th scope="col" rowspan="2">경쟁률</th>
                <th scope="col" colspan="2">1차합격선</th>
                <th scope="col" colspan="2">2차합격선</th>
              </tr>
              <tr>
                <th scope="col">합격인원</th>
                <th scope="col">합격선</th>
                <th scope="col">합격인원</th>
                <th scope="col">합격선</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>유아</td>
                <td>일반</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td>유아</td>
                <td>장애</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td>유아</td>
                <td>지역</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td>초등</td>
                <td>일반</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td>초등</td>
                <td>장애</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td>초등</td>
                <td>지역</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td>유아특수</td>
                <td>일반</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td>유아특수</td>
                <td>장애</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td>유아특수</td>
                <td>지역</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td>초등특수</td>
                <td>일반</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td>초등특수</td>
                <td>장애</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td>초등특수</td>
                <td>지역</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr class="gray">
                <td rowspan="4">총계</td>
                <td>일반</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr class="gray">
                <td>장애</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr class="gray">
                <td>지역</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <tr class="gray">
                <td>전체</td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="10" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <!-- //테이블 목록 -->
      </div>
      <!-- //page layout -->
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'InfoCompetitionWrite',
  data() {
    return {
      fileName: '',
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
