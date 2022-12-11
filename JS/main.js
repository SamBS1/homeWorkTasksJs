// task 1. Написать программу, которая будет имитировать счет в банке, сначала пользователю предлагается внести сумму на депозит(сумма должна быть положительной), затем необходимо спросить у пользователя, хочет ли он пойти за покупками, если нет, вывести сообщение типа: До встречи! Если он выберет вариант покупок, тогда необходимо запросить информацию о том, какой продукт он хочет купить и сколько он стоит(макс 3 продукта), продукты сохранить в отдельный объект в формате(название продукта: цена), также необходимо отнять стоимость продуктов от счета в банке, необходимо проверить достаточно ли средств, если средств недостаточно вывести ошибку. В конце работы программа должна распечатать объект с покупками и оставшуюся сумму на счете

// let deposit = +prompt('Внесите сумму на депозит');
// let bankAccount = deposit;
// if (deposit >= 0){
//         let bye = confirm('Хотите совершить покупку?')
//         if (bye !== true) {
//                 console.log('До встречи!')
//     }
//     let milk  = prompt('milk: price ?');
//     let potato = prompt('potato: price ?');
//     let meat = prompt('meat: price ?');
//     let obj = {};
//     obj.milk = milk;
//     obj.potato = potato;
//     obj.meat = meat;
//     console.log(obj);
//     let remain = bankAccount - (+obj.milk) - (+obj.potato) - (+obj.meat);
//     if (bankAccount < (+obj.milk) + (+obj.potato) + (+obj.meat)) {
//             console.log('Недостаточно средств');
//         } else {
//                 console.log(bankAccount- (+obj.milk) - (+obj.potato) - (+obj.meat));
//         alert(`Ваши покупки milk:${+obj.milk}, potato:${obj.potato}, meat:${obj.meat},  ostatok  ${remain}`)
//     }
// } 

//*************************************************************************************************************************************************************************************

// task 2. Реализовать калькулятор(+, -, *, /), запросить у пользователя 2 числа и операцию, которую нужно произвести, обработать вариант того, что на ноль делить нельзя 

// let num = +prompt("Enter number");
// let oper = prompt("Enter symbol")
// let num2 = +prompt("Enter number");

// if (oper == "+") {
//     console.log(num + num2);
// } else if (oper == "-") {
//     console.log(num - num2);
// } else if (oper == "*") {
//     console.log(num * num2);
// } else if (oper == "/") {
//     if (num == 0 || num2 == 0) {
//         console.log("на ноль делить нельзя");
//     } else {
//         console.log(num / num2);
//     }
// }

//*************************************************************************************************************************************************************************************

// task 3. Запросить у пользователя имя, возраст, профессию, хобби, сохранить данные в объект, распечатать результат, данные необходимо заросить одним промптом

// let data = prompt('Введите ваше имя, возраст, профессию, хобби');
// let obj = data.split(' ');
// let obj2 = {};

// obj2.name = obj[0];
// obj2.age = obj[1];
// obj2.profession = obj[2];
// obj2.hobby = obj[3];

// console.log(obj2);

//*************************************************************************************************************************************************************************************

//task 4.  Запросить у пользователя информацию для регистрации(логин, пароль, подтверждение пароля), проверить пароли на совпадение, если не совпадают вывести сообщение типа: Пароли не совпадают; также длинна пароля должна быть не менее 6ти символов и не может состоять из пробелов, сохранить данные в объект(подтверждение пароля не нужно сохранять), также по умолчанию добавить объекту ключ isAuth: false; после регистрации предлож ить пользователю авторизацию на сайте, если согласен, то запросить у него логин и пароль, сверить их с данными из объекта, если все совпадает, то необходимо поменять значение ключа isAuth на true;

// let login = prompt('Enter your login');
// let pass = prompt('Enter your password');
// let passcon = prompt('Confirm your password');

// if ( pass === passcon && pass.trim().length >= 6  && pass.trim()){
//     console.log('registration complete');

// } else if (pass !== passcon) {

//     alert('Passwords do not match')

// } 

// let obj = {
//     login: login,
//     pass: pass,
//     isAuth: false
// }

