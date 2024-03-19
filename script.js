// game.js day game

const scenes = {
    "scene1": {
      "text": "Your Ruth a newly employed nurse on the ward. It's your first day, and you're eager to make a positive impact. As you walk down the corridor, you notice a patient sitting up in bed, looking a bit anxious. The patient's name is Mrs. Johnson, a 65-year-old woman with a history of hypertension. She smiles weakly as you approach. After handover you decide to visit the client",
      "options": [
        "Introduce yourself and ask how she's feeling.",
        "Check her blood pressure and pulse.",
        "Offer her a glass of water.",
        "Start discussing her medication regimen."
      ],
      "correctAnswer": "Introduce yourself and ask how she's feeling.",
      "bg_image": "ruth_b.jpg"
    },
    "scene2": {
      "text": "Mrs. Johnson seems relieved to have some company. You pull up a chair and sit next to her. As you engage in conversation, you notice her hands trembling slightly. You decide to check her vital signs. What would you do?",
      "options": [
        "Check her blood pressure and pulse.",
        "Ask her about any recent changes in her health.",
        "Offer her a warm blanket.",
        "Suggest deep breathing exercises."
      ],
      "correctAnswer": "Check her blood pressure and pulse.",
      "bg_image": "ruth_b2.jpg"
    },
    "scene3": {
      "text": "You've completed Mrs. Johnson's initial assessment, and her vital signs are stable. She shares that she's been feeling fatigued lately and has lost some weight unintentionally. You suspect an underlying issue and decide to order some lab tests. Which tests would you choose?",
      "options": [
        "Complete Blood Count (CBC)",
        "Basic Metabolic Panel (BMP)",
        "Comprehensive Metabolic Panel (CMP)",
        "Thyroid Function Tests"
      ],
      "correctAnswer": "Complete Blood Count (CBC)",
      "bg_image": "ruth_b3.jpg"
    },
  "scene4": {
    "text": "The lab tests have come back, and Mrs. Johnson's CBC shows some abnormalities that could indicate anemia. You consider the next steps to take in her care. What do you do?",
    "options": [
      "Discuss the results with Mrs. Johnson and reassure her.",
      "Consult with the attending physician for further evaluation.",
      "Prepare to administer an iron supplement.",
      "Schedule a follow-up appointment with a specialist."
    ],
    "correctAnswer": "Consult with the attending physician for further evaluation.",
    "bg_image": "ruth_b4.jpg"
  },
  "scene5": {
    "text": "After consulting with the physician, you both agree that Mrs. Johnson requires a more comprehensive evaluation. The physician orders additional tests and a dietary consultation to address her potential anemia. How do you proceed?",
    "options": [
      "Coordinate with the lab for the additional tests.",
      "Inform Mrs. Johnson about the new tests and dietary consultation.",
      "Arrange for a nutritionist to visit Mrs. Johnson.",
      "Review Mrs. Johnson's medication to ensure no interactions with supplements."
    ],
    "correctAnswer": "Inform Mrs. Johnson about the new tests and dietary consultation.",
    "bg_image": "ruth_b5.jpg"
  },
  "scene6": {
    "text": "Mrs. Johnson has been informed about the additional tests and the dietary consultation. She's grateful for the thorough care and feels more at ease knowing that her health is being taken seriously. As her nurse, you feel a sense of accomplishment in providing comprehensive care. What are your final actions for the day?",
    "options": [
      "Ensure all Mrs. Johnson's questions are answered.",
      "Document all the care provided and the patient's response.",
      "Check on Mrs. Johnson one last time before your shift ends.",
      "Plan the next steps for Mrs. Johnson's care with the healthcare team."
    ],
    "correctAnswer": "Document all the care provided and the patient's response.",
    "bg_image": "ruth_b6.jpg",
  },
  "scene7": {
    "text": "Ruth is reviewing Mrs. Johnson's new lab results when she notices a discrepancy in the medication orders. The doctor has prescribed Digoxin, but the dosage seems higher than usual for a patient with Mrs. Johnson's profile. What should Ruth do?",
    "options": [
      "Administer the medication as ordered, assuming the doctor knows best.",
      "Contact the prescribing physician to clarify the dosage.",
      "Check the patient's medical history for previous Digoxin use.",
      "Consult the hospital's pharmacology handbook for standard dosages."
    ],
    "correctAnswer": "Contact the prescribing physician to clarify the dosage.",
    "bg_image": "ruth_medication.jpg"
  },
  "scene8": {
    "text": "During a routine check, Ruth finds that Mrs. Johnson's blood pressure is unusually high. Considering her history of hypertension, which medication should Ruth consider administering, pending physician's approval?",
    "options": [
      "Amlodipine to manage her blood pressure.",
      "Metformin to control her blood sugar levels.",
      "Atorvastatin to reduce her cholesterol.",
      "Furosemide to manage fluid retention."
    ],
    "correctAnswer": "Amlodipine to manage her blood pressure.",
    "bg_image": "ruth_bp.jpg"
  },
  "scene9": {
    "text": "Mrs. Johnson complains of a sudden onset of chest pain. Ruth suspects angina and needs to administer a medication for quick relief. Which medication is appropriate for immediate use?",
    "options": [
      "Aspirin to prevent blood clots.",
      "Nitroglycerin for rapid chest pain relief.",
      "Simvastatin to lower cholesterol.",
      "Metoprolol to slow down her heart rate."
    ],
    "correctAnswer": "Nitroglycerin for rapid chest pain relief.",
    "bg_image": "ruth_chest_pain.jpg"
  },
  "scene10": {
    "text": "Ruth is called to attend to a patient experiencing severe diarrhea. She needs to assess the patient and decide on the initial management. What should be Ruth's first step?",
    "options": [
      "Administer anti-diarrheal medications immediately.",
      "Perform a thorough assessment including history taking and physical examination.",
      "Provide clear fluids and start oral rehydration therapy.",
      "Order a full panel of laboratory tests including stool culture."
    ],
    "correctAnswer": "Perform a thorough assessment including history taking and physical examination.",
    "bg_image": "ruth_diarrhea.jpg"
  },
  "scene11": {
    "text": "Ruth notices that another patient has symptoms suggestive of an eye infection. To ensure appropriate treatment, what should Ruth do first?",
    "options": [
      "Start antibiotic eye drops empirically.",
      "Clean the eye with saline and apply a warm compress.",
      "Assess for signs of infection and possible causes.",
      "Refer the patient to an ophthalmologist immediately."
    ],
    "correctAnswer": "Assess for signs of infection and possible causes.",
    "bg_image": "ruth_eye_infection.jpg"
  },
  "scene12": {
    "text": "A patient with a suspected fracture is in pain. Before immobilization and further imaging, what is the most important observation Ruth should make?",
    "options": [
      "Check for deformity and abnormal movement.",
      "Assess neurovascular status distal to the injury.",
      "Administer pain medication as prescribed.",
      "Apply a cold pack to reduce swelling."
    ],
    "correctAnswer": "Assess neurovascular status distal to the injury.",
    "bg_image": "ruth_fracture.jpg"
  },
  "scene13": {
    "text": "Ruth encounters a patient with a minor burn. To minimize tissue damage and promote healing, what should be her immediate action?",
    "options": [
      "Apply an antibiotic ointment and cover with a sterile dressing.",
      "Cool the burn with running water and cover with a clean cloth.",
      "Assess the burn's depth and calculate the total body surface area affected.",
      "Give pain relievers and wait for a physician's assessment."
    ],
    "correctAnswer": "Cool the burn with running water and cover with a clean cloth.",
    "bg_image": "ruth_burn.jpg"
  },
  "scene14": {
    "text": "Ruth is assigned to care for a patient in isolation due to a highly infectious disease. She knows that proper infection prevention methods are crucial. What is the first thing Ruth should do before entering the patient's room?",
    "options": [
      "Don personal protective equipment (PPE) according to the isolation guidelines.",
      "Ensure that she has all necessary equipment to minimize the number of entries and exits.",
      "Disinfect her hands and then put on gloves.",
      "Review the patient's medical chart for any special considerations."
    ],
    "correctAnswer": "Don personal protective equipment (PPE) according to the isolation guidelines.",
    "bg_image": "ruth_isolation.jpg"
  },
  "scene15": {
    "text": "During the treatment of the isolated patient, Ruth needs to administer medication that is sensitive to light exposure. How should she handle the medication to maintain its efficacy?",
    "options": [
      "Wrap the medication in aluminum foil to protect it from light.",
      "Administer the medication quickly to minimize light exposure.",
      "Use a light-protective infusion bag if available.",
      "Turn off the room lights while administering the medication."
    ],
    "correctAnswer": "Use a light-protective infusion bag if available.",
    "bg_image": "ruth_medication_light_sensitive.jpg"
  },
  "scene16": {
    "text": "Ruth notices that the isolated patient is showing signs of distress and potential psychological effects from isolation. What non-pharmacological intervention can Ruth provide to help alleviate the patient's distress?",
    "options": [
      "Arrange for a psychiatric consultation.",
      "Provide the patient with educational materials about their condition.",
      "Facilitate virtual visits with the patient's family members.",
      "Increase the frequency of her visits to the patient's room."
    ],
    "correctAnswer": "Facilitate virtual visits with the patient's family members.",
    "bg_image": "ruth_patient_distress.jpg"
  },
  "scene17": {
    "text": "The patient in isolation has recovered sufficiently to be moved out of isolation. Before this transition, what is the most important action for Ruth to ensure effective infection control?",
    "options": [
      "Disinfect the room thoroughly after the patient has been moved.",
      "Educate the patient on proper hand hygiene practices.",
      "Coordinate with the infection control team for room clearance.",
      "Remove and dispose of PPE in the correct order and manner."
    ],
    "correctAnswer": "Coordinate with the infection control team for room clearance.",
    "bg_image": "ruth_isolation_end.jpg"
  },
  "scene18": {
    "text": "Ruth is tasked with investigating a sudden outbreak of infections on the ward. She needs to determine the causative organism. Which investigation should she prioritize?",
    "options": [
      "Order a complete blood count to check for signs of infection.",
      "Request a culture and sensitivity test to identify the organism and appropriate antibiotics.",
      "Perform a rapid antigen test for common viruses.",
      "Conduct a polymerase chain reaction (PCR) test to detect genetic material of pathogens."
    ],
    "correctAnswer": "Request a culture and sensitivity test to identify the organism and appropriate antibiotics.",
    "bg_image": "ruth_investigation.jpg"
  },
  "scene19": {
    "text": "A patient presents with symptoms of pneumonia. Ruth knows that certain organisms are common culprits. Which organism is she most likely testing for?",
    "options": [
      "Methicillin-resistant Staphylococcus aureus (MRSA)",
      "Escherichia coli (E. coli)",
      "Human papillomavirus (HPV)",
      "Hepatitis C virus (HCV)"
    ],
    "correctAnswer": "Methicillin-resistant Staphylococcus aureus (MRSA)",
    "bg_image": "ruth_pneumonia.jpg"
  },
  "scene20": {
    "text": "Ruth suspects a patient may have a urinary tract infection (UTI). She needs to confirm the diagnosis and rule out other conditions. What is the most appropriate initial test?",
    "options": [
      "Order an ultrasound of the kidneys and bladder.",
      "Perform a urinalysis to check for signs of infection.",
      "Request a computed tomography (CT) scan of the abdomen.",
      "Conduct a cystoscopy to look inside the bladder."
    ],
    "correctAnswer": "Perform a urinalysis to check for signs of infection.",
    "bg_image": "ruth_uti.jpg"
  },
  "scene21": {
    "text": "A patient with a suspected fracture is awaiting confirmation. Ruth needs to choose the best imaging test to confirm the diagnosis. Which test should she order?",
    "options": [
      "Magnetic resonance imaging (MRI) to view soft tissue details.",
      "X-ray to visualize the bone structure and identify any fractures.",
      "Bone scan to detect bone diseases and tumors.",
      "Dual-energy X-ray absorptiometry (DEXA) to measure bone mineral density."
    ],
    "correctAnswer": "X-ray to visualize the bone structure and identify any fractures.",
    "bg_image": "ruth_fracture_confirmation.jpg"
  },
  "scene22": {
    "text": "Ruth pauses outside a patient's room, recalling the definition of congestive heart failure (CHF). 'It's a chronic condition where the heart doesn't pump blood as well as it should,' she thinks. What causes CHF, and which drug is commonly prescribed?",
    "options": [
      "Caused by prolonged hypertension, a common drug is Furosemide.",
      "Resulting from a sedentary lifestyle, treated with Aspirin.",
      "Due to a vitamin deficiency, managed with Vitamin B12 injections.",
      "Stemming from an infection, treated with broad-spectrum antibiotics."
    ],
    "correctAnswer": "Caused by prolonged hypertension, a common drug is Furosemide.",
    "bg_image": "ruth_chf.jpg"
  },
  "scene23": {
    "text": "In the medication room, Ruth contemplates the cause of type 2 diabetes mellitus. 'It's often due to insulin resistance or a deficiency in insulin production,' she muses. Which medication would she prepare for a patient with type 2 diabetes?",
    "options": [
      "Insulin to regulate blood sugar levels.",
      "Calcium channel blockers to reduce blood pressure.",
      "Anticoagulants to prevent blood clots.",
      "Statins to lower cholesterol."
    ],
    "correctAnswer": "Insulin to regulate blood sugar levels.",
    "bg_image": "ruth_diabetes.jpg"
  },
  "scene24": {
    "text": "While checking a patient's chart, Ruth thinks about asthma. 'A chronic condition where the airways become inflamed and narrow,' she recalls. What triggers asthma, and what is a first-line treatment?",
    "options": [
      "Triggered by stress, treated with beta-blockers.",
      "Caused by airborne allergens, managed with inhaled corticosteroids.",
      "Due to high blood sugar, treated with oral hypoglycemics.",
      "Stemming from an electrolyte imbalance, managed with IV fluids."
    ],
    "correctAnswer": "Caused by airborne allergens, managed with inhaled corticosteroids.",
    "bg_image": "ruth_asthma.jpg"
  },
  "scene25": {
    "text": "Ruth reviews the symptoms of a patient with suspected peptic ulcer disease. 'Ulcers form in the lining of the stomach or the first part of the small intestine,' she reflects. What is a common cause of ulcers, and which medication is typically used?",
    "options": [
      "Caused by Helicobacter pylori, treated with a proton pump inhibitor.",
      "Resulting from high cholesterol, managed with statins.",
      "Due to chronic stress, treated with anxiolytics.",
      "Stemming from alcohol abuse, managed with thiamine."
    ],
    "correctAnswer": "Caused by Helicobacter pylori, treated with a proton pump inhibitor.",
    "bg_image": "ruth_ulcer.jpg"
  },
  "scene26": {
    "text": "Ruth is preparing medication for a patient with atrial fibrillation. She knows that anticoagulation is key. 'Warfarin is often used, but what is a newer alternative that requires less monitoring?' she ponders.",
    "options": [
      "Dabigatran, which directly inhibits thrombin.",
      "Metformin, which is primarily for diabetes.",
      "Lisinopril, used for hypertension.",
      "Atorvastatin, which lowers cholesterol."
    ],
    "correctAnswer": "Dabigatran, which directly inhibits thrombin.",
    "bg_image": "ruth_afib.jpg"
  },
  "scene27": {
    "text": "While checking on a patient with chronic pain, Ruth recalls, 'NSAIDs are commonly used, but for long-term management, what is a drug that works centrally and can be used for neuropathic pain?'",
    "options": [
      "Ibuprofen, a classic NSAID.",
      "Gabapentin, which modulates calcium channels.",
      "Aspirin, which inhibits platelet aggregation.",
      "Hydrochlorothiazide, a diuretic."
    ],
    "correctAnswer": "Gabapentin, which modulates calcium channels.",
    "bg_image": "ruth_chronic_pain.jpg"
  },
  "scene28": {
    "text": "A patient with bipolar disorder is experiencing a manic episode. Ruth thinks, 'Lithium is a mood stabilizer, but what is another option that also serves as an anticonvulsant?'",
    "options": [
      "Valproate, which increases GABA levels in the brain.",
      "Ciprofloxacin, an antibiotic.",
      "Simvastatin, for hyperlipidemia.",
      "Furosemide, a loop diuretic."
    ],
    "correctAnswer": "Valproate, which increases GABA levels in the brain.",
    "bg_image": "ruth_bipolar.jpg"
  },
  "scene29": {
    "text": "Ruth reviews a patient's history of gastroesophageal reflux disease (GERD). 'Proton pump inhibitors like omeprazole are effective,' she recalls. 'But what is a medication that neutralizes stomach acid and provides quicker relief?'",
    "options": [
      "Calcium carbonate, an antacid.",
      "Metoclopramide, which promotes gastric emptying.",
      "Sildenafil, used for erectile dysfunction.",
      "Alendronate, for osteoporosis."
    ],
    "correctAnswer": "Calcium carbonate, an antacid.",
    "bg_image": "ruth_gerd.jpg"
  },
  "scene30": {
    "text": "Contemplating a patient's diagnosis of congestive heart failure, Ruth considers, 'Diuretics are crucial for fluid management. Besides furosemide, what is another diuretic that helps reduce the risk of hospitalization for heart failure?'",
    "options": [
      "Spironolactone, a potassium-sparing diuretic.",
      "Amoxicillin, an antibiotic.",
      "Levothyroxine, for hypothyroidism.",
      "Amlodipine, a calcium channel blocker."
    ],
    "correctAnswer": "Spironolactone, a potassium-sparing diuretic.",
    "bg_image": "ruth_heart_failure.jpg",
    "end":true
  }
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
    nurseScore
    displayScene()
})
// Initial display
displayScene();
