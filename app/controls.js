var Controls = (function () {
    function Controls(model) {
        this._turnFactor = 0.0005;
        this.scene = Scene.getInstance();
        var that = this;
        this.scene.focus(model);
        this.model = model;
        var accelerate = false;
        var turnLeft = false;
        var decelerate = false;
        var turnRight = false;
function onKey(v) {
            return function (event) {
                switch(event.keyCode) {
                    case 38:
                    case 87: {
                        accelerate = v;
                        break;

                    }
                    case 37:
                    case 65: {
                        turnLeft = v;
                        break;

                    }
                    case 40:
                    case 83: {
                        decelerate = v;
                        break;

                    }
                    case 39:
                    case 68: {
                        turnRight = v;
                        break;

                    }
                }
            }
        }
        document.addEventListener('keydown', onKey(true), false);
        document.addEventListener('keyup', onKey(false), false);
        var lastFrame = 0;
        var rotation = 0;
        var speed = 0;
        this.scene.renderer.registerTickListener(function (timestamp) {
            var delta = timestamp - lastFrame;
            var turn = delta * that._turnFactor;
            lastFrame = timestamp;
            if(turnRight) {
                rotation -= turn;
            }
            if(turnLeft) {
                rotation += turn;
            }
            model.setRotation(rotation);
            var acceleration = 0.04;
            var deceleration = 0.05;
            if(accelerate) {
                speed += acceleration * delta;
                if(speed > 100) {
                    speed = 100;
                }
            } else {
                if(decelerate) {
                    speed -= deceleration * delta;
                    if(speed < 0) {
                        speed = 0;
                    }
                }
            }
            if(speed > 0) {
                var rot = rotation;
                var yChange = speed * delta * -0.001 * Math.cos(rot);
                var xChange = speed * delta * -0.001 * Math.sin(rot);
                that.scene.updateGrid(xChange, yChange);
                that.model.move(xChange, yChange);
            }
            that.scene.focus(model);
        });
        return this;
    }
    return Controls;
})();
; ;
//@ sourceMappingURL=controls.js.map
