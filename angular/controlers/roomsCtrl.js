
var app=angular.module('eCalc', []);

//app.controller('linesCtrl', function($scope){
//    $scope.activeLine="none";
//});


app.controller('roomsCtrl', function($scope){
    $scope.allRooms = getAllRooms();
    $scope.allLines = getAllLines();
    $scope.allStates = getAllStates();
    $scope.activeLine ="none";
   
   //=====================AddItem========================== 
    $scope.addItem = function (room,item_name,watt,item_line){
        var item = { id:1,name:item_name,w:parseInt(watt),line:item_line,room_id:room.id,active:false };
        $scope.allRooms[room.id-1].items.push(item);
        this.addMe_name="";
        this.AddMe_w="";
        this.AddMe_line="";
    };
    //=============================================================
    $scope.totalWatt = sumAllActiveWatt();
    //=============================================================
    $scope.updateW = function () {
       $scope.totalWatt=sumAllActiveWatt();
      };
    
    //==============================================================
    
    $scope.showLine = function (line) {
        currentLineIndex = getLineIndexByName($scope.activeLine);
        $scope.allLines[currentLineIndex].active = 0;
        $scope.activeLine=line.name;
        line.active=1;
    };
    //===============================================================

    $scope.lineClass = function(item){
        var lineIndex=getLineIndexByName(item.line);
       if ($scope.allLines[lineIndex].active==1){
           return "active";
         }else{
             return "not-active";
            }   
        };

    $scope.sumActiveWattOnLine=function(line){
        var all = getAllActiveItems();
        var total=0;
        for(i=0;i<all.length;i++){
            if(all[i].line==line.name){
                total+=all[i].w;
            }
        }
        return total;
    };

    
//==========================================================

function getAllActiveItems(){
    var allRooms1 = getAllRooms();
    var allActiveItems1 =[];
    var room1 = [];
    for(i=0;i<allRooms1.length;i++){
         room1=allRooms1[i];
        for(y=0;y<room1.items.length;y++){
            if (room1.items[y].active){
                allActiveItems1.push(room1.items[y]);
            }
        }
    }
    return allActiveItems1;
}

function sumAllActiveWatt(){
    var w=0;
    var aai = getAllActiveItems();
    for(i=0;i<aai.length;i++){
        w=w+aai[i].w;
    }
    return w;
}



$scope.loadData = function($http){
    $http.get("Data.html").then(function(response){
        //$scope.allRooms = response.data.records;
        window.alert('response')
    });
}
});
