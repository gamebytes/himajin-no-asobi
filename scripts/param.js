/*
 * param.js
 */


/*
 * param
 */
var FRAME_RATE      = 30;
var SCREEN_WIDTH    = 480;
var SCREEN_HEIGHT   = 720;
var SCREEN_CENTER_X = SCREEN_WIDTH/2;
var SCREEN_CENTER_Y = SCREEN_HEIGHT/2;
var BOARD_WIDTH     = 460;
var BOARD_HEIGHT    = 460;
var PIECE_X_NUM     = 10;
var PIECE_Y_NUM     = 10;
var PIECE_NUM       = PIECE_X_NUM*PIECE_Y_NUM;
/*
var OFFSET_X        = 25;
var OFFSET_Y        = 25;
var PIECE_WIDTH     = (SCREEN_WIDTH-(OFFSET_X*2))/PIECE_X_NUM;
var PIECE_HEIGHT    = (SCREEN_WIDTH-(OFFSET_X*2))/PIECE_X_NUM;
*/

var OFFSET_X        = (SCREEN_WIDTH-BOARD_WIDTH)/2;
var OFFSET_Y        = 120;
var PIECE_WIDTH     = BOARD_WIDTH / PIECE_X_NUM;
var PIECE_HEIGHT    = BOARD_HEIGHT / PIECE_Y_NUM;



var ASSETS = {
    "img_hiiman": "images/hiiman.png",
    "img_logo": "images/logo.png",
    "img_piece": "images/piece.png",
    "img_sky": "images/sky.png",
    "img_board": "images/board.png",
    
    "se_start": "sounds/start.mp3",
    // "se_pinpon": "sounds/pinpon.wav",
    "se_pinpon": "sounds/pipon.mp3",
    // "se_boo": "sounds/boo.wav",
    "se_boo": "sounds/ponpon.mp3",

    "se_voice_title": "sounds/voice_title.m4a",
    "se_voice_one": "sounds/voice_one.m4a",
    "se_voice_two": "sounds/voice_two.m4a",
    "se_voice_three": "sounds/voice_three.m4a",
    "se_voice_start": "sounds/voice_start.m4a",
    "se_voice_clear": "sounds/voice_clear.m4a",

    "se_voice_msg00": "sounds/voice/msg00.m4a",
    "se_voice_msg01": "sounds/voice/msg01.m4a",
    "se_voice_msg02": "sounds/voice/msg02.m4a",
    "se_voice_msg03": "sounds/voice/msg03.m4a",

    "bgm": "sounds/bgm.mp3",
};


