// 9-12-24
function createcircle(radius){
        this.radius = this.radius;
        this.draw =  function(){
            console.log("draw");
    }
}

const circ = new createcircle(4)
circ.draw();


//10-12-24

let prasanna = {
    name: "prasanna",
    age: 25
};

if (prasanna.age<25){
    console.log("small boy")
    console.log(prasanna.name);
} else if (prasanna.age>25){
    console.log("big boy")
    console.log(prasanna.name);
} else{
    console.log("Good boy")
    console.log(prasanna.name);
}

let numbers = [8,0,7,2,9];

let total = 0;
function add(numbers){
    for (let i=0;i<numbers.length;i++){
        total += numbers[i];
    }
    console.log(total);
}

add(numbers);

let numbers1 = [8,0,7,2,9];
const new_nums = numbers1.forEach(function(num){
    return num;
});     

console.log(new_nums);
numbers2 = [4,4,5,6,9];
const new_num = numbers2.map(function(num){
    return num;
});

console.log(new_num);

function prasannaravi(a, b) {
    this.a = a;
    this.b = b;
    this.name = function() {
        return `${this.a}${this.b}`; // Use backticks for template literals
    }
}

class prasannaravii {
    Constructor(a,b) {
        this.a = a;
        this.b = b;
    }
        name() {
        return `${this.a}${this.b}`; // Use backticks for template literals
    }

}
const kumar = new prasannaravi('a', 'b');
console.log(kumar.name()); // Outputs: ab


