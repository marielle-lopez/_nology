# Specificity

The rules of how CSS works and which selectors take preference over other selectors.
- For example, ID selectors have a higher specificity score than element selectors
- Selectors with the same specificity score will not combine their effects; instead, the more recent written selector will have its styling applied
- Class selectors have a lower specificity score than ID selectors
- Inline styling have the highest specificity score, but it's bad practise to use inline styling as it makes debugging more difficult

## Scoring
For documentation on CSS specificity scoring, see: https://www.w3schools.com/css/css_specificity.asp
- 1, 0, 0
    ```CSS
    #label {
        color: red;
    }
    ```
- 0, 1, 0
    ```CSS
    .container {
        border: 1px solid #c6c6c6;
    }
    ```
- 0, 0, 1
    ```CSS
    p {
        font-style: italic;
    }
    ```