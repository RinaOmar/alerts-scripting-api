# alerts-scripting-api
Simple scripting api for creating custom notifications and slides data based on capriza zapps

## overview
Creating script is availble when working in support mode. 
The Script will be evaluated in a [Sandbox](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.evalInSandbox). 
It get as input the DOM [element](#element) which is attached to the control and an 

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
####### Working with table
####### Adding slides info
####### Deep linking 
