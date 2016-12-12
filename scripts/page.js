var display = false;
var res = document.getElementById('images');
function ToggleImages() 
{
    if(display === true)
    {
    res.setAttribute('class', 'show');
        console.log("this is from true toggleimage and dispaly is : " + display);
    }
    else
        {
            res.setAttribute('class', 'hide');
            console.log("this is from true toggleimage and dispaly is : " + display);
        }
    display = !display;
    
}

function ChangeBackground()
{
    if(display === false){
    res.setAttribute('class', 'changeBackground');
        console.log("this is from true changebackground ' if ' and dispaly is : " + display);
    }
    else
    {
        res.setAttribute('class', 'noBack')    
         console.log("this is from true changebackground ' else ' and dispaly is : " + display);
    }
    }