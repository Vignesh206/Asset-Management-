// Sample asset data (can be fetched from server)
var assets = [
    { name: "Laptop", maintenanceCost: 50, maintenanceCount: 5 },
    { name: "Projector", maintenanceCost: 100, maintenanceCount: 3 },
    { name: "Printer", maintenanceCost: 30, maintenanceCount: 7 }
];

// Function to generate maintenance cost chart
function generateMaintenanceCostChart() {
    var ctx = document.getElementById('maintenanceCostChart').getContext('2d');
    var labels = assets.map(asset => asset.name);
    var data = assets.map(asset => asset.maintenanceCost);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Maintenance Cost',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Function to generate maintenance count chart
function generateMaintenanceCountChart() {
    var ctx = document.getElementById('maintenanceCountChart').getContext('2d');
    var labels = assets.map(asset => asset.name);
    var data = assets.map(asset => asset.maintenanceCount);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Maintenance Count',
                data: data,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call functions to generate charts
generateMaintenanceCostChart();
generateMaintenanceCountChart();
