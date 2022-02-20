const files = {
    "cards": "../components/cards/cards.html",
    "alert": "../components/alert/alert.html",
    "button": "../components/button/button.html",
    "avatar": "../components/avatar/avatar.html",
    "image": "../components/image/image.html",
    "button": "../components/button/button.html",
    "form": "../components/form/form.html",
    "rating": "../components/rating/rating.html",
    "lists": "../components/lists/lists.html",
    "toast": "../components/toast/toast.html"
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


let initial = 'toast';
const sidebar = document.getElementById("sidebar__list")
sidebar && sidebar.addEventListener('click', function(e) {
    renderComponentAsync(e.target.dataset.component)
})

renderComponentAsync(initial);