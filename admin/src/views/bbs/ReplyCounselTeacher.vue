<template lang="html">
  <div class="replyCounselTeacher">
    <!-- 테이블 유틸 -->
    <div class="boardTop">
      <div class="left-po">
        <span class="frontTooltip">
          <em>ⓘ Front</em>
          <span>- 마이페이지 1:1 상담예약 > 본인 문의 표시</span>
        </span>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">과목</option>
                  <option value="">교육학</option>
                  <option value="">논술면접</option>
                  <option value="">한국사</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">선생님</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <strong class="title">신청일자</strong>
              <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                <template v-slot="{ inputValue, togglePopover, isDragging }">
                  <input :value="inputValue.start + ' ~ ' + inputValue.end" :class="isDragging ? 'text-green-600' : 'text-green-900'" @click="togglePopover()" placeholder="시작일 선택 ~ 종료일 선택" />
                </template>
              </Vcalendar>
            </span>
            <span class="lsItem">
              <input type="text" placeholder="이름, 아이디 검색" />
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <div>
            <button class="btnRefresh">초기화</button>
          </div>
        </div>
      </div>
      <div class="right-po">
        <button class="btnDownload" @click="popTrigger = true">다운로드</button>
        <router-link to="./" class="btnM ml10">상담 후기</router-link>
      </div>
    </div>
    <!-- //테이블 유틸 -->
    <!-- 테이블 목록 -->
    <div class="tls">
      <table>
        <colgroup>
          <col width="60" span="1"/>
          <col width="120">
          <col width="150">
          <col width="120" span="7"/>
        </colgroup>
        <thead>
          <tr>
            <th>
              <span class="checkSet noLabel">
                <input type="checkbox" />
                <label for=""><i></i></label>
              </span>
            </th>
            <th scope="col">신청일</th>
            <th scope="col">신청자</th>
            <th scope="col">과목</th>
            <th scope="col">선생님</th>
            <th scope="col">수강이력</th>
            <th scope="col">상담유형</th>
            <th scope="col">상담일자</th>
            <th scope="col">상담시간</th>
            <th scope="col">참석</th>
          </tr>
        </thead>
        <tbody>
          <!--Loop-->
          <tr>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" checked/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-05-26</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">김지민<br/>(jimin0123)</router-link></td>
            <td>유아</td>
            <td>배지윤</td>
            <td>●</td>
            <td>1:1 방문</td>
            <td>2021-05-30</td>
            <td>17:00~18:00</td>
            <td>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="no" class="label">선택</option>
                    <option value="">참석</option>
                    <option value="">비참석</option>
                  </select>
                </span>
            </td>
          </tr>
          <!--//Loop-->
          <tr class="red">
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" />
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-05-25</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">김지민<br/>(jimin0123)</router-link></td>
            <td>전문상담</td>
            <td>박노송</td>
            <td></td>
            <td>ZOOM</td>
            <td>2021-05-29</td>
            <td>16:00~17:00</td>
            <td>취소</td>
          </tr>
          <tr>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" />
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-05-24</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">김지민<br/>(jimin0123)</router-link></td>
            <td>음악</td>
            <td>서민정</td>
            <td>●</td>
            <td>전화</td>
            <td>2021-05-28</td>
            <td>15:00~16:00</td>
            <td>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="no" class="label">선택</option>
                    <option value="">참석</option>
                    <option value="">비참석</option>
                  </select>
                </span>
            </td>
          </tr>
          <tr class="blue">
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" checked/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-05-24</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">김지민<br/>(jimin0123)</router-link></td>
            <td>교육학</td>
            <td>동소현</td>
            <td>●</td>
            <td>1:1 방문</td>
            <td>2021-05-27</td>
            <td>14:00~13:00</td>
            <td>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="no" class="label">선택</option>
                    <option value="" selected>참석</option>
                    <option value="">비참석</option>
                  </select>
                </span>
            </td>
          </tr>
          <tr class="red">
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" />
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-05-24</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">김지민<br/>(jimin0123)</router-link></td>
            <td>미술</td>
            <td>차류쉘팀</td>
            <td></td>
            <td>ZOOM</td>
            <td>2021-05-26</td>
            <td>13:00~14:00</td>
            <td>취소</td>
          </tr>
          <tr class="gray">
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" />
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-05-24</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">김지민<br/>(jimin0123)</router-link></td>
            <td>미술</td>
            <td>박서형</td>
            <td>●</td>
            <td>전화</td>
            <td>2021-05-25</td>
            <td>11:00~12:00</td>
            <td>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="no" class="label">선택</option>
                    <option value="">참석</option>
                    <option value="" selected>비참석</option>
                  </select>
                </span>
            </td>
          </tr>
          <tr class="gray">
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" />
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-05-23</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">김지민<br/>(jimin0123)</router-link></td>
            <td>역사</td>
            <td>배지윤</td>
            <td>●</td>
            <td>1:1 방문</td>
            <td>2021-05-24</td>
            <td>10:00~11:00</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="">참석</option>
                  <option value="" selected>비참석</option>
                </select>
              </span>
            </td>
          </tr>
          <tr class="blue">
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" />
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-05-22</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">김지민<br/>(jimin0123)</router-link></td>
            <td>특수</td>
            <td>노송크루</td>
            <td>●</td>
            <td>ZOOM</td>
            <td>2021-05-23</td>
            <td>17:00~18:00</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>참석</option>
                  <option value="">비참석</option>
                </select>
              </span>
            </td>
          </tr>
          <tr class="blue"><!-- 20210715 class 변경 -->
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" checked/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-04-26</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">김지민<br/>(jimin0123)</router-link></td>
            <td>유아</td>
            <td>서민정</td>
            <td>●</td>
            <td>전화</td>
            <td>2021-05-22</td>
            <td>16:00~17:00</td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>참석</option>
                  <option value="">비참석</option>
                </select>
              </span>
            </td>
          </tr>
          <tr class="blue"><!-- 20210715 class 변경 -->
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" checked/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">2021-04-20</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/teacher">김지민<br/>(jimin0123)</router-link></td>
            <td>전문상담</td>
            <td>동소현</td>
            <td></td>
            <td>전화</td>
            <td>2021-05-21</td>
            <td>15:00~16:00</td>
            <td>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="no" class="label">선택</option>
                    <option value="" selected>참석</option>
                    <option value="">비참석</option>
                  </select>
                </span>
            </td>
          </tr>
          <!-- 데이터 없을 경우 -->
          <tr style="display:none;"><td colspan="10" class="noneData">등록된 데이터가 없습니다.</td></tr>
          <!-- //데이터 없을 경우 -->
        </tbody>
      </table>
    </div>
    <Paginate />
    <!-- //테이블 목록 -->

		<!-- 다운로드 마스터 팝업 -->
    <Popup v-if='popTrigger' @close="popTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>다운로드 마스터 – 회원</h1>
        <span>* 다운로드 조건을 설정하여 엑셀 파일로 다운로드 할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
				<!-- 항목선택 -->
				<div class="downloadForm">
					<dl>
						<dt>조건1</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">가입기간</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="calDupSet">
	              <VCalendar class="calSet" v-model="downloadCal1" color="green">
	                <template v-slot="{ inputValue, togglePopover }">
	                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
	                </template>
	              </VCalendar>
	              <em>~</em>
	              <VCalendar class="calSet" v-model="downloadCal2" color="green">
	                <template v-slot="{ inputValue, togglePopover }">
	                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
	                </template>
	              </VCalendar>
	            </span>
						</dd>
					</dl>
					<dl>
						<dt>조건2</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">수강구분</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">유료수강</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
						</dd>
					</dl>
					<dl>
						<dt>조건3</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">수강교수</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">교육학</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">김현</option>
	                <option value="" >Select Option 1</option>
	              </select>
	            </span>
						</dd>
					</dl>
					<a class="btnDownload" download>다운로드</a>
				</div>
				<!-- //항목선택 -->
      </div>
    </Popup>
		<!-- //다운로드 마스터 팝업 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'ReplyCounselTeacher',
  data(){
    return {
      classValue: "downloadPop",
      popTrigger: false,
      closeBtn: false,
      downloadCal1: '',
      downloadCal2: '',
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  }
}
</script>

<style lang="css" scoped>
</style>
