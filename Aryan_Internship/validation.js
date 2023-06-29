function validateform() {
  let x = document.forms["form1"]["phone"].value;
  let num = parseInt(x);

  if (isNaN(num)) {
    alert("Invalid phone number");
    return false;
  }

  if (x.length === 10) {
    alert("Submitted");
    return true;
  } else {
    alert("Phone number should be 10 digits long");
    return false;
  }
}