angular.module('plhApp.homeVnmController', [])
  .controller('homeVnmController', function($scope, $http) {
    $scope.topSections = {
      'trading':{
        'name':'Mua',
        'subs':[
          {
            'name': 'Fashion',
            'link': '/sale/fashion'
          }, {
            'name':'Electronics',
            'link':'/sale/electronics'
          }, {
            'name':'Video Games',
            'link':'/sale/games'
          }, {
            'name':'Vintage',
            'link':'/sale/vintage'
          }, {
            'name':'Books',
            'link':'/sale/books'
          }, {
            'name':'Musical Instruments',
            'link':'/sale/musical_instruments',
          }, {
            'name':'Music',
            'link':'/sale/music'
          }, {
            'name':'Transportation',
            'link':'/sale/vehicles'
          }
        ]
      },
      'renting':{
        'name':'For Rent',
        'subs':[
          {
            'name': 'House',
            'link': '/rent/house'
          }, {
            'name':'Apartment',
            'link':'/rent/apartment'
          }, {
            'name':'Room for Rent',
            'link':'/rent/room'
          }, {
            'name':'Office Space',
            'link':'/rent/office'
          }, {
            'name':'Freelance Space',
            'link':'/rent/freelance'
          }, {
            'name':'General Purpose',
            'link':'/rent/general'
          }, {
            'name':'Selling Slot',
            'link':'/rent/selling_slot'
          }
        ]
      },
      'jobs':{
        'name':'Jobs',
        'subs':[
          {
            'name': 'Hiring',
            'link': '/jobs/hiring'
          }, {
            'name':'Temporary/Seasonal',
            'link':'/jobs/temporary'
          }, {
            'name':'Assisting',
            'link':'/jobs/assisting'
          }, {
            'name':'Tutoring',
            'link':'/jobs/tutoring'
          }
        ]
      }
    };
    $scope.bottomSections = {
      'volunteering':{
        'name':'Volunteer',
        'subs':[
          {
            'name': 'Long-term',
            'link': '/volunteer/long_term'
          }, {
            'name':'Temporary',
            'link':'/volunteer/temporary'
          }
        ]
      },
      'lostandfound':{
        'name':'Lost and Found',
        'subs':[
          {
            'name': 'General',
            'link': '/lost/general'
          }, {
            'name':'Pets',
            'link':'/lost/pets'
          }, {
            'name':'Vehicles',
            'link':'/lost/vehicles'
          }
        ]
      },
      'travel':{
        'name':'Travel',
        'subs':[
          {
            'name': 'Place to Stay',
            'link': '/travel/stay'
          }, {
            'name':'Traveling Partners',
            'link':'/travel/partners'
          }
        ]
      }
    };
  });