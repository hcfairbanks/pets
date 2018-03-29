function send_docs(e){
  var reader = new FileReader()
  // The js is the same as the following jquery line, just for reference
  // var files = document.getElementById('picture').files;
  var files = $("#attachment").get(0).files;
  var name = $("#name").val();

debugger


  var reader = new FileReader();
  reader.readAsDataURL(files[0]);

  reader.onload = function () {
    base64string = reader.result
    console.log(base64string);
    info = {
        cat:{
             name: name,
             attachments_attributes: [ {image: base64string},{image: base64string} ]
           }};

    jQuery.ajax({
        url: "http://localhost:3000/cats/",
        type: "POST",
        dataType: "JSON",
        data: info,
        success: function (response) {
          // You can see the full response object in
          // Chrome developer tools, console
          // console.log(response)
          alert("Name: " + response.name + " ID:" + response.id );
        }
    });

  };

};
//cat[attachments_attributes][][image]
//  name=\"cat[attachments_attributes][][image]\"; filename=\"cat_3.jpg\"\r\nContent-Type: image/jpeg\r\n">}]},

// "attachments_attributes"=>[
//
//   {"image"=>#<ActionDispatch::Http::UploadedFile:0x007ffaa4383f78 @tempfile=#<Tempfile:/tmp/RackMultipart20180325-9281-j5m8i1.jpg>, @original_filename="cat_1.jpg", @content_type="image/jpeg", @headers="Content-Disposition: form-data; name=\"cat[attachments_attributes][][image]\"; filename=\"cat_1.jpg\"\r\nContent-Type: image/jpeg\r\n">}]
// },


//this is what it looks like in the bas64 app
//Parameters: {"cat"=>{"name"=>"test", "picture"=>"test"}}



//https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage

//localStorage only supports strings. Use JSON.stringify() and JSON.parse().
//var names = []; names[0] = prompt("New member name?"); localStorage.setItem("names", JSON.stringify(names)); //... var storedNames = JSON.parse(localStorage.getItem("names"));
