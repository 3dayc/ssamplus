<template lang="html">
  <div>
      <!-- page layout -->
      <div class="multiTestViewAnnounce"><!-- class 없어도 유지 -->
        <!-- 안내방송 순서 및 시간 -->
        <div class="subTit">
          <h3>안내방송 순서 및 시간</h3>
          <span class="right">
            <em>A20210101010 |  복합  |  1,2.3교시 타입  |  2022년 상반기 희소 모의고사</em>입니다.
          </span>
        </div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="150"/>
              <col width="150"/>
              <col width="150"/>
              <col width="80"/>
              <col width="*"/>
            </colgroup>
            <thead>
              <tr>
                <th>진행</th>
                <th colspan="2">중등/중특</th>
                <th>안내방송</th>
                <th>메모</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">유의사항</td>
                <td>입장 시</td>
                <td>입장 시</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 안녕하세요 지금부터 희소모의고사 ~~</span>
                </td>
              </tr>
              <tr>
                <td class="tR">10분 경과</td>
                <td class="tR">10분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 필기구와 수험표를 제외한 ~~~1교시 시험 시작 10분전 입니다. ~~</span>
                </td>
              </tr>
              <tr>
                <td rowspan="2">1교시<br/>시험지 배포</td>
                <td class="tR">12분 경과</td>
                <td class="tR">12분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 시험실 감독관께서는 답안지를 응시생에게 배부하여 주시기 바랍니~~</span>
                </td>
              </tr>
              <tr>
                <td class="tR">16분 경과</td>
                <td class="tR">16분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 시험실 감독관께서는 문제지를 배부하여 주시기 바랍니다. ~~</span>
                </td>
              </tr>
              <tr>
                <td rowspan="3">1교시</td>
                <td class="tR">20분 경과</td>
                <td class="tR">20분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 1교시 시험을 시작하겠습니다.</span>
                </td>
              </tr>
              <tr>
                <td class="tR">70분 경과</td>
                <td class="tR">1시간 10분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 시험 종료까지 10분 남았습니다.</span>
                </td>
              </tr>
              <tr>
                <td class="tR">80분 경과</td>
                <td class="tR">1시간 20분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 1교시 시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다. 감독~~</span>
                </td>
              </tr>
              <tr>
                <td>쉬는 시간</td>
                <td class="tR">110분 경과</td>
                <td class="tR">1시간 50분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 2교시 시험 시작 10분 전입니다. 시험실 감독관께서는 답안지와 문를~~</span>
                </td>
              </tr>
              <tr>
                <td rowspan="2">2교시<br/>시험지 배포</td>
                <td class="tR">112분 경과</td>
                <td class="tR">1시간 52분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 시험실 감독관께서는 답안지를 응시생에게 배부하여 주시기 바랍니~~</span>
                </td>
              </tr>
              <tr>
                <td class="tR">116분 경과</td>
                <td class="tR">1시간 56분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 시험실 감독관께서는 문제지를 배부하여 주시기 바랍니다. ~~</span>
                </td>
              </tr>
              <tr>
                <td rowspan="3">2교시</td>
                <td class="tR">120분 경과</td>
                <td class="tR">2시간 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 그럼 지금부터 2교시 시험을 시작하겠습니다. ~~</span>
                </td>
              </tr>
              <tr>
                <td class="tR">180분 경과</td>
                <td class="tR">3시간 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 시험 종료까지 10분 남았습니다.</span>
                </td>
              </tr>
              <tr>
                <td class="tR">210분 경과</td>
                <td class="tR">3시간 30분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 2교시 시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다. 감독 ~~</span>
                </td>
              </tr>
              <tr>
                <td>쉬는 시간</td>
                <td class="tR">240분 경과</td>
                <td class="tR">4시간 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 3교시 시험 시작 10분 전입니다. 시험실 감독관께서는 답안지와 문제 ~~</span>
                </td>
              </tr>
              <tr>
                <td rowspan="2">3교시<br/>시험지 배포</td>
                <td class="tR">242분 경과</td>
                <td class="tR">4시간 2분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 시험실 감독관께서는 답안지를 응시생에게 배부하여 주시기 바랍니~~</span>
                </td>
              </tr>
              <tr>
                <td class="tR">246분 경과</td>
                <td class="tR">4시간 6분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 시험실 감독관께서는 문제지를 배부하여 주시기 바랍니다. ~~</span>
                </td>
              </tr>
              <tr>
                <td rowspan="3">3교시</td>
                <td class="tR">250분 경과</td>
                <td class="tR">4시간 10분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 그럼 지금부터 3교시 시험을 시작하겠습니다. ~~</span>
                </td>
              </tr>
              <tr>
                <td class="tR">330분 경과</td>
                <td class="tR">5시간 30분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 시험 종료까지 10분 남았습니다.</span>
                </td>
              </tr>
              <tr>
                <td class="tR">340분 경과</td>
                <td class="tR">5시간 40분 경과</td>
                <td><button class="btnS blueline">재생하기</button></td>
                <td class="tL">
                  <span class="fBlue">♬ 3교시 시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다. 감독 ~~</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //안내방송 순서 및 시간 -->
      </div>
      <!-- //page layout -->

    <!-- Popup -->
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MultiTestViewAnnounce',
  data() {
    return {
      alertTrigger: false,
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
