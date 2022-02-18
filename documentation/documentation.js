const files = {
    "alert": "../components/alert/alert.html"
}

/* function renderComponent(component) {

     const data = `components/${component}/${component}.html`;
     document.getElementById("component_content").innerHTML = `<object type="text/html" data=${data} ></object>`;
}
*/

async function renderComponentAsync(component) {
    if (!component) return
    const data = await fetch(files[component]);
    const text = await data.text()
    document.getElementById("component_content").innerHTML = text;
}


let initial = 'alert';
const sidebar = document.getElementById("sidebar__list")
sidebar && sidebar.addEventListener('click', function(e) {
    renderComponentAsync(e.target.dataset.component)
})

renderComponentAsync(initial);