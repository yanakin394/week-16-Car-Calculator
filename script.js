//константы необ.элементов
const carModel = document.querySelector('.car__model');
const priceWrapper = document.querySelector('.price__wrapper');
const form = document.querySelector('.form');
const power = document.querySelector('.power__input');
//модели автомобилей
const reanault = document.getElementById('Reanault');
const opel = document.getElementById('Opel');
const ford = document.getElementById('Ford');
//селектор
const carType = document.getElementById('car_type');
//модели
let carModelValue = '';
let reanaultModels ='';
let opelModels ='';
let fordModels ='';
let enginePower = '';
//радиокнопки
const radioFuelType = document.querySelectorAll('input[name="fuel type"]');
const radioCondition = document.querySelectorAll('input[name="condition"]');
const usedCarOptions = document.querySelector('.used__car-options');
const usedCar = document.getElementById('used');
//функции для изменения формы
function changeModelForm () {
    if (carType.value === reanault.value) {
        carModel.innerHTML = `
        <label for="car_model">Модель автомобиля
        <select name="Car Model" id="reanault_models">
            <option value="2500000">Duster</option>
            <option value="2000000">Logan</option>
            <option value="2200000">Kaptur</option>
            <option value="2100000">Sandero</option>
        </select>
    </label>`;
    reanaultModels = document.getElementById('reanault_models');
    carModelValue = reanaultModels.value;
    } else if (carType.value === opel.value) {
        carModel.innerHTML = `
        <label for="car_model">Модель автомобиля
        <select name="Car Model" id="opel_models">
            <option value="3500000">Insignia</option>
            <option value="3300000">Mokka</option>
            <option value="34500000">Astra</option>
            <option value="4000000">Astra Family</option>
        </select>
    </label>`;
    opelModels = document.getElementById('opel_models');
    carModelValue = opelModels.value;
    } else if (carType.value === ford.value) {
        carModel.innerHTML = `
        <label for="car_model">Модель автомобиля
        <select name="Car Model" id="ford_models">
            <option value="3500000">LTD</option>
            <option value="3700000">Taurus</option>
            <option value="3650000">Focus</option>
            <option value="3400000">Fiesta</option>
        </select>
    </label>`;
    fordModels = document.getElementById('ford_models');
    carModelValue = fordModels.value;
    } 
}
function usedCarForm () {
    if (usedCar.value === 'used') {
        usedCarOptions.innerHTML = `
        <label>
            <input type="radio" name="owners" value="0.9">1-2 владельца
            <input type="radio" name="owners" value="0.7">3 и больше
        </label>`;
    }
}

function textInput () {    
    if (power.value >= 3.1) {
        enginePower = 1;
    } else if (power.value >= 2) {
        enginePower = 0.98;
    } else if (power.value <= 1.99) {
        enginePower = 0.96;
    } 

}
//обработчики для изменения формы
carType.addEventListener('change', (changeModelForm));
usedCar.addEventListener('change', (usedCarForm));
power.addEventListener('change', (textInput));

//функция подсчета цены
function priceCalc () {
    let fuelType = document.querySelectorAll('input[name="fuel type"]');
    let radioUsed = document.querySelectorAll('input[name="owners"]');
    let price = +carModelValue;
    for (const fuel of fuelType) {
        if (fuel.checked) {
        price = price * +fuel.value;
        }
    }
    for (const used of radioUsed) {
        if (used.checked) {
            price = price * +used.value;
        }
    }    
    price = price * +enginePower;
    return price
}
//обработчик на изменения формы и вывод цены на экран
form.addEventListener('change', () => {
    priceWrapper.innerHTML =  `<p>${Math.round(+priceCalc())}</p><p> рублей</p>`
})
