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
