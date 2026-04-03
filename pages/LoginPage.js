import {expect} from '@playwright/test';
import CommonAction from "../utilis/commonaction";

export default class LoginPage {
    constructor(page) {
        this.actions = new CommonAction(page)
        this.usernameSelector = '#username'
    }
    async navigate(){
        await this.actions.navigateTo('https://the-internet.herokuapp.com/login')
    }

    async login(username, password) {
        await this.actions.fill('#username', username)
        await this.actions.fill('#password', password)
        await this.actions.click('button[type="submit"]')
    }
}