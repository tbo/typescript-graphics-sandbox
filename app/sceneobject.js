var SceneObject = (function () {
    function SceneObject() {
        this.scene = Scene.getInstance();
    }
    SceneObject.prototype.show = function () {
        this.scene.add(this);
    };
    SceneObject.prototype.setPosition = function (x, y) {
        this.obj.position.x = x;
        this.obj.position.z = y;
    };
    SceneObject.prototype.move = function (x, y) {
        this.obj.position.x += x;
        this.obj.position.z += y;
    };
    SceneObject.prototype.setRotation = function (rot) {
        this.obj.rotation.y = rot;
    };
    return SceneObject;
})();
//@ sourceMappingURL=sceneobject.js.map
