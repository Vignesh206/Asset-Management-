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
document.getElementById('maintenanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var assetName = document.getElementById('assetSelect').value;
    var maintenanceDate = document.getElementById('maintenanceDate').value;
    var maintenanceType = document.getElementById('maintenanceType').value;
    var technician = document.getElementById('technician').value;
    
    // Do something with the form data, like sending it to a server
    console.log("Asset Name: " + assetName);
    console.log("Maintenance Date: " + maintenanceDate);
    console.log("Maintenance Type: " + maintenanceType);
    console.log("Assigned Technician: " + technician);
    
    // Display popup message
    alert("Maintenance submitted successfully!");
    
    // Clear form fields
    document.getElementById('maintenanceForm').reset();
});
