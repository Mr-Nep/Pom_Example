import { expect } from "@playwright/test";
import CommonAction from "../utilis/commonaction"

export default class SecurePage {
    constructor(page) {
        this.actions = new CommonAction(page)
    }
    async getMessage() {
        return await this.actions.getText('#flash')
    }

    async assertLoginMessage(passedMessage) {
        const message = await this.getMessage()
        expect(message).toContain(passedMessage)
    }
}
