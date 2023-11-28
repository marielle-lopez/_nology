# HTML Fundamentals

## What is HTML?
- HyperText Markup Language
- Way of structuring information
- Instructions for the browser to display content
    - Almost universal behaviours across all browsers **now**

## Why do we Use HTML?
- Human readable
    - Easily shows hierarchy of elements
- Easily parsed by browsers and adaptive technologies

## HTML Layout
```html
    <!DOCTYPE html>     <!-- DOCTYPE tells the browser about what kind of document it's reading -->
    <html lang="en">   <!-- specifies the start and end of the html part of the document -->
        <head>      <!-- contains additional information and settings about the page -->
            <title>HTML Fundamentals</title>        <!-- text shown on browser tab -->
            <link rel="icon" type="image/x-icon" href="mario.avif">     <!-- tab icon -->
            <link rel="stylesheet" href="styles.css">       <!-- link to stylesheet(s) -->
            <meta charset="UTF-8">      <!-- declares the page's character encoding, tells the browser which characters to use -->
            <meta name="viewport" content="width=device, initial-scale=1.0">    <!-- sets information about the usable content of the window and allows media queries -->
        </head>
        <body>      <!-- the visible content of the page -->
        
        </body>
    </html>
```