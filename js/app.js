import { adaptIdsForDevice, handlePictureUpload } from "../components/addPicture/addPicture.js";
import { screenshotBtn } from "./screenshot.js";
import { addImageListeners } from "./checkImagesLoaded.js";
import { logo } from "../components/logo/logo.js";

function loadContent() {
  $("#mobile-container").load("components/mobile/mobile.html", function() {
    $("#mobile-container-addPicture").load("components/addPicture/addPicture.html", function() {
      adaptIdsForDevice("mobile");
      handlePictureUpload("mobile");

      addImageListeners();
    });
  });

  $("#desktop-container").load("components/desktop/desktop.html", function() {
    $("#desktop-container-addPicture").load("components/addPicture/addPicture.html", function() {
      adaptIdsForDevice("desktop");
      handlePictureUpload("desktop");

      addImageListeners();
    });
  });
  $("body").append('<div id="modal-container"></div>');
  $("#modal-container").load("components/modal/modal.html", function() {
    screenshotBtn();
  });
}

loadContent()
logo("Showcase duo");