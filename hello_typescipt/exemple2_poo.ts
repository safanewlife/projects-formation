class Employe {
    private nom :string ;
    private ancienneté:number ;
    

    constructor(nom :string , ancienneté : number ,private technologie :string ){
        this.nom = nom ;
        this.ancienneté = ancienneté ; 
       
    }
    public showit():string{
        return "[Nom:"+this.nom+" Expérience : "+this.ancienneté+" technologie: "+ this.technologie +"]"
    }
}

let safa:Employe = new Employe("safa", 4 ,"php");
console.log(safa.showit());