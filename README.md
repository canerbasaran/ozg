# ozg

Event handler by interval for tasks

## Usage
```js
const ozg = require("ozg");

//new ozg(interval_millisecond, select_field_in_data)
const firstTask = new ozg(6000, "created_at");

//return items array when fired at interval
firstTask.on("event", (item) => {
   console.log(item);
});

//.add(data, ts_millisecond)
firstTask.add({ "a": 1 }, 1560326979493);
firstTask.add({ "b": 100, "created_at": 1560326980493 });
```

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install ozg
```

## License

(MIT)

Copyright (c) 2018 Caner Basaran &lt;basaran.caner@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.