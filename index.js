// fetch('index.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);

//     const title = data.header.title
//     const titleCard = `       
//                     <h1 id="mainheader"> 
//                         ${title}
//                     </h1> `
//     document.querySelector(".intro-index").insertAdjacentHTML("afterbegin", titleCard)      
    
//     console.log('hi')
//   })
//   .catch(error => {
//     console.error('Error fetching JSON:', error);
//   });

fetch('index.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const title = data.header.title;
    const titleCard = `<h1 id="mainheader">${title}</h1>`;
    document.querySelector(".intro-index").insertAdjacentHTML("afterbegin", titleCard);

    const links = data.footer.links;
    const linkContainer = document.querySelector('.link-overlay');
    links.forEach(link => {
      const anchor = `<a href="${link.url}">${link.label}</a>`;
      linkContainer.insertAdjacentHTML('beforeend', anchor);
    });

    const footer = data.footer;
    const footerContent = `
        <div class="footer-content">
            <div class="footer-left">
                <img src="${footer.logo}">
                <h2>${footer.tagline}</h2>
                <p>Discover Sri Lanka's enchanting landscapes and wildlife, where nature's wonders unfold—a dream come true for enthusiasts.</p>
            </div>
            <div class="footer-right">
                <p>Links</p>
                <div class="footer-link">
                    ${footer.links.map(link => `<a href="${link.url}">${link.label}</a>`).join('')}
                </div>
                <div class="contact-info">
                    <p>Ways to Contact us</p>
                    <p>Email: ${footer.contact.email}</p>
                    <p>Phone: ${footer.contact.phone}</p>
                    <p>Address: ${footer.contact.address}</p>
                </div>
            </div>
        </div>
    `;
    document.querySelector('footer').innerHTML = footerContent;

    const sections = data.sections;
    sections.forEach(section => {
      const subcontent = document.createElement('div');
      subcontent.classList.add('subcontent');
      const contentHTML = `
          <div class="subcontent-1">
              ${section.content}
              ${section.subItems ? `<ul>${section.subItems.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
          </div>
          <div class="subpic">
              <img src="${section.image}">
          </div>
      `;
      subcontent.innerHTML = contentHTML;

      document.body.insertBefore(subcontent, document.querySelector('footer'));
    });

    console.log('hi');
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });
