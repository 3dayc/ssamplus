<template lang="html">
  <div>
    <div class="pageTit">
			<h2>공지사항</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/noticeNews">공지게시판</router-link><router-link to="/mkup/bbs/noticeNews">공지사항</router-link><em>신규등록</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="noticeNewsWrite">
        <!-- 설정 -->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/noticeNews/view" class="btnM green">저장</router-link>
            <router-link to="/mkup/bbs/noticeNews" class="btnM ml10">취소</router-link>
          </span>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="40%"/>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>구분 <sup>필수</sup></th>
                <td>
                  <span class="selectSet mr5">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="">일반</option>
                      <option value="">전공</option>
                    </select>
                  </span>
                  <!--상위에서 전공 선택 시 -->
                  <span class="selectSet mr5">
                    <select name="" id="">
                      <option value="no" class="label">과목</option>
                    </select>
                  </span>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선생님</option>
                      <option value="">일반</option>
                    </select>
                  </span>
                  <!--//상위에서 전공 선택 시 -->
                </td>
                <th>노출 여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1" checked>
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>상단 고정</th>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" checked/>
                    <label for=""><i></i>상단에 고정함</label>
                  </span>
                </td>
                <th>메인 출력</th>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" checked/>
                    <label for=""><i></i>PC</label>
                  </span>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>모바일</label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //설정 -->
        <!-- 전공게시대상 설정 -->
        <div class="subTit">
          <h3>전공게시대상 설정</h3>
          <span class="ml10">※ <과목>을 선택하고 [추가]버튼을 클릭하면 <과목>만 등록할 수 있음</span>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th>과목, 선생님 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="">과목</option>
                    </select>
                  </span>
                  <span class="selectSet ml5">
                    <select name="" id="">
                      <option value="">선생님</option>
                    </select>
                  </span>
                  <button class="btnS line ml5">추가</button>
                  <div class="mt10 selectCase">
                    <span class="saveBox"><input type="checkbox" id="quick2"><label for="quick2">교육학</label><button>닫기</button></span>
                    <span class="saveBox"><input type="checkbox" id="quick3"><label for="quick3">교육학 김현</label><button>닫기</button></span>
                    <span class="saveBox"><input type="checkbox" id="quick4"><label for="quick4">국어</label><button>닫기</button></span>
                    <span class="saveBox"><input type="checkbox" id="quick5"><label for="quick5">국어 송헌</label><button>닫기</button></span>
                    <span class="saveBox"><input type="checkbox" id="quick6"><label for="quick6">국어 김준</label><button>닫기</button></span>
                    <span class="saveBox"><input type="checkbox" id="quick7"><label for="quick7">영어</label><button>닫기</button></span>
                    <span class="saveBox"><input type="checkbox" id="quick8"><label for="quick8">영어 송헌</label><button>닫기</button></span>
                    <span class="saveBox"><input type="checkbox" id="quick9"><label for="quick9">유아 배지윤</label><button>닫기</button></span>
                    <span class="saveBox"><input type="checkbox" id="quick10"><label for="quick10">수학</label><button>닫기</button></span>
                    <span class="saveBox"><input type="checkbox" id="quick11"><label for="quick11">과학교육론</label><button>닫기</button></span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //전공게시대상 설정 -->
        <!-- 내용 -->
        <div class="subTit"><h3>공지 내용</h3></div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>제목 <sup>필수</sup></th>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td>
                  <textarea class="wFull h10">
                    에디터가 나올 영역입니다
                  </textarea>
                </td>
              </tr>
              <tr>
                <th>파일첨부</th>
                <td>
                  <button class="btnS line">+ 파일추가</button>
                  <ul class="fileList writeCase">
                    <li><span><a href="#" download>로그인에러1.png</a><button class="btnDelete ml5">삭제</button></span></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //내용 -->
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
  name: 'NoticeNewsWrite',
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
