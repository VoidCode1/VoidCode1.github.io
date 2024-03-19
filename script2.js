
// game.js day game
const scenes = {
  "scene1": {
    "text": "You're on duty in the emergency room when a patient is rushed in with chest pain. What is your immediate action?",
    "options": [
      "Perform an electrocardiogram (ECG) to assess for signs of a heart attack.",
      "Administer pain medication to alleviate the discomfort.",
      "Order a full panel of blood tests to check for cardiac enzymes.",
      "Consult with the attending physician for further evaluation."
    ],
    "correctAnswer": "Perform an electrocardiogram (ECG) to assess for signs of a heart attack."
  },
  "scene2": {
    "text": "A patient arrives with difficulty breathing and wheezing. What should be your initial intervention?",
    "options": [
      "Administer a bronchodilator such as albuterol.",
      "Perform a chest X-ray to assess for underlying conditions.",
      "Initiate oxygen therapy to improve oxygenation.",
      "Start intravenous (IV) access for medication administration."
    ],
    "correctAnswer": "Administer a bronchodilator such as albuterol."
  },
  "scene3": {
    "text": "A trauma patient is brought in with a suspected spinal injury. What is the primary concern during initial assessment?",
    "options": [
      "Check for airway patency and cervical spine immobilization.",
      "Administer analgesics to manage pain.",
      "Perform a focused neurological assessment.",
      "Obtain a detailed history of the mechanism of injury."
    ],
    "correctAnswer": "Check for airway patency and cervical spine immobilization."
  },
  "scene4": {
    "text": "A patient presents with profuse bleeding from a laceration on the arm. What is the immediate action to control bleeding?",
    "options": [
      "Apply direct pressure on the wound with sterile gauze.",
      "Elevate the affected limb above the heart level.",
      "Administer a clotting agent intravenously.",
      "Perform a quick assessment of vital signs."
    ],
    "correctAnswer": "Apply direct pressure on the wound with sterile gauze."
  },
  "scene5": {
    "text": "A patient is found unresponsive in the waiting area. What is the first step in managing this situation?",
    "options": [
      "Check for responsiveness and call for help.",
      "Start chest compressions immediately.",
      "Open the airway and assess breathing.",
      "Retrieve the automated external defibrillator (AED)."
    ],
    "correctAnswer": "Check for responsiveness and call for help."
  },
  "scene6": {
    "text": "A patient presents with signs of a stroke. What is the priority action?",
    "options": [
      "Perform a rapid neurological assessment using the Cincinnati Prehospital Stroke Scale (CPSS).",
      "Administer tissue plasminogen activator (tPA) to dissolve blood clots.",
      "Order a computed tomography (CT) scan to confirm the diagnosis.",
      "Start anticoagulation therapy to prevent further clot formation."
    ],
    "correctAnswer": "Perform a rapid neurological assessment using the Cincinnati Prehospital Stroke Scale (CPSS)."
  },
  "scene7": {
    "text": "A patient with diabetes presents with symptoms of hypoglycemia. What is the immediate treatment?",
    "options": [
      "Administer oral glucose gel or tablets.",
      "Provide high-carbohydrate snacks or drinks.",
      "Initiate insulin therapy to stabilize blood sugar levels.",
      "Start intravenous (IV) dextrose infusion."
    ],
    "correctAnswer": "Administer oral glucose gel or tablets."
  },
  "scene8": {
    "text": "A patient experiences a seizure in the waiting area. What is the priority action during the seizure?",
    "options": [
      "Ensure patient safety and protect the head from injury.",
      "Administer antiepileptic medication intravenously.",
      "Restrict movement to prevent injury.",
      "Insert an oropharyngeal airway to maintain airway patency."
    ],
    "correctAnswer": "Ensure patient safety and protect the head from injury."
  },
  "scene9": {
    "text": "A patient presents with a severe allergic reaction. What is the immediate intervention?",
    "options": [
      "Administer epinephrine (adrenaline) intramuscularly.",
      "Perform a skin prick test to confirm the allergen.",
      "Initiate corticosteroid therapy to reduce inflammation.",
      "Prepare for endotracheal intubation and ventilation."
    ],
    "correctAnswer": "Administer epinephrine (adrenaline) intramuscularly."
  },
  "scene10": {
    "text": "A patient complains of sudden onset chest pain radiating to the back. What is the priority action?",
    "options": [
      "Perform a focused cardiovascular assessment.",
      "Administer nitroglycerin sublingually.",
      "Order a chest X-ray to rule out pulmonary causes.",
      "Initiate anticoagulation therapy immediately."
    ],
    "correctAnswer": "Perform a focused cardiovascular assessment."
  },
  "scene11": {
    "text": "A patient presents with signs of opioid overdose. What is the initial intervention?",
    "options": [
      "Administer naloxone intravenously or intranasally.",
      "Perform a full neurological examination.",
      "Initiate cardiopulmonary resuscitation (CPR).",
      "Obtain a detailed drug history from the patient."
    ],
    "correctAnswer": "Administer naloxone intravenously or intranasally."
  },
  "scene12": {
    "text": "A patient experiences a sudden loss of consciousness. What is the immediate action?",
    "options": [
      "Check for pulse and assess breathing.",
      "Administer intravenous (IV) fluids.",
      "Initiate endotracheal intubation.",
      "Perform a rapid neurological assessment."
    ],
    "correctAnswer": "Check for pulse and assess breathing."
  },
"scene13": {
    "text": "A patient presents with a suspected overdose of a medication. What is the initial action?",
    "options": [
      "Administer activated charcoal to absorb the medication.",
      "Perform a thorough assessment of vital signs.",
      "Contact Poison Control for guidance.",
      "Prepare for gastric lavage to remove the medication."
    ],
    "correctAnswer": "Perform a thorough assessment of vital signs."
  },
  "scene14": {
    "text": "A patient arrives with a penetrating chest trauma. What is the priority action?",
    "options": [
      "Initiate rapid transport to the operating room.",
      "Apply an occlusive dressing to seal the wound.",
      "Administer intravenous (IV) fluids to stabilize blood pressure.",
      "Perform a chest X-ray to assess internal injuries."
    ],
    "correctAnswer": "Apply an occlusive dressing to seal the wound."
  },
  "scene15": {
    "text": "A patient presents with signs of anaphylaxis after being stung by a bee. What is the immediate intervention?",
    "options": [
      "Administer epinephrine (adrenaline) intramuscularly.",
      "Start intravenous (IV) antihistamine therapy.",
      "Perform a skin prick test to confirm the allergen.",
      "Initiate corticosteroid therapy to reduce inflammation."
    ],
    "correctAnswer": "Administer epinephrine (adrenaline) intramuscularly."
  },
  "scene16": {
    "text": "A patient complains of sudden vision loss in one eye. What is the priority action?",
    "options": [
      "Perform a visual acuity test.",
      "Check intraocular pressure with a tonometer.",
      "Administer topical eye drops for immediate relief.",
      "Refer the patient to an ophthalmologist immediately."
    ],
    "correctAnswer": "Perform a visual acuity test."
  },
  "scene17": {
    "text": "A patient presents with signs of acute appendicitis. What is the initial action?",
    "options": [
      "Obtain a detailed abdominal ultrasound.",
      "Administer intravenous (IV) antibiotics.",
      "Prepare the patient for emergency surgery.",
      "Perform a focused abdominal examination."
    ],
    "correctAnswer": "Perform a focused abdominal examination."
  },
  "scene18": {
    "text": "A patient is brought in after ingesting a toxic substance. What is the priority action?",
    "options": [
      "Initiate supportive care and monitor vital signs closely.",
      "Administer an antidote specific to the toxic substance.",
      "Perform gastric lavage to remove the ingested substance.",
      "Induce vomiting to expel the toxic substance."
    ],
    "correctAnswer": "Initiate supportive care and monitor vital signs closely."
  },
  "scene19": {
    "text": "A patient presents with severe abdominal pain and distention. What is the initial intervention?",
    "options": [
      "Order abdominal imaging to assess for underlying causes.",
      "Administer intravenous (IV) pain medication for relief.",
      "Perform a focused abdominal examination.",
      "Initiate nasogastric tube insertion for decompression."
    ],
    "correctAnswer": "Perform a focused abdominal examination."
  },
  "scene20": {
    "text": "A patient is brought in with a suspected drug overdose. What is the priority action?",
    "options": [
      "Administer naloxone intravenously or intranasally.",
      "Perform a rapid neurological assessment.",
      "Order a urine toxicology screen.",
      "Initiate cardiopulmonary resuscitation (CPR)."
    ],
    "correctAnswer": "Administer naloxone intravenously or intranasally."
  },
 "scene21": {
    "text": "A patient arrives at the emergency department with severe shortness of breath and wheezing. What is the initial action?",
    "options": [
      "Administer a bronchodilator nebulizer treatment.",
      "Perform a rapid assessment of vital signs.",
      "Obtain a chest X-ray to assess lung function.",
      "Initiate oxygen therapy via nasal cannula."
    ],
    "correctAnswer": "Perform a rapid assessment of vital signs."
  },
  "scene22": {
    "text": "A patient presents with a head injury and loss of consciousness. What is the priority action?",
    "options": [
      "Perform a Glasgow Coma Scale assessment.",
      "Initiate immediate cranial imaging (CT scan).",
      "Administer intravenous (IV) fluids for hydration.",
      "Apply ice packs to reduce swelling at the injury site."
    ],
    "correctAnswer": "Perform a Glasgow Coma Scale assessment."
  },
  "scene23": {
    "text": "A patient complains of sudden, severe chest pain radiating to the left arm. What is the initial intervention?",
    "options": [
      "Administer aspirin to prevent blood clot formation.",
      "Obtain a 12-lead electrocardiogram (ECG).",
      "Perform a thorough assessment of lung sounds.",
      "Initiate oxygen therapy via face mask."
    ],
    "correctAnswer": "Obtain a 12-lead electrocardiogram (ECG)."
  },
  "scene24": {
    "text": "A patient presents with profuse bleeding from a laceration on the arm. What is the priority action?",
    "options": [
      "Apply direct pressure to the wound to control bleeding.",
      "Administer intravenous (IV) antibiotics to prevent infection.",
      "Elevate the affected limb above the heart level.",
      "Prepare for immediate surgical intervention."
    ],
    "correctAnswer": "Apply direct pressure to the wound to control bleeding."
  },
  "scene25": {
    "text": "A patient is found unresponsive with no pulse. What is the immediate action?",
    "options": [
      "Initiate cardiopulmonary resuscitation (CPR).",
      "Administer epinephrine intravenously.",
      "Perform a rapid neurological assessment.",
      "Obtain a portable defibrillator for immediate use."
    ],
    "correctAnswer": "Initiate cardiopulmonary resuscitation (CPR)."
  },
  "scene26": {
    "text": "A patient presents with a compound fracture of the femur. What is the priority action?",
    "options": [
      "Stabilize the affected limb with a splint or traction device.",
      "Administer intravenous (IV) pain medication for relief.",
      "Prepare for immediate surgical intervention.",
      "Apply a cold compress to reduce swelling."
    ],
    "correctAnswer": "Stabilize the affected limb with a splint or traction device."
  },
  "scene27": {
    "text": "A patient is experiencing a seizure with tonic-clonic movements. What is the initial action?",
    "options": [
      "Protect the patient from injury by removing nearby objects.",
      "Administer a benzodiazepine medication intravenously.",
      "Insert an oral airway to maintain a clear airway.",
      "Prepare for immediate intubation to protect the airway."
    ],
    "correctAnswer": "Protect the patient from injury by removing nearby objects."
  },
  "scene28": {
    "text": "A patient presents with sudden, severe abdominal pain and rigidity. What is the priority action?",
    "options": [
      "Administer intravenous (IV) fluids to maintain hydration.",
      "Perform a focused abdominal examination.",
      "Order abdominal imaging to assess for internal injuries.",
      "Prepare for immediate surgical consultation."
    ],
    "correctAnswer": "Prepare for immediate surgical consultation."
  },
  "scene29": {
    "text": "A patient exhibits signs of hypoglycemia, including confusion and diaphoresis. What is the initial intervention?",
    "options": [
      "Administer oral glucose gel or tablets.",
      "Perform a fingerstick blood glucose measurement.",
      "Initiate intravenous (IV) dextrose administration.",
      "Encourage the patient to consume high-sugar foods or beverages."
    ],
    "correctAnswer": "Perform a fingerstick blood glucose measurement."
  },
  "scene30": {
    "text": "A patient presents with acute respiratory distress and cyanosis. What is the immediate action?",
    "options": [
      "Administer supplemental oxygen via non-rebreather mask.",
      "Initiate rapid sequence intubation for airway management.",
      "Perform a rapid assessment of vital signs.",
      "Order arterial blood gas (ABG) analysis for oxygenation status."
    ],
    "correctAnswer": "Administer supplemental oxygen via non-rebreather mask."
  },
"scene31": {
    "text": "A patient presents with signs of acute stroke, including facial droop and slurred speech. What is the priority action?",
    "options": [
      "Perform a rapid neurological assessment using the Cincinnati Prehospital Stroke Scale.",
      "Initiate intravenous (IV) thrombolytic therapy immediately.",
      "Order a computed tomography (CT) scan of the head to confirm diagnosis.",
      "Administer aspirin to prevent further clot formation."
    ],
    "correctAnswer": "Perform a rapid neurological assessment using the Cincinnati Prehospital Stroke Scale."
  },
  "scene32": {
    "text": "A patient arrives with a severe allergic reaction following ingestion of a known allergen. What is the immediate intervention?",
    "options": [
      "Administer epinephrine intramuscularly.",
      "Initiate antihistamine therapy intravenously.",
      "Perform a skin prick test to confirm the allergen.",
      "Start corticosteroid therapy to reduce inflammation."
    ],
    "correctAnswer": "Administer epinephrine intramuscularly."
  },
  "scene33": {
    "text": "A patient presents with symptoms of acute myocardial infarction (heart attack). What is the initial action?",
    "options": [
      "Administer nitroglycerin sublingually for chest pain relief.",
      "Obtain a 12-lead electrocardiogram (ECG) to confirm diagnosis.",
      "Initiate intravenous (IV) thrombolytic therapy immediately.",
      "Perform a focused cardiovascular examination."
    ],
    "correctAnswer": "Obtain a 12-lead electrocardiogram (ECG) to confirm diagnosis."
  },
  "scene34": {
    "text": "A patient exhibits signs of severe dehydration, including dry mucous membranes and decreased urine output. What is the priority action?",
    "options": [
      "Initiate intravenous (IV) fluid resuscitation with isotonic saline.",
      "Administer oral rehydration solution (ORS) for fluid replacement.",
      "Order laboratory tests to assess electrolyte levels.",
      "Perform a thorough physical examination to identify underlying causes."
    ],
    "correctAnswer": "Initiate intravenous (IV) fluid resuscitation with isotonic saline."
  },
  "scene35": {
    "text": "A patient presents with a suspected spinal cord injury following a motor vehicle accident. What is the initial action?",
    "options": [
      "Immobilize the cervical spine using a cervical collar and backboard.",
      "Perform a neurological assessment to evaluate motor and sensory function.",
      "Order computed tomography (CT) scans of the cervical and thoracic spine.",
      "Administer intravenous (IV) corticosteroids to reduce inflammation."
    ],
    "correctAnswer": "Immobilize the cervical spine using a cervical collar and backboard."
  },
  "scene36": {
    "text": "A patient is brought in with a severe asthma exacerbation, gasping for breath and using accessory muscles. What is the immediate intervention?",
    "options": [
      "Administer high-flow oxygen therapy via non-rebreather mask.",
      "Initiate continuous nebulized bronchodilator therapy.",
      "Order intravenous (IV) corticosteroids for anti-inflammatory effects.",
      "Prepare for emergent endotracheal intubation and mechanical ventilation."
    ],
    "correctAnswer": "Administer high-flow oxygen therapy via non-rebreather mask."
  },
  "scene37": {
    "text": "A patient presents with profuse bleeding from a laceration on the neck. What is the immediate action?",
    "options": [
      "Apply direct pressure to the wound and elevate the patient's head.",
      "Initiate rapid transport to the operating room for surgical intervention.",
      "Prepare for immediate endotracheal intubation to secure the airway.",
      "Administer intravenous (IV) tranexamic acid to control bleeding."
    ],
    "correctAnswer": "Apply direct pressure to the wound and elevate the patient's head."
  },
  "scene38": {
    "text": "A patient is experiencing a sudden onset of seizures with loss of consciousness. What is the priority action?",
    "options": [
      "Protect the patient from injury by removing nearby objects.",
      "Administer lorazepam intravenously to terminate the seizure activity.",
      "Insert an oral airway to maintain a clear airway.",
      "Prepare for immediate cranial imaging (CT scan) to assess for underlying causes."
    ],
    "correctAnswer": "Protect the patient from injury by removing nearby objects."
  },
  "scene39": {
    "text": "A patient presents with signs of septic shock, including hypotension and altered mental status. What is the immediate intervention?",
    "options": [
      "Initiate broad-spectrum intravenous (IV) antibiotic therapy.",
      "Administer intravenous (IV) vasopressors to increase blood pressure.",
      "Perform a rapid assessment of vital signs and oxygen saturation.",
      "Order blood cultures and lactate levels to guide antibiotic therapy."
    ],
    "correctAnswer": "Administer intravenous (IV) vasopressors to increase blood pressure."
  },
"scene40": {
    "text": "A patient exhibits signs of acute appendicitis, including right lower quadrant abdominal pain and rebound tenderness. What is the initial action?",
    "options": [
      "Prepare the patient for immediate surgical intervention.",
      "Administer intravenous (IV) analgesics for pain relief.",
      "Order a computed tomography (CT) scan to confirm diagnosis.",
      "Perform a thorough abdominal examination to rule out other causes."
    ],
    "correctAnswer": "Prepare the patient for immediate surgical intervention."
  },
  "scene41": {
    "text": "A patient presents with severe burns covering more than 20% of the total body surface area. What is the immediate intervention?",
    "options": [
      "Initiate rapid cooling of the burns with cold water or sterile dressings.",
      "Administer intravenous (IV) fluids for fluid resuscitation.",
      "Order laboratory tests to assess electrolyte levels and organ function.",
      "Prepare for immediate transfer to a specialized burn center."
    ],
    "correctAnswer": "Initiate rapid cooling of the burns with cold water or sterile dressings."
  },
  "scene42": {
    "text": "A patient arrives with a penetrating chest trauma and difficulty breathing. What is the immediate action?",
    "options": [
      "Perform needle decompression to relieve tension pneumothorax.",
      "Administer high-flow oxygen therapy via non-rebreather mask.",
      "Order chest x-ray to assess for rib fractures and lung injuries.",
      "Prepare for emergent thoracotomy in the trauma bay."
    ],
    "correctAnswer": "Perform needle decompression to relieve tension pneumothorax."
  },
  "scene43": {
    "text": "A patient presents with signs of anaphylaxis after a bee sting. What is the priority intervention?",
    "options": [
      "Administer epinephrine intramuscularly in the anterolateral thigh.",
      "Initiate intravenous (IV) fluid resuscitation for circulatory support.",
      "Perform a skin prick test to confirm the allergen.",
      "Start corticosteroid therapy to reduce inflammation."
    ],
    "correctAnswer": "Administer epinephrine intramuscularly in the anterolateral thigh."
  },
  "scene44": {
    "text": "A patient is found unresponsive with no pulse. What is the immediate action?",
    "options": [
      "Initiate cardiopulmonary resuscitation (CPR) with chest compressions.",
      "Administer a precordial thump to attempt to restore cardiac rhythm.",
      "Perform a rapid neurological assessment to assess level of consciousness.",
      "Prepare for immediate defibrillation with an automated external defibrillator (AED)."
    ],
    "correctAnswer": "Initiate cardiopulmonary resuscitation (CPR) with chest compressions."
  },
  "scene45": {
    "text": "A patient presents with severe dehydration and altered mental status. What is the priority intervention?",
    "options": [
      "Initiate intravenous (IV) fluid resuscitation with isotonic saline.",
      "Administer oral rehydration solution (ORS) for fluid replacement.",
      "Order laboratory tests to assess electrolyte levels and renal function.",
      "Perform a thorough physical examination to identify underlying causes."
    ],
    "correctAnswer": "Initiate intravenous (IV) fluid resuscitation with isotonic saline."
  },
  "scene46": {
    "text": "A patient presents with a foreign body airway obstruction and inability to speak. What is the immediate action?",
    "options": [
      "Perform abdominal thrusts (Heimlich maneuver) to dislodge the obstruction.",
      "Initiate high-flow oxygen therapy via non-rebreather mask.",
      "Administer subcutaneous epinephrine to reduce airway swelling.",
      "Prepare for emergent tracheostomy in the operating room."
    ],
    "correctAnswer": "Perform abdominal thrusts (Heimlich maneuver) to dislodge the obstruction."
  },
  "scene47": {
    "text": "A patient presents with a suspected drug overdose and respiratory depression. What is the initial action?",
    "options": [
      "Administer naloxone intravenously to reverse opioid effects.",
      "Initiate bag-mask ventilation to support respiratory function.",
      "Order a urine toxicology screen to confirm substance abuse.",
      "Prepare for immediate intubation and mechanical ventilation."
    ],
    "correctAnswer": "Administer naloxone intravenously to reverse opioid effects."
  },
  "scene48": {
    "text": "A patient is brought in with a severe head injury and loss of consciousness. What is the immediate action?",
    "options": [
      "Perform a rapid neurological assessment using the Glasgow Coma Scale.",
      "Initiate intravenous (IV) fluid resuscitation for circulatory support.",
      "Order a computed tomography (CT) scan of the head to assess for intracranial bleeding.",
      "Administer mannitol intravenously to reduce intracranial pressure."
    ],
    "correctAnswer": "Perform a rapid neurological assessment using the Glasgow Coma Scale."
  },
  "scene49": {
    "text": "A patient presents with a suspected acute abdominal aortic aneurysm. What is the immediate action?",
    "options": [
      "Prepare the patient for immediate surgical intervention.",
      "Administer intravenous (IV) analgesics for pain relief.",
      "Order a computed tomography angiogram (CTA) to confirm diagnosis.",
      "Perform a focused abdominal examination to assess for pulsatile mass."
    ],
    "correctAnswer": "Prepare the patient for immediate surgical intervention."
  },
  "scene50": {
    "text": "A patient is experiencing a severe asthma exacerbation and has become unresponsive. What is the immediate action?",
    "options": [
      "Initiate cardiopulmonary resuscitation (CPR) with chest compressions.",
      "Administer epinephrine intramuscularly to reverse bronchoconstriction.",
      "Prepare for immediate endotracheal intubation and mechanical ventilation.",
      "Obtain a 12-lead electrocardiogram (ECG) to assess for cardiac rhythm abnormalities."
    ],
    "correctAnswer": "Initiate cardiopulmonary resuscitation (CPR) with chest compressions.",
    "end":true
  },
}




