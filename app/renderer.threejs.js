var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var RendererThreeJs = (function (_super) {
    __extends(RendererThreeJs, _super);
    function RendererThreeJs() {
        _super.call(this);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 80000);
        this.camera.position.y = 1000;
        this.camera.position.x = 1000;
        this.setRenderer();
        this.controls = new THREE.EditorControls(this.camera);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        var that = this;
        window.onresize = function (event) {
            that.renderer.setSize(window.innerWidth, window.innerHeight);
            that.camera.aspect = window.innerWidth / window.innerHeight;
            that.camera.updateProjectionMatrix();
        };
        document.body.appendChild(this.renderer.domElement);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.registerTickListener(function () {
            that.renderer.render(that.scene, that.camera);
        });
    }
    RendererThreeJs.prototype.setRenderer = function () {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });
    };
    RendererThreeJs.prototype.createPolygon = function (p, color) {
        if (typeof color === "undefined") { color = 16777215; }
        var g = new THREE.Geometry();
        var len = p.length;
        for(var i = 0; i < len; i++) {
            g.vertices.push(new THREE.Vector3(p[i][0], 1, p[i][1]));
        }
        g.vertices.push(new THREE.Vector3(p[0][0], 1, p[0][1]));
        var material = new THREE.LineBasicMaterial({
            color: color
        });
        var obj = new THREE.Line(g, material);
        return obj;
    };
    RendererThreeJs.prototype.focus = function (o) {
        this.controls.focus(o);
    };
    RendererThreeJs.prototype.show = function (obj) {
        this.scene.add(obj);
    };
    return RendererThreeJs;
})(Renderer);
//@ sourceMappingURL=renderer.threejs.js.map
