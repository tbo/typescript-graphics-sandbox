///<reference path='../libs/three.d.ts'/>
///<reference path='renderer.canvas.ts'/>
///<reference path='renderer.webgl.ts'/>
///<reference path='scene.ts'/>
///<reference path='sceneobject.ts'/>
class Asteroid extends SceneObject {
    constructor()
    {
        super();
        this.obj = this.scene.renderer.createPolygon([
            [-50,-35],
            [10,-55],
            [50,-5],
            [40,45],
            [10,55],
            [-40,55]
        ]);
    }
}