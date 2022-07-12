<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
          <div class="paymentLockerWrite">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>사물함 신청</h3>
            <div class="summeryTxt">사물함은 직강 수강신청이력이 있는 월에 신청이 가능하며 <strong>오늘(혹은 신청한 월의 1일)로부터 말일까지</strong>의 월 단위로 신청합니다.</div>
          </div>
          <!-- //서브 타이틀 -->
          <div class="lockerDate">
            <span class="selectSet selectDirect">
              <select name="" id="" @change="onChange($event)">
                <option value="no" class="label">학원 선택</option>
                <option value="date01">이데아</option>
                <option value="date02">아이비</option>
              </select>
            </span>
            <span class="selectSet selectLocation">
              <select name="" id="">
                <option value="no" class="label">사물함 위치 선택</option>
                <option value="">4층 A구역</option>
                <option value="">4층 B구역</option>
                <option value="">5층 A구역</option>
                <option value="">5층 B구역</option>
                <option value="">5층 C구역</option>
                <option value="">6층 A구역</option>
                <option value="">6층 B구역</option>
                <option value="">11층 A구역</option>
                <option value="">11층 B구역</option>
              </select>
            </span>
            <span class="selectDate">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">신청 시작일 선택</option>
                  <option value="">2021년 6월</option>
                  <option value="">2021년 7월</option>
                  <option value="">2021년 8월</option>
                  <option value="">2021년 9월</option>
                  <option value="">2021년 10월</option>
                  <option value="">2021년 11월</option>
                  <option value="">2021년 12월</option>
                  <option value="">2022년 1월</option>
                  <option value="">2022년 2월</option>
                  <option value="">2022년 3월</option>
                  <option value="">2022년 4월</option>
                  <option value="">2022년 5월</option>
                  <option value="">2022년 6월</option>
                </select>
              </span>
              <!-- <em>~</em> -->
              <span class="selectSet">
                <select name="" id="" @change="onChange($event)">
                  <option value="no" class="label">신청 종료일 선택</option>
                  <option value="date01">2021년 6월</option>
                  <option value="date01">2021년 7월</option>
                  <option value="date01">2021년 8월</option>
                  <option value="date01">2021년 9월</option>
                  <option value="date01">2021년 10월</option>
                  <option value="date01">2021년 11월</option>
                  <option value="date01">2021년 12월</option>
                  <option value="date01">2022년 1월</option>
                  <option value="date01">2022년 2월</option>
                  <option value="date01">2022년 3월</option>
                  <option value="date01">2022년 4월</option>
                  <option value="date01">2022년 5월</option>
                  <option value="date01">2022년 6월</option>
                </select>
              </span>
              <strong v-if="dateType == 1">(2021-04-19 ~  2021-04-30)</strong>
              <strong v-if="dateType == 2">(2021-04-19 ~  2021-04-30)</strong>
            </span>
          </div>
          <div class="lockerChoice" v-if="dateType == 0">
            <div class="noChoice"><p>학원, 사물함 위치 그리고 신청 기간을 선택해주세요.</p></div>
          </div>
          <span class="hrLine"></span>
          <div class="lockerChoice" v-if="dateType == 1">
            <div class="gridSet">
              <div class="gridItem number">
                <h4>사물함 번호 선택해 주세요.</h4>
                <div class="lockerList">
                  <div>
                    <ul>
                      <li>
                        <span @click="alertTrigger = true"><input type="radio" name="lockerN" id="lockerN151" disabled /><label for="lockerN151">151</label></span>
                        <span @click="alertTrigger = true"><input type="radio" name="lockerN" id="lockerN152" disabled /><label for="lockerN152">152</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN153" /><label for="lockerN153">153</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN154" /><label for="lockerN154">154</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN155" /><label for="lockerN155">155</label></span>
                        <span @click="alertTrigger = true"><input type="radio" name="lockerN" id="lockerN156" disabled /><label for="lockerN156">156</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN157" /><label for="lockerN157">157</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN158" /><label for="lockerN158">158</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN159" /><label for="lockerN159">159</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN160" /><label for="lockerN160">160</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN161" /><label for="lockerN161">161</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN162" /><label for="lockerN162">162</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN163" /><label for="lockerN163">163</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN164" /><label for="lockerN164">164</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN165" /><label for="lockerN165">165</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN166" /><label for="lockerN166">166</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN167" /><label for="lockerN167">167</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN168" /><label for="lockerN168">168</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN169" /><label for="lockerN169">169</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN170" /><label for="lockerN170">170</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN171" /><label for="lockerN171">171</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN172" /><label for="lockerN172">172</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN173" /><label for="lockerN173">173</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN174" /><label for="lockerN174">174</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN175" /><label for="lockerN175">175</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN176" /><label for="lockerN176">176</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN177" /><label for="lockerN177">177</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN178" /><label for="lockerN178">178</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN179" /><label for="lockerN179">179</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN180" /><label for="lockerN180">180</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN181" /><label for="lockerN181">181</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN182" /><label for="lockerN182">182</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN183" /><label for="lockerN183">183</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN184" /><label for="lockerN184">184</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN185" /><label for="lockerN185">185</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN186" /><label for="lockerN186">186</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN187" /><label for="lockerN187">187</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN188" /><label for="lockerN188">188</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN189" /><label for="lockerN189">189</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN190" /><label for="lockerN190">190</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN191" /><label for="lockerN191">191</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN192" /><label for="lockerN192">192</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN193" /><label for="lockerN193">193</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN194" /><label for="lockerN194">194</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN195" /><label for="lockerN195">195</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN196" /><label for="lockerN196">196</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN197" /><label for="lockerN197">197</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN198" /><label for="lockerN198">198</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN199" /><label for="lockerN199">199</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN200" /><label for="lockerN200">200</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN201" /><label for="lockerN201">201</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN202" /><label for="lockerN202">202</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN203" /><label for="lockerN203">203</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN204" /><label for="lockerN204">204</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN205" /><label for="lockerN205">205</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN206" /><label for="lockerN206">206</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN207" /><label for="lockerN207">207</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN208" /><label for="lockerN208">208</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN209" /><label for="lockerN209">209</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN210" /><label for="lockerN210">210</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN211" /><label for="lockerN211">211</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN212" /><label for="lockerN212">212</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN213" /><label for="lockerN213">213</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN214" /><label for="lockerN214">214</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN215" /><label for="lockerN215">215</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN216" /><label for="lockerN216">216</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN217" /><label for="lockerN217">217</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN218" /><label for="lockerN218">218</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN219" /><label for="lockerN219">219</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN220" /><label for="lockerN220">220</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN221" /><label for="lockerN221">221</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN222" /><label for="lockerN222">222</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN223" /><label for="lockerN223">223</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN224" /><label for="lockerN224">224</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN225" /><label for="lockerN225">225</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN226" /><label for="lockerN226">226</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN227" /><label for="lockerN227">227</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN228" /><label for="lockerN228">228</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN229" /><label for="lockerN229">229</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN230" /><label for="lockerN230">230</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN231" /><label for="lockerN231">231</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN232" /><label for="lockerN232">232</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN233" /><label for="lockerN233">233</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN234" /><label for="lockerN234">234</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN235" /><label for="lockerN235">235</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN236" /><label for="lockerN236">236</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN237" /><label for="lockerN237">237</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN238" /><label for="lockerN238">238</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN239" /><label for="lockerN239">239</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN240" /><label for="lockerN240">240</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN241" /><label for="lockerN241">241</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN242" /><label for="lockerN242">242</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN243" /><label for="lockerN243">243</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN244" /><label for="lockerN244">244</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN245" /><label for="lockerN245">245</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN246" /><label for="lockerN246">246</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN247" /><label for="lockerN247">247</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN248" /><label for="lockerN248">248</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN249" /><label for="lockerN249">249</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN250" /><label for="lockerN250">250</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN251" /><label for="lockerN251">251</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN252" /><label for="lockerN252">252</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN253" /><label for="lockerN253">253</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN254" /><label for="lockerN254">254</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN255" /><label for="lockerN255">255</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN256" /><label for="lockerN256">256</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN257" /><label for="lockerN257">257</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN258" /><label for="lockerN258">258</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN259" /><label for="lockerN259">259</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN260" /><label for="lockerN260">260</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN261" /><label for="lockerN261">261</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN262" /><label for="lockerN262">262</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN263" /><label for="lockerN263">263</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN264" /><label for="lockerN264">264</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN265" /><label for="lockerN265">265</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN266" /><label for="lockerN266">266</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN267" /><label for="lockerN267">267</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN268" /><label for="lockerN268">268</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN269" /><label for="lockerN269">269</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN270" /><label for="lockerN270">270</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN271" /><label for="lockerN271">271</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN272" /><label for="lockerN272">272</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN273" /><label for="lockerN273">273</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN274" /><label for="lockerN274">274</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN275" /><label for="lockerN275">275</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN276" /><label for="lockerN276">276</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN277" /><label for="lockerN277">277</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN278" /><label for="lockerN278">278</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN279" /><label for="lockerN279">279</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN280" /><label for="lockerN280">280</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN281" /><label for="lockerN281">281</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN282" /><label for="lockerN282">282</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN283" /><label for="lockerN283">283</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN284" /><label for="lockerN284">284</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN285" /><label for="lockerN285">285</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN286" /><label for="lockerN286">286</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN287" /><label for="lockerN287">287</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN288" /><label for="lockerN288">288</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN289" /><label for="lockerN289">289</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN290" /><label for="lockerN290">290</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN291" /><label for="lockerN291">291</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN292" /><label for="lockerN292">292</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN293" /><label for="lockerN293">293</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN294" /><label for="lockerN294">294</label></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="gridItem numberInfo">
                <!-- tab-wrap -->
                <div class="tabwrap">
                  <!-- tab -->
                  <div class="tabBack">
                    <div class="tabNav">
                      <nav>
                        <ul class="lineTab">
                          <li :class="{on:currentTab===0}"><span @click="currentTab = 0">사물함 보기</span></li>
                          <li :class="{on:currentTab===1}"><span @click="currentTab = 1">위치 사진 보기</span></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <!--// tab -->
                  <div class="tabLayout">
                    <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                        <img :src="require(`@/assets/images/thumbnail/@locker_sample1.png`)" alt="" />
                    </div>
                    <div v-if="currentTab == 1" class="tabData">
                      <img :src="require(`@/assets/images/thumbnail/@locker_sample2.png`)" alt="" />
                    </div>
                  </div>
                </div>
                <!-- //tab-wrap -->
              </div>
            </div>
            <div class="lockerNotice">
              <h4>사물함 이용안내</h4>
              <p>
                <span>이용 기간은 신청 일로부터 해당월 말일까지 입니다. 예) 2월 15일 신청 : 1개월 종료일 2월 28일 </span>
                <span>사물함 이용기간 종료 후 10일간 물품을 보관하며,기간이 지난 물품은 폐기 처리 합니다.</span>
                <span>종료 직전 매월 25일 부터 말일까지 사물함 연장 신청이 가능합니다.</span>
                <span>자리이동 및 이용료 환불은 불가능 합니다.</span>
              </p>
              <div class="boardDetail write">
                <div class="box checkSetArea">
                  <span class="checkSet">
                    <input type="checkbox" id="chk01" />
                    <label for="chk01"><i></i>사물함 이용안내를 확인하고 신청합니다.</label>
                  </span>
                </div>
              </div>
            </div>
            <!-- 상세 버튼영역 -->
            <div class="boardBtn">
              <router-link to="/mkup/mypage/payment/locker" class="btnL line">취소</router-link>
              <button class="btnL" @click="popupTrigger = true">신청</button>
            </div>
            <!-- //상세 버튼영역 -->
          </div>
          <div class="lockerChoice" v-if="dateType == 2">
            <div class="gridSet">
              <div class="gridItem number">
                <h4>사물함 번호 선택해 주세요.</h4>
                <div class="lockerList">
                  <div>
                    <ul>
                      <li>
                        <span @click="alertTrigger = true"><input type="radio" name="lockerN" id="lockerN151" disabled /><label for="lockerN151">97</label></span>
                        <span @click="alertTrigger = true"><input type="radio" name="lockerN" id="lockerN152" disabled /><label for="lockerN152">98</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN153" /><label for="lockerN153">99</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN154" /><label for="lockerN154">100</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN155" /><label for="lockerN155">101</label></span>
                        <span @click="alertTrigger = true"><input type="radio" name="lockerN" id="lockerN156" disabled /><label for="lockerN156">102</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN157" /><label for="lockerN157">103</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN158" /><label for="lockerN158">104</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN159" /><label for="lockerN159">105</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN160" /><label for="lockerN160">106</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN161" /><label for="lockerN161">107</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN162" /><label for="lockerN162">108</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN163" /><label for="lockerN163">109</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN164" /><label for="lockerN164">110</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN165" /><label for="lockerN165">111</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN166" /><label for="lockerN166">112</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN167" /><label for="lockerN167">113</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN168" /><label for="lockerN168">114</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN169" /><label for="lockerN169">115</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN170" /><label for="lockerN170">116</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN171" /><label for="lockerN171">117</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN172" /><label for="lockerN172">118</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN173" /><label for="lockerN173">119</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN174" /><label for="lockerN174">120</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN175" /><label for="lockerN175">121</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN176" /><label for="lockerN176">122</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN177" /><label for="lockerN177">123</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN178" /><label for="lockerN178">124</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN179" /><label for="lockerN179">125</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN180" /><label for="lockerN180">126</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN181" /><label for="lockerN181">127</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN182" /><label for="lockerN182">128</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN183" /><label for="lockerN183">129</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN184" /><label for="lockerN184">130</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN185" /><label for="lockerN185">131</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN186" /><label for="lockerN186">132</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN187" /><label for="lockerN187">133</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN188" /><label for="lockerN188">134</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN189" /><label for="lockerN189">135</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN190" /><label for="lockerN190">136</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN191" /><label for="lockerN191">137</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN192" /><label for="lockerN192">138</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN193" /><label for="lockerN193">139</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN194" /><label for="lockerN194">140</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN195" /><label for="lockerN195">141</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN196" /><label for="lockerN196">142</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN197" /><label for="lockerN197">143</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN198" /><label for="lockerN198">144</label></span>
                      </li>
                      <li>
                        <span><input type="radio" name="lockerN" id="lockerN199" /><label for="lockerN199">145</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN200" /><label for="lockerN200">146</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN201" /><label for="lockerN201">147</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN202" /><label for="lockerN202">148</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN203" /><label for="lockerN203">149</label></span>
                        <span><input type="radio" name="lockerN" id="lockerN204" /><label for="lockerN204">150</label></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="gridItem numberInfo">
                <!-- tab-wrap -->
                <div class="tabwrap">
                  <!-- tab -->
                  <div class="tabBack">
                    <div class="tabNav">
                      <nav>
                        <ul class="lineTab">
                          <li :class="{on:currentTab===0}"><span @click="currentTab = 0">사물함 보기</span></li>
                          <li :class="{on:currentTab===1}"><span @click="currentTab = 1">위치 사진 보기</span></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <!--// tab -->
                  <div class="tabLayout">
                    <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                        <img :src="require(`@/assets/images/thumbnail/@locker_sample1.png`)" alt="" />
                    </div>
                    <div v-if="currentTab == 1" class="tabData">
                      <img :src="require(`@/assets/images/thumbnail/@locker_sample2.png`)" alt="" />
                    </div>
                  </div>
                </div>
                <!-- //tab-wrap -->
              </div>
            </div>
            <div class="lockerNotice">
              <h4>사물함 이용안내</h4>
              <p>
                <span>이용 기간은 신청 일로부터 해당월 말일까지 입니다. 예) 2월 15일 신청 : 1개월 종료일 2월 28일 </span>
                <span>사물함 이용기간 종료 후 10일간 물품을 보관하며,기간이 지난 물품은 폐기 처리 합니다.</span>
                <span>종료 직전 매월 25일 부터 말일까지 사물함 연장 신청이 가능합니다.</span>
                <span>자리이동 및 이용료 환불은 불가능 합니다.</span>
              </p>
              <div class="boardDetail write">
                <div class="box checkSetArea">
                  <span class="checkSet">
                    <input type="checkbox" id="chk01" />
                    <label for="chk01"><i></i>사물함 이용안내를 확인하고 신청합니다.</label>
                  </span>
                </div>
              </div>
            </div>
            <!-- 상세 버튼영역 -->
            <div class="boardBtn">
              <router-link to="/mkup/mypage/payment/locker" class="btnL line">취소</router-link>
              <button class="btnL" @click="popupTrigger = true">신청</button>
            </div>
            <!-- //상세 버튼영역 -->
          </div>
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- 사물함 신청내역 Popup -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" class="lockerOrderPop">
      <template slot="modalheader">
        <div>
          <h1>신청내역</h1>
          <button @click="popupTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <table class="popTable">
          <tbody>
            <tr>
              <th>위치</th>
              <td>이데아관 4층 A구역 1번</td>
            </tr>
            <tr>
              <th>이용기간</th>
              <td>2021년 4월 16일 ~ 2021년 4월 30일</td>
            </tr>
            <tr>
              <th>결제금액</th>
              <td>5,000원</td>
            </tr>
          </tbody>
        </table>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="bookPopupTrigger02 = true">장바구니 추가</button>
          <button class="btnL" @click="bookPopupTrigger03 = true">즉시결제</button>
        </div>
      </template>
    </Popup>
    <!-- 사물함 신청내역 Popup -->
    <!-- 장바구니 -->
    <Alert v-if='bookPopupTrigger02' @close="bookPopupTrigger02 = false">
      <template slot="modalbody">
         <div class="basicNoty"><p>선택한 교재를 장바구니에 추가하였습니다.</p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="bookPopupTrigger02 = false">장바구니로 이동</button>
        <button class="btnM" @click="bookPopupTrigger02 = false">구매를 계속함</button>
      </template>
    </Alert>
    <!-- //장바구니 -->
    <!-- 즉시결제 -->
    <Alert v-if='bookPopupTrigger03' @close="bookPopupTrigger03 = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>즉시결제를 하시겠습니까?</p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="bookPopupTrigger03 = false">취소</button>
        <button class="btnM" @click="bookPopupTrigger03 = false">확인</button>
      </template>
    </Alert>
    <!-- //즉시결제 -->

    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>이미 사용 중입니다. </p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM" @click="alertTrigger = false">확인</button>
      </template>
    </Alert>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaymentLockerWrite',
  components: {
  },
  data() {
    return {
      dateType:0,
      currentTab: 0,
      popupTrigger: false,
      alertTrigger: false,
      bookPopupTrigger02: false,
      bookPopupTrigger03: false,
    }
  },
  methods: {
    onChange(event) {
      let value = event.target.value;
      if (value == 'date01') this.dateType = 1;
      else if (value == 'date02') this.dateType = 2;
      else this.dateType = 0;
    },
  },
}
</script>
