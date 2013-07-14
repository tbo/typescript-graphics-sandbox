///<reference path='../libs/three.d.ts'/>
////<reference path='renderer.canvas.ts'/>
///<reference path='renderer.threejs.ts'/>
///<reference path='scene.ts'/>
///<reference path='sceneobject.ts'/>
class Grid extends SceneObject {
    private distanceDelta:THREE.Vector2 = new THREE.Vector2();
    private gridW:number = 16000; // pixels
    private gridH:number = 16000; // pixels
    private gridNumW:number = 400; // how many wide (50*50 = 2500 pixels wide)
    private gridNumH:number = 400;

    constructor()
    {
        super();
        var l = -this.gridW/2;
        var r = this.gridW/2;
        var t = -this.gridH/2;
        var b = this.gridH/2;
        var coords = [[l,t]]

        for(var y:number = t; y < b; y+= this.gridNumH) {
            coords.push([l,y]);
            coords.push([r,y]);
            coords.push([r,y+this.gridNumH]);
            coords.push([l,y+this.gridNumH]);
        }
        for(var x:number = t; x < b; x+= this.gridNumW) {
            coords.push([x,t]);
            coords.push([x,b]);
            coords.push([x,t]);
        }
        this.obj = this.scene.renderer.createPolygon(coords,0x555555);
        this.show();
        this.scene.setGrid(this);
    }

    public move(x:number, y:number) {
        this.distanceDelta.x += x;
        this.distanceDelta.y += y;
        if(Math.abs(this.distanceDelta.x) >= this.gridNumW ) {
            this.obj.position.x += this.distanceDelta.x;
            this.distanceDelta.x = 0;
        }
        if(Math.abs(this.distanceDelta.y) >= this.gridNumH ) {
            this.obj.position.z += this.distanceDelta.y;
            this.distanceDelta.y = 0;
        }
    }
}