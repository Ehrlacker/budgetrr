'use strict'


const balanceElement = document.querySelector(".balance .value");
const totalIncome = document.querySelector(".income-total");
const totalOutcome = document.querySelector(".outcome-total");

const incomeElement = document.querySelector(".income-tab");
const expense = document.querySelector(".expense-tab");
const all = document.querySelector(".all-tab");

const incomeList = document.querySelector(".income-tab .list");
const expenseList = document.querySelector(".expense-tab .list");
const allList = document.querySelector(".all-tab .list");

const expensesButton = document.querySelector(".tab1");
const incomeButton = document.querySelector(".tab2");
const allButton = document.querySelector(".tab3");

const addExpense = document.querySelector(".add-expense")
const expenseTitle = document.querySelector(".expense-title-input")
const expenseAmount = document.querySelector(".expense-amount-input")

const addIncome = document.querySelector(".add-income")
const incomeTitle = document.querySelector(".income-title-input")
const incomeAmount = document.querySelector(".income-amount-input")

const list = document.querySelector('.list')


//let entry_list = []





//SWITCHING BETWEEN TABS
expensesButton.addEventListener('click', () => {
    expense.classList.remove('hidden');
    incomeElement.classList.add('hidden');
    expensesButton.classList.add('clicked');
    incomeButton.classList.remove('clicked');
    
})


incomeButton.addEventListener('click', () => {
    incomeElement.classList.remove('hidden');
    expense.classList.add('hidden');
    expensesButton.classList.remove('clicked');
    incomeButton.classList.add('clicked');
    
})


let entry_list = []
let expense_list = []

let income_list = []

addExpense.addEventListener('click', () =>{
    if(expenseTitle.value == '' || expenseAmount.value == ''){
                return;   
            }
            let expense = {
                type: 'expense',
                title: expenseTitle.value,
               amount: expenseAmount.value,
               id: Date.now()
            }
            expense_list.push(expense)
            console.log(expense_list)
            
            clearExpense()
            displayExpense()          
})

addIncome.addEventListener('click', () =>{
    if(incomeTitle.value == '' || incomeAmount.value == ''){
        return;   
    }
    let income = {
        type: 'income',
        title: incomeTitle.value,
       amount: incomeAmount.value,
       id: Date.now()
    }
    income_list.push(income)
    console.log(income_list)
    clearIncome()
    displayIncome()  
})

const clearExpense = () =>{
    expenseTitle.value = '';
    expenseAmount.value = '';
}
const clearIncome = () =>{
    incomeTitle.value = ''
    incomeAmount.value = ''
}

const displayExpense = () =>{
    expenseList.innerHTML = ''
    expense_list.map((entry) =>{
        
        return expenseList.innerHTML += `<li id = "${entry.id}" class= "${entry.type}">
        <div class = "entry">${entry.title}: $${entry.amount}</div>
        <div class="icon-container">
        <div class = "edit" id="${entry.id}"></div>
        <div class ="delete" id="${entry.id}"></div>
        </div>
        </li>`       
    })
}

const displayIncome = () =>{
    incomeList .innerHTML = ''
    income_list.map((entry) =>{
        
        return incomeList.innerHTML += `<li id = "${entry.id}" class= "${entry.type}">
        <div class = "entry">${entry.title}: $${entry.amount}</div>
        <div class="icon-container">
        <div class = "edit" id="${entry.id}"></div>
        <div class ="delete" id="${entry.id}"></div>
        </div>
        </li>`
    })
}



// const displayList = () =>{
//     entry_list.map((item) =>{
//         if(item.type == 'expense'){
//             console.log('yesss')
//         } else if(item.type == 'income'){
//             console.log('nooo')
//         }
//     })
// }


// const displayListItem = () =>{

// }


// const createListItem = () =>{
// const item = 
// `<li id = "${id}" class= "${type}">
    
//      <div class = "entry">${title}: $${amount}</div>
    

//     <div class="icon-container">
//      <div class = "edit"></div>
//      <div class ="delete" id=${id}></div>
//      </div>
//     </li>`
//      const position = "afterbegin";
//     list.insertAdjacentHTML(position, entry);

// }




   
// incomeList.addEventListener('click', deleteOrEdit)
// expenseList.addEventListener('click', deleteOrEdit)
// allList.addEventListener('click', deleteOrEdit)



// incomeList.addEventListener('click', function(e){
// if(e.target.classList == ('delete')){
//     deleteEntry(e.target)
//     //updateUI()

// } else if(e.target.classList == ('edit')){
//     console.log('yesss')
// }

// })





// // ADDING INCOME/EXPENSES

