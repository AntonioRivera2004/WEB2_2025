const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");


//TURNO JUGADOR
const select = document.getElementById("turno");
var turno;

select.addEventListener("change", () => {
    if(select.value==="Player1")
    {
        turno=1;
    }
    if(select.value==="Player2")
    {
        turno=2;
    }
});



//BOTONES
btn1.addEventListener("click", () => {
if(turno===1)
{
    btn1.textContent = "X";
}
if(turno===2)
{
    btn1.textContent = "O";
}
  verificarWin();
});

btn2.addEventListener("click", () => {
  if(turno===1)
{
    btn2.textContent = "X";
}
if(turno===2)
{
    btn2.textContent = "O";
}
    verificarWin();

});

btn3.addEventListener("click", () => {
  if(turno===1)
{
    btn3.textContent = "X";
}
if(turno===2)
{
    btn3.textContent = "O";
}
    verificarWin();

});

btn4.addEventListener("click", () => {
  if(turno===1)
{
    btn4.textContent = "X";
}
if(turno===2)
{
    btn4.textContent = "O";
}
    verificarWin();

});

btn5.addEventListener("click", () => {
  if(turno===1)
{
    btn5.textContent = "X";
}
if(turno===2)
{
    btn5.textContent = "O";
}
    verificarWin();

});

btn6.addEventListener("click", () => {
  if(turno===1)
{
    btn6.textContent = "X";
}
if(turno===2)
{
    btn6.textContent = "O";
}
    verificarWin();

});

btn7.addEventListener("click", () => {
  if(turno===1)
{
    btn7.textContent = "X";
}
if(turno===2)
{
    btn7.textContent = "O";
}
    verificarWin();

});

btn8.addEventListener("click", () => {
  if(turno===1)
{
    btn8.textContent = "X";
}
if(turno===2)
{
    btn8.textContent = "O";
}
    verificarWin();

});

btn9.addEventListener("click", () => {
  if(turno===1)
{
    btn9.textContent = "X";
}
if(turno===2)
{
    btn9.textContent = "O";
}
    verificarWin();

});

function verificarWin() {
    //JUGADOR1
  if (btn1.textContent === "X" && btn2.textContent === "X" && btn3.textContent==="X") {
    console.log("¡Ganaste! X");
  }
  if (btn3.textContent === "X" && btn6.textContent === "X" && btn9.textContent==="X") {
    console.log("¡Ganaste! X");
  }
  if (btn7.textContent === "X" && btn8.textContent === "X" && btn9.textContent==="X") {
    console.log("¡Ganaste! X");
  }  
  if (btn1.textContent === "X" && btn4.textContent === "X" && btn7.textContent==="X") {
    console.log("¡Ganaste! X");
  }
 //
  if (btn4.textContent === "X" && btn5.textContent === "X" && btn6.textContent==="X") {
    console.log("¡Ganaste! X");
  }
  if (btn2.textContent === "X" && btn5.textContent === "X" && btn8.textContent==="X") {
    console.log("¡Ganaste! X");
  }
  if (btn1.textContent === "X" && btn5.textContent === "X" && btn9.textContent==="X") {
    console.log("¡Ganaste! X");
  }  
  if (btn3.textContent === "X" && btn5.textContent === "X" && btn7.textContent==="X") {
    console.log("¡Ganaste! X");
  }

  //JUGADOR2
  if (btn1.textContent === "O" && btn2.textContent === "O" && btn3.textContent==="O") {
    console.log("¡Ganaste! O");
  }
  if (btn3.textContent === "O" && btn6.textContent === "O" && btn9.textContent==="O") {
    console.log("¡Ganaste! O");
  }
  if (btn7.textContent === "O" && btn8.textContent === "O" && btn9.textContent==="O") {
    console.log("¡Ganaste! O");
  }  
  if (btn1.textContent === "O" && btn4.textContent === "O" && btn7.textContent==="O") {
    console.log("¡Ganaste! O");
  }
 //
  if (btn4.textContent === "O" && btn5.textContent === "O" && btn6.textContent==="O") {
    console.log("¡Ganaste! O");
  }
  if (btn2.textContent === "O" && btn5.textContent === "O" && btn8.textContent==="O") {
    console.log("¡Ganaste! O");
  }
  if (btn1.textContent === "O" && btn5.textContent === "O" && btn9.textContent==="O") {
    console.log("¡Ganaste! O");
  }  
  if (btn3.textContent === "O" && btn5.textContent === "O" && btn7.textContent==="O") {
    console.log("¡Ganaste! O");
  }
}