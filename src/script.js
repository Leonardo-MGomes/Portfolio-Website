async function populateSidebar() {
    const sections = document.querySelectorAll("main section");
    const sidebarMenu = document.querySelector(".sidebar menu");

    for (const i in sections) {
        const firstSectionHeading = sections[i].querySelector("h1, h2, h3, h4, h5, h6")

        const aItem = document.createElement("a")
        aItem.classList.add("button")
        aItem.href = "#" + sections[i].id
        aItem.textContent = firstSectionHeading.textContent

        const listItem = document.createElement("li")
        listItem.appendChild(aItem)

        sidebarMenu.appendChild(listItem)
    }
}

addEventListener("DOMContentLoaded", () => {
    populateSidebar().then();
});

