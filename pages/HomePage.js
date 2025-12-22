class HomePage {

    constructor(page) {
        this.page = page;

        //Register & Login Links
        this.accountMenuLink = page.locator("//span[text()='My Account']");
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.loginLink = page.getByRole('link', { name: 'Login' });

        // Search Box
        this.searchBox = page.locator("input[name='search']");
        this.searchBtn = page.locator("button[class='btn btn-default btn-lg']");

    }
    // Test Step 1: Open the application
    async goto() {
        await this.page.goto('http://rahulhub.com/ecom');
    }

    // Test Step 2: Navigate to Register Page
    async navigateToRegisterPage() {
        await this.accountMenuLink.click();
        await this.registerLink.click();
    }
    // Test Step 3: Navigate to Login Page
    async navigateToLoginPage() {
        await this.accountMenuLink.click();
        await this.loginLink.click();
    }

    // Test Step 4: Search for a product
    async searchProduct(productName) {
        await this.searchBox.fill(productName);
        await this.searchBtn.click();
    }

}
module.exports = { HomePage };