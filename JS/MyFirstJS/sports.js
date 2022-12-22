const sports =[
    {

        name :"Virat Kohli",
        sname :"Cricket",
        score :"20,000 runs",
        stats :["Cricket","20,000 runs"]

    },

    {
        name :"Luka Modric",
        sname :"Football",
        score :"200 goals"


    },
    {
        name :"M S Dhoni",
        sname :"Cricket",
        score :"500,00 runs"


    },

    {
        name :"Pele",
        sname :"Football",
        score :"400 goals"


    },
    {
        name :"Lionel Messi",
        sname :"Football",
        score :"500 goals"


    }

]
displayStats("Lionel Messi");
var p ={name :"Rohit Sharma", sname:"Cricket",score:" 70,000 runs"}
pushPlayers(p);
findSports("Cricket");

 function displayStats(player){
    var i =sports.findIndex(sports => sports.name ==player)
    console.log("Name : " + sports[i].name);
    console.log("Sports : " + sports[i].sname);
    console.log("score: " + sports[i].score);


 }

 function pushPlayers(players){
    sports.push(players);
    console.log(sports);
 }

 function findSports(sportName){

    for(var j=0;j<sports.length;j++){
        if(sports[j].sname==sportName){
            console.log("Name : " + sports[j].name);
            console.log("Sports : " + sports[j].sname);

        }

    }    
    
 }  