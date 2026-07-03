const text = document.getElementById("text");
const count = document.getElementById("count");
const apiKey = document.getElementById("apiKey");
const voiceId = document.getElementById("voiceId");
const generate = document.getElementById("generate");
const download = document.getElementById("download");

text.addEventListener("input", () => {
    count.textContent = text.value.length;
});

apiKey.value = localStorage.getItem("cartesia_api_key") || "";
voiceId.value = localStorage.getItem("voice_id") || voiceId.value;

apiKey.addEventListener("input", () => {
    localStorage.setItem("cartesia_api_key", apiKey.value);
});

voiceId.addEventListener("input", () => {
    localStorage.setItem("voice_id", voiceId.value);
});

generate.addEventListener("click", () => {

    if(apiKey.value.trim()===""){
        alert("Please enter your Cartesia API Key.");
        return;
    }

    if(text.value.trim()===""){
        alert("Please enter some text.");
        return;
    }

    alert("✅ UI Ready!\n\nNext step: Connecting Cartesia API.");

});

download.addEventListener("click",()=>{

    alert("Audio download will be available after API integration.");

});
