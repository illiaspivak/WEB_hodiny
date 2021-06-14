export class Animal{
    _dead = false

    constructor(name, weight, color){
        this.name = name
        this.weight = weight
        this.color = color                
        this.news = document.getElementById("news")
        

        this.informWorld("was born")
    }
    
    die(){
        if(this._dead){
            this.informWorld("cannot die again")
        }
        this._dead = true
        this.informWorld("died")        
    }
    
    isAlive(){
        if(this._dead){
            this.informWorld("is dead.")
        }else{
            this.informWorld("is alive.")
        }        
    }
    
    makeSound(){        
        if(this._dead){
            this.informWorld("...")
        }else{
            this.informWorld("bzzzzzzzzzzzz")
        }  
    }

    informWorld(message){
        this.news.innerHTML += ("<br>" + this.constructor.name + " " + this.name + " " +message)
    }
}