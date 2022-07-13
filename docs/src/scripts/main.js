{

   function read_keyup(){
      $('#search-input').on('keyup', function(){
         var value = $(this).val()
         console.log('Value: ', value)
         var data = table_search(value, ozArray)
         build_table(data)
      })

   }  
   read_keyup();

   function modify_ctrl_f(){
   $(window).keydown(function(e){
      if ((e.ctrlKey || e.metaKey) && e.keyCode === 70) {
         e.preventDefault();
            $('#search-input').focus(); // focuses on the input field
      }
   });
   }
   modify_ctrl_f();

   build_table(ozArray)

   function table_search(value, data){
      var filteredData = []
      for (var i = 0; i < data.length; i++){
         value = value.toLowerCase()
         var question =  data[i].question.toLowerCase()
         var answer = data[i].answer.toLowerCase()
         if (question.includes (value) || answer.includes(value) ){
            filteredData.push(data[i])
         }
      }
      return filteredData;
   }


   build_table(ozArray);

   function build_table(data){
      var table = document.getElementById('myTable')
      table.innerHTML = '';
      var question = ""; 
      var answer = "";
      for (var i = 0; i < data.length; i++){
         question = data[i].question;
         answer = data[i].answer;

         var answer_block = multi_answers(answer)

         var row = `<tr>
                     <td>${question}</td>
                     <td>${answer_block}</td> 
               </tr>`
         table.innerHTML += row


      }

      function multi_answers(answer) {
         if (answer.includes(',')) {
            var answer = answer.split(',')
            var answer = answer.join('<br>')
         }
         return answer
      }
   }  





}
