Homes for the Lonely
====================

This is a website for a particular adoption advocacy group, pushed to GitHub to keep things simple. Contributions aren't exactly expected, but they're certainly welcome.

Running the web server
======================

Clone the project with `git clone`, `cd` into the directory, run `npm install`, and then launch with `node .`. You'll also need MongoDB running on port 27017 (the default port for MongoDB). Refer to [the MongoDB docs](https://docs.mongodb.org/manual/) for installation instructions. You'll then need to setup a database named `hftl` with a collection named `kidscollection` to store information about the kids. When you add kids (with dummy values presumably) make sure you set `current` to `true` or they won't show up on the webpages. The properties to set include `name`, `dob` (date of birth), `special_needs`, and `status` (Optional. This is for indicating whether a child is in foster care, in the process of being adopted, etc.).

License
=======

The Billy font (currently located in `public/fonts/billy.ttf`) has its own non-free license included in its meta-data, which is as follows:
> Billy is free for personal use. To use Billy commerically you must first donate to me. You can donate any amount you please - consider it a 'Pay what you want' situation! Email me to find out how to do this. Once the donation has gone throuhh, you are free to use Billy in your commerical projects. However, you must not recreate, redistribute, or bastardise Billy in any way - he's lovely just the way he is!

The meta-data also includes a license URL, which points to <https://www.behance.net/gallery/16190081/billy-typeface-(free)>, and perhaps clarifies the license a little.

All other files are licensed under the MIT license, which follows:

The MIT License (MIT)

Copyright (c) 2016 Nathaniel Paulus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

