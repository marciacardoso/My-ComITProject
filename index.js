const express = require('express');
const app= express();
const path= require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.render('index', { });
});

app.get('/contact', (req, res) => {
  res.render('contact', { });
});

app.get('/surveySteps', (req, res) => {
  res.render('surveySteps', { });
});

app.get('/primarySteps', (req, res) => {
  res.render('primarySteps', { });
});

app.get('/secondarySteps', (req, res) => {
  res.render('secondarySteps', { });
});

app.get('/knockedOut', (req, res) => {
  res.render('emergency', { 
    name : "Knocked-out-teeth",
    video : "https://www.youtube.com/embed/KhHyIeionv8?rel=0", 
    definition :"An avulsed tooth is one that has been knocked out.",
    causes: ["a blow to the mouth;", "an accident involving the face;", "while playing contact sports;"],
    checkScene: "Check the scene quickly to figure out if the local is safe.", 
    checkPerson: [" Check the person´s ABCs."],
    call911If: ["the tooth was knocked out by a forceful blow;", "you suspect more serious injuries;"],
    care: ["have the person bite down on a clean dressing;", "carefully pick up the tooth by the crown - the white part- and keep it protected;", "protected the tooth by putting it in egg white, coconut water, saline or whole milk;", "or wrapping the tooth in gauze or a clean cloth with some of the person´s saliva;"],
    important: ["The tooth can be replaced in the socket successfully if you take the right action as soon as possible."]
  });
});

app.get('/cutsAndScrapes', (req, res) => {
  res.render('emergency', {     
    name: "Cuts and Scrapes",
    video:"https://www.youtube.com/embed/L77rERL64zc",
    definition: "A cut is a wound where the skin has been split open or torn away. The edges of the wound can be jagged or smooth. Scrapes are wounds where the skin has been rubbed or scraped away.",
    causes: ["Any action or sharp object that rubs or scrapes the skin away."],
    checkScene: "Check the scene quickly to figure out if the local is safe for you.", 	
    checkPerson:["if the person is responsive;", "check the person´s ABCs;", "look for possible bleeding and pain."],
    call911If: ["if you suspect there may be more serious injuries."],
    care: ["Ensure the person´s ABCs are present;", "Perform a secondary survey and treat any non-life-threatening conditions;", "If the gloves are not available, use some other kind of barrier between your hand and the wound. If possible, have the injured person use her own hand;",
    "There is usually minimal bleeding with scrapes; If this is the case, go directly to step 2(wash the wound with water and soap). If there is bleeding, put direct pressure on the wound until it stops;",
    " Wash the wound throroughly with soap and water;", "If possible, rinse the wound for five minutes with clean, running tap water;","If an antibiotic ointment or cream is available, put it on the wound as recommended by a pharmacist after checking the Five Rigths os Medication. Ask the person if she has sensitivity to any antibiotics, such as penicillin.	If so, do not apply the ointment;", "Cover the wound with sterile non-stick dressing and/or bandage;", "Watch for signs of infection;","If the blood soaks through the dressings, add more dressings on top. Do not remove the soaked dressings that are in direct contact with the wound! If you cannot control the bleeding, make sure the person gets medical attention immediately;"], 
    important: ["Wounds should be stitched by a trained medical professional in the first few hours after an injury", "A wound may require stitching if:(1) the edges of the skin do not fall together,(2) the wound is more than 2.5 cm (1 in.) long,(3) the wound is near joints on the hands or feet,(4) the wound is on the face.", "Stitches will help:(1) speed up healing,(2) reduce the chance of infection,(3) leave a less noticeable scar."]             			
});
});

