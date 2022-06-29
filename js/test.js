// console.log('test js');
/**
 * class testing
 */

// let myClass=class  {
//    constructor() {
//    }
// }
// object.getPrototypeOf(myClass)
// console.log(typeof(myClass)  );

// let coordinates={
//     x:10,
//     y:1,
// }

// class Soooo {
//   constructor(cordinatesX,cordinatesY) {
//       this.cordinatesX=cordinatesX;
//       this.cordinatesY=cordinatesY;
//   }
// getArea(){
//       let area=this.cordinatesX * this.cordinatesY;
//       return area;
// }
// }
//
// let dooo=new Soooo(5,10);
// let area=dooo.getArea()
// console.log(area,dooo);




// let birthday1=new Date('5 25,1999 ,14:00');
// let day=birthday1.getDay();
// console.log(day)

// const fib=[1,1,2,3,5,8];
// const [, ,a,b,c]=fib;
// console.log(a,b,c)


/////////////////////////destrukturizaciya arr
// const persons= ['ringo','ruben','vaxo'];
// const [a,...nam]=persons;
// console.log(nam);

// const users= {
//     david:'admin',
//     ruben:'user',
//     manuk:'user',
//     gugo:'user'
// }
// console.log(users)
// const rest=Object.entries(users)
//    .filter(([,valve])=>valve==='user')
// .map(([key])=>key);
// console.log(rest);



///////////////////destrukturizaciya
// const game ={
//     type:'snake',
//     cor:{
//         start:[11,12],
//         end:[5,6]
//     }
// };
// console.log(game)
// const {cor:{start:[startX,startY],end:[endX,endY]}}=game;
// console.log(startX,startY,endX,endY)


////////////////// destrukturizaciya objects

// const person ={
//     name:{first:'Manuk',
//         last:'Manukyan',
//     },
//     age:25,
    // role:'admin'
// }
// console.log(person);
// const {name:{first:firstName,last:lastName}}=person;
// console.log(firstName,lastName);
// const {permissions:{ role='user'}={}}=person;
// console.log(role)
// const {role='user'}=person;

// function conect({
//     host="localhost",
//     port=12345,
//     user='admin' }={}) {
//     console.log('user:',user,"port:",port,"host:",host);
// }
//
// console.log()
// conect()

// const animals = {
//     dog:'gav',
//     duck:'hjgghh',
//     lion:'ttttf',
//     pig:'jkklj'
// };
// const {pig}=animals //++++++++1
// console.log(pig) //+++++++++++1
// const {dog,...otherAnimals}=animals;
// console.log(otherAnimals);

///////////////////////////


/////////////// template strings   `${    }`

// let user='Ringo';
// let age =22;
// const person ={
//     name:'david',
//     age:22
// }
// console.log(`hello user name is ${person.name} person age ${person.age}  `)

/**
 * log date
 */
// let date=[];
// let d=new Date(...date);
// const today =`today ${d}`
// console.log(today)


// const items=['item1','item2']
// const templateHTMl=`
// <ul>
// <li> ${items[0]}</li>
// <li> ${items[1]}</li>
// </ul>
// `;

// console.log(templateHTMl)


///////////////// objects in es2015

// const user44={
//     user:'admin',
//     host:'localHost',
//     dbName:'Manuk'
// };
//
// const guest ={
//     user:'David',
//     password:123456
// };
////////////////////////////Object.assign()
// const result=Object.assign({},user44,guest);// {},create new object
// console.log(result);
// console.log(user44);
// console.log(guest);

// let user43={
//     name:'Manuk',
//     age:25,
//     friends:['Gugo','Rubo']
//     };
// let user42={
//     name:'David',
//     age:30
// }
//
// let shallowCopy=Object.assign({},user43,user42);
// user43.friends.push('Narek');
// console.log(shallowCopy);
// console.log(user43);

////////////// spred operator
// const defaults={
//     host:'localHost',
//     name:'Manuk',
//     password: '123456'
// };

// let user42={
//     name:'David',
//     password:'ringo123'
// };

// const spread={...defaults,...user42};
// console.log(spread)

////////////////////////////////////////////object. create prototype

//  const motorcycle={
//     info:function () {
//          console.log(this.model,'have',this.engine,'max hp',this.maxHp,'hav',this.gearBox,'gears');
//     }
//  }
// const hondaEngine=2;
// const cruiserMark='honda';
// function Motorcycle(model,engine,maxHp,gearBox){
//     this.model=model;
//     this.engine=engine;
//     this.maxHp=maxHp;
//     this.gearBox=gearBox;
// }

 // const cruiser=Object.create(motorcycle);
