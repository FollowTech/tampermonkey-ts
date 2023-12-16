import XLSX = require("xlsx")
import path = require('path')

// const reg = /(http|https):\/\/testvault\.dell\.com\/TestIterationDetail/;
// if (typeof window === "object") {
//     // code is running in a browser environment
//     if (reg.test(document.location.href) == true) {
//         const StartButtonstyle = ['height:40px',
//             'border-radius:4px',
//             'color: #fff',
//             'background-color: #007db8',
//             'border-color: #007db8',
//             'float: right'
//         ]
//         //console.log = console.__proto__.log 将console.log = function(){}改回原始状态
//         let el = document.evaluate('//*[@id="frm-test-iteration-detail"]/div[5]/div/ul', document).iterateNext();
//         let StartButton = document.createElement('button');
//         StartButton.setAttribute("style", StartButtonstyle.join(";"));
//         StartButton.setAttribute("type", "button");
//         StartButton.innerHTML = "开始自动执行";
//         StartButton.onclick = function (t) {
//             //code
//             document.getElementById("span-planned-start-date").innerText = "Click!";
//             console.info("343343");
//             console.info("log");
//             //window.open("https://www.baidu.com")

//         }
//         el.appendChild(StartButton);
//     } else {
//         // code is running in a non-browser environment
//     }
// } else {
//     console.log("4399")
// }

import fs = require('fs');
let ExcelNames = new Array<string>()
// 读取当前文件目录下的文件
const getExcelPath = async (dirPath:string) => {

    return await new Promise((resolve,reject)=>{
        fs.readdir(__dirname, (err: Error|null, files: string[]) => {
            if (err) {
                reject(err);
                return;
            }
            // 输出文件列表
            ExcelNames = files.filter(file => {
                return file.endsWith(".xlsx") == true
            })
            resolve(path.resolve(__dirname,ExcelNames[0]))
        });
    })
    
}

(async ()=> await getExcelPath(__dirname))()
// let SUS_PRTS = path.resolve(dir,ExcelNames[0])
console.log()
// var wb = XLSX.readFile(SUS_PRTS,)
// // var wb = XLSX.readFile("C:/Users/ll/Desktop/test/web/tampermonkey-ts/src/PVR020234 - A05 Unified DFU test for HD22Q – (Chrome) SWB# YFCXP 033HM P10K7 (version X02) LV plan.xlsx");
// const sheet = wb.Sheets['SUS_PRTS'];
// let data: string[] = [];
// data = data.concat(XLSX.utils.sheet_to_json(sheet));
// console.log(data)








