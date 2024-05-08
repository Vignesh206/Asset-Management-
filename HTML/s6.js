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
document.getElementById('complianceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var assetName = document.getElementById('assetSelect').value;
    var complianceType = document.getElementById('complianceType').value;
    var complianceDate = document.getElementById('complianceDate').value;
    
    // Do something with the form data, like sending it to a server
    console.log("Asset Name: " + assetName);
    console.log("Compliance Type: " + complianceType);
    console.log("Compliance Date: " + complianceDate);
    
    // Display popup message
    alert("Form submitted successfully!");
    
    // Clear form fields
    document.getElementById('complianceForm').reset();
});
