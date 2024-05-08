document.getElementById('assetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var assetName = document.getElementById('assetName').value;
    var assetDescription = document.getElementById('assetDescription').value;
    var serialNumber = document.getElementById('serialNumber').value;
    var purchaseDate = document.getElementById('purchaseDate').value;
    var cost = document.getElementById('cost').value;
    var vendor = document.getElementById('vendor').value;
    
    // Do something with the form data, like sending it to a server
    console.log("Asset Name: " + assetName);
    console.log("Description: " + assetDescription);
    console.log("Serial Number: " + serialNumber);
    console.log("Purchase Date: " + purchaseDate);
    console.log("Cost: " + cost);
    console.log("Vendor: " + vendor);
    
    // Display popup message
    alert("Form submitted successfully!");
    
    // Clear form fields
    document.getElementById('assetForm').reset();
});

