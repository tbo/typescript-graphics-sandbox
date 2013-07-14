class Renderer {
    public tickListener: any[] = [];

    constructor() {
        var tickListener = this.tickListener;
        animate();
        function animate(delta? = 0) {
            // Webstorm Hack
            var raf = requestAnimationFrame;
            raf( animate );
            for(var i: number = tickListener.length-1; i >= 0; i--) {
                tickListener[i](delta);
            }
        }
    }

    public registerTickListener(callback: any) {
        this.tickListener.push(callback);
    }
}

interface RendererInterface {
    registerTickListener(handler);
    createPolygon(p: number[][], color?);
    focus(obj);
    show(obj);
}

