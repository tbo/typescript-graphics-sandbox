///<reference path='../libs/three.d.ts'/>
///<reference path='sceneobject.ts'/>
///<reference path='renderer.threejs.ts'/>
///<reference path='grid.ts'/>
class Scene {
    private static _instance:Scene;
    private objects: SceneObject[] = [];
    public renderer: RendererInterface;
    private grid: Grid;

    constructor(renderer: RendererInterface)
    {
        this.renderer = renderer;
    }

    public static getInstance(renderer?: RendererInterface):Scene
    {
        if(_instance == null) {
            if(renderer == null) {
                renderer =  new RendererThreeJs();
            }
            _instance = new Scene(renderer);
        }
        return _instance;
    }

    public add(o:SceneObject) {
        this.renderer.show(o.obj);
        this.objects.push(o);
    }

    public move(x: number, y: number, z: number = 0) {
        for(var i: number = 0, len: number = this.objects.length; i < len; i++) {
            this.objects[i].move(x,y);
        }
    }

    public focus(o: SceneObject) {
        this.renderer.focus(o.obj);
    }

    public setGrid(grid: Grid) {
        this.grid = grid;
    }

    public updateGrid(x: number,y: number) {
        if(this.grid != null) {
            this.grid.move(x,y);
        }
    }
}