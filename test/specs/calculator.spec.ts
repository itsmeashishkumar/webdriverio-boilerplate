import calculatorPage from '../pageobjects/calculator.page.js'

describe('Pre-retirement calculator', function () {

    it('should be able to submit a form with all fields filled in ', async () => {
        await browser.maximizeWindow()
        await calculatorPage.open('/insights-tools/retirement-calculator.html')
        await expect(calculatorPage.title).toBePresent();

        await calculatorPage.currentAge.setValue('40')
        await calculatorPage.planToRetireAge.setValue('60')
        await calculatorPage.currentAnnualIncome.click();
        await calculatorPage.currentAnnualIncome.setValue('100000')

        await calculatorPage.currentSpouseIncome.click()
        await calculatorPage.currentSpouseIncome.setValue('75000')
        await calculatorPage.currentRetirementSaving.click()
        await calculatorPage.currentRetirementSaving.setValue('75000')
        await calculatorPage.currentSavingEachYear.click()
        await calculatorPage.currentSavingEachYear.setValue('10')
        await calculatorPage.savingIncreaseRate.click()
        await calculatorPage.savingIncreaseRate.setValue('2')

        await calculatorPage.socialSecurityBenfit('yes').click()
        await calculatorPage.socialSecurityOverride.waitForExist()
        await calculatorPage.socialSecurityOverride.waitForEnabled()
        await browser.execute("arguments[0].click();", await calculatorPage.socialSecurityOverride);
        await calculatorPage.socialSecurityOverride.setValue('4000')

        await calculatorPage.selectMartialStatus('married').waitForExist()
        await calculatorPage.selectMartialStatus('married').click()


        await calculatorPage.adjustDefaultValues.click()
        await calculatorPage.defaultCalculatorModal.waitForDisplayed()

        await calculatorPage.otherIncome.click()
        await calculatorPage.otherIncome.setValue('500')
        await calculatorPage.retirementDuration.setValue('20')

        await calculatorPage.postRetirementIncomeIncrease('Y').waitForEnabled()
        browser.execute("arguments[0].click();",  await calculatorPage.postRetirementIncomeIncrease('Y'));

        await calculatorPage.retirementPercent.click()
        await calculatorPage.retirementPercent.setValue('75')
        await await calculatorPage.preRetirementReturn.waitForClickable()
        await calculatorPage.preRetirementReturn.click()
        await calculatorPage.preRetirementReturn.setValue('8')
        await calculatorPage.postRetirementReturn.click()
        await calculatorPage.postRetirementReturn.setValue('5')
        await calculatorPage.savePersonalizedValues.waitForEnabled()
        await calculatorPage.savePersonalizedValues.click()
        await calculatorPage.calculate.waitForEnabled()
        await calculatorPage.calculate.click()
        await calculatorPage.result.waitForDisplayed()
        await expect(calculatorPage.result).toHaveTextContaining('you might need to consider increasing your monthly savings by')
    })

})
