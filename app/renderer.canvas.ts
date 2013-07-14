///<reference path='../libs/three.d.ts'/>
///<reference path='renderer.ts'/>
///<reference path='renderer.threejs.ts'/>
class RendererCanvas extends RendererThreeJs implements RendererInterface {

    constructor()
    {
        super();
    }

    public setRenderer() {
        this.renderer = new THREE.CanvasRenderer();
    }
}