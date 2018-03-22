//clears the container for new art
function clearContainer() {
  let parent = document.getElementsByClassName("container")[0];
  do {
    parent.removeChild(parent.firstChild);
  } while (parent.lastChild);
  createArt();
}

//Creats new random art
function createArt() {
  //grab the container
  const container = document.querySelector("container");
  //create a random number
  let random = Math.floor(Math.random() * 1000 + 500);

  // loop random number inorder to create the art blocks
  for (let i = 0; i < random; i++) {
    let color = Math.floor(Math.random() * 3 + 0);
    //logic to desided colors and placments
    if (color % 3 === 0) {
      let x_pos = Math.floor(Math.random() * 920 + 1);
      let y_pos = Math.floor(Math.random() * 920 + 1);
      let newDiv = document.createElement("div");
      newDiv.className = "block";
      newDiv.style.backgroundColor = "#A0522D";
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
      newDiv.style.backgroundColor = "green";
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
  }
}
//onclick to make new art
document.querySelector("button").addEventListener("click", function() {
  clearContainer();
});

//runs on load
clearContainer();
