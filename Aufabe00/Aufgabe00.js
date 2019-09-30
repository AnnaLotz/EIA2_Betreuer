var Aufg01;
(function (Aufg01) {
    window.addEventListener("DOMContentLoaded", init);
    function init() {
        let name = window.prompt("Wie heißt du?", "Name");
        let begruesung = "Hallo " + name + ", wilkommen bei EIA2!";
        //let container: HTMLElement = document.getElementById("firstDiv");
        //container.innerText = ;
        document.getElementById("firstDiv").innerText = begruesung;
        console.log(begruesung);
    }
})(Aufg01 || (Aufg01 = {}));
//# sourceMappingURL=Aufgabe00.js.map