/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
    async openDeepLinkUrl(url) {
        const prefix ='caratlane://';
     
        if (await driver.isIOS) {
    
          const simulatorRegex = new RegExp('(.*-.*){2,}');
    
          // Check if we are a simulator
          if (await driver.capabilities.udid && simulatorRegex.test(await driver.capabilities.udid)){
              await driver.url(`${ prefix }${ url }`);
          } else {
              // Else we are a real device and we need to take some extra steps
              // Launch Safari to open the deep link         
              // await driver.execute('mobile: terminateApp', { bundleId: 'com.caratlane.retail' });
    
             await driver.execute('mobile: launchApp', { bundleId: 'com.apple.mobilesafari' });
    
    
      
              // Add the deep link url in Safari in the `URL`-field
              // This can be 2 different elements, or the button, or the text field
              // Use the predicate string because  the accessibility label will return 2 different types
              // of elements making it flaky to use. With predicate string we can be more precise
              const addressBar = await $(`-ios predicate string:${ `label == "Address" OR name == "URL"`}`);
              const urlField = await $(`-ios predicate string:${ `type == "XCUIElementTypeTextField" && name CONTAINS "URL"`}`);
      
              // Wait for the url button to appear and click on it so the text field will appear
              // iOS 13 now has the keyboard open by default because the URL field has focus when opening the Safari browser
              if (!((await driver.isKeyboardShown()))) {
                   await addressBar.waitForDisplayed(10000)
                   await addressBar.click();
              }
      
              // Submit the url and add a break
              //\uE007
              console.log(`${ prefix }${ url }`)
             await urlField.setValue(`${ prefix }${ url }`);
             const keyboardGo = await $(`-ios class chain:${ `**/XCUIElementTypeKeyboard[1]/**/XCUIElementTypeButton[-1]`}`)
             await keyboardGo.waitForDisplayed(1000)
             await keyboardGo.click()
    
          }
      
          /**
           * PRO TIP:
           * if you started the iOS device with `autoAcceptAlerts:true` in the capabilities then Appium will auto accept the alert that should
           * be shown now. You can then comment out the code below
           */
          // Wait for the notification and accept it
          // When using an iOS simulator you will only get the pop-up once, all the other times it won't be shown
          try {
              const openSelector = 'type == \'XCUIElementTypeButton\' && name CONTAINS \'Open\'';
              const openButton = await $(`-ios predicate string:${ openSelector }`);
              // Assumption is made that the alert will be seen within 2 seconds, if not it did not appear
              await openButton.waitForDisplayed(15000);
              await openButton.click();
          } catch (e) {
          }
    
        }
        else{
        await driver.execute('mobile:deepLink', {
            url: `${ prefix }${ url }`,
            package: "com.caratlane.android",
        });
        
      }
     }
    
}
