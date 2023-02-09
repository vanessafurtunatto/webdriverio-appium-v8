describe('Android Exercise', () =>{
    it('Exercise - text field', async () => {
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();

        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue('Van');
        await expect(textField).toHaveText('Van');
    })
});