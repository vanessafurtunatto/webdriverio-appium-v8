describe('Android Element Test', () =>{
    it('Find element by accessibily id', async () => {
        const appOption = await $('~App');
        await appOption.click();

        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })
});