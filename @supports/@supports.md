## @Supports, what is it?
CSS has a feature that can test if the browser supports a particular property or property:value before applying on the web for the user, namely: `@supports`.

Just like how you style certain elements in @media-query when scaling the width of a website, you can use @supports. For example, how @supports looks like:

``` css
@supports (display: grid) {
  div {
    display: grid;
  }
}
```
The code here above says: If a browser understands display:grid , then grid will be shown in the browser. If it doesn’t, it will skip that line of code and move on.

### How to use @Supprts and how does is works?
So when @Supports is not supported u can choose to do nothing. For example: your browser does not supports grid, so everything will be placed among each other.

But if you want to use @supports with a fallback, you can write the following code:
``` css
div {
  display: flex;
  flex-wrap: wrap;
}

@supports (display: grid) {
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
}
```
The fallback is placed in the code outside the @supports element. Because the fallbacks only works when grid is not supported. That is the reason why it is important to write the CSS order correctly. The last thing that is read is executed in the browser.

Another way to write a fallback, is to use `@supports not()`.  For example: 

``` css
@supports not (display: grid) {
  div {
    display: flex;
    flex-wrap: wrap;
  }
}

@supports (display: grid) {
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
}
```

The code above says: If the browser supports grid use grid, but if the browser does not support grid then use flex. 

### Bad practise!
However `@supports not` is a bad practise. The reason is because @supports is not supported for every browser.
<img width="1280" alt="Screenshot 2019-06-16 22 02 42" src="https://user-images.githubusercontent.com/32538678/59568928-856a5f80-9082-11e9-92ca-2f55bd33c408.png">

So what this means is: if your browser does not supports @supports, you have to write a fallback for a fallback! For example:

``` css
div {
  display: flex;
  flex-wrap: wrap;
}

@supports not (display: grid) {
  div {
    display: flex;
    flex-wrap: wrap;
  }
}

@supports (display: grid) {
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
}
```

### Testing it out!
For example I made a test with @supports with grid. Earlier you saw that @supports is not supported on every browser. For example on Internet Explorer. But if you search up if grid is supported, you can see that grid is supported in Internet explorer 10 and 11.

<img width="1280" alt="Screenshot 2019-06-18 22 37 29" src="https://user-images.githubusercontent.com/32538678/59718122-baf58100-9219-11e9-92f0-957eae7abd22.png">


``` css
div {
  display: flex;
  flex-wrap: wrap;
  color: red;
}

@supports not (display: grid) {
  div {
    display: flex;
    flex-wrap: wrap;
    color: orange;
  }
}

@supports (display: grid) {
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    color: green;
  }
}
```

If we test it out in chrome the test page should show green text with a grid. Now if the test it out lets see what will happen. The chrome page looks like this:
<img width="1280" alt="Screenshot 2019-06-18 22 19 59" src="https://user-images.githubusercontent.com/32538678/59717644-bbd9e300-9218-11e9-9def-d9eecb50364c.png">

The results shows green text with a grid. Because the browser supports grid and @supports.

Now what if @supports is supported but grid not? Then the color has to be orange. Let’s test it out with firefox 48. The page now looks like this:
<img width="1280" alt="Screenshot 2019-06-18 22 37 02" src="https://user-images.githubusercontent.com/32538678/59718149-cc3e8d80-9219-11e9-99d0-0626436d011a.png">

If you can see, firefox 48 supports @supports but not grid. So the color of the text is now orange.

The last test is with Internet Explorer 11. Because IE does not support @supports and earlier it is told that if the browser does not understand what your CSS is saying, it will skip it. So the test should be shown the color the color red. Now let’s test it out.
The browser now looks like this:
<img width="1280" alt="Screenshot 2019-06-18 22 19 50" src="https://user-images.githubusercontent.com/32538678/59718416-75858380-921a-11e9-883a-ecf4d7342e09.png">

And it is true. The browser shows red text.