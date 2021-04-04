function spanvalidaciones($event){
    const spncntr = document.getElementById("spancountry");
    const cntrsel = document.getElementById("country");
    const prsn = document.getElementById("person");
    const spnprsn = document.getElementById("spanperson");
    const spnnm = document.getElementById("spanname");
    const spnlstnm = document.getElementById("spanlastname-input");
    const name = document.getElementById("name");
    const lastname = document.getElementById("lastname-input");
    const company = document.getElementById("company");
    const spncmpn = document.getElementById("spancompany");
    const street = document.getElementById("street");
    const spnstrt = document.getElementById("spanstreet");
    const namestreet = document.getElementById("namestreet");
    const spnnmstrt = document.getElementById("spannamestreet")
    const numberstreet = document.getElementById("numberstreet");
    const spnnmbrstrt = document.getElementById("spannumberstreet"); 
    const city = document.getElementById("city");
    const spnct = document.getElementById("spancity");
    const cp = document.getElementById("cp");
    const spncp = document.getElementById("spancp");
    const typedoc = document.getElementById("typedoc");
    const spntpdc = document.getElementById("spantypedoc");
    const passport = document.getElementById("passport-input");
    const spnpssprt = document.getElementById("spanpassport-input");
    const spans = document.querySelectorAll("#atrinium span");


    if (cntrsel.value == "Selección"){
        spncntr.removeAttribute('hidden');
        cntrsel.focus();
        
    }else if (cntrsel.value == 1 || cntrsel.value==2 || cntrsel.value == 3){
        spncntr.setAttribute('hidden',false);
    }

    if (prsn.value == "Selección"){
        spnprsn.removeAttribute('hidden'); 
        prsn.focus();
    }else if (prsn.value == 1 || prsn.value == 2){
        spnprsn.setAttribute('hidden', false);
    }

    if (name.value == ""){
        spnnm.removeAttribute('hidden');
        name.focus();
    }else spnnm.setAttribute('hidden', false);

    if (lastname.value == ""){
        spnlstnm.removeAttribute('hidden');
        lastname.focus();
    }else spnlstnm.setAttribute('hidden', false);

    if (company.value == ""){
        spncmpn.removeAttribute('hidden');
        company.focus();
    }else spncmpn.setAttribute('hidden', false);

    if (street.value == "Selección"){
        spnstrt.removeAttribute('hidden');
        street.focus();
    }else spnstrt.setAttribute('hidden', false);

    if (namestreet.value == ""){
        spnnmstrt.removeAttribute('hidden');
        namestreet.focus();
    }else spnnmstrt.setAttribute('hidden', false);

    if (numberstreet.value == ""){
        spnnmbrstrt.removeAttribute('hidden');
        numberstreet.focus();
    }else spnnmbrstrt.setAttribute('hidden', false);

    if (city.value == ""){
        spnct.removeAttribute('hidden');
        city.focus();
    }else spnct.setAttribute('hidden', false);

    if (cp.value == ""){
        spncp.removeAttribute('hidden');
        cp.focus();
    }else spncp.setAttribute('hidden', false);

    if (typedoc.value == 0){
        spntpdc.removeAttribute('hidden'); 
        typedoc.focus();
    }else if (typedoc.value !== 0){
        spntpdc.setAttribute('hidden', false);
    }
    
    if (passport.value == ""){
        spnpssprt.removeAttribute('hidden'); 
        passport.focus();
    }else if (passport.value !== ""){
        spnpssprt.setAttribute('hidden', false);
    }

    if (spans.forEach(function(x){x.getAttribute('hidden')})==null && namestreet.value != "")
    alert("Formulario enviado correctamente")

    event.preventDefault();
}