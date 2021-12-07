class MobsPage {
 
    get mobsTable() {
        return $('#mob-list-table');
    }

    get mobsTableGrid() {
        return this.mobsTable.$('[role=grid]');
    }

    get mobNameInFirstRow(){
        return this.firstRow.$('td.aw-table-cell-mobNameDecorated a');
    }

    get firstRow(){
        return this.mobsTableGrid.$('tbody tr');
    }

    get btnEditMob() {
        return $('//button[contains(text(),"Edit")]');
    }

    get inputmobName() {
        return $('#title-txt');
    }
    
    get btnSave() {
        return $('//button[contains(text(),"Save")]');
    }


    async clickMob () {
        await this.btnEditMob.click();
    }

    async clickSave () {
        await this.btnSave.click();
    }

    async updateMobNameAndVerify (randomMobname) {
        await this.clickMob();
        await this.inputmobName.clearValue()
        await this.inputmobName.setValue(randomMobname);
        await this.btnSave.click();
        await expect(await this.mobNameInFirstRow).toHaveText(randomMobname, { ignoreCase: true })
    }
}

module.exports = new MobsPage();
