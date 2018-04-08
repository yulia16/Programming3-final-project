var fcglobal = 0;
var yArr = [];
var xArr = [];
var matrix = [];
var n = 17;
var a;
for (var i = 0; i < n; i++) {
  matrix.push([]);
  //random matrix
  for (var j = 0; j < n; j++) {
    var a = Math.round(Math.random());
    matrix[i].push(a);
    matrix[i][j] = a;
  }
}
for (var y = 0; y < n; ++y) {
  yArr.push(y);
}
for (var x = 0; x < n; ++x) {
  xArr.push(x);
}
for (i = 2; i < 5; i++) {
  if (i != 4) {
    var randX = Math.floor(Math.random() * xArr.length);
    var randY = Math.floor(Math.random() * yArr.length);
    matrix[randX][randY] = i;
  }
  if (i == 4) {
    var randX = Math.floor(Math.random() * xArr.length);
    var randY = Math.floor(Math.random() * yArr.length);
    matrix[randX][randY] = i;

    var randX1 = Math.floor(Math.random() * xArr.length);
    var randY1 = Math.floor(Math.random() * yArr.length);
    while (randX % 2 != randX1 % 2 || randY % 2 != randY1 % 2) {


      var randX1 = Math.floor(Math.random() * xArr.length);
      var randY1 = Math.floor(Math.random() * yArr.length);
    }
    matrix[randX1][randY1] = i + 1;

  }
}


var randX = Math.floor(Math.random() * xArr.length);
var randY = Math.floor(Math.random() * yArr.length);
matrix[randX][randY] = 6;

var randX = Math.floor(Math.random() * xArr.length);
var randY = Math.floor(Math.random() * yArr.length);
matrix[randX][randY] = 2;

var randX = Math.floor(Math.random() * xArr.length);
var randY = Math.floor(Math.random() * yArr.length);
matrix[randX][randY] = 2;

var randX = Math.floor(Math.random() * xArr.length);
var randY = Math.floor(Math.random() * yArr.length);
matrix[randX][randY] = 2;

var randX = Math.floor(Math.random() * xArr.length);
var randY = Math.floor(Math.random() * yArr.length);
matrix[randX][randY] = 2;

var randX = Math.floor(Math.random() * xArr.length);
var randY = Math.floor(Math.random() * yArr.length);
matrix[randX][randY] = 3;

var randX = Math.floor(Math.random() * xArr.length);
var randY = Math.floor(Math.random() * yArr.length);
matrix[randX][randY] = 3;

var randX = Math.floor(Math.random() * xArr.length);
var randY = Math.floor(Math.random() * yArr.length);
matrix[randX][randY] = 3;
//random matrix


var grassArr = [];
var xotakerArr = [];
var caxikArr = [];
var krakArr = [];
var jurArr = [];
var gishatichArr = [];

var side = 120;





function setup() {
  createCanvas(matrix[0].length * side + side, matrix.length * side + side);
  background('#acacac');
}

for (var y = 0; y < matrix.length; ++y) {
  for (var x = 0; x < matrix[y].length; ++x) {
    if (matrix[y][x] == 1) {
      var gr = new Grass(x, y, 1);
      grassArr.push(gr);
    }
    else if (matrix[y][x] == 2) {
      var xotaker = new Xotaker(x, y, 2);
      xotakerArr.push(xotaker);
    }
    else if (matrix[y][x] == 3) {
      var gishatich = new Gishatich(x, y, 3);
      gishatichArr.push(gishatich);
    }
    else if (matrix[y][x] == 4) {
      var krak = new Krak(x, y, 4);
      krakArr.push(krak);
    }
    else if (matrix[y][x] == 5) {
      var jur = new Jur(x, y, 5);
      jurArr.push(jur);
    }
    else if (matrix[y][x] == 6) {
      var caxik = new Caxik(x, y, 6);
      caxikArr.push(caxik);
    }

  }
}




