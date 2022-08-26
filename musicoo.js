class Main{
    constructor(){
     var player = document.getElementById("Main");
     player.style.height = screen.height + "px" ;
     if(screen.width<620){
         player.style.width = screen.width + "px";

     }
     var paid =document.getElementById("moh");
     paid.style.height = screen.height-280 + "px" ;
    }
}
onload = new Main();
// buttons
class Audioplayer{
    constructor(){
        this.audioo = document.getElementById("audioo");
        this.paragra = document.getElementById("radio_title");
        this.play_button = document.getElementById("playbutton");
        this.played;
        this.play_button.addEventListener("click",()=>{
            this.playbutton();

        }); 
        

        this.names_radio =[];
        this.names_radio [0]=" QURAN EGYPT اذاعة القرأن الكريم القاهرة";
        this.names_radio [1]=" QURAN KSA اذاعة القرأن الكريم مكة المكرمه  ";
        this.names_radio [2]=" MASR راديو مصر";
        this.names_radio [3]=" RADIO 90 90 راديو ";
        this.names_radio [4]=" MAHTET MASR محطة مصر";
        this.names_radio [5]=" MASR EL GEDIDA راديو مصر الجديده ";
        this.names_radio [6]=" NOGOUM FM راديو نجوم اف ام ";
        this.names_radio [7]=" MEGA FM ميجا اف ام  ";
        this.names_radio [8]=" ARAB MIX عرب ميكس اف ام ";
        this.names_radio [9]=" NILE FM نيل اف ام ";
        this.names_radio [10]=" M3ak3latool  راديو معاك على طول";
        this.names_radio [11]=" ARAB MIX عرب ميكس ";
        this.names_radio [12]=" RADIO HITS راديو هيتس ";
        this.names_radio [13]=" BANHA TARAB راديو بنها طرب";
        this.names_radio [14]=" EL GAUNDA FM الجونة";
        this.names_radio [15]=" RADIO SHABA راديو شباب ";
        this.names_radio [16]=" RADIO MASRAWY راديو مصراوى ";
        this.names_radio [17]=" ELGONAIR راديو جونير ";
        this.names_radio [18]=" RADIO SOTAK راديو صوتك ";
        this.names_radio [19]=" NOTA ARABIA نوته عربيه ";
        this.names_radio [20]=" NOGOUM MIX 320 نجوم ميكس  ";
        this.names_radio [21]=" CAIRO BUSINESS  كايرو بيزنس";
        this.names_radio [22]=" SHOROUK RAMADAN شروق رمضان    ";
        this.names_radio [23]=" ALADB ALARABI الادب العربي  ";
    

        this.source_audio =[];
        this.source_audio [0] ="http://n05.radiojar.com/8s5u5tpdtwzuv?rj-ttl=5&rj-tok=AAABgs8G9gEAE-wDtGCcZCsi6w"
        this.source_audio [1] ="https://stream.radiojar.com/4wqre23fytzuv"
        this.source_audio [2] ="https://live.radiomasr.net/RADIOMASR"
        this.source_audio [3] ="https://9090streaming.mobtada.com/9090FMEGYPT"
        this.source_audio [4] ="https://s3.radio.co/s9cb11828c/listen"
        this.source_audio [5] ="https://streaming.radio.co/scc13a6b96/listen"
        this.source_audio [6] ="https://reach-audio.esteam.rocks/radio/8000/live.mp3"
        this.source_audio [7] ="http://nebula.shoutca.st:8211/mp3"
        this.source_audio [8] ="https://stream.zeno.fm/na3vpvn10qruv.acc"
        this.source_audio [9] ="https://reach-audio.esteam.rocks/radio/8010/live.mp3"
        this.source_audio [10] ="http://www.radioma3ak.com:8000/;stream.mp3"
        this.source_audio [11] ="https://stream.zeno.fm/efx5psd00qruv"
        this.source_audio [12] ="http://178.32.62.154:8957/;"
        this.source_audio [13] ="http://whsh4u-panel.com:14113/stream"
        this.source_audio [14] ="http://82.201.132.237:8000/;stream.mp3/;"
        this.source_audio [15] ="https://stream.radiojar.com/a3qsqz9h2ewtv"
        this.source_audio [16] ="https://9090streaming.mobtada.com/9090FMEGYPT?type=.mp3/;stream.mp3"
        this.source_audio [17] ="http://www.hostmyradio.com:8010/;"
        this.source_audio [18] ="https://radio.radiosotak.com/sotak_128"
        this.source_audio [19] ="https://radio.radiosotak.com/sotak_128"
        this.source_audio [20] ="https://stream.zeno.fm/cqd6hz68m98uv"
        this.source_audio [21] ="https://listen.radioking.com/radio/261499/stream/306526"
        this.source_audio [22] ="https://stream.zeno.fm/wu9yvyuzpnhvv"
        this.source_audio [23] ="https://stream.zeno.fm/7vq9rm8p7rhvv"
     

        this.server = 0;

        this.setResource();

        document.getElementById("nextbutton").addEventListener("click",()=>{
            if(this.server<this.source_audio.length-1){
                ++this.server;
                this.played = false ;
                


            }else{
                this.server=0;
            }
            localStorage.setItem("save",this.server);
           this.setResource();

        });

        document.getElementById("backbutton").addEventListener("click",()=>{
            if(this.server>0){
                --this.server;
                this.played = false ;
                


            }else{
                this.server = this.source_audio.length-1 ;

            }
            localStorage.setItem("save",this.server);
            this.setResource();

        });


    }
       setResource(){
        if(localStorage.getItem("save")!=null){
            this.server = localStorage.getItem ("save")
        }

        this.audioo.src = this.source_audio [ this.server];
        this.paragra.innerHTML= this.names_radio [this.server];
        this.playbutton();

       }

