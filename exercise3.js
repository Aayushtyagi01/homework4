function fillrectangle(width,height,str){

  let stringRectangle = '';
  for(let i=1; i<=width; i++){
    for(let j=1; j<= height; j++){
      stringRectangle += str;
    }
    stringRectangle += '\n';
  }return stringRectangle;
  }
  function rectangletostring(width,height,str){
  let stringRectangle = '';
  for(let i=1; i<=height; i++){
    for(let j=1; j<= width; j++){
      stringRectangle += str;
    }
  }
  console.log(rectangletostring(3,4,"*")
  console.log(fillrectangle (3,5,"*")