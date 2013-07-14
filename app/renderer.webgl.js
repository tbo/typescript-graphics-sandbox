var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var RendererWebGL = (function (_super) {
    __extends(RendererWebGL, _super);
    function RendererWebGL() {
        _super.call(this);
        this.scene.fog = this.scene.fog = new THREE.Fog(0, 200, 5000);
    }
    return RendererWebGL;
})(RendererThreeJs);
//@ sourceMappingURL=renderer.webgl.js.map
