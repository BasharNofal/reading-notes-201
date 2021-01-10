##  Assorted Topics

###  Duckett HTML book

#### Chapter 16: “Images” (pp.406-427)

You can control the size of an image by changing the width and the height properties in CSS

![image size](img/1.PNG)

![result](img/Capture2.PNG)


To center an image, you need to change their display property to block instead of the default value which is inline and then you can do one of two things:

* Change the text-align property of the containig element to center.
* Select the value auto of the property margin of the image.

![center an image](img/2.PNG)


When choosing an image background, You can choose between repeating the image or not assumming that the image size isn't big enough, this can be done by the property `background-repeat:;` as following:

![image repeat](img/3.PNG)


When selecting no repeat there is a property called `background-attachment` where you can selecting between scrolling the image as the user scrolls or make it in fixed position

![background attachment](img/4.PNG)


`Background-position` allows you change the position of the background and you can choose between 9 different positioins

![background position](img/5.PNG)

![background position 2](img/6.PNG)


#### Chapter 19: “Practical Information” (476-492)

Search Engine Optimization (SEO): which is practices that you do to improve your chances in appearing in the search engine results, this can be done by adding the following:

1- Page title.
2- Page url.
3- Headings.
4- Text.
5- Links.
6- Image alt attribute.
7- Page description.

All of the above have to give a good description of what the page is about, and contain keywords which people is gonna search for.

#### Audio and Video Tags in HTML

To link an audio file use the following commands:

`<audio src="" controls autoplay volume loop muted></audio>`

controls: for playback controls.
autoplay: to play the the audio file when the page loads up.
volume: to digitally control the volume.
loop: auto replay the audio.
muted: mute the audio when the page loads up.

`<video src="" controls autoplay width height poster volume loop muted></video>`

width and height: for changing the dimension of the video.
poster: thumbnail image.

