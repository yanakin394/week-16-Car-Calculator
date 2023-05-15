//константы необ.элементов
const carModel = document.querySelector('.car__model');
const priceWrapper = document.querySelector('.price__wrapper');
const form = document.querySelector('.form');

//модели автомобилей
const reanault = document.getElementById('Reanault');
const opel = document.getElementById('Opel');
const ford = document.getElementById('Ford');

//селектор
const carType = document.getElementById('car_type');
let reanaultModels ='';

//радиокнопки
const radioFuelType = document.querySelectorAll('input[name="fuel type"]');
const radioCondition = document.querySelectorAll('input[name="condition"]');
const usedCarOptions = document.querySelector('.used__car-options');
const usedCar = document.getElementById('used');
let radioUsed = '';

function changeModelForm () {
    if (carType.value === reanault.value) {
        carModel.innerHTML = `
        <label for="car_model">Модель автомобиля
        <select name="Car Model" id="reanault_models">
            <option value="2500">Duster</option>
            <option value="2000">Logan</option>
            <option value="Kaptur">Kaptur</option>
            <option value="Sandero">Sandero</option>
        </select>
    </label>`;
    } else if (carType.value === opel.value) {
        carModel.innerHTML = `
        <label for="car_model">Модель автомобиля
        <select name="Car Model" id="opel_models">
            <option value="Duster">Insignia</option>
            <option value="Mokka">Mokka</option>
            <option value="Astra">Astra</option>
            <option value="Astra Family">Astra Family</option>
        </select>
    </label>`;
    } else if (carType.value === ford.value) {
        carModel.innerHTML = `
        <label for="car_model">Модель автомобиля
        <select name="Car Model" id="ford_models">
            <option value="LTD">LTD</option>
            <option value="Taurus">Taurus</option>
            <option value="Focus">Focus</option>
            <option value="Fiesta">Fiesta</option>
        </select>
    </label>`;
    } 
}
function usedCarForm () {
    if (usedCar.value === 'used') {
        usedCarOptions.innerHTML = `
        <label>
            <input type="radio" name="owners"="1.1">1-2 владельца
            <input type="radio" name="owners" value="1.3">3 и больше
        </label>`;
    }
}

carType.addEventListener('change', (changeModelForm));
usedCar.addEventListener('change', (usedCarForm));

reanaultModels = document.getElementById('reanault_models');
radioUsed = document.querySelectorAll('input[name="owners"]');

function priceCalc () {
    reanaultModels.value * parseFloat(radioUsed.value)
}

priceWrapper.innerText =  priceCalc;

/* //обработчик событий для селектора
carType.addEventListener('change', () => {
    if (carType.value === reanault.value) {
        carModel.innerHTML = `
        <label for="car_model">Модель автомобиля
        <select name="Car Model" id="reanault_models">
            <option value="2500">Duster</option>
            <option value="2000">Logan</option>
            <option value="Kaptur">Kaptur</option>
            <option value="Sandero">Sandero</option>
        </select>
    </label>`;
    } else if (carType.value === opel.value) {
        carModel.innerHTML = `
        <label for="car_model">Модель автомобиля
        <select name="Car Model" id="opel_models">
            <option value="Duster">Insignia</option>
            <option value="Mokka">Mokka</option>
            <option value="Astra">Astra</option>
            <option value="Astra Family">Astra Family</option>
        </select>
    </label>`;
    } else if (carType.value === ford.value) {
        carModel.innerHTML = `
        <label for="car_model">Модель автомобиля
        <select name="Car Model" id="ford_models">
            <option value="LTD">LTD</option>
            <option value="Taurus">Taurus</option>
            <option value="Focus">Focus</option>
            <option value="Fiesta">Fiesta</option>
        </select>
    </label>`;
    } 
    reanaultModels = document.getElementById('reanault_models'); 
    // функция для расчета цены 
    function bla () {
        return reanaultModels;
    }
});

usedCar.addEventListener('change', () => {
    if (usedCar.value === 'used') {
        usedCarOptions.innerHTML = `
        <label>
            <input type="radio" name="owners">1-2 владельца
            <input type="radio" name="owners">3 и больше
        </label>`;
    }
    radioUsed = document.querySelectorAll('input[name="owners"]')
})

// логика калькулятора
const calcButton = document.getElementById('calc__button');
calcButton.addEventListener('click', () => {
    bla();
}); */