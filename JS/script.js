
function getArea(baseValueId, heightVlueId){
 // for base value
 const baseValue= document.getElementById(baseValueId);
 const baseValueString= baseValue.value;
 const baseValueNumber= parseFloat(baseValueString);
 baseValue.value="";

 // for height value
 const heightVlue= document.getElementById(heightVlueId);
 const heightVlueString= heightVlue.value;
 const heightVlueNumber= parseFloat(heightVlueString);
 heightVlue.value= "";
 
 // base and height multipication
 const areaCalTotal= 0.5 * baseValueNumber * heightVlueNumber;
 return areaCalTotal;
}


function getAreaValues(valueBaseId, valueHeightId){
 // for base value
 const baseValue= document.getElementById(valueBaseId);
 const baseValueString= baseValue.value;
 const baseValueNumber= parseFloat(baseValueString);
 baseValue.value=""; 

 // for height value
 const heightVlue= document.getElementById(valueHeightId);
 const heightVlueString= heightVlue.value;
 const heightVlueNumber= parseFloat(heightVlueString);
 heightVlue.value= "";

 // base and height multipication
 const areaCalculation= baseValueNumber * heightVlueNumber;
 return areaCalculation;
}



document.getElementById("triangle-calculate-btn").addEventListener("click", function(){
    
    const triAreaTotal= getArea("triangle-base-value", "triangle-height-value")
    //  show the value in area calculation
    const areaCalculation = document.getElementById('area-calculation');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>1.</td>
    <td>Triangle</td>
    <td>${triAreaTotal} Cm<sup>2</sup></td>
    `;
    areaCalculation.appendChild(tr);
})




document.getElementById("rectanglur-calculate-btn").addEventListener("click", function(){

    const  areaCalculation= getAreaValues("rectanglur-base-value", "rectanglur-height-value")
    //  show the value in area calculation
    const showCalculation = document.getElementById('area-calculation');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>2.</td>
    <td>Rectangle</td>
    <td>${areaCalculation} Cm<sup>2</sup></td>
    `;
    showCalculation.appendChild(tr);

})

document.getElementById("parallelogram-calculate-btn").addEventListener("click", function(){

    const  areaCalculation= getAreaValues("parallelogram-base-value", "parallelogram-height-value")
    //  show the value in area calculation
    const showCalculation = document.getElementById('area-calculation');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>3.</td>
    <td>Parallelogram</td>
    <td>${areaCalculation} Cm<sup>2</sup></td>
    `;
    showCalculation.appendChild(tr);

})

document.getElementById("rhombus-calculate-btn").addEventListener("click", function(){

    const  areaCalculation= getArea("rhombus-base-value", "rhombus-height-value")
    //  show the value in area calculation
    const showCalculation = document.getElementById('area-calculation');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>4.</td>
    <td>Rhombus</td>
    <td>${areaCalculation} Cm<sup>2</sup></td>
    `;
    showCalculation.appendChild(tr);
})


document.getElementById("pentagon-calculate-btn").addEventListener("click", function(){

    const  areaCalculation= getArea("pentagon-base-value", "pentagon-height-value")
    //  show the value in area calculation
    const showCalculation = document.getElementById('area-calculation');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>5.</td>
    <td>Pentagon</td>
    <td>${areaCalculation} Cm<sup>2</sup></td>
    `;
    showCalculation.appendChild(tr);
})



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
 const areaCalTotal= 3.14 * baseValueNumber * heightVlueNumber;

 //  show the value in area calculation
 const showCalculation = document.getElementById('area-calculation');
 const tr = document.createElement('tr');
 tr.innerHTML = `
 <td>6.</td>
 <td>Ellipse</td>
 <td>${areaCalTotal} Cm<sup>2</sup></td>
 `;
 showCalculation.appendChild(tr);

})