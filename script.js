function upDate(previewPic) {
    console.log("Event triggered for: " + previewPic.alt);
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {
    console.log("Event ended, resetting display.");
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover or focus on an image below to display here.";
}

function addTabIndexes() {
    console.log("Page loaded. Adding tabindex attributes dynamically...");
    
    // Lấy tất cả các ảnh có class là preview
    let images = document.querySelectorAll('.preview');
    
    // Dùng vòng lặp for để thêm thuộc tính tabindex
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Added tabindex='0' to image index: " + i);
    }
}
