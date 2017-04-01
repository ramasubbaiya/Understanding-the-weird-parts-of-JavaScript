/** Asynchronous Callback Example */

// long running function
function waitThreeSeconds() {
    var milliSeconds = 3000 + new Date().getTime();
    while (new Date() < milliSeconds) {
        console.log('Seconds : ', new Date().getSeconds());
    }
    console.log('Finished function');
}

function clickHandler() {
    console.log('Click event!');
}

// listen for click listener
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('Finished execution');


/** Moral of this Synchronous Example
 *      When you run this script the web page is not accessible till the waitThreeSeconds fn finishes the event
 *      
 *      Same wise, say 1st click event and 2nd Http event happens, it finshes the click event first and then does the next event
 *      It is all queued up in the a event stack
 */