async function populateSidebar() {
    const sections = document.querySelectorAll("main section");
    const sidebarMenu = document.querySelector(".sidebar menu");

    for (let i in sections) {
        console.log(sections[i].querySelector("h1, h2, h3, h4, h5, h6"))
        let firstSectionHeading = sections[i].querySelector("h1, h2, h3, h4, h5, h6")

        let aItem = document.createElement("a")
        aItem.classList.add("button")
        aItem.href = "#" + sections[i].id
        aItem.textContent = firstSectionHeading.textContent

        let listItem = document.createElement("li")
        listItem.appendChild(aItem)

        sidebarMenu.appendChild(listItem)
    }
}

addEventListener("DOMContentLoaded", () => {
    populateSidebar().then();
});

