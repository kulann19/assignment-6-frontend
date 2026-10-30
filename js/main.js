$(document).ready(function () {
    console.log("jQuery is ready!");

    // Task 1: selectors and CSS
    $("#text-btn").on("click", function () {
        $("#selector-target").text("The paragraph was changed with .text().");
        $("#selector-output").text("Selected by ID: #selector-target");
    });
    $("#html-btn").on("click", function () {
        $(".html-target").html("This text contains <strong>HTML</strong> added with .html().");
        $("#selector-output").text("Selected by class: .html-target");
    });
    $("#css-btn").on("click", function () {
        $("p").filter(".tag-target").css({ "color": "#397b69", "font-weight": "700" });
        $("#selector-output").text("Selected by tag (p) and updated with .css().");
    });

    // Task 2: visibility methods
    $("#hide-btn").on("click", function () { $("#visibility-text").hide(250); });
    $("#show-btn").on("click", function () { $("#visibility-text").show(250); });
    $("#toggle-btn").on("click", function () { $("#visibility-text").toggle(250); });

    // Task 3: fade methods
    $("#fade-in-btn").on("click", function () { $("#fade-image").fadeIn(450); });
    $("#fade-out-btn").on("click", function () { $("#fade-image").fadeOut(450); });
    $("#fade-toggle-btn").on("click", function () { $("#fade-image").fadeToggle(450); });

    // Task 4: slide methods
    $("#slide-up-btn").on("click", function () { $("#slide-panel").slideUp(350); });
    $("#slide-down-btn").on("click", function () { $("#slide-panel").slideDown(350); });
    $("#slide-toggle-btn").on("click", function () { $("#slide-panel").slideToggle(350); });

    // Task 5: append, prepend and remove
    let itemNumber = 3;
    $("#append-btn").on("click", function () {
        itemNumber += 1;
        $("#dynamic-list").append("<li>New item " + itemNumber + "</li>");
    });
    $("#prepend-btn").on("click", function () {
        itemNumber += 1;
        $("#dynamic-list").prepend("<li>First item " + itemNumber + "</li>");
    });
    $("#remove-btn").on("click", function () {
        const $lastItem = $("#dynamic-list li:last");
        if ($lastItem.length) {
            $lastItem.remove();
        }
    });

    // Task 6: change attributes
    const imageOptions = ["../assets/image-one.svg", "../assets/image-two.svg", "../assets/image-three.svg"];
    let imageIndex = 0;
    $("#change-image-btn").on("click", function () {
        imageIndex = (imageIndex + 1) % imageOptions.length;
        $("#attribute-image").attr("src", imageOptions[imageIndex]);
    });
    const resourceOptions = ["https://api.jquery.com/", "https://www.w3schools.com/jquery/"];
    let resourceIndex = 0;
    $("#change-link-btn").on("click", function () {
        resourceIndex = (resourceIndex + 1) % resourceOptions.length;
        $("#dynamic-link").attr("href", resourceOptions[resourceIndex]);
        $("#link-output").text("The link now points to " + resourceOptions[resourceIndex]);
    });

    // Task 7: live form preview with val() and text()
    $("#name-input, #email-input").on("input", function () {
        $("#name-preview").text($("#name-input").val() || "Not entered yet");
        $("#email-preview").text($("#email-input").val() || "Not entered yet");
    });
    $("#live-form").on("submit", function (event) { event.preventDefault(); });

    // Task 8: one basic animation
    $("#basic-animate-btn").on("click", function () {
        $("#basic-box").stop(true).animate({ width: "120px", height: "120px", left: "125px", top: "22px" }, 650);
    });
    $("#basic-reset-btn").on("click", function () {
        $("#basic-box").stop(true).animate({ width: "70px", height: "70px", left: "0px", top: "0px" }, 350);
    });

    // Task 9: sequential animations use callbacks/queue order
    $("#sequence-btn").on("click", function () {
        const $box = $("#sequence-box");
        $box.stop(true).css({ width: "76px", height: "76px", left: "0px", top: "0px" });
        $box.animate({ left: "210px" }, 450)
            .animate({ top: "125px" }, 450)
            .animate({ width: "42px", height: "42px" }, 350)
            .animate({ left: "0px", top: "0px", width: "76px", height: "76px" }, 500);
    });
    $("#sequence-reset-btn").on("click", function () {
        $("#sequence-box").stop(true).css({ left: 0, top: 0, width: "76px", height: "76px" });
    });

    // Task 10: combined animation in one animate() call
    $("#combined-btn").on("click", function () {
        $("#combined-box").stop(true).animate({ left: "180px", width: "112px", height: "112px", opacity: 0.38 }, 700);
    });
    $("#combined-reset-btn").on("click", function () {
        $("#combined-box").stop(true).animate({ left: "0px", width: "70px", height: "70px", opacity: 1 }, 350);
    });

    // Task 11: image gallery with fade-in and an enlarged lightbox
    $(".gallery-card").hide().each(function (index) {
        $(this).delay(index * 100).fadeIn(350);
    });
    $(".gallery-card").on("click", function () {
        const imageSource = $(this).find("img").attr("src");
        const imageAlt = $(this).find("img").attr("alt");
        $("#lightbox-image").attr({ "src": imageSource, "alt": imageAlt });
        $("#lightbox").addClass("open").hide().fadeIn(180);
    });
    function closeLightbox() {
        $("#lightbox").fadeOut(180, function () { $(this).removeClass("open"); });
    }
    $("#lightbox-close").on("click", closeLightbox);
    $("#lightbox").on("click", function (event) {
        if (event.target === this) closeLightbox();
    });
    $(document).on("keydown", function (event) {
        if (event.key === "Escape") closeLightbox();
    });
});
