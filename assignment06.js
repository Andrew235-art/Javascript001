// Car Rental Charges

function calculateRentalCharges() {
    const customerName = prompt("Enter customer name:");
    const daysHired = parseInt(prompt("Enter number of days hired:"));
    const initialMileage = parseFloat(prompt("Enter initial mileage:"));
    const finalMileage = parseFloat(prompt("Enter final mileage:"));

    const costPerMile = 700;
    const serviceCharges = 4000;
    const costPerDay = 7000;

    const mileageCost = (finalMileage - initialMileage) * costPerMile;
    const totalCost = (daysHired * costPerDay) + mileageCost + serviceCharges;

    alert(`Customer Name: ${customerName}\nMiles moved: ${finalMileage - initialMileage}\nTotal amount payable: ${totalCost}`);
}
calculateRentalCharges();