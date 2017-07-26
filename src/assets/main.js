$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/2334931.json',
    dataType: 'jsonp',
    success: function(response) {
      // Had to make a slight alteration due to no completed courses.
      courseData = response.courses.in_progress;
      makeCourses(courseData);
      // console.log('courseData', courseData);
    }
  })

  function makeCourses(courses) {
    var $badges = $('#badges');

    courses.forEach(function(course) {
      var $course = $('<div />', {
        class: 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        href: course.url,
        target: '_blank',
        class: 'btn btn-primary',
        text: 'See Course'
      }).appendTo($course);

    })
  }
});
