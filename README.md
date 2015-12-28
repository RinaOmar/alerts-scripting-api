# alerts-scripting-api
Simple scripting api for creating custom notifications and slides data based on capriza zapps

## overview
Creating script is availble when working in support mode.    
The Script will be evaluated in a [Sandbox](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.evalInSandbox). The sandbox get as input the following objects:   
1. DOM [element](#element) which is attached to the control  
2. [oldDataStore](#olddatastore) - an object which was persisted in the previous run named   

The Sandbox returned value is and object containing:  
1. [newDataStore](#newdatastore) - state to save for the next run  
2. [message/messages](#messagemessages) - will be send as notification to the mobile device  
3. [slide/slides](#slideslides) object - updates the store slides status  

#### basic exmaple - Send notification if element text content has changed
```javascript
var message;
if(oldDataStore && oldDataStore != element.textContent)
  message = `data has changed from ${oldDataStore} to ${newDataStore}`;
({newDataStore:element.textContent ,message:message})
```
#### Objects available in the Sandbox
###### element 
Returns a reference to the [DOM element](https://developer.mozilla.org/en-US/docs/Web/API/Element) attached to the control
###### oldDatStore
The object which was returned as newDataStore in the previous run of of the same script for the same user
###### window
Returns a reference to the [window object](https://developer.mozilla.org/en-US/docs/Web/API/Window) in which the element exist
###### console
Returns a reference to the [console object](https://developer.mozilla.org/en-US/docs/Web/API/Console)
#### Methods available in the Sandbox
###### $x(xpath,context)
Returns an array of DOM elements that match the given XPath expression.   
If context is not specified the window document will be used as default.
#### Sandbox Return value object
###### newDataStore
###### message/messages
###### slide/slides
#### Debugging
Open firefox wen console, switch to the debugger tab. Add [debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) statment to your script and click on the evaluate sceript button.
## Examples 
#### Working with tables
#### Generating Slides 
#### Notifications Deep linking 
