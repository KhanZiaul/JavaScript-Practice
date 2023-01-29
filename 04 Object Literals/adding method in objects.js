//adding methos in object

const user = {
    name: 'khan zia',
    age: 30,
    email: 'khanzia16phy102@gmail.com',
    location: 'dhaka',
    blogs:['this is first blog','this is second blog'],

    login : function(){
        console.log('you are logged in');
    },
    logout : function(){
        console.log('you are logged out');
    }
};

user.login();

user.logout();

