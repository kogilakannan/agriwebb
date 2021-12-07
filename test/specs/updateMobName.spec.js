const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');
const MobsPage = require('../pageobjects/mobs.page');
const Randomize = require('../utilities/randomize');
const LoginData = require('../testdata/logindata');

describe('Update Mob Name', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(LoginData.username, LoginData.password);
    });

    it('navigate from dashboard to mobs page', async () => {
        await DashboardPage.clickLiveStock();
    });

    it('update mob name with random string and verify', async () => {
        const r = Randomize.randomString();
        await MobsPage.updateMobNameAndVerify(r)
    });
});