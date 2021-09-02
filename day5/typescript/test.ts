console.log('welcome to typescript tutorial');

const addAnyTwo = (digitOne: any, digitTwo = 4) => {
    return digitOne + digitTwo;
};
const aarray = [1, 2, 3, 4, 4, 5];
const user = {
    userName: 'Bhanu',
    gender: 'male',
    qualification: 'Btech'
}
const { userName, qualification } = user;

const [firstVal, secondVal, ...restarray] = aarray;
const barray = [5658, 98998, ...aarray, 783748, 25436241, 9806985];

function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

function keepProcessing(): never {
    while (true) {
        console.log('I always does something and never ends.')
    }
}

class User{
    constructor(private first:number,public second:number){

    }
    private calculateSomething(){
        return this.first;
    }
    public giveCalculatedResult(){
        this.calculateSomething()
    }

}

const userObj=new User(1,3);
userObj.second;

console.log(addAnyTwoDigits(1.09, 2));
console.log(addAnyTwoDigits('Bhanu', 'Teja'));