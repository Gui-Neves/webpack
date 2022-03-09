const button = document.createElement('button');
button.innerHTML = "click me";
button.onclick = () => {
  
  import('./image_viewer').then((module) => 
    console.log(module)

  )
};

document.body.appendChild(button);