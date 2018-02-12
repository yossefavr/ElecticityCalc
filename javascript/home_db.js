
//=============electrical Item list================================================ 
var item1 = { id:1, name: "מזגן", w:500,line:"A",room_id:1,active:true };
var item2 = { id:2, name: "טלויזיה",w:200,line:"A",room_id:1,active:false };
var item3 = { id:3, name: "מחשב",w:100,line:"B",room_id:1,active:false };
var item4 = { id:4, name: "תאורה1",w:100,line:"B",room_id:1,active:false };
var item5 = { id:5, name: "מזגן",w:700,line:"C",room_id:2,active:true };
var item6 = { id:6, name: "תנור חימום",w:200,line:"A",room_id:2,active:false };
var item7 = { id:7, name: "מכונת כביסה", w:500,line:"A",room_id:1,active:true };
var item8 = { id:8, name: "מדיח כלים",w:200,line:"A",room_id:1,active:false };
var item9 = { id:9, name: "תנור אפייה",w:100,line:"B",room_id:1,active:false };
var item10 = { id:10, name: "אקס בוקס",w:100,line:"B",room_id:1,active:false };
var item11 = { id:11, name: "מטען טלפון",w:700,line:"C",room_id:2,active:true };
var item12 = { id:12, name: "רדיאטור",w:200,line:"A",room_id:2,active:false };
var allItems = [item1, item2, item3, item4,item5, item6];
//================rooms list=======================================================
var room1={id:1 , name:"סלון",items:[item1,item2,item3]};
var room2={id:2 , name:"מטבח",items:[item4,item5]};
var room3={id:3 , name:"חדר שירות",items:[item6]};
var room4={id:4 , name:"מקלחת ראשית",items:[item7]};
var room5={id:5 , name:"חדר אמילי",items:[item8,item9]};
var room6={id:6 , name:"חדר מיכאל",items:[item10]};
var room7={id:7 , name:"חדר הורים",items:[item11]};
var room7={id:7 , name:"חצר",items:[item12]};
var room8={id:7 , name:"מחסן",items:[item12]};
var allRooms = [room1,room2,room3,room4,room5,room6,room7,room8];
//================line list=========================================================
var line1={name:"A",MaxAmp:16,active:0};
var line2={name:"B",MaxAmp:16,active:0};
var line3={name:"C",MaxAmp:16,active:0};
var line4={name:"D",MaxAmp:16,active:0};
var line5={name:"E",MaxAmp:16,active:0};
var line6={name:"F",MaxAmp:16,active:0};
var allLines = [line1,line2,line3,line4,line5,line6];
///===================================================================================
var state1={id:1,allRooms:allRooms};
var allStates={state1};


function getAllRooms(){
    return allRooms;
}

function getAllItems(){
    return allItems;
}

function getAllLines(){
    return allLines;
}

function getAllStates(){
    return allStates;
}



function saveData(){    
    var jsonData = JSON.stringify(allRooms);    
    download(jsonData, 'ElecticityCalculator.txt', 'text/plain');
}

function download(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}
        
function getLineIndexByName(lineName){
  // var LineIndex=-1;
  // window.alert("window.alert(allLines[LineIndex])"+allLines[LineIndex]);
    for(i=0;i<allLines.length;i++){
        if(allLines[i].name==lineName){
            LineIndex=i;
        }
    }
    //window.alert("fack you---"+allLines[LineIndex].name);
    return LineIndex;
}







  