Charterial
==========

HTML Canvas based charting library for drawing performant graphs.


**This is still in the very early works.**

Charterial will take structured data (depending on the type of chart you want) and render a chart using HTML5 canvas.
Charterial is built on top of the wonderful [Paper.js](http://paperjs.org/).


What Will Charterial Do?
------------------------

Charterial will draw various types of charts (line graphs, bar graphs, pie charts, etc).
It will also allows users to register callbacks for information on mouse movement and
mouse interactions (mouse move, mouse drag, mouse click, etc).  It will send relevant data
along with those mouse interactions (coordinates, nearest line or pie chart, etc).

Users will be able to ask Charterial to show or hide timeseries or other data entries.

What Will Charterial Not Do?
----------------------------

Charterial will not provide legends or rollover tooltips.  However, a future project (`charterial-react`)
will offer those features, along with other higher level interaction coordination.

Please Help!
------------

There is a lot of work to do.  I would appreciate the help!  Please send pull requests, file bug reports, 
ask questions, etc.  *Seriously:* please help!


Running the demo
----------------

`npm run demo`

Then point your browser at http://localhost:8080
