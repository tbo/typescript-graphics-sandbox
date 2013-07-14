var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var RendererCanvas = (function (_super) {
    __extends(RendererCanvas, _super);
    function RendererCanvas() {
        _super.call(this);
    }
    RendererCanvas.prototype.setRenderer = function () {
        this.renderer = new THREE.CanvasRenderer();
    };
    return RendererCanvas;
})(RendererThreeJs);
//@ sourceMappingURL=renderer.canvas.js.map
