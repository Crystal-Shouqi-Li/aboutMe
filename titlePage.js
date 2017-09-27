
var theQuotes=["Not everything that can be counted counts, and not everything that counts can be counted ~ Einstein",
"Problems worthy of attack prove their worth by fighting back ~ Erdos", 
"Obstacles are those frightful things you see when you take your eyes off your goal ~Ford",
"If everything seems under control, you're just not going fast enough ~Mario Andretti",
"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel ~ Maya Angelou"
];
function changeQuotes(){
var randomNum=Math.floor(Math.random()*5);
document.getElementById("quotes").innerHTML=theQuotes[randomNum];
}
	



