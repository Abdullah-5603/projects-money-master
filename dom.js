function getValue(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.value;
    const elementValueInt = parseInt(elementValue);

    return elementValueInt;
}

function alertMassage(alertt){
    if(alertt <= 0){
        let Alert = alert('টাকা দে');
        return Alert;
    } 
}


// const save = getValue('save');
// alertMassage(save);

const income = getValue('income');
const food = getValue('food');
const rent = getValue('rent');
const clothes = getValue('clothes');

document.getElementById('calculate-btn').addEventListener('click', function(){
    alertMassage(income);
    alertMassage(food);
    alertMassage(rent);
    alertMassage(clothes);

    const TotalExpenses = food + rent + clothes;

    const totalExpenses = document.getElementById('expense');
    

    const balence = document.getElementById('balance');
    const Balance = income - TotalExpenses;
    if(TotalExpenses > income){
        alert('ইনকাম এর চাইতে বেশি খরচ করা যাবে না ');
    } else{
        totalExpenses.innerText = TotalExpenses;
        balence.innerText = Balance; 
    }
})

document.getElementById('save-btn').addEventListener('click', function(){
    
    const save = getValue('save');
    if(save > 100){
        alert('১০০% এর বেশি save করা সম্ভব না ');
    }
    const calculation = (save/100) * income ;

    const savingAmmount = document.getElementById('saving-ammount');
    savingAmmount.innerText = calculation;

    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalances = (income - (food + rent + clothes)) - calculation;
    if(calculation > remainingBalances){
        alert('তোমার balance এর চাইতে বেশি সেইভ করতে পারবে না। ');
        savingAmmount.innerText = 0;
        remainingBalance.innerText = 0;
    } else{
        remainingBalance.innerText = remainingBalances;
    }
})