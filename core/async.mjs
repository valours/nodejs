const myFunction = (firstParam, secondParam) => {
  // do something
  console.log("myFunction called with", firstParam, secondParam);
};

myFunction("first", "second");

setTimeout(myFunction, 2000, "premier parametre", "deuxieme parametre");
