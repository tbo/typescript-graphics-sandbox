///<reference path='../libs/three.d.ts'/>
///<reference path='scene.ts'/>
class SceneObject {
    public obj: THREE.Object3D;
    public scene: Scene = Scene.getInstance();

    constructor()
    {
    }

    public show() {
        this.scene.add(this);
    }

    public setPosition(x: number, y: number) {
        this.obj.position.x = x;
        this.obj.position.z = y;
    }

    public move(x: number, y: number) {
        this.obj.position.x += x;
        this.obj.position.z += y;
    }

    public setRotation(rot:number) {
        this.obj.rotation.y = rot;
    }
}