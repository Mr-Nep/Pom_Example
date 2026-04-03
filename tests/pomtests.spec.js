import {test, expect} from '@playwright/test';
import PomManager from '../pages/PomManager';


let pm;

test.describe('Login Tests', () => {
    test.beforeEach(async ({page}) => {
        pm = new PomManager(page)
    })

    test.afterEach(async ({page}) => {
        await page.close()
    })

    test('Login with valid credentials', async ({page}) => {
        await pm.LoginPage.navigate()
        await pm.LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await pm.SecurePage.assertLoginMessage('You logged into a secure area!')    
        
        // Assert value directly in test
        const message = await pm.SecurePage.getMessage()
        expect(message).toContain('You logged into a secure area!')
    })

    test('Login with invalid Username', async ({page}) => {
        await pm.LoginPage.navigate()
        await pm.LoginPage.login('invalidUser', 'invalidPassword')
        await pm.LoginPage.assertErrorMessage('Your username is invalid!')
    
    })

})


test.describe.only('Checkbox Verification', () => {
    test.beforeEach(async ({page}) => {
        pm = new PomManager(page)
    })

    test.afterEach(async ({page}) => {
        await page.close()
    })

    test('Check and uncheck checkboxes', async ({page}) => {
        await pm.CheckboxesPage.navigate()

        // check the first checkbox
        await pm.CheckboxesPage.checkCheckbox(1)
        await pm.CheckboxesPage.assertCheckbox(1, true)
    })

})