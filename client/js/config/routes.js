var customers_app = angular.module('customers_app', ['ngRoute']);
customers_app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'static/partials/dashboard.html'
    })
    .when('/products',{
        templateUrl: 'static/partials/products.html'
    })
    .when('/orders',{
        templateUrl: 'static/partials/orders.html'
    })
    .when('/customers',{
        templateUrl: 'static/partials/customers.html'
    })
    .when('/settings',{
        templateUrl: 'static/partials/settings.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
