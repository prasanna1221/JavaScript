let tex = "AAA";
const a = 10;
console.log(tex + a)


let employee= {
    name: "kumar",
    age:30,
    details: function(){
        console.log(this.name+this.age);
    }
};

employee.details();


function employee(name,age){
    return {
        detals: function(){
            console.log(name+age);
        }
    };
}

const employee = createcircle('kumar',30)
employee.details();
