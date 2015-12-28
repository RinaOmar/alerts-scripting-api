var oldForecast = oldDataStore, message // oldDataStore is the value save in previous run
var newForecast = parseInt(element.textContent.replace(/\$|\,/g,""));  
if (newForecast < oldForecast)
    message = `Forecast decline by ${oldForecast-newForecast}$ to ${newForecast}$`
({message: message, newDataStore: newForecast}); // return value 
