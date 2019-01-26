const photoGroups = [
  [
    { id: 1, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/1.jpg'},
    { id: 2, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/2.jpg'},
    { id: 3, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/3.jpg'},
    { id: 4, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/4.jpg'},
    { id: 5, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/5.jpg'}
  ],
  [
    { id: 6, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/6.jpg'},
    { id: 7, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/7.jpg'},
    { id: 8, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/8.jpg'},
    { id: 9, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/9.jpg'},
    { id: 10, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/10.jpg'}
  ],
  [
    { id: 11, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/11.jpg'},
    { id: 12, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/12.jpg'},
    { id: 13, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/13.jpg'},
    { id: 14, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/14.jpg'},
    { id: 15, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/15.jpg'}
  ],
  [
    { id: 16, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/16.jpg'},
    { id: 17, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/17.jpg'},
    { id: 18, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/18.jpg'},
    { id: 19, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/19.jpg'},
    { id: 20, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/20.jpg'}
  ],
  [
    { id: 21, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/21.jpg'},
    { id: 22, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/22.jpg'},
    { id: 23, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/23.jpg'},
    { id: 24, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/24.jpg'},
    { id: 25, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery/25.jpg'}
  ],
  [
    { id: 1, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/1.jpg'},
    { id: 2, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/2.jpg'},
    { id: 3, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/3.jpg'},
    { id: 4, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/4.jpg'},
    { id: 5, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/5.jpg'}
  ],
  [
    { id: 6, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/6.jpg'},
    { id: 7, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/7.jpg'},
    { id: 8, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/8.jpg'},
    { id: 9, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/9.jpg'},
    { id: 10, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/10.jpg'}
  ],
  [
    { id: 11, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/11.jpg'},
    { id: 12, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/12.jpg'},
    { id: 13, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/13.jpg'},
    { id: 14, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/14.jpg'},
    { id: 15, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/15.jpg'}
  ],
  [
    { id: 16, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/16.jpg'},
    { id: 17, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/17.jpg'},
    { id: 18, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/18.jpg'},
    { id: 19, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/19.jpg'},
    { id: 20, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/20.jpg'}
  ],
  [
    { id: 21, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/21.jpg'},
    { id: 22, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/22.jpg'},
    { id: 23, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/23.jpg'},
    { id: 24, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/24.jpg'},
    { id: 25, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/25.jpg'}
  ],
  [
    { id: 1, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/1.jpg'},
    { id: 2, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/2.jpg'},
    { id: 3, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/3.jpg'},
    { id: 4, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/4.jpg'},
    { id: 5, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/5.jpg'}
  ],
  [
    { id: 6, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/6.jpg'},
    { id: 7, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/7.jpg'},
    { id: 8, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/8.jpg'},
    { id: 9, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/9.jpg'},
    { id: 10, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/10.jpg'}
  ],
  [
    { id: 11, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/11.jpg'},
    { id: 12, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/12.jpg'},
    { id: 13, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/13.jpg'},
    { id: 14, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/14.jpg'},
    { id: 15, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/15.jpg'}
  ],
  [
    { id: 16, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/16.jpg'},
    { id: 17, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/17.jpg'},
    { id: 18, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/18.jpg'},
    { id: 19, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/19.jpg'},
    { id: 20, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/20.jpg'}
  ],
  [
    { id: 21, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/21.jpg'},
    { id: 22, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/22.jpg'},
    { id: 23, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/23.jpg'},
    { id: 24, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/24.jpg'},
    { id: 25, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery3/25.jpg'}
  ],
  [
    { id: 1, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/1.jpg'},
    { id: 2, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/2.jpg'},
    { id: 3, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/3.jpg'},
    { id: 4, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/4.jpg'},
    { id: 5, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/5.jpg'}
  ],
  [
    { id: 6, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/6.jpg'},
    { id: 7, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/7.jpg'},
    { id: 8, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/8.jpg'},
    { id: 9, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/9.jpg'},
    { id: 10, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/10.jpg'}
  ],
  [
    { id: 11, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/11.jpg'},
    { id: 12, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/12.jpg'},
    { id: 13, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/13.jpg'},
    { id: 14, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/14.jpg'},
    { id: 15, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/15.jpg'}
  ],
  [
    { id: 16, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/16.jpg'},
    { id: 17, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/17.jpg'},
    { id: 18, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/18.jpg'},
    { id: 19, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/19.jpg'},
    { id: 20, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/20.jpg'}
  ],
  [
    { id: 21, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/21.jpg'},
    { id: 22, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/22.jpg'},
    { id: 23, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/23.jpg'},
    { id: 24, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/24.jpg'},
    { id: 25, location: 'https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery4/25.jpg'}
  ]
]

module.exports = {
  photoGroups
}