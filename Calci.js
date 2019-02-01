describe("Validating the Calculator App",function(){

    it("Validate 1+1=2",function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        element(by.model("first")).sendKeys("1");
        element(by.model("second")).sendKeys("1");
        element(by.buttonText("Go!")).click();

        element(by.binding("latest")).getText().then(function(text){
            console.log("Result is"+" "+text);

        });

    });
});