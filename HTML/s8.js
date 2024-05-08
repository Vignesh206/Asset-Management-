// Sample asset data (can be fetched from server)
var assets = [
    { name: "Laptop" },
    { name: "Projector" },
    { name: "Printer" }
];

// Populate asset select options
var assetSelect = document.getElementById('assetSelect');
assets.forEach(function(asset) {
    var option = document.createElement('option');
    option.textContent = asset.name;
    option.value = asset.name; // Assuming asset name is unique
    assetSelect.appendChild(option);
});

// Event listener for form submission
document.getElementById('assetDisposalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var assetName = document.getElementById('assetSelect').value;
    var disposalReason = document.getElementById('disposalReason').value;
    var disposalDate = document.getElementById('disposalDate').value;
    
    // Do something with the form data, like sending it to a server
    console.log("Asset Name: " + assetName);
    console.log("Disposal Reason: " + disposalReason);
    console.log("Disposal Date: " + disposalDate);
    
    // Clear form fields
    document.getElementById('assetDisposalForm').reset();
});
