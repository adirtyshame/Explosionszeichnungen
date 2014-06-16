(function(window) {
    var imageLoader = document.getElementById('imageLoader');
    var canvas = document.getElementById('imageCanvas');
    var ctx = canvas.getContext('2d');

    imageLoader.addEventListener('change', handleImage, false);

    function handleImage(e) {
        console.log("Loading image ...");
        var reader = new FileReader();
        reader.onload = function(event) {
            var img = new Image();
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
        console.log("Image '%s' loaded", event.target.result);
    }
})(window);