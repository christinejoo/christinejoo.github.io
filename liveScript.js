// let c = 20
let angle = 0
let art
var shapeCount = 0


var clubs = [['Manchester City F.C.', 'English Premier League','#6CABDD','#1C2C5B','#FFFFFF'], 
['Liverpool F.C.','English Premier League','#C8102E','#00B2A9','#F6EB61'], 
['Chelsea F.C.','English Premier League','#034694','#4169E1','#FFFFFF'], 
['Arsenal F.C.','English Premier League', '#EF0107', '#9c824a', '#063672'],
['Tottenham Hotspur F.C.','English Premier League', '#132257', '#FFFFFF','#FFFFFF'],
['Manchester United F.C.', 'English Premier League','#DA291C', '#FBE122','#000000'],
['Wolverhampton Wanderers F.C.', 'English Premier League','#FDB913','#231F20','#FFFFFF'],
['Newcastle United F.C.','English Premier League', '#41B6E6', '#F1BE48','#000000'],
['Leicester City F.C.','English Premier League', '#003090','#FDBE11','#FFFFFF'],
['Brighton & Hove Albion F.C.', 'English Premier League','#0057B8','#FFCD00','#FFFFFF'],
['Brentford F.C.', 'English Premier League','#fbb800','#e30613','#140e0c'],
['Southampton F.C.', 'English Premier League','#D71920','#130c0E','#FFC20E'],
['Crystal Palace F.C.','English Premier League', '#1B458F','#A7a5a6','#c4122e'],
['Aston Villa F.C.','English Premier League', '#95bfe5','#670e36','#fee505'],
['Leeds United','English Premier League','#ffcd00','#1d428a','#ac944d'],
['Burnley F.C.','English Premier League', '#6c1d45','#99d6ea','#ece75d'],
['Everton F.C.','English Premier League', '#003399','#FFFFFF','#FFFFFF'],
['Watford F.C.','English Premier League', '#fbee23','#ed2127','#11210c'],
['Norwich City F.C.','English Premier League','#fff200','#00a650','#000000'],

['Real Madrid C.F.','Spanish LaLiga','#FEBE10','#00529F','#EE324E'],
['Barcelona F.C.','Spanish LaLiga','#EDBB00','#004D98','#A50044','#DB0030','#FFED02'],
['Sevilla F.C.','Spanish LaLiga','#F433333','#C79100','#FFFFFF'],
['Atletico Madrid','Spanish LaLiga','#272E61','#CB3524','#FFFFFF'],
['Real Betis','Spanish LaLiga','#0BB363','#E7A614','#D62550'],
['Read Sociedad','Spanish LaLiga','#0067B1','#E4B630','#D87722','#E1061F'],
['Athletic Bilbao','Spanish LaLiga','#EE2523','#FFFFFF','#000000'],
['Osasuna','Spanish LaLiga','#0A346F','#D91A21','#AD8F1F'],
['Valencia C.F.','Spanish LaLiga','#0097D7','#FFDF1C','#EE3524','AA2D2A'],
['Rayo Vallecano','Spanish LaLiga','#E53027','#Ebb200','#137964'],
['Celta Vigo','Spanish LaLiga','#8AC3EE','#E5254E','#B19221'],
['RCD Espanyol','Spanish LaLiga','#007FC8','#DF1116','#F4CF0C'],
['Elche C.F.','Spanish LaLiga','#C5112E','#1B458f','#05642C','E6C777'],
['Getafe','Spanish LaLiga','#005999','#C43A2F','#7DA738'],
['RCD Mallorca','Spanish LaLiga','#E20613','#00844B','#FFE200'],
['Cadíz C.F.','Spanish LaLiga','FDE607','#0045A7','#CC1424'],
['Granada C.F.','Spanish LaLiga','#A61B2B','#FFFFFF','#FFFFFF'],
['Levante Union Deportiva','Spanish LaLiga','#B4053F','#005CA5','#DCA43E','#FAC400'],
['Alavés',  'Spanish LaLiga','#009AD7','#0761AF','#FFFFFF'],

['Paris Saint-Germain','French Ligue 1','#004170','#DA291C','#CEAB5D'],
['Olympique de Marseille','French Ligue 1','#2FAEE0','#BEA064','#FFFFFF'],
['Stade Rennais','French Ligue 1','#E13327','#FCBC17','#000000'],
['AS Monaco','French Ligue 1','#EE51B22','#CB9F18','#FFFFFF'],
['OGC Nice','French Ligue 1','#ED1C24','#B59A54','#000000'],
['RC Strasbourg Alsace ','French Ligue 1','#009FE3','#DC2F34','#004996'],
['RC Lens','French Ligue 1','#EC1C24','#FFF200','#000000'],
['Lyon','French Ligue 1','#DA0812','#14387F','#D29D46'],
['Lille OSC','French Ligue 1','#E01E13','#24216A','#FFFFFF'],
['F.C. Nantes','French Ligue 1','#FCD405','#1B8F3A','#1B8F3A'],
['Stade Brestois 29 ','French Ligue 1','#ED1C24','#FFFFFF','#000000'],
['Montpellier Hérault SC','French Ligue 1','#D87043','#344575','#000000'],
['Stade de Reims','French Ligue 1','#EE2223','#FFFFFF','#EE2223'],
['Angers SCO','French Ligue 1','#FFFFFF','#D9C395','#000000'],
['F.C. Lorient','French Ligue 1','#F58113','#FFFFFF','#000000'],
['Es Troyes AC','French Ligue 1','#006EB2','#DC9D0F','#FFFFFF'],
['Clermont Foot','French Ligue 1','#C50C46','#002D6A','#FFFFFF'],
['AS St-Étienne','French Ligue 1','#E20513','#009EE6','#008D3F'],
['F.C. Girondins de Bordeaux','French Ligue 1','#001B50','#FFFFFF','#001B50'],
['FC Metz','French Ligue 1','#6E0F12','#FFFFFF','#6E0F12']

['Bayern Munich F.C.','German Bundesliga','#0066B2','#DC052D','#FFFFFF'],
['Borussia Dortmund','German Bundesliga','#FDE100','#FDE100','#000000'],
['Bayer 04 Leverkusen','German Bundesliga','#F3E500','#E32221','#000000'],
['Leipzig','German Bundesliga','#DD013F','#0C2043','#FFFFFF'],
['S.C. Freiburg','German Bundesliga','#FD1220','#FFFFFF','#000000'],
['1.FC Union Berlin','German Bundesliga','#EB1923','#FDDC02','#FFFFFF'],
['1.FC Köln','German Bundesliga','#ED1C24','#FFFFFF','#000000'],
['TSG 1899 Hoffenheim','German Bundesliga','#1C63B7','#FFFFFF','#000040'],
['Eintract Frankfurt','German Bundesliga','#E1000F','#FFFFFF','#000000'],
['1.FSV Mainz 05','German Bundesliga','#C3141E','#918F90','#C3141E'],
['Borussia Mönchengladbach','German Bundesliga','#FFFFFF','#000000','#000000'],
['VfL Wolfsburg','German Bundesliga','#65B32E','#FFFFFF','#000000'],
['VfL Bochum','German Bundesliga','#005CA9','#000000','#FFFFFF'],
['F.C. Augsburg','German Bundesliga','#BA3722','#46714D','#FFD42E'],
['Hertha BSC','German Bundesliga','#004D9E','#FFFFFF','#000000'],
['VfB Stuttgart','German Bundesliga','#FFED00','#E32219','#FFFFFF'],
['Arminia Bielefeld','German Bundesliga','#004E95','#FFFFFF','#000000'],
['SpVgg Greuther Fürth','German Bundesliga','#009932','#FFFFFF','#000000']

]


