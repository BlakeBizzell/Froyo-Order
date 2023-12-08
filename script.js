document.addEventListener("DOMContentLoaded", function () {
  function processOrder() {
    const flavorsInput = document.getElementById("flavorsInput").value;

    // Split the input into an array of flavors
    const flavorsArray = flavorsInput.split(",");

    // Count the occurrences of each flavor
    const flavorCount = {};
    flavorsArray.forEach((flavor) => {
      const trimmedFlavor = flavor.trim();
      flavorCount[trimmedFlavor] = (flavorCount[trimmedFlavor] || 0) + 1;
    });

    // Display the results in the browser console and on the webpage
    console.log("Froyo Order:", flavorCount);

    const orderResultsDiv = document.getElementById("orderResults");
    orderResultsDiv.innerHTML = "<h2>Order Summary</h2>";
    const table = document.createElement("table");
    const tableHeader = "<tr><th>Flavor</th><th>Quantity</th></tr>";
    let tableRows = "";

    for (const [flavor, quantity] of Object.entries(flavorCount)) {
      tableRows += `<tr><td>${flavor}</td><td>${quantity}</td></tr>`;
    }

    table.innerHTML = tableHeader + tableRows;
    orderResultsDiv.appendChild(table);
  }

  window.processOrder = processOrder;
});
