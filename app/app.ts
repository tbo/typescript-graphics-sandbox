///<reference path='./renderer.webgl.ts'/>
///<reference path='./renderer.canvas.ts'/>
///<reference path='./scene.ts'/>
///<reference path='./grid.ts'/>
///<reference path='./spaceship.ts'/>
///<reference path='./asteroid.ts'/>
///<reference path='./controls.ts'/>
window.onload = function() {
    var scene = Scene.getInstance(new RendererWebGL());
    var grid = new Grid();
};