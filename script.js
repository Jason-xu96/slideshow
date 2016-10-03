var picIndex = 1;

display(picIndex);

function changeDisplay(n)
{
  picIndex += n;
  display(picIndex);
}

function display(currIndex)
{
  var i;
  var allPics = document.getElementsByClassName("myPics");
  var allTexts = document.getElementsByClassName("text");

  if(currIndex > allPics.length) {picIndex = 1;}
  if(currIndex < 1){picIndex = allPics.length;}

  for(i=0;i<allPics.length;i++)
  {
    allPics[i].style.display = "none";
    allTexts[i].style.display= "none";
  }

  allPics[picIndex-1].style.display = "block";
  allTexts[picIndex-1].style.display = "block";
}
