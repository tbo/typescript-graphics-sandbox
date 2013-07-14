var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var Asteroid = (function (_super) {
    __extends(Asteroid, _super);
    function Asteroid() {
        _super.call(this);
        this.obj = this.scene.renderer.createPolygon([
            [
                -50, 
                -35
            ], 
            [
                10, 
                -55
            ], 
            [
                50, 
                -5
            ], 
            [
                40, 
                45
            ], 
            [
                10, 
                55
            ], 
            [
                -40, 
                55
            ]
        ]);
    }
    return Asteroid;
})(SceneObject);
//@ sourceMappingURL=asteroid.js.map
