# alerts-scripting-api
Simple scripting api for creating custom notifications and slides data based on capriza zapps

## overview
Creating script is availble while working in support mode.    
The Script will be evaluated in a [Sandbox](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.evalInSandbox). The sandbox get as input the following objects:   
1. element      -DOM [element](#element) which is attached to the control  
2. [oldDataStore](#olddatastore) - an object which was persisted in the previous run named   

The Sandbox returned value is and object containing:  
1. [newDataStore](#newdatastore)        - state to save for the next run  
2. [message/messages](#messagemessages) - will be send as notification to the mobile device  
3. [slide/slides](#slideslides) object  - updates the store slides status  

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
new state per user that will be saved and used as oldDataStore in the next run of that user. could be either primitive type like String/Number or an Object/Array. Must be serializable
###### message/messages
Script can either send single notification using message string or multiple notification useing messages array. 
Each string will send a single notification to the user's devices.  
Notification can be customized using an detailed object instead of string or array of strings. the object format is:
```javascript
{title:"Tomorrow's Forecast", subTitle:"Tomorrow's Forecast", paramName:"" , paramValue:""}
```
1. title(optional)      - notification title 
2. subTitle             - notification subTitle
3. paramName (optional) -
4. paramvalue (optional)-

###### slide/slides
Script generate a slide with single label & value or an array of label & values to be set in a single slide.
The format of a single slide object is: 
```javascript
{type:"label", label:"Tomorrow's Forecast", value:"52°/38°"}
```

#### Debugging
Open firefox wen console, switch to the debugger tab. Add [debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) statment to your script, and click on the evaluate sceript button.
## Examples 
#### Working with tables
#### Generating Slides 
#### Notifications Deep linking 
