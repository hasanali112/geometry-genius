
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