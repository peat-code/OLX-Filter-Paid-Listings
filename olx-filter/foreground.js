// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

console.log("This prints to the console of the page (injected only if the page url matched)")
function handleClick(){
    removeVerified()
    removeFeatured()
}


filterBtn = document.createElement("button")
filterBtn.innerHTML = "FILTERMAN";
filterBtn.addEventListener("click",handleClick);
filterBtn.classList.add("filterbtn")
filterBtn.style.position = "sticky"
filterBtn.style.bottom = "0px"

document.body.appendChild(filterBtn)


function removeVerified(){
    listingsAll = document.querySelectorAll("li[data-aut-id]")
    listingsAll.forEach(listing => {
        if(listing.innerText.includes("VERIFIED"))
            listing.style.display="none"   
    });
}
function removeFeatured(){
    listingsAll = document.querySelectorAll("li[data-aut-id]")
    listingsAll.forEach(listing => {
        if(listing.innerText.includes("FEATURED"))
            listing.style.display="none"
        
    });
}