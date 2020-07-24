const inputs=document.querySelectorAll('.controlledInput input');
const backg=document.querySelector('#box');

function handleUpdate(){
    const deg=this.dataset.sizing||'';
    
    document.documentElement.style.setProperty(`--${this.name}`, this.value+deg)

    const style=getComputedStyle(backg)
    const backgrounnd=style.background.split(" ").slice(4,13).join(" ")
    
    document.getElementById("gradientOutput").innerHTML = `${backgrounnd}`
}

inputs.forEach(input=>input.addEventListener('change', handleUpdate))
inputs.forEach(input=>input.addEventListener('change', handleUpdate))