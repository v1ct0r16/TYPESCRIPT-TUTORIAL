// A class is a template definition of a method and variables in a particular kind of object, it's supports and uses the rule of creating
// OOP

// it is a template because it contains variables and methods that  are defined..
/*
class Calculator {
  private num1: number;
  private num2: number;

  constructor(number1: number, number2: number) {
    this.num1 = number1;
    this.num2 = number2;
  }

  add() {
    return this.num1 + this.num1;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }
}

*/

class human{
    myName: string;
    myHeight: number;
    myComplexions: string
    myGender
    myIsRobot: boolean

    constructor(name: string, height: number, complexions: string, gender: string, isRobot: boolean) {
    this.myName = name
    this.myHeight = height
    this.myComplexions = complexions
    this.myGender = gender
    this.myIsRobot = isRobot
    
    }
}