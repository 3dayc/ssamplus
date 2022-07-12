<template lang="html">
	<div>
		<div class="pageTit">
			<h2>GNB 설정</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/navigationGnb">GNB/SNB 관리</router-link><router-link to="/mkup/site/navigationGnb">GNB 설정</router-link><em>상세</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="navigationGnbViewExc"><!-- class 없어도 유지 -->
					<div class="subTit">
						<h3>카테고리</h3>
						<div class="right">
            	<router-link to="/mkup/site/navigationGnb" class="btnList">목록으로</router-link>
							<button class="btnM green ml10">저장</button>
						</div>
					</div>
					<div class="tvs">
						<table>
							<colgroup>
								<col width="160"/>
								<col width="*"/>
							</colgroup>
							<tbody>
								<tr>
									<th>PATH</th>
									<td>수강신청</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="subTit">
						<h3>2 DEPTH 메뉴 (1열)</h3>
					</div>
					<p class="infoMsg fRed mb10">※ 선생님 홈화면으로의 매칭은 LNB설정에서의 URL을 이용함</p>
					<div class="tls">
						<table>
							<colgroup>
								<col width="80">
								<col width="140">
								<col width="170">
                <col width="170">
								<col width="550">
								<col width="140">
								<col width="140">
							</colgroup>
							<thead>
								<tr>
									<th>순서</th>
									<th>노출여부</th>
                  <th>과목구문(1 DEPTH)</th>
									<th>과목 (2 DEPTH)</th>
									<th>선생님</th>
									<th>등록일</th>
									<th>순서 변경</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="snbTg1" checked>
											<label for="snbTg1">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
									</td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthOneOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
									<td class="tL">김현, 권구현, 윤중샘</td>
									<td>2021-05-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
                <tr class="gray">
                  <td>-</td>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="snbTg4" >
                      <label for="snbTg4">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                  </td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
									</td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthOneOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
									<td class="tL">배지윤, 이동건, 양재웅</td>
                  <td>2021-05-01</td>
                  <td>
                    <button class="btnPosArrow" disabled>위로</button>
                    <button class="btnPosArrow down" disabled>아래로</button>
                  </td>
                </tr>
								<tr>
									<td>2</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="snbTg2" checked>
											<label for="snbTg2">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
									</td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthOneOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
									<td class="tL">송헌/김준팀, 송헌, 김준, 박노송</td>
									<td>2021-05-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr class="red">
									<td>신규</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="snbTg9" >
											<label for="snbTg9">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
									</td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthOneOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
									<td colspan="3" class="tL"><button class="btnS">저장</button></td>
								</tr>
								<tr>
									<td colspan="7"><button class="btnM blueline wFull">+ 행 추가</button></td>
								</tr>
							</tbody>
						</table>
					</div>
          <div class="subTit">
            <h3>2 DEPTH 메뉴 (2열)</h3>
          </div>
          <div class="tls">
            <table>
              <colgroup>
                <col width="80">
                <col width="140">
                <col width="170">
                <col width="170">
                <col width="550">
                <col width="140">
                <col width="140">
              </colgroup>
              <thead>
                <tr>
                  <th>순서</th>
                  <th>노출여부</th>
                  <th>과목구문(1 DEPTH)</th>
                  <th>과목 (2 DEPTH)</th>
                  <th>선생님</th>
                  <th>등록일</th>
                  <th>순서 변경</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="snbTg5" checked>
                      <label for="snbTg5">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                  </td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthTwoOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
                  <td class="tL">김현, 권구현, 윤중샘</td>
                  <td>2021-05-01</td>
                  <td>
                    <button class="btnPosArrow">위로</button>
                    <button class="btnPosArrow down">아래로</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="snbTg6" checked>
                      <label for="snbTg6">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                  </td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthTwoOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
                  <td class="tL">배지윤, 이동건, 양재웅</td>
                  <td>2021-05-01</td>
                  <td>
                    <button class="btnPosArrow" disabled>위로</button>
                    <button class="btnPosArrow down" disabled>아래로</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="snbTg7" checked>
                      <label for="snbTg7">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                  </td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthTwoOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
                  <td class="tL">송헌/김준팀, 송헌, 김준, 박노송</td>
                  <td>2021-05-01</td>
                  <td>
                    <button class="btnPosArrow">위로</button>
                    <button class="btnPosArrow down">아래로</button>
                  </td>
                </tr>
                <tr class="gray">
                  <td>-</td>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="snbTg8" >
                      <label for="snbTg8">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                  </td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthTwoOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
									<td class="tL">차류쉘팀, 차미아, 류지원, 미쉘김</td>
									<td>2021-05-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
                </tr>
                <tr>
                  <td colspan="7"><button class="btnM blueline wFull">+ 행 추가</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="subTit">
            <h3>2 DEPTH 메뉴 (3열)</h3>
          </div>
          <div class="tls">
            <table>
              <colgroup>
                <col width="80">
                <col width="140">
                <col width="170">
                <col width="170">
                <col width="550">
                <col width="140">
                <col width="140">
              </colgroup>
              <thead>
                <tr>
                  <th>순서</th>
                  <th>노출여부</th>
                  <th>과목구문(1 DEPTH)</th>
                  <th>과목 (2 DEPTH)</th>
                  <th>선생님</th>
                  <th>등록일</th>
                  <th>순서 변경</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="snbTg9" checked>
                      <label for="snbTg9">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                  </td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthThreeOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
                  <td class="tL">이순권, 반철진</td>
                  <td>2021-05-01</td>
                  <td>
                    <button class="btnPosArrow">위로</button>
                    <button class="btnPosArrow down">아래로</button>
                  </td>
                </tr>
                <tr class="red">
                  <td>2</td>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="snbTg10" checked>
                      <label for="snbTg10">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                  </td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthThreeOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
                  <td class="tL">한무일</td>
                  <td>2021-05-01</td>
                  <td>
                    <button class="btnPosArrow" disabled>위로</button>
                    <button class="btnPosArrow down" disabled>아래로</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="snbTg11" checked>
                      <label for="snbTg11">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                  </td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthThreeOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
                  <td class="tL">최만영</td>
                  <td>2021-05-01</td>
                  <td>
                    <button class="btnPosArrow">위로</button>
                    <button class="btnPosArrow down">아래로</button>
                  </td>
                </tr>
                <tr class="gray">
                  <td>-</td>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="snbTg12" >
                      <label for="snbTg12">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                  </td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthThreeOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
									<td class="tL">안병천/권혁팀, 안병천, 권혁</td>
                  <td>2021-05-01</td>
                  <td>
                    <button class="btnPosArrow">위로</button>
                    <button class="btnPosArrow down">아래로</button>
                  </td>
                </tr>
                <tr>
                  <td colspan="7"><button class="btnM blueline wFull">+ 행 추가</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="subTit">
            <h3>2 DEPTH 메뉴 (4열)</h3>
          </div>
          <div class="tls">
            <table>
              <colgroup>
                <col width="80">
                <col width="140">
                <col width="170">
                <col width="170">
                <col width="550">
                <col width="140">
                <col width="140">
              </colgroup>
              <thead>
                <tr>
                  <th>순서</th>
                  <th>노출여부</th>
                  <th>과목구문(1 DEPTH)</th>
                  <th>과목 (2 DEPTH)</th>
                  <th>선생님</th>
                  <th>등록일</th>
                  <th>순서 변경</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="snbTg13" checked>
                      <label for="snbTg13">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                  </td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthFourOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
                  <td class="tL">임수진</td>
                  <td>2021-05-01</td>
                  <td>
                    <button class="btnPosArrow">위로</button>
                    <button class="btnPosArrow down">아래로</button>
                  </td>
                </tr>
                <tr class="red">
                  <td>2</td>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="snbTg14" checked>
                      <label for="snbTg14">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                  </td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthFourOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
                  <td class="tL">한경, 박해인</td>
                  <td>2021-05-01</td>
                  <td>
                    <button class="btnPosArrow" disabled>위로</button>
                    <button class="btnPosArrow down" disabled>아래로</button>
                  </td>
                </tr>
                <tr class="gray">
                  <td>-</td>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="snbTg15">
                      <label for="snbTg15">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                  </td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthFourOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
                  <td class="tL"></td>
                  <td>2021-05-01</td>
                  <td>
                    <button class="btnPosArrow">위로</button>
                    <button class="btnPosArrow down">아래로</button>
                  </td>
                </tr>
                <tr class="gray">
                  <td>-</td>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="snbTg16" >
                      <label for="snbTg16">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                  </td>
                  <td>
                    <multiselect 
                      class="xCase"
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      group-values="dep2" 
                      :close-on-select="true"
                      group-label="dep1" 
                      :group-select="false" 
                      placeholder="과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                  </td>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option v-for="option in depthFourOptions" v-bind:value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </span>
                  </td>
									<td class="tL"></td>
									<td>2021-05-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
                </tr>
                <tr>
                  <td colspan="7"><button class="btnM blueline wFull">+ 행 추가</button></td>
                </tr>
              </tbody>
            </table>
          </div>
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
  name: 'NavigationGnbViewExc',
	data() {
			return {
        multiValue2: null,
        optionsMulti2: [
          {
            dep1: '교육학',
            dep2: [
              { name: '교육학', category: 'subject01' },
            ]
          },
          {
            dep1: '논술·면접',
            dep2: [
              { name: '면접', category: 'subject02' },
              { name: '논술', category: 'subject02' },
            ]
          },
          {
            dep1: '유아',
            dep2: [
              { name: '유아', category: 'subject03' },
            ]
          },
          {
            dep1: '초등',
            dep2: [
              { name: '초등', category: 'subject04' },
            ]
          },
          {
            dep1: '중등',
            dep2: [
              { name: '국어', category: 'subject05' },
              { name: '영어', category: 'subject05' },
              { name: '수학교육론', category: 'subject05' },
            ]
          }
        ],
				depthOptions: [
					{ text: '교육학', value: '' },
					{ text: '유아', value: '' },
					{ text: '중등', value: '' },
					{ text: '사회/과학', value: '' },
					{ text: '비교과', value: '' },
					{ text: '특수', value: '' },
					{ text: '면접', value: '' },
					{ text: '한국사', value: '' },
					{ text: '사서직(공무원)', value: '' },
				],
        depthOneOptions: [
          { text: '없음', value: '' },
          { text: '유아', value: '' },
          { text: '교육학', value: '' },
          { text: '국어', value: '' },
          { text: '영어', value: '' },
          { text: '수학', value: '' },
          { text: '음악', value: '' },
          { text: '미술', value: '' },
          { text: '체육', value: '' },
        ],
        depthTwoOptions: [
          { text: '없음', value: '' },
          { text: '중국어', value: '' },
          { text: '일본어', value: '' },
          { text: '한문', value: '' },
          { text: '가정', value: '' },
          { text: '도덕윤리', value: '' },
          { text: '미용', value: '' },
        ],
        depthThreeOptions: [
          { text: '없음', value: '' },
          { text: '역사', value: '' },
          { text: '지리', value: '' },
          { text: '물리', value: '' },
          { text: '화확', value: '' },
          { text: '생물', value: '' },
          { text: '과학교과교육론', value: '' },
        ],
        depthFourOptions: [
          { text: '없음', value: '' },
          { text: '전문상담', value: '' },
          { text: '보건', value: '' },
          { text: '특수', value: '' },
          { text: '면접', value: '' },
          { text: '한국사', value: '' },
          { text: '사서직(공무원)', value: '' },
        ],
			}
	},
	methods: {
	},
	components: {
	},
}
</script>
