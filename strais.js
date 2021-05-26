var lines = 5;
// 1) Creating the line from top to bottom
for(var i =0; i < lines; i++){
  // 2) // when i = o, I want 1 #
  //i = 1, 2 #
  //i = 2, 3 #..
  // i want to repeat # i+1 times
  for(var j = 0; j < i+1; j++){
    document.write("#");
  }
  document.write("<br/>");
}

// #
// ##
// ###
// ####
// #####
for(var i =0; i < lines; i++){
  // when i = 0, i want 4 #, lines -i-1 (5-0-1)
  // when i = 1, i want 3 lines
  // when i = 2, i want 2 lines
  // when i = 3, i want 1 lines
  // when i = 4, i want 0 lines
  for(var j = 0; j < lines-i-1; j++){
    document.write("#");
  }
  document.write("<br/>");
}

// ####
// ###
// ##
// #
