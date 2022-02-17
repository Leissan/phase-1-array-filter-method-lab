// Code your solution here


function findMatching(drivers, name){
  return drivers.filter(driverName=>driverName==name|| driverName==name.toLowerCase());
  
}
function fuzzyMatch(drivers, name){
    return drivers.filter(driverName=>driverName[0,1]===name[0,1]);
    
  }
  function matchName(drivers, name){
    return drivers.filter(function(driver){
      return driver.name===name
    })
  }