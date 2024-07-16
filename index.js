//let a=10
//let b=12.23
//let c=true
//console.log(a)
//console.log(b)
//console.log(c)
//const obj={
  //  name:"abc",
    //age:15
//}
//console.log(obj);
//let arr=[1,2,3,4,5,6,7,]
//let sarr=['a','b','c']
//console.log(arr)
//console.log(sarr)
//let age=18
//if(age>=18){
    //console.log("above 18")
//}
//else if(a==2){
    //console.log("neither true nor false its just a number")
//}
//else{
   // console.log("below 18")
//}
//let a= 'abc';
//console.log("hey ${a}")
//function func(){
  //  console.log("hey there!")
//}
//func();

//document.addEventListener("click",()=>{
  //  console.log("djbf")
//})

//const fun3=()=>{

//}
//fun3()
//let arr=[1,2,3,4,5]
//for(let i in arr){
  //  console.log(i)
//}
//const obj ={
   // name:"ABC",
    //age:34,
  //  section:'d'
//}

//for( let i in obj){
  //  console.log(`key :${i} \t value:${obj[i]}`) 
//}
//let a=[1,2,3,4,5]
//a.map((value,index)=>{
  //  console.log(`${index}` ,`${value}`)
//})
//function getnum(arr){
   // let evennumber=[];
   // for(let i=0;i<arr.length;i++){
       // if(arr[i]%2==0){
      //      evennumber.push(arr[i]);
       // }
    //}
    //return evennumber;
//}
//let number=[1,2,3,4,5,6,7,8,9]
//let result=getnum(number)
//console.log(result)
//let p=new Promise((ressolve,reject)=>{
    //let a=10;
   // if(a>=18){
      // ressolve("habibi you turned adult");
    //}else{
   //    reject("habibi under water");
    //}
 //})
 //p.then((m)=>{
   // console.log(m);
 //})
 //p.catch((e)=>{
   // console.log(e);
 //})
 //setinterval(()=>{
    //console.log("hey there")
// },3000) 
 //fetch('https://api.restful-api.dev/objects')
 //.then(re=>{return re.json()})
 //.then(res=>console.log(res))
 //.catch((e)=>{
   // console.log(e)
 //})
 const obj={
    name: 'Moto edge 40 neo',
    data: { Capacity: '128 GB', 'Screen size': 15.6 }
  }

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));