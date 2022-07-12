<template lang="html">
  <div>
    <div class="accountManagerList">
      <!-- 테이블 유틸 -->
      <div class="boardTop">
        <div class="listSearch">
          <div class="back">
            <div class="bdLine">
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">그룹</option>
                  </select>
                </span>
              </span>
              <span class="lsItem">
                <input type="text" placeholder="이름, 아이디 검색" />
                <button class="btnSearch">검색</button>
              </span>
            </div>
            <div><button class="btnRefresh">초기화</button></div>
          </div>
        </div>
        <div class="right-po">
          <button class="btnS line" @click="popupTrigger2 = true">그룹 삭제</button>
          <router-link to="/mkup/manager/accountManagerList/write" class="btnAdd">신규등록</router-link>
        </div>
      </div>
      <!-- //테이블 유틸 -->
      <!-- 테이블 목록 -->
      <div class="tls">
        <table>
          <colgroup>
            <col width="100" span="3"/>
            <col width="200"/>
            <col width="180"/>
            <col width="100" span="2"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">그룹 <button class="btnSort">정렬</button></th>
              <th scope="col">아이디</th>
              <th scope="col">이름</th>
              <th scope="col">사내 이메일</th>
              <th scope="col">가입일시</th>
              <th scope="col">그룹 설정</th>
              <th scope="col">관리자 권한</th>
            </tr>
          </thead>
          <tbody>
            <!--Loop-->
            <tr class="cancel"><!-- 그룹 없을 경우 클래스 cancel 추가 -->
              <td>미지정</td>
              <td>mjpark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td><button class="btnS line" @click="popupTrigger = true">그룹 설정</button></td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push1" checked>
                  <label for="push1">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <!--//Loop-->
            <tr>
              <td><router-link to="/mkup/manager/accountManagerList/view">일반 관리자</router-link></td>
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td><button class="btnS line" @click="popupTrigger = true">그룹 설정</button></td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push1" checked>
                  <label for="push1">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr>
              <td><router-link to="/mkup/manager/accountManagerList/view">영상팀 관리자</router-link></td>
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td><button class="btnS line" @click="popupTrigger = true">그룹 설정</button></td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push2" checked>
                  <label for="push2">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr>
              <td><router-link to="/mkup/manager/accountManagerList/view">고객센터 관리자</router-link></td>
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td><button class="btnS line" @click="popupTrigger = true">그룹 설정</button></td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push3" checked>
                  <label for="push3">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr>
              <td><router-link to="/mkup/manager/accountManagerList/view">일반 관리자</router-link></td>
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td><button class="btnS line" @click="popupTrigger = true">그룹 설정</button></td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push4" checked>
                  <label for="push4">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr>
              <td><router-link to="/mkup/manager/accountManagerList/view">영상팀 관리자</router-link></td>
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td><button class="btnS line" @click="popupTrigger = true">그룹 설정</button></td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push5" checked>
                  <label for="push5">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr>
              <td><router-link to="/mkup/manager/accountManagerList/view">고객센터 관리자</router-link></td>
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td><button class="btnS line" @click="popupTrigger = true">그룹 설정</button></td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push6" checked>
                  <label for="push6">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr>
              <td><router-link to="/mkup/manager/accountManagerList/view">일반 관리자</router-link></td>
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td><button class="btnS line" @click="popupTrigger = true">그룹 설정</button></td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push7" checked>
                  <label for="push7">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr>
              <td><router-link to="/mkup/manager/accountManagerList/view">영상팀 관리자</router-link></td>
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td><button class="btnS line" @click="popupTrigger = true">그룹 설정</button></td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push8" checked>
                  <label for="push8">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr>
              <td><router-link to="/mkup/manager/accountManagerList/view">고객센터 관리자</router-link></td>
              <td>mipark</td>
              <td>박미진</td>
              <td>mjpark@kggroup.co.kr</td>
              <td>2021-04-12 15:00</td>
              <td><button class="btnS line" @click="popupTrigger = true">그룹 설정</button></td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push9" checked>
                  <label for="push9">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
          <span class="right">
            <button class="btnM line" @click="popupTrigger = false">취소</button>
            <button class="btnM ml5" @click="popupTrigger = false">저장</button>
          </span>
        </div>
        <div class="tls subGreen">
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
                    <input type="radio" name="radio1" checked/>
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
                <td>-</td>
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
    </Popup>
    <Popup v-if='popupTrigger2' @close="popupTrigger2 = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>관리자 그룹삭제</h1>
        <span>* 소속관리자가 없는 그룹은 삭제할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
        <div class="subTit">
          <h3>그룹 선택</h3>
          <span class="right">
            <button class="btnM line">삭제</button>
          </span>
        </div>
        <div class="tls subGreen">
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
                  <span class="checkSet noLabel">
                    <input type="checkbox" name="checkbox1" disabled/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>미지정</td>
                <td>박미진  |  김민규</td>
                <td>권한 없음</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" name="checkbox1" disabled/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>전체 관리자</td>
                <td>박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |박미진</td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" name="checkbox1" disabled/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>일반 관리자</td>
                <td>박미진  |  김민규</td>
                <td>80개</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" name="checkbox1" disabled/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>영상팀 관리자</td>
                <td>박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |박미진</td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" name="checkbox1" disabled/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>고객센터 관리자</td>
                <td>박미진  |  김민규</td>
                <td>80개</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" name="checkbox1" disabled/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>원격지원 관리자</td>
                <td>박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |박미진</td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" name="checkbox1" disabled/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>학원 관리자</td>
                <td>박미진  |  김민규</td>
                <td>80개</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" name="checkbox1" disabled/>
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>메인 관리자</td>
                <td>박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |  박미진  |  김민규  |박미진</td>
                <td>100개</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" name="checkbox1" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>디자인 관리자</td>
                <td>-</td>
                <td>80개</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" name="checkbox1" checked/>
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
  name: 'AccountManagerList',
  data() {
    return {
      classValue: "managerGroupPop",
      popupTrigger: false,
      popupTrigger2: false,
      alertTrigger: false,
    }
  },
  methods: {
    
  },
  components: {
  }
}
</script>
