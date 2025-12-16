import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../Generalize';

test('T1_overall_flow', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Fahad');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Mehmood');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('fahad@gmail.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('0315883360');
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).selectOption('2021');
  await page.getByRole('combobox').first().selectOption('10');
  await page.getByRole('combobox').nth(1).selectOption('1999');
  await page.getByRole('option', { name: 'Choose Thursday, November 4th,' }).click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('Englis');
  await page.getByText('English', { exact: true }).click();
  await page.locator('#subjectsInput').fill('Math');
  await page.locator('#subjectsInput').press('Enter');
  await page.getByText('Sports').click();
  
  //FIle upload method
  const handle= page.locator('#uploadPicture');
  await handle.setInputFiles('F:/Automation_project_1/playwright.config.js')
  //FIle upload method
  
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('House 78 street 1 ali town adiyala road rawalpindi');
  await page.locator('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click();
  await page.getByText('Haryana', { exact: true }).click();
  await page.locator('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click();
  await page.getByText('Panipat', { exact: true }).click();

  //to compare screenshot
  
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await expect(page.locator('body > div.fade.modal.show > div > div > div.modal-body')).toHaveScreenshot('form_data.png');

  //above line will take screenshot first and in send attemp it will cmapre the screenshots

});

// POM Model-------------------
// test('T1_POM_overall_flow', async ({ page }) => {
  
//   const form=new PracticeFormPage(page)
//   await form.open();
//   await form.completeFormFlow();

// });

// test('T2_Negative_email_Test',async({page})=>{
//     await page.goto('https://demoqa.com/automation-practice-form');
//     await page.getByRole('textbox', { name: 'name@example.com' }).fill('fahad@gmailcom');
//     await page.getByRole('button', { name: 'Submit' }).click();
//     expect.soft(page.locator('#userEmail')).toHaveCSS('border-color','rgb(220, 53, 69)')
  
// })

// test('T3_Negative_Mobile_Number_Test',async({page})=>{
//     await page.goto('https://demoqa.com/automation-practice-form');
//     await page.getByRole('textbox', { name: 'Mobile Number' }).click();
//     await page.getByRole('textbox', { name: 'Mobile Number' }).fill('031588330');
//     expect.soft(page.locator('#userNumber')).toHaveCSS('border-color','rgb(220, 53, 69)')
  
// })


