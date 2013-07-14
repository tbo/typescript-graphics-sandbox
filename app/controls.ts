///<reference path='renderer.canvas.ts'/>
///<reference path='renderer.webgl.ts'/>
///<reference path='renderer.ts'/>
///<reference path='scene.ts'/>
///<reference path='spaceship.ts'/>
class Controls {
    private _turnFactor: number = 0.0005;
    private scene: Scene = Scene.getInstance();
    private model: SceneObject;

    constructor(model: SceneObject) {
        var that = this;
        this.scene.focus(model);
        this.model = model;
        var accelerate: bool = false
        var turnLeft: bool = false
        var decelerate: bool = false
        var turnRight: bool = false

        function onKey(v) {
            return function ( event ) {
                //event.preventDefault();
                switch ( event.keyCode ) {
                    case 38: /*up*/
                    case 87: /*W*/ accelerate = v; break;

                    case 37: /*left*/
                    case 65: /*A*/ turnLeft = v; break;

                    case 40: /*down*/
                    case 83: /*S*/ decelerate = v; break;

                    case 39: /*right*/
                    case 68: /*D*/ turnRight = v; break;
                }
            };
        }

        document.addEventListener( 'keydown', onKey(true), false );
        document.addEventListener( 'keyup', onKey(false), false );

        var lastFrame: number = 0;
        var rotation: number = 0;
        var speed: number = 0;
        this.scene.renderer.registerTickListener(function (timestamp: number) {
            var delta: number = timestamp - lastFrame;
            var turn: number = delta*that._turnFactor
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
            } else if(decelerate) {
                speed -= deceleration * delta;
                if(speed < 0) {
                    speed = 0;
                }
            }
            if(speed > 0) {
                var rot = rotation;
                var yChange = speed*delta*-0.001*Math.cos(rot);
                var xChange = speed*delta*-0.001*Math.sin(rot);
                that.scene.updateGrid(xChange,yChange);
                that.model.move(xChange,yChange);
            }
            that.scene.focus(model);
        });
        return this;
    }
};