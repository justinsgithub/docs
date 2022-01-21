# CSS Essentials

- CSS is a fundamental part of web design
- it controls the way your page looks
- without it you would only be able to display text on white backgrounds

## getting started 

### referencing CSS 

- 3 different methods for CSS to be added to HTML
- external: 

    - refers to using a separate CSS file 
    - can load into the HTML using a link tag or @import method
    - link tag is always referenced within the head of the document, with 2 attributes, rel and href
    - rel stands for the relationship and uses the value of "stylesheet"
    - href value is the path to the CSS file
    - link is a void element so it does not need closing tag
    - type is another attribute that was required in the previous versions of HTML, but is no longer needed in HTML5, the latest version, but if it is there it does not hurt either
   - using an external stylesheet is recommended because it separates the CSS from HTML, making it easier to manage

- @import:

    - imports 1 or more style sheets into an HTML file, can be used in a CSS or HTML file
    - CSS file: @import url("/styles/buttons.css")
    - HTML file: `<style> @import url("css/styles.css") </style>`
    - @import is not used as often these days because it slows down page loading
    - @import does not allow for parallel downloads
    - @import must download an entire stylesheet before displaying the webpage
    - @import is commonly used with preprocessors such as sass or when CSS is compiled

- inline:

    - uses the style attribute, this overrides any styling from other CSS rules

### optimizing images

- retina display:

    - a trademark term coined by Apple, and is used to describe with their high pixel density screens
    - Retina = high pixel density
    - introduced in 2010 with the iPhone 4, then in 2012 with the iPad 3, MacBook Pro, and iMac
    - other manufacturers have their own versions

- pixel density: 

    - refers to the number of pixels within a space
    - usually measured in pixels per inch (PPI) or dots per inch (DPI)
    - Retina displays have double the number of PPI/DPI
    - can fit 2 pixels within the same space of a non-Retina display
    - the more pixels in the same area, the smaller the pixels are, which is how text and images appear smoother, clearer, and show more detail
    - a simple way to support retina in non-Retina screens, is to use an image twice the size
    - so if we use a 600px image and resize it with CSS to 300px, it will be similar to a Retina display, for both Retina and not Retina screens the image will display 300px wide, but in the Retina display, the Image will appear more crisp

## core concepts

### W3C specifications 

- the World Wide Web Consortium (W3C) is an international community consisting of member organizations, a full-time staff, and the public
- together they develop web standards and guidelines including technical specifications for CSS 
- CSS = Cascading Style Sheets
- the first 2 versions of CSS, level 1 and level 2 published the specifications as 1 whole document
- after version 2 the W3C decided to split the specification into independent modules to allow for faster incremental changes
- each module can level up independently
- some may be marked as level 3 if it is an update from CSS2 
- new modules such as flexbox start at level 1, there are others at level 4 
- these levels have no relation to the version of CSS
- CSS3 basically refers to any updates after CSS2, but it is all basically just CSS and most likely will not be a specific CSS4 

### syntax and terminology


- img is a selector, which are used to determine which HTML element to apply the styles to
- the whole snippet is called a declaration block, and may include 1 or more style rules wrapped in curly braces to contain the styles to the specific selector
- declarations are the style rules and are written using a `key: value;` pair
- many properties can be written using a shorthand and longhand syntax
- `/* this is a comment */`
- [codeguide.co](https://codeguide.co) is a good resource for a style guide

```css
img {
        width: 300p;
}
```

### values and units

### color and property values 

### type and universal selectors

### class & ID selectors

### descendant selectors

### grouping selectors

### inheritance & specificity

### cascade and importance 

### psuedo-class selectors & links

## box model

### intro to box model

### inline block display

### box model properties

### box properties syntax and usage

### debugging box model

### padding margin border

### margin & layouts 

## typography

### for the web

### changing font-family

### font-weight & font-style

### web fonts with @font-face

### Google Fonts

### font-size properties

### font shorthand

### text decoration, text-align, line-height

## float position

### intro to float 

### float & clear properties

### float & collapsed container

### layouts & the box model

### position

### position & z-index

## flex box grid

### intro to grid & flexbox

### intro to flexbox

### orientation and ordering

### flexible sizing

### flexbox alignment

### intro to CSS grid

### explicit grid

### implicit grid

### grid placement properties

## advanced selectors

### relational selectors: combinators

### pseudo-class selectors: first & last

## fluid responsive layouts


### flexible background images

### media queries 

### media queries widths breakpoints

### testing responsive layouts
