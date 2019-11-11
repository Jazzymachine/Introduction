function greeting() {
  var d = new Date();
  var time = d.getHours();

  if (time < 12) {
    return "<b>Good morning!</b>";
  }
  else if (time > 12 && time < 18) {
    return "<b>Good afternoon!</b>";
  }
  else if (time > 18 && time < 24) {
    return "<b>Good evening!</b>";
  }    
}


document.write('<h1>' + greeting() + '</h1>')



