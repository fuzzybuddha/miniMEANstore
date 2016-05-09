
customers_app.controller('CustomersController', function($scope, CustomerFactory){

  $scope.customers = [];
  $scope.new_customer;
  $scope.dup_msg = "";

  CustomerFactory.getcustomers(function(data){
    $scope.customers = data;
  });

  $scope.formatDate = function(created_at){
    return moment(created_at).format('MMMM Do, YYYY');
  }

  $scope.addcustomer = function(){
		if($scope.isDuplicate()){
			$scope.dup_msg = "can\'t add the name because it is already used!";
		}else{
			CustomerFactory.create($scope.new_customer, function(data){
        console.log(data);
        console.log(data[0]);
        $scope.customers = data;
				$scope.new_customer = {};
			});
		}
	}

  $scope.removecustomer = function(customer){
    CustomerFactory.delete(customer, function(){
      $scope.new_customer = {};
    })
  }

  $scope.isDuplicate = function(){

		for(var i=0;i<$scope.customers.length;i++){
			if($scope.new_customer !== undefined){
				if($scope.new_customer.name == $scope.customers[i].name){
					$scope.dup_msg = "name is already used!";
					return true;
				}
			}
		}
		return false;
	}
});
