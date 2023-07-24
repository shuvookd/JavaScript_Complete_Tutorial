//Pass by Value Vs Pass by Reference
//Call by Value Vs call by Reference

//Test with Premetive Data
var n = 20;
function change(n) {
  n = n + 100;
  console.log(n);
}
change(n); //120
console.log(n); //20

//Test with Object Data
var obj = {
  a: 20,
};
function changeMe(obj) {
  obj.a = obj.a + 100;
  console.log(obj);
}
changeMe(obj); //120
console.log(obj); //120

//Note: কোনো Function  এর ভিতর যদি Argument আকারে বাইরে থেকে  Premitive data(Int, String, , Boolean, Undifined) send করি , তাহলে Function body কোনো ভাবে সেই data কে  chnage  করবে না। আর যদি Object send করা হয় তাহলে তা সব জায়গায় change হয়ে যাবে। কারন তা object এর reference change করে দেয়।

//Mutable Object: একটা Object কে এক জায়গায় change  করলে সব জায়গায় change হয়ে যায় , তাই Mutable Object(Data Type: Object Data)

//Immutable Object: একটা Object কে এক জায়গায় change  করলে অন্য সব জায়গায় change হবে না , তাই ীম্মutable Object(Data Type: Premetive Data)
