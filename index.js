const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


//1 Display an array from the cities in gotCitiesCSV
function kata1(){
let span1 = document.createElement("span");
let newElement1 = document.getElementById("div1");
newElement1.textContent = JSON.stringify(gotCitiesCSV);
newElement1.appendChild(span1);
};
kata1();

//2 Display an array of words from the sentence in bestThing
function kata2(){
let words = bestThing.split(" ");
let span2 = document.createElement("span");
let newElement2 = document.getElementById("div2");
newElement2.textContent = (words);
newElement2.appendChild(span2);
};
kata2();

//3 Display a string separated by semi-colons instead of commas from gotCitiesCSV
function kata3(){
let span3 = document.createElement("span");
let newElement3 = document.getElementById("div3");
let thing = gotCitiesCSV.split(" ");
let repalce = gotCitiesCSV.replace(/,/g, ";");
newElement3.textContent = (repalce);
newElement3.appendChild(span3);
};
kata3();

//4 Display a CSV (comma-separated) string from the lotrCitiesArray
function kata4() {
    let csvString = lotrCitiesArray.join(", ");
    let span4 = document.createElement("span");
    let newElement4 = document.getElementById("div4");
    newElement4.textContent = (csvString);
    newElement4.appendChild(span4);
};
kata4();

function kata5() {
    //5 Display the first 5 cities in lotrCitiesArray
    let firstFive = lotrCitiesArray.slice(0, 5);
    let span5 = document.createElement("span");
    let newElement5 = document.getElementById("div5");
    newElement5.textContent = (firstFive);
    newElement5.appendChild(span5);
};
kata5();

//6 Display the last 5 cities in lotrCitiesArray
function kata6(){

let lastFive = lotrCitiesArray.slice(3, 8);
let span6 = document.createElement("span");
let newElement6 = document.getElementById("div6");
newElement6.textContent = (lastFive);
newElement6.appendChild(span6);
};
kata6();

//7 Display the 3rd to 5th city in lotrCitiesArray
function kata7() {
    let thirdToFifth = lotrCitiesArray.slice(2, 5);
    let span7 = document.createElement("span");
    let newElement7 = document.getElementById("div7");
    newElement7.textContent = (thirdToFifth);
    newElement7.appendChild(span7);
};
kata7();


//8 Using splice, remove "Rohan" from lotrCitiesArray
function kata8() {
    lotrCitiesArray;
    let noRo = lotrCitiesArray.splice(2, 1);
    let span8 = document.createElement("span");
    let newElement8 = document.getElementById("div8");
    newElement8.textContent = (lotrCitiesArray);
    newElement8.appendChild(span8);
};
kata8();


//9 Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray
function kata9() {
    let afterDeadMarsh = lotrCitiesArray.splice(4, 3);
    let span9 = document.createElement("span");
    let newElement9 = document.getElementById("div9");
    newElement9.textContent = (lotrCitiesArray);
    newElement9.appendChild(span9);
};
kata9();

//10 Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"
function kata10() {
    let addRoBack = lotrCitiesArray.splice(2, 0, "Rohan")
    let span10 = document.createElement("span");
    let newElement10 = document.getElementById("div10");
    newElement10.textContent = (lotrCitiesArray);
    newElement10.appendChild(span10);
};
kata10();

//11 Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray
function kata11() {
    lotrCitiesArray[5] = "Deadest Marshes";
    let span11 = document.createElement("span");
    let newElement11 = document.getElementById("div11");
    newElement11.textContent = (lotrCitiesArray);
    newElement11.appendChild(span11);
};
kata11();

//12 Using slice, display the first 14 characters from bestThing
function kata12() {
    let first14 = bestThing.slice(0, 14);
    let span12 = document.createElement("span");
    let newElement12 = document.getElementById("div12");
    newElement12.textContent = (first14);
    newElement12.appendChild(span12);
};
kata12();

//13 Using slice, display the last 12 characters from bestThing
function kata13() {
    let last14 = bestThing.slice(69, 81);
    let span13 = document.createElement("span");
    let newElement13 = document.getElementById("div13");
    newElement13.textContent = (last14);
    newElement13.appendChild(span13);
};
kata13();

//14 Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even")
function kata14() {
    let middle14 = bestThing.slice(23, 38);
    let span14 = document.createElement("span");
    let newElement14 = document.getElementById("div14");
    newElement14.textContent = (middle14);
    newElement14.appendChild(span14);
};
kata14();

//15 Repeat #13 using substring instead of slice.
function kata15() {
    let sub15 = bestThing.substring(69, 81);
    let span15 = document.createElement("span");
    let newElement15 = document.getElementById("div15");
    newElement15.textContent = (sub15);
    newElement15.appendChild(span15);
};
kata15();

//16 Repeat #14 using substr instead of slice.
function kata16() {
    let sub16 = bestThing.substring(23, 38);
    let span16 = document.createElement("span");
    let newElement16 = document.getElementById("div16");
    newElement16.textContent = (sub16);
    newElement16.appendChild(span16);
};
kata16();

//17 Find and display the index of "only" in bestThing
function kata17() {
    let onlyBestThing = bestThing.indexOf("only");
    let span17 = document.createElement("span");
    let newElement17 = document.getElementById("div17");
    newElement17.textContent = (onlyBestThing);
    newElement17.appendChild(span17);
};
kata17();

