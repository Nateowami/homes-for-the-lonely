Homes for the Lonely
====================

This is a website for a particular adoption advocacy group, pushed to GitHub to keep things simple. Contributions aren't exactly expected, but they're certainly welcome.

Running the web server
======================

Clone the project with `git clone`, `cd` into the directory, run `npm install`, and then launch with `node .`. You'll also need MongoDB running on port 27017 (the default port for MongoDB). Refer to [the MongoDB docs](https://docs.mongodb.org/manual/) for installation instructions. You'll then need to setup a database named `hftl` with a collection named `kidscollection` to store information about the kids. When you add kids (with dummy values presumably) make sure you set `current` to `true` or they won't show up on the webpages. The properties to set include `name`, `dob` (date of birth), `special_needs`, and `status` (Optional. This is for indicating whether a child is in foster care, in the process of being adopted, etc.).
