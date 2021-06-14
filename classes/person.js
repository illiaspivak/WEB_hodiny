export class Person{
    #dateOfBirth;

    constructor(name, surname, news, dateOfBirth){        
        this.name = name
        this.surname = surname
        this.news = news
        this.#dateOfBirth = dateOfBirth
        this.informWorld("Person " + this.name + " was born")        
    }

    #infoText(){
        return this.name + " " 
        + this.surname + " " 
        + this.#dateOfBirth.getDate() + "." 
        + (this.#dateOfBirth.getMonth()+1) + "." 
        + this.#dateOfBirth.getFullYear()
    }
    
    infoPublic(){        
        return this.#infoText().split(' ').slice(0,2).join(" ")
    }

    nested(){
        function printThis(){
            console.log(this)
        }
        printThis()
    }

    informWorld(message){
        this.news.innerHTML += ("<br>" + message)
    }
    
}