//Arrays........

//New Array method.......
let students = new Array("sam", "Joe", "Kofi")
console.log(students)

//or

let student = new Array('Kojo', 70, true)
console.log(student)

//Square Brackets....
let pupils=['kwaku', 'Abena', 'musa']
console.log(pupils)

//Accessing a data in an Array
let supporters = new Array('kwame', 40, 'kofi', 20)
console.log(supporters[3])

//or

//Accessing a data in an Array
let supporter = ['gogo', false, 4, 'hmmm']
console.log(supporter[1])


//Conditionals.......
//if Else statement .....
let alive= false

if(alive == true){
  console.log('The rabbit is alive')
}else{
 console.log('The rabbit is no more')
}

// Else if statement .......
let score= 69

if (score >= 80){

console.log("A")

}else if(score>= 70 && score <= 79){

console.log('B')

}else if(score >= 60 && score <= 69){

console.log('C')

}else{

    console.log('D')
}


// Switch statement............
let A=30
let B=50

switch(A+B){
   case 40:
      console.log(40)
   break
   case 80:
      console.log(80)
   break
   case 90:
      console.log(90)
   break

   
   default:
      console.log('No Answer detected')
}

//For loops .......
let number=0

for(let i=0;i<100;i++){
     number= number+1
    
    console.log(number)
}


//Whiles Loops
let numbers=0

while(number < 100){

    number=number+1

    console.log(number)
}


//Function
function hello(){

    console.log('helloworld')
    document.write("<h1>helloworld</h1>")
}

hello()

hello()
if (true) {}

hello()


//function Parameters
function _deleteFile (name, age, gen){

    console.log('Hello ' + name  + gen)
    console.log('I am '+ age + name)
    console.log('I am in class ' + 'gen' + name)
 }
 
 _deleteFile('Emma', 34, 6)
 _deleteFile('Mona', 17, 3)
 _deleteFile('Mira', 61, 'graduate')



// Return statement/ function
function addTwonumbers(num1,num2){

    let answer = num1+num2;

    return answer
}
console.log(addTwonumbers(2,6))


// Return statement/ function
function addTwonumbers(num1,num2){

    let answer = num1-num2;

    return answer
}
console.log(addTwonumbers(8,1))


// Return statement/ function
function addTonumbers(num1,num2){

    let answer = num1*num2;

    return answer
}
console.log(addTonumbers(3,1))


//Return Statement/function
function addTonumbers(num1,num2){

    let answer = num1/num2;

    return answer 
}
console.log(addTonumbers(9,3))

//Alert Box 
alert('are you ok?')

//Prompt Box
let age = prompt('how old are you?')

console.log(age)

//Comfirm Box
let close = confirm('close this page')

console.log(close)


// Arrow function..
const arrowFunc=(age)=>{
    console.log('Arrow function'+ age)
}
arrowFunc(30)


//declear an object
let pupil ={
    name:'Great mills',
    age: 30,
    gender: 'male',
    class: "jhs 2"
}
//all
console.log(pupil)
//or one
console.log(pupil.gender)
//another one
console.log(pupil['class'])


//creating a class
class ProfileTemplate{

   constructor(name,email,password,address,age){
    this.name= name
    this.email= email
    this.password= password
    this.address= address
    this.age= age

   }
    //class methods
   getDateAndAddress(num1){
      return this.address + "" + this.age
   }
}
//class methods
const user3 = new ProfileTemplate('Afua',"afua@email.com",'ctdtcfv344','tema,linstr 32',23)
console.log(user3.getDateAndAddress(1))

//instantiating a class
const user1 = new ProfileTemplate('Afua',"afua@email.com",'ctdtcfv344','tema,linstr 32',23)
console.log(user1)

//instantiating a class
const user2 = new ProfileTemplate('Kojo','kojo24@email.com','kotewa123',"labadi,gettyburgstr24",17)
console.log(user2)

//Class Inheritance
class car{

    constructor(wheels,stear,seats,engine){
        this.wheels=wheels
        this.stear=stear
        this.seats=seats
        this.engine=engine
    }
}

class PickUp extends car {

    features(){

        return this.wheels +""+ this.stear+this.engine+this.seats
    }
}



const hilus = new PickUp(4,1,5,1)
console.log(hilus.features())


function sumofThree (a,b,c) {
    return a + b + c;
    Console.log(sumofThree(2,3,4)); 

}
function copy(){
    console.log('codeWell')
    document.write('<h1>codewell</h1>')
        

copy()

copy()
if (true) {}

copy()
}








//function name () 




//class students={
    
//}

let points = 35;
points = 45;
points = 60;
alert(points)

let dessert = "cake";
dessert = "ice cream";
alert(dessert);

