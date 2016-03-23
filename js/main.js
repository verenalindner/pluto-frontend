//NW.JS GUI Objects
var nw = require('nw.gui');
var win = nw.Window.get();
//Require Node Modules
var fs = require('fs');

//Require Local Modules
//Module to obtain all data for the application
var data = require('./js/data');
//Module to check whether the app is connected to the internet or not
var connectionCheck = require('./js/connectionCheck');
//Module to load app configurations
var configurationManager = require('./js/configurationManager');

//Configuration File Path
var configFile = 'config.json';

function onInit(){
	//Close button Implementation
    document.getElementById('closebutton').onclick = function(){
        win.close();
    };
    configurationManager.init(configFile);
    console.log(configurationManager.getConfigObject().FirstName);
	data(connectionCheck);
}
