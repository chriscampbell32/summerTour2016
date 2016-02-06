$(document).ready(function () {

//lines 3-6 removes the checkbox
  $(document).on("change", "input:checkbox", function () {
    $(this).parent().parent().css("text-decoration", "line-through");
    $(this).remove();
  });

//lines 8-10 remove row when clicking delete button
    $(document).on("click", ".btn-default", function () {
      $(this).parent().fadeOut('slow', function() { 
      $(this).parent().remove();
  });
  });

$(document).on("click", ".btn-primary", function () {
    var addRow = $("input:text").val();
    
   var newRow = "<tr class= 'table'>\ <td> <span class='tableEntry'>" + addRow + "</span>\ </td>\ <td class='col-md-4'> <button class='btn btn-default'>Delete</button>\ <input type='checkbox' />\ </td>\ </tr>\ ";


    $("tbody").append(newRow);
  });


});