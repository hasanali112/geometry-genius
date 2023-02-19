

// for triangel
document.getElementById("triangle-calculate-btn").addEventListener("click", function(){
    
    const triAreaTotal= getArea("triangle-base-value", "triangle-height-value")
   
    // validation check
       const validation = triAreaTotal;
       if(validation < 0 || isNaN(validation) === true ||validation == ''){
        alert('Enter valid Number')
        return validation;
       }
    //  show the value in area calculation
    displayData("Triangle", triAreaTotal);
})



// for rectanglur
document.getElementById("rectanglur-calculate-btn").addEventListener("click", function(){

    const  areaCalculation= getAreaValues("rectanglur-base-value", "rectanglur-height-value")
    // validation check
    const validation = areaCalculation;
       if(validation < 0 || isNaN(validation) === true ||validation == ''){
        alert('Enter valid Number')
        return validation;
       }
    //  show the value in area calculation
    displayData("Rectangle", areaCalculation);


})

// for parallelogram
document.getElementById("parallelogram-calculate-btn").addEventListener("click", function(){

    const  areaCalculation= getAreaValues("parallelogram-base-value", "parallelogram-height-value")
    // validation check
       const validation = areaCalculation;
       if(validation < 0 || isNaN(validation) === true ||validation == ''){
        alert('Enter valid Number')
        return validation;
       }
    //  show the value in area calculation
    displayData("Parallelogram", areaCalculation);

})

// for rhombus
document.getElementById("rhombus-calculate-btn").addEventListener("click", function(){

    const  areaCalculation= getArea("rhombus-base-value", "rhombus-height-value")
    // validation check
       const validation = areaCalculation;
       if(validation < 0 || isNaN(validation) === true ||validation == ''){
        alert('Enter valid Number')
        return validation;
       }
    //  show the value in area calculation
    displayData("Rhombus", areaCalculation);
})


// for pentagon
document.getElementById("pentagon-calculate-btn").addEventListener("click", function(){

    const  areaCalculation= getArea("pentagon-base-value", "pentagon-height-value")
    // validation check
    const validation = areaCalculation;
    if(validation < 0 || isNaN(validation) === true ||validation == ''){
     alert('Enter valid Number')
     return validation;
    }
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


document.getElementById("blog-btn").addEventListener("click", function(){
  window.location.href="question.html"
})


// Changing Random Color 
const triangleField = document.getElementById("triangle-field");
const rectangleField = document.getElementById("rectangle-field");
const parallelogramField = document.getElementById("parallelogram-field");
const rhombusField = document.getElementById("rhombus-field");
const pentagonField = document.getElementById("pentagon-field");
const ellipseField = document.getElementById("ellipse-field");

function randomcolor() {
    return Math.floor(Math.random() * 255);
}
triangleField .addEventListener('mouseenter', () => {
    triangleField .style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})
rectangleField .addEventListener('mouseenter', () => {
    rectangleField .style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})
parallelogramField.addEventListener('mouseenter', () => {
    parallelogramField.style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})
rhombusField.addEventListener('mouseenter', () => {
    rhombusField.style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})
pentagonField.addEventListener('mouseenter', () => {
    pentagonField.style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})
ellipseField.addEventListener('mouseenter', () => {
    ellipseField.style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})
