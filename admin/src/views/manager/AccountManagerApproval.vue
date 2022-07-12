<template lang="html">
  <div>
    <div class="accountManagerApproval">
      <!-- 테이블 목록 -->
      <div class="tls">
        <table>
          <colgroup>
            <col width="200"/>
            <col width="200"/>
            <col width="400"/>
            <col width="320"/>
            <col width="200"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">아이디</th>
              <th scope="col">이름 <button class="btnSort">정렬</button></th>
              <th scope="col">사내 이메일</th>
              <th scope="col">가입일시</th>
              <th scope="col">관리자 권한</th>
            </tr>
          </thead>
          <tbody>
            <!--Loop-->
            <tr class="red"><!-- 신규 가입 회원의 경우 클래스 red 추가 -->
              <td>mjpark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push1" >
                  <label for="push1">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <!--//Loop-->
            <tr class="expiry">
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push2" >
                  <label for="push2">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr class="expiry">
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push3">
                  <label for="push3">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr class="expiry">
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push4">
                  <label for="push4">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr class="expiry">
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push5">
                  <label for="push5">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr class="expiry">
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push6" >
                  <label for="push6">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr class="expiry">
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push7">
                  <label for="push7">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr class="expiry">
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push8">
                  <label for="push8">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr class="expiry">
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push9">
                  <label for="push9">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr class="expiry">
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push10">
                  <label for="push10">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
          </tbody>
        </table>
      </div>
      <!-- //테이블 목록 -->
      <Paginate />
    </div>

    <!-- Popup -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>관리자 그룹설정</h1>
        <span>* 선택한 관리자의 그룹을 신규 설정하거나 변경할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
        <div class="subTit">
          <h3>그룹 선택</h3>
        </div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="60"/>
              <col width="140"/>
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
                    <input type="radio" name="radio1" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>미지정</td>
                <td>박미진  |  김민규</td>
                <td>권한 없음</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio" name="radio1" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>전체 관리자</td>
                <td>박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |박미진</td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio" name="radio1" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>일반 관리자</td>
                <td>박미진  |  김민규</td>
                <td>80개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio" name="radio1" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>영상팀 관리자</td>
                <td>박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |박미진</td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio" name="radio1" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>고객센터 관리자</td>
                <td>박미진  |  김민규</td>
                <td>80개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio" name="radio1" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>원격지원 관리자</td>
                <td>박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |박미진</td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio" name="radio1" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>학원 관리자</td>
                <td>박미진  |  김민규</td>
                <td>80개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio" name="radio1" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>메인 관리자</td>
                <td>박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |박미진</td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio" name="radio1" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>디자인 관리자</td>
                <td>박미진  |  김민규</td>
                <td>80개</td>
              </tr>
              <tr>
                <td>
                  <span class="radioSet noLabel">
                    <input type="radio" name="radio1" />
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
      <div slot="modalfooter" class="modalfooter">
        <button class="btnM line" @click="popupTrigger = false">취소</button>
        <button class="btnM green" @click="popupTrigger = false">저장</button>
      </div>
    </Popup>
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
        선택한 회원을 삭제 하시겠습니까?<br/>삭제 시 해당 계정은 관리자 시스템에<br/>접속할 수 없습니다
      </template>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">취소</button>
        <button class="btnM green" @click="alertTrigger = false">삭제</button>
      </template>
    </Alert>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'AccountManagerApproval',
  data() {
    return {
      classValue: "managerGroupPop",
      popupTrigger: false,
      alertTrigger: false,
    }
  },
  methods: {
    
  },
  components: {
  }
}
</script>
