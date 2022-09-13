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
