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

## 1) Remove padding coming on the left and right side of input b/w 992 to 768?

![Partner   Contact Fields](https://user-images.githubusercontent.com/64412852/189831009-91203398-6c33-4fac-b261-e63ce4aad917.png)

### (style.css) (line # 6322 ~ and 6332 ~)

## Solution: 

### Change the max-width from <b>768.98px</b> to <b>991.98px</b>

![image](https://user-images.githubusercontent.com/64412852/189832774-60e3f851-af84-4ee7-b7af-447d4fda661a.png)


## 1) Adding navigations to property details page on image slider? 

![Put next prev](https://user-images.githubusercontent.com/64412852/189857352-9e0be147-e146-4b8c-92f5-e685f747a876.png)

###  (style.css) (main.js)

## Solution: 

```html
<!-- Arrow Right -->
<div class="the-arrow go-right">
    <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M15 15L16.4142 16.4142L17.8284 15L16.4142 13.5858L15 15ZM3.41421 29.4142L16.4142 16.4142L13.5858 13.5858L0.585785 26.5858L3.41421 29.4142ZM16.4142 13.5858L3.41422 0.585786L0.585789 3.41421L13.5858 16.4142L16.4142 13.5858Z" fill="#fff"/>
    </svg>
 </div>
 <!-- Arrow Left -->
 <div class=" the-arrow go-left">
    <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M3 15L1.58579 13.5858L0.171573 15L1.58579 16.4142L3 15ZM14.5858 0.585786L1.58579 13.5858L4.41421 16.4142L17.4142 3.41421L14.5858 0.585786ZM1.58579 16.4142L14.5858 29.4142L17.4142 26.5858L4.41421 13.5858L1.58579 16.4142Z" fill="#fff"/>
    </svg>
 </div>
```

```css
/*----------------------------------*/
/*      Custom Arrow for Swiper     */
/*----------------------------------*/

.media-section .the-arrow{
  display: none;
}
@media only screen and (min-width: 992px) {
  .media-section{
      position: relative;
 }
  .media-section .the-arrow{
      display: block;
      position: absolute;
      z-index: 999;
      left: 0;
      top: 0;
      width: 40px;
      height: calc(100% - 8px);
      background: rgba(0, 0, 0, 0.7);
      cursor: pointer;
 }
  .media-section .the-arrow svg{
      width: 12px;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
 }
  .media-section .the-arrow svg path{
      width: 10px;
 }
  .media-section .the-arrow.go-right{
      left: unset;
      right: 0;
 }
  .media-section .swiper-button-disabled{
      visibility: hidden;
      opacity: 0;
      transition: .2s;
 }
}
/*----------------------------------*/
/*----------------------------------*/

```
