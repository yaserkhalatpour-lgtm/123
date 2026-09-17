/* =========================================================
   فایل اصلی JavaScript سایت آموزش ریاضی
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("سایت آموزش ریاضی با موفقیت بارگذاری شد.");

    /* =====================================================
       انیمیشن ورود کارت‌ها
    ===================================================== */

    const cards = document.querySelectorAll(
        ".grade-card, .feature-card, .step"
    );

    cards.forEach(function (card, index) {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(function () {

            card.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, 100 + index * 80);

    });


    /* =====================================================
       تشخیص صفحه فعلی و فعال کردن لینک منو
    ===================================================== */

    const currentPage =
        window.location.pathname.split("/").pop();

    const navLinks =
        document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });


    /* =====================================================
       دکمه بازگشت به بالای صفحه
    ===================================================== */

    const backToTop =
        document.createElement("button");

    backToTop.innerHTML = "↑";

    backToTop.setAttribute(
        "aria-label",
        "بازگشت به بالای صفحه"
    );

    backToTop.id = "backToTop";

    document.body.appendChild(backToTop);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


});
