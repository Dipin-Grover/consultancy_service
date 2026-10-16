document.addEventListener("DOMContentLoaded", () => {
  if (typeof initSearch === "function") initSearch();
});



// function to make left and right button working in testimonial section (home Page)

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".testimonial-track");
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");

    if (track && prevBtn && nextBtn) {
        const scrollAmount = 370;

        nextBtn.addEventListener("click", function () {
            if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
                track.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });
            } else {
                track.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth"
                });
            }
        });

        prevBtn.addEventListener("click", function () {
            if (track.scrollLeft <= 10) {
                track.scrollTo({
                    left: track.scrollWidth,
                    behavior: "smooth"
                });
            } else {
                track.scrollBy({
                    left: -scrollAmount,
                    behavior: "smooth"
                });
            }
        });
    }
});