        playbutton(){
        if(this.played== false){
            this.play_button.src = "pause.png";
            this.audioo.play();
            this.played=true;
            
        }else{
            this.play_button.src  ="play.png";
            this.audioo.pause();
            this.played=false;
        } 
    } 
}
onload = new Audioplayer();





// volume input
class Volume {
    constructor(){
        this.audio_file = document.getElementById("audioo");
        this.audio_file.volume = 50/100 ;

      this.volume_range = document.getElementById ("volume_range");
      this.volume_range.addEventListener("change",()=>{
          this.audio_file.volume =  this.volume_range.value/100;
      });

      this.volume_speed = document.getElementById ("volume_speed");
      this.volume_speed.playbackRate = 1 ;
      this.volume_speed.addEventListener("change",()=>{
          this.audio_file.playbackRate =  this.volume_speed.value/100;
      });

        


    }

}
onload = new Volume();



class Theme {
    constructor(){
      
        this.color_theme = document.getElementById("theme1")
        this.color_theme.addEventListener("click",()=>{
            this.colorid("theme1");

        });

        this.color_theme1 = document.getElementById("theme2")
        this.color_theme1.addEventListener("click",()=>{
            this.colorid("theme2");

        });

        this.color_theme2 = document.getElementById("theme3")
        this.color_theme2.addEventListener("click",()=>{
            this.colorid("theme3");

        });

        this.color_theme3 = document.getElementById("theme4")
        this.color_theme3.addEventListener("click",()=>{
            this.colorid("theme4");

        });

        this.color_theme4 = document.getElementById("theme5")
        this.color_theme4.addEventListener("click",()=>{
            this.colorid("theme5");

        });
       

      

    }

    colorid(color){
        if(color == "theme1") {
        document.body.style.background = " rgb(149 135 135)" ;
         }
    
       else if(color == "theme2") {
        document.body.style.background = " rgb(92 20 20)" ;
         }

        else if(color == "theme3") {
        document.body.style.background = " rgb(128 96 126)" ;
         }

        else if(color == "theme4") {
        document.body.style.background = " #222a4c" ;
         }
        else if(color == "theme5") {
        document.body.style.background =  "rgb(63 76 34 / 64%)";
        }
      
    }
  
   
}
onload = new Theme();


