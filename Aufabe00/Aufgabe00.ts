namespace Aufg00 {
    window.addEventListener("DOMContentLoaded", init);
    function init(): void {
        let name: string = window.prompt("Wie heißt du?", "Name");
        if (name == "" || name == "Name") {
            name = "unbekannter";
        }
        let begruesung: string = "Hallo " + name + ", wilkommen bei EIA2!";
        document.getElementById("firstDiv").innerText = begruesung;
        console.log(begruesung);
    }
}