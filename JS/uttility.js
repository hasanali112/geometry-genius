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
    if (Number.isNaN(baseValueId, heightVlueId)) {
        alert('Value is not a number');
       ;
    
    } 
    
    // base and height multipication
    const areaCalTotalString= (0.5 * baseValueNumber * heightVlueNumber).toFixed(2);
     const areaCalTotal = parseFloat(areaCalTotalString);
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
    const areaCalculationString= (baseValueNumber * heightVlueNumber).toFixed(2);
    const areaCalculation= parseFloat(areaCalculationString);
    return areaCalculation;
   }
   

let countNo = 0;
function displayData(nameOfGeometry, calculateValue){
    countNo += 1;
    const parent = document.getElementById('area-calculation');
const tr = document.createElement('tr');
tr.innerHTML = `
<td>${countNo}</td>
<td>${nameOfGeometry}</td>
<td>${calculateValue} cm<sup>2</sup></td>
<td>
<button> Covert to m<sup>2</sup></button> 
</td>
`;

parent.appendChild(tr);
}

