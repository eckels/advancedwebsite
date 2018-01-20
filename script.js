function getText() {
  var bobtext = document.getElementById('mytext').value;
  console.log(bobtext);
  var i = 0;
  while (i < 7) {
    var temp = bobtext.charAt(i);
    i++;
    var myid = 'p' + i;
    document.getElementById(myid).innerHTML = temp;
  }
}
