import Page from "../pageobjects/page";

describe('TAH Functionality', () => {
  it('Click try at home widget', async () => {
    let searchSelector = await $('id=com.caratlane.android:id/txt_skip_login');
    await searchSelector.click();
    
    var youIcon = await $("//android.widget.TextView[@text='You']");
    await youIcon.waitForDisplayed();
    await youIcon.click();

    var callIcon = await $("//android.widget.TextView[@text='Call']");
    await callIcon.waitForDisplayed();
    await callIcon.click();
    let pageNew = new Page()
    await pageNew.openDeepLinkUrl(`app.caratlane.com/shayaLanding?shayaLanding`)
    });
});

