var Renderer = (function () {
    function Renderer() {
        this.tickListener = [];
        var tickListener = this.tickListener;
        animate();
function animate(delta) {
            if (typeof delta === "undefined") { delta = 0; }
            var raf = requestAnimationFrame;
            raf(animate);
            for(var i = tickListener.length - 1; i >= 0; i--) {
                tickListener[i](delta);
            }
        }
    }
    Renderer.prototype.registerTickListener = function (callback) {
        this.tickListener.push(callback);
    };
    return Renderer;
})();
//@ sourceMappingURL=renderer.js.map