function draw() {
  fcglobal = frameCount;
  var frame;
  if (weather == "summer") {
    frame = 8;
    if (fcglobal < 150) {
      for (var j = 0; j < 3; j++) {
        var randX1 = Math.floor(Math.random() * xArr.length);
        var randY1 = Math.floor(Math.random() * yArr.length);

        //splice
        if (matrix[randX1][randY1] == 1) {
          for (var i in grassArr) {
            if (grassArr[i].x == randX1 && grassArr[i].y == randY1) {
              grassArr.splice(i, 1);
              break;
            }
          }
        }
        else if (matrix[randX1][randY1] == 2) {
          for (var i in xotakerArr) {
            if (xotakerArr[i].x == randX1 && xotakerArr[i].y == randY1) {
              xotakerArr.splice(i, 1);
              break;
            }
          }
        }
        else if (matrix[randX1][randY1] == 6) {
          for (var i in caxikArr) {
            if (caxikArr[i].x == randX1 && caxikArr[i].y == randY1) {
              caxikArr.splice(i, 1);
              break;
            }
          }
        }
        else if (matrix[randX1][randY1] == 4) {
          for (var i in krakArr) {
            if (krakArr[i].x == randX1 && krakArr[i].y == randY1) {
              krakArr.splice(i, 1);
              break;
            }
          }
        }
        else if (matrix[randX1][randY1] == 5) {
          for (var i in jurArr) {
            if (jurArr[i].x == randX1 && jurArr[i].y == randY1) {
              jurArr.splice(i, 1);
              break;
            }
          }
        }
        else if (matrix[randX1][randY1] == 3) {
          for (var i in gishatichArr) {
            if (gishatichArr[i].x == randX1 && gishatichArr[i].y == randY1) {
              gishatichArr.splice(i, 1);
              break;
            }
          }
        }


        //splice
        matrix[randX1][randY1] = 6;
        var caxik = new Caxik(x, y, 6);
        caxikArr.push(caxik);
      }
    }

  }

  else if (weather == "autumn")
    frame = 4;
  else if (weather == "winter")
    frame = 1;
  else if (weather == "spring") {
    frame = 4;
    if (fcglobal < 150) {
      for (var i = 0; i < 5; i++) {
        var randX1 = Math.floor(Math.random() * xArr.length);
        var randY1 = Math.floor(Math.random() * yArr.length);

        //splice
        if (matrix[randX1][randY1] == 1) {
          for (var i in grassArr) {
            if (grassArr[i].x == randX1 && grassArr[i].y == randY1) {
              grassArr.splice(i, 1);
              break;
            }
          }
        }
        else if (matrix[randX1][randY1] == 2) {
          for (var i in xotakerArr) {
            if (xotakerArr[i].x == randX1 && xotakerArr[i].y == randY1) {
              xotakerArr.splice(i, 1);
              break;
            }
          }
        }
        else if (matrix[randX1][randY1] == 6) {
          for (var i in caxikArr) {
            if (caxikArr[i].x == randX1 && caxikArr[i].y == randY1) {
              caxikArr.splice(i, 1);
              break;
            }
          }
        }
        else if (matrix[randX1][randY1] == 4) {
          for (var i in krakArr) {
            if (krakArr[i].x == randX1 && krakArr[i].y == randY1) {
              krakArr.splice(i, 1);
              break;
            }
          }
        }
        else if (matrix[randX1][randY1] == 5) {
          for (var i in jurArr) {
            if (jurArr[i].x == randX1 && jurArr[i].y == randY1) {
              jurArr.splice(i, 1);
              break;
            }
          }
        }
        else if (matrix[randX1][randY1] == 3) {
          for (var i in gishatichArr) {
            if (gishatichArr[i].x == randX1 && gishatichArr[i].y == randY1) {
              gishatichArr.splice(i, 1);
              break;
            }
          }
        }
        //splice

        matrix[randX1][randY1] = 6;
        var caxik = new Caxik(x, y, 6);
        caxikArr.push(caxik);
      }
    }
  }
  else
    frame = 4;


  frameRate(frame);

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

      if (matrix[y][x] == 1) {
        if (weather == "winter") {
          fill("white");
          rect(x * side, y * side, side, side);
        }
        else if (weather == "spring") {
          fill("#99ff66");
          rect(x * side, y * side, side, side);
        }
        else if (weather == "summer") {
          fill("#006600");
          rect(x * side, y * side, side, side);
        }
        else if (weather == "autumn") {
          fill("#996633");
          rect(x * side, y * side, side, side);
        }
        else {
          fill("green");
          rect(x * side, y * side, side, side);
        }
      }

      if (matrix[y][x] == 2) {
        for (i in xotakerArr) {
          if (xotakerArr[i].x == x && xotakerArr[i].y == y) {

            var xser = xotakerArr[i].ser;
          }
        }
        if (xser == "male")
          fill("#cc9900");
        if (xser == "female")
          fill("#ffff00")
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 3) {
        for (i in gishatichArr) {
          if (gishatichArr[i].x == x && gishatichArr[i].y == y) {

            var xser = gishatichArr[i].ser;
          }
        }
        if (xser == "male")
          fill(" #990000");
        if (xser == "female")
          fill(" #ff0000")
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 4) {
        if (weather == "winter") {
          fill("#00d8ff");
          rect(x * side, y * side, side, side);
        }
        else if (weather == "spring") {
          fill("#ff8000");
          rect(x * side, y * side, side, side);
        }
        else if (weather == "summer") {
          fill("#0080ff");
          rect(x * side, y * side, side, side);
        }
        else if (weather == "autumn") {
          fill("#ff8000");
          rect(x * side, y * side, side, side);
        }
        else {
          fill("#ff8000");
          rect(x * side, y * side, side, side);
        }
      }
      else if (matrix[y][x] == 5) {
        if (weather == "winter") {
          fill("#0080ff");
          rect(x * side, y * side, side, side);
        }
        else if (weather == "spring") {
          fill("#00d8ff");
          rect(x * side, y * side, side, side);
        }
        else if (weather == "summer") {
          fill("#ff8000");
          rect(x * side, y * side, side, side);
        }
        else if (weather == "autumn") {
          fill("#00d8ff");
          rect(x * side, y * side, side, side);
        }
        else {
          fill("#0080ff");
          rect(x * side, y * side, side, side);
        }
      }
      else if (matrix[y][x] == 10) {
        fill("#000066");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 6) {
        var caxikcol;
        var caxcolArr = ["#ff6699", "#990099"];
        if (weather == "autumn")
          caxikcol = "#ff6699";
        else if (weather == "winter")
          caxikcol = "#990099";
        else {
          var caxcol = Math.floor(Math.random() * (caxcolArr.length));
          if (caxcol == 0)
            caxikcol = "#ff6699";
          if (caxcol == 1)
            caxikcol = "#990099";
        }
        fill(caxikcol);
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 0) {
        fill("#acacac");
        rect(x * side, y * side, side, side);
      }
    }
  }
  for (var i in grassArr) {
    grassArr[i].bazmanal();

  }
  for (var i in caxikArr) {
    caxikArr[i].bazmanal();

  }
  for (var i in xotakerArr) {
    xotakerArr[i].sharjvel();
    xotakerArr[i].utel();
    xotakerArr[i].mahanal();
  }

  for (var i in gishatichArr) {
    gishatichArr[i].sharjvel();
    gishatichArr[i].utel();
    gishatichArr[i].mahanal();
  }
  for (var i in krakArr) {
    krakArr[i].move();
  }
  for (var i in jurArr) {
    jurArr[i].move();
  }


  //verj
  if (frameCount >= 150) {

    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }

    var s = 'Game Of Life';
    fill("green");
    textSize(200);
    text(s, 400, 1000);
  }
}
//verj



