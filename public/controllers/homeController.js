angular.module('plhApp.homeController', [])
  .controller('homeController', function($scope, $http, $translate) {
    $scope.changeLanguage = function (key) {
      $translate.use(key);
    };
    $scope.topSections = {
      'trading':{
        'name':'FOR_SALE',
        'subs':[
          {
            'name': 'FASHION',
            'link': '/sale/fashion'
          }, {
            'name':'ELECTRONICS',
            'link':'/sale/electronics'
          }, {
            'name':'VIDEO_GAMES',
            'link':'/sale/games'
          }, {
            'name':'VINTAGE',
            'link':'/sale/vintage'
          }, {
            'name':'BOOKS',
            'link':'/sale/books'
          }, {
            'name':'MUSICAL_INSTRUMENTS',
            'link':'/sale/musical_instruments',
          }, {
            'name':'MUSIC',
            'link':'/sale/music'
          }, {
            'name':'TRANSPORTATIONS',
            'link':'/sale/vehicles'
          }
        ]
      },
      'renting':{
        'name':'FOR_RENT',
        'subs':[
          {
            'name': 'HOUSE',
            'link': '/rent/house'
          }, {
            'name':'APARTMENT',
            'link':'/rent/apartment'
          }, {
            'name':'ROOM_FOR_RENT',
            'link':'/rent/room'
          }, {
            'name':'OFFICE_SPACE',
            'link':'/rent/office'
          }, {
            'name':'FREELANCE_SPACE',
            'link':'/rent/freelance'
          }, {
            'name':'GENERAL_PURPOSE_SPACE',
            'link':'/rent/general'
          }, {
            'name':'SELLING_SPACE',
            'link':'/rent/selling_slot'
          }
        ]
      },
      'jobs':{
        'name':'JOBS',
        'subs':[
          {
            'name': 'HIRING',
            'link': '/jobs/hiring'
          }, {
            'name':'TEMPORARY_SEASONAL',
            'link':'/jobs/temporary'
          }, {
            'name':'ASSISTS',
            'link':'/jobs/assists'
          }, {
            'name':'TUTORING',
            'link':'/jobs/tutoring'
          }
        ]
      }
    };
    $scope.bottomSections = {
      'volunteering':{
        'name':'VOLUNTEER',
        'subs':[
          {
            'name': 'LONG_TERM',
            'link': '/volunteer/long_term'
          }, {
            'name':'TEMPORARY',
            'link':'/volunteer/temporary'
          }
        ]
      },
      'lostandfound':{
        'name':'LOST_FOUND',
        'subs':[
          {
            'name': 'GENERAL_LOST_FOUND',
            'link': '/lost/general'
          }, {
            'name':'PETS_LOST_FOUND',
            'link':'/lost/pets'
          }, {
            'name':'VEHICLES_LOST_FOUND',
            'link':'/lost/vehicles'
          }
        ]
      },
      'travel':{
        'name':'TRAVEL',
        'subs':[
          {
            'name': 'PLACE_TO_STAY',
            'link': '/travel/stay'
          }, {
            'name':'TRAVEL_PARTNERS',
            'link':'/travel/partners'
          }
        ]
      }
    };
  });