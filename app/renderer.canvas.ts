///<reference path='../libs/three.d.ts'/>
///<reference path='renderer.ts'/>
///<reference path='renderer.webgl.ts'/>
class RendererCanvas extends RendererWebGL implements RendererInterface {

    constructor()
    {
        super();
    }

    public setRenderer() {
        this.renderer = new THREE.CanvasRenderer();
    }
}