// Creating an array of five places 
  let places: string[] = ["Saudi arab", "China", "India", "Oman","America"];

// Creating an array of five places 
  console.log("Original Order:", places);
  
  
  // Printing Alphabatical order without modifying the actual list
  console.log("Alphabetical Order:");
  console.log([...places].sort());
  
 //Showing the original array order
  console.log("Array Still in Original Order:", places);
 

//Reversing the array order list without changing the order of the original list
  console.log("Reverse Alphabetical Order:");
  console.log([...places].sort().reverse());
  

 // Original array order list
  console.log("Array Still in Original Order:", places);
  
  // Reversing the order of the list
  places.reverse();
  
// Showing that its order has been changed
  console.log("Reversed Order:", places);
 

  // Reverse the order of the list again to bring it back to its original order
  places.reverse();
  // Printing the list to show it’s back to its original order.
  console.log("Back to Original Order:", places);

  