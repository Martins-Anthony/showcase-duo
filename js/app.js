import { adaptIdsForDevice, handlePictureUpload } from "../components/addPicture/addPicture.js";

function loadContent() {
  $("#mobile-container").load("components/mobile/mobile.html", function() {
    $("#mobile-container-addPicture").load("components/addPicture/addPicture.html", function() {
      adaptIdsForDevice("mobile");
      handlePictureUpload("mobile");
    });
  });

  $("#desktop-container").load("components/desktop/desktop.html", function() {
    $("#desktop-container-addPicture").load("components/addPicture/addPicture.html", function() {
      adaptIdsForDevice("desktop");
      handlePictureUpload("desktop");
    });
  });
}

loadContent()