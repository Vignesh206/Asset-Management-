// Event listener for form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;
    
    // Do something with the form data, like sending it to a server
    console.log("Username: " + username);
    console.log("Password: " + password);
    console.log("Role: " + role);
    
    // Clear form fields
    document.getElementById('userForm').reset();
});
