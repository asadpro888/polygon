let hello = 'hello worlde';
console.log(hello);

  let blue = true;
         let red  = false;
         let green;
         let nyNum = 5;
         let otherNum = 6;
        // // string data
         let notNum = "chicken";
        // let myValue = notNum - nyNum;
        // // if, else statements
         if(myValue){
             console.log('the statement is True!')
         }else{

             console.log('the statement is False!');
             console.log(myValue);
         }
            
             let selectedColor = colors[3];
             console.log(colors);
             colors.shift('blue')

             if(selectedColor == 'red'){
                 console.log("the color is red");
             }
             else if(selectedColor == 'green'){
                 console.log("the color is green");
             }
             else if(selectedColor == 'blue'){
                 console.log("the color is blue");
             }
             else{
                 console.log("the color is yellow");
             }
            let foods = ['cheese', 'pie','breakfast', 'lunch'];
             switch(selectedColor){
                 case "cheese": console.log("the food is cheese"); break;
                 case "pie": console.log("the food is pie"); break;
                 case "breakfast": console.log("the time is breakfast"); break;
                 case "lunch": console.log("the time is lunch"); break;
                 default: console.log("There was an error!")
             }


             let goodMood = true;
             let gotSleep = false;
           // if(goodMood && gotSleep){
                 console.log('today is good day');
             }else{
                 console.log("i am grumpy");
             }
            let gotBreakfast = false;
             let gotLunh = false;
             let gotDinner = false;
            if(gotBreakfast || gotLunh || gotDinner){
                 console.log("things are ok");
             }else{
                 console.log("i am STARVING");
             }

             let colors = ["red", "green", "blue", "yellow", "orange", "purple", "teal"];
             for(let i = 0; i < colors.length; i++){
                 console.log(colors[i]);
             }

             let colors = ["red", "green", "blue", "yellow", "orange", "purple", "teal"];
             for(let eachColor of colors){
                 console.log(eachColor);
             }

             let myString = "Here is a string of text";
            

             for( let i = 0; i<myString.length; i++){
                 console.log(myString[i]);
             }
             for(let eachLetter of myString){
                  console.log(eachLetter);
              }

             let inremnetor = 0;
             let text = "";

             while(inremnetor < 10){
                 text += "this incrementor has gone up to" + inremnetor + "\n"
                 inremnetor++;
             }
             console.log(text);



             let inremnetor = 1;
             let text = "";

             while(inremnetor < 11){
                 text += `this incrementor has gone up to ${inremnetor}  \n`;
                 inremnetor++;
             }
             console.log(text);

             let i = 1;
             let text = "";

             while(i < 11){
                 text += `this incrementor is ${i}, the incrementor squared is ${i * i}  \n`;
                 i++;
             }
             console.log(text);

            let myString = "i am really hungry for some";
            console.log(myString);
            let myUpperString = myString.toUpperCase();
            console.log(myUpperString);

            // let reallyLocation = myString.search('really');
            // console.log(reallyLocation);
            let reallyLocation = myString.search('really');
            let specialWord = myString.substr(reallyLocation, 6);
            specialWord = specialWord.toUpperCase();
            let newString = myString.replace('really', specialWord)
            console.log(newString);
            let h1 = document.querySelector('h1')
            let body = document.querySelector('body')
            h1.style.backgroundColor = `red`;
            h1.style.width = `50%`;
            h1.style.fontSize = `36px`
            h1.style.fontFamily = `cursive`;
            h1.style.color = `white`
            body.style.margin = `0`;
            
            console.log(`${myString} ${foods[0]}`);

            for(let i = 0; i <foods.length; i++){
                console.log(`${myString} ${foods[i]}`);
            }
            for(let eachFood of foods){
                 console.log(`${myString} ${eachFood}`);
             }
            "use strict";
            for(let i = 0; i< foods.length; i++){
                if(i % 2 === 0){
                    console.error(`${myString} ${foods[i].toUpperCase()}`);
                }else{
                    console.error(`${myString} ${foods[i]}`);
                }
            }
                let img = document.createElement('img');
                img.src = `bts.jpg`;
                let input = document.createElement('input');
                input.type = 'range';
                input.style.outline = `none`

                let input2 = document.createElement('input');
                input2.type = 'color';
                input2.style.borderRadius = `50%`
                input2.style.width = `50px`
                input2.style.height = `50px`

                input2.addEventListener('input', (e)=>{
                    body.style.backgroundColor = e.target.value
                })

                let card = document.createElement('div');
                let img1 = document.createElement('img');
                let div  = document.createElement('div');
                img1.src = `bts.jpg`;
                let inp = document.createElement('input');
                inp.type = 'text'
                inp.addEventListener('keyup', (e)=>{
                    body.textContent = e.target.value
                })
                let para = document.createElement('p')
                para.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quisquam. Veniam aliquam possimus similique. Reiciendis dolor doloribus corrupti consequuntur quam.'
                let btn = document.createElement('button');
                btn.textContent = `button`
                card.style.width = `200px`
                card.style.border = `1px solid black`
                card.style.padding = `30px`
                card.style.margin = `30px`
                btn.style.padding = `10px`
                btn.style.backgroundColor = `transparent`
                btn.style.border = `2px solid red`
                para.style.transition = `0.9s ease-in-out`
                card.style.transition = `1.9s ease-in-out`
                if (input && card) {
                    input.addEventListener('change', (event) => {
                        const value = parseFloat(event.target.value);
                        if (value >= 0) {
                        card.style.transform = `rotate(${value}deg)`;
                        }
                    });
} 
                body.appendChild(card)
                card.appendChild(img1)
                card.appendChild(para)
                card.appendChild(btn)
                body.appendChild(input)
                body.appendChild(input2)
                body.appendChild(img)
                body.appendChild(div)
                div.appendChild(inp)


