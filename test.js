/**
Напишите функцию, которая найдет все наборы анаграмм в строке. 
Анаграммы - слова, составленные из одного и того же набора букв (рост-сорт-трос)
*/

let str = 'адрес карп среда куст хйу мир мука йху парк рим дреса хуй стук рост сорт трос';
function getAnagrams(str) {
  // код функции здесь
  let words = [], wordsCopy = [];
  let wordForArrayWords = '';
  let j = 0;
     for(let i = 0; i < str.length; i++){
          if(str[i] != " "){
               wordForArrayWords += str[i];
          }
          else if((str[i] == ' ' && str[i + 1] != ' '))
          {
               words[j]=wordForArrayWords;
               wordForArrayWords="";
               j++;
          }
     }
     words[j] = wordForArrayWords;
     wordsCopy = words.slice();
     let arrayForAnagrams = [];
     let count = 0;
     j = 0;
     for(let i = 0; i < words.length; i++){
          for(let j = 0; j < words.length; j++){
               if(words[i].length == wordsCopy[j].length){
                    for(let k = 0; k < words[i].length; k++){
                         if(wordsCopy[j].includes(words[i][k])){
                              count++;     
                         }
                    }
                    if(count == wordsCopy[j].length){
                         arrayForAnagrams.push(words[j]);
                         wordsCopy[j]="";
                    }
                    count = 0;
               }
          }
          if (arrayForAnagrams.length > 1)
               console.log(arrayForAnagrams);
          while(arrayForAnagrams.length != 0){
               arrayForAnagrams.pop();
          }
     }
}
getAnagrams(str);