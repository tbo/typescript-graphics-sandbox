///<reference path='../libs/three.d.ts'/>
///<reference path='renderer.ts'/>
///<reference path='renderer.threejs.ts'/>
class RendererWebGL extends RendererThreeJs implements RendererInterface {

    constructor()
    {
        super();
        this.scene.fog = this.scene.fog = new THREE.Fog( 0x000000, 200, 5000 );
    }
}