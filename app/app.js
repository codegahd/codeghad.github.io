const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav-ul');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
    line1.classList.toggle('tr-line-1');
    line2.classList.toggle('tr-line-2');
    line3.classList.toggle('tr-line-3');

})

const faqcontainer_itemheader = document.querySelectorAll(
  ".faqcontainer_item-header"
);
faqcontainer_itemheader.forEach((headerElement) => {
  headerElement.addEventListener("click", () => {
    const activeHeader = document.querySelector(
      ".faqcontainer_item-header.active"
    );

    if (activeHeader && activeHeader !== headerElement) {
      activeHeader.classList.toggle("active");
      activeHeader.nextElementSibling.style.maxHeight = 0;
    }
    headerElement.classList.toggle("active");

    const faq_itembody = headerElement.nextElementSibling;

    if (headerElement.classList.contains("active")) {
      faq_itembody.style.maxHeight = faq_itembody.scrollHeight + "px";
    } else {
      faq_itembody.style.maxHeight = 0;
    }
  });
});
