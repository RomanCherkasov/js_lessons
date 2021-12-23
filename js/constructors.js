function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(name){
    console.log(`Пользователь ${this.name} ушел`);
};


const roman = new User('Roman', 24);
const alex = new User('Alex', 25);
roman.hello();
alex.hello();
roman.exit();
alex.exit();
console.log(roman, alex);