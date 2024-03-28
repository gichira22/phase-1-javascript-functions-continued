// code your solution here
function saturdayFun( activity = "roller-skate"){
    //const activity = "roller-skate";
    return `This Saturday, I want to ${activity}!`;
}

 function mondayWork(task = "go to the office") {
//    console.log(mondayWork());
  return `This Monday, I will ${task}.`;
}

// index.js
function wrapAdjective(symbol) {
  return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
  }
}
