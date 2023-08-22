import Page from './page.js'

class Calculator extends Page {
    /**
    * define elements
    */
    get title() { return $('#calculator-intro-section') }
    get currentAge() { return $('#current-age') }
    get planToRetireAge() { return $('#retirement-age') }
    get currentAnnualIncome() { return $('#current-income') }
    get currentSpouseIncome() { return $('#spouse-income') }
    get currentRetirementSaving() { return $('#current-total-savings') }
    get currentSavingEachYear() { return $('#current-annual-savings') }
    get savingIncreaseRate() { return $('#savings-increase-rate') }

    get socialSecurityOverride() { return $('#social-security-override') }
    get adjustDefaultValues() { return $("[data-target='#default-values-modal']") }
    get defaultCalculatorModal() { return $('#default-values-modal-title') }
    get otherIncome () { return $('input#additional-income') }
    get retirementDuration() { return $('input#retirement-duration') }
    get retirementPercent() { return $('input#retirement-annual-income') }
    get preRetirementReturn() { return $('input#pre-retirement-roi') }
    get postRetirementReturn() { return $('input#post-retirement-roi') }
    get savePersonalizedValues() { return $("button[onclick*='savePersonalizedValues']") }
    get calculate() { return $("button[onclick*='calculateResults']") }
    get result(){return $("#result-message")}
    
  
    
    
    /**
     * define or overwrite page methods
     */
    open(path:string) {
        return super.open(path)
    }

    socialSecurityBenfit(option: string) { 
        return $("[id*='" + option + "']+label") 
    }

    postRetirementIncomeIncrease(option: string) {
         return $("[aria-labelledby='inflation-label'] input[value='"+option+"']") 
    }

    selectMartialStatus(status: string) {
        return $("#marital-status-label+ul [for='"+status+"']") 
   }

}

export default new Calculator()