// cruiser.model=`${cruiserMark} shadow`;
// cruiser.engine=`Vtvin ${hondaEngine} cylinders`;
// cruiser.maxHp=43;
// cruiser.gearBox=5;

// cruiser.info();
// const sportMark='kavasaki';
// let sportEngine=4

// const sport=Object.create(motorcycle);
// sport.model=`${sportMark} zzr`;
// sport.engine=`line ${sportEngine}`;
// sport.maxHp=53;
// sport.gearBox=6;

// sport.info();

////////////////////////////////////////////////object create with new


// function Car(fuel,carModel,carEnjine) {
//         this.fuel=fuel;
//         this.carModel=carModel;
//         this.carEngine=carEnjine;
// }
// Car.prototype.information=function () {
//     console.log(this.fuel,this.carModel,this.carEngine)
// }
// const suv=new Car('petrol','Xterra','V6');
// suv.information();

// const sedan =new Car('petrol','volt','4 cilinder hibrid')
// sedan.information();

///////////////////////////////////////////////////////////// class extends
// class Transport {
//     constructor(type,engine,fuel,maxSpeed,canFlay) {
//         this.engine=engine;
//         this.fuel=fuel;
//         this.type=type;
//         this.speed=maxSpeed;
//         this.canFlay=canFlay;
//     }
//     info(){
//         console.log(this.type,'engine type',this.engine,'fuel type',this.fuel,'maximal speed kmh',this.speed,'can flay', this.canFlay)
//     }
//     }
// const plane =new Transport('plane','RolceRolce','aeroPetrol',700,true);
//
// const carr=new Transport('carr','v6','diesel',160,false);
//
// let motorcycle=new Transport('cruiser','Vtvin','petrol',160,false)
//
// let bike = new Transport('mtb','organic','human musculs','50',false);
// bike.info();
// motorcycle.info();
// carr.info();
// plane.info();

////////////////////////////////////////////////////////// class properties

// class Counter {
//     count=1;
//     inc=()=>{
//         this.count+=Counter.step;
//         console.log(this.count)
//     }
//     static step=1;
// }
//
// const cnt=new Counter();
// console.log(cnt.count);
// for (let i = 0; i < 5; i++) {
//     setTimeout(cnt.inc,1000)
// }


// function getRandomArbitrary1(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
// class GenerateRandom{
//    genedNumY=Math.floor(Math.random()*11);
//     genedNumX=Math.floor(Math.random()*35)
// }
// let genNum=new GenerateRandom()

 // let y=genNum.genedNumY;
// let  x=genNum.genedNumX;
// console.log(x,y)


// class Generator {
//
// }

let num55=55;




// let n=11;
// let m=35;
// let testArr=[]
// for (let i=0;i<=n;i++) {
//     for (let j = 0; j <= m; j++) {
//         testArr.push(j)
//     }
// }
// console.log(testArr)

// let arrTest=[];
// let a={
//     x:1,
//     y:2,
// }
// for (let i=0;i<35;i++){
//     arrTest.push({x: i, y: 11})//arrTest===[0]
// }
// console.log(arrTest)
//
// let bar1=[
//     {
//         x:0,
//         y:0,
// }
// ]

// for (let i=0;i<=35;i++){
//     for (let j=0;j<=11;j++) {
//         bar1.push({x: i, y:j});
//     }
// }
// console.log(bar1)








// for (let i=1;i<=100;i++){
//     if (i%3===0 && i%5===0) {
//         console.log('fizzbizz');
//     }else if (i % 5 === 0) {
//         console.log('bizz')
//     }else if (i%3===0) {
//         console.log('fizz')
//     }
//     else {
//         console.log(i);
//     }
// }

// for (let i = "#"; i.length < 8; i += "#"){
//     console.log(i);
// }
// let size =8;
// let board = ' ';
// for (i=0;i<size;i++){
//     for (j=0;j<size;j++){
//         if ((i+j)%2===0){
//             board+=' ';
//         }else {
//             board+='#';
//         }
//     }
//     board+='\n';
// }
// console.log(board);



// function minFunc(a,b) {
// if (a<b) return a;
// else  return b;
// }
// console.log(minFunc(15,10))


// function range(start,end) {
//     let arr=[];
//     if (start<end){
//      for (i=start;i<=end;i++){
//          arr.push(i)  }
//     }else if (start>end){
//         for (i=end-1;i<=start;i++){
//             arr.push(i);
//         }
//     }
//     return  arr.reverse();
// }
// console.log(( range(1,10,-1)))

