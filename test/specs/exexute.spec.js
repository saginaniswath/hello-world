//const { SUPPORTED_BROWSER_RUNNER_PRESETS } = require('@wdio/cli/build/constants');
//const { SUPPORTED_BROWSER_RUNNER_PRESETS } = require('@wdio/cli/build/constants');
const searchpage =require('../pageobjects/automate');
//const Page=require('../pageobjects/page');
//const { search } = require('../pageobjects/automate');
describe('my automation works', () =>
{
    it("enter selenium in search bar", async()=>
    {
        searchpage.open();
        await searchpage.search.setValue("selenium");
        //await searchpage.search.click();
       // await browser.pause(5000);
        await(searchpage.tools).click();
      //  await(searchpage.tool2).click();
     //   await(searchpage.tool3).toBePresent();
        await browser.pause(5000);
       //  await searchpage.search1.click();
    //    await(searchpage.tool2).click();
    //    let d=0;
    //    let i=0;
    //     while(i<10){
    //     d+= i+"hello world"+""+"\n";
    //     i++;
    // }

    })
})