$(document).ready(function() {
  
  var zip = "95014";
  var city = "cupertino";
  
  // initially called
  $.get("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=2de143494c0b295cca9337e1e96b00e0", function(data){
    $('#temp').html(Math.round(1.8*(data.main.temp-273.15)+32) + "°F / " + Math.round(data.main.temp-273.15) + "°C");
    $('#city').html(data.name);
    $('#description').html(data.weather[0].description);
    $('#hi').html("High: " + Math.round(1.8*(data.main.temp_max-273.15)+32) + "°F / " + Math.round(data.main.temp_max-273.15) + "°C");
    $('#lo').html("Low: " + Math.round(1.8*(data.main.temp_min-273.15)+32) + "°F / " + Math.round(data.main.temp_min-273.15) + "°C");
  }, "jsonp");
  
  // if zip "go" button pressed
  $("#zip-button").click(function(){
    zip = $('#input-zip').val();
    $.get("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=2de143494c0b295cca9337e1e96b00e0", function(data){
    $('#temp').html(Math.round(1.8*(data.main.temp-273.15)+32) + "°F / " + Math.round(data.main.temp-273.15) + "°C");
    $('#city').html(data.name);
    $('#description').html(data.weather[0].description);
    $('#hi').html(Math.round(1.8*(data.main.temp_max-273.15)+32) + "°F / " + Math.round(data.main.temp_max-273.15) + "°C");
    $('#lo').html(Math.round(1.8*(data.main.temp_min-273.15)+32) + "°F / " + Math.round(data.main.temp_min-273.15) + "°C");
  }, "jsonp");
    
    document.getElementById("input-zip").value = '';
  });
  
  // if city go button pressed
  $("#city-button").click(function(){
    city = $('#input-city').val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2de143494c0b295cca9337e1e96b00e0", function(data){
    $('#temp').html(Math.round(1.8*(data.main.temp-273.15)+32) + "°F / " + Math.round(data.main.temp-273.15) + "°C");
    $('#city').html(data.name);
    $('#description').html(data.weather[0].description);
    $('#hi').html(Math.round(1.8*(data.main.temp_max-273.15)+32) + "°F / " + Math.round(data.main.temp_max-273.15) + "°C");
    $('#lo').html(Math.round(1.8*(data.main.temp_min-273.15)+32) + "°F / " + Math.round(data.main.temp_min-273.15) + "°C");
  }, "jsonp");
    
    document.getElementById("input-city").value = '';
  });
  
  
  
  $(document).keypress(function(e) {
    if(e.which == 13) {
        zip = $("#input-zip").val();
      
        city = $("#input-city").val();
      //alert("zip: " + zip + ", city: " + city);
      
      if(city != null){
        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2de143494c0b295cca9337e1e96b00e0", function(data){
    $('#temp').html(Math.round(1.8*(data.main.temp-273.15)+32) + "°F / " + Math.round(data.main.temp-273.15) + "°C");
    $('#city').html(data.name);
    $('#description').html(data.weather[0].description);
    $('#hi').html(Math.round(1.8*(data.main.temp_max-273.15)+32) + "°F / " + Math.round(data.main.temp_max-273.15) + "°C");
    $('#lo').html(Math.round(1.8*(data.main.temp_min-273.15)+32) + "°F / " + Math.round(data.main.temp_min-273.15) + "°C");
  }, "jsonp");
        
        document.getElementById("input-city").value = '';
      }
      if(zip != null){
        $.get("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=2de143494c0b295cca9337e1e96b00e0", function(data){
          $('#temp').html(Math.round(1.8*(data.main.temp-273.15)+32) + "°F / " + Math.round(data.main.temp-273.15) + "°C");
          $('#city').html(data.name);
          $('#description').html(data.weather[0].description);
          $('#hi').html(Math.round(1.8*(data.main.temp_max-273.15)+32) + "°F / " + Math.round(data.main.temp_max-273.15) + "°C");
          $('#lo').html(Math.round(1.8*(data.main.temp_min-273.15)+32) + "°F / " + Math.round(data.main.temp_min-273.15) + "°C");
        }, "jsonp");
        
        document.getElementById("input-zip").value = '';
      }
    }
});
  

});
