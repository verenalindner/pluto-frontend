var connectionCheck = function() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    var data = "http://localhost:3000/dataGrab";
    var randomNum = Math.round(Math.random() * 10000);
     
    xhr.open('HEAD', data + "?rand=" + randomNum, false);
    try {
        xhr.send();
        if (xhr.status >= 200 && xhr.status < 304) {
            return true;
        } else {
            return false;
        }
    } 
    catch (e) {
        console.log("Exception: "+e);
        return false;
    }
}

module.exports = connectionCheck;