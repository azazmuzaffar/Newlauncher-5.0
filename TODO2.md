### All the changes have already been made at https://phplaravel-742341-2874759.cloudwaysapps.com/home, you can take help from there by inspecting elements, comparing them, and copying classes, etc...

+ Please do all the CSS changes in style.css, and there respective scss files to avoid confusions in future.

<hr>

## 1) Make selected option text bold.

![Bold Selected Tab](https://user-images.githubusercontent.com/64412852/194244130-ffbc8bae-8a6e-450a-91d1-dbbb412be037.png)

### (css/style.css)(sass/style.css)

## Solution: 

![image](https://user-images.githubusercontent.com/64412852/194246633-7d2d47a8-77e5-479b-aac9-bddb73c4db79.png)

```css
.nav-tabs .nav-item .active.nav-link {
  background-color: transparent;
  color: #111828;
  /* New */
  font-weight: 700;
}
```
