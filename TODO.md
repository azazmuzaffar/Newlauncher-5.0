### All the changes have already been made at https://phplaravel-742341-2874759.cloudwaysapps.com/home, you can take help from there by inspecting elements, comparing them, and copying classes, etc...

+ Please do all the CSS changes in style.css, and there respective scss files to avoid confusions in future.

<hr>

## 1) Making copyright text opacity to 0.7?

![Change Footer Copyright Color](https://user-images.githubusercontent.com/64412852/189831002-76d566b6-bbe5-4e95-9b2a-b9f8db9a7404.png)

### (style.css) (line # 5039 ~)

## Solution: 

```css
   .footer-content .copyright p {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #fff;
      /* New */
      opacity: 0.7;
    }
```

## 2) Remove padding coming on the left and right side of input b/w 992 to 768?

![Partner   Contact Fields](https://user-images.githubusercontent.com/64412852/189831009-91203398-6c33-4fac-b261-e63ce4aad917.png)

### (style.css) (line # 6322 ~ and 6332 ~)

## Solution: 

### Change the max-width from <b>768.98px</b> to <b>991.98px</b>

![image](https://user-images.githubusercontent.com/64412852/189832774-60e3f851-af84-4ee7-b7af-447d4fda661a.png)

## 6) Not sure why. But, this particular project name - The Reef at King's Dock cannot be cleared when you press the x button on the filter bubble.

![image](https://user-images.githubusercontent.com/64412852/190576299-ff4bf4c7-8cf2-4fe4-bba3-749fd9d77b9e.png)

## Solution: 

I think it's happening because of the single quote that we have in the word = King ' s, and it's making trouble in matching the text or may be something related, so please do check on the function and the approach that you using in back for matching purposes etc...

## 7) I am thinking to use 22 Dec 2022 kind of format on 1200px to 1400px and the longer format, 22nd Dec 2022 on all other screens.

![Date Shorter](https://user-images.githubusercontent.com/64412852/190567198-07144b3f-ddf8-4893-9cf3-2326a37937fc.png)

## Solution: 

### I have prepaired a structure to use the both format accordingly as resolution.

```html
   <span class="btw-12-14"> Put this format here: 22 Dec 2022 </span>
   <span class="all-other"> Put this format here: 22nd Dec 2022 </span>
```
```css
   /* Show format 22nd Dec 2022 */
   .all-other {
     display: block;
     display: unset;
   }
   /* Show format 22 Dec 2022 */
   .btw-12-14 {
     display: none;
   }
   @media only screen and (max-width: 1400px) and (min-width: 1200px) {
     .all-other {
       display: none;
     }
     .btw-12-14 {
       display: block;
       display: unset;
     }
   }
```


## 8) If the Tag goes down, should have some vertical space in b/w

![If the Tag goes down should have some vertical space](https://user-images.githubusercontent.com/64412852/190368686-22cf44e8-fedd-472e-b7ce-f12810888817.png)

## Solution: 

### (style.css) please change the CSS and add the new one according.

![image](https://user-images.githubusercontent.com/64412852/190565258-196b4668-01e1-42dd-b2ab-9c0651bda4ed.png)

```css
   .card-primary .badge-gray-lists {
     /*margin value changed from 8 to 3px*/
     margin-bottom: 3px !important;
   }

   /*------------ New ---------------*/
   .card-primary .badge-gray-lists li{
     margin-bottom: 5px;
   }
   /*-------------------------------*/
```

## 9) Tag bubbles have some unncessary top padding. if it is not needed, we can remove it b/w 768 to 992.

![image](https://user-images.githubusercontent.com/64412852/190372130-b73261a3-350f-460d-9587-12e980dbe4f8.png)

## Solution: 

### (index.blade.php)(search.blade.php)

### Please update the badge-gray-list classes to as higlighted in screenshot.

![image](https://user-images.githubusercontent.com/64412852/194241027-c670f52e-546b-4aff-b3f4-8e47d8a7d9be.png)





