var Aufg00;
(function (Aufg00) {
    window.addEventListener("DOMContentLoaded", init);
    function init() {
        let name = window.prompt("Wie heißt du?", "Name");
        if (name == "" || name == "Name") {
            name = "unbekannter";
        }
        let begruesung = "Hallo " + name + ", wilkommen bei EIA2!";
        document.getElementById("firstDiv").innerText = begruesung;
        console.log(begruesung);
    }
})(Aufg00 || (Aufg00 = {}));
//# sourceMappingURL=Aufgabe00.js.map