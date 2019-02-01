
describe("Automating the AirAsia Website",function(){
beforeEach(function(){
    browser.get("https://www.airasia.com/booking/home/en/gb");
    browser.sleep(5000);
    browser.manage().window().maximize();
    
    browser.ignoreSynchronization=true;

});
it("Logging In",function(){
    element(by.xpath('//*[@id="header"]/div/div[8]/span')).click();
    browser.sleep(3000);
    
    element(by.id('username-input--login')).sendKeys('abhishekpadhidps@gmail.com');
    element(by.id('password-input--login')).sendKeys('Heyman123#');
    element(by.id('loginbutton')).click();
    browser.sleep(5000);
   
    

});
it("Testing the Search function",function(){
    var el=element(by.id('-origin-autocomplete-heatmap'));
    el.sendKeys("Bhubaneswar");
    browser.sleep(3000);
    el.sendKeys(protractor.Key.TAB);
    var el1=element(by.id("-destination-autocomplete-heatmap"));
    el1.sendKeys("Bengaluru");
    browser.sleep(3000);
    el1.sendKeys(protractor.Key.TAB);
    var el2=element(by.id("-depart-autocomplete-heatmap"));
    el2.sendKeys("05/02/2019");
    browser.sleep(3000);
    el2.sendKeys(protractor.Key.TAB);
    var el3=element(by.id("-return-autocomplete-heatmap"));
    el3.sendKeys("12/02/2019");
    browser.sleep(3000);
    var cf=element(by.className('calendar-button'));
    cf.click();
    browser.sleep(3000);
    var sr=element(by.id("flight-search-airasia-button-inner-button-select-flight-heatmap"));
    sr.click();
    browser.sleep(5000);
    var pr1=element(by.xpath('//*[@id="airasia-fare-calendar-div-calendar-date-0-4-heatmap"]/div/div[2]/div/label[2]/span[1]')).getText();
    console.log(parseInt(pr1));
    var pr2=element(by.xpath('//*[@id="airasia-fares-div-low-fare-selected-0-0-heatmap"]/div/div)')).getText();
    expect(parseInt(pr1)).toEqual(parseInt(pr2));
    var pr3=element(by.xpath('//*[@id="airasia-fare-calendar-div-calendar-date-1-11-heatmap"]/div/div[2]/div/label[2]/span[1]')).getText();
    var pr4=element(by.xpath('//*[@id="low-amount-desc"]')).getText();
    expect(parseInt(pr3)).toEqual(parseInt(pr4));
    var total=element(by.xpath('/html/body/app-root/div/main/airasia-select/div/airasia-bottom-booking-summary/div/div[1]/div[2]/div[1]/div[2]')).getText();
    expect(parseInt(total)).toEqual(parseInt(pr1)+parseInt(pr3));
    element(by.id('select-bottom-booking-summary-airasia-button-inner-button-booking-summary-heatmap')).click();


});
});