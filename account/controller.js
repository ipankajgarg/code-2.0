app.controller("myctrl",($scope,myfactory)=>{
     userinfo();
    function userinfo()
    {
   var token = myfactory.gettoken();
        
        var promise = myfactory.info(token);
    promise.then(function(data){
        console.log(data);
        console.log(data.FirstName)
        $scope.FirstName = data.user.first_name;
        $scope.LastName = data.user.last_name;
        $scope.EmailId = data.user.email;
        $scope.Phoneno = data.PhoneNo;
        $scope.password = data.password
        }
      ,function(err){
        alert("err");   
    } 
    )
}
    $scope.hello = "hello"
})