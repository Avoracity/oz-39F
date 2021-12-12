


function readKeyup(){
   $('#search-input').on('keyup', function(){
      var value = $(this).val()
      console.log('Value: ', value)
      var data = searchTable(value, ozArray)
      buildTable(data)
   })

}  
readKeyup();

function modifyCtrlF(){
  $(window).keydown(function(e){
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 70) {
        e.preventDefault();

    }
  });
}
modifyCtrlF();

buildTable(ozArray)

function searchTable(value, data){
   var filteredData = []
   for (var i = 0; i < data.length; i++){
      value = value.toLowerCase()
      var question =  data[i].question.toLowerCase()
      if (question.includes (value)){
         filteredData.push(data[i])
      }
   }
   return filteredData
}


   buildTable(ozArray)

   function buildTable(data){
      var table = document.getElementById('myTable')
      table.innerHTML = ''
      for (var i = 0; i < data.length; i++){
         var row = `<tr>
                     <td>${data[i].question}</td>
                     <td>${data[i].answer}</td>
               </tr>`
         table.innerHTML += row


      }
   }

