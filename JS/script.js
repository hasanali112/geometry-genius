

// for triangel
document.getElementById("triangle-calculate-btn").addEventListener("click", function(){
    
    const triAreaTotal= getArea("triangle-base-value", "triangle-height-value")
    //  show the value in area calculation
    displayData("Triangle", triAreaTotal);
})



// for rectanglur
document.getElementById("rectanglur-calculate-btn").addEventListener("click", function(){

    const  areaCalculation= getAreaValues("rectanglur-base-value", "rectanglur-height-value")
    //  show the value in area calculation
    displayData("Rectangle", areaCalculation);


})

// for parallelogram
document.getElementById("parallelogram-calculate-btn").addEventListener("click", function(){

    const  areaCalculation= getAreaValues("parallelogram-base-value", "parallelogram-height-value")
    //  show the value in area calculation
    displayData("Parallelogram", areaCalculation);

})

// for rhombus
document.getElementById("rhombus-calculate-btn").addEventListener("click", function(){

    const  areaCalculation= getArea("rhombus-base-value", "rhombus-height-value")
    //  show the value in area calculation
    displayData("Rhombus", areaCalculation);
})


// for pentagon
document.getElementById("pentagon-calculate-btn").addEventListener("click", function(){

    const  areaCalculation= getArea("pentagon-base-value", "pentagon-height-value")
    //  show the value in area calculation
    displayData("Pentagon", areaCalculation);
})


// for ellipse
document.getElementById("ellipse-calculate-btn").addEventListener("click", function(){

   // for base value
 const baseValue= document.getElementById("ellipse-base-value");
 const baseValueString= baseValue.value;
 const baseValueNumber= parseFloat(baseValueString);
 baseValue.value="";

 // for height value
 const heightVlue= document.getElementById("ellipse-height-value");
 const heightVlueString= heightVlue.value;
 const heightVlueNumber= parseFloat(heightVlueString);
 heightVlue.value= "";
 
 // base and height multipication
 const areaCalTotalString= (3.14 * baseValueNumber * heightVlueNumber).toFixed(2);
 const areaCalTotal= parseFloat(areaCalTotalString);

 displayData("Ellipse", areaCalTotal);

})


    