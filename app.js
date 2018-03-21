(function() {
  //get random number
  const container = document.querySelector("container");
  let random = Math.floor(Math.random() * 1000 + 500);
  console.log(random);

  // loop random number
  for (let i = 0; i < random; i++) {
    let color = Math.floor(Math.random() * 3 + 0);

    if (color % 3 === 0) {
      let x_pos = Math.floor(Math.random() * 920 + 1);
      let y_pos = Math.floor(Math.random() * 920 + 1);
      let newDiv = document.createElement("div");
      newDiv.className = "block";
      newDiv.style.backgroundColor = "#fb2e01";
      newDiv.style.position = "absolute";
      newDiv.style.left = x_pos + "px";
      newDiv.style.top = y_pos + "px";
      document.getElementById("container").appendChild(newDiv);
    }
    if (color % 7 === 0) {
      let x_pos = Math.floor(Math.random() * 920 + 1);
      let y_pos = Math.floor(Math.random() * 920 + 1);
      let newDiv = document.createElement("div");
      newDiv.className = "block";
      newDiv.style.backgroundColor = "#666547";
      newDiv.style.position = "absolute";
      newDiv.style.left = x_pos + "px";
      newDiv.style.top = y_pos + "px";
      document.getElementById("container").appendChild(newDiv);
    } else {
      let x_pos = Math.floor(Math.random() * 920 + 1);
      let y_pos = Math.floor(Math.random() * 920 + 1);
      let newDiv = document.createElement("div");
      newDiv.className = "block";
      newDiv.style.position = "absolute";
      newDiv.style.left = x_pos + "px";
      newDiv.style.top = y_pos + "px";
      document.getElementById("container").appendChild(newDiv);
    }

    //set position of div
  }
})();
