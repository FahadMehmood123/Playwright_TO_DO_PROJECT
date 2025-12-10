import { test, expect } from '@playwright/test';

test('T1_Check_Data_In_List', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/#/');
  await page.getByTestId('text-input').fill('Lunch');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Dinner');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Namaz');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Work');
  await page.getByTestId('text-input').press('Enter');
  await expect(page.getByTestId('todo-list')).toContainText('Lunch');
  await expect(page.getByTestId('todo-list')).toContainText('Dinner');
  await expect(page.getByTestId('todo-list')).toContainText('Namaz');
  await expect(page.getByTestId('todo-list')).toContainText('Work');
});

test("T2_Item_removal",async({page})=>{

    await page.goto('https://todomvc.com/examples/react/dist/#/');

    await page.getByTestId('text-input').fill("work");
    await page.getByTestId('text-input').press('Enter');
    await page.locator('#root > main > ul > li:nth-child(1) > div > label').hover();
    await page.locator('#root > main > ul > li:nth-child(1) > div > button').click();
    expect(page.locator('#root > main > ul')).not.toContainText("work")

})

test("T3_Check_Visiblity_all_items", async({page})=>{

    await page.goto('https://todomvc.com/examples/react/dist/#/');
    await page.getByTestId('text-input').fill('work');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('dinner');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('namaz');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('sleep');
    await page.getByTestId('text-input').press('Enter');
    await page.getByRole('link', { name: 'All' }).click();
    await expect(page.getByTestId('todo-list').getByText('work')).toBeVisible();
    await expect(page.getByText('dinner')).toBeVisible();
    await expect(page.getByText('namaz')).toBeVisible();
    await expect(page.getByText('sleep')).toBeVisible();

})

test("T4_check_visiblity_of_active_item",async({page})=>{
    await page.goto('https://todomvc.com/examples/react/dist/#/');
    await page.getByTestId('text-input').fill('work');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('dinner');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('item');
    await page.getByTestId('text-input').press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'work' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('listitem').filter({ hasText: 'dinner' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('link', { name: 'Active' }).click();
    expect(page.getByRole('listitem').filter({ hasText: 'work' })).toBeHidden();
    expect(page.getByRole('listitem').filter({ hasText: 'dinner' })).toBeHidden();

})

test("T5_check_Completed_item_list",async({page})=>{
    await page.goto('https://todomvc.com/examples/react/dist/#/');
    await page.getByTestId('text-input').fill('work');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('dinner');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('item');
    await page.getByTestId('text-input').press('Enter');
    await page.getByRole('link', { name: 'Completed' }).click();
    expect(page.locator("#root > main > ul")).toBeHidden();
})


test.only("T6_Checkbox_Behaviour",async({page})=>{
    await page.goto('https://todomvc.com/examples/react/dist/#/');
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill('work');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('place');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('item');
    await page.getByTestId('text-input').press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'work' }).getByTestId('todo-item-toggle').check();
    expect(page.getByRole('listitem').filter({ hasText: 'work' }).getByTestId('todo-item-toggle')).toBeChecked();
    
    //tocheckCSS 
    expect(page.locator("#root > main > ul > li:nth-child(1) > div > label")).toHaveCSS('text-decoration','line-through')
    
    await page.getByRole('listitem').filter({ hasText: 'place' }).getByTestId('todo-item-toggle').check();
    expect(page.getByRole('listitem').filter({ hasText: 'place' }).getByTestId('todo-item-toggle')).toBeChecked();

})

