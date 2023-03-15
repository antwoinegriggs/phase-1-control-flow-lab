function scuberGreetingForFeet(someValue) {
  // Write your code here!
  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue > 400 && someValue < 2000) {
    return "That will be twenty bucks.";
  } else if (someValue > 2500) {
    return "No can do.";
  } else if (someValue > 2000) {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city != "NYC" ? "No go." : "Ok, sounds good.";
}

function switchOnCharmFromTip(tipValue) {
  // Write your code here!
  switch (tipValue) {
    case "generous":
      return "Thank you so much.";

    case "not as generous":
      return "Thank you.";

    default:
      return "Bye.";
  }
}
