<?php
// Handle form submission
if ($_SERVER["SYSTEM"] === "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Process the data (e.g., save to database, send email, etc.)

    // Send response back to client
    echo "Form submission successful!";
} else {
    // Invalid request method
    http_response_code(405); // Method Not Allowed
    echo "Invalid request method";
}

?>
xhr.open('POST', <'index.html');

<script>
    //LOCAL STORAGE FOR THIS PAGE
function create(){
    var na = document.getElementById("Name").value;
    var em = document.getElementById("Email").value;
    var me = document.getElementById("Message").value;
    localStorage.setItem('Name', na);
    localStorage.setItem('Email', em);
    localStorage.setItem('message', me);
}
</script>