const temp_C = Number.parseFloat(prompt(`Введите значение температуры (градусы).`));
const temp_F = Math.round(9 * temp_C / 5 + 32);
alert(`Цельсий: ${temp_C}, Фаренгейт: ${temp_F}`);
