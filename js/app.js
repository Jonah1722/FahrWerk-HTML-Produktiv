(function () {
  if (!window.fahrwerktool) window.fahrwerktool = function ($) {

    const FahrWerkTool = {};


    FahrWerkTool.init = function () {
      FahrWerkTool.initTooltips();
    }


    FahrWerkTool.toggleMainMenu = function () {
      const menuOverlay = document.getElementById('menuOverlay');
      if (menuOverlay) {  // Nur ausführen, wenn das Element existiert
        menuOverlay.classList.toggle('menu-visible');
      }
    }


// document.addEventListener('keydown', function (event) {
//     if (event.key === 'Escape') {
//         closeMainMenu();
//     }
// });

    FahrWerkTool.closeMainMenu = function () {
      const menuOverlay = document.getElementById('menuOverlay');
      if (menuOverlay && menuOverlay.classList.contains('menu-visible')) {
        menuOverlay.classList.toggle('menu-visible');
      }
    }

    FahrWerkTool.initTooltips = function () {
      function initTooltips() {
        var elems = document.querySelectorAll('.tooltipped');
        console.log("Tooltip Elements after AJAX:", elems); // Debug-Log
        M.Tooltip.init(elems);
      }

      // Initialisierung nach Laden der Seite
      document.addEventListener('DOMContentLoaded', initTooltips);

      // Falls AJAX verwendet wird (PrimeFaces, f:ajax etc.)
      if (typeof jsf !== 'undefined') {
        jsf.ajax.addOnEvent(function(data) {
          if (data.status === "success") {
            initTooltips();
          }
        });
      }
    }

    return FahrWerkTool;
  }(jQuery);

  fahrwerktool.init();
})();
