class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        console.log(`User ${this.name} created.`);
    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out.'); 

    }
}

class Admin extends User {
    deletUser(user){
        user = users.filter(u => {
            return u.email != user.email
        })
    }
}

var userOne = new User ("Ryu", "ryu@ninjas.com");
var userTwo = new User ("Yoshi", "yoshi@ninjas.com");
var admin = new User ("Shaun", "shaun@ninjas.com");

var users = [userOne, userTwo, admin];

console.log(`User before`, users);

admin.deletUser(userTwo);
console.log("Users after", users); 