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

+ Issues # 2: Sort Icons needs to be added to the table Floor Plan & Sales Transection within the title <th></th>.

You can also see the icons added at https://phplaravel-742341-2527871.cloudwaysapps.com/detail/marina-one-residences

      <!-- ********* -->
      <!-- Sort Icon -->
      <svg
        class="svg-icon"
        style="width: 1.05em; height: 1.05em; margin-top: -2px; vertical-align: middle; fill: #c993d8; overflow: hidden"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Path # 1 represent sort by Acending order so only then color should be white -->
        <path
          style="fill: white"
          d="M524.545 111.846L795.47 454.069c5.485 6.928 4.315 16.99-2.613 22.476a16 16 0 0 1-9.932 3.455H208l291.455-368.154c5.485-6.928 15.548-8.098 22.476-2.614a16 16 0 0 1 2.614 2.614z"
        />
        <!-- Path # 2 represent sort by decending order so only then color should be white -->
        <path
          d="M524.545 914.154L816 546H241.074c-8.837 0-16 7.163-16 16a16 16 0 0 0 3.455 9.931l270.926 342.223c5.485 6.928 15.548 8.098 22.476 2.614a16 16 0 0 0 2.614-2.614z"
        />
      </svg>
      <!-- Sort Icon -->
      <!-- ********* -->
      
For Example:

      <th class="title">
          Unit Type
          <!-- ********* -->
          <!-- Sort Icon -->
          <svg
            class="svg-icon"
            style="width: 1.05em; height: 1.05em; margin-top: -2px; vertical-align: middle; fill: #c993d8; overflow: hidden"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Path # 1 represent sort by Acending order so only then color should be white -->
            <path
              style="fill: white"
              d="M524.545 111.846L795.47 454.069c5.485 6.928 4.315 16.99-2.613 22.476a16 16 0 0 1-9.932 3.455H208l291.455-368.154c5.485-6.928 15.548-8.098 22.476-2.614a16 16 0 0 1 2.614 2.614z"
            />
            <!-- Path # 2 represent sort by decending order so only then color should be white -->
            <path
              d="M524.545 914.154L816 546H241.074c-8.837 0-16 7.163-16 16a16 16 0 0 0 3.455 9.931l270.926 342.223c5.485 6.928 15.548 8.098 22.476 2.614a16 16 0 0 0 2.614-2.614z"
            />
          </svg>
          <!-- Sort Icon -->
          <!-- ********* -->
      </th>
