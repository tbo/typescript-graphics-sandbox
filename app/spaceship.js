var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var Spaceship = (function (_super) {
    __extends(Spaceship, _super);
    function Spaceship() {
        _super.call(this);
        this.obj = this.scene.renderer.createPolygon([
            [
                4, 
                53
            ], 
            [
                10, 
                60
            ], 
            [
                11, 
                67
            ], 
            [
                15, 
                67
            ], 
            [
                35, 
                53
            ], 
            [
                35, 
                23
            ], 
            [
                18, 
                -7
            ], 
            [
                6, 
                -64
            ], 
            [
                3, 
                -67
            ], 
            [
                -3, 
                -67
            ], 
            [
                -6, 
                -64
            ], 
            [
                -18, 
                -7
            ], 
            [
                -35, 
                23
            ], 
            [
                -35, 
                53
            ], 
            [
                -15, 
                67
            ], 
            [
                -11, 
                67
            ], 
            [
                -10, 
                60
            ], 
            [
                -4, 
                53
            ]
        ], 16711680);
    }
    Spaceship.prototype.getPosition = function () {
        return this.obj.position;
    };
    return Spaceship;
})(SceneObject);
//@ sourceMappingURL=spaceship.js.map
