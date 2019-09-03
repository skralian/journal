import { journalEntry } from './journal';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    var goal = $('#journal').val();
    var output = journalEntry(goal);
    output.forEach(function(element) {
      $('#entry').append("<li>" + element + "</li>");
    });
  });
});
