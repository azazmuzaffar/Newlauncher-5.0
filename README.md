## Newlauncher / https://azazmuzaffar.github.io/Newlauncher-5.0/

Instructions for the changes done so far...

+ Issue # 1: Light Gallery is not removing the "#property-view" hash-value by clicking close icon.

This code needs to be added at <b>resources/views/front/detail.blade.php</b> at <b>4117 line</b> (almost).

      /* ************************************************************ */
      /* Code to remove #property-view by clicking close icon as well */
      lg.addEventListener("lgBeforeClose", (e, o) => {
        showingGallery = false;
        const url = new URL(window.location);
        url.hash = "";
        history.replaceState(null, document.title, url);
      });
      lgSiteplan.addEventListener("lgBeforeClose", (e, o) => {
        showingGallery = false;
        const url = new URL(window.location);
        url.hash = "";
        history.replaceState(null, document.title, url);
      });
      lgLocationmap.addEventListener("lgBeforeClose", (e, o) => {
        showingGallery = false;
        const url = new URL(window.location);
        url.hash = "";
        history.replaceState(null, document.title, url);
      });
      lgUnitmix.addEventListener("lgBeforeClose", (e, o) => {
        showingGallery = false;
        const url = new URL(window.location);
        url.hash = "";
        history.replaceState(null, document.title, url);
      });
      lgBalanceunit.addEventListener("lgBeforeClose", (e, o) => {
        showingGallery = false;
        const url = new URL(window.location);
        url.hash = "";
        history.replaceState(null, document.title, url);
      });
      /* ************************************************************ */
      /* For floor plan each light gallery will be repeating this */
      /* So add it in a loop just like the  */
      /* ************************************************************ */
      lgFloorplan0.addEventListener("lgBeforeClose", (e, o) => {
        showingGallery = false;
        const url = new URL(window.location);
        url.hash = "";
        history.replaceState(null, document.title, url);
      });
      /* Code to remove #property-view by clicking close icon as well */
      /* ************************************************************ */
