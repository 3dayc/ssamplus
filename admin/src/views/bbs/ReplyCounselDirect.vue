<template lang="html">
  <div class="replyCounselDirect">
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
                  <option value="no" class="label">상담 과목</option>
                  <option value="">교육학</option>
                  <option value="">논술면접</option>
                  <option value="">한국사</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">상담 유형</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">상담자</option>
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
        <a href="#" class="btnDownload">다운로드</a>
        <button class="btnPrint ml10">인쇄</button>
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
            <th scope="col">상담 과목</th>
            <th scope="col">상담 유형</th>
            <th scope="col">상담 장소</th>
            <th scope="col">상담일자</th>
            <th scope="col">상담시간</th>
            <th scope="col">상담자</th>
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
            <td><router-link to="/mkup/bbs/replyCounsel/direct">2021-05-26</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">김지민<br/>(jimin0123)</router-link></td>
            <td>유아</td>
            <td>1:1 방문</td>
            <td>아이비</td>
            <td>2021-05-30</td>
            <td>17:00~18:00</td>
            <td>
              <span class="selectSet w100">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="">고길동</option>
                  <option value="">김길동</option>
                </select>
              </span>
            </td>
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
            <td><router-link to="/mkup/bbs/replyCounsel/direct">2021-05-25</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">김지민<br/>(jimin0123)</router-link></td>
            <td>전문상담</td>
            <td>전화</td>
            <td>-</td>
            <td>2021-05-29</td>
            <td>16:00~17:00</td>
            <td>
              <span class="selectSet w100">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>고길동</option>
                  <option value="">김길동</option>
                </select>
              </span>
            </td>
            <td>취소</td>
          </tr>
          <tr>
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" />
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">2021-05-24</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">김지민<br/>(jimin0123)</router-link></td>
            <td>음악</td>
            <td>1:1 방문</td>
            <td>이데아</td>
            <td>2021-05-28</td>
            <td>15:00~16:00</td>
            <td>
              <span class="selectSet w100">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>고길동</option>
                  <option value="">김길동</option>
                </select>
              </span>
            </td>
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
            <td><router-link to="/mkup/bbs/replyCounsel/direct">2021-05-24</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">김지민<br/>(jimin0123)</router-link></td>
            <td>교육학</td>
            <td>전화</td>
            <td>-</td>
            <td>2021-05-27</td>
            <td>14:00~13:00</td>
            <td>
              <span class="selectSet w100">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>고길동</option>
                  <option value="">김길동</option>
                </select>
              </span>
            </td>
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
            <td><router-link to="/mkup/bbs/replyCounsel/direct">2021-05-24</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">김지민<br/>(jimin0123)</router-link></td>
            <td>체육</td>
            <td>1:1 방문</td>
            <td>아이비</td>
            <td>2021-05-26</td>
            <td>13:00~14:00</td>
            <td>
              <span class="selectSet w100">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>고길동</option>
                  <option value="">김길동</option>
                </select>
              </span>
            </td>
            <td>취소</td>
          </tr>
          <tr class="gray">
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" />
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">2021-05-24</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">김지민<br/>(jimin0123)</router-link></td>
            <td>미술</td>
            <td>전화</td>
            <td>-</td>
            <td>2021-05-25</td>
            <td>11:00~12:00</td>
            <td>
              <span class="selectSet w100">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>고길동</option>
                  <option value="">김길동</option>
                </select>
              </span>
            </td>
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
            <td><router-link to="/mkup/bbs/replyCounsel/direct">2021-05-23</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">김지민<br/>(jimin0123)</router-link></td>
            <td>역사</td>
            <td>1:1 방문</td>
            <td>이데아</td>
            <td>2021-05-24</td>
            <td>10:00~11:00</td>
            <td>
              <span class="selectSet w100">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>고길동</option>
                  <option value="">김길동</option>
                </select>
              </span>
            </td>
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
            <td><router-link to="/mkup/bbs/replyCounsel/direct">2021-05-22</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">김지민<br/>(jimin0123)</router-link></td>
            <td>특수</td>
            <td>전화</td>
            <td>-</td>
            <td>2021-05-23</td>
            <td>17:00~18:00</td>
            <td>
              <span class="selectSet w100">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>고길동</option>
                  <option value="">김길동</option>
                </select>
              </span>
            </td>
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
          <tr class="blue">
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" checked/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">2021-04-26</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">김지민<br/>(jimin0123)</router-link></td>
            <td>유아</td>
            <td>1:1 방문</td>
            <td>아이비</td>
            <td>2021-05-22</td>
            <td>16:00~17:00</td>
            <td>
              <span class="selectSet w100">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>고길동</option>
                  <option value="">김길동</option>
                </select>
              </span>
            </td>
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
          <tr class="blue">
            <td>
              <span class="checkSet noLabel">
                <input type="checkbox" checked/>
                <label for=""><i></i></label>
              </span>
            </td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">2021-04-20</router-link></td>
            <td><router-link to="/mkup/bbs/replyCounsel/direct">김지민<br/>(jimin0123)</router-link></td>
            <td>전문상담</td>
            <td>전화</td>
            <td>-</td>
            <td>2021-05-21</td>
            <td>15:00~16:00</td>
            <td>
              <span class="selectSet w100">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>고길동</option>
                  <option value="">김길동</option>
                </select>
              </span>
            </td>
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
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'ReplyCounselDirect',
  data(){
    return {
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
