const clock = document.getElementsByClassName("clock")[0]

setInterval(function () {
  const date = new Date();
  const daytime = date.toLocaleTimeString();
  console.log(daytime)
  clock.innerHTML = `${daytime}`;
}, 1000)