// Initialize game state
let currentScene = "scene1";
let index = 1;
let container = document.querySelector(".content")
let restart_over = document.querySelector("#restart_over")
let restart_mid = document.querySelector("#restart_mid")
let gameover = document.querySelector("#gameover")
let storyElement = document.querySelector("#story")
let answerOneElement = document.querySelector("#answer1")
let answerTwoElement = document.querySelector("#answer2")
let answerThreeElement = document.querySelector("#answer3")
let answerFourElement = document.querySelector("#answer4")
let backgroundImage = document.querySelector("#body_day")
let nurse = document.querySelector("#nurse-score");
let nurseLabel = document.querySelector("#nurseLabel")
let choosenAnswer;
let update_score;
let patientLife = 100;
let nurseScore = 0;
let error = 0;
// Function to display the current scene
function displayScene() {
  // Display scene text and options in your HTML
  const scene = scenes[currentScene];
  if (scene.end)  {
      let enderror = document.querySelector("#enderror");
      let endscore = document.querySelector("#endscore");
      let endadvice = document.querySelector("endadvice");
      
      enderror.innerHTML = error
      endscore.innerHTML = nurseScore
      
      container.style.animationName = "fadeout"
      container.style.animationDuration = "1s"
      container.classList.add("d-none")
      gameover.classList.remove("d-none")
  }
  text = scene["text"]
  options = scene["options"]
  answerOneElement.innerHTML = options[0]
  answerTwoElement.innerHTML = options[1]
  answerThreeElement.innerHTML = options[2]
  answerFourElement.innerHTML = options[3]
    
  nurse.style.width = nurseScore
    
  storyElement.innerHTML = text
    
  nurseLabel.innerHTML = nurseScore + " " + "Points"

}

// Selection function to store selected option
function selectOption(option) {
  const scene = scenes[currentScene];
  if (option) {
    if (scene["correctAnswer"] == option.innerHTML) {
      choosenAnswer = option.innerHTML
      update_score = true
    } 
    else {
      choosenAnswer = option.innerText
      update_score = false
      error += 1  
    }
  }
    // Handle user choice based on current scene
  if (update_score == true) {
      
    nurseScore += 5
      
    let out = '' + nurseScore + "%";
    
    nurse.style.width = out
      
      


  }

  // Update currentScene and call displayScene() again
  index += 1
  currentScene = 'scene'+ index
  displayScene()
}

// restart game
restart_over.addEventListener("click", () => {
    currentScene = "scene1"
    index = 1
    nurseScore = 0
    container.classList.remove("d-none")
    gameover.classList.add("d-none")
    displayScene()
})

restart_mid.addEventListener("click", () => {
    currentScene = "scene1"
    index = 1
    nurseScore = 0
    displayScene()
})
// Initial display
displayScene();
