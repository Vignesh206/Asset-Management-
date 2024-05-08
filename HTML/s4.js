// Sample asset data (can be fetched from server)
var assets = [
    { name: "Laptop", purchaseDate: "2022-01-01", cost: 1000 },
    { name: "Projector", purchaseDate: "2022-03-15", cost: 1500 },
    { name: "Printer", purchaseDate: "2022-05-20", cost: 800 }
];

// Function to calculate depreciation
function calculateDepreciation(purchaseDate, cost) {
    var purchaseYear = new Date(purchaseDate).getFullYear();
    var currentYear = new Date().getFullYear();
    var yearsOwned = currentYear - purchaseYear;
    var depreciationRate = 0.1; // Example depreciation rate (10% annually)
    var accumulatedDepreciation = cost * depreciationRate * yearsOwned;
    var netValue = cost - accumulatedDepreciation;
    return { accumulatedDepreciation: accumulatedDepreciation, netValue: netValue };
}

// Function to display asset details in the HTML
function displayAssetDetails() {
    var assetDetails = document.getElementById('assetDetails');
    assetDetails.innerHTML = ''; // Clear previous content
    
    assets.forEach(function(asset) {
        var depreciation = calculateDepreciation(asset.purchaseDate, asset.cost);
        
        var assetDiv = document.createElement('div');
        assetDiv.classList.add('asset');
        
        var assetName = document.createElement('h2');
        assetName.textContent = asset.name;
        
        var purchaseDate = document.createElement('p');
        purchaseDate.textContent = "Purchase Date: " + asset.purchaseDate;
        
        var cost = document.createElement('p');
        cost.textContent = "Cost: $" + asset.cost.toFixed(2);
        
        var accumulatedDepreciation = document.createElement('p');
        accumulatedDepreciation.textContent = "Accumulated Depreciation: $" + depreciation.accumulatedDepreciation.toFixed(2);
        
        var netValue = document.createElement('p');
        netValue.textContent = "Net Value: $" + depreciation.netValue.toFixed(2);
        
        assetDiv.appendChild(assetName);
        assetDiv.appendChild(purchaseDate);
        assetDiv.appendChild(cost);
        assetDiv.appendChild(accumulatedDepreciation);
        assetDiv.appendChild(netValue);
        
        assetDetails.appendChild(assetDiv);
    });
}

// Call displayAssetDetails function to populate asset details on page load
displayAssetDetails();
