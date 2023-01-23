

import { config } from "./wdio.conf.js";
config.user= process.env.BROWSERSTACK_USERNAME,
config.key= process.env.BROWSERSTACK_ACCESS_KEY,
 config.capabilities= [
   {
      "platformName": "android",
      "appium:platformVersion" : "11.0",
      "appium:noReset": false,
      "appium:fullReset": true,
      "appium:deviceName" : "Google Pixel 5",
      "appium:app" : "bs://694e6e1185d55f5cd2c04a3da43a16926a99ae83",
      "appium:skipServerInstallation":"true",
      "appium:skipDeviceInitialization":"true",
      'bstack:options' : {
      "projectName" : "Webdriverio Android Execution",
     "buildName" :process.env.BROWSERSTACK_BUILD_NAME || "Android CL App -"+`${new Date().getTime()}`,
     "idleTimeout" : "300",
     "debug" : "true",
     "networkLogs" : "true",
      "appiumVersion" : "1.22.0",
      "disableAnimations" : "true",
      
      },
      maxInstances: 4,
      "appium:autoGrantPermissions": true,
  }
],


 exports.config = config;
