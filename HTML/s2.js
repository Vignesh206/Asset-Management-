// Sample asset data (can be fetched from server)
var assets = [
    { name: "Laptop", location: "Office", status: "In Use" },
    { name: "Projector", location: "Meeting Room 1", status: "Available" },
    { name: "Printer", location: "Office", status: "Under Maintenance" }
];

// Function to display assets in the HTML
function displayAssets() {
    var assetList = document.getElementById('assetList');
    assetList.innerHTML = ''; // Clear previous content
    
    assets.forEach(function(asset) {
        var assetDiv = document.createElement('div');
        assetDiv.classList.add('asset');
        
        var assetName = document.createElement('h2');
        assetName.textContent = asset.name;
        
        var assetLocation = document.createElement('p');
        assetLocation.textContent = "Location: " + asset.location;
        
        var assetStatus = document.createElement('p');
        assetStatus.textContent = "Status: " + asset.status;
        
        assetDiv.appendChild(assetName);
        assetDiv.appendChild(assetLocation);
        assetDiv.appendChild(assetStatus);
        
        assetList.appendChild(assetDiv);
    });
}

// Call displayAssets function to populate asset list on page load
displayAssets();
