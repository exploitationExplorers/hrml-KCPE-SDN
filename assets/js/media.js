document.addEventListener("DOMContentLoaded", function () {
  const ITEMS_PER_PAGE = 12;
  const items = document.querySelectorAll(".press-item");
  const paginationContainer = document.querySelector(".press-pagination");
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  let currentPage = 1;

  function showPage(page) {
    currentPage = page;
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    items.forEach(function (item, index) {
      item.style.display = index >= start && index < end ? "" : "none";
    });

    renderPagination();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderPagination() {
    if (totalPages <= 1) {
      paginationContainer.style.display = "none";
      return;
    }

    paginationContainer.innerHTML = "";

    for (var i = 1; i <= totalPages; i++) {
      var btn = document.createElement("button");
      btn.className =
        "press-pagination__item" +
        (i === currentPage ? " press-pagination__item--active" : "");
      btn.textContent = i;
      btn.setAttribute("data-page", i);
      btn.addEventListener("click", function () {
        showPage(parseInt(this.getAttribute("data-page")));
      });
      paginationContainer.appendChild(btn);
    }
  }

  showPage(1);
});
