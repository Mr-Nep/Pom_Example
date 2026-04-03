import LoginPage from "./LoginPage";
import SecurePage from "./SecurePage";
import CheckboxesPage from "./CheckboxesPage";

export default class PomManager {
    constructor(page) {
        this.page = page;
        this.LoginPage = new LoginPage(page)
        this.SecurePage = new SecurePage(page)
        this.CheckboxesPage = new CheckboxesPage(page)
    }
}