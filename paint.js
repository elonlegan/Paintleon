var teclas = {
   UP: 38,
   DOWN: 40,
   LEFT: 37,
   RIGHT: 39
};

document.addEventListener("keydown",dibujarTeclado);
var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");
var x = 250;
var y = 250;
var ancho = cuadrito.width;
var puntoMouse;
var colorcito = document.getElementById("colorcito");
var colorido = colorcito.value;
var borrar = document.getElementById("borrarPorClick");
borrar.addEventListener("click",borrarPorClick);
cuadrito.addEventListener("mousedown",dibujoPuntoMouse);
cuadrito.addEventListener("mousemove",dibujoPorMouse);
cuadrito.addEventListener("mouseup",mouseUp);

dibujarLinea("black", x-1, y-1, x+1, y+1, papel);
dibujarLinea("black", 1, 1, ancho - 1, 1, papel);
dibujarLinea("black", 1, ancho - 1, ancho - 1, ancho - 1, papel);
dibujarLinea("blak", ancho - 1, ancho - 1, ancho - 1, 1, papel);
dibujarLinea("black", 1, ancho - 1, 1, 1, papel );

function dibujoPorMouse(mouseMove)
{
  var colorido = colorcito.value;

if (puntoMouse == 1)
{
  var moveX = mouseMove.layerX;
  var moveY = mouseMove.layerY;
  dibujarLinea(colorido,moveX - 1, moveY - 1, moveX + 1, moveY + 1, papel);
}
}

function dibujoPuntoMouse(mouse)
{
 var layerX = mouse.layerX;
 var layerY = mouse.layerY;
 var colorido = colorcito.value;
 dibujarLinea(colorido,layerX - 1,layerY - 1, layerX + 1, layerY + 1, papel);
 console.log(mouse);
 puntoMouse = + 1;
 console.log(puntoMouse);
}

function mouseUp(mouseUp)
{
  puntoMouse = puntoMouse - 1;
  console.log(puntoMouse);
}



function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var movimiento = 2;
  var colorido = colorcito.value;

  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorido, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
    dibujarLinea(colorido, x, y, x, y + movimiento, papel);
    y = y + movimiento;
    break;
    case teclas.LEFT:
    dibujarLinea(colorido, x, y, x - movimiento, y, papel);
    x = x - movimiento;
    break;
    case teclas.RIGHT:
    dibujarLinea(colorido, x, y, x + movimiento, y, papel);
    x = x + movimiento;
    break
    default:
        console.log("Otra tecla");
    break
  }

}

function borrarPorClick()
{
  papel.clearRect(0,0, ancho, ancho );
  dibujarLinea("black", x-1, y-1, x+1, y+1, papel);
  dibujarLinea("black", 1, 1, ancho - 1, 1, papel);
  dibujarLinea("black", 1, ancho - 1, ancho - 1, ancho - 1, papel);
  dibujarLinea("black", ancho - 1, ancho - 1, ancho - 1, 1, papel);
  dibujarLinea("black", 1, ancho - 1, 1, 1, papel );
}
