## Listing Card Improvements: Opening Whatsapp in new tab.
### (main.js) (Line 587 to 588)

Remove this:

      // location.href=$(this).data("value")+"";

With:

      window.open($(this).data("value") + "", "_blank");
      

![Listing Card Improvements](https://user-images.githubusercontent.com/64412852/182070614-b0065243-c2ea-496f-b755-1266cc5cbf88.png)



