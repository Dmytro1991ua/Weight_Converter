//select all elements to work with
const selectInput = document.querySelector(".selectInput"),
   weightValue = document.querySelector(".inputValue"),
   gramCard = document.getElementById("gramCard"),
   kgCard = document.getElementById("kgCard"),
   ounceCard = document.getElementById("ounceCard"),
   poundCard = document.getElementById("poundCard"),
   gramsOutput = document.querySelector(".gramsOutput"),
   kgOutput = document.querySelector(".kgOutput"),
   ouncesOutput = document.querySelector(".ouncesOutput"),
   poundsOutput = document.querySelector(".poundsOutput"),
   outputsParent = document.querySelector(".output");

//array of all cards
const cardsArray = ["gramCard", "kgCard", "ounceCard", "poundCard"];
//keep track on selected box option
let selectedBox = 0;

//hide weight input and section with all cards when page is loaded
weightValue.style.visibility = "hidden";
outputsParent.style.visibility = "hidden";

//hideCard() hides selected card and display the rest of them
const hideCard = (card) => {
   for (let i = 0; i < cardsArray.length; i++) {
      if (cardsArray[i] === card) {
         let match = cardsArray[i];
         document.getElementById(match).style.display = "none";
      } else {
         document.getElementById(cardsArray[i]).style.display = "flex";
      }
   }
   updateValues();
};

//updateValues () updates cards converted value when selected weight type has changed
const updateValues = () => {
   let val = weightValue.value;
   convert(selectedBox, val);
};

//convert () handles all conversion ratios
const convert = (selectedBox, val) => {
   switch (selectedBox) {

      case 1: //Pounds to..
         kgOutput.innerHTML = (val / 2.2046).toFixed(2);
         gramsOutput.innerHTML = (val / 0.0022046).toFixed(2);
         ouncesOutput.innerHTML = val * 16;
         break;
      case 2: //Grams to..
         kgOutput.innerHTML = (val / 1000);
         ouncesOutput.innerHTML = (val * 0.035274).toFixed(4);
         poundsOutput.innerHTML = val / 500;
         break;
      case 3: //Ounces to 
         kgOutput.innerHTML = (val / 35.274).toFixed(3);
         poundsOutput.innerHTML = (val * 0.062500).toFixed(3);
         gramsOutput.innerHTML = (val / 0.035274).toFixed(4);
         break;
      case 4: // killos to..
         poundsOutput.innerHTML = (val * 2.2046).toFixed(2);
         ouncesOutput.innerHTML = (val * 35.274).toFixed(2);
         gramsOutput.innerHTML = val * 1000;
         break;
   }
};

//listen for changes in select box
selectInput.addEventListener("change", (event) => {
   event.preventDefault();
   weightValue.style.visibility = "visible";
   outputsParent.style.visibility = "visible";

   //get a current value in selected option
   let target = event.target.value;

   //hide a selected card and display the rest of them
   if (target === "1") {
      selectedBox = 1;
      hideCard("poundCard");
   }

   if (target === "2") {
      selectedBox = 2;
      hideCard("gramCard");
   }

   if (target === "3") {
      selectedBox = 3;
      hideCard("ounceCard");
   }

   if (target === "4") {
      selectedBox = 4;
      hideCard("kgCard");
   }
});

//updates converted values on input
weightValue.addEventListener("input", (event) => {
   let target = event.target.value;
   convert(selectedBox, target);
});


