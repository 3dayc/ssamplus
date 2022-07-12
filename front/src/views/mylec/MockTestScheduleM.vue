<template lang="html">
  <div class="mobileCaseSchedule">

    <!-- tab-wrap3 -->
    <div class="tabwrap">
      <!-- tab -->
      <div class="tabBack">
        <div class="tabNav">
          <nav>
            <ul class="blackLineTab">
              <li :class="{on:scheduleTab===0}"><button @click="scheduleTab = 0">나의 시험시간</button></li>
              <li :class="{on:scheduleTab===1}"><button @click="scheduleTab = 1">중등/중특</button></li>
            </ul>
          </nav>
        </div>
      </div>
      <!--// tab -->
      <div class="tabLayout">
        <div v-if="scheduleTab == 0" class="tabData" :key="scheduleTab">
          <div class="resTls subCase">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem item0">진행</span>
              <div class="lgItem itemGroup">
                <div class="lgSubGrid">
                  <span class="lgItem item1">시작시간</span>
                  <span class="lgItem item2">종료시간</span>
                  <span class="lgItem item3">진행시간</span>
                </div>
              </div>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <li class="listGrid">
                  <span class="lgItem item0">유의사항</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">17 : 39</span>
                      <span class="lgItem item2">17 : 57</span>
                      <span class="lgItem item3">18분</span>
                    </div>
                    <strong>시험장 입실을 완료해 주세요</strong>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">1교시 시험지 배포</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">08 : 53</span>
                      <span class="lgItem item2">09 : 00</span>
                      <span class="lgItem item3">7분</span>
                    </div>
                    <strong>문제지를 준비해 주세요</strong>
                  </div>
                </li>
                <li class="listGrid testTime">
                  <span class="lgItem item0">1교시</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">09 : 00</span>
                      <span class="lgItem item2">10 : 00</span>
                      <span class="lgItem item3">60분</span>
                    </div>
                    <strong></strong>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">쉬는 시간</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">10 : 00</span>
                      <span class="lgItem item2">10 : 33</span>
                      <span class="lgItem item3">33분</span>
                    </div>
                    <strong>시험 시작 20분 전까지 입실해 주세요</strong>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">2교시 시험지 배포</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">10 : 33</span>
                      <span class="lgItem item2">10 : 40</span>
                      <span class="lgItem item3">7분</span>
                    </div>
                    <strong>문제지를 준비해 주세요</strong>
                  </div>
                </li>
                <li class="listGrid testTime">
                  <span class="lgItem item0">2교시</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">10 : 40</span>
                      <span class="lgItem item2">11 : 50</span>
                      <span class="lgItem item3">70분</span>
                    </div>
                    <strong></strong>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">쉬는 시간</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">11 : 50</span>
                      <span class="lgItem item2">12 : 23</span>
                      <span class="lgItem item3">33분</span>
                    </div>
                    <strong>시험 시작 20분 전까지 입실해 주세요</strong>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">3교시 시험지 배포</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">12 : 23</span>
                      <span class="lgItem item2">12 : 30</span>
                      <span class="lgItem item3">7분</span>
                    </div>
                    <strong>문제지를 준비해 주세요</strong>
                  </div>
                </li>
                <li class="listGrid testTime">
                  <span class="lgItem item0">3교시</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">12 : 30</span>
                      <span class="lgItem item2">13 : 40</span>
                      <span class="lgItem item3">70분</span>
                    </div>
                    <strong></strong>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">마무리</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">13 : 40</span>
                      <span class="lgItem item2">13 : 45</span>
                      <span class="lgItem item3">5분</span>
                    </div>
                    <strong> 퇴실해 주세요</strong>
                  </div>
                </li>
              </ul>
            </div>
            <!-- //list -->
          </div>
        </div>
        <div v-if="scheduleTab == 1" class="tabData">
          <div class="resTls subCase">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem item0">진행</span>
              <div class="lgItem itemGroup">
                <div class="lgSubGrid">
                  <span class="lgItem item1">시작시간</span>
                  <span class="lgItem item2">종료시간</span>
                  <span class="lgItem item3">진행시간</span>
                </div>
              </div>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <li class="listGrid">
                  <span class="lgItem item0">유의사항</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">17 : 39</span>
                      <span class="lgItem item2">17 : 57</span>
                      <span class="lgItem item3">18분</span>
                    </div>
                    <strong>시험장 입실을 완료해 주세요</strong>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">1교시 시험지 배포</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">08 : 53</span>
                      <span class="lgItem item2">09 : 00</span>
                      <span class="lgItem item3">7분</span>
                    </div>
                    <strong>문제지를 준비해 주세요</strong>
                  </div>
                </li>
                <li class="listGrid testTime">
                  <span class="lgItem item0">1교시</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">09 : 00</span>
                      <span class="lgItem item2">10 : 00</span>
                      <span class="lgItem item3">60분</span>
                    </div>
                    <strong></strong>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">쉬는 시간</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">10 : 00</span>
                      <span class="lgItem item2">10 : 33</span>
                      <span class="lgItem item3">33분</span>
                    </div>
                    <strong>시험 시작 20분 전까지 입실해 주세요</strong>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">2교시 시험지 배포</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">10 : 33</span>
                      <span class="lgItem item2">10 : 40</span>
                      <span class="lgItem item3">7분</span>
                    </div>
                    <strong>문제지를 준비해 주세요</strong>
                  </div>
                </li>
                <li class="listGrid testTime">
                  <span class="lgItem item0">2교시</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">10 : 40</span>
                      <span class="lgItem item2">11 : 50</span>
                      <span class="lgItem item3">70분</span>
                    </div>
                    <strong></strong>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">쉬는 시간</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">11 : 50</span>
                      <span class="lgItem item2">12 : 23</span>
                      <span class="lgItem item3">33분</span>
                    </div>
                    <strong>시험 시작 20분 전까지 입실해 주세요</strong>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">3교시 시험지 배포</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">12 : 23</span>
                      <span class="lgItem item2">12 : 30</span>
                      <span class="lgItem item3">7분</span>
                    </div>
                    <strong>문제지를 준비해 주세요</strong>
                  </div>
                </li>
                <li class="listGrid testTime">
                  <span class="lgItem item0">3교시</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">12 : 30</span>
                      <span class="lgItem item2">13 : 40</span>
                      <span class="lgItem item3">70분</span>
                    </div>
                    <strong></strong>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">마무리</span>
                  <div class="lgItem itemGroup">
                    <div class="lgSubGrid">
                      <span class="lgItem item1">13 : 40</span>
                      <span class="lgItem item2">13 : 45</span>
                      <span class="lgItem item3">5분</span>
                    </div>
                    <strong> 퇴실해 주세요</strong>
                  </div>
                </li>
              </ul>
            </div>
            <!-- //list -->
          </div>
        </div>
      </div>
    </div>
    <!-- //tab-wrap3 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MockTestScheduleM',
  components: {
  },
  data() {
    return {
      scheduleTab:0
    }
  },
	methods: {
	},
  computed: {
  },
  mounted() {
  }
}
</script>
