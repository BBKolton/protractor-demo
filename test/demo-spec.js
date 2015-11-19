'use strict';

describe('Twitter login form', function() {

    it('should have a title of twitter login', function() {

        browser.get('http://localhost:8000/');

        expect(browser.getTitle()).toEqual('Firebase Demo');

        
    });

    it('should let a user sign into an account', function() {

        var emailInput = element(by.model('email'));
        emailInput.sendKeys('test@example.com');
        var button = element(by.buttonText('Sign-in'));
        expect(button.isEnabled()).toEqual(false);
        var passwordInput = element(by.model('password'))
        passwordInput.sendKeys('password');
        expect(button.isEnabled()).toEqual(true);


        //button.click();

        //var el = $('.')

    });

});