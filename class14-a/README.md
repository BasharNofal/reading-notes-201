## CSS Transforms, Transitions, and Animations

Transform property is a new property came with CSS3. Transform allows you apply changes on elements size and position simpler than the ways we learnt previously, these changes can be 2D and 3D.


### 2D Transform

#### Rotate 

Rotate takes both positive and negative values, where negative valuesrotates the element counter clockwise and positive values clockwise, as in the following examples:

![rotate](img/1.PNG)

The grey squares are with no transform effects.


#### Scale

Scale default value is 1, so any value less than 1 will shrink the element. 

![scale](img/2.PNG)


Also you can change width or height only:

![scale2](img/3.PNG)


#### Translate

Think of translate as if the element was on the center of the cartesian coordinates, you can move the element towards all direction, where negative values moves the element either left or down and positive values right or up;

![translate](img/4.PNG)


#### Skew

![skew](img/5.PNG)


And by combining some of the previous properties:

![cube](img/6.PNG)

![cube2](img/7.PNG)


#### Transform Origin

The default origin value (50%,50%) on the cartesian coordinates. 

![transform origin](img/8.PNG)


### 3D Trasnform

#### Perspective 

Think of perspective as the depth dimension or the distance between you and something else. Perspective can be used either as a property by its own or inside transform property. Perspective property has to be used with the other transform properties for it to get noticed.

![perspective](img/9.PNG)


#### 3D Rotate

The same as 2D rotate but with the added Z-axis, X-axis controls the depth, Y-axis replaces the X-axis in 2D, and Z-axis replaces the Y-axis (3D cartesian coordinates). 

![3D rotate](img/10.PNG)


#### 3D Scale

It doesn't make sense to 3D scale a 2D object, So this property used with the other transform properties.

![3D scale](img/11.PNG)


#### 3D Translate

![3D Translate](img/12.PNG)


#### 3D Translate Origin

![3D Translate Origin](img/13.PNG)

![3D Translate Origin2](img/14.PNG)


