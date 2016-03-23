//Require Node Modules
var fs = require('fs');

//Loading Configuration from config file
var configurationManager = {
  init: function(configPath){
    try{
      stats = fs.lstatSync(configPath);
      if(stats.isFile()){
        configurationManager.ConfigObj = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    }
    catch (e){
      console.log("Exception: "+e)
    }
  },
  getConfigObject: function(){
    if(configurationManager.ConfigObj != 'undefined'){
      return configurationManager.ConfigObj;  
    }
    else{
      return {};
    }
  }
}

module.exports = configurationManager;