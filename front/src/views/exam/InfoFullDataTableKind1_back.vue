<template >
  <div>
    <h4>
      <strong>중등</strong>의 최근 3개년 경쟁률 및 합격선
      <span class="dataKind">
        <span class="selectSet">
          <select name="" id="" @change="onChange($event)">
            <option value="type01">일반</option>
            <option value="type02">장애</option>
            <option value="type03">지역</option>
          </select>
        </span>
        <span class="selectSet">
          <select name="" id="" @change="onChange2($event)">
            <option value="year00" v-if="!this.mobile">최근 3년</option>
            <option value="year01">2021</option>
            <option value="year02">2020</option>
            <option value="year03">2019</option>
          </select>
        </span>
      </span>
    </h4>
    <div class="fullDataTable" v-if="type == 1">
      <table>
        <thead>
          <tr>
            <th></th>
            <th colspan="5" v-if="year == 0 || year == 1">2019학년도</th>
            <th colspan="5" v-if="year == 0 || year == 2">2020학년도</th>
            <th colspan="5" v-if="year == 0 || year == 3">2021학년도</th>
          </tr>
          <tr>
            <th>지역</th>
            <th v-if="year == 0 || year == 1">모집 인원</th>
            <th v-if="year == 0 || year == 1">지원 인원</th>
            <th v-if="year == 0 || year == 1">경쟁률</th>
            <th v-if="year == 0 || year == 1">1차 합격선</th>
            <th v-if="year == 0 || year == 1">2차 합격선</th>
            <th v-if="year == 0 || year == 2">모집 인원</th>
            <th v-if="year == 0 || year == 2">지원 인원</th>
            <th v-if="year == 0 || year == 2">경쟁률</th>
            <th v-if="year == 0 || year == 2">1차 합격선</th>
            <th v-if="year == 0 || year == 2">2차 합격선</th>
            <th v-if="year == 0 || year == 3">모집 인원</th>
            <th v-if="year == 0 || year == 3">지원 인원</th>
            <th v-if="year == 0 || year == 3">경쟁률</th>
            <th v-if="year == 0 || year == 3">1차 합격선</th>
            <th v-if="year == 0 || year == 3">2차 합격선</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>서울</td>
            <td v-if="year == 0 || year == 1">46</td>
            <td v-if="year == 0 || year == 1">1645</td>
            <td v-if="year == 0 || year == 1">35.76</td>
            <td v-if="year == 0 || year == 1">75.67</td>
            <td v-if="year == 0 || year == 1">154.24</td>
            <td v-if="year == 0 || year == 2">59</td>
            <td v-if="year == 0 || year == 2">1169</td>
            <td v-if="year == 0 || year == 2">19.81</td>
            <td v-if="year == 0 || year == 2">69</td>
            <td v-if="year == 0 || year == 2">157.43</td>
            <td v-if="year == 0 || year == 3">30</td>
            <td v-if="year == 0 || year == 3">645</td>
            <td v-if="year == 0 || year == 3">21.5</td>
            <td v-if="year == 0 || year == 3">71</td>
            <td v-if="year == 0 || year == 3">160.57</td>
          </tr>
          <tr>
            <td>경기</td>
            <td v-if="year == 0 || year == 1">46</td>
            <td v-if="year == 0 || year == 1">1200</td>
            <td v-if="year == 0 || year == 1">26.09</td>
            <td v-if="year == 0 || year == 1">73</td>
            <td v-if="year == 0 || year == 1">168.83</td>
            <td v-if="year == 0 || year == 2">101</td>
            <td v-if="year == 0 || year == 2">1762</td>
            <td v-if="year == 0 || year == 2">17.45</td>
            <td v-if="year == 0 || year == 2">67.67</td>
            <td v-if="year == 0 || year == 2">164.21</td>
            <td v-if="year == 0 || year == 3">120</td>
            <td v-if="year == 0 || year == 3">1761</td>
            <td v-if="year == 0 || year == 3">14.68</td>
            <td v-if="year == 0 || year == 3">74</td>
            <td v-if="year == 0 || year == 3">166.51</td>
          </tr>
          <tr>
            <td>강원</td>
            <td v-if="year == 0 || year == 1">6</td>
            <td v-if="year == 0 || year == 1">222</td>
            <td v-if="year == 0 || year == 1">37</td>
            <td v-if="year == 0 || year == 1">70.33</td>
            <td v-if="year == 0 || year == 1">159</td>
            <td v-if="year == 0 || year == 2">22</td>
            <td v-if="year == 0 || year == 2">411</td>
            <td v-if="year == 0 || year == 2">18.68</td>
            <td v-if="year == 0 || year == 2">67</td>
            <td v-if="year == 0 || year == 2">158.35</td>
            <td v-if="year == 0 || year == 3">12</td>
            <td v-if="year == 0 || year == 3">253</td>
            <td v-if="year == 0 || year == 3">21.08</td>
            <td v-if="year == 0 || year == 3">71.67</td>
            <td v-if="year == 0 || year == 3">167.43</td>
          </tr>
          <tr>
            <td>경남</td>
            <td v-if="year == 0 || year == 1">21</td>
            <td v-if="year == 0 || year == 1">601</td>
            <td v-if="year == 0 || year == 1">28.62</td>
            <td v-if="year == 0 || year == 1">70.67</td>
            <td v-if="year == 0 || year == 1">166.37</td>
            <td v-if="year == 0 || year == 2">17</td>
            <td v-if="year == 0 || year == 2">432</td>
            <td v-if="year == 0 || year == 2">25.41</td>
            <td v-if="year == 0 || year == 2">68.33</td>
            <td v-if="year == 0 || year == 2">166.01</td>
            <td v-if="year == 0 || year == 3">15</td>
            <td v-if="year == 0 || year == 3">301</td>
            <td v-if="year == 0 || year == 3">20.07</td>
            <td v-if="year == 0 || year == 3">69.67</td>
            <td v-if="year == 0 || year == 3">165.84</td>
          </tr>
          <tr>
            <td>경북</td>
            <td v-if="year == 0 || year == 1">5</td>
            <td v-if="year == 0 || year == 1">195</td>
            <td v-if="year == 0 || year == 1">39</td>
            <td v-if="year == 0 || year == 1">71</td>
            <td v-if="year == 0 || year == 1">163.97</td>
            <td v-if="year == 0 || year == 2">18</td>
            <td v-if="year == 0 || year == 2">430</td>
            <td v-if="year == 0 || year == 2">23.89</td>
            <td v-if="year == 0 || year == 2">68.33</td>
            <td v-if="year == 0 || year == 2">154.03</td>
            <td v-if="year == 0 || year == 3">27</td>
            <td v-if="year == 0 || year == 3">448</td>
            <td v-if="year == 0 || year == 3">16.59</td>
            <td v-if="year == 0 || year == 3">71.67</td>
            <td v-if="year == 0 || year == 3">169.03</td>
          </tr>
          <tr>
            <td>광주</td>
            <td v-if="year == 0 || year == 1">3</td>
            <td v-if="year == 0 || year == 1">98</td>
            <td v-if="year == 0 || year == 1">32.67</td>
            <td v-if="year == 0 || year == 1">72</td>
            <td v-if="year == 0 || year == 1">166.84</td>
            <td v-if="year == 0 || year == 2">2</td>
            <td v-if="year == 0 || year == 2">91</td>
            <td v-if="year == 0 || year == 2">45.5</td>
            <td v-if="year == 0 || year == 2">69.33</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 3">4</td>
            <td v-if="year == 0 || year == 3">91</td>
            <td v-if="year == 0 || year == 3">22.75</td>
            <td v-if="year == 0 || year == 3">70</td>
            <td v-if="year == 0 || year == 3">161.9</td>
          </tr>
          <tr>
            <td>대구</td>
            <td v-if="year == 0 || year == 1">4</td>
            <td v-if="year == 0 || year == 1">175</td>
            <td v-if="year == 0 || year == 1">43.75</td>
            <td v-if="year == 0 || year == 1">72</td>
            <td v-if="year == 0 || year == 1">162.02</td>
            <td v-if="year == 0 || year == 2">2</td>
            <td v-if="year == 0 || year == 2">72</td>
            <td v-if="year == 0 || year == 2">36</td>
            <td v-if="year == 0 || year == 2">71</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 3">1</td>
            <td v-if="year == 0 || year == 3">54</td>
            <td v-if="year == 0 || year == 3">54</td>
            <td v-if="year == 0 || year == 3">-</td>
            <td v-if="year == 0 || year == 3">-</td>
          </tr>
          <tr>
            <td>대전</td>
            <td v-if="year == 0 || year == 1">6</td>
            <td v-if="year == 0 || year == 1">198</td>
            <td v-if="year == 0 || year == 1">33</td>
            <td v-if="year == 0 || year == 1">72.66</td>
            <td v-if="year == 0 || year == 1">168.73</td>
            <td v-if="year == 0 || year == 2">2</td>
            <td v-if="year == 0 || year == 2">69</td>
            <td v-if="year == 0 || year == 2">34.5</td>
            <td v-if="year == 0 || year == 2">64.67</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 3">5</td>
            <td v-if="year == 0 || year == 3">145</td>
            <td v-if="year == 0 || year == 3">29</td>
            <td v-if="year == 0 || year == 3">71.67</td>
            <td v-if="year == 0 || year == 3">165.9</td>
          </tr>
          <tr>
            <td>부산</td>
            <td v-if="year == 0 || year == 1">17</td>
            <td v-if="year == 0 || year == 1">502</td>
            <td v-if="year == 0 || year == 1">29.53</td>
            <td v-if="year == 0 || year == 1">73.33</td>
            <td v-if="year == 0 || year == 1">165.34</td>
            <td v-if="year == 0 || year == 2">21</td>
            <td v-if="year == 0 || year == 2">414</td>
            <td v-if="year == 0 || year == 2">19.71</td>
            <td v-if="year == 0 || year == 2">66.33</td>
            <td v-if="year == 0 || year == 2">161.63</td>
            <td v-if="year == 0 || year == 3">24</td>
            <td v-if="year == 0 || year == 3">464</td>
            <td v-if="year == 0 || year == 3">19.33</td>
            <td v-if="year == 0 || year == 3">70.67</td>
            <td v-if="year == 0 || year == 3">164.24</td>
          </tr>
          <tr>
            <td>세종</td>
            <td v-if="year == 0 || year == 1">12</td>
            <td v-if="year == 0 || year == 1">240</td>
            <td v-if="year == 0 || year == 1">20</td>
            <td v-if="year == 0 || year == 1">72.34</td>
            <td v-if="year == 0 || year == 1">162.56</td>
            <td v-if="year == 0 || year == 2">8</td>
            <td v-if="year == 0 || year == 2">154</td>
            <td v-if="year == 0 || year == 2">19.25</td>
            <td v-if="year == 0 || year == 2">67.67</td>
            <td v-if="year == 0 || year == 2">156.54</td>
            <td v-if="year == 0 || year == 3">8</td>
            <td v-if="year == 0 || year == 3">130</td>
            <td v-if="year == 0 || year == 3">16.25</td>
            <td v-if="year == 0 || year == 3">72</td>
            <td v-if="year == 0 || year == 3">167.63</td>
          </tr>
          <tr>
            <td>울산</td>
            <td v-if="year == 0 || year == 1">4</td>
            <td v-if="year == 0 || year == 1">129</td>
            <td v-if="year == 0 || year == 1">32.25</td>
            <td v-if="year == 0 || year == 1">68.66</td>
            <td v-if="year == 0 || year == 1">163.77</td>
            <td v-if="year == 0 || year == 2">10</td>
            <td v-if="year == 0 || year == 2">235</td>
            <td v-if="year == 0 || year == 2">23.5</td>
            <td v-if="year == 0 || year == 2">68</td>
            <td v-if="year == 0 || year == 2">163.03</td>
            <td v-if="year == 0 || year == 3">14</td>
            <td v-if="year == 0 || year == 3">224</td>
            <td v-if="year == 0 || year == 3">16</td>
            <td v-if="year == 0 || year == 3">72.67</td>
            <td v-if="year == 0 || year == 3">169.14</td>
          </tr>
          <tr>
            <td>인천</td>
            <td v-if="year == 0 || year == 1">15</td>
            <td v-if="year == 0 || year == 1">375</td>
            <td v-if="year == 0 || year == 1">25</td>
            <td v-if="year == 0 || year == 1">73.67</td>
            <td v-if="year == 0 || year == 1">166.94</td>
            <td v-if="year == 0 || year == 2">8</td>
            <td v-if="year == 0 || year == 2">168</td>
            <td v-if="year == 0 || year == 2">21</td>
            <td v-if="year == 0 || year == 2">67.66</td>
            <td v-if="year == 0 || year == 2">160.89</td>
            <td v-if="year == 0 || year == 3">12</td>
            <td v-if="year == 0 || year == 3">224</td>
            <td v-if="year == 0 || year == 3">18.67</td>
            <td v-if="year == 0 || year == 3">73.67</td>
            <td v-if="year == 0 || year == 3">165.38</td>
          </tr>
          <tr>
            <td>전남</td>
            <td v-if="year == 0 || year == 1">30</td>
            <td v-if="year == 0 || year == 1">573</td>
            <td v-if="year == 0 || year == 1">19.1</td>
            <td v-if="year == 0 || year == 1">69.67</td>
            <td v-if="year == 0 || year == 1">162.18</td>
            <td v-if="year == 0 || year == 2">25</td>
            <td v-if="year == 0 || year == 2">433</td>
            <td v-if="year == 0 || year == 2">17.32</td>
            <td v-if="year == 0 || year == 2">65.34</td>
            <td v-if="year == 0 || year == 2">160.86</td>
            <td v-if="year == 0 || year == 3">27</td>
            <td v-if="year == 0 || year == 3">408</td>
            <td v-if="year == 0 || year == 3">15.11</td>
            <td v-if="year == 0 || year == 3">70.33</td>
            <td v-if="year == 0 || year == 3">165.58</td>
          </tr>
          <tr>
            <td>전북</td>
            <td v-if="year == 0 || year == 1">35</td>
            <td v-if="year == 0 || year == 1">686</td>
            <td v-if="year == 0 || year == 1">19.6</td>
            <td v-if="year == 0 || year == 1">69.67</td>
            <td v-if="year == 0 || year == 1">160.94</td>
            <td v-if="year == 0 || year == 2">20</td>
            <td v-if="year == 0 || year == 2">420</td>
            <td v-if="year == 0 || year == 2">21</td>
            <td v-if="year == 0 || year == 2">67.34</td>
            <td v-if="year == 0 || year == 2">162.3</td>
            <td v-if="year == 0 || year == 3">29</td>
            <td v-if="year == 0 || year == 3">448</td>
            <td v-if="year == 0 || year == 3">15.45</td>
            <td v-if="year == 0 || year == 3">69.67</td>
            <td v-if="year == 0 || year == 3">164.5</td>
          </tr>
          <tr>
            <td>제주</td>
            <td v-if="year == 0 || year == 1">10</td>
            <td v-if="year == 0 || year == 1">174</td>
            <td v-if="year == 0 || year == 1">17.4</td>
            <td v-if="year == 0 || year == 1">71.67</td>
            <td v-if="year == 0 || year == 1">164.2</td>
            <td v-if="year == 0 || year == 2">10</td>
            <td v-if="year == 0 || year == 2">148</td>
            <td v-if="year == 0 || year == 2">14.8</td>
            <td v-if="year == 0 || year == 2">66</td>
            <td v-if="year == 0 || year == 2">157.63</td>
            <td v-if="year == 0 || year == 3">11</td>
            <td v-if="year == 0 || year == 3">147</td>
            <td v-if="year == 0 || year == 3">13.36</td>
            <td v-if="year == 0 || year == 3">72.33</td>
            <td v-if="year == 0 || year == 3">166</td>
          </tr>
          <tr>
            <td>충남</td>
            <td v-if="year == 0 || year == 1">22</td>
            <td v-if="year == 0 || year == 1">532</td>
            <td v-if="year == 0 || year == 1">24.18</td>
            <td v-if="year == 0 || year == 1">72.33</td>
            <td v-if="year == 0 || year == 1">165.06</td>
            <td v-if="year == 0 || year == 2">28</td>
            <td v-if="year == 0 || year == 2">475</td>
            <td v-if="year == 0 || year == 2">16.96</td>
            <td v-if="year == 0 || year == 2">67.34</td>
            <td v-if="year == 0 || year == 2">159.78</td>
            <td v-if="year == 0 || year == 3">22</td>
            <td v-if="year == 0 || year == 3">354</td>
            <td v-if="year == 0 || year == 3">16.09</td>
            <td v-if="year == 0 || year == 3">71</td>
            <td v-if="year == 0 || year == 3">162.57</td>
          </tr>
          <tr>
            <td>충북</td>
            <td v-if="year == 0 || year == 1">5</td>
            <td v-if="year == 0 || year == 1">147</td>
            <td v-if="year == 0 || year == 1">29.4</td>
            <td v-if="year == 0 || year == 1">67.67</td>
            <td v-if="year == 0 || year == 1">161.32</td>
            <td v-if="year == 0 || year == 2">8</td>
            <td v-if="year == 0 || year == 2">91</td>
            <td v-if="year == 0 || year == 2">11.38</td>
            <td v-if="year == 0 || year == 2">67</td>
            <td v-if="year == 0 || year == 2">158.35</td>
            <td v-if="year == 0 || year == 3">10</td>
            <td v-if="year == 0 || year == 3">205</td>
            <td v-if="year == 0 || year == 3">20.5</td>
            <td v-if="year == 0 || year == 3">72.67</td>
            <td v-if="year == 0 || year == 3">165.27</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>계</td>
            <td v-if="year == 0 || year == 1">287</td>
            <td v-if="year == 0 || year == 1">7692</td>
            <td v-if="year == 0 || year == 1">26.8</td>
            <td v-if="year == 0 || year == 1">71.55</td>
            <td v-if="year == 0 || year == 1">163.67</td>
            <td v-if="year == 0 || year == 2">8</td>
            <td v-if="year == 0 || year == 2">91</td>
            <td v-if="year == 0 || year == 2">11.38</td>
            <td v-if="year == 0 || year == 2">67</td>
            <td v-if="year == 0 || year == 2">158.35</td>
            <td v-if="year == 0 || year == 3">371</td>
            <td v-if="year == 0 || year == 3">6302</td>
            <td v-if="year == 0 || year == 3">16.99</td>
            <td v-if="year == 0 || year == 3">71.54</td>
            <td v-if="year == 0 || year == 3">165.47</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="fullDataTable" v-if="type == 2">
      <table>
        <thead>
          <tr>
            <th></th>
            <th colspan="5" v-if="year == 0 || year == 1">2019학년도</th>
            <th colspan="5" v-if="year == 0 || year == 2">2020학년도</th>
            <th colspan="5" v-if="year == 0 || year == 3">2021학년도</th>
          </tr>
          <tr>
            <th>지역</th>
            <th v-if="year == 0 || year == 1">모집 인원</th>
            <th v-if="year == 0 || year == 1">지원 인원</th>
            <th v-if="year == 0 || year == 1">경쟁률</th>
            <th v-if="year == 0 || year == 1">1차 합격선</th>
            <th v-if="year == 0 || year == 1">2차 합격선</th>
            <th v-if="year == 0 || year == 2">모집 인원</th>
            <th v-if="year == 0 || year == 2">지원 인원</th>
            <th v-if="year == 0 || year == 2">경쟁률</th>
            <th v-if="year == 0 || year == 2">1차 합격선</th>
            <th v-if="year == 0 || year == 2">2차 합격선</th>
            <th v-if="year == 0 || year == 3">모집 인원</th>
            <th v-if="year == 0 || year == 3">지원 인원</th>
            <th v-if="year == 0 || year == 3">경쟁률</th>
            <th v-if="year == 0 || year == 3">1차 합격선</th>
            <th v-if="year == 0 || year == 3">2차 합격선</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>서울</td>
            <td v-if="year == 0 || year == 1">46</td>
            <td v-if="year == 0 || year == 1">1645</td>
            <td v-if="year == 0 || year == 1">-</td>
            <td v-if="year == 0 || year == 1">75.67</td>
            <td v-if="year == 0 || year == 1">154.24</td>
            <td v-if="year == 0 || year == 2">59</td>
            <td v-if="year == 0 || year == 2">1169</td>
            <td v-if="year == 0 || year == 2">19.81</td>
            <td v-if="year == 0 || year == 2">69</td>
            <td v-if="year == 0 || year == 2">157.43</td>
            <td v-if="year == 0 || year == 3">-</td>
            <td v-if="year == 0 || year == 3">645</td>
            <td v-if="year == 0 || year == 3">21.5</td>
            <td v-if="year == 0 || year == 3">-</td>
            <td v-if="year == 0 || year == 3">160.57</td>
          </tr>
          <tr>
            <td>경기</td>
            <td v-if="year == 0 || year == 1">46</td>
            <td v-if="year == 0 || year == 1">-</td>
            <td v-if="year == 0 || year == 1">26.09</td>
            <td v-if="year == 0 || year == 1">73</td>
            <td v-if="year == 0 || year == 1">168.83</td>
            <td v-if="year == 0 || year == 2">101</td>
            <td v-if="year == 0 || year == 2">1762</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 2">67.67</td>
            <td v-if="year == 0 || year == 2">164.21</td>
            <td v-if="year == 0 || year == 3">120</td>
            <td v-if="year == 0 || year == 3">-</td>
            <td v-if="year == 0 || year == 3">14.68</td>
            <td v-if="year == 0 || year == 3">74</td>
            <td v-if="year == 0 || year == 3">166.51</td>
          </tr>
          <tr>
            <td>강원</td>
            <td v-if="year == 0 || year == 1">6</td>
            <td v-if="year == 0 || year == 1">222</td>
            <td v-if="year == 0 || year == 1">37</td>
            <td v-if="year == 0 || year == 1">70.33</td>
            <td v-if="year == 0 || year == 1">-</td>
            <td v-if="year == 0 || year == 2">22</td>
            <td v-if="year == 0 || year == 2">411</td>
            <td v-if="year == 0 || year == 2">18.68</td>
            <td v-if="year == 0 || year == 2">67</td>
            <td v-if="year == 0 || year == 2">158.35</td>
            <td v-if="year == 0 || year == 3">-</td>
            <td v-if="year == 0 || year == 3">253</td>
            <td v-if="year == 0 || year == 3">21.08</td>
            <td v-if="year == 0 || year == 3">71.67</td>
            <td v-if="year == 0 || year == 3">167.43</td>
          </tr>
          <tr>
            <td>경남</td>
            <td v-if="year == 0 || year == 1">21</td>
            <td v-if="year == 0 || year == 1">601</td>
            <td v-if="year == 0 || year == 1">28.62</td>
            <td v-if="year == 0 || year == 1">70.67</td>
            <td v-if="year == 0 || year == 1">166.37</td>
            <td v-if="year == 0 || year == 2">17</td>
            <td v-if="year == 0 || year == 2">432</td>
            <td v-if="year == 0 || year == 2">25.41</td>
            <td v-if="year == 0 || year == 2">68.33</td>
            <td v-if="year == 0 || year == 2">166.01</td>
            <td v-if="year == 0 || year == 3">15</td>
            <td v-if="year == 0 || year == 3">301</td>
            <td v-if="year == 0 || year == 3">20.07</td>
            <td v-if="year == 0 || year == 3">69.67</td>
            <td v-if="year == 0 || year == 3">165.84</td>
          </tr>
          <tr>
            <td>경북</td>
            <td v-if="year == 0 || year == 1">5</td>
            <td v-if="year == 0 || year == 1">195</td>
            <td v-if="year == 0 || year == 1">39</td>
            <td v-if="year == 0 || year == 1">71</td>
            <td v-if="year == 0 || year == 1">163.97</td>
            <td v-if="year == 0 || year == 2">18</td>
            <td v-if="year == 0 || year == 2">430</td>
            <td v-if="year == 0 || year == 2">23.89</td>
            <td v-if="year == 0 || year == 2">68.33</td>
            <td v-if="year == 0 || year == 2">154.03</td>
            <td v-if="year == 0 || year == 3">27</td>
            <td v-if="year == 0 || year == 3">448</td>
            <td v-if="year == 0 || year == 3">16.59</td>
            <td v-if="year == 0 || year == 3">71.67</td>
            <td v-if="year == 0 || year == 3">169.03</td>
          </tr>
          <tr>
            <td>광주</td>
            <td v-if="year == 0 || year == 1">3</td>
            <td v-if="year == 0 || year == 1">98</td>
            <td v-if="year == 0 || year == 1">32.67</td>
            <td v-if="year == 0 || year == 1">72</td>
            <td v-if="year == 0 || year == 1">166.84</td>
            <td v-if="year == 0 || year == 2">2</td>
            <td v-if="year == 0 || year == 2">91</td>
            <td v-if="year == 0 || year == 2">45.5</td>
            <td v-if="year == 0 || year == 2">69.33</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 3">4</td>
            <td v-if="year == 0 || year == 3">91</td>
            <td v-if="year == 0 || year == 3">22.75</td>
            <td v-if="year == 0 || year == 3">70</td>
            <td v-if="year == 0 || year == 3">161.9</td>
          </tr>
          <tr>
            <td>대구</td>
            <td v-if="year == 0 || year == 1">4</td>
            <td v-if="year == 0 || year == 1">175</td>
            <td v-if="year == 0 || year == 1">43.75</td>
            <td v-if="year == 0 || year == 1">72</td>
            <td v-if="year == 0 || year == 1">162.02</td>
            <td v-if="year == 0 || year == 2">2</td>
            <td v-if="year == 0 || year == 2">72</td>
            <td v-if="year == 0 || year == 2">36</td>
            <td v-if="year == 0 || year == 2">71</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 3">1</td>
            <td v-if="year == 0 || year == 3">54</td>
            <td v-if="year == 0 || year == 3">54</td>
            <td v-if="year == 0 || year == 3">-</td>
            <td v-if="year == 0 || year == 3">-</td>
          </tr>
          <tr>
            <td>대전</td>
            <td v-if="year == 0 || year == 1">6</td>
            <td v-if="year == 0 || year == 1">198</td>
            <td v-if="year == 0 || year == 1">33</td>
            <td v-if="year == 0 || year == 1">72.66</td>
            <td v-if="year == 0 || year == 1">168.73</td>
            <td v-if="year == 0 || year == 2">2</td>
            <td v-if="year == 0 || year == 2">69</td>
            <td v-if="year == 0 || year == 2">34.5</td>
            <td v-if="year == 0 || year == 2">64.67</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 3">5</td>
            <td v-if="year == 0 || year == 3">145</td>
            <td v-if="year == 0 || year == 3">29</td>
            <td v-if="year == 0 || year == 3">71.67</td>
            <td v-if="year == 0 || year == 3">165.9</td>
          </tr>
          <tr>
            <td>부산</td>
            <td v-if="year == 0 || year == 1">17</td>
            <td v-if="year == 0 || year == 1">-</td>
            <td v-if="year == 0 || year == 1">29.53</td>
            <td v-if="year == 0 || year == 1">73.33</td>
            <td v-if="year == 0 || year == 1">165.34</td>
            <td v-if="year == 0 || year == 2">21</td>
            <td v-if="year == 0 || year == 2">414</td>
            <td v-if="year == 0 || year == 2">19.71</td>
            <td v-if="year == 0 || year == 2">66.33</td>
            <td v-if="year == 0 || year == 2">161.63</td>
            <td v-if="year == 0 || year == 3">24</td>
            <td v-if="year == 0 || year == 3">464</td>
            <td v-if="year == 0 || year == 3">19.33</td>
            <td v-if="year == 0 || year == 3">70.67</td>
            <td v-if="year == 0 || year == 3">164.24</td>
          </tr>
          <tr>
            <td>세종</td>
            <td v-if="year == 0 || year == 1">12</td>
            <td v-if="year == 0 || year == 1">240</td>
            <td v-if="year == 0 || year == 1">20</td>
            <td v-if="year == 0 || year == 1">72.34</td>
            <td v-if="year == 0 || year == 1">162.56</td>
            <td v-if="year == 0 || year == 2">8</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 2">19.25</td>
            <td v-if="year == 0 || year == 2">67.67</td>
            <td v-if="year == 0 || year == 2">156.54</td>
            <td v-if="year == 0 || year == 3">8</td>
            <td v-if="year == 0 || year == 3">130</td>
            <td v-if="year == 0 || year == 3">16.25</td>
            <td v-if="year == 0 || year == 3">72</td>
            <td v-if="year == 0 || year == 3">167.63</td>
          </tr>
          <tr>
            <td>울산</td>
            <td v-if="year == 0 || year == 1">4</td>
            <td v-if="year == 0 || year == 1">129</td>
            <td v-if="year == 0 || year == 1">32.25</td>
            <td v-if="year == 0 || year == 1">68.66</td>
            <td v-if="year == 0 || year == 1">163.77</td>
            <td v-if="year == 0 || year == 2">10</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 2">23.5</td>
            <td v-if="year == 0 || year == 2">68</td>
            <td v-if="year == 0 || year == 2">163.03</td>
            <td v-if="year == 0 || year == 3">14</td>
            <td v-if="year == 0 || year == 3">224</td>
            <td v-if="year == 0 || year == 3">16</td>
            <td v-if="year == 0 || year == 3">72.67</td>
            <td v-if="year == 0 || year == 3">169.14</td>
          </tr>
          <tr>
            <td>인천</td>
            <td v-if="year == 0 || year == 1">15</td>
            <td v-if="year == 0 || year == 1">-</td>
            <td v-if="year == 0 || year == 1">25</td>
            <td v-if="year == 0 || year == 1">73.67</td>
            <td v-if="year == 0 || year == 1">166.94</td>
            <td v-if="year == 0 || year == 2">8</td>
            <td v-if="year == 0 || year == 2">168</td>
            <td v-if="year == 0 || year == 2">21</td>
            <td v-if="year == 0 || year == 2">67.66</td>
            <td v-if="year == 0 || year == 2">160.89</td>
            <td v-if="year == 0 || year == 3">12</td>
            <td v-if="year == 0 || year == 3">224</td>
            <td v-if="year == 0 || year == 3">18.67</td>
            <td v-if="year == 0 || year == 3">73.67</td>
            <td v-if="year == 0 || year == 3">165.38</td>
          </tr>
          <tr>
            <td>전남</td>
            <td v-if="year == 0 || year == 1">30</td>
            <td v-if="year == 0 || year == 1">573</td>
            <td v-if="year == 0 || year == 1">19.1</td>
            <td v-if="year == 0 || year == 1">69.67</td>
            <td v-if="year == 0 || year == 1">162.18</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 2">433</td>
            <td v-if="year == 0 || year == 2">17.32</td>
            <td v-if="year == 0 || year == 2">65.34</td>
            <td v-if="year == 0 || year == 2">160.86</td>
            <td v-if="year == 0 || year == 3">27</td>
            <td v-if="year == 0 || year == 3">408</td>
            <td v-if="year == 0 || year == 3">15.11</td>
            <td v-if="year == 0 || year == 3">70.33</td>
            <td v-if="year == 0 || year == 3">165.58</td>
          </tr>
          <tr>
            <td>전북</td>
            <td v-if="year == 0 || year == 1">35</td>
            <td v-if="year == 0 || year == 1">686</td>
            <td v-if="year == 0 || year == 1">19.6</td>
            <td v-if="year == 0 || year == 1">69.67</td>
            <td v-if="year == 0 || year == 1">160.94</td>
            <td v-if="year == 0 || year == 2">20</td>
            <td v-if="year == 0 || year == 2">420</td>
            <td v-if="year == 0 || year == 2">21</td>
            <td v-if="year == 0 || year == 2">67.34</td>
            <td v-if="year == 0 || year == 2">162.3</td>
            <td v-if="year == 0 || year == 3">29</td>
            <td v-if="year == 0 || year == 3">448</td>
            <td v-if="year == 0 || year == 3">15.45</td>
            <td v-if="year == 0 || year == 3">69.67</td>
            <td v-if="year == 0 || year == 3">164.5</td>
          </tr>
          <tr>
            <td>제주</td>
            <td v-if="year == 0 || year == 1">10</td>
            <td v-if="year == 0 || year == 1">174</td>
            <td v-if="year == 0 || year == 1">17.4</td>
            <td v-if="year == 0 || year == 1">71.67</td>
            <td v-if="year == 0 || year == 1">164.2</td>
            <td v-if="year == 0 || year == 2">10</td>
            <td v-if="year == 0 || year == 2">148</td>
            <td v-if="year == 0 || year == 2">14.8</td>
            <td v-if="year == 0 || year == 2">66</td>
            <td v-if="year == 0 || year == 2">157.63</td>
            <td v-if="year == 0 || year == 3">11</td>
            <td v-if="year == 0 || year == 3">147</td>
            <td v-if="year == 0 || year == 3">13.36</td>
            <td v-if="year == 0 || year == 3">72.33</td>
            <td v-if="year == 0 || year == 3">166</td>
          </tr>
          <tr>
            <td>충남</td>
            <td v-if="year == 0 || year == 1">22</td>
            <td v-if="year == 0 || year == 1">532</td>
            <td v-if="year == 0 || year == 1">24.18</td>
            <td v-if="year == 0 || year == 1">72.33</td>
            <td v-if="year == 0 || year == 1">165.06</td>
            <td v-if="year == 0 || year == 2">28</td>
            <td v-if="year == 0 || year == 2">475</td>
            <td v-if="year == 0 || year == 2">16.96</td>
            <td v-if="year == 0 || year == 2">67.34</td>
            <td v-if="year == 0 || year == 2">159.78</td>
            <td v-if="year == 0 || year == 3">22</td>
            <td v-if="year == 0 || year == 3">354</td>
            <td v-if="year == 0 || year == 3">16.09</td>
            <td v-if="year == 0 || year == 3">71</td>
            <td v-if="year == 0 || year == 3">162.57</td>
          </tr>
          <tr>
            <td>충북</td>
            <td v-if="year == 0 || year == 1">5</td>
            <td v-if="year == 0 || year == 1">147</td>
            <td v-if="year == 0 || year == 1">29.4</td>
            <td v-if="year == 0 || year == 1">67.67</td>
            <td v-if="year == 0 || year == 1">161.32</td>
            <td v-if="year == 0 || year == 2">8</td>
            <td v-if="year == 0 || year == 2">91</td>
            <td v-if="year == 0 || year == 2">11.38</td>
            <td v-if="year == 0 || year == 2">67</td>
            <td v-if="year == 0 || year == 2">158.35</td>
            <td v-if="year == 0 || year == 3">10</td>
            <td v-if="year == 0 || year == 3">205</td>
            <td v-if="year == 0 || year == 3">20.5</td>
            <td v-if="year == 0 || year == 3">72.67</td>
            <td v-if="year == 0 || year == 3">165.27</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>계</td>
            <td v-if="year == 0 || year == 1">287</td>
            <td v-if="year == 0 || year == 1">7692</td>
            <td v-if="year == 0 || year == 1">26.8</td>
            <td v-if="year == 0 || year == 1">71.55</td>
            <td v-if="year == 0 || year == 1">163.67</td>
            <td v-if="year == 0 || year == 2">8</td>
            <td v-if="year == 0 || year == 2">91</td>
            <td v-if="year == 0 || year == 2">11.38</td>
            <td v-if="year == 0 || year == 2">67</td>
            <td v-if="year == 0 || year == 2">158.35</td>
            <td v-if="year == 0 || year == 3">371</td>
            <td v-if="year == 0 || year == 3">6302</td>
            <td v-if="year == 0 || year == 3">16.99</td>
            <td v-if="year == 0 || year == 3">71.54</td>
            <td v-if="year == 0 || year == 3">165.47</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="fullDataTable" v-if="type == 3">
      <table>
        <thead>
          <tr>
            <th></th>
            <th colspan="5" v-if="year == 0 || year == 1">2019학년도</th>
            <th colspan="5" v-if="year == 0 || year == 2">2020학년도</th>
            <th colspan="5" v-if="year == 0 || year == 3">2021학년도</th>
          </tr>
          <tr>
            <th>지역</th>
            <th v-if="year == 0 || year == 1">모집 인원</th>
            <th v-if="year == 0 || year == 1">지원 인원</th>
            <th v-if="year == 0 || year == 1">경쟁률</th>
            <th v-if="year == 0 || year == 1">1차 합격선</th>
            <th v-if="year == 0 || year == 1">2차 합격선</th>
            <th v-if="year == 0 || year == 2">모집 인원</th>
            <th v-if="year == 0 || year == 2">지원 인원</th>
            <th v-if="year == 0 || year == 2">경쟁률</th>
            <th v-if="year == 0 || year == 2">1차 합격선</th>
            <th v-if="year == 0 || year == 2">2차 합격선</th>
            <th v-if="year == 0 || year == 3">모집 인원</th>
            <th v-if="year == 0 || year == 3">지원 인원</th>
            <th v-if="year == 0 || year == 3">경쟁률</th>
            <th v-if="year == 0 || year == 3">1차 합격선</th>
            <th v-if="year == 0 || year == 3">2차 합격선</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>서울</td>
            <td v-if="year == 0 || year == 1">46</td>
            <td v-if="year == 0 || year == 1">1645</td>
            <td v-if="year == 0 || year == 1">35.76</td>
            <td v-if="year == 0 || year == 1">75.67</td>
            <td v-if="year == 0 || year == 1">154.24</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 2">1169</td>
            <td v-if="year == 0 || year == 2">19.81</td>
            <td v-if="year == 0 || year == 2">69</td>
            <td v-if="year == 0 || year == 2">157.43</td>
            <td v-if="year == 0 || year == 3">30</td>
            <td v-if="year == 0 || year == 3">645</td>
            <td v-if="year == 0 || year == 3">21.5</td>
            <td v-if="year == 0 || year == 3">71</td>
            <td v-if="year == 0 || year == 3">160.57</td>
          </tr>
          <tr>
            <td>경기</td>
            <td v-if="year == 0 || year == 1">46</td>
            <td v-if="year == 0 || year == 1">1200</td>
            <td v-if="year == 0 || year == 1">26.09</td>
            <td v-if="year == 0 || year == 1">73</td>
            <td v-if="year == 0 || year == 1">168.83</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 2">1762</td>
            <td v-if="year == 0 || year == 2">17.45</td>
            <td v-if="year == 0 || year == 2">67.67</td>
            <td v-if="year == 0 || year == 2">164.21</td>
            <td v-if="year == 0 || year == 3">120</td>
            <td v-if="year == 0 || year == 3">1761</td>
            <td v-if="year == 0 || year == 3">14.68</td>
            <td v-if="year == 0 || year == 3">-</td>
            <td v-if="year == 0 || year == 3">166.51</td>
          </tr>
          <tr>
            <td>강원</td>
            <td v-if="year == 0 || year == 1">6</td>
            <td v-if="year == 0 || year == 1">222</td>
            <td v-if="year == 0 || year == 1">37</td>
            <td v-if="year == 0 || year == 1">70.33</td>
            <td v-if="year == 0 || year == 1">159</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 2">411</td>
            <td v-if="year == 0 || year == 2">18.68</td>
            <td v-if="year == 0 || year == 2">67</td>
            <td v-if="year == 0 || year == 2">158.35</td>
            <td v-if="year == 0 || year == 3">-</td>
            <td v-if="year == 0 || year == 3">253</td>
            <td v-if="year == 0 || year == 3">21.08</td>
            <td v-if="year == 0 || year == 3">71.67</td>
            <td v-if="year == 0 || year == 3">167.43</td>
          </tr>
          <tr>
            <td>경남</td>
            <td v-if="year == 0 || year == 1">21</td>
            <td v-if="year == 0 || year == 1">601</td>
            <td v-if="year == 0 || year == 1">28.62</td>
            <td v-if="year == 0 || year == 1">70.67</td>
            <td v-if="year == 0 || year == 1">166.37</td>
            <td v-if="year == 0 || year == 2">17</td>
            <td v-if="year == 0 || year == 2">432</td>
            <td v-if="year == 0 || year == 2">25.41</td>
            <td v-if="year == 0 || year == 2">68.33</td>
            <td v-if="year == 0 || year == 2">166.01</td>
            <td v-if="year == 0 || year == 3">-</td>
            <td v-if="year == 0 || year == 3">301</td>
            <td v-if="year == 0 || year == 3">20.07</td>
            <td v-if="year == 0 || year == 3">69.67</td>
            <td v-if="year == 0 || year == 3">165.84</td>
          </tr>
          <tr>
            <td>경북</td>
            <td v-if="year == 0 || year == 1">5</td>
            <td v-if="year == 0 || year == 1">195</td>
            <td v-if="year == 0 || year == 1">39</td>
            <td v-if="year == 0 || year == 1">71</td>
            <td v-if="year == 0 || year == 1">163.97</td>
            <td v-if="year == 0 || year == 2">18</td>
            <td v-if="year == 0 || year == 2">430</td>
            <td v-if="year == 0 || year == 2">23.89</td>
            <td v-if="year == 0 || year == 2">68.33</td>
            <td v-if="year == 0 || year == 2">154.03</td>
            <td v-if="year == 0 || year == 3">27</td>
            <td v-if="year == 0 || year == 3">448</td>
            <td v-if="year == 0 || year == 3">16.59</td>
            <td v-if="year == 0 || year == 3">71.67</td>
            <td v-if="year == 0 || year == 3">169.03</td>
          </tr>
          <tr>
            <td>광주</td>
            <td v-if="year == 0 || year == 1">3</td>
            <td v-if="year == 0 || year == 1">98</td>
            <td v-if="year == 0 || year == 1">32.67</td>
            <td v-if="year == 0 || year == 1">72</td>
            <td v-if="year == 0 || year == 1">166.84</td>
            <td v-if="year == 0 || year == 2">2</td>
            <td v-if="year == 0 || year == 2">91</td>
            <td v-if="year == 0 || year == 2">45.5</td>
            <td v-if="year == 0 || year == 2">69.33</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 3">4</td>
            <td v-if="year == 0 || year == 3">91</td>
            <td v-if="year == 0 || year == 3">22.75</td>
            <td v-if="year == 0 || year == 3">70</td>
            <td v-if="year == 0 || year == 3">161.9</td>
          </tr>
          <tr>
            <td>대구</td>
            <td v-if="year == 0 || year == 1">4</td>
            <td v-if="year == 0 || year == 1">175</td>
            <td v-if="year == 0 || year == 1">43.75</td>
            <td v-if="year == 0 || year == 1">72</td>
            <td v-if="year == 0 || year == 1">162.02</td>
            <td v-if="year == 0 || year == 2">2</td>
            <td v-if="year == 0 || year == 2">72</td>
            <td v-if="year == 0 || year == 2">36</td>
            <td v-if="year == 0 || year == 2">71</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 3">1</td>
            <td v-if="year == 0 || year == 3">54</td>
            <td v-if="year == 0 || year == 3">54</td>
            <td v-if="year == 0 || year == 3">-</td>
            <td v-if="year == 0 || year == 3">-</td>
          </tr>
          <tr>
            <td>대전</td>
            <td v-if="year == 0 || year == 1">6</td>
            <td v-if="year == 0 || year == 1">198</td>
            <td v-if="year == 0 || year == 1">33</td>
            <td v-if="year == 0 || year == 1">72.66</td>
            <td v-if="year == 0 || year == 1">168.73</td>
            <td v-if="year == 0 || year == 2">2</td>
            <td v-if="year == 0 || year == 2">69</td>
            <td v-if="year == 0 || year == 2">34.5</td>
            <td v-if="year == 0 || year == 2">64.67</td>
            <td v-if="year == 0 || year == 2">-</td>
            <td v-if="year == 0 || year == 3">5</td>
            <td v-if="year == 0 || year == 3">145</td>
            <td v-if="year == 0 || year == 3">29</td>
            <td v-if="year == 0 || year == 3">71.67</td>
            <td v-if="year == 0 || year == 3">165.9</td>
          </tr>
          <tr>
            <td>부산</td>
            <td v-if="year == 0 || year == 1">17</td>
            <td v-if="year == 0 || year == 1">502</td>
            <td v-if="year == 0 || year == 1">29.53</td>
            <td v-if="year == 0 || year == 1">73.33</td>
            <td v-if="year == 0 || year == 1">165.34</td>
            <td v-if="year == 0 || year == 2">21</td>
            <td v-if="year == 0 || year == 2">414</td>
            <td v-if="year == 0 || year == 2">19.71</td>
            <td v-if="year == 0 || year == 2">66.33</td>
            <td v-if="year == 0 || year == 2">161.63</td>
            <td v-if="year == 0 || year == 3">24</td>
            <td v-if="year == 0 || year == 3">464</td>
            <td v-if="year == 0 || year == 3">19.33</td>
            <td v-if="year == 0 || year == 3">70.67</td>
            <td v-if="year == 0 || year == 3">164.24</td>
          </tr>
          <tr>
            <td>세종</td>
            <td v-if="year == 0 || year == 1">12</td>
            <td v-if="year == 0 || year == 1">240</td>
            <td v-if="year == 0 || year == 1">20</td>
            <td v-if="year == 0 || year == 1">72.34</td>
            <td v-if="year == 0 || year == 1">162.56</td>
            <td v-if="year == 0 || year == 2">8</td>
            <td v-if="year == 0 || year == 2">154</td>
            <td v-if="year == 0 || year == 2">19.25</td>
            <td v-if="year == 0 || year == 2">67.67</td>
            <td v-if="year == 0 || year == 2">156.54</td>
            <td v-if="year == 0 || year == 3">8</td>
            <td v-if="year == 0 || year == 3">130</td>
            <td v-if="year == 0 || year == 3">16.25</td>
            <td v-if="year == 0 || year == 3">72</td>
            <td v-if="year == 0 || year == 3">167.63</td>
          </tr>
          <tr>
            <td>울산</td>
            <td v-if="year == 0 || year == 1">4</td>
            <td v-if="year == 0 || year == 1">129</td>
            <td v-if="year == 0 || year == 1">32.25</td>
            <td v-if="year == 0 || year == 1">68.66</td>
            <td v-if="year == 0 || year == 1">163.77</td>
            <td v-if="year == 0 || year == 2">10</td>
            <td v-if="year == 0 || year == 2">235</td>
            <td v-if="year == 0 || year == 2">23.5</td>
            <td v-if="year == 0 || year == 2">68</td>
            <td v-if="year == 0 || year == 2">163.03</td>
            <td v-if="year == 0 || year == 3">14</td>
            <td v-if="year == 0 || year == 3">224</td>
            <td v-if="year == 0 || year == 3">16</td>
            <td v-if="year == 0 || year == 3">72.67</td>
            <td v-if="year == 0 || year == 3">169.14</td>
          </tr>
          <tr>
            <td>인천</td>
            <td v-if="year == 0 || year == 1">15</td>
            <td v-if="year == 0 || year == 1">375</td>
            <td v-if="year == 0 || year == 1">25</td>
            <td v-if="year == 0 || year == 1">73.67</td>
            <td v-if="year == 0 || year == 1">166.94</td>
            <td v-if="year == 0 || year == 2">8</td>
            <td v-if="year == 0 || year == 2">168</td>
            <td v-if="year == 0 || year == 2">21</td>
            <td v-if="year == 0 || year == 2">67.66</td>
            <td v-if="year == 0 || year == 2">160.89</td>
            <td v-if="year == 0 || year == 3">12</td>
            <td v-if="year == 0 || year == 3">224</td>
            <td v-if="year == 0 || year == 3">18.67</td>
            <td v-if="year == 0 || year == 3">73.67</td>
            <td v-if="year == 0 || year == 3">165.38</td>
          </tr>
          <tr>
            <td>전남</td>
            <td v-if="year == 0 || year == 1">30</td>
            <td v-if="year == 0 || year == 1">573</td>
            <td v-if="year == 0 || year == 1">19.1</td>
            <td v-if="year == 0 || year == 1">69.67</td>
            <td v-if="year == 0 || year == 1">162.18</td>
            <td v-if="year == 0 || year == 2">25</td>
            <td v-if="year == 0 || year == 2">433</td>
            <td v-if="year == 0 || year == 2">17.32</td>
            <td v-if="year == 0 || year == 2">65.34</td>
            <td v-if="year == 0 || year == 2">160.86</td>
            <td v-if="year == 0 || year == 3">27</td>
            <td v-if="year == 0 || year == 3">408</td>
            <td v-if="year == 0 || year == 3">15.11</td>
            <td v-if="year == 0 || year == 3">70.33</td>
            <td v-if="year == 0 || year == 3">165.58</td>
          </tr>
          <tr>
            <td>전북</td>
            <td v-if="year == 0 || year == 1">35</td>
            <td v-if="year == 0 || year == 1">686</td>
            <td v-if="year == 0 || year == 1">19.6</td>
            <td v-if="year == 0 || year == 1">69.67</td>
            <td v-if="year == 0 || year == 1">160.94</td>
            <td v-if="year == 0 || year == 2">20</td>
            <td v-if="year == 0 || year == 2">420</td>
            <td v-if="year == 0 || year == 2">21</td>
            <td v-if="year == 0 || year == 2">67.34</td>
            <td v-if="year == 0 || year == 2">162.3</td>
            <td v-if="year == 0 || year == 3">29</td>
            <td v-if="year == 0 || year == 3">448</td>
            <td v-if="year == 0 || year == 3">15.45</td>
            <td v-if="year == 0 || year == 3">69.67</td>
            <td v-if="year == 0 || year == 3">164.5</td>
          </tr>
          <tr>
            <td>제주</td>
            <td v-if="year == 0 || year == 1">10</td>
            <td v-if="year == 0 || year == 1">174</td>
            <td v-if="year == 0 || year == 1">17.4</td>
            <td v-if="year == 0 || year == 1">71.67</td>
            <td v-if="year == 0 || year == 1">164.2</td>
            <td v-if="year == 0 || year == 2">10</td>
            <td v-if="year == 0 || year == 2">148</td>
            <td v-if="year == 0 || year == 2">14.8</td>
            <td v-if="year == 0 || year == 2">66</td>
            <td v-if="year == 0 || year == 2">157.63</td>
            <td v-if="year == 0 || year == 3">11</td>
            <td v-if="year == 0 || year == 3">147</td>
            <td v-if="year == 0 || year == 3">13.36</td>
            <td v-if="year == 0 || year == 3">72.33</td>
            <td v-if="year == 0 || year == 3">166</td>
          </tr>
          <tr>
            <td>충남</td>
            <td v-if="year == 0 || year == 1">22</td>
            <td v-if="year == 0 || year == 1">532</td>
            <td v-if="year == 0 || year == 1">24.18</td>
            <td v-if="year == 0 || year == 1">72.33</td>
            <td v-if="year == 0 || year == 1">165.06</td>
            <td v-if="year == 0 || year == 2">28</td>
            <td v-if="year == 0 || year == 2">475</td>
            <td v-if="year == 0 || year == 2">16.96</td>
            <td v-if="year == 0 || year == 2">67.34</td>
            <td v-if="year == 0 || year == 2">159.78</td>
            <td v-if="year == 0 || year == 3">22</td>
            <td v-if="year == 0 || year == 3">354</td>
            <td v-if="year == 0 || year == 3">16.09</td>
            <td v-if="year == 0 || year == 3">71</td>
            <td v-if="year == 0 || year == 3">162.57</td>
          </tr>
          <tr>
            <td>충북</td>
            <td v-if="year == 0 || year == 1">5</td>
            <td v-if="year == 0 || year == 1">147</td>
            <td v-if="year == 0 || year == 1">29.4</td>
            <td v-if="year == 0 || year == 1">67.67</td>
            <td v-if="year == 0 || year == 1">161.32</td>
            <td v-if="year == 0 || year == 2">8</td>
            <td v-if="year == 0 || year == 2">91</td>
            <td v-if="year == 0 || year == 2">11.38</td>
            <td v-if="year == 0 || year == 2">67</td>
            <td v-if="year == 0 || year == 2">158.35</td>
            <td v-if="year == 0 || year == 3">10</td>
            <td v-if="year == 0 || year == 3">205</td>
            <td v-if="year == 0 || year == 3">20.5</td>
            <td v-if="year == 0 || year == 3">72.67</td>
            <td v-if="year == 0 || year == 3">165.27</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>계</td>
            <td v-if="year == 0 || year == 1">287</td>
            <td v-if="year == 0 || year == 1">7692</td>
            <td v-if="year == 0 || year == 1">26.8</td>
            <td v-if="year == 0 || year == 1">71.55</td>
            <td v-if="year == 0 || year == 1">163.67</td>
            <td v-if="year == 0 || year == 2">8</td>
            <td v-if="year == 0 || year == 2">91</td>
            <td v-if="year == 0 || year == 2">11.38</td>
            <td v-if="year == 0 || year == 2">67</td>
            <td v-if="year == 0 || year == 2">158.35</td>
            <td v-if="year == 0 || year == 3">371</td>
            <td v-if="year == 0 || year == 3">6302</td>
            <td v-if="year == 0 || year == 3">16.99</td>
            <td v-if="year == 0 || year == 3">71.54</td>
            <td v-if="year == 0 || year == 3">165.47</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'InfoFullDataTableKind0',
  data() {
    return {
      type:1,
      year:0,
    }
  },
  methods: {
    listLoad () {
      if (!this.mobile) {
        this.year = 0;
      }else {
        this.year = 1;
      }
    },
    onChange(event) {
      let value = event.target.value;
      if (value == 'type01') this.type = 1;
      else if (value == 'type02') this.type = 2;
      else if (value == 'type03') this.type = 3;
    },
    onChange2(event) {
      let value = event.target.value;
      if (value == 'year01') this.year = 1;
      else if (value == 'year02') this.year = 2;
      else if (value == 'year03') this.year = 3;
    },
  },
  components: {
  },
  mounted() {
    this.listLoad();
  }
};
</script>
