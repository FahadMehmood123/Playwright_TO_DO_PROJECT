import {expect} from '@playwright/test'

export class PracticeFormPage {
  constructor(page) {
    this.page = page;

    // Textboxes
    this.firstName = page.getByRole('textbox', { name: 'First Name' });
    this.lastName = page.getByRole('textbox', { name: 'Last Name' });
    this.email = page.getByRole('textbox', { name: 'name@example.com' });
    this.mobile = page.getByRole('textbox', { name: 'Mobile Number' });
    this.currentAddress = page.getByRole('textbox', { name: 'Current Address' });

    // Gender
    this.genderMale = page.getByText('Male', { exact: true });

    // DOB
    this.dateOfBirth = page.locator('#dateOfBirthInput');
    this.yearSelect = page.getByRole('combobox').nth(1);
    this.monthSelect = page.getByRole('combobox').first();
    this.dateSelect = page.getByRole('option', { name: 'Choose Thursday, November 4th,' });

    // Subjects
    this.subjectInputBox = page.locator('#subjectsInput');
    this.subjectEnglish = page.getByText('English', { exact: true });

    // Hobbies
    this.hobbySports = page.getByText('Sports');

    // File upload
    this.fileUpload = page.locator('#uploadPicture');

    // State/City Dropdowns
    this.stateDropdown = page.locator('#state .css-1wy0on6 .css-tlfecz-indicatorContainer');
    this.stateHaryana = page.getByText('Haryana', { exact: true });

    this.cityDropdown = page.locator('#city .css-1wy0on6 .css-tlfecz-indicatorContainer');
    this.cityPanipat = page.getByText('Panipat', { exact: true });

    // Submit Button
    this.submitButton = page.getByRole('button', { name: 'Submit' });

    // Modal
    this.modalBody = page.locator('body > div.fade.modal.show > div > div > div.modal-body');
  }

  // ------------------------------
  // FUNCTIONS
  // ------------------------------

  async open() {
    await this.page.goto('https://demoqa.com/automation-practice-form');
  }

  async fillName(first, last) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
  }

  async fillEmail(email) {
    await this.email.fill(email);
  }

  async selectGenderMale() {
    await this.genderMale.click();
  }

  async fillMobile(num) {
    await this.mobile.fill(num);
  }

  async selectDOB() {
    await this.dateOfBirth.click();
    await this.yearSelect.selectOption('1999');
    await this.monthSelect.selectOption('10');
    await this.dateSelect.click();
  }

  async addSubjects() {
    await this.subjectInputBox.fill('English');
    await this.page.keyboard.press('Enter');
    await this.subjectInputBox.fill('Math');
    await this.page.keyboard.press('Enter');
  }

  async selectHobby() {
    await this.hobbySports.click();
  }

  async uploadFile(path) {
    await this.fileUpload.setInputFiles(path);
  }

  async fillAddress(text) {
    await this.currentAddress.fill(text);
  }

  async selectState() {
    await this.stateDropdown.click();
    await this.stateHaryana.click();
  }

  async selectCity() {
    await this.cityDropdown.click();
    await this.cityPanipat.click();
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async waitForModal() {
    await this.modalBody.waitFor({ state: "visible", timeout: 5000 });
  }

  async takeModalScreenshot() {
    await expect(this.modalBody).toHaveScreenshot("form_data.png");
  }

    async completeFormFlow() {
    await this.fillName('Fahad', 'Mehmood');
    await this.fillEmail('fahad@gmail.com');
    await this.selectGenderMale();
    await this.fillMobile('0315883360');
    await this.selectDOB();
    await this.addSubjects();
    await this.selectHobby();
    await this.uploadFile('F:/Automation_project_1/playwright.config.js');
    await this.fillAddress('House 78 street 1 ali town adiyala road rawalpindi');
    await this.selectState();
    await this.selectCity();
    await this.submitForm();
    await this.waitForModal();
    await this.takeModalScreenshot();
  }

}


