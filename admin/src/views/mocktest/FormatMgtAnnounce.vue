<template lang="html">
  <div>
    <!-- 안내방송 순서 및 시간 (유아/유초특) -->
    <div class="subTit">
      <h3>안내방송 순서 및 시간 (유아/유초특)</h3>
    </div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="200"/>
          <col width="180"/>
          <col width="180"/>
          <col width="110"/>
          <col width="50"/>
          <col width="*"/>
        </colgroup>
        <thead>
          <tr>
            <th>진행</th>
            <th colspan="2">유아/유초특</th>
            <th colspan="2">안내방송</th>
            <th>메모</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">유의사항</td>
            <td>입장 시</td>
            <td>입장 시</td>
            <td><button class="btnS line">불러오기</button></td>
            <td></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="안녕하세요 지금부터 희소모의고사 ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="10"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">10분 경과</td>
            <td><button class="btnS line">불러오기</button></td>
            <td class="tL"></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="필기구와 수험표를 제외한 ~~~1교시 시험 시작 10분전 입니다. ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td rowspan="2">1교시<br/>시험지 배포</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="12"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">12분 경과</td>
            <td><button class="btnS line">불러오기</button></td>
            <td class="tL"></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험실 감독관께서는 답안지를 응시생에게 배부하여 주시기 바랍니~~">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="16"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">16분 경과</td>
            <td><button class="btnS line">불러오기</button></td>
            <td class="tL"></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험실 감독관께서는 문제지를 배부하여 주시기 바랍니다. ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td rowspan="3">1교시</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="20"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">20분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="1교시 시험을 시작하겠습니다.">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="70"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">1시간 10분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험 종료까지 10분 남았습니다.">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="80"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">1시간 20분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="1교시 시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다. 감독~~">
              </span>
            </td>
          </tr>
          <tr>
            <td>쉬는 시간</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="110"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">1시간 50분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="2교시 시험 시작 10분 전입니다. 시험실 감독관께서는 답안지와 문를~~">
              </span>
            </td>
          </tr>
          <tr>
            <td rowspan="2">2교시<br/>시험지 배포</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="112"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">1시간 52분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험실 감독관께서는 답안지를 응시생에게 배부하여 주시기 바랍니~~">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="116"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">1시간 56분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험실 감독관께서는 문제지를 배부하여 주시기 바랍니다. ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td rowspan="3">2교시</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="120"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">2시간 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="그럼 지금부터 2교시 시험을 시작하겠습니다. ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="180"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">3시간 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험 종료까지 10분 남았습니다. ">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="190"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">3시간 10분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="2교시 시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다. 감독 ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td>쉬는 시간</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="220"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">3시간 40분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="3교시 시험 시작 10분 전입니다. 시험실 감독관께서는 답안지와 문제 ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td rowspan="2">3교시<br/>시험지 배포</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="222"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">3시간 42분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험실 감독관께서는 답안지를 응시생에게 배부하여 주시기 바랍니~~">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="226"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">3시간 46분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험실 감독관께서는 문제지를 배부하여 주시기 바랍니다. ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td rowspan="3">3교시</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="230"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">3시간 50분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="그럼 지금부터 3교시 시험을 시작하겠습니다. ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="290"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">4시간 50분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험 종료까지 10분 남았습니다. ">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="300"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">5시간 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="3교시 시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다. 감독 ~~">
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //안내방송 순서 및 시간 (유아/유초특) -->
    <!-- 안내방송 순서 및 시간 (중등/중특) -->
    <div class="subTit">
      <h3>안내방송 순서 및 시간 (중등/중특)</h3>
    </div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="200"/>
          <col width="180"/>
          <col width="180"/>
          <col width="110"/>
          <col width="50"/>
          <col width="*"/>
        </colgroup>
        <thead>
          <tr>
            <th>진행</th>
            <th colspan="2">중등/중특</th>
            <th colspan="2">안내방송</th>
            <th>메모</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">유의사항</td>
            <td>입장 시</td>
            <td>입장 시</td>
            <td><button class="btnS line">불러오기</button></td>
            <td></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="안녕하세요 지금부터 희소모의고사 ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="10"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">10분 경과</td>
            <td><button class="btnS line">불러오기</button></td>
            <td class="tL"></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="필기구와 수험표를 제외한 ~~~1교시 시험 시작 10분전 입니다. ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td rowspan="2">1교시<br/>시험지 배포</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="12"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">12분 경과</td>
            <td><button class="btnS line">불러오기</button></td>
            <td class="tL"></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험실 감독관께서는 답안지를 응시생에게 배부하여 주시기 바랍니~~">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="16"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">16분 경과</td>
            <td><button class="btnS line">불러오기</button></td>
            <td class="tL"></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험실 감독관께서는 문제지를 배부하여 주시기 바랍니다. ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td rowspan="3">1교시</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="20"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">20분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="1교시 시험을 시작하겠습니다.">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="70"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">1시간 10분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험 종료까지 10분 남았습니다.">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="80"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">1시간 20분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="1교시 시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다. 감독~~">
              </span>
            </td>
          </tr>
          <tr>
            <td>쉬는 시간</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="110"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">1시간 50분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="2교시 시험 시작 10분 전입니다. 시험실 감독관께서는 답안지와 문를~~">
              </span>
            </td>
          </tr>
          <tr>
            <td rowspan="2">2교시<br/>시험지 배포</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="112"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">1시간 52분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험실 감독관께서는 답안지를 응시생에게 배부하여 주시기 바랍니~~">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="116"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">1시간 56분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험실 감독관께서는 문제지를 배부하여 주시기 바랍니다. ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td rowspan="3">2교시</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="120"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">2시간 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="그럼 지금부터 2교시 시험을 시작하겠습니다. ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="200"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">3시간 20분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험 종료까지 10분 남았습니다. ">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="210"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">3시간 30분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="2교시 시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다. 감독 ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td>쉬는 시간</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="240"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">4시간 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="3교시 시험 시작 10분 전입니다. 시험실 감독관께서는 답안지와 문제 ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td rowspan="2">3교시<br/>시험지 배포</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="242"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">4시간 2분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험실 감독관께서는 답안지를 응시생에게 배부하여 주시기 바랍니~~">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="246"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">4시간 6분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험실 감독관께서는 문제지를 배부하여 주시기 바랍니다. ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td rowspan="3">3교시</td>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="250"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">4시간 10분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="그럼 지금부터 3교시 시험을 시작하겠습니다. ~~">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="330"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">5시간 30분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="시험 종료까지 10분 남았습니다. ">
              </span>
            </td>
          </tr>
          <tr>
            <td class="tR">
              <span class="unit w70 mr5">
                <input type="text" value="340"><em>분</em>
              </span> 경과
            </td>
            <td class="tR">5시간 40분 경과</td>
            <td><button class="btnS blueline">재생하기</button></td>
            <td class="tL"><button class="btnDelete">삭제</button></td>
            <td>
              <span class="annoMemo">
                <b>♬</b><input type="text" value="3교시 시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다. 감독 ~~">
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //안내방송 순서 및 시간 (중등/중특) -->
    <!-- 관리 -->
		<div class="subTit"><h3>관리</h3></div>
		<div class="tvs record">
			<table>
				<colgroup>
					<col width="160"/>
					<col width="*"/>
				</colgroup>
				<tbody>
					<tr>
						<th>수정 이력</th>
						<td>
							<ul class="recordList">
								<li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 수정</li>
								<li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 등록</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //관리 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'FormatMgtAnnounce',
	data() {
			return {
			}
	},
	methods: {
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
