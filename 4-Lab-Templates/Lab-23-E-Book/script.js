// ============================================================
// Lab 23: E-Book Chapter Navigation
// ============================================================

function showChapter(chapterNumber) {
    // TODO: Hide all chapters first
    // var chapters = document.getElementsByClassName("chapter-content");
    // for (var i = 0; i < chapters.length; i++) {
    //     chapters[i].classList.remove("active");
    // }

    // TODO: Show the selected chapter
    // document.getElementById("chapter-" + chapterNumber).classList.add("active");

    // TODO: Update active state on sidebar links
    // var links = document.querySelectorAll("#sidebar a");
    // for (var j = 0; j < links.length; j++) {
    //     links[j].classList.remove("active");
    // }
    // links[chapterNumber - 1].classList.add("active");
}

// Show Chapter 1 by default when page loads
window.onload = function() {
    showChapter(1);
};
