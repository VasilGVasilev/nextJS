### If Tailwind uses classes to set styles, how do we use it to apply grid while also make elements mobile responsive?

ChatGTP
Tailwind provides a comprehensive set of classes for creating responsive grids using its Grid system. To use the grid system, you need to first define a grid container and then add grid items to it. Here's an example:


```sh
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-gray-100">1</div>
  <div class="bg-gray-200">2</div>
  <div class="bg-gray-300">3</div>
  <div class="bg-gray-400">4</div>
  <div class="bg-gray-500">5</div>
  <div class="bg-gray-600">6</div>
</div>
```

In this example, we've defined a grid container with three columns for large screens (lg:grid-cols-3), two columns for medium screens (md:grid-cols-2), and one column for small screens (default grid-cols-1). The gap-4 class adds a gap of 4 units between grid items.

To make the grid mobile-responsive, we can use the various breakpoint classes provided by Tailwind (such as sm, md, lg, xl, etc.). By adding these classes to our grid and grid items, we can change their properties at different screen sizes. For example, to change the number of columns on small screens, we can add the sm:grid-cols-1 class to the grid container. Similarly, we can add classes like sm:px-4 to adjust the padding of grid items on small screens.

Here's an updated example that includes mobile responsiveness:

```sh
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  <div class="bg-gray-100 p-4">1</div>
  <div class="bg-gray-200 p-4">2</div>
  <div class="bg-gray-300 p-4">3</div>
  <div class="bg-gray-400 p-4">4</div>
  <div class="bg-gray-500 p-4">5</div>
  <div class="bg-gray-600 p-4">6</div>
</div>
```

In this example, we've added the xl:grid-cols-5 class to set the number of columns to 5 on extra-large screens. We've also added the p-4 class to each grid item to add some padding. Finally, we've added the sm:grid-cols-2 class to the grid container to change the number of columns to 2 on small screens.

By using Tailwind's responsive classes in this way, we can create a mobile-responsive grid system with minimal code.

### Responsive design in a nutshell
Responsive design is just the first set of features are the mobile ones and for any subsequent screen size x or greater, we add other functionality, mobile first and then accroding to set resolution or bigger we make CSS for tablets or desktops

### Flex justify center
<div className="flex justify-center">This is text is justified center relative to encapsulating div</div>
same goes for 
<div><div>This inner div is justified center realtive to outer div</div></div>


### Other:

The inset CSS property is a shorthand that corresponds to the top, right, bottom, and/or left properties.