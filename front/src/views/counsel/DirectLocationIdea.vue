<template lang="html">
  <div>
    <div class="locationDetal ideaCase">
      <div class="map">
        <div id="map"></div>
      </div>
      <div class="row">
        <dl class="lInfo01">
          <dt>주소</dt>
          <dd>
            <span>도로명 주소</span> <em>서울특별시 동작구 노량진로 146 이데아빌딩 4층</em><br/>
            <span>지번 주소</span> <em>서울특별시 동작구 노량진동 71-2 이데아빌딩 4층</em>
          </dd>
        </dl>
        <dl class="lInfo02">
          <dt>업무시간</dt>
          <dd>
            <div><span>월~토</span> 08:00 ~ 20:00</div>
            <div><span>일</span> 08:00 ~ 18:00</div>
          </dd>
        </dl>
        <dl class="lInfo03">
          <dt>상담전화</dt>
          <dd><a href="tel:02-817-4041">02-817-4041</a></dd>
        </dl>
      </div>
      <dl class="lInfo04">
        <dt>학원으로 가는 길</dt>
        <dd>
          <p>
            <strong>1호선 노량진역</strong>
            1호선 노량진역 1번 출구 → 횡단보도를 건너 오른쪽으로 이동 → 경찰서를 지나 이데아빌딩 도착 → 엘리베이터를 타고 4층 이데아관 도착
          </p>
          <p>
            <strong>9호선 노량진역</strong>
            9호선 노량진역 3번 출구 → 지하 이데아빌딩으로 이동 → 엘리베이터를 타고 4층 이데아관 도착
          </p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'DirectLocationIdea',
  components: {
  },
  data() {
    return {
      map:null,
      markers: [],
      lat: 37.5132520434594,
      lng:126.94219533436168
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(this.lat,this.lng),
        level: 3
      };
      this.map = new kakao.maps.Map(container, options);

      // const markerPositions = [
      //   [this.lat,this.lng]
      // ];
      // const positions = markerPositions.map(
      //   (position) => new kakao.maps.LatLng(...position)
      // );
      var position  = new kakao.maps.LatLng(this.lat,this.lng); 
      var marker = new kakao.maps.Marker({
            map: this.map,
            position,
          });
      // const iwContent = '<div style="padding:5px;">Hello World! <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      // iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

      // // 인포윈도우를 생성합니다
      // var infowindow = new kakao.maps.InfoWindow({
      //   position : iwPosition, 
      //   content : iwContent 
      // });
  
      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      //infowindow.open(this.map, marker); 

      var content = '<div class="placeBox">' + 
            '    <div class="placeBoxBody">' + 
            '        <button class="placeClose">닫기</button>' + 
            '        <div class="title">' + 
            '            KG에듀원 교원임용 희소쌤플러스 이데아관' + 
            '        </div>' + 
            '        <div class="info">' + 
            '            <div class="desc">' + 
            '                <p class="address">서울 동작구 노량진로 146 이데아빌딩 4층</p>' + 
            '                <p class="jibun"><span class="zipcode">(우) 06922</span>(지번) 노량진1동 71-2</p>' + 
            '                <div class="contact">' + 
            '                   <a href="#" target="_blank" class="phone">1544-0678</a>' + 
            '                   <a href="https://place.map.kakao.com/15545369" target="_blank" class="link">상세보기</a>' + 
            '                   <a href="http://www.ssamplus.com" target="_blank" class="link">홈페이지</a>' + 
            '                </div>' + 
            '                <div class="tools"><a href="https://map.kakao.com/link/to/15545369" target="_blank" class="btnDirection">길찾기</a></div>' + 
            '            </div>' + 
            '            <div class="thumbnail">' +
            '               <img class="placeimg" src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.kakaocdn.net/fiy_reboot/place/E71356948B1248429BF459512B3EAFFC">'+
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>';
//  var content = '<div class="PlaceInfoWindow InfoWindow  PlaceInfoWindow-withoutmin PlaceInfoWindow-withimg">'+
// '	<div class="top"></div>' + 
// '	<div class="body" data-id="body">' + 
// '        <button type="button" data-id="min" class="img_tooltip ico_min HIDDEN">축소하기</button>' + 
// '        <button type="button" data-id="close" class="img_tooltip ico_close">닫기</button>' + 
// '		<div class="head_tooltip">' + 
// '			<strong class="placename"><a href="https://place.map.kakao.com/1029411182" target="_blank" data-id="name" class="name" title="KG에듀원 교원임용 희소쌤플러스 아이비관">KG에듀원 교원임용 희소쌤플러스 아이비관</a></strong>' + 
// '			<a href="#none" target="_blank" data-id="detail" class="detail">상세보기<span class="img_tooltip coach_detail"></span></a>' + 
// '		</div>' + 
// '		<div class="metadata">' + 
// '			<strong class="screen_out">별점</strong>' + 
// '			<em data-id="score" class="num0">0.0</em>' + 
// '			<span class="ICON-stars"><span data-id="stars" style="width: 0%;"></span></span>' + 
// '			<a href="https://place.map.kakao.com/1029411182#comment" target="_blank" data-id="vote">(<span class="num">0</span>건)</a>' + 
// '			<span class="sep"></span>' + 
// '			<a href="https://place.map.kakao.com/1029411182#review" target="_blank" data-id="review">리뷰 <span class="num">0</span></a>' + 
// '		</div>' + 
// '		<div class="content">' + 
// '			<a href="#none" data-id="placeimg" class="thumb_place"><img class="placeimg" src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.kakaocdn.net/fiy_reboot/place/826BDCF43E9F48F8A973611BC8B610D7">' + 
// '				<span class="frame_g"></span>' + 
// '			</a>' + 
// '			<div class="content_place">' + 
// '				<p data-id="address" class="address" title="서울 동작구 장승배기로 171 아이비빌딩 5층">서울 동작구 장승배기로 171 아이비빌딩 5층</p>' + 
// '				<p data-id="addInfoAddr" class="addInfoAddr"><span class="zipcode">(우) 06928</span>(지번) 노량진동 45-8</p>' + 
// '				<p data-id="contact" class="contact">' + 
// '					<span data-id="phone" class="phone">1544-0678</span> <span class="ICON-middot"></span>' + 
// '					<a href="#none" target="_blank" class="detail">상세보기</a>' + 
// '                    <span class="ICON-middot"></span> <a href="#none" data-id="report" class="report">정보수정</a>' + 
// '					<span class="ICON-middot"></span> <a href="http://www.ssamplus.com" target="_blank" data-id="website" class="website">홈페이지</a>' + 
// '				</p>' + 
// '			</div>' + 
// '		</div>' + 
// '        <div data-id="addition" class="addition HIDDEN"></div>' + 
// '        <div class="toolbar" data-id="toolbar"><div>' + 
// '	<div class="InfoWindowToolbar">' + 
// '        <a href="#none" data-id="fav" class="fav"><span class="ico_toolbar">즐겨찾기</span><span data-id="favCount" class="num">100</span></a>' + 
// '        <a href="#none" data-id="rv" class="rv ICON-roadview"><span class="ico_toolbar">로드뷰</span></a>' + 
// '        <a href="#none" data-id="rough" class="rough"><span class="ico_toolbar">지도공유</span></a>' + 
// '    </div>' + 
// '    <div class="InfoWindowDirection">' + 
// '        <button type="button" class="btn_direction">길찾기</button>' + 
// '        <div data-id="waypoint" class="group_direction">' + 
// '            <button type="button" data-id="origin" class="origin">출발</button>' + 
// '            <button type="button" data-id="via" class="via">경유</button>' + 
// '            <button type="button" data-id="dest" class="dest">도착</button>' + 
// '        </div>' + 
// '    </div>' + 
// '</div></div>' + 
// '	</div>' + 
// ' <div class="bottom"></div>' + 
// '</div>';


      var overlay = new kakao.maps.CustomOverlay({
          content: content,
          map: this.map,
          position: marker.getPosition()       
      });

       //overlay.setMap(this.map);  
      // this.markers = positions.map(
      //   (position) =>
      //     new kakao.maps.Marker({
      //       map: this.map,
      //       position,
      //     })
      // );

      // const bounds = positions.reduce(
      //   (bounds, latlng) => bounds.extend(latlng),
      //   new kakao.maps.LatLngBounds()
      // );

      //this.map.setBounds(bounds);
      
      // var iwContent = '<div style="padding:5px;">Hello World! <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      // iwPosition = new kakao.maps.LatLng(this.lat,this.lng); //인포윈도우 표시 위치입니다

      // // 인포윈도우를 생성합니다
      // var infowindow = new kakao.maps.InfoWindow({
      //     position : iwPosition, 
      //     content : iwContent 
      // });
      // console.log(this.markers);
      // debugger;
      // // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      // infowindow.open(this.map,positions); 
      
    },
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fef371a5ab784fab338957af80715260";
      document.head.appendChild(script);
    }
  },
}
</script>
