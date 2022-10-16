function chooseABurger() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      let guess;
      
      let computerGuess = Math.floor(Math.random()  * 18);

      let burgerList = ['Cheese Burger', 
      'Cheese Jam', 
      'Old Buddies ', 
      'Peanut Burger', 
      'Wild Mushroom', 
      'Sweet Angus', 
      'Beef and Pepperoni', 
      'Horny Corny', 
      'Hot Pepper Joe',
      'Formaggie',
      'Fat Angus burger',
      'R and B',
      'Ribs Burger',
      'Bacon Crunch',
      'Smoky chicken',
      'Chicken con carne',
      'Chiki-na',
      'Hot Tuna'
    ]


    let choseBurger = burgerList[computerGuess];


    let tryAgain = function () {
      readline.question(
        `Would you like to choose again? - (y)es or (n)o:`,
        (ans) => {
          answer = String(ans);
          if (answer === "yes" || answer === "y") {
            computerGuess = Math.floor(Math.random()  * 18);
            choseBurger = burgerList[computerGuess];
            recursiveAsyncReadLine();
          } else if (answer === "no" || answer === "n") {
            console.log("Bon appetit!");
            return readline.close();
          } else {
            console.log(`It is a yes or no question, sooooo`);
            tryAgain();
          }
        }
      );
    };


      let recursiveAsyncReadLine = function () {
        readline.question(
          `Are you ready to choose a burger? Oh I wonder which one is it going to be! Type run and find out!
          :`,(choise) => { 
            guess = String(choise);
            
            if (guess === 'run' || guess === 'Run') {
              console.log(`Your burger is ${choseBurger}`);
              tryAgain();
            } else {
                    console.log('Lyyyyyyn you have to type Run or run to get a burger!');
            }
          }
        );
      };
      recursiveAsyncReadLine();


}
chooseABurger();
