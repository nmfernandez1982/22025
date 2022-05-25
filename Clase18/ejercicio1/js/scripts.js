function sumar()
{
    var numero1=parseInt(document.getElementById('numero1').value);
    var numero2=parseInt(document.getElementById('numero2').value);
    document.getElementById('result').value=(numero1+numero2);    
}

function calcular(operacion)
{
    var numero1=parseInt(document.getElementById('numero1').value);
    var numero2=parseInt(document.getElementById('numero2').value);

    switch(operacion)
    {
        case 'suma':
                    document.getElementById('result').value=(numero1+numero2); 
                    break;
        case 'resta':
                    document.getElementById('result').value=(numero1-numero2); 
                    break;
        case 'mult':
                    document.getElementById('result').value=(numero1*numero2); 
                    break;
        case 'div':
                    document.getElementById('result').value=(numero1/numero2); 
                    break;
    }




}