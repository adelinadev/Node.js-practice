const fs = require('fs');
const path = require('path');
// const student = require('./one.json');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// fs.writeFile('text.txt', 'I am screaming, you are screaming', (err) => {
//     if (err) console.log('Error');
// })

// Записываем json файл

// const man = {
//     name: 'Adelina',
//     age: 33,
//     departament: 'History',
//     car: 'audi'
// }
// fs.writeFile('one.json', JSON.stringify(man), (err) => {
//     if (err) console.log('Error');
// });

// Читаем json файл
// console.log(student);

// Читаем CSV file coma separated value, данные разделённые запятой, это специальный тип
// где в текстовом файле хранятся структурированные данные, тоесть колонки отделяются
// каким-то символом. В названии заложен символ coma но на самом деле это может быть пробел
// табуляция, точка с запятой

const results = [];
fs.createReadStream('table.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
        console.log(typeof results);
    });

const csvWriter = createCsvWriter({
    path: 'test.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'surname', title: 'lastName'},
        {id: 'age', title: 'Age'},
        {id: 'gender', title: 'g'}
    ]
});
 const data = [
     {
         name: 'John',
         surname: 'Snow',
         age: 26,
         gender: 'M'
     },
     {
         name: 'Clair',
         surname: 'White',
         age: 33,
         gender: 'F'
     },
     {
         name: 'Fancy',
         surname: 'Brown',
         age: 78,
         gender: 'F'
     }
 ]
csvWriter.writeRecords(data)       // returns a promise
    .then(() => {
        console.log('...Done');
    });


