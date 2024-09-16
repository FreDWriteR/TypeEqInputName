(function() {
    let selectElement = document.querySelector('select[name="type_val"]');
    let elements = document.querySelectorAll("input[name*=input_]");

    function updateFormFields() {
        let selectedValue = selectElement.value;
        console.time('UpdateFormFields');

///////////Получение значений атрибутов и изменения стиля каждого элемента в одном цикле///////////////
//     elements.forEach(el => {
//         let fieldName = el.getAttribute('name');

//         if (fieldName && fieldName.includes(`input_${selectedValue}`)) {
//             el.parentElement.style.display = '';
//         } else {
//             el.parentElement.style.display = 'none';
//         }
//     });
//////////////////////////////////////////////////////////////////////////////////////////////////////

///////////Изменение стиля сразу всех полей в одном цикле и изменение нужных во втором///////////////
//     document.querySelectorAll('input[name*=input_]').forEach(el => {
//         el.parentElement.style.display = 'none';
//     });

//     document.querySelectorAll(`input[name="input_${selectedValue}"]`).forEach(el => {
//         el.parentElement.style.display = '';
//     });
//////////////////////////////////////////////////////////////////////////////////////////////////////

///////////Второй вариант, но с использованием классов (браузер обрабатывает изменения стилей на основе CSS-классов более эффективно)///////////////
        document.querySelectorAll('input[name*=input_]').forEach(el => {
            el.parentElement.classList.remove('show');
        });

        document.querySelectorAll(`input[name="input_${selectedValue}"]`).forEach(el => {
            el.parentElement.classList.add('show');
        });
//////////////////////////////////////////////////////////////////////////////////////////////////////
        console.timeEnd('UpdateFormFields');
    }

    updateFormFields();

    selectElement.addEventListener('change', updateFormFields);
})();

/////////////////   КЛАСС   ///////////////
// input.show {
//     display: block;
// }