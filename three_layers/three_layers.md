## The three layers of the web
On the web we know three layers: <br>
* HTML <br>
* CSS <br>
* Javascript <br>

But what are these layers and in why should we separate these layers? The first thing you should know is dat `HTML` is used for creating the structure of sites. For styling your layout of your webpage and to make it responsive you use `CSS`. For the last layout `Javascript` is used to control the behavior of the different kind of elements.

<img width="1280" alt="Screenshot 2019-06-20 21 45 18" src="https://user-images.githubusercontent.com/32538678/59876896-fc666780-93a4-11e9-9bbe-2cdd2983981b.png">

### Why you should split your code into this three layers
First of all why it is better to split your code into this three layers, it gives you a clear and better structure to your code. The other reasons why it is better to split into this layers are: <br>

* Reusable code -> when you are writing CSS or Javascript code, any HTML page on your website can use that file. When you want to make some changes and every page that use the same Javascript or CSS file, are automatically updated. This means that you don't have to edit every page individually. <br>

* Faster downloads -> When the user comes for the first time on your website, the CSS or Javascript file can be cached by the webbrowser. If these files are cached by the browser, other pages that use the same stylesheet and scripts can be loaded faster, which improves the speed and performance! <br>

* SEO -> Website that has a clear seperation of style and structure, has a better performance for search engines. <br>

* Accessibility -> External style sheets and script files are more accessible for screenreaders. If you put in the scripts or stylesheet into your HTML file, the screenreader will also read this. 

* Backward compatibility -> Not every user can use certain CSS or enables Javascript in the browser or device. So when this is turned off, the browser can't view the HTML page. But when you seperate your code into this three layers, the HTML page still can be viewed. <br><br>
When you seperate your files into this three layers, it is possible to enhance your website progressively with features for the browsers that support them.

##### HTML layer: Structure
The HTML layer is where you place all the content that you want to show to your user. In the HTML layer you can place: <br>
* Images <br>
* Text <br>
* Multimedia (Video, Audio)
* Hyperlinks (links for navigating to other pages) <br>

All the content what you want to show to you user, should be placed in the structure layer. This prevents users who disabled javascript or who can't view CSS a broken website. So the website still remains accessible

##### CSS layer: Styling
The CSS layer is used to make the content and all elements of the HTML page to look better for when users are visiting your page. 

What is placed in your CSS file: <br>
* Styling and instructions for how your webpage should look like. <br>
* Media queries for responsiveness of your page based on the screen size of the device.<br>

A website can contains multiple stylesheet, but when you are doing this, you have to remember dat every CSS file requires an HTTP request to fetch. So when you have a lot of CSS files, it will affect the performance of your website.

##### Javascript layer: Behavior
The Javscript layer makes your website interactive and makes the page respond to the actions of your users. 

Also the same with CSS, a website can contains multiple script filts. But when you have a lot of scripts files, it will also affect the performance of your website.
