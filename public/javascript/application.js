$(document).ready(function() {
  // Load Contacts
  $.ajax({
    url: '/contacts',
    methods: 'GET',
    success: function (data) {
      data.forEach(function (d) {
        $('#contacts').append("<p><strong>" + d.name + "</strong>: " + d.email + "</p>");
        d.phones.forEach(function (p) {
          $('#contacts').append("<p>Phone(" + p.label + "): " + p.number + "</p>");
        });
      });
    }
  });
});
