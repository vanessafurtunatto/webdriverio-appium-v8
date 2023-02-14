describe('Android Exercise', () =>{
    it('Exercise - scrolling', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText(); 
        await $('~change the date').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('//*[@text="10"]').click();
        await $('//*[@text="OK"]').click();
        await expect(await date.getText()).not.toEqual(currentDate);
       
    })
});