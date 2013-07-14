///<reference path='../libs/three.d.ts'/>
///<reference path='scene.ts'/>
///<reference path='sceneobject.ts'/>
class Spaceship extends SceneObject {
    public obj:THREE.Object3D;

    constructor()
    {
        super();
        this.obj = this.scene.renderer.createPolygon([
            [4,53],
            [10,60],
            [11,67],
            [15,67],
            [35,53],
            [35,23],
            [18,-7],
            [6,-64],
            [3,-67],
            [-3,-67],
            [-6,-64],
            [-18,-7],
            [-35,23],
            [-35,53],
            [-15,67],
            [-11,67],
            [-10,60],
            [-4,53]
        ],0xff0000);
    }

    public getPosition():THREE.Vector3 {
        return this.obj.position;
    }
}