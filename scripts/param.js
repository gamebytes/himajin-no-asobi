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
    "se_voice": "sounds/voice.m4a",

    "bgm": "sounds/bgm.mp3",
};


var UI_DATA = {
    title: {
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
                name: "bg",
                type: "Sprite",
                image: "img_sky",
                originX: 0,
                originY: 0,
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT,
            },

            {
                name: "ui",
                type: "tm.display.CanvasElement",
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
                        text:"いまは 98",
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
};
