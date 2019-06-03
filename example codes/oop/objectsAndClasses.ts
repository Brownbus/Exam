
interface Dog{
  name: string,
  age: number,
  breed: string,
  owner: string
}

abstract class Creature {
  public name: string;
  public age: number;
  constructor(name: string, age: number, kind: string ){}
  getKind(): void{}
}

class Animal {
  private static tacomonicalClassification: string = 'animals'
  private kind: string;
  public name: string;
  public age: number;
  constructor(name: string, age: number, kind: string){
    this.kind = kind;
    this.name = name;
    this.age = age;
  }
 public static createDog(): Dog{
    return {
      name: 'Spot',
      age: 12,
      breed: 'mixed',
      owner: 'Brownbus'
    }
  }

static getClassification(){
   return Animal.tacomonicalClassification
}

   getKind(){
    return this.kind
  }
}


class Monkey extends Animal {
  constructor(name, age, kind='Monkey'){
    super(name, age, kind);
  }
}

let myAnimal: Creature;
myAnimal = new Animal('Horsey', 21, 'Zebra')
let myDog: Dog = Animal.createDog()
let myMonkey: Monkey = new Monkey('Luffy', 18)


console.log(myDog)
console.log(myAnimal)
console.log(myAnimal.getKind())
console.log(Animal.getClassification())
console.log(myMonkey)
console.log(myMonkey.getKind())


///polymorphism:


console.log(myMonkey instanceof Animal)  //true
console.log(myMonkey instanceof Monkey)  //true
