// Transaction for selling items

function calculateTotalCost() {
    const item1Name = prompt("Enter first item name:");
    const item1Price = parseFloat(prompt("Enter first item price:"));
    const item1Quantity = parseInt(prompt("Enter quantity for first item:"));
    const item1Discount = parseFloat(prompt("Enter discount for first item (%):"));

    const item2Name = prompt("Enter second item name:");
    const item2Price = parseFloat(prompt("Enter second item price:"));
    const item2Quantity = parseInt(prompt("Enter quantity for second item:"));
    const item2Discount = parseFloat(prompt("Enter discount for second item (%):"));

    const totalItem1 = (item1Price * item1Quantity) * (1 - (item1Discount / 100));
    const totalItem2 = (item2Price * item2Quantity) * (1 - (item2Discount / 100));
    const totalCost = totalItem1 + totalItem2;

    alert(`Total cost for ${item1Name}: ${totalItem1}\nTotal cost for ${item2Name}: ${totalItem2}\nTotal cost: ${totalCost}`);
}
calculateTotalCost();