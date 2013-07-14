var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        _super.call(this);
        this.distanceDelta = new THREE.Vector2();
        this.gridW = 16000;
        this.gridH = 16000;
        this.gridNumW = 400;
        this.gridNumH = 400;
        var l = -this.gridW / 2;
        var r = this.gridW / 2;
        var t = -this.gridH / 2;
        var b = this.gridH / 2;
        var coords = [
            [
                l, 
                t
            ]
        ];
        for(var y = t; y < b; y += this.gridNumH) {
            coords.push([
                l, 
                y
            ]);
            coords.push([
                r, 
                y
            ]);
            coords.push([
                r, 
                y + this.gridNumH
            ]);
            coords.push([
                l, 
                y + this.gridNumH
            ]);
        }
        for(var x = t; x < b; x += this.gridNumW) {
            coords.push([
                x, 
                t
            ]);
            coords.push([
                x, 
                b
            ]);
            coords.push([
                x, 
                t
            ]);
        }
        this.obj = this.scene.renderer.createPolygon(coords, 5592405);
        this.show();
        this.scene.setGrid(this);
    }
    Grid.prototype.move = function (x, y) {
        this.distanceDelta.x += x;
        this.distanceDelta.y += y;
        if(Math.abs(this.distanceDelta.x) >= this.gridNumW) {
            this.obj.position.x += this.distanceDelta.x;
            this.distanceDelta.x = 0;
        }
        if(Math.abs(this.distanceDelta.y) >= this.gridNumH) {
            this.obj.position.z += this.distanceDelta.y;
            this.distanceDelta.y = 0;
        }
    };
    return Grid;
})(SceneObject);
//@ sourceMappingURL=grid.js.map
