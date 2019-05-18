function validateEmail(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*))@([a-zA-Z\-0-9]{3,}((\.){1})+[a-zA-Z]{2,})$/;
  return regex.test(email);
}

function validate() {
  var $result = $("#result");
  var email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid :)");
    $result.css("color", "green");
  } else {
    $result.text(email + " is not valid :(");
    $result.css("color", "red");
  }
  return false;
}

$("#validate").on("click", validate);

function validateForm() {

    var flag=0;
    $('#myForm').each(function() {
        if ( $(this).val() === '' )
             flag=1;
    });
    
    var url = location;
    
    if (flag == 1){
        alert("Erro");
        location.replace(url);
        return false;
        
    }
}