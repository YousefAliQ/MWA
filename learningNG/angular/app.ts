import {Ali} from './ali';

new Ali();

let courseName = "CS472";
// courseName = 10; Error! 

//explicit return type
let userId = (a:number, b: string) : string => { return "Hello string " + b + ", your number is " + a };

//implicit return type
let userName = (a:number, b: string) => { return "Hello string " + b + ", your number is " + a };

let hoppies : any [];
hoppies = ["100", 200];
// hoppies = 20; Error!

let address : [string, number ] = ["1000 N 4th St." , 144];

enum Color{
    Gray, 
    Green = 100,
    Blue
}

let myColor : Color = Color.Blue;
console.log(myColor); // 101

let Multiply: ( a : number, b : number ) => number;    

let complex : {data : number[], output: (all: boolean) => number[] } = 
{
    data : [1,2,3],
    output: function (all : boolean) : number[] {
        return this.data
    }
    
};

type numberAndString = number | string;
let a : numberAndString = 20;

type courses = "CS472" | "CS572";
// let course : courses = "CS111" Error!

interface courseShape  {
    courseName : string, 
    courseNumber: number,
    project?: boolean
}

let MWAcourse : courseShape = {
    courseName : "CS572",
    courseNumber : 572, 
    project: true
}

class Course {
    name : string; 
    code : number;

    constructor(name: string, code: number){
        this.name = name;
        this.code = code;
    }

    registerCourse(course : courseShape){
        console.log(`registered course : ${this.name} , code : ${this.code} successfully!`)
    }
}

// shortcut! 

class CoolCourse {
   
    static generalRule : string = "Enjoy it!";
    constructor(public name: string, public readonly code: number){}

    registerCoolCourse(course : courseShape){
        console.log(`registered course : ${this.name} , code : ${this.code} successfully!`)
    }

    // set name (value : string){
    //  this.name = value;
    // }

    printCourse(){
        console.log(this.setCourseName(this.name));
    }

    private setCourseName(name:string) : string{
        return "Course Name : " + this.name ;
    }
}

class IceCreamCourse extends CoolCourse{
    constructor(name: string){
        super(name, 20);
    }
}

console.log(CoolCourse.generalRule);

let cool = new CoolCourse("WAP", 10);
cool.printCourse();

let blckberryIceCream = new IceCreamCourse("Blackberry");
console.log(blckberryIceCream.code); // 20

abstract class Life{
    lifeWisdom : string = "Change your mind set to the growth mode!";
    abstract challenge(name : string ) : string;
}

class studentLife extends Life{

    constructor(public challengeName : string){
        super();
    }

    challenge(name : string){
        return "You can overcome " + this.challengeName + " !";
    }
}

// Factory Decorate Pattern
const fear = { desc : 'unkown'};

function doRest(advice: any){
    return function (obj:any){
        return {
            advice : advice, 
            fear : obj.desc
        }
        
    }
}

const decorateMyFear = doRest("Do not worry")(fear);
console.log(decorateMyFear);


 @doRestFactory("Do not worry")
 class Fear{ fear = "unkown"}

function doRestFactory(advice: any){
    return function (targetClass : any){
        return class {
            advice = advice; 
            fear = new targetClass().fear;
        }
        
    }
}

console.log(new Fear())