$(document).ready(function() 
{
    $('.js-we').waypoints(function(direction)
    {
        if (direction == "down")
        {
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    } ) 

});