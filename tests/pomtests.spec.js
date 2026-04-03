import {test, epect} from '@playwright/test';
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
    })

})