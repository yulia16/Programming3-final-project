class Gishatich extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
        this.energy = 4;
        var serArr = ["male", "female"];
        var ser = Math.floor(Math.random() * (serArr.length));
        if (ser == 0)
            this.ser = "male";
        if (ser == 1)
            this.ser = "female"
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (vandak) {
            matrix[this.y][this.x] = 0;
            matrix[vandak[1]][vandak[0]] = 3;
            this.x = vandak[0];
            this.y = vandak[1];
            if (this.energy > 0)
                this.energy--;
        }
        else {
            var vandak = random(this.yntrelVandak(1));
            if (vandak) {
                matrix[this.y][this.x] = 0;
                matrix[vandak[1]][vandak[0]] = 3;

                this.x = vandak[0];
                this.y = vandak[1];
                for (var i in grassArr) {
                    if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                if (this.energy > 0)
                    this.energy--;
                this.multiply++;
            }
            else {
                var vandak = random(this.yntrelVandak(6));
                if (vandak) {
                    matrix[this.y][this.x] = 0;
                    matrix[vandak[1]][vandak[0]] = 3;
                    this.x = vandak[0];
                    this.y = vandak[1];
                    for (var i in caxikArr) {
                        if (caxikArr[i].x == this.x && caxikArr[i].y == this.y) {
                            caxikArr.splice(i, 1);
                            break;
                        }
                    }
                    if (this.energy > 0)
                        this.energy--;
                    this.multiply++;
                }
            }
        }
    }
    bazmanal() {
        var vandak = random(this.yntrelVandak(3));
        if (vandak) {
            var xser;
            for (i in gishatichArr) {
                if (gishatichArr[i].x == vandak[0] && gishatichArr[i].y == vandak[1]) {

                    xser = gishatichArr[i].ser;
                }
            }
            if (this.ser != xser && this.multiply >= 8) {
                var x = vandak[0];
                var y = vandak[1];
                var norGishatich = new Gishatich(x, y, 3);
                gishatichArr.push(norGishatich);
                this.energy = 1;

            }
        }
    }

    utel() {
        var xotaker = this.yntrelVandak(2);
        var norVandak = random(xotaker);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            this.energy++;
        }
    }

    mahanal() {
        if (this.energy == 0 && this.multiply >= 25) {
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
            this.multiply = 0;
        }
    }
}