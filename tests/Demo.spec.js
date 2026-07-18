import {test} from "@playwright/test"

test('Demo', async({page})=>{
    await page.goto('https://www.facebook.com/')
})
test('Demo1', async({page})=>{
    await page.goto('https://www.amazon.com/')
})

