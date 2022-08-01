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


## 1) Footer Logo: Only the logo should be clickable link.
![Bottom Logo Clickable Area](https://user-images.githubusercontent.com/64412852/182077675-8280e8d9-0418-4da0-b764-ff91d14e3315.png)






