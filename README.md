# alerts-scripting-api
Simple scripting api for creating custom notifications and slides data based on capriza zapps

## overview
Creating script is availble when working in support mode. 
The Script will be evaluated in a [Sandbox](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.evalInSandbox). 
It get as input the DOM [element](#element) which is attached to the control and an object which it persisted in the previous run named [oldDataStore](#oldDataStore). 

The Sandbox returned value is and object containing: 

1. newDatStore - state to save for the next run
2. message or messages - will be send as notification to the mobile device
3. slide or slides object - updates the store slides status

#### basic exmaple - Send notification if element text content has changed
```javascript
var message;
if(oldDataStore && oldDataStore != element.textContent)
  message = `data has changed from ${oldDataStore} to ${newDataStore}`;
({newDataStore:element.textContent ,message:message})
```
#### Objects available in the Sandbox
###### element
###### oldDatStore
###### window
###### console
#### Methods available in the Sandbox
###### $x
#### Sandbox Return value object
#### Debugging
#### Examples 
###### Working with table
###### Adding slides info
###### Deep linking 
