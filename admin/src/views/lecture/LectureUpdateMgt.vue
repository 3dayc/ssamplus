<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>직강일 관리</h1>
      <span class="supTxt">* 학원 강좌의 직강일과 휴강일을 설정할 수 있음</span>
    </div>
    <div class="winContent">
      <div class="updateCalendar">
        <div class="tC">
          <VCalendar color="green" :attributes='attrs' />
          <div class="mt10">
            <button class="btnS green">직강일 등록</button>
            <button class="btnS ml10">휴강일 등록</button>
            <button class="btnS line ml10">일정 삭제</button>
          </div>
        </div>
        <div class="updateCalenarInfo boxBrown">
          <strong>▶ 직강일/휴강일 등록 방법</strong>  
          <ul>
            <li>ⓘ 캘린더 표기 안내
              <ul class="calCaption">
                <li><span class="calCap success">직강일</span> : 직강일</li>
                <li><span class="calCap holiday">휴강일</span> : 휴강일</li>
                <li><span class="calCap due">날짜 선택 시의 표기</span> : 날짜 선택 시의 표기</li>
              </ul>
            </li>
            <li>ⓘ 날짜를 선택한 뒤, [직강일 등록] 또는 [휴강일 등록] 버튼을 선택하여 직강일과 휴강일을 등록할 수 있습니다. 날짜는 여러 개 선택도 가능하며, 이미 직강일/휴강일로 등록되어 있더라도 선택할 수 있습니다.</li>
            <li>ⓘ 이미 직강일/휴강일로 등록되어 있는 일정을 삭제할 경우는 [일정 삭제]를 선택해주세요</li>
            <li>ⓘ 직강일로 선택된 날짜는 업데이트 예정일로 간주되어, 관리자시스템 ‘오늘의 업데이트’ 메뉴에서 강좌별 직강일에 업데이트 예정 건으로 표시됩니다</li>
            <li>ⓘ 직강의 강의 업데이트 일정은 쌤플러스 사이트의 ‘내 강의실’에서 조회할 수 있습니다.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LectureUpdateMgt',
  data() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    return {
      attrs: [
        {
          key: 'success01',
          highlight: {
            color: 'green',
            fillMode: 'solid',
          },
          dates: new Date(year, month, 8),
        },
        {
          key: 'success02',
          highlight: {
            color: 'green',
            fillMode: 'solid',
          },
          dates: new Date(year, month, 10),
        },
        {
          key: 'due01',
          highlight: {
            color: 'gray',
            fillMode: 'solid',
          },
          dates: new Date(year, month, 15),
        },
        {
          key: 'due02',
          highlight: {
            color: 'green',
            fillMode: 'outline',
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 'due03',
          highlight: {
            color: 'green',
            fillMode: 'outline',
          },
          dates: new Date(year, month, 24),
        },
        {
          key: 'due04',
          highlight: {
            color: 'green',
            fillMode: 'outline',
          },
          dates: new Date(year, month, 29),
        },
        {
          key: 'holiday01',
          highlight: {
            color: 'gray',
            fillMode: 'solid',
          },
          dates: new Date(year, month, 17),
        },
      ],
    }
  },
  methods: {
  },
}
</script>
