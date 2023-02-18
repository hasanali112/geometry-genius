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
   