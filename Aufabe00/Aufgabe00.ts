namespace Aufg01 {
    window.addEventListener("DOMContentLoaded", init);
    function init(): void {
        let name: string = window.prompt("Wie heißt du?", "Name");
        let begruesung: string = "Hallo " + name + "!";
        //let container: HTMLElement = document.getElementById("firstDiv");
        //container.innerText = ;
        document.getElementById("firstDiv").innerText = begruesung;
        console.log(begruesung);
    }
}