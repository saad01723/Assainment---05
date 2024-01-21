


    // <><><><><><><><><>  Answer to the Question Number 01 ><><<><><><><><><><> //

    function maindGame(PositiveNum) {
        const firstCalculation = 3 ;
        const secondCalculation = 10;
        const thirdCalculation = 2;
        const fourthCalculation = 5 ;
    
        let firstStep = PositiveNum *  firstCalculation ;
        let secondStep = firstStep + secondCalculation ;
        let thirdStep = secondStep / thirdCalculation ;
        let fourthStep = thirdStep - fourthCalculation ;
        
        return fourthStep
        
    }   
    
    let input = 5 ;
    let MaindGameOver = maindGame(input);
        console.log("Maind Game Output :" ,MaindGameOver);
    
    


// Answer to the Qusetion Number 05    //

function deliveryCost(number){
    const firstDeliveryCharg = 100 ;
    const  scendDeliveryCharg = 80 ;
    const  thirdDelivaryCharg = 50 ;
    
    let FullAmaunt = 0;
    for (let i = 1; i <= number ; i++){
        if ( i >= 1 && i <= 100){
            FullAmaunt += firstDeliveryCharg ;
        }
        else if ( i >= 101 && i <= 200) {
            FullAmaunt += scendDeliveryCharg ;
        }
        else if( i >= 201 && i <= 99999999999) {
            FullAmaunt += thirdDelivaryCharg;
        }
    }
    return FullAmaunt
}

let DeliveryNumber = 10;
let AllDeliveryNumber = deliveryCost(DeliveryNumber);
    console.log("Total Delivery Charge : ", AllDeliveryNumber , "Taka");



     // // // // // /// //// ///// //// ///// ///// /// /// 
    // // // // Answer To The Question number 04 / /// ///
   // // // //        <><<>><><><><><><>  04    / /// ///

// function totalSeal(Shirt , Pant , Shoe) {
//     let oneNumberShirtPrice = 100 ;
//     let twoNumberPantPrice = 200 ;
//     let thirdNumberShoePrice = 300 ;

//     let alltotal = 0 ;
// }







     // // // // // /// //// ///// //// ///// ///// /// /// 
    // // // // Answer To The Question number 02 / /// ///
   // // // //        <><<>><><><><><><>  02    / /// ///

// function GameToDiamond(firstFnd , secondFnd , thirdFnd) {


//     let   fristPlayerPoints = 21 ;
//     let   secondPlayerPoints = 31 ;
//     let   thirdPlayerPoints = 43 ;

//     const OneDiamond = firstFnd * fristPlayerPoints ;
//     const TwoDiamond = secondFnd * secondPlayerPoints ;
//     const ThreeDiamond = thirdFnd * thirdPlayerPoints ;
 
//     const AllDiamond = OneDiamond + TwoDiamond +ThreeDiamond ;
    
//     return AllDiamond

    
// } 
// let Arrey = (10 , 2 , 25) ;
// let allAreey = GameToDiamond(Arrey);
// console.log(allAreey,"oj");

// Math hoi nai vaiya //

     // // // // // /// //// ///// //// ///// ///// /// /// 
    // // // // Answer To The Question number 03 / /// ///
   // // // //        <><<>><><><><><><>  03    / /// ///
