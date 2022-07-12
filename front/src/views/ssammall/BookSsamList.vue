<template lang="html">
  <div>
    <div class="classKind">
      <ul>
        <li>
          <span>교육학</span>
          <ol>
            <li><router-link to="/mkup/ssammall/book/teacher1">김현</router-link></li>
            <li><router-link to="">권구현</router-link></li>
            <li><router-link to="">윤중샘</router-link></li>
          </ol>
        </li>
        <li>
          <span>유아</span>
          <ol>
            <li><router-link to="/mkup/ssammall/book/teacher2">배지윤</router-link></li>
            <li><router-link to="">이동건</router-link></li>
            <li><router-link to="">양재웅</router-link></li>
          </ol>
        </li>
        <li>
          <span>국어</span>
          <ol>
            <li><router-link to="/mkup/ssammall/book/teacher3" class="new">송헌/김준팀</router-link></li>
            <li><router-link to="">송헌</router-link></li>
            <li><router-link to="">김준</router-link></li>
            <li><router-link to="">박노송</router-link></li>
          </ol>
        </li>
        <li>
          <span>영어</span>
          <ol>
            <li><router-link to="">차류쉘팀</router-link></li>
            <li><router-link to="">차미아</router-link></li>
            <li><router-link to="">류지원</router-link></li>
            <li><router-link to="">미쉘김</router-link></li>
          </ol>
        </li>
        <li>
          <span>수학</span>
          <ol>
            <li><router-link to="">이정훈/안후상팀</router-link></li>
            <li><router-link to="">이정훈</router-link></li>
            <li><router-link to="">안후상</router-link></li>
            <li><router-link to="" class="new">김지혜</router-link></li>
          </ol>
        </li>
        <li>
          <span>음악</span>
          <ol>
            <li><router-link to="">서정팀</router-link></li>
            <li><router-link to="">서민정</router-link></li>
            <li><router-link to="">정희원</router-link></li>
            <li><router-link to="">박서형</router-link></li>
          </ol>
        </li>
        <li>
          <span>미술</span>
          <ol>
            <li><router-link to="">위상팀</router-link></li>
          </ol>
        </li>
        <li>
          <span>체육</span>
          <ol>
            <li><router-link to="">오정환</router-link></li>
            <li><router-link to="">김용호</router-link></li>
            <li><router-link to="">임서윤</router-link></li>
          </ol>
        </li>
        <li>
          <span>중국어</span>
          <ol>
            <li><router-link to="">희소중국어팀</router-link></li>
            <li><router-link to="">한정은</router-link></li>
            <li><router-link to="">이해진</router-link></li>
          </ol>
        </li>
        <li>
          <span>일본어</span>
          <ol>
            <li><router-link to="">동소현</router-link></li>
          </ol>
        </li>
        <li>
          <span>한문</span>
          <ol>
            <li><router-link to="">원주용</router-link></li>
          </ol>
        </li>
        <li>
          <span>가정</span>
          <ol>
            <li><router-link to="">문영은</router-link></li>
          </ol>
        </li>
        <li>
          <span>도덕윤리</span>
          <ol>
            <li><router-link to="">김성무</router-link></li>
          </ol>
        </li>
        <li>
          <span>미용</span>
          <ol>
            <li><router-link to="">이영미</router-link></li>
          </ol>
        </li>
        <li>
          <span>역사</span>
          <ol>
            <li><router-link to="">이순권</router-link></li>
            <li><router-link to="">반철진</router-link></li>
          </ol>
        </li>
        <li>
          <span>지리</span>
          <ol>
            <li><router-link to="">한무일</router-link></li>
          </ol>
        </li>
        <li>
          <span>물리</span>
          <ol>
            <li><router-link to="">최민영</router-link></li>
          </ol>
        </li>
        <li>
          <span>화학</span>
          <ol>
            <li><router-link to="">안병천/권혁팀</router-link></li>
            <li><router-link to="">안병천</router-link></li>
            <li><router-link to="">권혁</router-link></li>
          </ol>
        </li>
        <li>
          <span>생물</span>
          <ol>
            <li><router-link to="">엄은미</router-link></li>
          </ol>
        </li>
        <li>
          <span>과학교육론</span>
          <ol>
            <li><router-link to="">이진영</router-link></li>
          </ol>
        </li>
        <li>
          <span>전문상담</span>
          <ol>
            <li><router-link to="">이진영</router-link></li>
          </ol>
        </li>
        <li>
          <span>보건</span>
          <ol>
            <li><router-link to="">임수진</router-link></li>
          </ol>
        </li>
        <li>
          <span>특수</span>
          <ol>
            <li><router-link to="">한경</router-link></li>
            <li><router-link to="">박해인</router-link></li>
          </ol>
        </li>
        <li>
          <span>면접</span>
          <ol>
            <li><router-link to="">양재웅</router-link></li>
            <li><router-link to="">권구현</router-link></li>
            <li><router-link to="">윤중샘</router-link></li>
          </ol>
        </li>
        <li>
          <span>한국사</span>
          <ol>
            <li><router-link to="">정재학</router-link></li>
          </ol>
        </li>
        <li>
          <span>사서직(공무원)</span>
          <ol>
            <li><router-link to="">신인수</router-link></li>
          </ol>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'BookSsamList',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
