# alerts-scripting-api
Simple scripting api for creating custom notifications and slides data based on capriza zapps

## overview
#### basic exmaple - Send notification if element text content has changed
```javascript
var message;
if(oldDataStore && oldDataStore != element.textContent)
  message = `data has changed from ${oldDataStore} to ${newDataStore}`;
({newDataStore:newMessage,message:message})
```
