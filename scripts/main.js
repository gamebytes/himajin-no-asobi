/*
 * main.js
 */


/*
 * global
 */
var app = null;



/*
 * main
 */
tm.main(function() {
    app = tm.display.CanvasApp("#world");
    app.fps = FRAME_RATE;
    app.resize(SCREEN_WIDTH, SCREEN_HEIGHT);
    app.fitWindow();
    app.enableStats();
    app.fps = 30;
    
    var loading = tm.ui.LoadingScene({
        assets: ASSETS,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    });
    loading.onload = function() {
        // タイトルシーン生成
        var titleScene = MainScene();
        var titleScene = TitleScene();
        app.replaceScene(titleScene);
    };
    app.replaceScene(loading);
    
    
    app.run();
});



/*
 * タイトルシーン
 */
tm.define("TitleScene", {
    superClass: tm.app.Scene,
    
    init: function() {
        this.superInit();
        
        this.fromJSON(UI_DATA.title);

        this.disable();
        
        var p = this.board.position;
        this.board.tweener
            .set({x:p.x-400, y:p.y})
            .to({x:p.x, y:p.y}, 1000);
        var p = this.hiiman.position;
        this.hiiman.tweener
            .set({x:p.x+400, y:p.y})
            .wait(1000)
            .to({x:p.x, y:p.y}, 1000);
        var p = this.logo.position;
        this.logo.tweener
            .set({x:p.x, y:p.y-150})
            .wait(2000)
            .to({x:p.x, y:p.y}, 1000, "easeOutBounce")
            .wait(200)
            .call(function() {
                tm.asset.Manager.get("se_voice").clone().play();
            })
            .wait(3000)
            .call(function() {
                this.enable();
            }.bind(this));
    },

    disable: function() {
        this.startLabel.visible = false;
    },

    enable: function() {
        tm.asset.Manager.get("bgm").setLoop(true).play();

        this.startLabel.visible = true;
        this.startLabel.tweener
            .set({alpha:0.5}).fadeIn(1000).setLoop(true);

        // ゲーム開始
        this.onpointingend = function() {
            tm.asset.Manager.get("se_start").play();

            this.board.tweener.clear().moveBy(-500, 0);
            this.hiiman.tweener.clear().moveBy(+500, 0);
            this.logo.tweener.clear().moveBy(0, -150);
            
            this.timeline.call(function() {
                app.replaceScene(MainScene());
            }.bind(this), 1000);

            this.startLabel.visible = false;
            this.onpointingend = null;
        };
    },
});



/*
 * メインシーン
 */
var MainScene = tm.createClass({
    superClass: tm.app.Scene,
    
    init: function() {
        this.superInit();
        
        this.fromJSON(UI_DATA.main);
        
        this.currentIndex = 1;
        
        
        // ピース生成
        var pieceList = [];
        var self = this;
        this.pieceGroup = tm.display.CanvasElement().addChildTo(this);
        for (var i=0; i<PIECE_NUM; ++i) {
            var p = Piece(i+1);
            
            // タッチ処理
            p.ontouchstart = function() {
                if (this.number == self.currentIndex) {
                    self.currentIndex += 1;
                    
                    this.disable();
                    
                    tm.asset.Manager.get("se_pinpon").clone().play();
                }
                else {
                    tm.asset.Manager.get("se_boo").clone().play();
                }
            }
            
            pieceList.push(p);
            this.pieceGroup.addChild(p);
        }
        
        this.pieceGroup.y = -700;
        this.pieceGroup.tweener.wait(600).moveBy(0, 700, 2000, "easeOutBounce");
        
        // シャッフル
        pieceList.shuffle();
        
        // 位置調整
        for (var i=0; i<PIECE_NUM; ++i) {
            var p = pieceList[i];
            
            p.x = i%PIECE_X_NUM * PIECE_WIDTH + OFFSET_X + 1;
            p.y = Math.floor(i/PIECE_X_NUM) * PIECE_HEIGHT + OFFSET_Y + 1;
            
            p.x += PIECE_WIDTH/2;
            p.y += PIECE_HEIGHT/2;
        }

        this.startTime = new Date();
    },

    update: function() {
        var time = ((app.frame/app.fps)*1000)|0;
        var time = (((new Date()) - this.startTime)/10)|0;
        var timeStr = time.toString().replace(/(\d)(?=(\d\d)+$)/g, "$1.");
        this.ui.timeLabel.text = timeStr;
    }
});



/*
 * ピース
 */
var Piece = tm.createClass({
    superClass: tm.app.Shape,
    
    init: function(n) {
        this.superInit(PIECE_WIDTH-2, PIECE_HEIGHT-2);
        
        this.number = n;
        this.enable = true;
        
        // var c = this.canvas;
        // c.clearColor("hsl(60, 90%, 90%)");
        // c.setTransformCenter();
        // c.textAlign = "center";
        // c.textBaseline = "middle";
        // c.fillText(n, 0, 0);

        this._render("hsl(60, 90%, 90%)");
        
//        c.strokeRect(2, 2, PIECE_WIDTH-6, PIECE_HEIGHT-6);
        
        // ラベル
        this.label = tm.app.Label(n).addChildTo(this);
        this.label.width = this.width;
        this.label.height = this.height;
        this.label.fillStyle = "black";
        this.label.fontSize = 20;
        this.label.align = "center";
        this.label.baseline = "middle";
        this.label.fontFamily = "KodomoRounded";
        this.label.visible = false;
        
        // タッチを有効化
        this.setInteractive(true);
        this.setBoundingType("rect");
    },

    _render: function(color) {
        var c = this.canvas;

        c.clearColor(color);
        c.setTransformCenter();
        c.font = "22px KodomoRounded";
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.fillText(this.number, 0, 0);
    },
    
    disable: function() {
        var c = this.canvas;
        c.clearColor("gray");
        this.enable = false;
    },
    
    onpointingover: function() {
        if (!this.enable) return ;
        this._render("hsl(60, 100%, 70%)");
    },
    
    onpointingout: function() {
        if (!this.enable) return ;
        this._render("hsl(60, 100%, 90%)");
    }
});















