function greeting() {
  var d = new Date();
  var time = d.getHours();

  if (time < 12) {
    return "<b>Good morning!</b>";
  }
  if (time > 12) {
    return "<b>Good afternoon!</b>";
  }  
}


document.write('<h1>' + greeting() + '</h1>')

