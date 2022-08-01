## 1) Listing Card Improvements: Opening Whatsapp in new tab.
### (main.js) (Line 587 to 588)

Remove this:

      // location.href=$(this).data("value")+"";

With:

      window.open($(this).data("value") + "", "_blank");
      

![Listing Card Improvements](https://user-images.githubusercontent.com/64412852/182070614-b0065243-c2ea-496f-b755-1266cc5cbf88.png)

## 2) Listing Card Improvements: Opening Whatsapp in new tab.
### (main.js) (Line 587 to 588)

![Remove Links - 3](https://user-images.githubusercontent.com/64412852/182071112-9ef1de55-29f4-498f-aea0-303190a2d78f.png)


