app.controller("myctrl",($scope,myfactory,$window)=>{
    default1();
    default2()
     default3();
    users();
    if(localStorage.array){
   dataarr();           
    }
    
    $scope.return= (i)=>{
        $scope.FirstName = i.FirstName
        $scope.id = i.id;
            var promise = myfactory.getmessage(i.id);
    promise.then((data)=>{
				
            console.log(data)
        $scope.para = data;
        console.log($scope.para);
        
//$scope.user = data
			},(err)=>{
				
				alert("image not sent");
			})
    }
    function callagain(id){
        
        console.log(id)
                var promise = myfactory.getmessage($scope.id);
    promise.then((data)=>{
				
            console.log(data)
        $scope.para = data;
        console.log($scope.para);
        $scope.msgtxt = "";
//$scope.user = data
			},(err)=>{
				
				
			})
    }
    
    $scope.message = (id)=>{
        var obj = {};
        obj.msg = $scope.msgtxt
        obj.Rec = $scope.id;
        console.log($scope.id)
         var promise = myfactory.messagepost(obj);
    promise.then((data)=>{
	      callagain(id);
        
        console.log(obj)
                
        console.log(data)
        
//$scope.user = data
			},(err)=>{
				
				alert("image not sent");
			})
    }
   function users(){
         var promise = myfactory.users(4);
    promise.then((data)=>{
				
            console.log(data)
$scope.user = data
			},(err)=>{
				
				alert("image not sent");
			})
    }
     $scope.check = ()=>{
         if($scope.search==""){
             $scope.span=false
         }
         else{
             $scope.span = true;
         }
     }
    function default1(){
    var promise = myfactory.default(4);
    promise.then((data)=>{
				
            console.log(data)
$scope.shift = data
			},(err)=>{
				
//				alert("image not sent");
			})
}
    function default2(){
    var promise = myfactory.default(2);
    promise.then((data)=>{
				
            console.log(data)
$scope.health = data
			},(err)=>{
				
//				alert("image not sent");
			})
}
     function default3(){
    var promise = myfactory.default(3);
    promise.then((data)=>{
				
            console.log(data)
$scope.repair= data
			},(err)=>{
				
//				alert("image not sent");
			})
}
    $scope.next = (id)=>{
       localStorage.setItem("storeid",id);
if(id==1){
    $window.location.href = "bill.html"
}
        else{
            $window.location.href = "all.html"
        }
    }
    $scope.complaint = ()=>{
//        console.log($scope.text)
//        console.log($scope.views)
        var obj = {};
        console.log(obj);
            obj.Subject = $scope.text;
            obj.Body = $scope.views;
        myfactory.myarr(obj);
        dataarr();
    }
        function dataarr(){
            console.log(localStorage.getItem("array"))
        var data=localStorage.getItem("array");
            $scope.pending = JSON.parse(data);
        }
        
//        var promise = myfactory.postcomplaint(obj)
//        promise.then((data)=>{
//				
//            console.log(data)
//
//			},(err)=>{
//				
//				alert("done");
//			})
    
//    function getrequest(){
//         var promise = myfactory.getcomplaint()
//        promise.then((data)=>{
//				
//            console.log(data)
//$scope.pending = data
//			},(err)=>{
//				
//				alert("image not sent");
//			}) 
//    }
})