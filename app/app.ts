///<reference path='./renderer.threejs.ts'/>
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
    var spaceship = new Spaceship();
    spaceship.show();
    var asteroid = new Asteroid();
    asteroid.setPosition(300,300);
    asteroid.show();
    var player = new Controls(spaceship);
};