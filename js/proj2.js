
	function setfocus() {
    }

    function clearBox() {
     document.getElementById("input").value = "";
     document.getElementById("output").innerHTML = "";
    }
  
    function mc2c() {
        var ans = " ";
        var mc2c = {'.-': 'A', '-...': 'B', '-.-.': 'C',
        '-..': 'D', '.': 'E', '..-.': 'F',
        '--.': 'G', '....': 'H', '..': 'I',  
        '.---': 'J', '-.-': 'K', '.-..': 'L',
        '--': 'M', '-.': 'N', '---': 'O', 
        '.--.': 'P', '--.-': 'Q', '.-.': 'R',
        '...': 'S', '-': 'T', '..-': 'U', 
        '...-': 'V', '.--': 'W', '-..-': 'X',
        '-.--': 'Y', '--..': 'Z', '-----': '0', 
        '.----': '1', '..---': '2', '...--': '3',
        '....-': '4', '.....': '5', '-....': '6', 
        '--...': '7', '---..': '8', '----.': '9',
        '--..--':',', '.-.-.-':'.', '..--..':'?',
        '-..-.':'/', '-....-':'-', '-.--.':'(',
        '-.--.-':')', '|':' ', ' ':''};
  
  var input = document.getElementById("input").value.toString();
  var ans = input.split('|').map(a => a.split(' ').map(b => mc2c[b]).join('')).join(' ');
  document.getElementById("output").innerHTML = ans;

}



    

    function c2mc() {
        var ans = " ";
        var c2mc = { 'A':'.-', 'B':'-...', 
        'C':'-.-.' , 'D':'-..', 'E':'.', 
        'F':'..-.', 'G':'--.', 'H':'....', 
        'I':'..', 'J':'.---', 'K':'-.-', 
        'L':'.-..', 'M':'--', 'N':'-.', 
        'O':'---', 'P':'.--.', 'Q':'--.-', 
        'R':'.-.', 'S':'...', 'T':'-', 
        'U':'..-', 'V':'...-', 'W':'.--', 
        'X':'-..-', 'Y':'-.--', 'Z':'--..', 
        '1':'.----', '2':'..---', '3':'...--', 
        '4':'....-', '5':'.....', '6':'-....', 
        '7':'--...', '8':'---..', '9':'----.', 
        '0':'-----', ',':'--..--', '.':'.-.-.-', 
        '?':'..--..', '/':'-..-.', '-':'-....-', 
        '(':'-.--.', ')':'-.--.-', ' ':'|'};


  var input = document.getElementById("input").value.toString().toUpperCase();
  var ans = input.split(' ').map(a => a.split('').map(b => c2mc[b]).join(' ')).join('|');
  document.getElementById("output").innerHTML = ans;



  }
  
  

    
