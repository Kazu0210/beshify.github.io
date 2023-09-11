function beshify(){
    var regex = /\s/g;
    var paragraph = document.getElementById('text');    
    var result = '';
    var inputfield = document.getElementById('input');
    var inputvalue = inputfield.value;
    var replacedText = inputvalue.replace(regex, '🤸');
    paragraph.innerHTML = replacedText;
    return replacedText;
}