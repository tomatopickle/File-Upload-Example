function uploadImage() {
    //  Uploading image, this does all the magic!, the file variable can also be a blob file
    let form = new FormData(),
        file = document.getElementById("fileInput").files[0],
        request = new XMLHttpRequest();
    form.append("file", file, "file");
    request.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data);
            // Getting image url out of file source
            const imageUrl = "https://fileuploadexample.abaanshanid.repl.co/uploads/" + data.filename;
            document.getElementById("image").src = imageUrl;
        }
    };
    request.open("POST", "/upload/", true);
    request.send(form);
}

function enableUpload() {
    // Enabling the Upload button so that the image can be uploaded
    document.getElementById('uploadBtn').disabled = false;
}