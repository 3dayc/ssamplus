<template lang="html">
    <div id="windowLayout">
      <div class="winHeader">
        <h1>관리자 그룹설정/변경</h1>
        <span class="supTxt">* 선택한 관리자의 그룹을 신규 설정하거나 변경할 수 있습니다.</span>
      </div>
      <div class="winContent">
        <h3>
          <strong>그룹 선택</strong>
          <span class="right">
            <button class="btnM">저장</button>
            <button class="btnM gray ml10">취소</button>
          </span>
        </h3>
        <div class="tls subGreen">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="130"/>
              <col width="*"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>선택</th>
                <th>그룹 명</th>
                <th>소속 관리자</th>
                <th>권한</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio" checked/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>그룹 미지정</td>
                <td>
                  <ul class="groupList">
                    <li>박미진</li>
                    <li>김민규</li>
                  </ul>
                </td>
                <td>권한 없음</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>전체 관리자</td>
                <td>
                  <ul class="groupList">
                    <li>박미진</li>
                    <li>김민규</li>
                    <li>박미진</li>
                    <li>김민규</li>
                    <li>박미진</li>
                    <li>김민규</li>
                    <li>박미진</li>
                  </ul>
                </td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>일반 관리자</td>
                <td>
                  <ul class="groupList">
                    <li>박미진</li>
                    <li>김민규</li>
                  </ul>
                </td>
                <td>80개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>영상팀 관리자</td>
                <td>
                  <ul class="groupList">
                    <li>박미진</li>
                    <li>김민규</li>
                    <li>박미진</li>
                    <li>김민규</li>
                    <li>박미진</li>
                    <li>김민규</li>
                    <li>박미진</li>
                  </ul>
                </td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>고객센터 관리자</td>
                <td>
                  <ul class="groupList">
                    <li>박미진</li>
                    <li>김민규</li>
                  </ul>
                </td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>원격지원 관리자</td>
                <td>
                  <ul class="groupList">
                    <li>박미진</li>
                    <li>김민규</li>
                    <li>박미진</li>
                    <li>김민규</li>
                    <li>박미진</li>
                    <li>김민규</li>
                    <li>박미진</li>
                  </ul>
                </td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>학원 관리자</td>
                <td>
                  <ul class="groupList">
                    <li>박미진</li>
                    <li>김민규</li>
                  </ul>
                </td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>메인 관리자</td>
                <td>
                  <ul class="groupList">
                    <li>박미진</li>
                    <li>김민규</li>
                    <li>박미진</li>
                    <li>김민규</li>
                    <li>박미진</li>
                    <li>김민규</li>
                    <li>박미진</li>
                  </ul>
                </td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>디자인 관리자</td>
                <td>
                  <ul class="groupList">
                    <li>박미진</li>
                    <li>김민규</li>
                  </ul>
                </td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio"/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>CS 관리자</td>
                <td>-</td>
                <td>50개</td>
              </tr>
            </tbody>
          </table>
        </div>
  		</div>
    </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MngGroupSetting',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