// let x=[];
// let y=[];

// function barFunc() {
//     for (let j = 0; j <= 35; j++) {
//         x.push(j);
//
//         for (let i = 0; i <= 11; i++) {
//             y.push(i);
             // console.log(x)
        // }
    // }
// }

// barFunc()
// console.log(x,'kkkkkkkkkkkkkkkkkkkk')
// console.log(y)

/**
 * random name func
 * @param min
 * @param max
 * @return {number}
 */
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// export {
//     getRandomArbitrary
// };

let names=[
    '1111',
    '2222',
    '3333',
    '4444',
    '5555',
    '6666',
    '7777',
   '8888',
    '9999',
    '10101010',
    '11 11 11',

    ]
    function getPlayer(names) {

            let randomPlayer = getRandomArbitrary(0,names.length)
      return names[randomPlayer];
    }

    function getTurnirPlayers(names){
    let playersArray = []
    while(playersArray.length < 2){
        let player = getPlayer(names);
            if (playersArray.length === 0){
                playersArray.push(player)
               let index = names.indexOf(player)
                // console.log(index,"+++++++++++++++++++++");
                names.splice(index,1)
            }
            if(playersArray[0] !== player){
                playersArray.push(player)
                let index = names.indexOf(player)
                names.splice(index,1)
            }
    }
        return playersArray;
    }

// for (let i = 0; i <6 ; i++) {
//     console.log(getTurnirPlayers(names));
//     alert(getTurnirPlayers(names))
// }
    //////////////////////////////////////////////////////////////////////////////////
//jumanji foood
// function remuveFunc() {
//     bonusFood.x=undefined;
//     bonusFood.y=undefined;
//     bonusFood=undefined;
// }
// setTimeout(remuveFunc,2000)  ;
    //////////////////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener('keydown', function(event) {
//     if (event.code === 'ArrowUp') {
//         alert('press Up button')
//     }
// });
//
//
// document.addEventListener('keydown', function(event) {
//     if (event.code === 'ArrowDown') {
//         alert('press down  button')
//     }
// });


// function sum(start,end) {
//     let arr1 = [];
//     if (start<end){
//     for (i=start;i<=end;i++){
//         arr1.push(i)
//     }
//     }else if (start>end){
//         for (i=end;i<=start;i++){
//             arr1.push(i)
//         }
//     }
//     return arr1
// }
// let sumTotal =sum(1,10).reduce(function (a,b){
//     return a+b ;
// })
// console.log(sumTotal)


 // let arr2 = [15,23,30,5,13,20,36,72,16,43,9,3,33,14,46,20,40,30,8];
// let nums =[];
// function nums5() {
//     for (let i=0;i<arr2.length/2;i++){
//         if (arr2[i]%5===0){
//             nums.push(arr2[i]);
//         }
//     }
// }
// nums5(arr2);
// console.log(nums);
// console.log(arr2);

// let sortFunc=arr2.sort(function (a,b) {
    // return a-b;;
    // return b-a;

// })
// console.log(arr2.reverse())




// console.log(sum(range(1, 10)));
// let total=0,count=1;
// while (count<=20){
//     total+=count;
//     count+=1;
// }
// console.log(total);




// let a=[10,15,20,25,30];
// sum=0;
// for (let i=0;i<a.length;i++){
//     sum=sum+a[i];
// }
// console.log(sum);


// let b=a.reduce((prev,item)=>{
// return prev+item;
// })
// console.log(b);

// use for circle////////////////////////////////////////////////////////////////////////////

// let a=[10,8,7,5,3,-5,88];

// let sum =0;
// for (let i=0;i<a.length;i++){
//     sum=sum+a[i];
// }
// console.log(sum);
//




// let sum2=a.reduce((prev,item)=>{
//     return prev+item;
// })
// console.log(sum2);

// use reduce////////////////////////////////////////////////////////////////////


// let max =a[0];
// let index =0
// for (let i=0;i<a.length;i++){
//     if (a[i]>max){
//         max=a[i];
//         index=i;
//     }
// }
//
// console.log(max);
// console.log(index);

// let maxRedus = a.reduce((prev,item)=>{
//     if (prev<item){
//         return item;
//     }else return prev;
// })
// console.log(maxPrev);
//


// let gumar = a.reduce((prev,item)=>{
//     return prev + item;
// })
// console.log(gumar);
//



// let maxPrevIndex = a.reduce((prev,item,index)=>{
//     if (item>prev[1]){
//         return [index,item] ;
//     }else return prev;
// },[0,a[0]]);
// console.log(maxPrevIndex);




