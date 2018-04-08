class Xotaker extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
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
            matrix[vandak[1]][vandak[0]] = 2;
            this.x = vandak[0];
            this.y = vandak[1];
            this.energy--;

        }
    }
    bazmanal() {
        if (this.energy >= 8) {
            var vandak = random(this.yntrelVandak(2));
            if (vandak) {
                for (i in xotakerArr) {
                    if (xotakerArr[i].x == vandak[0] && xotakerArr[i].y == vandak[1]) {
                        var xser = xotakerArr[i].ser;
                    }
                }
                if (this.ser != xser) {
                    var x = vandak[0];
                    var y = vandak[1];
                    var norXotaker = new Xotaker(x, y, 2);
                    xotakerArr.push(norXotaker);
                    this.energy = 1;

                }
            }
        }
    }

    utel() {
        var caxik = this.yntrelVandak(6);
        var norVandak = random(caxik);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in caxikArr) {
                if (caxikArr[i].x == this.x && caxikArr[i].y == this.y) {
                    caxikArr.splice(i, 1);
                    break;
                }
            }
            this.energy += 2;
        }


        else {
            var xot = this.yntrelVandak(1);
            var norVandak = random(xot);
            if (norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2;
                this.x = norVandak[0];
                this.y = norVandak[1];
                for (var i in grassArr) {
                    if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }

                this.energy++;
            }
        }





    }

    mahanal() {

        if (this.energy == 0) {
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }
}
