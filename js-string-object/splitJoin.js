// using split()
const sentence = 'This is Muktadir Rahman';
console.log(sentence.split(' '));

//using split() by special charecter
const sentence1 = 'This is Muktadir Rahman';
console.log(sentence1.split('a'));

// //using split() by comma
const friendsStr = 'Muktadir, Sabil, Rahman';
const friend = friendsStr.split(',')
console.log(friend);

// using join ()
const realFriend = ['Muktadir', ' Sabil', ' Rahman'];
console.log(realFriend.join());
console.log(realFriend.join('|'));