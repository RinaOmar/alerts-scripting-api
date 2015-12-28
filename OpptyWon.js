var newDataStore = {}, messages = [];
var trs = element.querySelectorAll("tr.even,tr.odd");

Array.prototype.slice.call(trs).forEach(tr => {
    var opptykey = tr.children[1].querySelector("a").getAttribute("href");
    var opptyDetails = newDataStore[opptykey] = {
        "owner"     : tr.children[0].textContent,
        "name"      : tr.children[1].textContent,
        "amount"    : tr.children[5].textContent,
    };

    var oldOppty = oldDataStore && oldDataStore[opptykey];
    if(oldOppty && oldOppty.prob != opptyDetails.prob && Number.parseInt(opptyDetails.prob) == 100)
            messages.push(`Oppty WON!!! : ${opptyDetails["name"]},`+
                ` ${opptyDetails["amount"]} by ${opptyDetails["owner"]}`);

});
messages = !oldDataStore ? [] : messages.length > 3 ? [`${messages.length} New oppty's WON !!!`] : messages;
({newDataStore: newDataStore ,messages: messages});