app.get('/bruises', (req, res) => {
  res.render('emergency', {
    name:"Bruises",
    video:"https://www.youtube.com/embed/mzv9U4Pqs8U?rel=0",
    definition: "Is a discoloured area of the skin that is created when blood and other fluids seep into nearby tissues.",
    causes:["some kind of blow;", "impact to the body;"],
    checkScene: "Check the scene quickly to figure out if the local is safe for you.",
    checkPerson:["if the person is responsive;","check the person´s ABCs;","look for: discolouring (red, purple, black or blue areas),swelling,pain;"],
    call911If: ["You suspect there may be more serious injuries."],
    care: ["ensure the person´s ABCs are present;","perform a secondary survey and treat any non-life-threatening conditions;","cool the area to help reduce pain and swelling;",
    "when you cool the area,put some sort of cloth or pad between the ice and the skin;", "apply the ice for 20 minutes of every hour for as long as the person keeps feeling pain;"], 
    important: ["if the person feels severe pain or cannot move a body part without pain;"," or if you think the force that caused the injury was great enough to cause serious damage or severe bleeding;", "call EMS/9-1-1 and get an AED immediately;"," You may be dealing with internal bleeding, head and/or spine injuries, or bone, muscle, and joint injuries;"]
});
});

app.get('/externalDeadlyBleeding', (req, res) => {
  res.render('emergency', {
    name: "External Deadly Bleeding.",
    video:"https://www.youtube.com/embed/CvarKiGeD3w?rel=0",
    definition:" Is severe bleeding that leads to large amounts of blood loss, outside the body.",
    causes: ["An injury that breaks a blood vessel (an artery or vein)."],
    checkScene: "Check the scene quickly to figure out if the local is safe for you.",
    checkPerson: ["if the person is reponsive;", "check the person´s ABCs;", "look for large amount of bleeding and signs of shock;"],
    call911If:["always."],
    care: ["Expose the wound;", "Apply direct pressure to the bleeding;", "Secure the dressing;", "Ensure the person´s ABCs are present;","Perform a secondary survey and treat any non-life-threatening conditions;"], 
    important: ["Provide continual care until EMS personnel arrive."]
});
});

app.get('/internalDeadlyBleeding', (req, res) => {
  res.render('emergency', {   
    name: "Internal Deadly Bleeding.",
    video:"https://www.youtube.com/embed/lFpHGiyP8HE?rel=0",
    definition:" Is severe bleeding that leads to large amounts of blood loss, within the body.",
    causes: ["An injury that breaks a blood vessel (an artery or vein)."],
    checkScene: "Check the scene quickly to figure out if the local is safe for you.",
    checkPerson: ["if the person is reponsive;", "check the person´s ABCs;", "look for bruising in the injured area,Soft tissues that are tender, swollen, or hard and signs of shock, Blood in saliva or vomit, pain, severe thirst, anxiety, nausea, and vomiting."],
    call911If:["always."],
    care: ["help the person rest in the most comfortable position;","ensure the person´s ABCs are present;", "perform a secondary survey and treat any non-life-threatening conditions;","provide continual care until EMS personnel arrive;"],	
    important: ["Internal bleeding is more difficult to recognize than external bleeding because the signs and symptoms are less obvious and they may take longer to appear."]        
});
});

app.get('/impaledObjects', (req, res) => {
  res.render('emergency', {
    name:"Impaled Objects.",
    video:"https://www.youtube.com/embed/OfU0g-ViPIE?rel=0",
    definition: "If the object that created the injury is stuck in the wound, it´s called an impaled object.",
    causes: ["varied."],
    checkScene:"The scene quickly to figure out if the local is safe for you.",
    checkPerson: ["if the person is responsive;", "Check the person´s ABCs;"],
    call911If: ["the injury is serious;", "you can´t take the person to the hospital;"],
    care: ["Ensure the person´s ABCs are present;","leave the object in place;","Stabilize the object without putting direct pressure on it;","secure the dressings in place;", "Make sure the person gets medical attention;"],
    important: ["If the object is impaled in the head, treat as a head injury."]
});
});

