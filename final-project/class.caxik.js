class Caxik extends KendaniEak {
    bazmanal() {
        this.direction = random(this.yntrelVandak(0));
        if (this.direction) {
            var newCaxik = new Caxik(this.direction[0], this.direction[1], this.index);
            newCaxik.parentX = this.x;
            newCaxik.parentY = this.y;
            caxikArr.push(newCaxik);
            matrix[this.direction[1]][this.direction[0]] = this.index;
        }
    }
}
