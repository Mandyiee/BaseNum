//document.getElementById('container').style.visibility = 'hidden'



document.getElementById('input').addEventListener('input', function(e) {

  let decenary = Number(e.target.value);

  document.getElementById('output1').textContent = decenary.toString(2)
  document.getElementById('output2').textContent = decenary.toString(8)
  document.getElementById('output3').textContent = decenary.toString(16)
})

let form = document.querySelector('.optionForm')
form.addEventListener('change', () => {
  let inp = document.getElementById('input')
  inp.value = null
  let data = new FormData(form)
  let output = " "
  for (const entry of data) { output = entry[1] };

  switch (output) {
    case 'binary':
      document.getElementById('output1').textContent = null
        document.getElementById('output2').textContent = null
        document.getElementById('output3').textContent = null
      document.getElementById('input').type= "number";
      document.getElementById('output1-text').textContent = "Decimal:"
      document.getElementById('output2-text').textContent = "Octal:";
      document.getElementById('output3-text').textContent = "Hexadecimal:";
      document.getElementById('input').addEventListener('input', function(e) {
        let decenary = Number(e.target.value);
        let decimal = parseInt(decenary, 2)
        document.getElementById('output1').textContent = decimal
        document.getElementById('output2').textContent = decimal.toString(8)
        document.getElementById('output3').textContent = decimal.toString(16)
      })
      break;
    case 'octal':
      document.getElementById('input').type= "number";
      document.getElementById('output1').textContent = null
        document.getElementById('output2').textContent = null
        document.getElementById('output3').textContent = null
      document.getElementById('output2-text').textContent = "Decimal:"
      document.getElementById('output3-text').textContent = "Hexadecimal:";
      document.getElementById('output1-text').textContent = "Binary:";
      document.getElementById('input').addEventListener('input', function(e) {
        let decenary = Number(e.target.value);
        let decimal = parseInt(decenary, 8)
        document.getElementById('output1').textContent = decimal.toString(2)
        document.getElementById('output2').textContent = decimal
        document.getElementById('output3').textContent = decimal.toString(16)
      })
      break;
    case 'hexadecimal':
      document.getElementById('input').type= "text";
      document.getElementById('output3-text').textContent = "Decimal:";
      document.getElementById('output2-text').textContent = "Octal:";
      document.getElementById('output1-text').textContent = "Binary:";
      document.getElementById('output1').textContent = null
        document.getElementById('output2').textContent = null
        document.getElementById('output3').textContent = null
      document.getElementById('input').addEventListener('input', function(e) {
        let decenary = e.target.value;
        let decimal = parseInt(decenary, 16)
        document.getElementById('output1').textContent = decimal.toString(2)
        document.getElementById('output2').textContent = decimal.toString(8)
        document.getElementById('output3').textContent = decimal
      })
      break;

    default:
    document.getElementById('input').type= "number";
    document.getElementById('output1-text').textContent = "Binary:"
      document.getElementById('output2-text').textContent = "Octal:";
      document.getElementById('output3-text').textContent = "Hexadecimal:"
      document.getElementById('output1').textContent = null
        document.getElementById('output2').textContent = null
        document.getElementById('output3').textContent = null
      document.getElementById('input').addEventListener('input', function(e) {
        let decenary = Number(e.target.value);
        document.getElementById('output1').textContent = decenary.toString(2)
        document.getElementById('output2').textContent = decenary.toString(8)
        document.getElementById('output3').textContent = decenary.toString(16)
        
      })
  }
})

function copy(id) {
   var range = document.createRange();
   range.selectNode(document.getElementById(id));
   window.getSelection().removeAllRanges();
   window.getSelection().addRange(range);
   document.execCommand("copy");
   window.getSelection().removeAllRanges();
}

