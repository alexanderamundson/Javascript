function ValidateEmail(InputText)
{
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (InputText.value.match(mailFormat))
    {
        alert("You entered a valid mail address!");
        document.form1.text1.focus();
        return true;
    }else {
        alert("You have NOT entered a valid email address!");
        document.form1.text1.focus();
        return false;
    }
}   