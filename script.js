var slideIndex = 1;

display(slideIndex);

function changeDisplay(n)
{
  slideIndex += n;
  display(slideIndex);
}

function display(currIndex)
{
  var i;
  var allSlides = document.getElementsByClassName("slide");

  if(currIndex > allSlides.length) {slideIndex = 1;}
  if(currIndex < 1){slideIndex = allSlides.length;}

  for(i=0;i<allSlides.length;i++)
  {
    allSlides[i].style.display = "none";

  }

  allSlides[slideIndex-1].style.display = "block";

}
