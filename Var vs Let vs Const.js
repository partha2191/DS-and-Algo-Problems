// Var uses function scope
(function() {
  console.log(i);
  //  Var's value is undefined, this means the var is declared (but how?)
  if (1) {
    var i = 100;
  }
  console.log(i);
  //  Var's value is 100, but i'm out of the if statement!
})();

// Let uses block scope
(function() {
  // console.log(i); // Error: i not defined
  if (1) {
    // console.log(i); // Error: i not defined
    let i = 100;
    console.log(i); //  Should print '100' (delete the first two logs)
  }
  // console.log(i); //  Error: i not defined
})();

// const just like let uses block scope
(function() {
  const message = "what up";
  console.log(message);
  message = "bye"; // Error: Message is already declared
  console.log(message);
})();

(function() {
  const message = { body: "what up", title: "rcs" };
  //Runkit is being weird please fix the obvious syntax error
  //If you know why this is happening please comment below!
  console.log(message);
  message.body = "bye";
  message.send = true;
  console.log(message);
  message = 100; //Error: message is already declared
  console.log(message);
})();