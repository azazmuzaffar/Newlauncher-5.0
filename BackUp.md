
## 3) Adding navigations to property details page on nav slider? 

![Put next prev](https://user-images.githubusercontent.com/64412852/189857352-9e0be147-e146-4b8c-92f5-e685f747a876.png)

## Solution: 

### (detail.blade.html (298 line ~)) please uncomment this piece of code to enable the arrows.

![image](https://user-images.githubusercontent.com/64412852/189864506-193607a2-50b6-4898-9379-fc89b729b89d.png)

### (style.css (1149 line ~)) please change the color with the higlighted one, and comment out the code as commented in screenshot.

![image](https://user-images.githubusercontent.com/64412852/190113788-70c3e4d3-bc7d-474d-a3ea-07da0afa7d0d.png)

## 4) Adding clear button on inputs and make it work accordingly?

![2nd change](https://user-images.githubusercontent.com/64412852/190114585-2986e9e9-31e6-4dbf-bfaa-6f93291aaa62.png)

## Solution: 

### Please add the html code to html (as per screenshot (same with the other filter option, ex Project Developer, Project Location etc...)), css in style.css (end of file), js in main.js (end of file);

```html
   <button class="clear-data">
      <i class="fas fa-times-circle"></i>
   </button>
```
![image](https://user-images.githubusercontent.com/64412852/190117376-e1510f52-3e6f-4403-8f5d-bf65dd1ecf77.png)


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

### please make sure that the input value that you are storing in veriable for search should be empty on click of .clear-data

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
          $(this).siblings('input').focus();
      });
  });
```

## 5) Chevron Down icon should remain at it's original place (vertically top)

![Screenshot_1](https://user-images.githubusercontent.com/64412852/190575547-7fc3570c-9fc8-4ca2-aeff-255c8522f50e.png)

## Solution: 


### Please create a div with class ".title-selections" inside "filter-content-item" and put the h3 ".title" inside it and get the ".toggle-with-parent" div outside the title and put along with it as below.

```html 
   <div class="filter-content-item has-opened">
      <div class="title-selections">
         <!-- Now h3 ".title" is inside new DIV -->
         <h3 class="title">
            Project Size
            <span class="chip chip-sm chip-bg d-none">
            <span>0</span>
            <button class="btn-times filter-close" data-key="project_size"><i class="fas fa-times-circle"></i></button>
            </span> 
            <button class="angle-btn fas fa-angle-down"></button>
         </h3>
         <!-- Now this div is outside the h3 ".title" -->
         <div class="sm-title fw-400 toggle-with-parent"></div>
      </div>
    ...
```

### (style.css) Please add this code to the css file.

```css
   /*------------- New ----------------*/
   .filter-content-item .title-selections{
     cursor: pointer;
   }
   /*----------------------------------*/
```

### (main.js) please change the highlighted class from ".title" to ".title-selections"

![image](https://user-images.githubusercontent.com/64412852/190584450-41968f71-243d-45b7-9656-303f9b169027.png)
