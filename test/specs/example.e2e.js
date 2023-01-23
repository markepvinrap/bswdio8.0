
describe('TAH Functionality', () => {
  it('Click try at home widget', async () => {
    var searchSelector = await $('id=com.caratlane.android:id/txt_skip_login');
    await searchSelector.click();
    
    var youIcon = await $("//android.widget.TextView[@text='You']");
    await youIcon.waitForDisplayed();
    await youIcon.click();

    var callIcon = await $("//android.widget.TextView[@text='Call']");
    await callIcon.waitForDisplayed();
    await callIcon.click();


//     await browser.getWindowRect();
//     await browser.touchAction([
//         { action: 'press', x: 432, y: 1823 },
//         { action: 'wait',ms:1000},
//         { action: 'moveTo', x: 432, y: 369 },
//         'release'
//        ]);

//   await browser.getWindowRect();
//   await browser.touchAction([
//     { action: 'press', x: 432, y: 1823 },
//     { action: 'wait',ms:1000},
//     { action: 'moveTo', x: 432, y: 369 },
//     'release'
//    ]);

// await browser.getWindowRect();
// await browser.touchAction([
//     { action: 'press', x: 432, y: 1823 },
//     { action: 'wait',ms:1000},
//     { action: 'moveTo', x: 432, y: 369 },
//     'release'
//    ]);

// await browser.getWindowRect();
// await browser.touchAction([
//     { action: 'press', x: 432, y: 1823 },
//     { action: 'wait',ms:1000},
//     { action: 'moveTo', x: 432, y: 369 },
//     'release'
//    ]);

// await browser.getWindowRect();
// await browser.touchAction([
//     { action: 'press', x: 432, y: 1823 },
//     { action: 'wait',ms:1000},
//     { action: 'moveTo', x: 432, y: 369 },
//     'release'
//    ]);

// await browser.getWindowRect();
// await browser.touchAction([
//     { action: 'press', x: 432, y: 1823 },
//     { action: 'wait',ms:1000},
//     { action: 'moveTo', x: 432, y: 369 },
//     'release'
//    ]);


// await browser.getWindowRect();
// await browser.touchAction([
//     { action: 'press', x: 432, y: 1823 },
//     { action: 'wait',ms:1000},
//     { action: 'moveTo', x: 432, y: 369 },
//     'release'
//    ]);


// await browser.getWindowRect();
// await browser.touchAction([
//     { action: 'press', x: 432, y: 1823 },
//     { action: 'wait',ms:1000},
//     { action: 'moveTo', x: 432, y: 369 },
//     'release'
//    ]);

//    await browser.getWindowRect();
// await browser.touchAction([
//     { action: 'press', x: 432, y: 1823 },
//     { action: 'wait',ms:1000},
//     { action: 'moveTo', x: 432, y: 369 },
//     'release'
//    ]);
//    await browser.getWindowRect();
// await browser.touchAction([
//     { action: 'press', x: 432, y: 1823 },
//     { action: 'wait',ms:1000},
//     { action: 'moveTo', x: 432, y: 369 },
//     'release'
//    ]);
   
  
//   var status = await insertTextSelector.waitForDisplayed({ timeout: 1000 });
//   await insertTextSelector.click();
    
  });
});