city = clubs[0][0]
league = clubs[0][1]
color1 = clubs[0][2]
color2 = clubs[0][3]
color3 = clubs[0][4]

//choose a random club from the array
var randomClubs = clubs[Math.floor(Math.random()*clubs.length)]
console.log(randomClubs)

let randomColor;

document.getElementById("data").innerHTML = "Club—" + randomClubs[0];
document.getElementById("data2").innerHTML = "League—" + randomClubs[1];

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
   myCanvas.parent("frame");

  art = createGraphics(400, 400)
    noStroke();
  art.fill(0,0,0,0);
  art.rect(0,0,420,420);

  //attribute variable "color" to be colors from array 
  // colors = [color1, color2, color3]
  colors = [randomClubs[1], randomClubs[2], randomClubs[3]]
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  art.beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    art.vertex(sx, sy);
  }
  art.endShape(CLOSE);
  art.noStroke();
}



function draw() {

  // randomColor = random(clubs.length);
  // randomColor=floor(randomColor);
 
  noStroke();


  if (shapeCount <= 500){

    //art.fill (use random color )
    art.fill(random(colors));

    let x = random(400);
    let y = random(400);
    
   
      // let shape = random(['triangle', 'square', 'ellipse']);
      // if(shape === 'triangle') {
      //   art.triangle(x, y, x+random(80), y+random(80),x+random(80), y+random(80));
      // }else if(shape === 'square') {
      //   art.square(x,y,30)
      // }else {
      //   art.ellipse(x, y, 30,30);
      // }
      let npoints = random ([1,2,3,4,5,6,7,8,9,10]);
      polygon(x, y, 30, npoints);

    
  }
  background(0,0,0,0);
  // texture(img);
  push()
//   translate(200, 200)
  // let x = random(0, width)

  // let y = random(0, height)

  
  // c += 0.2
  // a += 0.8
  pop()

  push()
  texture(art)
    rotateX(frameCount * 0.01);
    rotateY(frameCount*0.02);
  sphere(200)

  angle += 0.0050
  pop()

  shapeCount++
}

