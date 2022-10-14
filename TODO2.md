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


## 2) Make Strong text customly styled that comes anywhere in project description.

![Strong Tag Styling](https://user-images.githubusercontent.com/64412852/194249551-3a7ac117-4319-4bc1-b90c-1140d0e946fd.png)

### (detail.blade.php)(css/style.css)(sass/style.css)

## Solution: 

### Go to the (detail.blade.php), find .text-content class and add new class called "project-description" to it and add styles in style.css end of file (the code is given below)

![image](https://user-images.githubusercontent.com/64412852/194250386-fc186ff3-c8ff-4442-ad74-b1a1c8504a66.png)

```css
/* project Description <strong> style */
.project-description strong{
  font-size: 16px; 
  font-weight: 600; 
  color: #111828;
}
```

## 3) Sales Trend Dropdown issue

![Sales Trend Dropdown](https://user-images.githubusercontent.com/64412852/194262409-0b107f65-6493-46c8-8146-cb117021ca42.png)

### (css/style.css)(sass/style.css)

## Solution: 

### please look at the screenshot and make chanegs accordingly.

+ Removing line: padding: 0px 6px;
+ Adding line: padding-left: 6px;

![image](https://user-images.githubusercontent.com/64412852/194261991-77bb9bcd-685d-4e6a-913b-7dcfd371c985.png)


## 4) Can we stop flickering for the sticky footer?

![image](https://user-images.githubusercontent.com/64412852/195791148-6878ebdb-9e76-4f41-b975-7136cc04d642.png)

### (css/style.css)(sass/style.css)

## Solution: 

### please change and comment the code as in below.

```css
/* .panel-card .dev-avater-wrap {
  margin-top: 5px;
} */

.panel-card .dev-avater-wrap{
  /* margin-bottom: 18px; */
  padding-bottom: 18px;
}
```