app.get('/amputations', (req, res) => {
  res.render('emergency', {       
    name:"Amputations",
    video:"https://www.youtube.com/embed/FFeG0tBwIg4?rel=0",
    definition: "An amputation is a complete or partial severing of a body part. Although there is a lot of damage to the tissues, bleeding is usually not severe.",
    causes: ["varied."],
	  checkScene: "The scene quickly to figure out if the local is safe for you.",
	  checkPerson:["if the person is responsive;", "Check the person´s ABCs;"],
	  call911If: ["the injury is serious;", "you can´t take the person to the hospital;"],
    care:["Ensure the person´s ABCs are present;","Perform a secondary survey and treat any non=life-threatening conditions;","Treat any bleeding with direct pressure;","Try to retrieve the amputated body part;"," Wrap the amputated part in clean cloth or gauze;","Place the amputated part in a plastic bag;","Keep the amputated part cool by placing the bag on ice and wrap it so that the body part does not freeze;","Label the container that contains the body part (person´s name, date and time);","Make sure the amputated part goes with the injured person to the hospital;"," Provide continual care until EMS personnel arrive;",],
    important:["If the limb is partially disconnected form the body, put the limb back in palce and treat the injury as an open wound or fracture."]
});
});

app.get('/burns', (req, res) => {
  res.render('emergency', {
    name: "Burns",
    video:"https://www.youtube.com/embed/2_bx3Bt9Wu0?rel=0",
    definition: "Burns are soft-tissue injuries caused by chemicals, electricity, heat or radiation. Burns can be: superficial, partial thickness, full thickness.",
    causes: ["The burns were caused by fire,chemicals, explosions or electricity;"],
    checkScene:" The scene quickly to figure out if the local is safe for you.",
    checkPerson:["if the person is responsive;", "Check the person´s ABCs;"],
    call911If:["the burns make it difficult for the person to breathe;","the burns are full thickness or involve a large amount of blistered or broken skin;", "the burns cover the face, neck, hands, genitals or a larger surface area;"],		 
    care: ["cool the affected area with water or a clean, cool (but not freezing) compress for at least 10 minutes;","remove the jewellery and clothing from the burn site;","cover the burn loosely with a dry, sterile dressing;","Superficial burns: once the burning has stopped, you can apply an antibiotic ointment; "],
    important: ["Do not attempt to remove anything that is stuck to the skin;"]
});
});

app.get('/bonesMuscleAndJointInjuries', (req, res) => {
    res.render('emergency', {
    name: "Bones, Muscle and Joint Injuries",
    video:"https://www.youtube.com/embed/sErAkg6QnXU?rel=0",
    definition:[" There are four basic types of bone, muscle, and joint injuries: STRAIN, SPRAIN, DISLOCATION AND FRACTURE;"," STRAIN: the stretching or tearing of muscles or tendons;"," SPRAIN: the stretching or tearing of ligaments at a joint;"," DISLOCATION: the movement of a bone out of its normal position at a joint;"," FRACTURE: a chip, crack or break in a bone;"],
    causes:["sports, car accidents, figths."],
    checkScene:" Check the scene quickly to figure out if the local is safe for you.",
    checkPerson: ["if the person is responsive;","Check the person´s ABCs; ", "Look for: deformity, swelling or bruising; limited or no use of the injured body part; bone fragments sticking out of the skin;"],
    call911If: ["there are injuries to the thigh bone or pelvis;","the area below the injury is numb, pale, blue or cold;","a broken bone is protruding through the skin;","you cannot safely move the person;"],					
    care:["Treat the injury using the RICE method: R est: have the person rest comfortably; I mmobilize: keep the injured area as still as possible; C ool: cool the injured area for 20 min of every hour; E levate: raise the injury, as long as this does not increase the pain;"],
    important:""
});
});
app.get('/cpr', (req, res) => {
  res.render('cpr', { });
});


app.listen(3000);

console.log('Welcome to JavaScript and Node.js server side');


