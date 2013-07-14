///<reference path='../libs/three.d.ts'/>
///<reference path='./renderer.ts'/>
class RendererWebGL extends Renderer implements RendererInterface {
    public scene: THREE.Scene = new THREE.Scene();
    public camera: THREE.PerspectiveCamera;
    public controls: THREE.EditorControls;
    public renderer;

    constructor()
    {
        super();
        this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 80000 );
        this.camera.position.y = 1000;
        this.camera.position.x = 1000;
        this.setRenderer();
        this.controls = new THREE.EditorControls( this.camera );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        var that = this;
        window.onresize = function(event) {
            that.renderer.setSize( window.innerWidth, window.innerHeight );
            that.camera.aspect	= window.innerWidth / window.innerHeight;
            that.camera.updateProjectionMatrix();
        }
        document.body.appendChild( this.renderer.domElement );
        this.camera.lookAt(new THREE.Vector3(0,0,0));
        this.registerTickListener(function () {
            that.renderer.render( that.scene, that.camera );
        })

    }

    public setRenderer() {
        this.renderer = new THREE.WebGLRenderer({antialias:true})
    }

    public createPolygon(p: number[][], color = 0xffffff):THREE.Object3D {
        var g: THREE.Geometry = new THREE.Geometry();
        var len:number = p.length;
        for(var i = 0; i < len;i++) {
            g.vertices.push(new THREE.Vector3(p[i][0], 1, p[i][1]));
        }
        g.vertices.push(new THREE.Vector3(p[0][0], 1, p[0][1]));
        var material = new THREE.LineBasicMaterial({
            color: color
        });
        var obj = new THREE.Line(g,material);
        return obj;
    }

    public focus(o) {
        this.controls.focus(o);
    }

    public show(obj) {
        this.scene.add(obj);
    }
}

