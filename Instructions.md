### All the changes have already been completed at https://phplaravel-742341-2788700.cloudwaysapps.com/home, you can take help from there by inspecting elements, comparing them, and  copying classes, etc...

<hr>

## 1) Listing Card Improvements: Opening Whatsapp in new tab.

![Listing Card Improvements](https://user-images.githubusercontent.com/64412852/182070614-b0065243-c2ea-496f-b755-1266cc5cbf88.png)


### (main.js) (Line 587 to 588)


## Solution: 


Replace this:

```js
   // location.href=$(this).data("value")+"";
```

With:

```js
   window.open($(this).data("value") + "", "_blank");
```

## 2) Remove Links - 3: 

![Remove Links - 3](https://user-images.githubusercontent.com/64412852/182071112-9ef1de55-29f4-498f-aea0-303190a2d78f.png)

### (index.blade.html) (B/W line 519 to 548)

## Solution: 

Just replace all the hyperlinks with div tag and remove <b>href</b> attribute.

For Example:

```html
      <div class="brand mb-7 d-none d-md-block">
         <img class="lazyload" data-src="{{ asset("front/img/brand/1.svg") }}" alt="">
      </div>
```

## 3) Remove Links - 2: 

![Remove Links - 2](https://user-images.githubusercontent.com/64412852/182073909-84a00b13-86a8-428e-80f6-23c33e7b7214.png)

## Solution: 

### (about.blade.html) (B/W line 91 to 107)
Just replace all the hyperlinks with div tag and remove <b>href</b> attribute, also add "each-brand" to each div. 
### (style.css) (B/W line 6752 to 6813)
Make sure to change all the "a" with the ".each-brand" class coming right after the .brands-area class, b/w the mentioned lines.

Note: I can't find "about-us.scss", if it is there somewhere so please do the same (replace all "a" with .each-brand coming inside .brands-area)
  
For Example:
```html
      <div class="each-brand">
         <img src="{{ asset("front/img/about/brands/Forbes.svg") }}" alt="" />
      </div>
```
For Example:


```css
      .as-featured-area.container .brands-area .each-brand {
        margin-right: 41px;
        text-decoration: none;
      }

      .as-featured-area.container .brands-area .each-brand:last-of-type {
        margin-right: 0px;
      }
```


## 4) Footer Logo: Only the logo should be clickable link.
![Bottom Logo Clickable Area](https://user-images.githubusercontent.com/64412852/182077675-8280e8d9-0418-4da0-b764-ff91d14e3315.png)

## Solution: 

Add the following code to the CSS and SCSS files.

(style.css) (Add somewhere around 4951 line)

```css
      .footer-content .logo-whit a{
        display: block;
        width: fit-content;
      }
```

(_footer.scss) (Add after line 38, from 39 to 42 inside .logo-whit) like below:

```css
      .footer-content{
         .logo-whit{
            margin-bottom: 32px;
            /* New Code - Start */
            a{
               display: block;
               width: fit-content;
            }
            /* End - New Code */
            @media #{$md_device}{
               margin-bottom: 21px; 
            }
         }
      ...
```

## 5) Best Deals 1 & 2: Benner/Slide image appear weirdly at some resolutions.
![Best Deal - iPad Resolution - 2](https://user-images.githubusercontent.com/64412852/182083408-9a972db2-217a-4300-98db-22e5533d9053.png)

## Solution: 

Add these two following CSS properties to the Banner/Slide bg image.

```css
    background-size: cover;
    background-position: center center;
```

You can add them as inline CSS just like you have done for the background image src, check below. 
(index.blade.html) (1469)

![image](https://user-images.githubusercontent.com/64412852/182085138-6bf285b9-9c21-4629-b795-f785ffbe933e.png)


## 6) Changing footer like below in screenshot b/w 992px to 1200px resolution
![image](https://user-images.githubusercontent.com/64412852/182098962-fd0a2926-cf27-4ee3-8262-7d93deb0e5e8.png)

## Solution: 

### (footer.blade.html) (Compare and replace the existing classes with highlighted ones)
![image](https://user-images.githubusercontent.com/64412852/182100631-acba7857-07e8-4edb-812a-414e7378a9a5.png)

### Please add the following CSS to (style.css) (somewhere around 5143 line) and (_footer.scss) (somewhere around 186 line) 
```css
      @media (min-width: 992px) and (max-width: 1199px){
         .footer-accourdion-wrap {
            padding: 0px 12px;
         }
      }
```
### please change the media query for following code from max-width: 991.98px; to max-width: 1199px; for (style.css) and from lg_device to xl_device for (_footer.scss)

```css
     .footer-content .copyright {
       border-top: 1px solid #353b48;
       padding-top: 20px;
       margin-top: 5px;
     }
``` 


## 7) Keeping all the prices info like below in 2 lines for screen 1200-1400?
![image](https://user-images.githubusercontent.com/64412852/182103607-1274a6f9-2b4f-41b2-b144-8807e5fafd09.png)

### (index.blade.html) (Compare and replace all the classes with the highlighted ones)
![image](https://user-images.githubusercontent.com/64412852/182110280-370478d5-c8f7-4982-8bdb-b40458c1bec8.png)

### Also, please add the following CSS code in style.css and _card.scss accordingly.

```css
      @media only screen and (min-width: 1200px) and (max-width: 1399px){
        .mr-0fsm {
            margin-right: 0 !important;
        }
      }
``` 


## 8) Truncate the card title, project name and location.

![image](https://user-images.githubusercontent.com/64412852/182431159-e0aec484-e56a-4f27-962a-e94ceb591f5a.png)

### (index.blade.html) (search.blade.html)

#### Change the card title code to this:

```html
<div class="title">
    <h2>{{ $listing->project_name }}</h2>
    <p>in {{ $listing->project_address }}</p>
</div>
``` 
#### For filter search to this:

```html
<div class="title">
    <h2><project-name></h2>
    <p>in <project-address></p>
</div>  
``` 
### (style.css) (_card.scss)

```css

/* .card-primary .card-header .text-content .title {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 6px;
  color: #111828;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.card-primary .card-header .text-content .title small {
  font-size: 14px;
  line-height: 19px;
  color: #384152;
  font-weight: normal;
} */


/* New Code - Start */
.card-primary .card-header .text-content .title {
  margin-bottom: 6px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.card-primary .card-header .text-content .title h2,
.card-primary .card-header .text-content .title p {
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.card-primary .card-header .text-content .title h2 {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #111828;
  margin: 0 4px 0 0;
}

.card-primary .card-header .text-content .title p {
  font-size: 14px;
  line-height: 19px;
  color: #384152;
  font-weight: normal;
  margin: 4px 0 0 0;
}
/* End - New Code */

```




