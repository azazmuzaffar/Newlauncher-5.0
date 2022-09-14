### All the changes have already been made at https://phplaravel-742341-2874759.cloudwaysapps.com/home, you can take help from there by inspecting elements, comparing them, and copying classes, etc...

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


## 3) Adding navigations to property details page on nav slider? 

![Put next prev](https://user-images.githubusercontent.com/64412852/189857352-9e0be147-e146-4b8c-92f5-e685f747a876.png)

## Solution: 

### (detail.blade.html (298 line ~)) please uncomment this piece of code to enable the arrows.

![image](https://user-images.githubusercontent.com/64412852/189864506-193607a2-50b6-4898-9379-fc89b729b89d.png)

### (style.css (1149 line ~)) please change the color with the higlighted one, and comment out the code as commented in screenshot.

![image](https://user-images.githubusercontent.com/64412852/190113788-70c3e4d3-bc7d-474d-a3ea-07da0afa7d0d.png)

## 3) Adding clear button on inputs and make it work accordingly?

![2nd change](https://user-images.githubusercontent.com/64412852/190114585-2986e9e9-31e6-4dbf-bfaa-6f93291aaa62.png)

## Solution: 

### Please add the html code to html (as per screenshot (same with the other filter option, ex Project Developer, Project Location etc...)), css in style.css (end of file), js in main.js (end of file);

```html
   <button class="clear-data">
      <i class="fas fa-times-circle"></i>
   </button>
```
![image](https://user-images.githubusercontent.com/64412852/190116733-22b8ea03-18c3-4919-8200-a1418a7688e9.png)

```css
   /* ---- New ---- */
   /* Clear input Text  */
   .clear-data{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
        border-color: transparent;
        border-radius: 50%;
        font-size: 13px;
        text-align: center;
        line-height: 10px;
        background-color: transparent;
        visibility: hidden;
        opacity: 0;
        transition: .2s ease-out;
   }
    .clear-data.show{
        visibility: visible;
        opacity: 1;
        transition: .2s ease-in;
   }
    .clear-data i{
        font-size: 18px;
        color: #6b7380;
   }
```

```js
  /* Show/Hide clear icon & reset input */
  $(document).ready(function() {
    /* Show/Hide clear icon */
      $(".filter-body .sm-searech input").on("input", function() {
          if ($(this).val() === "") {
              $(this).siblings(".clear-data").removeClass("show");
          } else {
              $(this).siblings(".clear-data").addClass("show");
          }
      });
      /* Reset input */
      $('.filter-body .sm-searech .clear-data').click(function() {
          $(this).siblings('input').val("");
          $(this).removeClass("show");
          /* $(this).siblings('input').focus(); */
      });
  });
```