//exanakneri hertapox
var timerId = setTimeout(function tick() {
  if (weather == "winter") {
    weather = "spring";
  }
  else if (weather == "spring") {
    weather = "summer";
  }
  else if (weather == "summer") {
    weather = "autumn";
  }
  else if (weather == "autumn") {
    weather = "winter";
  }
  


  //kaycak
  if (frameCount < 150) {
    var randX1 = Math.floor(Math.random() * xArr.length);
    var randY1 = Math.floor(Math.random() * yArr.length);
    //splice
    if (matrix[randX1][randY1] == 1) {
      for (var i in grassArr) {
        if (grassArr[i].x == randX1 && grassArr[i].y == randY1) {
          grassArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX1][randY1] == 2) {
      for (var i in xotakerArr) {
        if (xotakerArr[i].x == randX1 && xotakerArr[i].y == randY1) {
          xotakerArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX1][randY1] == 6) {
      for (var i in caxikArr) {
        if (caxikArr[i].x == randX1 && caxikArr[i].y == randY1) {
          caxikArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX1][randY1] == 4) {
      for (var i in krakArr) {
        if (krakArr[i].x == randX1 && krakArr[i].y == randY1) {
          krakArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX1][randY1] == 5) {
      for (var i in jurArr) {
        if (jurArr[i].x == randX1 && jurArr[i].y == randY1) {
          jurArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX1][randY1] == 3) {
      for (var i in gishatichArr) {
        if (gishatichArr[i].x == randX1 && gishatichArr[i].y == randY1) {
          gishatichArr.splice(i, 1);
          break;
        }
      }
    }


    //splice


    matrix[randX1][randY1] = 10;



    var randX2 = Math.floor(Math.random() * xArr.length);
    var randY2 = Math.floor(Math.random() * yArr.length);
    //splice
    if (matrix[randX2][randY2] == 1) {
      for (var i in grassArr) {
        if (grassArr[i].x == randX2 && grassArr[i].y == randY2) {
          grassArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX2][randY2] == 2) {
      for (var i in xotakerArr) {
        if (xotakerArr[i].x == randX2 && xotakerArr[i].y == randY2) {
          xotakerArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX2][randY2] == 6) {
      for (var i in caxikArr) {
        if (caxikArr[i].x == randX2 && caxikArr[i].y == randY2) {
          caxikArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX2][randY2] == 4) {
      for (var i in krakArr) {
        if (krakArr[i].x == randX2 && krakArr[i].y == randY2) {
          krakArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX2][randY2] == 5) {
      for (var i in jurArr) {
        if (jurArr[i].x == randX2 && jurArr[i].y == randY2) {
          jurArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX2][randY2] == 3) {
      for (var i in gishatichArr) {
        if (gishatichArr[i].x == randX2 && gishatichArr[i].y == randY2) {
          gishatichArr.splice(i, 1);
          break;
        }
      }
    }
    //splice


    matrix[randX2][randY2] = 10;


    var randX3 = Math.floor(Math.random() * xArr.length);
    var randY3 = Math.floor(Math.random() * yArr.length);
    //splice
    if (matrix[randX3][randY3] == 1) {
      for (var i in grassArr) {
        if (grassArr[i].x == randX3 && grassArr[i].y == randY3) {
          grassArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX3][randY3] == 2) {
      for (var i in xotakerArr) {
        if (xotakerArr[i].x == randX3 && xotakerArr[i].y == randY3) {
          xotakerArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX3][randY3] == 6) {
      for (var i in caxikArr) {
        if (caxikArr[i].x == randX3 && caxikArr[i].y == randY3) {
          caxikArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX3][randY3] == 4) {
      for (var i in krakArr) {
        if (krakArr[i].x == randX3 && krakArr[i].y == randY3) {
          krakArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX3][randY3] == 5) {
      for (var i in jurArr) {
        if (jurArr[i].x == randX3 && jurArr[i].y == randY3) {
          jurArr.splice(i, 1);
          break;
        }
      }
    }
    else if (matrix[randX3][randY3] == 3) {
      for (var i in gishatichArr) {
        if (gishatichArr[i].x == randX3 && gishatichArr[i].y == randY3) {
          gishatichArr.splice(i, 1);
          break;
        }
      }
    }
    //splice


    matrix[randX3][randY3] = 10;



    setTimeout(function () {
      matrix[randX1][randY1] = 0;
      matrix[randX2][randY2] = 0;
      matrix[randX3][randY3] = 0;
    }, 2000);

  }
  //kaycak
  timerId = setTimeout(tick, 5000);
}, 5000);
//exanakneri hertapox


//bazmanal kanch
var timerId = setInterval(function () {
  for (var i in xotakerArr) {
    xotakerArr[i].bazmanal();
  }
}, 10000);

var timerId = setInterval(function () {
  for (var i in gishatichArr) {
    gishatichArr[i].bazmanal();
  }
}, 10000);
//bazmanal kanch
