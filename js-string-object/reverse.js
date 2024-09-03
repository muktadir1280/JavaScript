 // simple way of reverse
 const sentence = 'I am learning Web Dev.'
 console.log(sentence);

 let reverse = '';
 for (const letter of sentence) { //alada alada kore letter paichi 
     console.log(letter);
     reverse = letter + reverse1;
 }
 console.log(reverse);


 //reverse by for loop
 const sentence1 = 'Web Development.'
 let reverse1 = '';
 for (let i = 0; i < sentence1.length; i++) {
     // console.log(i); //eikhane sudhu index pabo 0,1, 2 eivabe
     // console.log(sentence1[i]); //index er sathe sathe index er value o pawa jabe
     const letter = sentence1[i];
     reverse1 = letter + reverse1;
 }
 console.log(reverse1);

 //shortcut reverse
 const sentence2 = 'Development.'
 const reserved = sentence2.split('').reverse().join('');
 console.log(reserved);