// //ADD EXPENSE TO entry_list ARRAY
// addExpense.addEventListener( 'click', () =>{
//     if(expenseTitle.value == '' || expenseAmount.value == ''){
//         return;   
//     }
//     let expense = {
//         type: 'expense',
//         title: expenseTitle.value,
//        amount: expenseAmount.value
//     }
//     entry_list.push(expense);
//       clearLists()
//     updateUI()
//     clearExpenseValue()
//     addValues()
//  })
  
// //ADD INCOME TO entry_list ARRAY
//  addIncome.addEventListener( 'click', () =>{
//     if(incomeTitle.value == '' || incomeAmount.value == ''){
//         return;
//     }

//     let income = {
//         type: 'income',
//         title: incomeTitle.value,
//        amount: incomeAmount.value,
//         // id: Date.now(),
//     }
//     entry_list.push(income);
//      clearLists()
//     updateUI()
//     clearIncomeValue()
//     addValues()
//     console.log(entry_list)
    
    
//  })

// REMOVE INCOME AND EXPENSE INPUT VALUES





//UPDATE PAGE WITH LI COMPONENT
// const updateUI = () =>{
//     entry_list.forEach((entry)=>{
//         if(entry.type == "expense"){
//             displayList(expenseList, entry.type, entry.title, entry.amount, entry.id)
//         }
//          else{
//             displayList(incomeList, entry.type, entry.title, entry.amount, entry.id)
//         }
        
//     })

// }


// //CREATE LI COMPONENT
// const displayList = (list, type, title, amount, id) =>{
//     const entry = `<li id = "${id}" class= "${type}">
    
//     <div class = "entry">${title}: $${amount}</div>
    

//     <div class="icon-container">
//     <div class = "edit"></div>
//     <div class ="delete" id=${id}></div>
//     </div>
//     </li>`
//     const position = "afterbegin";
//     list.insertAdjacentHTML(position, entry);
//     }



//  const displayList = () =>{
//     entry_list.map((entry) =>{
//         if(entry.type == "expense"){
//             return expenseList.innerHTML += `<li id = "${entry.id}" class= "${entry.type}">
    
//             <div class = "entry">${entry.title}: $${entry.amount}</div>
            
        
//             <div class="icon-container">
//             <div class = "edit" id="${entry.id}"></div>
//             <div class ="delete" id="${entry.id}"></div>
//             </div>
//             </li>`
//         }else{
//             return incomeList.innerHTML += `<li id = "${entry.id}" class= "${entry.type}">
    
//         <div class = "entry">${entry.title}: $${entry.amount}</div>
        
    
//         <div class="icon-container">
//         <div class = "edit" id="${entry.id}"></div>
//         <div class ="delete" id="${entry.id}"></div>
//         </div>
//         </li>`

//         }
//     })

//  }





//It's mapping over the array and each time it's returning each item that fits the criteria
 
    


// // CLEAR LIST AFTER PRESSING ADD BUTTON
//     const clearLists = () =>{
//     expenseList.innerHTML = ''
//     incomeList.innerHTML = ''
//     allList.innerHTML = ''
//     }

//     // ADD LIST VALUE TO BUDGET/INCOME/EXPENSE VALUE

// const addValues = () =>{
//     let sum = 0;
//     let income= 0;
//     let outcome = 0;
// entry_list.forEach(list =>{
//     if(list.type == 'expense'){
//         sum -= list.amount
//         outcome -= list.amount
//     }else if(list.type == 'income'){
//         sum += Number(list.amount)
//         income += Number(list.amount)
//     }
//     balanceElement.innerHTML = sum
//     totalIncome.innerHTML = income
//     totalOutcome.innerHTML = outcome
// })
// }   


// // DETERMINE IF BUTTON IS EDIT OR DELETE
// function deleteOrEdit(e){
// const targetButton = e.target;
// const entry = targetButton.parentNode.parentNode;

// if(targetButton.classList == ('delete')){
    
//     deleteEntry(entry)
// }else if(targetButton.classList == ('edit')){
    
//     editEntry(entry);
// }
// }

// // //DELETE FUNCTION
// const deleteEntry = (entry) =>{
// console.log(entry.id)
// console.log(entry_list)
//      entry_list.splice(entry.id, 1)
//      entry.parentNode.innerHTML = ''
//     updateUI()
// }

// // EDIT FUNCTION
// const editEntry = (entry) =>{
// let Entry = entry_list[entry.id]
// if(entry.type == "income"){
//     incomeAmount.value = Entry.amount;
//     incomeTitle.value = Entry.title;
// }else if(entry.type == "expense"){
//     expenseAmount.value = Entry.amount;
//     expenseTitle.value = Entry.title;
// }
// deleteEntry(entry);
// }

///Each time updateUI is called it's displaying each entry of that entry type, so you display all entries of that entry type. Clear the list first, then re-render a new one.








// const valueZero = () =>{
//     balanceElement.innerHTML = 0;
// }



  