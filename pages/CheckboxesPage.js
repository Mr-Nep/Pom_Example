import { expect } from "@playwright/test";
import CommonAction from "../utilis/commonaction";

export default class CheckboxesPage {
    constructor(page) {
        this.actions = new CommonAction(page)
    }

    async navigate(){
        await this.actions.navigate('https://the-internet.herokuapp.com/checkboxes')
    }

    async checkCheckbox(index) {
        await this.actions.click(`input[type="checkbox"]:nth-child(${index})`)
    }
    async assertCheckboxChecked(index) {
        return await this.actions.isChecked(`input[type="checkbox"]:nth-child(${index})`)
    }
    async assertCheckboxUnchecked(index) {
        return await this.actions.isNotChecked(`input[type="checkbox"]:nth-child(${index})`)
    }

    async assertCheckbox(index, expectedChecked) {
        const isChecked = await this.assertCheckboxChecked(index)
        expect(isChecked).toBe(expectedChecked)
    }
}