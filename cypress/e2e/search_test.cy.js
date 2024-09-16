import * as data from '../helpers/default_data.json'
import * as main_page from '../locators/main_page.json'
import * as login_number from '../locators/login_number.json'

describe('Проверка авторизации', function () {
   beforeEach('Начало теста', function () {
         cy.visit('https://av.by/');
           });
        
  it('Критический путь', function () {
      //  cy.get(login_number.phone).type(data.phone);
      //  cy.get(login_number.password).type(data.password);
      //  cy.intercept('POST', 'https://api.av.by/auth/phone/sign-in',[]).as('sign-in');
      //  cy.get(login_number.comein_btn).click();
      //  cy.wait('@sign-in');

       cy.get(main_page.mark_btn).click();
       cy.get(main_page.mark_input).type('Geely').type('{enter}'); 
       cy.get(main_page.model_btn).click();
       cy.get(main_page.model_select_button).contains('Tugella').click();
       cy.get(main_page.select_years_from_btn).click();
       cy.get(main_page.select_years_from).contains('2000').click();
       cy.get(main_page.select_years_to_btn).click();
       cy.get(main_page.select_years_to).contains('2022').click();
       cy.get(main_page.price_from_btn).type(1900);
       cy.get(main_page.price_to_btn).type(26000);
       cy.wait(2000);
       cy.get(main_page.show).click();
       cy.get(main_page.sorting_btn).click();
       cy.get(main_page.sorting_value_btn).contains('дорогие').click();

       })

    })


  



    



    
