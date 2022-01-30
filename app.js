const xlsx = require('xlsx');
const fs = require('fs');


//EXCEL TO JSON
const wb=xlsx.readFile('Data.xlsx' , {dateNF:'dd/mm/yyyy'});  //reading excel file
console.log(wb.SheetNames);

const ws = wb.Sheets['Sheet1'];  //reading sheet
console.log(ws);

const data=xlsx.utils.sheet_to_json(ws,{raw:false});  //convert to json
console.log(data);

fs.writeFileSync('data.json',JSON.stringify(data,null,1));

//JSON TO EXCEL
let content = JSON.parse(fs.readFileSync('data.json','utf8'));  //read json file

let newWB=xlsx.utils.book_new();  //new workbook

let newWS=xlsx.utils.json_to_sheet(content);  //json to sheet

xlsx.utils.book_append_sheet(newWB,newWS,'Sheet2'); 

xlsx.writeFile(newWB,'Data1.xlsx');










