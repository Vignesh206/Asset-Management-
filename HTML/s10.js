document.addEventListener("DOMContentLoaded", function() {
    // Get all submit buttons
    var submitButtons = document.querySelectorAll('.container button[type="submit"]');

    // Add click event listener to each submit button
    submitButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            // Prevent default form submission behavior
            event.preventDefault();
            
            // Find the index of the current module in the list of modules
            var currentModuleIndex = Array.from(submitButtons).indexOf(button);
            
            // If there is a next module, redirect to its URL
            if (currentModuleIndex < submitButtons.length - 1) {
                var nextModuleUrl = submitButtons[currentModuleIndex + 1].getAttribute("data-module-url");
                if (nextModuleUrl) {
                    window.location.href = nextModuleUrl;
                }
            }
        });
    });
});
