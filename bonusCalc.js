var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT


function calculateBonusFor( employee ){
  console.log( 'in calculateBonusFor:', employee );
  var bonusPercentage = 0;
  // reviewRating check
  if( employee.reviewRating <= 2 ){
      console.log( 'no bonus' );
  } // end no bonus
  else{
    console.log( 'calculating bonus' );
    if( employee.reviewRating == 3 ){
        bonusPercentage = 0.04;
    } // end 3
    else if( employee.reviewRating == 4 ){
        bonusPercentage = 0.06;
    } // end 4
    else if( employee.reviewRating == 5 ){
        bonusPercentage = 0.10;
    } // end 5
    // dino check
    if( employee.employeeNumber.length == 4 ){
      bonusPercentage += 0.05;
    } // end oldie
    // high roller check
    if( employee.annualSalary > 65000 ){
      bonusPercentage -= 0.01;
    } // end richie
    // min/max (0, 13)
    if( bonusPercentage < 0.0 ){
      bonusPercentage = 0.0;
    } // end min
    else if( bonusPercentage > 0.13 ){
      bonusPercentage = 0.13;
    } // end max
  } // end rating > 2
  return {
    name: employee.name,
    bonusPercentage: bonusPercentage/0.01 +'%',
    totalCompensation: Number( bonusPercentage * employee.annualSalary ) + Number( employee.annualSalary ),
    totalBonus: Math.round( bonusPercentage * employee.annualSalary),
  };
} // calculateBonusFor

function calculateAllBonuses(){
  console.log( 'in calculateAllBonuses' );
  $( '#employeesOut' ).empty();
  // loop through employees and calculates their bonuses <- redundant
  for( var i=0; i < employees.length; i++ ){
    var calculatedEmployee = calculateBonusFor( employees[ i ] );
    var stringToAppend = '<li><strong>' + calculatedEmployee.name + ':'
    stringToAppend += ' $' + calculatedEmployee.totalCompensation + '</strong>';
    stringToAppend += ' (' + calculatedEmployee.bonusPercentage + ', ' + calculatedEmployee.totalBonus + ')</li>';
    $( '#employeesOut' ).append( stringToAppend );
  } // end for
} // end calculateAllBonuses

$( document ).ready( function(){
  $( '#calculateButton' ).on( 'click', function(){
    console.log( 'calculatedEmployee on click' );
    calculateAllBonuses();
  }); // end calculatedEmployee on click
}); // end doc ready
