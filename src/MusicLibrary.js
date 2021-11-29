import {v4 as uuidv4} from "uuid";



const MusicLibrary=()=>{
    return[
        {
            name:"Surfloop",
            cover:"https://chillhop.com/wp-content/uploads/2021/10/1f90f966219973433f4bf9f4910893028abc4360-1024x1024.jpg",
            artist:"Philanthrope, mommy, HM Surf",
            album:"Invisible",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=27485",
            color:["#66AFD5","#292C2D"],
            id: uuidv4(),
            active:true,
        },
        {
            name:"Where Did You Go",
            cover:"https://chillhop.com/wp-content/uploads/2021/10/1f90f966219973433f4bf9f4910893028abc4360-1024x1024.jpg",
            artist:"Philanthrope, mommy",
            album:"Invisible",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=27493",
            color:["#66AFD5","#292C2D"],
            id: uuidv4(),
            active:false,
        },
        {
            name:"I Miss the Magic",
            cover:"https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
            artist:"Aviino",
            album:"Cocoon",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=23315",
            color:["#EE9B6C","#425866"],
            id: uuidv4(),
            active:false, 
        },
        {
            name:"Badlands",
            cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
            artist:"Hanz, Makzo",
            album:"Wanderlust",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=20126",
            color:["#574F4D","#221817"],
            id:uuidv4(),
            active:false,

        },
        {
            name:"Sirens",
            cover:"https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg",
            artist:"Cloudchord, Smile High, Teddy Roxpin",
            album:"Endless Beginnings",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=21742",
            color:["#5FACB2","#6683A1"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Deja",
            cover:"https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg",
            artist:"Smile High, Teddy Roxpin",
            album:"Endless Beginnings",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=23340",
            color:["#5FACB2","#6683A1"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Aftersome ",
            cover:"https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg",
            artist:"Toonorth",
            album:"Aftersome",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=17944",
            color:["#3D5070","#4D5268"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Flashback",
            cover:"https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            artist:"Blue Wednesday,Shopan",
            album:"Directions",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=11225",
            color:["#A16B9D","#36407D"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Blue",
            cover:"https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg",
            artist:"Delayde,anybodyy",
            album:"Inside a Saltwater Room",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=23195",
            color:["#6A2FC5","#A8DCC2"],
            id:uuidv4(),
            active:false,
        },

        {
            name:"Places",
            cover:"https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",
            artist:"Ruck P",
            album:"Places",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=20563",
            color:["#5E4B73","#07010D"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Slopes",
            cover:"https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",
            artist:"Chillhop Music",
            album:"Chillhop Music Sessions",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=21785",
            color:["#20354B","#553F44"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Travelbag",
            cover:"https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
            artist:"mommy,Sleepy Fish",
            album:"Kinship",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=19058",
            color:["#598FCF","#F8D7C6"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Blue Moon",
            cover:"https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
            artist:"C Y G N",
            album:"Into The Past",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=14991",
            color:["#573A6A","#8CAFED"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Vitamin D",
            cover:"https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg",
            artist:"fantompower",
            album:"On a Walk",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=22790",
            color:["#856787","#DFE9E1"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Maple",
            cover:"https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist:"Arbour,Aarigold",
            album:"Forest Lore",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=13015",
            color:["#65843D","#4C5858"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Just Put Up Some String Lights",
            cover:"https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",
            artist:"Sleepy Fish",
            album:"Like the Sky,or Something Else",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=24823",
            color:["#064379","#6CB6DD"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Hngkng",
            cover:"https://chillhop.com/wp-content/uploads/2021/10/1f90f966219973433f4bf9f4910893028abc4360-1024x1024.jpg",
            artist:"Philanthrope, mommy",
            album:"Invisible",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=27494",
            color:["#66AFD5","#292C2D"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Conflicted",
            cover:"https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
            artist:"Hanz",
            album:"On the Other Side",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=24642",
            color:["#2D3A4B","#4E6181"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Coda",
            cover:"https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist:"Arbour,Aarigold",
            album:"Forest Lore",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=13001",
            color:["#65843D","#4C5858"],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Rolling Eyes",
            cover:"https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
            artist:"Hanz",
            album:"On the Other Side",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=24646",
            color:["#2D3A4B","#4E6181"],
            id:uuidv4(),
            active:false,
        }
    ]
};

export default MusicLibrary;