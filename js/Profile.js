$(document).ready(function() {
  $('.email-floaty').on('click', function() { selectEmail() });
  $('.linkedin-floaty').on('click', function() { selectLinkedIn(); });
  $('.github-floaty').on('click', function() { selectGithub(); });
  $('.projects-floaty').on('click', function() { selectProjects(); });
  $('.uni-floaty').on('click', function() { selectUni(); });
  $('.aboutme-floaty').on('click', function() { selectAboutme(); }); 

  selectAboutme();
});

function resetFloatyColours() {
  $('.email-floaty').css('background-color', '#777');;
  $('.linkedin-floaty').css('background-color', '#777');;
  $('.github-floaty').css('background-color', '#777');;
  $('.projects-floaty').css('background-color', '#777');;
  $('.uni-floaty').css('background-color', '#777');;
  $('.aboutme-floaty').css('background-color', '#777');;
}

function selectEmail() {
  resetFloatyColours();
  $('.email-floaty').css('background-color', 'forestgreen');

  showSummaryAt('EmailSummary.html');
}

function selectLinkedIn() {
  resetFloatyColours();
  $('.linkedin-floaty').css('background-color', 'lightcoral');

  showSummaryAt('LinkedInSummary.html');
}

function selectGithub() {
  resetFloatyColours();
  $('.github-floaty').css('background-color', 'chocolate');

  showSummaryAt('GithubSummary.html');
}

function selectProjects() {
  resetFloatyColours();
  $('.projects-floaty').css('background-color', 'steelblue');

  showSummaryAt('ProjectsSummary.html');
}

function selectUni() {
  resetFloatyColours();
  $('.uni-floaty').css('background-color', 'brown');

  showSummaryAt('UniSummary.html');
}

function selectAboutme() {
  resetFloatyColours();
  $('.aboutme-floaty').css('background-color', 'darkcyan');

  showSummaryAt('AboutmeSummary.html');
}

function showSummaryAt(summaryLocation) {
  $.ajax({'url': summaryLocation, 'type':'GET', 'success': fillSummary});
}

function fillSummary(html) {
  $('.dynamic-text-field').html(html);
}