var UI_DATA = {
    root: {
        children: [
            {
                name: "bg",
                type: "Sprite",
                image: "img_sky",
                originX: 0,
                originY: 0,
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT,
            },
        ]
    },
    title: {
        children: [
            {
                name: "logo",
                type: "Sprite",
                image: "img_logo",
                x: SCREEN_CENTER_X,
                y: 100,
                width: 512,
                height: 128,
                scaleX: 0.9,
                scaleY: 0.9,
            },
            {
                name: "board",
                type: "Sprite",
                image: "img_board",
                x: 130,
                y: 350,
                width: 560,
                height: 560,
                rotation: 25,
                scaleX: 0.5,
                scaleY: 0.5,
            },
            {
                name: "hiiman",
                type: "Sprite",
                init: ["img_hiiman"],
                x: 330,
                y: 550,
            },
            {
                type: "Label",
                name: "startLabel",
                x:SCREEN_CENTER_X,
                y:600,
                width:SCREEN_WIDTH,
                text:"タッチで開始",
                align:"center",
                fillStyle: "#222",
                shadowBlur: 2,
                shadowColor: "white",
                fontSize:54,
                fontFamily: "KodomoRounded",
            },
        ]
    },
    main: {
        children: [
            {
                name: "ui",
                type: "tm.display.CanvasElement",
                visible: false,
                alpha: 0,
                children: [
                    {
                        name: "hiiman",
                        type: "Sprite",
                        init: ["img_hiiman"],
                        x: 400,
                        y: 670,
                        scaleX: 0.3, scaleY: 0.3,
                    },

                    {
                        type: "tm.display.RoundRectangleShape",
                        init: [370, 80, {
                            fillStyle: "white",
                            strokeStyle: "black",
                            lineWidth: 4,
                        }],
                        x: SCREEN_CENTER_X,
                        y: 60,
                    },
                    {
                        type: "Label",
                        name: "timeStrLabel",
                        x:SCREEN_CENTER_X - 30,
                        y:60,
                        width:SCREEN_WIDTH,
                        text:"タイム",
                        align:"right",
                        baseline: "middle",
                        fillStyle: "#222",
                        fontSize:46,
                        border: true,
                        shadowBlur: 2,
                        shadowColor: "white",
                        fontFamily: "KodomoRounded",
                    },
                    {
                        type: "Label",
                        name: "timeLabel",
                        x:SCREEN_CENTER_X+0,
                        y:60,
                        width:SCREEN_WIDTH,
                        text:"10.98",
                        align:"left",
                        baseline: "middle",
                        fillStyle: "#222",
                        fontSize:46,
                        border: true,
                        shadowBlur: 2,
                        shadowColor: "white",
                        fontFamily: "KodomoRounded",
                    },

                    {
                        type: "tm.display.RoundRectangleShape",
                        init: [270, 80, {
                            fillStyle: "white",
                            strokeStyle: "black",
                            lineWidth: 4,
                        }],
                        x: 150,
                        y: 650,
                    },
                    {
                        type: "Label",
                        name: "numberLabel",
                        x:150,
                        y:650,
                        width:SCREEN_WIDTH,
                        text:"いまは 1",
                        align:"center",
                        baseline: "middle",
                        fillStyle: "#222",
                        fontSize:46,
                        border: true,
                        shadowBlur: 2,
                        shadowColor: "white",
                        fontFamily: "KodomoRounded",
                    },
                ],
            },
        ]
    },
    clear: {
        children: {
            "bg": {
                type: "tm.display.RectangleShape",
                init: [SCREEN_WIDTH, SCREEN_HEIGHT, {
                    fillStyle: "rgba(255, 255, 255, 0.5)",
                    strokeStyle: "transparent",
                    lineWidth: 4,
                }],
                x: SCREEN_CENTER_X,
                y: SCREEN_CENTER_Y,
            },
            "clear": {
                type: "Label",
                name: "timeStrLabel",
                x:SCREEN_CENTER_X,
                y:SCREEN_CENTER_Y,
                text:"クリアー",
                fillStyle: "#222",
                fontSize:128,
                border: true,
                shadowBlur: 2,
                shadowColor: "white",
                fontFamily: "KodomoRounded",
            },
        }
    },
    result: {
        children: {
            "bg": {
                type: "tm.display.RoundRectangleShape",
                init: [370, 400, {
                    fillStyle: "white",
                    strokeStyle: "black",
                    lineWidth: 4,
                }],
                x: SCREEN_CENTER_X,
                y: SCREEN_CENTER_Y,
            },
            timeLabel: {
                type: "Label",
                x:SCREEN_CENTER_X,
                y:210,
                width:SCREEN_WIDTH,
                text:"タイム\n12.222",
                fillStyle: "#222",
                fontSize:42,
                border: true,
                shadowBlur: 2,
                shadowColor: "white",
                fontFamily: "KodomoRounded",
            },
            messageLabel: {
                type: "Label",
                x:SCREEN_CENTER_X,
                y:320,
                width:SCREEN_WIDTH,
                text:"ねぇねぇ\nボーッとパソコンさわって\nすぎてく一日ってどんな\nかんじ？",
                fillStyle: "#222",
                fontSize:26,
                fontFamily: "KodomoRounded",
            },

            tweetButton: {
                type: "tm.ui.FlatButton",
                init: [{
                    width: 140,
                    height: 60,
                    bgColor: "hsl(180, 70%, 70%)",
                    text: "ついーと",
                    fontSize: 30,
                    fontFamily: "KodomoRounded",
                }],
                x: SCREEN_CENTER_X-80,
                y: 500,
            },
            backButton: {
                type: "tm.ui.FlatButton",
                init: [{
                    width: 140,
                    height: 60,
                    bgColor: "hsl(240, 70%, 70%)",
                    text: "もどる",
                    fontSize: 30,
                    fontFamily: "KodomoRounded",
                }],
                x: SCREEN_CENTER_X+80,
                y: 500,
            },
        },
    }
};


var MESSAGE_LIST = [
    {
        text: "ねぇねぇ\nお仕事もお勉強もせずに\nゲームしてるだけで\nいいんだね",
        voice: "se_voice_msg00",
    },
    {
        text: "ねぇねぇ\nなんでおにいちゃんは\nずっと部屋から\nでてこないのかな",
        voice: "se_voice_msg01",
    },
    {
        text: "ねぇねぇ\n知ってた？時間って\nむげんじゃないんだよ",
        voice: "se_voice_msg02",
    },
    {
        text: "ねぇねぇ\nボーッとパソコンさわって\nすぎてく一日ってどんな\nかんじ？",
        voice: "se_voice_msg03",
    },
];


















