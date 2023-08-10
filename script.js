      function showPassword() {
        let passwordInput = document.getElementById("password");
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
        } else {
          passwordInput.type = "password";
        }
      }
      function formSubmitted() {
        alert("Questionare submitted successfully happy dating!!");
      }