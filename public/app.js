var plhApp = angular.module('plhApp', ['ngRoute','pascalprecht.translate', 'plhApp.homeController', 'plhApp.addController', 'plhApp.postsController', 'plhApp.viewController']);

plhApp.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'HOME': 'Home',
    'CREATE_LISTING': 'Create a listing',
    'VIEW_POSTS': 'View all posts',
    'LOCATION': 'Location',
    'LANGUAGE': 'Language',
    'SEARCH': 'Search...',
    'CALENDAR': 'Calendar',
    'FOR_SALE': 'For Sale',
    'FOR_RENT': 'For Rent',
    'FASHION': 'Fashion',
    'ELECTRONICS': 'Electronics',
    'VIDEO_GAMES': 'Video Games/Board Games',
    'VINTAGE': 'Vintage',
    'BOOKS': 'Books',
    'MUSICAL_INSTRUMENTS': 'Musical Instruments',
    'MUSIC': 'Music Related',
    'TRANSPORTATIONS': 'Transportations',
    'HOUSE': 'House',
    'APARTMENT': 'Apartment',
    'ROOM_FOR_RENT': 'Room for Rent',
    'OFFICE_SPACE': 'Office Space',
    'FREELANCE_SPACE': 'Freelance Space',
    'GENERAL_PURPOSE_SPACE': 'General Purpose',
    'SELLING_SPACE': 'Selling Slot',
    'JOBS': 'Jobs',
    'HIRING': 'Hiring',
    'TEMPORARY_SEASONAL': 'Temporary/Seasonal',
    'ASSISTS': 'Assistants',
    'TUTORING': 'Tutoring',
    'VOLUNTEER': 'Volunteers',
    'LONG_TERM': 'Long-term',
    'TEMPORARY': 'Temporary',
    'LOST_FOUND': 'Lost and Found',
    'GENERAL_LOST_FOUND': 'General',
    'PETS_LOST_FOUND': 'Pets',
    'VEHICLES_LOST_FOUND': 'Vehicles',
    'TRAVEL': 'Travel',
    'PLACE_TO_STAY': 'Place to Stay',
    'TRAVEL_PARTNERS': 'Travel Partners',
    'CONTACT_DETAILS': 'Contact Details',
    'NAME': 'Name',
    'EMAIL': 'Email',
    'PHONE': 'Phone',
    'CITY': 'City',
    'GENERAL_LOCATION': 'General Location',
    'ITEM_DETAILS': 'Item Details',
    'PRICE': 'Price',
    'CONDITION': 'Condition',
    'MAKE_MANUFACTURER': 'Make/Manufacturer',
    'SIZE': 'Size',
    'COLOR': 'Color',
    'TITLE': 'Title',
    'POSTING': 'Posting',
    'SUBMIT': 'Submit'
  });

  $translateProvider.translations('vnm', {
    'HOME': 'Trang Chủ',
    'CREATE_LISTING': 'Đăng Bài',
    'VIEW_POSTS': 'Xem Tất Cả',
    'LOCATION': 'Địa Điểm',
    'LANGUAGE': 'Ngôn Ngữ',
    'SEARCH': 'Tìm Kiếm...',
    'CALENDAR': 'Lịch',
    'FOR_SALE': 'Mua Bán',
    'FOR_RENT': 'Cho Thuê',
    'FASHION': 'Thời Trang',
    'ELECTRONICS': 'Đồ Điện/Điện Tử',
    'VIDEO_GAMES': 'Video Games/Games Các Loại',
    'VINTAGE': 'Đồ Cổ',
    'BOOKS': 'Sách/Truyện',
    'MUSICAL_INSTRUMENTS': 'Nhạc Cụ',
    'MUSIC': 'Âm Nhạc/Liên Quan',
    'TRANSPORTATIONS': 'Đi Lại/Vận Chuyển',
    'HOUSE': 'Nhà Bán/Cho Thuê',
    'APARTMENT': 'Căn Hộ',
    'ROOM_FOR_RENT': 'Phòng Cho Thuê',
    'OFFICE_SPACE': 'Văn Phòng',
    'FREELANCE_SPACE': 'Chỗ Freelance',
    'GENERAL_PURPOSE_SPACE': 'Mặt Bằng Nói Chung',
    'SELLING_SPACE': 'Nhờ Bán',
    'JOBS': 'Việc Làm',
    'HIRING': 'Tuyển Dài Hạn',
    'TEMPORARY_SEASONAL': 'Tuyển Ngắn Hạn',
    'ASSISTS': 'Phụ Tá',
    'TUTORING': 'Dạy Thêm',
    'VOLUNTEER': 'Tình Nguyện',
    'LONG_TERM': 'Dài Hạn',
    'TEMPORARY': 'Tạm Thời',
    'LOST_FOUND': 'Mất Đồ/Cớ Mất',
    'GENERAL_LOST_FOUND': 'Chung',
    'PETS_LOST_FOUND': 'Thú Nuôi',
    'VEHICLES_LOST_FOUND': 'Xe Cộ',
    'TRAVEL': 'Du Lịch/Phượt',
    'PLACE_TO_STAY': 'Chỗ Ở Nhờ',
    'TRAVEL_PARTNERS': 'Người Cùng Đi',
    'CONTACT_DETAILS': 'Thông Tin Liên Lạc',
    'NAME': 'Tên',
    'EMAIL': 'Email',
    'PHONE': 'Điện Thoại',
    'CITY': 'Thành Phố',
    'GENERAL_LOCATION': 'Nơi Giao Dịch',
    'ITEM_DETAILS': 'Chi Tiết',
    'PRICE': 'Giá',
    'CONDITION': 'Tình Trạng',
    'MAKE_MANUFACTURER': 'Nhãn Hiệu/Nhà Sản Xuất',
    'SIZE': 'Kích Cỡ',
    'COLOR': 'Màu Sắc',
    'TITLE': 'Tên Bài Đăng',
    'POSTING': 'Nội Dung',
    'SUBMIT': 'Đăng'
  });

  $translateProvider.preferredLanguage('vnm');
}]);

plhApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
    	when('/', {
    		templateUrl: 'templates/home.html',
    		controller: 'homeController'
    	}).
      when('/vnm', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      }).
    	when('/add', {
    		templateUrl: 'templates/add.html',
    		controller: 'addController'
    	}).
      when('/posts', {
        templateUrl: 'templates/posts.html',
        controller: 'postsController'
      }).
      when('/posts/:id', {
        templateUrl: 'templates/view.html',
        controller: 'viewController'
      }).
	    otherwise({
	      redirectTo: '/'
	    });

}]);