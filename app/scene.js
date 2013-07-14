var Scene = (function () {
    function Scene(renderer) {
        this.objects = [];
        this.renderer = renderer;
    }
    Scene._instance = null;
    Scene.getInstance = function getInstance(renderer) {
        if(Scene._instance == null) {
            if(renderer == null) {
                renderer = new RendererThreeJs();
            }
            Scene._instance = new Scene(renderer);
        }
        return Scene._instance;
    }
    Scene.prototype.add = function (o) {
        this.renderer.show(o.obj);
        this.objects.push(o);
    };
    Scene.prototype.move = function (x, y, z) {
        if (typeof z === "undefined") { z = 0; }
        for(var i = 0, len = this.objects.length; i < len; i++) {
            this.objects[i].move(x, y);
        }
    };
    Scene.prototype.focus = function (o) {
        this.renderer.focus(o.obj);
    };
    Scene.prototype.setGrid = function (grid) {
        this.grid = grid;
    };
    Scene.prototype.updateGrid = function (x, y) {
        if(this.grid != null) {
            this.grid.move(x, y);
        }
    };
    return Scene;
})();
//@ sourceMappingURL=scene.js.map
