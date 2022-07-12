<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>선생님 이미지</h1>
      <span class="supTxt">* 선생님 이미지를 선택할 수 있습니다.</span>
      <strong class="right boxGray fBlue">유아 | 배지윤</strong>
    </div>
    <div class="winContent">
      <div class="tls subGreen">
        <table>
          <colgroup>
            <col width="80"/>
            <col width="150"/>
            <col width="*"/>
            <col width="120"/>
          </colgroup>
          <thead>
            <tr>
              <th>선택</th>
              <th>구분</th>
              <th>이미지</th>
              <th>사이즈</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span class="radioSet noLabel">
		              <input type="checkbox" checked/>
		              <label for=""><i></i></label>
		            </span>
              </td>
              <td class="tL">A. 기본 이미지</td>
              <td>
                <span class="uploadThumb after">
                  <img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/>
                  <button class="btnDelete">삭제</button>
                </span>
              </td>
              <td>520 * 400</td>
            </tr>
            <tr>
              <td>
                <span class="radioSet noLabel">
		              <input type="checkbox" />
		              <label for=""><i></i></label>
		            </span>
              </td>
              <td class="tL">B. 선생님 홈</td>
              <td>
                <span class="uploadThumb after">
                  <img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/>
                  <button class="btnDelete">삭제</button>
                </span>
              </td>
              <td>520 * 400</td>
            </tr>
            <tr>
              <td>
                <span class="radioSet noLabel">
		              <input type="checkbox" />
		              <label for=""><i></i></label>
		            </span>
              </td>
              <td class="tL">C. 아이콘 대</td>
              <td>
                <span class="uploadThumb after">
                  <img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/>
                  <button class="btnDelete">삭제</button>
                </span>
              </td>
              <td>520 * 400</td>
            </tr>
            <tr>
              <td>
                <span class="radioSet noLabel">
		              <input type="checkbox" />
		              <label for=""><i></i></label>
		            </span>
              </td>
              <td class="tL">D. 아이콘 중</td>
              <td>
                <span class="uploadThumb after">
                  <img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/>
                  <button class="btnDelete">삭제</button>
                </span>
              </td>
              <td>520 * 400</td>
            </tr>
            <tr>
              <td>
                <span class="radioSet noLabel">
		              <input type="checkbox" />
		              <label for=""><i></i></label>
		            </span>
              </td>
              <td class="tL">E. 아이콘 소</td>
              <td>
                <span class="uploadThumb after">
                  <img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/>
                  <button class="btnDelete">삭제</button>
                </span>
              </td>
              <td>520 * 400</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="btnArea">
        <button class="btnM green">저장</button>
        <button class="btnM gray">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SiteTeacherImage',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
