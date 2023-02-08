describe('Android Element Test', () =>{
    it('Find element by accessibility id', async () => {
        const appOption = await $('~App');
        await appOption.click();

        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it('Find element by class name', async () => {
        const className = await $('android.widget.TextView');
        await expect(className).toHaveText("API demos");
    })

    it('Find element by xpath', async () => {
        await $('//android.widget.TextView[@content-desc="Content"]').click();
        await $('//android.widget.TextView[@resource-id="android:id/text1"]').click();
        await $('//android.widget.TextView[@text="Read Asset"]').click();

        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("Content/Assets/Read Asset");
    })

    it('Find element by UIAutomator', async () => {
        await $('android=new UiSelector().textContains("Graphics")').click();
    })

    it('Find multiple elements', async () => {
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics',
            'Media', 'NFC',
            'OS', 'Preference',
            'Text', 'Views'
        ]
        const actualList = []

        const textList = await $$('android.widget.TextView');

        for (const element of textList){
            actualList.push(await element.getText());
        }

        await expect(actualList).toEqual(expectedList);
    })

});