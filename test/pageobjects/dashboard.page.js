class DashboardPage {

    get lnkLivestock() {
        return $('//span[contains(text(),"Livestock")]');
    }
    
    async clickLiveStock () {
        await this.lnkLivestock.click();
    }
}

module.exports = new DashboardPage();