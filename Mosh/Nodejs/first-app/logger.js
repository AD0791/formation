let url= "http://mylogger.io/log"; // Private

function log(message){
    console.log(message);
}

module.exports= log; 
// we can access the function log in the
// app.js. In node = files are modules.
// if we want to export the url (endpoint)
// url is emplementation detail
// module.exports.endpoint = url;
