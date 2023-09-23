
import { config } from "./wdio.shared.conf";

config.user= process.env.BROWSERSTACK_USERNAME
config.key=process.env.BROWSERSTACK_ACCESS_KEY
config.capabilities= [
   {
     "platformName": "iOS",
     "appium:noReset": false,
     "appium:platformVersion": "15",
     "appium:fullReset": true,
     "appium:deviceName": "iPhone 11 Pro",
     "appium:automationName": "XCUITest",
     "appium:app":"<app file>",
     "appium:newCommandTimeout": 3600,
     "appium:autoAcceptAlerts": true,
     "appium:launchTimeout": 10000,
     'appium:showIOSLog':true,
     "appium:maxTypingFrequency":30,
     'bstack:options': {  
       "projectName": "Webdriverio iOS Execution",
       "buildName": process.env.BROWSERSTACK_BUILD_NAME || "iOS CL App -" + `${new Date().getTime()}`,
       "appiumVersion": "2.0.1",
       "idleTimeout": 300,
       "disableAnimations": "true",
       "debug": "true",
       "enableCameraImageInjection" : true,
    },

   }
]
  config.services = ['browserstack'];


 const _config = config;
export { _config as config };
