window.onload = function () {
    var scene = Scene.getInstance(new RendererCanvas());
    var grid = new Grid();
    var spaceship = new Spaceship();
    spaceship.show();
    var asteroid = new Asteroid();
    asteroid.setPosition(300, 300);
    asteroid.show();
    var player = new Controls(spaceship);
};
//@ sourceMappingURL=app.js.map
