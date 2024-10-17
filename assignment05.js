// Depreciation calculation

function calculateDepreciation() {
    const costValue = parseFloat(prompt("Enter cost value:"));
    const scrapValue = parseFloat(prompt("Enter scrap value:"));
    const usefulLifeYears = parseInt(prompt("Enter estimated number of years of useful life:"));

    const depreciationPerAnnum = (costValue - scrapValue) / usefulLifeYears;
    const yearsUsed = parseInt(prompt("Enter number of years used so far:"));
    const accumulatedValue = depreciationPerAnnum * yearsUsed;
    const netBookValue = costValue - accumulatedValue;

    alert(`Depreciation per annum: ${depreciationPerAnnum}\nAccumulated value: ${accumulatedValue}\nNet book value: ${netBookValue}`);
}
calculateDepreciation();