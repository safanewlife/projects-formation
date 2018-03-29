"use strict";
var Employe = /** @class */ (function () {
    function Employe(nom, ancienneté, technologie) {
        this.technologie = technologie;
        this.nom = nom;
        this.ancienneté = ancienneté;
    }
    Employe.prototype.showit = function () {
        return "[Nom:" + this.nom + " Expérience : " + this.ancienneté + " technologie: " + this.technologie + "]";
    };
    return Employe;
}());
var safa = new Employe("safa", 4, "php");
console.log(safa.showit());
