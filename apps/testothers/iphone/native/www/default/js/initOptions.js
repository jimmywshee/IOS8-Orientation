
/* JavaScript content from js/initOptions.js in folder common */
/*
* Licensed Materials - Property of IBM
* 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

// Uncomment the initialization options as required. For advanced initialization options please refer to IBM Worklight Information Center

var wlInitOptions = {

  // # Should application automatically attempt to connect to Worklight Server on application start up
  // # The default value is true, we are overriding it to false here.
  connectOnStartup : false,

  // # The callback function to invoke in case application fails to connect to Worklight Server
  //onConnectionFailure: function (){},

  // # Worklight server connection timeout
  //timeout: 30000,

  // # How often heartbeat request will be sent to Worklight Server
  //heartBeatIntervalInSecs: 20 * 60,

  // # Application Logger, see documentation more details.
  // - enabled - Determines if log messages are shown (true) or not (false)
  // - level - Logging level, most to least verbose: 'debug', 'log', 'info', 'warn', 'error'
  // - stringify - Turn arguments into strings before printing to the console (true) or not (false)
  // - pretty - Turns JSON Objects into well spaced and formated strings.
  // - tag.level - Append a level tag (e.g. [DEBUG] Message) to the message.
  // - tag.package - Append the package tag  (e.g. [my.pkg] Message) to the message if there is one
  // - whitelist - Array of package names to show (e.g ['my.pkg'])
  // - blacklist - Array of package names to ignore (e.g ['my.pkg'])
  // - nativeOptions - Object with configuration specific to underlying native behavior (Android and IOS only)
  logger : {enabled: true, level: 'debug', stringify: true, pretty: false,
    tag: {level: false, pkg: true}, whitelist: [], blacklist: [], nativeOptions: {capture: false}}

  // # The options of busy indicator used during application start up
  //busyOptions: {text: "Loading..."}
};

if (window.addEventListener) {
  window.addEventListener('load', function() { WL.Client.init(wlInitOptions); }, false);
} else if (window.attachEvent) {
  window.attachEvent('onload',  function() { WL.Client.init(wlInitOptions); });
}
