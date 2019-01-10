# FireBnb Gallery 

**A simple, minimalist gallery application built with React and Node.**

This application is a singular piece of a larger microservices architected application. The service itself uses only a few core technologies, most notably React, Node, and MongoDB.

**Other related services:**
  - https://github.com/rpt09-mulder/rooms
  - https://github.com/rpt09-mulder/booking
  - https://github.com/rpt09-mulder/reviews
  

  ---

## How it works:

In the browser, this application will use the last segment of the URL's path to query the database for a document with a matching "id" field. 

For example, someone visits your app at: 
```bash
https://www.myapp.com/birds
```

The application then queries the database for the document with an id of "birds", and returns all of the associated photos to the gallery for display.

---

## Quick start
While the application is flexible enough to be modified/extended to fit your needs without too much fuss, here's a easy guide to get started.

Clone this repo:
```bash
$ git clone https://github.com/rpt09-mulder/gallery
```

Install dependencies:
```bash
$ npm install
```






<!-- 
still working on this stuff

#### App.jsx
The main parent component that renders the Photo Grid and Carousel components. This is also responsible for handling the initial GET request for the photos that populate the gallery.

#### Photo Grid
A responsive grid of images, built with (you guessed it) CSS Grid. The grid is constructed around a parent stateful component that relies upon a few purely presentational stateless components. 

#### Carousel
A responsive image slider. This component functions as a detail view of the images in the photo grid. It is also constructed of a parent component with state that also displays a few functional components. -->

