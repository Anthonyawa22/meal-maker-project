//        Meal Maker
// A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special.

const menu = { // create an empty menu object.
  _meal: '', //Within the menu object, create a _meal property with a value of an empty string ('')
  _price: 0, //add a _price property with a value of 0
  set meal (mealToCheck) { //use the set keyword to create a meal setter method with mealToCheck as a parameter
if (typeof mealToCheck === 'string'){ //create an if statement that checks if mealToCheck is a string. If it is, return the object’s _meal property with mealToCheck assigned as the value.
  return this._meal = mealToCheck;
  }
 },
  set price (priceToCheck){
 if(typeof priceToCheck === 'number') { ////create an if statement that checks if mealToCheck is a string. If it is, return the object’s _meal property with mealToCheck assigned as the value.
  return this._price  = priceToCheck;
  }
 },
 get todaysSpecial (){ //Below the setters, use the get keyword to create a todaysSpecial method
  if( this._meal && this._price ){ //
    return `Today’s Special is ${this._meal} for $${this._price}!`;
  }else {
    return 'Meal or price was not set correctly!';
  }
  // create an if…else statement to check if _meal and _price values exist (or are truthy values). If so, return a string telling potential website visitors what Today’s Special is. For example: “Today’s Special is Spaghetti for $5!”

   // If _meal and _price values do not exist (or are falsy) return the string 'Meal or price was not set correctly!'
  }

 };
 
//Below the menu object, set the values of _meal and _price using the newly created setter methods

menu.meal = 'Rice';
menu.price = 50;
console.log(menu.todaysSpecial);