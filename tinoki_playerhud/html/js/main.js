window.addEventListener("message", function (event) {
  switch (event.data.action) {
    case "hud":
      Progress(event.data.health, ".health");
      Progress(event.data.armor, ".armor");
      Progress(event.data.thirst, ".thirst");
      Progress(event.data.hunger, ".hunger");
      break;
    case "showui":
      $("body").fadeIn();
      break;
    case "hideui":
      $("body").fadeOut();
      break;
  }
});

function Progress(percent, element) {
  var circle = document.querySelector(element);
  var radius = circle.r.baseVal.value;
  var circumference = radius * 2 * Math.PI;
  var html = $(element).parent().parent().find("span");

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const offset = circumference - ((-percent * 100) / 100 / 100) * circumference;
  circle.style.strokeDashoffset = -offset;

  html.text(Math.round(percent));
}