// пишу код, для появления доп.опции выбора модели, при выборе определенной марки автомобиля
// прописываю константы для необходимых элементов
const carType = document.getElementById('car_type');
const carModel = document.querySelector('.car__model');
const reanault = document.getElementById('Reanault');
const opel = document.getElementById('Opel');
const ford = document.getElementById('Ford');

//обработчик событий для селектора
carType.addEventListener('change', () => {
    if (carType.value === reanault.value) {
        carModel.innerHTML = `
        <label for="car_model">Модель автомобиля
        <select name="Car Model" id="reanault_models">
            <option value="Duster">Duster</option>
            <option value="Logan">Logan</option>
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
});
// 
const usedCarOptions = document.querySelector('.used__car-options');
const usedCar = document.getElementById('used');
usedCar.addEventListener('change', () => {
    if (usedCar.value === 'used') {
        usedCarOptions.innerHTML = `
        <label>
            <input type="radio" name="owners">1-2 владельца
            <input type="radio" name="owners">3 и больше
        </label>`;
    }
})
