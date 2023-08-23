
jQuery("document").ready(function($) {
    $("#submit").click(function(event){
        event.preventDefault();
        var temperatureInCelcius = parseInt($("#celcius").val());
        var temperatureInFahrenheit = (temperatureInCelcius * 9/5)+32;
        var temperatureInKelvin = temperatureInCelcius + 273.15;
        
        {
            $("#fahrenheit").html(temperatureInFahrenheit);
            $("#kelvin").html(temperatureInKelvin);
        }
        
    })

    // formula for celcius to fahrenhit  --->> (celcius * 9 / 5) + 32
    // formula for celcius to kelvin  --->> celcius + 273.15

});