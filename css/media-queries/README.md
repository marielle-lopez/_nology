# Media Queries
Media queries are a feature of CSS.

```CSS
@media only screen and (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```

You should create one mixin per device.

```SCSS
@mixin phone {
    @media only screen and (max-width: 576px) {
        @content;
    }
}

@mixin tablet {
    @media only screen and (min-width: 577px) and (max-width: 768px) {
        @content;
    }
}

// probably don't need this as your default styling is for a laptop anyway
@mixin laptop {
    @media only screen and (min-width: 769px) {
        @content;
    }
}
```

```SCSS
@use "./partials/media-query-mixins.scss";

.title {
    color: red;
    font-family: Arial;
    font-size: 36px;

    @include media-query-mixins.phone {
        color: green;
        font-size: 24px;
    }

    @include media-query-mixins.tablet {
        color: blue;
        font-size: 32px;
    }
}
```

The smallest screen size you should worry about is a width of around 360px.

When you're dealing with items you'd like to put in a grid, it's usually best to use flexbox properties instead as it's easier.

## Helpful Links
https://getbootstrap.com/docs/5.0/layout/breakpoints/
https://www.w3schools.com/css/css_rwd_mediaqueries.asp