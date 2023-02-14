describe('Android Native', () =>{
    it('Access an activity directly', async () => {
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Dialog box', async () => {
        await $('~App').click();
        await $('~Alert Dialogs').click();
        await $('~OK Cancel dialog with a message').click();
        await driver.acceptAlert();
        await expect ($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();

    })

    it('Vertical Scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();
        // (Not stable)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        //scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();
        await expect($('~Secure Dialog')).toExist();

    })

    it('Horizontal Scrolling', async () => {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Views")').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Gallery")').click();
        await $('~1. Photos').click();
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(1,5)');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    })
});