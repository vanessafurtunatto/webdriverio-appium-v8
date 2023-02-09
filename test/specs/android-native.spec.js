describe('Android Native', () =>{
    it('Access an activity directly', async () => {
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

        await driver.pause(3000);
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })
});