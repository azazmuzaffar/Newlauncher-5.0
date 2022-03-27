## Newlauncher / https://azazmuzaffar.github.io/Newlauncher-5.0/

Instructions for the changes done so far...

+ ### Issue # 1: Light Gallery is not removing the "#property-view" hash-value by clicking close icon.

### Solution:

This code needs to be added at <b>resources/views/front/detail.blade.php</b> at <b>4117 line</b> (almost). <br>
Note: For the floor plan each light gallery will be repeating this.

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
      /* So add it in a loop just like you done with closegallery */
      /* ************************************************************ */
      lgFloorplan0.addEventListener("lgBeforeClose", (e, o) => {
        showingGallery = false;
        const url = new URL(window.location);
        url.hash = "";
        history.replaceState(null, document.title, url);
      });
      /* Code to remove #property-view by clicking close icon as well */
      /* ************************************************************ */

+ ### Issues # 2: Sort Icons needs to be added to the table Floor Plan & Sales Transection within the title <th></th>.

### Solution:

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

+ ### Issues # 3: Filter close icon look's weird on Safari/IOS.

### Solution:

Please change structure of the button, as follows:

#### Before change:

      <button class="btn-times fas fa-times-circle"></button>

#### After change:

      <button class="btn-times"><i class="fas fa-times-circle"></i></button>
      
+ ### Issues # 4: Filter button is not showing fully on Firefox Android Mobiles.

### Solution:

Two changes in CSS, as follows:

### Before change: 

      .side-menu-wrapper {
         height: 100vh;  
      }
      .all-filters-area,
      .sort-fixd-wrap {
         height: 100vh;  
      }

### After change: 

      .side-menu-wrapper {
         height: 100% !important;  
      }
      .all-filters-area,
      .sort-fixd-wrap {
         height: 100% !important;  
      }     
      
+ ### Issues # 5: Caption needs to be added for all Floor Plan Lightgallery. 

### Solution:

#### Before change: Floor plan light gallery without the caption ->

      <div id="floor-plan-1">
        <a href="assets/img/sections/site-plan.png" class="btn btn-outline-table d-inline-flex align-items-center">
          <span class="icon-left d-inline-flex">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.89109 2.90099L5.39604 1H1V13H5.63366M8.84158 1H13V7.05941M5.63366 13H13V7.05941M5.63366 13V7.05941M4.08911 7.05941H7.17822M10.2673 7.05941H13"
                stroke="#743393"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          1A-PH
          <img src="assets/img/sections/site-plan.png" alt="" style="display: none" />
        </a>
      </div>

#### After change: Floor plan light gallery with the caption ->

      <div id="floor-plan-1">
      <!-- ************ New Attribute -> data-sub-html=".caption-1" ************ -->
        <a href="assets/img/sections/site-plan.png" class="btn btn-outline-table d-inline-flex align-items-center" data-sub-html=".caption-1">
          <span class="icon-left d-inline-flex">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.89109 2.90099L5.39604 1H1V13H5.63366M8.84158 1H13V7.05941M5.63366 13H13V7.05941M5.63366 13V7.05941M4.08911 7.05941H7.17822M10.2673 7.05941H13"
                stroke="#743393"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          1A-PH
          <img src="assets/img/sections/site-plan.png" alt="" style="display: none" />
          <!-- ************ Caption -> Start ************ -->
          <div class="caption-1" style="display: none">
                <!-- The data is coming from the database -->
                <p>1 Bedroom · $1.908M - $2.019M | 467 sqft · $2,900 - $3,000 PS</p>
          </div>
          <!-- ************ Caption -> End ************ -->
        </a>
      </div>
