
function Board(el,x,y){

    this.element=document.getElementById(el);

    
    this.rows=y;
    this.col=x;
    this.fillColor="red";

    this.generate();
    this.bindEvents();

}

Board.prototype.generate = function(){


    var htmlStr="";
    var initialColor="black";

    

    for(let i=0;i<this.rows;i++){
        for(let j=0;j<this.col;j++){
            
            htmlStr=htmlStr + `<div style=${"width:"+ 600/this.col +"px;height:"+ 600/this.rows +"px;background-color:"+initialColor}  data-pos=${i+":"+j} >  </div>`;
            
            if(j!=this.col-1){

                initialColor=initialColor=="black"?"white":"black";
            }
        }
    }

    this.element.innerHTML=htmlStr;

}
Board.prototype.bindEvents = function(){
    document.addEventListener("click",(e)=>{
        if(e.target.tagName=="BODY"){
            this.generate();
        }
    })
    this.element.addEventListener("click",(e)=>{
        this.generate();
        if(e.target.dataset["pos"]){
            
            
            e.target.style.backgroundColor=this.fillColor;
            

            const [centerX,centerY]=e.target.dataset["pos"].split(":");

            var x=+centerX;
            var y=+centerY;
            console.log(x,y);
            
            //color DownDiagnol
            while(x<this.rows && y<this.col){
               
                document.querySelector(`div[data-pos="${x+":"+y}"]`).style.backgroundColor=this.fillColor;
                x++;
                y++;   
            }
            //color UPDiagnol
            x=+centerX;
            y=+centerY;
            while(x>=0 && y<this.col){
                document.querySelector(`div[data-pos="${x+":"+y}"]`).style.backgroundColor=this.fillColor;
                x--;
                y++;   
            }
            //color UPDiagnol
            x= +centerX;
            y= +centerY;
            while(x>=0 && y>=0){
                document.querySelector(`div[data-pos="${x+":"+y}"]`).style.backgroundColor=this.fillColor;
                x--;
                y--;   
            }
            //color UPDiagnol
            x=+centerX;
            y=+centerY;
            while(x<this.rows && y>=0){
                document.querySelector(`div[data-pos="${x+":"+y}"]`).style.backgroundColor=this.fillColor;
                x++;
                y--;   
            }
        }
    })
}




new Board("board",8,8);