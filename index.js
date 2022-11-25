// Write your code in this file!
const currentUser = 'Grass Hopper';

typeof "const currentUser = 'Grass Hopper';";
//=> "string"

"const currentUser = 'Grass Hopper';".length;
//=> 35
currentUser;
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
//const shortGreeting = 'Welcome, !'[0];

//const welcomeMessage = 'Welcome to Flatbook, ';
//const welcomeMessage = 'Welcome to Flatbook,  + ${currentUser}!';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
//const welcomeMessage = 'Welcome to Flatbook, ${currentUser}!';
//const excitedWelcomeMessage 
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