// let auth = confirm('wanna auth?')

// if (auth) {
//     login = prompt('Enter login')
//     pass = prompt('Enter password')
    
//     if (login === obj.login && pass === obj.pass){
//         obj.isAuth = true

//         console.log(obj.isAuth)
//         console.log('Authentication success!')
        
//     }else {
//         console.log('Data does not match');
//     }
    
// }

//*************************************************************************************************************************************************************************************

// task 5. запросить у пользователя информацию о том, какой ключ он хочет изменить и значение на которое нужно менять данные под этим ключом, учесть, что есть вложенный объект

// let obj = {
    
//     username: 'Tom',
//     age: 35,
//     work: 'IT',
//     pet: {
//         type: 'Cat',
//         name: 'Barsik',
//         color: 'White',
//         age: 3
//     }
// }
// console.log(obj)
// let request = prompt('выберите данные для изменения')

// if (request == 'username'){
//     obj.username = prompt('Введите данные');
//     console.log(obj.username);
// } else if ( request == 'age') {
//     obj.age = +prompt('Введите число')
//     console.log(obj.age);
// } else if ( request == "work") {
//     obj.work = prompt('Введите свою профессию')
//     console.log(obj.work);
// } else if (request == 'type') {
//     obj.pet.type = prompt('Введите вид своего питомца(?)')
//     console.log(obj.pet.type);
// } else if (request == 'name') {
//     obj.pet.name = prompt('Введите имя своего питомца(?)')
//     console.log(obj.pet.name);
// } else if (request == 'color') {
//     obj.pet.color = prompt('Введите цвет своего питомца(?)')
//     console.log(obj.pet.color);
// } else if (request == 'pet age') {
//     obj.pet.age = prompt('Введите возраст своего питомца(?)')
//     console.log(obj.pet.age);
// } else{
//     console.log('Некорректные данные');
// }

// console.log(obj);

//*************************************************************************************************************************************************************************************

// task 6. Дан объект с продуктами:
// let products = {
//     'Milk': 100,
//     'Sugar': 70,
//     'Butter': 50,
//     'Bread': 20,
//     'Water': 30,
//     'Salt': 10
// }, запросить у пользователя одним промптом какие продукты он хочет приобрести, затем вывести сообщение с конечной суммой заказа

 let products = {
    'Milk': 100,
    'Sugar': 70,
    'Butter': 50,
    'Bread': 20,
    'Water': 30,
    'Salt': 10
    }

    let order = prompt('Введите названия продуктов, которые вы хотите приобрести, через запятую:');
    let orderArr = order.split(',');

    let total = 0;

    if (products.hasOwnProperty(orderArr[0])) {
    total += products[orderArr[0]];
    }
    if (products.hasOwnProperty(orderArr[1])) {
    total += products[orderArr[1]];
    }
    if (products.hasOwnProperty(orderArr[2])) {
    total += products[orderArr[2]];
    }
    if (products.hasOwnProperty(orderArr[3])) {
    total += products[orderArr[3]];
    }
    if (products.hasOwnProperty(orderArr[4])) {
    total += products[orderArr[4]];
    }
    if (products.hasOwnProperty(orderArr[5])) {
    total += products[orderArr[5]];
    }

    console.log(`Сумма заказа составит ${total}`);

//*************************************************************************************************************************************************************************************

// task 7. Запросить у пользователя 3 числа одним промптом, сохранить все числа в разные переменные, затем вывести их разность

// let num =  prompt('enter number').split('')
// let result=+num[0]
// let result1=+num[1]
// let result2=+num[2]
// console.log(result-result1-result2)

//*************************************************************************************************************************************************************************************

// task 8. Запросить у пользователя 2 числа, и вывести их произведение, если одно из чисел 0, то вывести сообщение типа: При умножении на 0, любое число будет 0

// let num1 = +prompt('Enter fisrt number')
// let num2 = +prompt('Enter second number')
 

// if (num1 === 0 || num2 === 0){
//     alert('При умножении на 0, любое число будет 0')
// }else;{
//     let result = (num1 * num2) 
//     console.log(result);
// }

