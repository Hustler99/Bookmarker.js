// vars
var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
sitesList =[];
if(localStorage.getItem("sites")){
    sitesList=JSON.parse(localStorage.getItem("sites"))
    displaySite(sitesList);
}
//__________________________________________________________CREATE__________________________________________________________________________
function addSite (){
    if(validSiteName() == true && validUrl() == true){
            var site = {
              sName: siteName.value,
              sURL: siteURL.value,
            };
            sitesList.push(site);
            localStorage.setItem("sites", JSON.stringify(sitesList));
            displaySite();
            clearSiteForm();
    }
    else {
        alert("Please Enter a Valid Site name and URL.. Name must at least be three charactares and a valid url start with https://www.example.com|.net")
    }
    
}
//________________________________________________________CLEAR____________________________________________________________________________
function clearSiteForm(){
    siteName.value="";
    siteURL.value="";
}
// _____________________________________________________Display ____________________________________________________________________________
function displaySite(){
    var index=0;
    var cartona="";
    for(var i=0; i<sitesList.length; i++){
        index=1+i;
        cartona += `
            <tr>
                <td>${index}</td>
                <td>${sitesList[i].sName}</td>
                <td><a href="${sitesList[i].sURL}" target="_blank"><button class="btn btn-success"><i class="fa fa-eye fa-fade me-1"></i> Visit </button></a></td>
                <td><button onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa fa-trash fa-fade me-1"></i> Delete </button></</td>
            </tr>
        `;
    }
    document.getElementById("tBody").innerHTML=cartona;
}
//_____________________________________________________ Delete _________________________________________________________________________
function deleteSite(index){
    sitesList.splice(index,1);
    localStorage.setItem("sites", JSON.stringify(sitesList));
    displaySite();
}
//____________________________________________________validSiteName_____________________________________________________________________
function validSiteName(){
    var text=(siteName.value);
    var regexName= /[A-Za-z0-9]{3,}/
    if(regexName.test(text)){
        document.getElementById("siteName").classList.add("is-valid");
        document.getElementById("siteName").classList.remove("is-invalid");
        return true;
    }
    else{
        document.getElementById("siteName").classList.add("is-invalid")
        return false;
    }

}
//__________________________________________________validURL____________________________________________________________________________
function validUrl(){
    var text= (siteURL.value)
    var regexName= /^https:\/\/www.[A-Za-z]{2,}.(com)|(net)/
    if(regexName.test(text)){
        document.getElementById("siteURL").classList.add("is-valid")
        document.getElementById("siteURL").classList.remove("is-invalid")
        return true;
    }
    else {
        document.getElementById("siteURL").classList.add("is-invalid")
        return false;
    }

}