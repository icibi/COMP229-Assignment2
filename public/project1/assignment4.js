var check = function() {

    if (document.getElementById('password').value ==
    document.getElementById('cnfpassword').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Password matched';
    } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Password not matched';
    }
    }
    
    function ValidateCourses(){
    var password = document.getElementById("password").value;
    var cnfpassword = document.getElementById("cdfpassword").value;
    
    if (password != cnfpassword){
    alert('Password Not Matched');
    return 1;
    }
    alert("Thanks for registering at our club, your customer record was created successfully.");
    return 0;
    
    
    }
    