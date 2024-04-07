document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data from localStorage or set default if not present
    let pageData = JSON.parse(localStorage.getItem("pageOneData")) || {};

    // Populate header
    document.getElementById("mainheader").textContent = pageData.pageTitle || "";
    document.getElementById("logo").src = pageData.header.image || "";

    // Populate content sections
    let content = document.getElementById("content");
    pageData.sections.forEach(section => {
        let sectionDiv = document.createElement("div");
        sectionDiv.classList.add("subheading");
        sectionDiv.innerHTML = `<p>${section.title}</p>`;

        let sectionContent = document.createElement("div");
        sectionContent.classList.add("subcontent");
        let contentHtml = `<div class="subcontent-1">${section.content}</div>`;
        if (section.image) {
            contentHtml += `<div class="subpic"><img src="${section.image}"></div>`;
        }
        if (section.subItems && section.subItems.length > 0) {
            contentHtml += "<ul>";
            section.subItems.forEach(item => {
                contentHtml += `<li>${item}</li>`;
            });
            contentHtml += "</ul>";
        }
        sectionContent.innerHTML = contentHtml;

        content.appendChild(sectionDiv);
        content.appendChild(sectionContent);
    });

    // Populate footer
    let footerData = pageData.footer;
    document.getElementById("footerLogo").src = footerData.logo || "";
    document.getElementById("tagline").textContent = footerData.tagline || "";
    document.getElementById("contactInfo").textContent = `Email: ${footerData.contact.email} | Phone: ${footerData.contact.phone} | Address: ${footerData.contact.address}`;

    let footerLinks = document.getElementById("footerLinks");
    footerData.links.forEach(link => {
        let anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.label;
        footerLinks.appendChild(anchor);
    });
});
