import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1980;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Your pin code is correct!!!");
    let operationAnswer = await inquirer.prompt([{
            name: "opperation",
            message: "please select one option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }]);
    console.log(operationAnswer);
    if (operationAnswer.opperation === "withdraw") {
        let amountAnswer = await inquirer.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "number"
            }]);
        myBalance -= amountAnswer.amount;
        console.log("Your remaining balnce is:" + myBalance);
    }
    else if (operationAnswer.opperation === "check balance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Your code is incorrect!!!");
}
