// Test: https://duckduckgo.com/?q=test+site%3Ageni.com&va=c&t=hd&ia=web


const genifeedback = document.querySelector("span#genifeedback");
const geniinput = document.querySelector("input#genisearch");

document.querySelector("button#genibtn").addEventListener("click", ()=>{
    const q = geniinput.value.trim();
    console.log(q);
    if (q.length > 2){
        const url = `https://duckduckgo.com/?va=c&t=hd&q=${q}+site%3Ageni.com&ia=web`;
        window.open(url, "_blank");
        geniinput.value = "";
        genifeedback.innerHTML = "";
    } else {
        genifeedback.innerHTML = "Please use at least 3 letters";
    }
});

const geekfeedback = document.querySelector("span#geekfeedback");
const geekinput = document.querySelector("input#geeksearch");

document.querySelector("button#geekbtn").addEventListener("click", ()=>{
    const q = geekinput.value.trim();
    console.log(q);
    if (q.length > 2){
        window.open(`https://duckduckgo.com/?va=c&t=hd&q=${q}+site%3Ageek.no&ia=web`, "_blank");
        geekinput.value = "";
        geekfeedback.innerHTML = "";
    } else {
        geekfeedback.innerHTML = "Please use at least 3 letters";
    }
});
