(function(){
    'use strict';

    var SKIN_NAME = 'catvod';
    var IS_DEBUG = 'true'==='true' ? true : false;
    var UPDATE_NUM = 1;
    var D = window.getDframework();
    var Media = D.module('imgtech.media.Media');

    window.createMediaPlayer = function(id, source, param, callback) {
        return Media.createPlayer(id, createOriginalMediaPlayer(id, source, param, callback), true);
    };

    window.createChatApp = function(id, param, callback){
        var ca;
        var pa =  createOriginalMediaPlayer(id, null, { module: {chat: param} }, callback);
        if(!(ca = pa.module.chat)){
            return D.error('Not found chat module attribute.');
        }
        ca.alone = {
            uid: id,
            resourceText: getHtmlChatResource(ca)
        };
        ca.callback = callback;

        var Chat = D.module('imgtech.media.module.Chat');
        var chat = new Chat(ca);
        return chat;
    };

    function cp(a, b){
        for(var n in b){
            if(D.isArray(b[n])){
                if(!D.isArray(a[n])){
                    a[n] = [];
                }
                // for(var i=0; i<b.length; i++){
                //     a[i] = b[i];
                // }
                a[n] = b[n];
            }else if(typeof(b[n])=='object'){
                if(typeof(a[n])!=='object')
                    a[n] = {};
                cp(a[n], b[n]);
            }else{
                a[n] = b[n];
            }
        }
    }

    function createOriginalMediaPlayer(id, source, param, callback){
        if( !param ) param = {};

        var E = Media.EVENT,
            rateInfo;

        if(!D.b.isMobile){
            rateInfo = [
                { 'value': 0.4, 'context': "0.4 배속", 'cvalue': "0.4 배속" },
                { 'value': 0.6, 'context': "0.6 배속", 'cvalue': "0.6 배속" },
                { 'value': 0.8, 'context': "0.8 배속", 'cvalue': "0.8 배속" },
                { 'value': 1,   'context': "1.0 배속", 'cvalue': "1.0 배속" },
                { 'value': 1.2, 'context': "1.2 배속", 'cvalue': "1.2 배속" },
                { 'value': 1.4, 'context': "1.4 배속", 'cvalue': "1.4 배속" },
                { 'value': 1.6, 'context': "1.6 배속", 'cvalue': "1.6 배속" },
                { 'value': 1.8, 'context': "1.8 배속", 'cvalue': "1.8 배속" },
                { 'value': 2,   'context': "2.0 배속", 'cvalue': "2.0 배속" }
            ];
        }else{
            rateInfo = [
                { 'value': 0.4, 'context': "0.4 배속", 'cvalue': "0.4 배속" },
                { 'value': 0.6, 'context': "0.6 배속", 'cvalue': "0.6 배속" },
                { 'value': 0.8, 'context': "0.8 배속", 'cvalue': "0.8 배속" },
                { 'value': 1,   'context': "1.0 배속", 'cvalue': "1.0 배속" },
                { 'value': 1.2, 'context': "1.2 배속", 'cvalue': "1.2 배속" },
                { 'value': 1.4, 'context': "1.4 배속", 'cvalue': "1.4 배속" },
                { 'value': 1.6, 'context': "1.6 배속", 'cvalue': "1.6 배속" },
                { 'value': 1.8, 'context': "1.8 배속", 'cvalue': "1.8 배속" },
                { 'value': 2,   'context': "2.0 배속", 'cvalue': "2.0 배속" }
            ];
        }

        var attr = {
            debug: {
                use: IS_DEBUG,
                flash: false,
                startType: 'log',
                displaySource: false,
                displayType: false,
                displayClassName: 1,
                disable: [
                    E.CLICK_EVENT
                    // ,E.SUBTITLE_EVENT
                    ,E.WAITTING
                    ,E.CURRENT_TIME_CHANGE
                    ,E.SEEKTO_MEDIA
                    ,E.WATCH_TIME_CHANGE
                    ,E.BUFFERING_CHANGE
                    ,E.CONTROL_EVENT
                    ,E.RESIZE_WINDOW
                    ,E.SIZE_CHANGE
                    ,E.OPENLAYER_CHANGE
                    ,E.SET_VOLUME
                    ,E.VOLUME_CHANGE
                    ,E.MUTE_MEDIA
                    //,E.CAN_PLAY
                    ,'repeat-change-min'
                    ,'repeat-change-max'
                    ,'repeat-depth_seconds_2'
                ],
                special: [
                    //E.VOLUME_CHANGE
                    //,E.OPENLAYER_CHANGE
                    //,E.SEEKTO_MEDIA
                    //,E.CAN_PLAY
                    //,E.WAITTING
                    //,E.SIZE_CHANGE
                    //,E.FULLSCREEN_CHANGE
                    //,E.CLICK_EVENT
                ],
                element: '#zonehtml5mediaplayer_debuger',
                url: ''
            },
            playerType: '',
            deviceClass: '',
            skin: SKIN_NAME,
            resourceText: '',
            src: source,
            disableUi: false,
            width: '100%',
            height: '100%',
            autoplay: false,
            crossOrigin: '', //'anonymous',
            isPseudo: false,
            zIndex: 0,
            isLive: false,
            poster: '',
            module: {
                continueTime: {
                    //message: function(data){ return '이어보기 ( '+Media.secondsToTimeString(data)+' )를 하시겠습니까?'; }
                },
                layout: {
                    controlAutoHide: 3.0
                    , controlAutoHidePause: false
                    , controlAutoHideFirst: false
                    , controlAutoHideOver: false
                    , separateControlNormal: false
                    , separateControlFs: false
                    , alwaysControlNormal: false
                    , alwaysControlFs: false
                    , controlHideMouseOut: true // 마우스가 벗어나면 컨트롤이 사라지도록 합니다. (모바일이 아닌 경우)
                    , isShowControl: function(){ return getDframework().b.isMobile || this.p.module('app').isMobileApp(); }
                    , isAnimationControl: true  // 컨트럴 영역이 보여지거나 사라질때 애니메이션 효과 사용 유무 입니다.
                                                // 이는 정확히 mpv-bottom classname element에 mpv-ani classname을 추가만 하고
                                                // 실제 애니메이션은 catvod.css파일에 정의되어 있습니다.
                    , touch: {
                        useType: 'always' // none, always, fullscreen (only fullscreen)
                        , mobile: {
                            useType: 'fullscreen'  // none, always, fullscreen (only fullscreen)
                        }
                        , message: {
                            S_PROGRESS: '재생위치'
                            , S_VOLUME: '볼륨'
                            , S_BRIGHTNESS: '밝기'
                        }
                    }
                    , disableToggle: false
                    , playMouseOver: false
                    , pauseMouseOut: false
                    , disableToggleOSD: false
                    , lockBtn: {hideExtendButton: false}
                    , osdLoadingBtn: {hideExtendButton: false}
                    , osdToggleBtn: {hideExtendButton: false}
                    , osdPlayBtn: false
                    , osdReloadBtn: false
                    , clickTime: 300       // clickTime이 0이면 dblclick이벤트를 인정하고 touch이벤트를 사용하지 않습니다.
                                           // clickTime은 0이거나 0보다 커야 합니다.
                                           // 0보다 크면 dblclick을 사용하지 않고 click으로 더블클릭을 흉내내고 touch이벤트도 사용합니다.
                                           // 이 값은 토글 기능과 sideDoubleTab과 관련되어 있습니다.
                    , clickOffset: 10 // 마우스 다운 후 업하면 클릭이벤트가 발생하는데, 다운 후 이동하여 업 한 경우 클릭을 무시하기 위한 offset.
                    , clickTimeOffset: 300 // 마우스 다운 후 업하면 클릭 이벤트가 발생, 다운 후 업까지 걸린 시간(offset)에 따라 클릭 무시.
                    , sideDoubleTab: {
                        use: true,
                        useDoubleClickOnclickTime: true, // clickTime이 0보다 큰 경우(touch이벤트를 허용한 경우)
                                                         // 더블클릭으로 sideDoubleTab을 사용하고 할 때 true입니다.
                                                         // 이값이 false인 경우 touch로만 sideDoubleTab을 사용 할 수 있습니다.
                        ignoreFullscreen: false,
                        helperUnitText: ' 초',
                        helperHideTimer: 1.0,  // 사이드에 더블탭시 시크되는 UI가 표시될 때 자동으로 감춰질 시간 (초단위) 입니다. 기본값은 1.0 입니다.
                        progressHelperTimer: 2 // 프로그래스바를 클릭시 sideDoubleTab 설명 UI를 표시합니다. 이 때 자동으로 감춰질 시간 (초단위) 입니다.
                                               // 이 시간이 0이면 설명 UI는 표시 하지 않습니다.
                    }
                    , progressBarTopOffset: 20 // 클릭/더블클릭의 위치가 프로그래스바 영역 보다 위에 있어야 한다. 해당 값의 offset.
                },
                volume: {
                    type: 'vertical' // vertical or horizontal
                    , disable: [ // 볼륨 버튼 전체를 사용하지 않습니다.
                        // 'iOS'
                    ]
                    , disableVolume: [ // 볼륨 mute/unmute 기능만 동작 합니다. (disable이 설정되면 이 설정은 무의미 합니다.)
                        'iOS'
                    ]
                    , disableMouseOver: false
                    , hideTimer: 2.0
                    , autoHide: false
                    , isAnimationControl: true  // 볼륨막대가 나타나거나 사라질때 애니메이션 효과를 넣을지 유무입니다.
                                                // 이는 단순히 mpv-volume-slider-layout classname에 mpv-ani classname을 넣고, catvod.css에 정의 되어 있습니다.
                    , volumeStep: 10
                },
                size: {
                    classList: [
                        300,
                        400,
                        500
                    ],
                    ignoreFullscreen: false, // true, false, function
                    fullscreenBtn: {hideButton: false, hideExtendButton: true},
                    sizeBtn: {hideButton: true, hideExtendButton: true}, // 사용하지 마세요
                    fullscreenNavigationUI: 'hide', // 모바일 풀스크린(안드로이드만 가능)에서 하단 네비게이션바를 감추도록 합니다. 이 설정이 false이면 어떤값도 설정하지 않습니다. (3.1.39버전)
                    fullscreenLandscape: true, // 풀스크린(iOS지원안함)에서 가로모드 고정을 원하는 경우 설정 합니다.
                    fullscreenAllowFullscreen: true,
                    fullscreenResizeWindow: true,  // 가상 풀스크린 (IE10이하)에서 동작 합니다.
                    fullscreenReplaceCss: true,    // 가상 풀스크린(IE10이하, iOS)에서 동작 합니다.
                    fullscreenReplaceZindex: true, // 가상 풀스크린(IE10이하, iOS)에서 동작 합니다.
                    fullscreenHideElement: true,   // 가상 풀스크린(IE10이하, iOS)에서 동작 합니다.
                    fullscreenReplaceIframe: true,  // 가상 풀스크린(IE10이하, iOS)에서 동작 합니다.
                    fullscreenReplaceElement: true // 가상 풀스크린(IE10이하, iOS)에서 동작 합니다.
                },
                wide: {
                    className: 'imgtech.media.module.Wide',
                    height: 'auto',
                    hideButton: true, hideExtendButton: true
                },
                progress: {
                    skipInputValue: 30,
                    skipInputIgnoreMobile: true, // false가 아니면 모바일에서 skip input tag를 hide 시킵니다.
                    previousSkipBtn: {hideButton: false},
                    nextSkipBtn: {hideButton: false},
                    skipInput: {hideButton: false},
                    currentTimeText: {hideButton: false},
                    durationText: {hideButton: false},
                    preview: {
                        alwaysRequest: false,
                        gotoFirst: true,
                        callback: false
                    },
                    disableDrag: false,
                    touchOffset: 10,
                    downOffset: 5,
                    overOffset: 7,
                    disableOverBar: true, // 유튜브 처럼 프로그래스바 영역에 mouseover시 해당 영역에 프로그래스바 표시 유무
                                          // true이면 표시 하지 않습니다.
                    timestamp: {
                        spaceSize: 2,
                        prefixPixel: 15, // pixel, 0 is not use
                        prefixAlways: true, // true이면 선택되지 않은 타임스템프의 prefix영역도 모두 표시 합니다.
                        callback: null // function(e) { console.log(e); }
                    },
                    eventMods: ['bookmark', 'thumbnail'] // 프로그래스영역의 move event를 전달한다.
                },
                ui: {
                    toggleBtn: {hideButton: false},
                    stopBtn: {hideButton: false},
                    popupBtn: {}, // 사용하지 않습니다.
                    titleText: {hideExtendButton: false},
                    rotateBtn: {hideButton: true, hideExtendButton: true}
                },
                repeat: {
                    className: 'imgtech.media.module.Repeat',
                    repeatBtn: { hideButton: false },
                    type: 0, // or 2
                    alwaysCurrentTime: true,
                    progressUi: false,
                    isRepeat: true // ??????
                    //isLogin: function(){}
                },
                key: {
                    className: 'imgtech.media.module.Key',
                    use: true,
                    // volumeStep: 10, // 3.1.47 부터 volume 모듈에서 정의 합니다. (볼륨 위에서 wheel 기능 추가)
                    seekStep: 10,
                    useFinder: true,
                    useFinderInputsTimer: 1,
                    useFinderInputsTimerMax: 10,
                    useFinderElement: [
                        "input[type='input']",
                        "textarea",
                        "[contenteditable='true']"
                    ]
                },
                subtitle: {
                    className: 'imgtech.media.module.Subtitle',
                    use: true,
                    onlyText: true,
                    toggle: false,
                    subtitleBtn: { hideButton: false }
                },
                quality: {
                    className: 'imgtech.media.module.Quality',
                    use: true,
                    qualityBtn: { hideButton: false }
                },
                rate: {
                    className: 'imgtech.media.module.Rate',
                    use: true,
                    useType: 'list', // button(mpv-rate-type-button) or list(mpv-rate-type-list). 버튼 타입이 아니면 리스트 타입 입니다.
                    rateBtn: {hideButton: false, hideExtendButton: true, hideMenuButton: true},
                    rateDownBtn: {hideButton: false, hideExtendButton: true, hideMenuButton: true},
                    rateUpBtn: {hideButton: false, hideExtendButton: true, hideMenuButton: true},
                    rateText: {hideButton: false, hideExtendButton: true, hideMenuButton: true},
                    rateInfo: rateInfo
                },
                bookmark: { // 책갈피 북마크 모듈
                    className: 'imgtech.media.module.Bookmark'
                    , addBtn: {hideButton: false, hideExtendButton: false, hideMenuButton: false}
                    , menuBtn: {hideButton: true, hideExtendButton: false}
                    , closeOnClick: true
                    , useName: true // 북마크 추가 시 이름을 사용하는 경우.
                    , input: {
                        nameLength: 20 // 북마크 이름의 최대 길이
                        , timeLength: 9  // 북마크 타임 입력값의 최대 길이 (000:00:00)
                        , hideAfterAppend: true // 북마크 추가 후 입력 박스 닫기 유무
                        , showAfterAppend: true // 북마크 추가 후 북마크 목록 표시 유무
                        , linkControlBtn: true  // 북마크 목록 창이 열려 있을 때 컨트롤 영역의 북마크 추가 버튼 클릭하여 나타난 입력 창을 닫을 때 다시 목록 창으로 돌아 가기를 원하는 경우
                        , closeOnClick: true
                        , pauseOnOpen: true // 입력창이 열리면 영상을 일시정지 유무 입니다.
                        , ignoreTime: true
                        , playOnClick: true
                    }
                    , disablePointer: false // 프로그래스바 영역에 북마크 영역 표시 유무 입니다. true이면 표시하지 않습니다.
                    , pointerClassName: '' // 북마크 포인터에 classname을 추가하고자 하는 경우 넣습니다. 예) mpv-zindex
                    , size: 10 // or 0, 북마크 최대 갯수
                    , unitName: ' 개' // 갯수의 단위명
                    , add: function(data){
                    }
                    , remove: function(data){
                    }
                    , message: {
                        alertAutoHide: 3
                    }
                },
                repmark: { // 구간반복 북마크 모듈
                    className: 'imgtech.media.module.Repmark'
                    , addBtn: {hideButton: true, hideExtendButton: true, hideMenuButton: false}
                    , menuBtn: {hideButton: true, hideExtendButton: true}
                    , closeOnClick: true
                    , useName: true // 북마크 추가 시 이름을 사용하는 경우.
                    , input: {
                        nameLength: 20 // 북마크 이름의 최대 길이
                        , timeLength: 9  // 북마크 타임 입력값의 최대 길이 (000:00:00)
                        , hideAfterAppend: true // 북마크 추가 후 입력 박스 닫기 유무
                        , showAfterAppend: true // 북마크 추가 후 북마크 목록 표시 유무
                        , linkControlBtn: true  // 북마크 목록 창이 열려 있을 때 컨트롤 영역의 북마크 추가 버튼 클릭하여 나타난 입력 창을 닫을 때 다시 목록 창으로 돌아 가기를 원하는 경우
                        , closeOnClick: true
                    }
                    , size: 10 // or 0, 북마크 최대 갯수
                    , unitName: ' 개' // 갯수의 단위명
                    , add: function(data){
                    }
                    , remove: function(data){
                    }
                    , message: {
                        alertAutoHide: 3
                    }
                },
                playlist: {
                    useConfigList: true // 플레이리스트를 설정 목록에 표시 유무 입니다.
                    , previousBtn: {hideButton: false, hideExtendButton: true}
                    , nextBtn: {hideButton: false, hideExtendButton: true}
                    , addBtn: {hideButton: true, hideExtendButton: true, hideMenuButton: false}
                    , menuBtn: {hideButton: true, hideExtendButton: true}
                    , useSlice: false // 다음 영상 재생시 slice 애니메이션으로 동작
                    , useSliceTouch: false // 터치로 좌우 모션시 다음 영상으로 slice 된다.
                    , useName: true // 미디어 추가 시 이름을 사용하는 경우.
                    , useImage: true // 미디어 추가 시 이미지을 사용하는 경우.
                    , useText: true // 미디어 추가 시 설명을 사용하는 경우.
                    , size: 10 // or 0, 미디어의 최대 갯수
                    , input: {
                        nameLength: 30 // 미디이 이름의 최대 길이
                        , srcLength: 200 // 미디어 주소의 최대 길이 (0이면 무제한)
                        , imageLength: 200 // 미디어 이미지 주소의 최대 길이 (0이면 무제한)
                        , textLength: 200 // 미디어 설명의 최대 길이 (0이면 무제한)
                        , hideAfterAppend: true // 미디어 추가 후 입력 박스 닫기 유무
                        , showAfterAppend: true // 미디어 추가 후 플레이리스트 표시 유무
                        , linkControlBtn: true  // 플레이리스트 창이 열려 있을 때 컨트롤 영역의 미디어 추가 버튼 클릭하여 나타난 입력 창을 닫을 때 다시 목록 창으로 돌아 가기를 원하는 경우
                        , closeOnClick: true
                    }
                    , closeOnClick: true
                    , enableRotatePrevious: true
                    , enableRotateNext: true
                    , unitName: ' 개' // 갯수의 단위명
                    , add: function(data){
                        // this.warn('add playlist: ', data);
                    }
                    , remove: function(data){
                        // this.warn('remove playlist: ', data);
                    }
                    , message: {
                        alertAutoHide: 3
                    }
                },
                switchSource: {
                    switchSourceBtn: {hideButton: false, hideExtendButton: true}
                    , closeOnClick: true
                },
                config: {
                    className: 'imgtech.media.module.Config'
                    , configBtn: {hideButton: true, hideExtendButton: true}
                    , closeOnClick: true
                    , list: [
                        {name: '자막', id: 'subtitle'},
                        {name: '화질', id: 'quality'},
                        {name: '재생속도', id: 'rate'},
                        {name: '책갈피', id: 'bookmark'},
                        {name: '구간반복', id: 'repmark'},
                        {name: '플레이리스트', id: 'playlist'},
                        {name: '플레이어', id: 'switchSource'}
                    ]
                },
                watchTime: {
                    className: 'imgtech.media.module.WatchTime'
                    , use: false
                    , debug: false //{currentTime: false, seek: true}
                    , alwaysEvent: true
                    , depthSeconds: 5 // seconds
                    , beforeunload: true
                    , sourceTime: true
                    , pureTime: true //{isReWatchWidthEnded: false}
                    , overlapRealTime: true
                    , overlapPlayTime: true
                    , playTime: {
                        useRange: true
                        , useRangeSort: true
                        , useRangeString: true
                        //, useTestRange: true
                        , replaceRange: 1
                    }
                    , callback: function(a){}
                },
                thumbnail: {
                    // className : "imgtech.media.module.Thumbnail",
                    //      강제로 로딩되는 모듈로 변경(3.1.45버전)
                    //      본 모듈은 썸네일 뿐만 아니라 북마크정보, 타임스탬프 정도등의 프로그래스바 위에 표시되는
                    //      것들을 표시 하기위한 모듈로 사용되어 진다.
                    use: true // use가 false라도 북마크, 타임스탬프 정보를 표시 해야 한다면
                              // 썸네일이 표시된다. 단, 이미지가 없다면 정보만 표시 할 수 있다.
                    , auto: true // 서버로 부터 이미지를 가져 오지 않고 자동으로 썸네일을 보여준다. (html5 지원 브라우저만 가능)
                    , is_always_hide_onerror: false
                    , margin: 5
                    , type: 'atype' // progress, bookmark 등에서 데이타가 넘어 온다면
                                    // mpv-progress 엘리먼트에 type 명을 'mod-'+className으로 넣는다.
                                    // 이때 progress이면 type와 'mod-'+type+'-progress'
                                    //      bookmark이면 type와 'mod-'+type+'-bookmark' 이다.
                    , typeSize: { // 이 값은 css와 연결 되어 있으므로 수정하고자 한다면 css(.skin-catvod .mpv-thumbnail ... )도 수정해야 한다.
                        atype: {w: 120, h: 80},
                        btype: {w: 120, h: 80},
                        ctype: {w: 150, h: 80}
                    }
                    , typeImageSize: { // 이 값은 css와 연결 되어 있으므로 수정하고자 한다면 css(.skin-catvod .mpv-thumbnail ... )도 수정해야 한다.
                        atype: {w: 120, h: 80},
                        btype: {w: 120, h: 80},
                        ctype: {w: 120, h: 80}
                    }
                    , linkedMods: ['bookmark', 'progress'] // 설정된 모듈에서의 자체 툴팁은 사용되지 않고 썸네일 모듈이 표시 한다.
                                                           // 우선순위는 나열된 순서이다.
                    , callback : null //  function(time, callback) { callback(true); }
                },
                openLayer: {
                    className: 'imgtech.media.module.OpenLayer',
                    use: false,
                    width: 350,
                    height: 'auto',
                    mobile: {
                        width: '100%',
                        height: 'auto',
                        landscape: 'fullscreen', // auto, none, fullscreen(virtual)
                        type: 'top'
                    },
                    hideOnClose: false, // 닫기 버튼 등으로 오픈레이어를 닫은 후 다시 오픈레이어로 돌아 갈 수 있는지를 설정.
                    openLayerBtn: {hideButton: true, hideExtendButton: true},
                    rollbackBtn: {hideButton: true, hideExtendButton: false},
                    closeBtn: {hideButton: true, hideExtendButton: false}
                },
                watermark: {
                    className: "imgtech.media.module.Watermark",
                    use: false,
                    ignorePause: true,
                    intervalTime: 3000,
                    alpha: 0.3,
                    color: "#ff0000",
                    font: "20px sans-serif",
                    margin: '20px 20px',
                    padding: '0px 0px',
                    position: {
                        // TL: 3,
                        // TC: 3,
                        // TR: 3,
                        // ML: 3,
                        // MC: 3,
                        // MR: 3,
                        // BL: 3,
                        // BC: 3,
                        // BR: 3
                        // MC: 6
                    },
                    random: true,
                    rotate: 45,
                    multi: 1,
                    lineHeight: "120px",
                    message: 'SAMPLE WATERMARK TEXT'
                },
                radio: {
                    size: function(){
                        return { width: undefined, height: undefined };
                    }
                },
                app: {
                    className: 'imgtech.media.module.App',
                    appName: function(){},
                    isApp: function(){ return window.zoneplayer && window.zoneplayer.isApp(); },
                    isMobileApp: function(){ return this.isApp(); },
                    fullscreen: function(){ if( typeof(window.zoneplayer) != 'undefined' ){ window.zoneplayer.fullscreen(this.p); } },
                    exitFullscreen: function(){ if( typeof(window.zoneplayer) != 'undefined' ){ window.zoneplayer.exitFullscreen(this.p); } },
                    dissmiss: function(){ window.console && window.console.log('clicked exitBtn !!!'); },
                    stateChange: function(e){},
                    useVirtualScreen: function(){},
                    exitBtn: function(){ return {hideExtendButton: true} }
                },
                // ad: {
                //     className: 'imgtech.media.module.AD'
                //     , progressTime: true // true, 'disable', false
                //     , againAD: true
                //     , isEnableSkipAgainAd: false
                //     , isEnableDetailAgainAd: false
                //     , detailBtn: { hideEtcButton: true, click: undefined }
                //     , skipBtn: { hideEtcButton: false, click: undefined }
                //     , useYoutubeOSD: false
                //     , skipTime: 10
                //     , detailTime: null
                //     , start: undefined
                //     , end: undefined
                //     , currentTime: undefined
                //     , adStateChange: undefined
                //     , clickLayout: undefined
                //     , finish: undefined
                // },
                vast: {
                    className: 'imgtech.media.module.VAST'
                    , toggle: true
                    , progressTime: 'disable' // true, 'disable', false
                    , detailBtn: { hideEtcButton: true, click: undefined }
                    , skipBtn: { hideEtcButton: false, click: undefined }
                    , clickLayout: false // true, false
                    , duration: function(duration){
                        // this.addMiddleVast(100);
                    }
                    , sendTracking: function(event, url, logData){
                        // sendTracking 알림.
                    }
                },
                chat: {
                    className: 'imgtech.media.module.Chat'
                    , use: false
                    , log: {
                        info: true,
                        error: true
                    }
                    // , url: undefined
                    // , login: {
                    //     //id: uuid,
                    //     //nick: uuid,
                    //     channelId: '0fbf0da51601859067242'
                    // }
                    , dateFormat: 'yy-MM-dd HH:mm:ss'
                    , useFace: true
                    , focus: false
                },
                version: {
                    wait: 500,
                    ignoreEvent: false
                }
            },
            event: {
                video: true,
                callback: callback
            },
            hls: {
                playerVars: {
                    maxBufferLength: 30 // 버퍼링 시간 (초단위)
                    , maxBufferSize: 60*1000*1000 // 버퍼링 크기 (bit단위), 60MB
                    , maxMaxBufferLength: 600
                }
            },
            youtube: {
                quality: 'source', // youtube, source, all, none
                    // youtube: Youtube만 사용, 설정해도 적용되지 않는다. 따라서 사용하지 않는 것이 좋다.
                    // source: 소스 설정의 화질 목록을 사용. 유튜브에서는 사용 할 일이 없다.
                    // all: 둘다 사용
                    // none: 사용안함 (디폴트)
                qualityLabel: [
                    {code: 'hd2160', label:'4K 고해상도'},
                    {code: 'hd1440', label:'2K 고해상도'},
                    {code: 'hd1080', label:'Full HD'},
                    {code: 'hd720', label:'HD'},
                    {code: '480p', label:'large'},
                    {code: '360p', label:'medium'},
                    {code: '240p', label:'small'},
                    {code: 'hd7auto20', label:'자동'},
                ],
                rateLabel: [
                    {code: 0.25, label:'0.25 배속'},
                    {code: 0.5,  label:'0.5 배속'},
                    {code: 0.75, label:'0.75 배속'},
                    {code: 1,    label:'일반 배속'},
                    {code: 1.25, label:'1.25 배속'},
                    {code: 1.5,  label:'1.5 배속'},
                    {code: 1.75, label:'1.75 배속'},
                    {code: 2,    label:'2 배속'}
                ],
                subtitle: 'all', // youtube, source, all, none
                autoLanguage: false, // 유튜브가 지원하는 자동 번역 자막 사용 유무 입니다. 지원하지 앟는 영상이 존재 합니다.
                useYoutubeOSD: false,
                playerVars: {
                    enablejsapi: 1,
                    cc_load_policy: 1,
                    rel: 0,
                    showinfo: 0,
                    controls: 0,
                    fs: 0
                },
                pauseImage: false,
                pauseImageTime: 3,
                width: 1280, height: 720 // Youtube 영상의 크기를 알 수 없어 여기에 지정
            },
            wait: {
                disable: true
            },
            patch: {},
            update: UPDATE_NUM
        };

        cp(attr, param);

        // if(param && param.programableHtml){
        //     return Media.getProgrameableHtml(id, attr);
        // }

        attr.resourceText = getHtmlResource(attr);

        return attr;
    }


    ////////////////////////////////////////////////////////////////////////
    //
    //       HTML resource
    //
    ////////////////////////////////////////////////////////////////////////

    function getHtmlResource(param){
        var h = [];

        h.push("<div class='mpv-player'>\n");
        h.push("  <div class='mpv-device mpv-screen'></div>\n");
        h.push("  <div class='mpv-pause-image mpv-screen'></div>\n");

        // OSD 영역 (플레이어의 상태만 보여주는 UI)
        h.push("  <div class='mpv-osd mpv-screen mpv-zindex'>\n");
        h.push("    <div class='mpv-osd-loading mpv-ectrl-btn'></div>\n");
        h.push("    <div class='mpv-osd-toggle mpv-ectrl-btn'></div>\n");
        if( !(D.b.ie && D.b.ie<=8) ){
            h.push("    <div class='mpv-osd-play-btn'></div>\n");
            h.push("    <div class='mpv-osd-reload-btn'></div>\n");
        }
        h.push("  </div>\n\n");
        h.push("  <div class='mpv-poster mpv-screen mpv-zindex'></div>\n");

        // 확장된 컨트롤 영역
        h.push("  <div class='mpv-edge-left mpv-zindex'>\n"); // mpv-edge-left 는 css 파일에서만 사용 합니다. (마음껏 변경 가능합니다.)
        h.push("    <div class='mpv-exit-btn mpv-ectrl-btn mpv-left' title='플레이어 닫기 버튼'></div>\n");
        h.push("    <div class='mpv-openlayer-rollback-btn mpv-ectrl-btn mpv-openlayer-button mpv-left' title='돌아가기 버튼'></div>\n");
        h.push("    <div class='mpv-title-text-btn mpv-ectrl-btn mpv-left mpv-hide'>");
        h.push("        <div class='mpv-title-text'></div>");
        h.push("    </div>\n");
        h.push("  </div>\n\n");
        h.push("  <div class='mpv-edge-right mpv-zindex'>\n"); // mpv-edge-right 는 css 파일에서만 사용 합니다. (마음껏 변경 가능합니다.)
        h.push("    <div class='mpv-lock-btn mpv-ectrl-btn mpv-right' title='잠금 토글 버튼'></div>\n");
        h.push("    <div class='mpv-openlayer-close-btn mpv-ectrl-btn mpv-openlayer-button mpv-right' title='오픈레이어 닫기 버튼'></div>\n");
        h.push("    <div class='mpv-config-btn mpv-ectrl-btn mpv-right' title='설정 버튼'></div>\n");
        h.push("    <div class='mpv-flash-icon mpv-ectrl-btn mpv-right' title='플래시 플레이어 사용 중 입니다.'></div>\n");
        h.push("  </div>\n\n");

        h.push("  <div class='mpv-edge-center'>\n");
        h.push("    <div class='mpv-preview-message-btn mpv-ie8bg'>맛보기 재생 중 입니다</div>\n");
        h.push("    <div class='mpv-ad-message-btn mpv-ie8bg mpv-ad-btn'>광고 중 입니다</div>\n");
        h.push("  </div>\n");

        h.push("  <div class='mpv-recommend-layer mpv-zindex'>\n");
        h.push("    <div class='mpv-recommend-left mpv-recommend-thumb mpv-zindex'></div>\n");
        h.push("    <div class='mpv-recommend-right mpv-recommend-thumb mpv-zindex'></div>\n");
        h.push("  </div>\n");

        ////////////////////////////////////////////////////////////////////
        // BEGIN: mpv-bottom (하단 영역)
        h.push("  <div class='mpv-bottom mpv-zindex'>\n");

        h.push("    <div class='mpv-subtitle-display'></div>\n");

        h.push("    <div class='mpv-edge-rightbottom'>\n");
        h.push("      <div class='mpv-intro-skip-btn mpv-etc-btn mpv-ie8bg mpv-intro-btn'>인트로 SKIP &gt;</div>\n");
        h.push("      <div class='mpv-ad-detail-btn mpv-etc-btn mpv-ie8bg mpv-ad-btn'>광고 자세히 보기</div>\n");
        h.push("      <div class='mpv-ad-skip-btn mpv-etc-btn mpv-ie8bg mpv-ad-btn'></div>\n");
        h.push("    </div>\n");

        // 하단 컨트롤 영역
        h.push("    <div class='mpv-control'>\n");

        // 재생 진행 바 영역
        h.push("      <div class='mpv-progress mpv-zindex'>\n");
        h.push("        <div class='mpv-progress-layout'>\n");
        // 썸네일
        h.push("          <div class='mpv-thumbnail mpv-hide'>\n");
        h.push("            <div class='mpv-thumbnail-top'>\n");
        h.push("              <div class='mpv-thumbnail-image'></div>\n");
        h.push("            </div>\n");
        h.push("            <div class='mpv-thumbnail-bottom'>\n");
        h.push("              <div class='mpv-thumbnail-text'></div>\n");
        h.push("              <div class='mpv-thumbnail-time'></div>\n");
        h.push("            </div>\n");
        h.push("          </div>\n"); // END mpv-thumbnail
        // 진행바
        h.push("          <div class='mpv-total-progress mpv-progressbar'></div>\n");
        h.push("          <div class='mpv-buffer-progress mpv-progressbar'></div>\n");
        h.push("          <div class='mpv-over-progress mpv-progressbar'></div>\n");
        h.push("          <div class='mpv-current-progress mpv-progressbar'></div>\n");
        h.push("          <div class='mpv-timestamp-layout'>\n");
        h.push("              <div class='mpv-timestamp-item mpv-ts-bar mpv-progressbar'>\n");
        h.push("                  <div class='mpv-total-timestamp mpv-ts-bar mpv-progressbar'></div>\n");
        h.push("                  <div class='mpv-buffer-timestamp mpv-ts-bar mpv-progressbar'></div>\n");
        h.push("                  <div class='mpv-over-timestamp mpv-ts-bar mpv-progressbar'></div>\n");
        h.push("                  <div class='mpv-current-timestamp mpv-ts-bar mpv-progressbar'></div>\n");
        h.push("                  <div class='mpv-prefix-timestamp mpv-ts-bar mpv-progressbar'><span>&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span></div>\n");
        h.push("              </div>\n");
        h.push("          </div>\n");
        h.push("          <div class='mpv-bookmark-progress mpv-progressbar'></div>\n");
        h.push("          <div class='mpv-progress-handler' title='재생위치 핸들러'></div>\n");
        h.push("          <div class='mpv-repeat-start-marker mpv-repeat-marker' title='시작구간반복 버튼'></div>\n");
        h.push("          <div class='mpv-repeat-end-marker mpv-repeat-marker' title='끝구간반복 버튼'></div>\n");
        // 책갈피 북마크
        h.push("          <div class='mpv-bookmark-text-layout mpv-hide'>\n");
        h.push("            <div class='mpv-bookmark-text'></div>\n");
        h.push("          </div>\n"); // END pv-bookmark-text-layout
        h.push("        </div>\n"); // END mpv-progress-layout
        h.push("      </div>\n\n"); // END mpv-progress

        // 하단 컨트롤 재생바 아래 영역
        h.push("      <div class='mpv-control-bottom mpv-ie8bg'>\n");
        h.push("        <button class='mpv-stop-btn mpv-button mpv-bctrl-btn' title='정지 버튼'></button>\n");
        h.push("        <button class='mpv-previous-btn mpv-button mpv-bctrl-btn' title='이전영상 버튼'></button>\n");
        h.push("        <button class='mpv-toggle-btn mpv-button mpv-bctrl-btn' title='재생/일시중지 토글 버튼'></button>\n");
        h.push("        <button class='mpv-next-btn mpv-button mpv-bctrl-btn' title='다음영상 버튼'></button>\n");
        h.push("        <button class='mpv-repeat-btn mpv-repeat-off mpv-button mpv-bctrl-btn' title='구간반복 버튼'></button>\n");
        h.push("        <span class='mpv-skip-move mpv-repeat-off mpv-button mpv-bctrl-btn' title='MOVE'>MOVE</span>\n");
        h.push("        <button class='mpv-skip-btn mpv-previous-skip-btn mpv-button mpv-bctrl-btn' title='뒤로 스킵 버튼'></button>\n");
        h.push("        <input type='input' class='mpv-skip-input mpv-bctrl-btn' value='' title='앞뒤 스킵 시간(초단위) 입력 상자'/>\n");
        h.push("        <button class='mpv-next-skip-btn mpv-button mpv-bctrl-btn'  title='앞으로 스킵 버튼'></button>\n");

        // 볼륨 영역
        h.push("        <div class='mpv-volume-layout'>\n");
        h.push("          <button class='mpv-mute-toggle-btn mpv-button mpv-bctrl-btn' title='볼륨/음소거 버튼'></button>\n");
        h.push("          <div class='mpv-volume-slider-layout'>\n");
        h.push("            <div class='mpv-volume-slider mpv-volume-ground'>\n");
        h.push("              <div class='mpv-volume-background mpv-volume-ground'>\n");
        h.push("                <div class='mpv-volume-foreground mpv-volume-ground'></div>\n");
        h.push("                <div class='mpv-volume-handler' title='볼륨 핸들러'></div>\n");
        h.push("              </div>\n");
        h.push("            </div>\n");
        h.push("          </div>\n");
        h.push("        </div>\n"); // END mpv-volume-layout

        // 진행 시간 영역
        h.push("        <div class='mpv-time-layout'>\n");
        h.push("          <div class='mpv-currenttime-text mpv-bctrl-btn'>0:00</div>\n");
        h.push("          <div class='mpv-duration-text mpv-bctrl-btn'>0:00</div>\n");
        h.push("        </div>\n");

        // 타임스탬프 제목 영역
        h.push("        <button class='mpv-timestamp-box' title='챕터 보기'>");
        h.push("            <div class='mpv-timestamp-icon mpv-button mpv-bctrl-btn'></div>\n");
        h.push("            <div class='mpv-timestamp-text mpv-button mpv-bctrl-btn'></div>\n");
        h.push("            <div class='mpv-timestamp-after mpv-button mpv-bctrl-btn'></div>\n");
        h.push("        </button>\n");

        // 오른쪽 영역
        h.push("        <button class='mpv-wide-btn mpv-button mpv-bctrl-btn mpv-sel0' title='극장모드 버튼'></button>\n");
        h.push("        <button class='mpv-openlayer-btn mpv-button mpv-bctrl-btn mpv-sel0' title='미니플레이어 버튼'></button>\n");
        h.push("        <button class='mpv-rotate-btn mpv-button mpv-bctrl-btn' title='영상회전 버튼'></button>\n");

        // 설정 영역
        h.push("        <div class='mpv-config-layout mpv-view-layout'>\n");
        h.push("          <div class='mpv-config-btn mpv-button mpv-bctrl-btn' title='설정 버튼'></div>\n");
        h.push("          <div class='mpv-config-menu mpv-view-box mpv-hide'>\n");
        h.push("            <div class='mpv-view-ibox'>\n");
        h.push("              <div class='mpv-config-menu-title'>");
        h.push("                <div class='mpv-config-menu-title-icon mpv-menu-title-icon'></div>");
        h.push("                <div class='mpv-config-menu-title-nm'>설정</div>");
        h.push("                <div class='mpv-view-close-btn mpv-button mpv-menu-close-btn' title='닫기'></div>");
        h.push("              </div>");
        h.push("              <div class='mpv-view-rows'>\n");
        h.push("                <div class='mpv-view-item mpv-view-click'>\n");
        h.push("                  <div class='mpv-view-name mpv-view-ele'></div>\n");
        h.push("                  <div class='mpv-view-value mpv-view-ele'></div>\n");
        h.push("                </div>\n");
        h.push("              </div>\n"); // END mpv-view-rows
        h.push("              <div class='mpv-view-bottom mpv-view-close-btn'>닫기</div>\n");
        h.push("            </div>\n"); // END mpv-view-ibox
        h.push("          </div>\n"); // END mpv-view-box
        h.push("        </div>\n"); // END mpv-config-layout
        h.push("        <button class='mpv-fullscreen-btn mpv-button mpv-bctrl-btn' title='전체화면 버튼'></button>\n");

        // 플레이리스트 영역
        h.push("        <div class='mpv-playlist-layout mpv-view-layout mpv-hide'>\n");
        h.push("          <div class='mpv-playlist-menu-btn mpv-button mpv-bctrl-btn' title='플레이리스트 버튼'></div>\n");
        h.push("          <div class='mpv-playlist-add-btn mpv-button mpv-bctrl-btn' title='미디어 추가 버튼'></div>\n");
        h.push("          <div class='mpv-playlist-menu mpv-view-box mpv-hide'>");
        h.push("            <div class='mpv-view-ibox'>");
        h.push("              <div class='mpv-playlist-menu-title'>");
        h.push("                <div class='mpv-playlist-menu-title-icon mpv-menu-title-icon'></div>");
        h.push("                <div class='mpv-playlist-menu-title-nm'>플레이리스트</div>");
        h.push("                <div class='mpv-view-close-btn mpv-button mpv-menu-close-btn' title='닫기'></div>");
        h.push("                <div class='mpv-playlist-add-btn mpv-button mpv-in-box' title='미디어 추가 버튼'></div>");
        h.push("              </div>");
        h.push("              <div class='mpv-view-rows'>");
        h.push("                <div class='mpv-view-item'>");
        h.push("                  <div class='mpv-view-checked mpv-view-ele'></div>\n");
        h.push("                  <div class='mpv-playlist-menu-nm mpv-menu-nm mpv-view-ele'></div>");
        h.push("                  <div class='mpv-playlist-menu-del-btn mpv-button mpv-menu-del-btn mpv-view-ele' title='삭제'></div>");
        h.push("                </div>");
        h.push("              </div>"); // END mpv-view-rows
        h.push("              <div class='mpv-view-bottom mpv-view-close-btn'>닫기</div>\n");
        h.push("            </div>"); // END mpv-view-ibox
        h.push("          </div>");
        h.push("        </div>\n");   // END mpv-playlist-layout

        // 구간반복 북마크 영역 (repmark)
        h.push("        <div class='mpv-repmark-layout mpv-view-layout mpv-hide'>\n");
        h.push("          <div class='mpv-repmark-menu-btn mpv-button mpv-bctrl-btn' title='구간반복 북마크 목록 버튼'></div>\n");
        h.push("          <div class='mpv-repmark-add-btn mpv-button mpv-bctrl-btn' title='구간반복 북마크 추가 버튼'></div>\n");
        h.push("          <div class='mpv-repmark-menu mpv-view-box mpv-hide'>");
        h.push("            <div class='mpv-view-ibox'>");
        h.push("              <div class='mpv-repmark-menu-title'>");
        h.push("                <div class='mpv-repmark-menu-title-icon mpv-menu-title-icon'></div>");
        h.push("                <div class='mpv-repmark-menu-title-nm'>구간반복 북마크</div>");
        h.push("                <div class='mpv-view-close-btn mpv-button mpv-menu-close-btn' title='닫기'></div>");
        h.push("                <div class='mpv-repmark-add-btn mpv-button mpv-in-box' title='구간반복 북마크 추가 버튼'></div>");
        h.push("              </div>");
        h.push("              <div class='mpv-view-rows'>");
        h.push("                <div class='mpv-view-item'>");
        h.push("                  <div class='mpv-repmark-menu-start mpv-view-ele'></div>");
        h.push("                  <div class='mpv-repmark-menu-end mpv-view-ele'></div>");
        h.push("                  <div class='mpv-repmark-menu-nm  mpv-menu-nm mpv-view-ele'></div>");
        h.push("                  <div class='mpv-repmark-menu-del-btn mpv-button mpv-menu-del-btn mpv-view-ele' title='삭제'></div>");
        h.push("                </div>");
        h.push("              </div>"); // END mpv-view-rows
        h.push("              <div class='mpv-view-bottom mpv-view-close-btn'>닫기</div>\n");
        h.push("            </div>"); // END mpv-view-ibox
        h.push("          </div>");
        h.push("        </div>\n");   // END mpv-repmark-layout

        // 책갈피 북마크 영역 (bookmark)
        h.push("        <div class='mpv-bookmark-layout mpv-view-layout mpv-hide'>\n");
        h.push("          <div class='mpv-bookmark-menu-btn mpv-button mpv-bctrl-btn' title='책갈피 북마크 목록 버튼'></div>\n");
        h.push("          <div class='mpv-bookmark-add-btn mpv-button mpv-bctrl-btn' title='책갈피 북마크 추가 버튼'></div>\n");
        h.push("          <div class='mpv-bookmark-menu mpv-view-box mpv-hide'>");
        h.push("            <div class='mpv-view-ibox'>");
        h.push("              <div class='mpv-bookmark-menu-title'>");
        h.push("                <div class='mpv-bookmark-menu-title-icon mpv-menu-title-icon'></div>");
        h.push("                <div class='mpv-bookmark-menu-title-nm'>책갈피 북마크</div>");
        h.push("                <div class='mpv-view-close-btn mpv-button mpv-menu-close-btn' title='닫기'></div>");
        h.push("                <div class='mpv-bookmark-add-btn mpv-button mpv-in-box' title='책갈피 북마크 추가 버튼'></div>");
        h.push("              </div>");
        h.push("              <div class='mpv-view-rows'>");
        h.push("                <div class='mpv-view-item'>");
        h.push("                  <div class='mpv-bookmark-menu-time mpv-view-ele'></div>");
        h.push("                  <div class='mpv-bookmark-menu-nm mpv-menu-nm mpv-view-ele'></div>");
        h.push("                  <div class='mpv-bookmark-menu-del-btn mpv-button mpv-menu-del-btn mpv-view-ele' title='삭제'></div>");
        h.push("                </div>");
        h.push("              </div>"); // END mpv-view-rows
        h.push("              <div class='mpv-view-bottom mpv-view-close-btn'>닫기</div>\n");
        h.push("            </div>"); // END mpv-view-ibox
        h.push("          </div>");
        h.push("        </div>\n");   // END mpv-bookmark-layout

        // Switch Source 영역
        h.push("        <div class='mpv-switchsource-layout mpv-view-layout'>\n");
        h.push("          <div class='mpv-switchsource-btn mpv-bctrl-btn mpv-bmenu-btn mpv-switchsource-helper mpv-hide' title='플레이어 선택 버튼'></div>\n");
        h.push("          <div class='mpv-switchsource-menu mpv-view-box mpv-hide'>\n");
        h.push("            <div class='mpv-view-ibox'>\n");
        h.push("              <div class='mpv-view-rows'>\n");
        h.push("                <div class='mpv-view-item'>\n");
        h.push("                  <div class='mpv-view-checked mpv-view-ele'></div>\n");
        h.push("                  <div class='mpv-view-text mpv-view-ele'></div>\n");
        h.push("                </div>\n");
        h.push("              </div>\n"); // END mpv-view-rows
        h.push("              <div class='mpv-view-bottom mpv-view-close-btn'>닫기</div>\n");
        h.push("            </div>\n"); // END mpv-view-ibox
        h.push("          </div>\n");
        h.push("        </div>\n"); // END mpv-switchsource-layout

        // 배속 영역
        h.push("        <div class='mpv-rate-layout mpv-view-layout'>\n");
        h.push("          <button class='mpv-rate-down-btn mpv-button mpv-bctrl-btn' title='재생속도 줄이기 버튼'></button>\n");
        h.push("          <div class='mpv-rate-text mpv-bctrl-btn mpv-rate-helper'></div>\n");
        h.push("          <button class='mpv-rate-up-btn mpv-button mpv-bctrl-btn' title='재생속도 높이기 버튼'></button>\n");
        h.push("          <div class='mpv-rate-btn mpv-bctrl-btn mpv-bmenu-btn mpv-rate-helper' title='재생속도 버튼'></div>\n");
        h.push("          <div class='mpv-rate-menu mpv-view-box mpv-hide'>\n");
        h.push("            <div class='mpv-view-ibox'>\n");
        h.push("              <div class='mpv-view-rows'>\n");
        h.push("                <div class='mpv-view-item'>\n");
        h.push("                  <div class='mpv-view-checked mpv-view-ele'></div>\n");
        h.push("                  <div class='mpv-view-text mpv-view-ele'></div>\n");
        h.push("                </div>\n");
        h.push("              </div>\n"); // END mpv-view-rows
        h.push("              <div class='mpv-view-bottom mpv-view-close-btn'>닫기</div>\n");
        h.push("            </div>\n"); // END mpv-view-ibox
        h.push("          </div>\n");
        h.push("        </div>\n"); // END mpv-rate-layout

        // 화질 영역
        h.push("        <div class='mpv-quality-layout mpv-view-layout'>\n");
        h.push("          <div class='mpv-quality-btn mpv-bctrl-btn mpv-bmenu-btn mpv-quality-helper mpv-hide' title='화질 버튼'></div>\n");
        h.push("          <div class='mpv-quality-menu mpv-view-box mpv-hide'>\n");
        h.push("            <div class='mpv-view-ibox'>\n");
        h.push("              <div class='mpv-view-rows'>\n");
        h.push("                <div class='mpv-view-item'>\n");
        h.push("                  <div class='mpv-view-checked mpv-view-ele'></div>\n");
        h.push("                  <div class='mpv-view-text mpv-view-ele'></div>\n");
        h.push("                </div>\n");
        h.push("              </div>\n"); // END mpv-view-rows
        h.push("              <div class='mpv-view-bottom mpv-view-close-btn'>닫기</div>\n");
        h.push("            </div>\n"); // END mpv-view-ibox
        h.push("          </div>\n");
        h.push("        </div>\n"); // END mpv-quality-layout

        // 자막 영역
        h.push("        <div class='mpv-subtitle-layout mpv-view-layout'>\n");
        h.push("          <div class='mpv-subtitle-btn mpv-bctrl-btn mpv-bmenu-btn mpv-subtitle-helper mpv-hide' value='subtitle' title='자막 버튼'></div>\n");
        h.push("          <div class='mpv-subtitle-menu mpv-view-box mpv-hide'>\n");
        h.push("            <div class='mpv-view-ibox'>\n");
        h.push("              <div class='mpv-view-rows'>\n");
        h.push("                <div class='mpv-view-item'>\n");
        h.push("                  <div class='mpv-view-checked mpv-view-ele'></div>\n");
        h.push("                  <div class='mpv-view-text mpv-view-ele'></div>\n");
        h.push("                </div>\n");
        h.push("              </div>\n"); // END mpv-view-rows
        h.push("              <div class='mpv-view-bottom mpv-view-close-btn'>닫기</div>\n");
        h.push("            </div>\n"); // END mpv-view-ibox
        h.push("          </div>\n");
        h.push("        </div>\n"); // END mpv-subtitle-layout

        h.push("      </div>\n\n"); // END mpv-control-bottom
        h.push("    </div>\n"); // END mpv-control
        h.push("  </div>\n");
        // END: mpv-bottom (하단영역)
        ////////////////////////////////////////////////////////////////////

        // 이전/다음 seek (영상 영역 더블탭시 화면에 나타난다.)
        h.push("  <div class='mpv-side-double-tab mpv-zindex'>\n");
        h.push("    <div class='mpv-side-double-tab-image'></div>\n");
        h.push("    <div class='mpv-side-double-tab-text'></div>\n");
        h.push("  </div>\n");

        ////////////////////////////////////////////////////////////////////
        // BEGIN: mpv-foreground
        h.push("  <div class='mpv-foreground mpv-zindex'>\n");
        // 책갈피 북마크 입력 화면
        h.push("    <div class='mpv-bookmark-input-layout mpv-input-layout mpv-view-box mpv-hide'>\n");
        h.push("      <div class='mpv-bookmark-box mpv-input-box mpv-view-ibox'>\n");
        h.push("        <div class='mpv-bookmark-subject mpv-input-subject'>\n");
        h.push("          <div class='mpv-bookmark-subject-icon mpv-input-icon'></div>\n");
        h.push("          <div class='mpv-bookmark-subject-nm'>책갈피 입력</div>\n");
        h.push("        </div>\n");
        h.push("        <div class='mpv-bookmark-contents'>\n");
        h.push("          <div class='mpv-bookmark-title mpv-input-tag-border'>\n");
        h.push("            <div class='mpv-bookmark-title-nm mpv-input-tag-nm'>이름</div>\n");
        h.push("            <input type='input' name='bookmark-title' value='' class='mpv-bookmark-title-input mpv-input-tag'>\n");
        h.push("          </div>\n");
        h.push("          <div class='mpv-bookmark-time mpv-input-time-border'>\n");
        h.push("            <div class='mpv-bookmark-time-nm mpv-input-tag-nm'>시간</div>\n");
        h.push("            <input type='input' name='bookmark-time' value='' class='mpv-bookmark-time-input mpv-input-time'>\n");
        h.push("          </div>\n");
        h.push("        </div>\n");
        h.push("        <div class='mpv-bookmark-confirm-box mpv-input-confirm-box'>\n");
        h.push("          <div class='mpv-bookmark-confirm-btn mpv-input-confirm-btn'>확인</div>\n");
        h.push("          <div class='mpv-bookmark-close-btn mpv-input-close-btn'>닫기</div>\n");
        h.push("        </div>\n");
        h.push("      </div>\n");
        h.push("    </div>\n\n"); // END mpv-bookmark-input-layout

        // 구간반복 북마크 입력 화면
        h.push("    <div class='mpv-repmark-input-layout mpv-input-layout mpv-view-box mpv-hide'>\n");
        h.push("      <div class='mpv-repmark-box mpv-input-box mpv-view-ibox'>\n");
        h.push("        <div class='mpv-repmark-subject mpv-input-subject'>\n");
        h.push("          <div class='mpv-repmark-subject-icon mpv-input-icon'></div>\n");
        h.push("          <div class='mpv-repmark-subject-nm'>구간반복 입력</div>\n");
        h.push("        </div>\n");
        h.push("        <div class='mpv-repmark-contents'>\n");
        h.push("          <div class='mpv-repmark-title mpv-input-tag-border'>\n");
        h.push("            <div class='mpv-repmark-title-nm mpv-input-tag-nm'>이름</div>\n");
        h.push("            <input type='input' name='repmark-title' value='' class='mpv-repmark-title-input mpv-input-tag'>\n");
        h.push("          </div>\n");
        h.push("          <div class='mpv-repmark-start mpv-input-time-border'>\n");
        h.push("            <div class='mpv-repmark-start-nm mpv-input-tag-nm'>시작시간</div>\n");
        h.push("            <input type='input' name='repmark-start' value='' class='mpv-repmark-start-input mpv-input-time'>\n");
        h.push("          </div>\n");
        h.push("          <div class='mpv-repmark-end mpv-input-time-border'>\n");
        h.push("            <div class='mpv-repmark-end-nm mpv-input-tag-nm'>종료시간</div>\n");
        h.push("            <input type='input' name='repmark-end' value='' class='mpv-repmark-end-input mpv-input-time'>\n");
        h.push("          </div>\n");
        h.push("        </div>\n");
        h.push("        <div class='mpv-repmark-confirm-box mpv-input-confirm-box'>\n");
        h.push("          <div class='mpv-repmark-confirm-btn mpv-input-confirm-btn'>확인</div>\n");
        h.push("          <div class='mpv-repmark-close-btn mpv-input-close-btn'>닫기</div>\n");
        h.push("        </div>\n");
        h.push("      </div>\n");
        h.push("    </div>\n\n"); // END mpv-repmark-input-layout

        // 플레이리스트  입력 화면
        h.push("    <div class='mpv-playlist-input-layout mpv-input-layout mpv-view-box mpv-hide'>\n");
        h.push("      <div class='mpv-playlist-box mpv-input-box mpv-view-ibox'>\n");
        h.push("        <div class='mpv-playlist-subject mpv-input-subject'>\n");
        h.push("          <div class='mpv-playlist-subject-icon mpv-input-icon'></div>\n");
        h.push("          <div class='mpv-playlist-subject-nm'>플레이리스트 추가</div>\n");
        h.push("        </div>\n");
        h.push("        <div class='mpv-playlist-contents'>\n");
        h.push("          <div class='mpv-playlist-title mpv-input-tag-border'>\n");
        h.push("            <div class='mpv-playlist-title-nm mpv-input-tag-nm'>이름</div>\n");
        h.push("            <input type='input' name='playlist-title' value='' class='mpv-playlist-title-input mpv-input-tag'>\n");
        h.push("          </div>\n");
        h.push("          <div class='mpv-playlist-src mpv-input-tag-border'>\n");
        h.push("            <div class='mpv-playlist-src-nm mpv-input-tag-nm'>주소</div>\n");
        h.push("            <input type='input' name='playlist-src' value='' class='mpv-playlist-src-input mpv-input-tag'>\n");
        h.push("          </div>\n");
        h.push("          <div class='mpv-playlist-image mpv-input-tag-border'>\n");
        h.push("            <div class='mpv-playlist-image-nm mpv-input-tag-nm'>이미지</div>\n");
        h.push("            <input type='input' name='playlist-image' value='' class='mpv-playlist-image-input mpv-input-tag'>\n");
        h.push("          </div>\n");
        h.push("          <div class='mpv-playlist-text mpv-input-tag-border'>\n");
        h.push("            <div class='mpv-playlist-text-nm mpv-input-tag-nm'>설명</div>\n");
        h.push("            <textarea name='playlist-text' value='' class='mpv-playlist-text-input mpv-input-tag'></textarea>\n");
        h.push("          </div>\n");
        h.push("        </div>\n");
        h.push("        <div class='mpv-playlist-confirm-box mpv-input-confirm-box'>\n");
        h.push("          <div class='mpv-playlist-confirm-btn mpv-input-confirm-btn'>확인</div>\n");
        h.push("          <div class='mpv-playlist-close-btn mpv-input-close-btn'>닫기</div>\n");
        h.push("        </div>\n");
        h.push("      </div>\n");
        h.push("    </div>\n\n"); // END mpv-playlist-input-layout

        // 터치 도움말
        h.push("    <div class='mpv-touch-helper mpv-hide'>\n");
        h.push("      <div class='mpv-touch-name'></div>\n");
        h.push("      <div class='mpv-touch-value'></div>\n");
        h.push("    </div>\n\n");

        h.push("  </div>\n");
        // END: mpv-foreground
        ////////////////////////////////////////////////////////////////////

        // 사이드 더블탭 도움말
        if(!D.b.ie){
            h.push("  <div class='mpv-side-double-tab-helper mpv-hide'><< 왼쪽이나 오른쪽으로 두번 탭하면 10초씩 건너뜁니다. >></div>\n");
        }

        // 채팅 영역
        getHtmlChatResource(param, h);

        // 경고창 영역
        h.push("  <div class='mpv-alert-layer mpv-zindex mpv-hide mpv-ie8bg'>\n");
        h.push("    <div class='mpv-alert-cell'>\n");
        h.push("      <div class='mpv-alert-box mpv-ie8bg'>\n");
        h.push("        <div class='mpv-alert-text'></div>\n");
        h.push("        <div class='mpv-alert-bottom'>\n");
        h.push("          <button class='button ok'>확인</button>\n");
        h.push("        </div>\n");
        h.push("      </div>\n");
        h.push("    </div>\n");
        h.push("  </div>\n");

        // 확인/취소창 영역
        h.push("  <div class='mpv-confirm-layer mpv-zindex mpv-hide mpv-ie8bg'>\n");
        h.push("    <div class='mpv-confirm-cell'>\n");
        h.push("      <div class='mpv-confirm-box mpv-ie8bg'>\n");
        h.push("        <div class='mpv-confirm-text'></div>\n");
        h.push("        <div class='mpv-confirm-bottom'>\n");
        h.push("          <button class='button cancel'>취소</button>\n");
        h.push("          <button class='button ok'>확인</button>\n");
        h.push("        </div>\n");
        h.push("      </div>\n");
        h.push("    </div>\n");
        h.push("  </div>\n");

        // 플래시 플레이어 다운로드 화면
        h.push("  <div class='mpv-flash-layer mpv-zindex mpv-hide mpv-ie8bg'>\n");
        h.push("    <div class='mpv-flash-cell'>\n");
        h.push("      <a href='http://www.adobe.com/go/getflashplayer' target='_blank'>");
        h.push("        <div class='mpv-flash-box mpv-ie8bg'>\n");
        h.push("          <div class='mpv-flash-image'></div>\n");
        h.push("          <div class='mpv-flash-text'>플래시 플레이어가 필요 합니다.</div>");
        h.push("        </div>\n");
        h.push("      </a>");
        h.push("    </div>\n");
        h.push("  </div>\n");

        h.push("</div>\n"); // END mpv-player

        return h.join('');
    }

    function getHtmlChatResource(param, h){
        if(!h){
            h = [];
        }

        h.push("  <div class='mpv-chat mpv-zindex'>\n");
        h.push("    <div class='mpv-chat-top'>\n");
        h.push("      <div class='mpv-chat-title'>\n")
        h.push("        <div class='mpv-chat-title-text'></div>");
        h.push("      </div>\n");
        h.push("      <div class='mpv-chat-menu-icon'></div>\n");
        h.push("    </div>\n");
        h.push("    <div class='mpv-chat-display'>\n");
        h.push("        <div class='mpv-chat-lv1'>\n");
        h.push("           <div class='mpv-chat-lv-message'></div>\n");
        h.push("        </div>\n");
        h.push("        <div class='mpv-chat-row'>\n");
        h.push("          <div class='mpv-chat-box'>\n");
        h.push("              <div class='mpv-chat-icon'></div>\n");
        h.push("              <div class='mpv-chat-line'>\n");
        h.push("                <div class='mpv-chat-user'></div>\n");
        h.push("                <div class='mpv-chat-time'></div>\n");
        h.push("              </div>");
        h.push("              <div class='mpv-chat-message'></div>\n");
        h.push("          </div>\n");
        h.push("        </div>\n");
        h.push("    </div>\n");
        h.push("    <div class='mpv-chat-bottom'>\n");
        h.push("        <form class='mpv-chat-form'>\n");
        h.push("            <input type='input' class='mpv-chat-input' placeholder='메세지 입력하기...' />\n");
        h.push("            <div class='mpv-chat-input-btn'></div>\n");
        h.push("        </form>\n");
        h.push("    </div>\n");

        h.push("    <div class='mpv-chat-menu-layer mpv-hide'>\n");
        h.push("        <div class='mpv-chat-menu-title'>설정</div>\n");
        h.push("        <div class='mpv-chat-menu-close-btn' title='닫기'></div>\n");
        h.push("        <div class='mpv-chat-menu-lbtn mpv-chat-menu-update-nick-btn'>대화명 변경</div>\n");
        h.push("        <div class='mpv-chat-menu-lbtn mpv-chat-menu-update-face-btn'>대표 이미지 변경</div>\n");
        h.push("    </div>\n");

        h.push("    <div class='mpv-chat-update-nick-layer mpv-hide'>\n");
        h.push("      <form class='mpv-chat-update-nick-form'>\n");
        h.push("        <div class='mpv-chat-update-nick-text'>\n");
        h.push("          닉네임을 입력하세요.\n");
        h.push("        </div>\n");
        h.push("        <div class='mpv-chat-update-nick-input-layer'>\n");
        h.push("          <input type='input' class='mpv-chat-update-nick-input' placeholder='닉네임 입력하기...' />\n");
        h.push("          <br><button class='mpv-chat-update-nick-btn'>확인</button>\n");
        h.push("          <button class='mpv-chat-update-nick-cancel-btn'>닫기</button>\n");
        h.push("        </div>\n");
        h.push("      </form>\n");
        h.push("    </div>\n");

        h.push("    <div class='mpv-chat-update-face-layer mpv-hide'>\n");
        h.push("        <div class='mpv-chat-update-face-text'>\n");
        h.push("          대표 이미지를 선택하세요.\n");
        h.push("        </div>\n");
        h.push("        <div class='mpv-chat-update-face-rows'>\n");
        h.push("          <div class='mpv-chat-update-face-row'>\n");
        h.push("            <div class='mpv-chat-update-face-image'></div>\n");
        h.push("          </div>\n");
        h.push("        </div>\n");
        h.push("        <div class='mpv-chat-update-face-input-layer'>\n");
        h.push("          <div>\n");
        h.push("            <button class='mpv-chat-update-face-btn-ok'>확인</button>\n");
        h.push("            <button class='mpv-chat-update-face-btn-cancel'>닫기</button>\n");
        h.push("          </div>\n");
        h.push("        </div>\n");
        h.push("    </div>\n");

        h.push("  </div>\n");

        return h.join('');
    }

    window.createPopupMediaPlayer = function(param){
        if(!param){
            param = {};
        }

        var isAutoPopup = param.attr && param.attr.autoPopup;
        var aboutBlank = 'about:blank';
        var cwp = Media.currentWindowPosition();
        var cws = Media.currentWindowSize();
        var sp = Media.getSavedWindowPosition();
        var ss = Media.getSavedWindowSize();
        var isSP = (sp.x || sp.x===0) && (sp.y || sp.y===0) ? true : false;
        var isSS = ss.width && ss.height ? true : false;

        var pwidth = (isAutoPopup && isSS) ? ss.width : (param.width ? param.width : cws.width);
        var pheight = (isAutoPopup && isSS) ? ss.height : (param.height ? param.height : Math.floor((cws.width*3)/4));
        var pleft = (isAutoPopup && isSP) ? sp.x : (param.left ? param.left : cwp.x);
        var ptop = (isAutoPopup && isSP) ? sp.y : (param.top ? param.top : cwp.y);

        var url = param.url ? param.url : aboutBlank;
        var winName = !param.winName ? Media.windowName() : param.winName=='new' ? '' : param.winName;
        var options = ""
            + "width="+pwidth
            + ", height="+pheight
            + ", left="+pleft
            + ", top="+ptop
            + ", scrollbars=no"
            + ", menubar=no"
            + ", location=no"
            + ", status=no"
            + ", resizable="+param.resizable?'yes':'no'
            + "";

            // menubar=no,location=no,resizable=yes,scrollbars=no,status=no
        var popup = window.open(url, winName, options);
        if(url!==aboutBlank){
            return popup;
        }

        popup.__ZONE_MEDIA_POPUP_PLYAER = null;
        popup.__ZONE_MEDIA_POPUP_PLYAER_SOURCE = param.source ? param.source : null;
        popup.__ZONE_MEDIA_POPUP_PLYAER_ATTRIBUTE = param.attr ? param.attr : {autoplay: true};
        popup.__ZONE_MEDIA_POPUP_PLYAER_CALLBACK = param.callback ? param.callback : function(e){};

        var minVersion = Media.version;
        var path = param.path ? param.path : '';
        var minjspath = param.minpath ? param.minpath : '/js/mediaplayer-'+minVersion+'.min.js?v=2';
        var jspath = param.jspath ? param.jspath : '/skin/catvod/catvod.js?v=2';
        var csspath = param.csspath ? param.csspath : '/skin/catvod/catvod.css?v=2';

        var h = [];
        h.push("<html>\n");
        h.push("<head>\n");
        h.push("    <meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>\n");
        h.push("    <meta http-equiv='Pragma' content='no-cache'/>\n");
        h.push("    <meta http-equiv='Cache-Control' content='no-cache'/>\n");
        h.push("    <meta http-equiv='Expires' content='-1'/>\n");
        h.push("    <meta name='viewport' content='width=device-width, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0'>\n");
        h.push("    <script type='text/javascript' charset='utf-8' src='"+path+minjspath+"'></script>\n");
        h.push("    <script type='text/javascript' charset='utf-8' src='"+path+jspath+"'></script>\n");
        h.push("    <link rel='stylesheet' href='"+path+csspath+"'>\n");
        h.push("<style>\n");
        h.push("    * { margin: 0px 0px; padding: 0px 0px; }\n");
        h.push("    html, body { width: 100%; height: 100%; overscroll-behavior: contain; overflow: hidden; }\n");
        h.push("</style>\n");
        h.push("</head>\n");
        h.push("<body>\n");
        h.push("    <div id='mediaplayer'></div>\n");
        h.push("<script>\n");
        h.push("    window.__ZONE_MEDIA_POPUP_PLYAER = window.createMediaPlayer('#mediaplayer', window.__ZONE_MEDIA_POPUP_PLYAER_SOURCE, window.__ZONE_MEDIA_POPUP_PLYAER_ATTRIBUTE, window.__ZONE_MEDIA_POPUP_PLYAER_CALLBACK);\n");
        h.push("</script>\n");
        h.push("</body>\n");
        h.push("</html>\n");
        popup.document.write(h.join(''));

        return popup;
    };

})();
