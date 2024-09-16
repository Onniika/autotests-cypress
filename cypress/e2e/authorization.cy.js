import * as data from '../helpers/default_data.json'
import * as main_page from '../locators/main_page.json'
import * as login_number from '../locators/login_number.json'


describe('Проверка авторизации', function () {
   beforeEach('Начало теста', function () {
         cy.visit('/');
           });
        
  it('Правильный логин и правильный пароль', function () {
       cy.get(login_number.phone).type(data.phone);
       cy.get(login_number.password).type(data.password);
       cy.intercept('POST', 'https://api.av.by/auth/phone/sign-in',[]).as('sign-in');
       cy.get(login_number.comein_btn).click();
       cy.wait('@sign-in');
       })

       it('Востановить пароль', function () {
        cy.get('[aria-labelledby="по телефону"] > .flyer__body > form > .flyer__form > .flyer__forgot > a').type(data.phone);
            cy.get('#phone').type(data.phone);
            cy.get('[aria-labelledby="по телефону"] > .flyer__body > form > .flyer__form > .flyer__submit > .button').click();
            
        })



      })

    
       //  cy.intercept('https://api.av.by/home/filters/home/update', (request) => {
      //             request.on('response', (response) => {
                     
      //                   console.log(cy.get(main_page.show),'inner text');
      //                   // console.log(cv.get(main_page.show), 'button');
      //                   // if(response.body.count) === cv.get(main_page.show).content()
      //                   console.log(response,'response!');

      //                   cy.get(main_page.show).click();
      //             })
      //       })
   
      //  })
      // cy.intercept('POST', 'https://api.av.by/home/filters/home/update',[]).as('update')
      //  cy.wait('@update');
       
       //cy.wait('@update').then(() =>
