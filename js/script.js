$(function()
{   
    swal("Bienvenido", "Haz tu señal Digital Binaria", "success");
    var canvas = $('#canvas');
    var x = 100;
    var y = 300;
    var color ;
    var context = canvas[0].getContext('2d'); 
    ///plano
        context.beginPath();
        context.moveTo(100, 50);
        context.lineTo(100, 300);
        context.lineTo(650, 300);
        context.lineWidth = 4;
        context.strokeStyle = "black";
        context.stroke();
    //Flecha...
        context.beginPath();
        context.moveTo(640, 290);
        context.lineTo(650, 300);
        context.lineTo(640, 310);
        context.lineTo(640, 290);
        context.lineWidth = 1;
        context.strokeStyle = "black";
        context.fillStyle = 'black';
        context.fill();
        context.stroke();
        context.font = "normal 20px Arial";
        context.fillStyle = "black"
        context.fillText("Amplitud", 60, 30);
        context.font = "normal 20px Arial";
        context.fillStyle = "black"
        context.fillText("Tiempo", 660, 300);
        context.font = "normal 20px Arial";
        context.fillStyle = "black"
        context.fillText("0", 80, 320);
        context.fillText("1", 80, 250);

        
  
    //crear linea de binarios
    $(document).keypress(function(event)
    {   
          
            // cuando se presiona O
            if(event.keyCode === 48)
            {    
                if(y==250)
                {
                   color = "red";
                   crearSenal(x,y,x,y+50,color);
                   y+=50;
                   crearSenal(x,y,x+50,y,color);
                   x+=50;
                }      
                else if(y==300)
                {
                    color = "red";
                    crearSenal(x,y,x+50,y,color);
                    x+=50;
                }
            }
            //Señal en 1 
            else if(event.keyCode === 49)
            {
                 if(y==300)
                 {
                    color = "blue";
                    crearSenal(x,y,x,y-50,color);
                    y-=50;
                    crearSenal(x,y,x+50,y,color);
                    x+=50;
                 }
                 else if(y == 250)
                 {
                    color = "blue";
                    crearSenal(x,y,x+50,y,color);
                    x+=50;
                 }                    
            }
            console.log ("funciona");
        
    });
    function crearSenal(x1,y1,x2,y2,color)
    {   
        context.beginPath();
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
        context.lineWidth = 4;
        context.strokeStyle = color; // pinta de color segun el numero
        context.stroke();
    };
});// final script
