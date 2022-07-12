<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>카테고리 추가</h1>
      <span class="supTxt">* 강의 카테고리를 관리할 수 있습니다. 추가한 카테고리는 본 강좌 내에서만 사용 가능합니다.</span>
    </div>
    <div class="winContent">
      <!-- 카테고리 불러오기 -->
      <div class="subTit">
        <h2>카테고리 불러오기</h2>
      </div>
      <span class="selectSet">
        <select name="" id="">
          <option value="no" class="label">온라인 강좌 선택</option>
        </select>
      </span>
      <!-- //카테고리 불러오기 -->
      <!-- 카테고리 목록 -->
      <div class="subTit">
        <h2>카테고리 목록</h2>
      </div>
      <div class="tls subGreen">
        <table>
          <colgroup>
            <col width="80"/>
            <col width="*"/>
            <col width="80"/>
          </colgroup>
          <thead>
            <tr>
              <th>Seq</th><!-- 2021-11-29 수정 -->
              <th>카테고리</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><input type="text" value="중국철학"/></td>
              <td><button class="btnDelete">삭제</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td><input type="text" value="중국정치"/></td>
              <td><button class="btnDelete">삭제</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td><input type="text" value="중국철학"/></td>
              <td><button class="btnDelete">삭제</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td><input type="text" value="중국정치"/></td>
              <td><button class="btnDelete">삭제</button></td>
            </tr>
            <tr>
              <td>5</td>
              <td><input type="text" value="중국정치"/></td>
              <td><button class="btnDelete">삭제</button></td>
            </tr>
            <tr>
              <td colspan="3"><button class="btnM blueline wFull">+ 행 추가</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //카테고리 목록 -->
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
  name: 'LectureCategoryMgt',
  data() {
    return {

    }
  },
  components: {
  }
}
</script>