// let minFor=0;
// for (let i=0;i<a.length;i++){
//     if (a>minFor[i]){
//         console.log(minFor)
//     }
// }



//sum with reduce function


// let total = a.reduce(function (prev,item){
//     return prev+item;
// })
// console.log(total);





//max with reduce function

// let newA=[1,5,2,3,15,8,-10,-15]
// let maxRed2 = newA.reduce(function (prev ,item) {
//     if (prev  < item){
//         return item;
//     }else return prev;
// })
// console.log(maxRed2)


//min with reduce function

// let minRed=newA.reduce(function (a,b) {
//     if (a>b){
//         return b;
//     }else  return a;
//     })
// console.log(minRed);


//sort function

// let sort = newA.sort(function (a,b) {
//     return b-a;
// })
// console.log(sort);


// filter function testing

// let filteredNums=newA.filter(function (item,) {
//     return item % 2 === 0;
// })
// console.log(filteredNums.join());


//split , join testing


// let splitTest = 'ddd,hhh,ggg,kkk';
// let splited = splitTest.split(',');
// console.log(splited);
// console.log(splited.join())


// forEach function testing


// newA.forEach(function (elem,index) {
//     console.log(index+1,elem);
// console.log(index);
// })
// console.log(newA);






// let test2=[3,6,9,12,15]
// let total2=test2.filter(function (item,index ) {
//     if (item%3===0){
//      return true
//     }else {
//         return false;
//     }
// })
// console.log(total2);




// function range(start, end) {
//     let rengedArr = [];
//     if (start < end) {
//         for (let i = start; i <= end; i++) {
//             rengedArr.push(i);
//         }
//     } else {
//         for (let i = end; i <= start; i++) {
//             rengedArr.push(i);
//         }
//     }
//     return rengedArr;
// }

// console.log(range(5, 15, -1))

// let newArr = range(5, 10)
// console.log(newArr)

// let rengedReduceArr = newArr.reduce(function (prev, item, index) {
    // return prev + item;
// })
// console.log(rengedReduceArr);
// let reduced1=newA.reduce(function (prev,item,index) {
//     return prev+item;
// })
//
// console.log(reduced1);

// let promise1=new Promise(function (resove,reject) {
//     setTimeout(()=>{
//         resove (newA.reduce(function (prev,item,index) {
//             return prev*item;
//         }));
//     },1000);
// })
//
// promise1.then((value)=>{
//     console.log(value);
//     console.log(typeof(promise1) );
//     console.log(newA);
//     console.log(10*15)
// })

// let myArr=[-10,-5,5,25,45,1];
//find arr min num + Math.min,+reduce min,
//sort arr 1,2 +sort func
//find max num +Math.max,reduce max,
//log sum


// let maxReduced=myArr.reduce(function (prev,item,index){
//     if (item>prev){
//         return item;
//     }else {
//         return prev ;
//     }
// })
// console.log(maxReduced);


// let minReduce=myArr.reduce(function (prev,item) {
//     if (prev<item){
//         return prev;
//
//     }else {
//         return item
//     }
// })
// console.log(minNum);


// let mySort=myArr.sort((a, b) => {
//     return a-b;
// })
// console.log(mySort);


// let mySort2=myArr.sort(function (a,b) {
//     return b-a;
// })
// console.log(mySort2);



// let mySum=myArr.reduce(function (prev,item) {
//     return prev+item;
//     })
// console.log(mySum);
//


// let myProm=new Promise(function (resolve,reject) {
//     setInterval( ()=> {
//       resolve ('hello world')
// },1000)

  // resolve (
// myProm.then( (value)=> {
    // console.log(myProm);
// })


// let myPromise1=new Promise(function (resolve,reject) {
//     setTimeout(()=>{
//         resolve (function () {
//
//         })
//     })
// })




// let promise1=new Promise(function (resove,reject) {
//     setTimeout(function () {
//         resove (myArr.reduce(function (prev,item) {
//             return prev*item;
//
//         }));
//     },1000);
// })
//
// promise1.then((value)=>{
//     console.log(value);
//     console.log(typeof(promise1) );
//     console.log(newA);
//     console.log(10*15)
// })
//



// let maxNum=Math.max(-10,-5,5,25,45,1);
// let minNum=Math.min(-10,-5,5,25,45,1);



// let myPromis=new Promise(function (resolve,reject) {
//     setTimeout(()=>{
//         resolve({
//
//         })
//     },1000)
// })

// myPromis.then(value => {
//     console.log(maxNum);
//     console.log(minNum);
// })

// document.getElementsByName(myPromis).onclick = function (){
// }
