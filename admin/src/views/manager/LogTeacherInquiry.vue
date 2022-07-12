<template lang="html">
  <div>
    <!-- page layout -->
    <div class="logTeacherInquiry">
      <!-- 테이블 유틸 -->
      <div class="boardTop">
        <div class="listSearch">
          <div class="back">
            <div class="bdLine">
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">메뉴 1</option>
                  </select>
                </span>
              </span>
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">메뉴 2</option>
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
      </div>
      <!-- //테이블 유틸 -->

      <!-- 테이블 목록 -->
      <div class="tls">
        <table>
          <colgroup>
            <col width="200" span="2"/>
            <col width="300"/>
            <col width="400"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">메뉴1</th>
              <th scope="col">메뉴2</th>
              <th scope="col">계정</th>
              <th scope="col">일시</th>
            </tr>
          </thead>
          <tbody>
            <!--Loop-->
            <tr>
              <td>통계</td>
              <td>일일 통계</td>
              <td>김현  |  kimhyun0123</td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <!--//Loop-->
            <tr>
              <td>강좌/수강생</td>
              <td>강좌별 수강생 조회 (학원 강좌)</td>
              <td>배지윤  |  jybae35</td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>강좌/수강생</td>
              <td>학습 Q&A</td>
              <td>박미진  |  mjpark111</td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>온라인 모의고사</td>
              <td>-</td>
              <td>김현  |  kimhyun0123</td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>통계</td>
              <td>일일 통계</td>
              <td>김현  |  kimhyun0123</td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>강좌/수강생</td>
              <td>강좌별 수강생 조회 (학원 강좌)</td>
              <td>배지윤  |  jybae35</td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>강좌/수강생</td>
              <td>학습 Q&A</td>
              <td>박미진  |  mjpark111</td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>온라인 모의고사</td>
              <td>-</td>
              <td>김현  |  kimhyun0123</td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>통계</td>
              <td>일일 통계</td>
              <td>김현  |  kimhyun0123</td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>강좌/수강생</td>
              <td>강좌별 수강생 조회 (학원 강좌)</td>
              <td>배지윤  |  jybae35</td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="4" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
          </tbody>
        </table>
      </div>
      <!-- //테이블 목록 -->
      <Paginate />
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LogTeacherInquiry',
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
