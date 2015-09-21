# graphite
yeah there are others called the same, just like there are plenty of rocks around

this lib is designed to enable you to have nice D3-driven graphs in your HTML, without needing to JS all the things.
just write HTML attributes.

pull requests for more / better / exotic attributes welcome

NOTES:
- taking some inspiration from http://www.toptal.com/d3-js/towards-reusable-d3-js-charts as to a strategy for building reusable, configurable charts
  - to this end: allow for div attribute approach, but primarily for a code-based approach?
  - so would be something like searching the DOM for all class="graph", and applying the process to these elements automatically (whereas the user can use dropdown menus, other hooks etc for the code-based approach too)
- react components? these could be basically wrappers around certain configurations of a chart: i.e. a BarChart component is just a component set up to make a bar chart, and expects the data, config vars through the props
  - in this sense, would it make more sense just to have a Chart component, and provide the type as an extra config prop?
- use Ramda approach of breaking out useful chunks of logic into functions that are curried
- demo page as being able to hook into datasets online, and draw graphs of them? not just CSV?
  - or local datasets to begin with, might be useful for some EDA analytics