//18 Find and display the index of the last word in bestThing
function kata18() {
    let lastBestThing = bestThing.indexOf("bit");
    let span18 = document.createElement("span");
    let newElement18 = document.getElementById("div18");
    newElement18.textContent = (lastBestThing);
    newElement18.appendChild(span18);
};
kata18();

//19 Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)
function kata19() {
    let splitgotCitiesCSV = gotCitiesCSV.split(",")
    for (let i = 0; i < splitgotCitiesCSV.length; i++) {
        if (splitgotCitiesCSV[i].includes("aa") || splitgotCitiesCSV[i].includes("ee") || splitgotCitiesCSV[i].includes("ii") || splitgotCitiesCSV[i].includes("oo") || splitgotCitiesCSV[i].includes("uu")) {
            let span19 = document.createElement("span");
            let newElement19 = document.getElementById("div19");
            newElement19.textContent = (splitgotCitiesCSV[i]);
            newElement19.appendChild(span19);
        }
    }
};
kata19();

//20 Find and display all cities from lotrCitiesArray that end with "or"
function kata20() {
    let newElement20 = document.getElementById("div20");
    for (let i = 0; i < lotrCitiesArray.length; i++) {
        if (lotrCitiesArray[i].endsWith('or')) {
            let span20 = document.createElement("div");
            span20.textContent = (lotrCitiesArray[i]);
            newElement20.appendChild(span20);
        }
    }
};
kata20();


//21 Find and display all the words in bestThing that start with a "b"
function kata21() {
    let newElement21 = document.getElementById("div21");
    let splitBestThing = bestThing.split(" ");
    for (i = 0; i < splitBestThing.length; i++) {
        if (splitBestThing[i].startsWith('b')) {
            let span21 = document.createElement("div");
            span21.textContent = (splitBestThing[i]);
            newElement21.appendChild(span21);
        }
    }
};
kata21();


//22 Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"
function kata22() {
    for (i = 0; i < lotrCitiesArray.length; i++) {
        if (lotrCitiesArray[i].includes('Mirkwood') === true) {
            let span22 = document.createElement("span");
            let newElement22 = document.getElementById("div22");
            newElement22.textContent = ('Yes');
            newElement22.appendChild(span22);
        }
    }
};
kata22();


//23 Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"
function kata23() {
    for (i = 0; i < lotrCitiesArray.length; i++) {
        if (lotrCitiesArray[i].includes('Hollywood') !== true) {
            let span23 = document.createElement("span");
            let newElement23 = document.getElementById("div23");
            newElement23.textContent = ('no');
            newElement23.appendChild(span23);
        }
    }
};
kata23();


//24 Display the index of "Mirkwood" in lotrCitiesArray
function kata24() {
    let indexOfMirkwood = lotrCitiesArray.indexOf("Mirkwood");
    let span24 = document.createElement("span");
    let newElement24 = document.getElementById("div24");
    newElement24.textContent = (indexOfMirkwood);
    newElement24.appendChild(span24);
};
kata24();


//25 Find and display the first city in lotrCitiesArray that has more than one word
function Kata25() {
    for (i = 0; i < lotrCitiesArray; i++) {

    }
    let span25 = document.createElement("span");
    let newElement25 = document.getElementById("div25");
    newElement25.textContent = (lotrCitiesArray);
    newElement25.appendChild(span25);
};
Kata25();


//26 Reverse the order in lotrCitiesArray
function kata26() {
    let span26 = document.createElement("span");
    let newElement26 = document.getElementById("div26");
    newElement26.textContent = (lotrCitiesArray.reverse());
    newElement26.appendChild(span26);
};
kata26();


//27 Sort lotrCitiesArray alphabetically
function kata27() {
    let span27 = document.createElement("span");
    let newElement27 = document.getElementById("div27");
    newElement27.textContent = (lotrCitiesArray.sort());
    newElement27.appendChild(span27);
};
kata27();


//28 Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)
function kata28() {
    lotrCitiesArray.sort(function (a, b) {
        return a.length - b.length;
    });
    let span28 = document.createElement("span");
    let newElement28 = document.getElementById("div28");
    newElement28.textContent = (lotrCitiesArray);
    newElement28.appendChild(span28);
};
kata28();


//29 Using pop, remove the last city from lotrCitiesArray
function kata29() {
    lotrCitiesArray.pop()
    let span29 = document.createElement("span");
    let newElement29 = document.getElementById("div29");
    newElement29.textContent = (lotrCitiesArray);
    newElement29.appendChild(span29);
};
kata29();


//30 Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array
function kata30() {
    lotrCitiesArray.push('Deadest Marshes')
    let span30 = document.createElement("span");
    let newElement30 = document.getElementById("div30");
    newElement30.textContent = (lotrCitiesArray);
    newElement30.appendChild(span30);
};
kata30();


//31 Using shift, remove the first city from lotrCitiesArray
function kata31() {
    let shifty = lotrCitiesArray.shift()
    let span31 = document.createElement("span");
    let newElement31 = document.getElementById("div31");
    newElement31.textContent = (lotrCitiesArray);
    newElement31.appendChild(span31);
};
kata31();


//32 Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array
function kata32() {
    let shifty = lotrCitiesArray.unshift('Rohan')
    let span32 = document.createElement("span");
    let newElement32 = document.getElementById("div32");
    newElement32.textContent = (lotrCitiesArray);
    newElement32.appendChild(span32);
};
kata32();
