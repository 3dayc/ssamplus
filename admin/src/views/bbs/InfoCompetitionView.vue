<template lang="html">
  <div>
    <div class="pageTit">
			<h2>모집인원 및 경쟁률</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><router-link to="/mkup/bbs/infoFaq">모집인원 및 경쟁률</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoCompetitionView">
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
                <td>79</td>
                <td>84</td>
                <td>1645</td>
                <td>16.01</td>
                <td>130</td>
                <td>80.67</td>
                <td>84</td>
                <td>166.61</td>
              </tr>
              <tr>
                <td>유아</td>
                <td>장애</td>
                <td>221</td>
                <td>420</td>
                <td>4364</td>
                <td>10.39</td>
                <td>685</td>
                <td>79</td>
                <td>420</td>
                <td>171.13</td>
              </tr>
              <tr>
                <td>유아</td>
                <td>지역</td>
                <td>27</td>
                <td>48</td>
                <td>520</td>
                <td>10.83</td>
                <td>79</td>
                <td>79</td>
                <td>48</td>
                <td>171.63</td>
              </tr>
              <tr>
                <td>초등</td>
                <td>일반</td>
                <td>15</td>
                <td>21</td>
                <td>376</td>
                <td>17.9</td>
                <td>32</td>
                <td>80</td>
                <td>21</td>
                <td>170.23</td>
              </tr>
              <tr>
                <td>초등</td>
                <td>장애</td>
                <td>4</td>
                <td>6</td>
                <td>156</td>
                <td>26</td>
                <td>10</td>
                <td>81</td>
                <td>6</td>
                <td>176.28</td>
              </tr>
              <tr>
                <td>초등</td>
                <td>지역</td>
                <td>11</td>
                <td>12</td>
                <td>292</td>
                <td>24.33</td>
                <td>18</td>
                <td>81</td>
                <td>12</td>
                <td>169.34</td>
              </tr>
              <tr>
                <td>유아특수</td>
                <td>일반</td>
                <td>18</td>
                <td>17</td>
                <td>304</td>
                <td>17.88</td>
                <td>27</td>
                <td>81.33</td>
                <td>17</td>
                <td>166.61</td>
              </tr>
              <tr>
                <td>유아특수</td>
                <td>장애</td>
                <td>79</td>
                <td>84</td>
                <td>1645</td>
                <td>16.01</td>
                <td>130</td>
                <td>80.67</td>
                <td>84</td>
                <td>166.61</td>
              </tr>
              <tr>
                <td>유아특수</td>
                <td>지역</td>
                <td>221</td>
                <td>420</td>
                <td>4364</td>
                <td>10.39</td>
                <td>685</td>
                <td>79</td>
                <td>420</td>
                <td>171.13</td>
              </tr>
              <tr>
                <td>초등특수</td>
                <td>일반</td>
                <td>27</td>
                <td>48</td>
                <td>520</td>
                <td>10.83</td>
                <td>79</td>
                <td>79</td>
                <td>48</td>
                <td>171.63</td>
              </tr>
              <tr>
                <td>초등특수</td>
                <td>장애</td>
                <td>15</td>
                <td>21</td>
                <td>376</td>
                <td>17.9</td>
                <td>32</td>
                <td>80</td>
                <td>21</td>
                <td>170.23</td>
              </tr>
              <tr>
                <td>초등특수</td>
                <td>지역</td>
                <td>4</td>
                <td>6</td>
                <td>156</td>
                <td>26</td>
                <td>10</td>
                <td>81</td>
                <td>6</td>
                <td>176.28</td>
              </tr>
              <tr class="gray">
                <td rowspan="4">총계</td>
                <td>일반</td>
                <td>79</td>
                <td>84</td>
                <td>1645</td>
                <td>16.01</td>
                <td>130</td>
                <td>80.67</td>
                <td>84</td>
                <td>166.61</td>
              </tr>
              <tr class="gray">
                <td>장애</td>
                <td>221</td>
                <td>420</td>
                <td>4364</td>
                <td>10.39</td>
                <td>685</td>
                <td>79</td>
                <td>420</td>
                <td>171.13</td>
              </tr>
              <tr class="gray">
                <td>지역</td>
                <td>27</td>
                <td>48</td>
                <td>520</td>
                <td>10.83</td>
                <td>79</td>
                <td>79</td>
                <td>48</td>
                <td>171.63</td>
              </tr>
              <tr class="gray">
                <td>전체</td>
                <td>221</td>
                <td>420</td>
                <td>4364</td>
                <td>10.39</td>
                <td>685</td>
                <td>79</td>
                <td>420</td>
                <td>171.13</td>
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
  name: 'InfoCompetitionView',
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
