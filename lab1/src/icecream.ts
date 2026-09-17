function orderIceCream(): void {
    let totalCost = 0;

    const size = prompt("Choose size (enter 1 or 2):\n1 - Small cup (10 UAH)\n2 - Large cup (25 UAH)");
    
    if (size === "1") {
        totalCost += 10;
    } else if (size === "2") {
        totalCost += 25;
    } else {
        console.error("Error: Invalid size.");
        alert("Please choose a valid size (1 or 2).");
    }

    const toppings = prompt("Choose toppings (you can select multiple separated by commas, e.g., 1,3):\n1 - Chocolate (+5 UAH)\n2 - Caramel (+6 UAH)\n3 - Berries (+10 UAH)");
    
    if (!toppings || toppings.trim() === "") {
        alert("You must choose at least one topping!");
        return;
    }

    const toppingsArray = toppings.split(",");
    for (const t of toppingsArray) {
        const choice = t.trim();
        if (choice === "1") totalCost += 5;
        else if (choice === "2") totalCost += 6;
        else if (choice === "3") totalCost += 10;
    }

    const addMarshmallow = prompt("Add marshmallow for 5 UAH? (enter 'yes' or 'no')");
    if (addMarshmallow && addMarshmallow.toLowerCase() === "yes") {
        totalCost += 5;
    }

    const resultMessage = "Cost of your ice cream: ${totalCost} UAH";
    console.log(resultMessage);
    alert(resultMessage);
}

// Запускаємо функцію
orderIceCream();