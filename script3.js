
// game.js day game
const scenes = {
  "scene1": {
    "text": "You are about to perform wound cleaning on a patient with a laceration on their forearm. What is the first step?",
    "options": [
      "Put on personal protective equipment (PPE) including gloves and a mask.",
      "Clean the wound with sterile saline solution.",
      "Assess the wound for signs of infection or foreign objects.",
      "Administer local anesthesia to numb the area."
    ],
    "correctAnswer": "Put on personal protective equipment (PPE) including gloves and a mask."
  },
  "scene2": {
    "text": "You are preparing to perform a high vaginal swab for a patient with suspected vaginal infection. What is the correct technique?",
    "options": [
      "Insert a sterile cotton swab into the vagina and rotate it gently.",
      "Clean the vaginal area with antiseptic solution before swabbing.",
      "Apply a topical anesthetic to reduce discomfort during the procedure.",
      "Perform a speculum examination before collecting the swab."
    ],
    "correctAnswer": "Insert a sterile cotton swab into the vagina and rotate it gently."
  },
  "scene3": {
    "text": "You need to administer an intramuscular injection to a patient. What is the preferred site for this injection?",
    "options": [
      "Deltoid muscle",
      "Gluteus maximus muscle",
      "Vastus lateralis muscle",
      "Subcutaneous tissue in the abdomen"
    ],
    "correctAnswer": "Gluteus maximus muscle"
  },
  "scene4": {
    "text": "You are teaching a patient how to perform proper hand washing technique. What is the recommended duration for hand washing?",
    "options": [
      "5 seconds",
      "10 seconds",
      "20 seconds",
      "30 seconds"
    ],
    "correctAnswer": "20 seconds"
  },
  "scene5": {
    "text": "A patient requires an intravenous (IV) infusion. What is the appropriate action before inserting the IV catheter?",
    "options": [
      "Apply a tourniquet proximal to the insertion site.",
      "Clean the insertion site with soap and water.",
      "Insert the IV catheter at a 45-degree angle to the skin.",
      "Flush the catheter with normal saline before use."
    ],
    "correctAnswer": "Apply a tourniquet proximal to the insertion site."
  },
  "scene6": {
    "text": "You are preparing to change a sterile dressing on a patient's surgical wound. What is the correct sequence of steps?",
    "options": [
      "Remove the old dressing, clean the wound, apply a new dressing, and dispose of used materials.",
      "Clean the wound, remove the old dressing, apply a new dressing, and dispose of used materials.",
      "Apply a new dressing, remove the old dressing, clean the wound, and dispose of used materials.",
      "Dispose of used materials, remove the old dressing, clean the wound, and apply a new dressing."
    ],
    "correctAnswer": "Remove the old dressing, clean the wound, apply a new dressing, and dispose of used materials."
  },
"scene7": {
    "text": "You are preparing to administer medication to a patient via a nasogastric tube. What is the correct procedure?",
    "options": [
      "Crush the medication and mix it with water before administering it through the tube.",
      "Flush the tube with 30 mL of water before and after administering the medication.",
      "Insert the medication directly into the tube without dilution.",
      "Administer the medication quickly to minimize discomfort for the patient."
    ],
    "correctAnswer": "Flush the tube with 30 mL of water before and after administering the medication."
  },
  "scene8": {
    "text": "A patient requires a urinary catheterization procedure. What is the appropriate action before inserting the catheter?",
    "options": [
      "Apply a topical anesthetic to the urethral meatus.",
      "Clean the perineal area with an antiseptic solution.",
      "Use sterile gloves to handle the catheter.",
      "Insert the catheter while the patient is standing."
    ],
    "correctAnswer": "Clean the perineal area with an antiseptic solution."
  },
  "scene9": {
    "text": "You are assisting a patient with ambulation after surgery. What is the correct technique?",
    "options": [
      "Support the patient under the arms and allow them to bear weight on both legs.",
      "Encourage the patient to walk without any support for faster recovery.",
      "Hold the patient's hands and pull them forward to help them walk.",
      "Use a gait belt around the patient's waist for stability."
    ],
    "correctAnswer": "Use a gait belt around the patient's waist for stability."
  },
  "scene10": {
    "text": "A patient is scheduled for a bronchoscopy procedure. What is the nurse's role in preparing the patient?",
    "options": [
      "Administer preoperative sedation to the patient.",
      "Explain the procedure and obtain informed consent from the patient.",
      "Position the patient in a supine position with arms at their sides.",
      "Ensure the patient has not eaten or drank anything for 24 hours before the procedure."
    ],
    "correctAnswer": "Explain the procedure and obtain informed consent from the patient."
  },
  "scene11": {
    "text": "You need to perform a capillary blood glucose test for a diabetic patient. What is the correct procedure?",
    "options": [
      "Clean the finger with alcohol before pricking it for blood.",
      "Massage the finger to increase blood flow before the test.",
      "Wipe away the first drop of blood before collecting the sample.",
      "Hold the finger above the heart level during the test."
    ],
    "correctAnswer": "Wipe away the first drop of blood before collecting the sample."
  },
  "scene12": {
    "text": "You are preparing to administer a subcutaneous injection to a patient. What is the appropriate needle size for this injection?",
    "options": [
      "18-gauge needle",
      "23-gauge needle",
      "25-gauge needle",
      "30-gauge needle"
    ],
    "correctAnswer": "25-gauge needle"
  },
"scene13": {
    "text": "You are assisting a patient with oral medication administration. What is the correct technique?",
    "options": [
      "Crush all tablets and mix them with applesauce for easier swallowing.",
      "Administer medications with a small amount of water, one at a time, and allow the patient to swallow each pill individually.",
      "Mix all medications together in a glass of juice to mask the taste.",
      "Place all tablets under the patient's tongue for faster absorption."
    ],
    "correctAnswer": "Administer medications with a small amount of water, one at a time, and allow the patient to swallow each pill individually."
  },
  "scene14": {
    "text": "A patient requires a sterile dressing change. What is the appropriate action for maintaining sterility?",
    "options": [
      "Keep the dressing supplies open on a clean tray.",
      "Touch the inside of the sterile dressing with bare hands.",
      "Cover the sterile field with a non-sterile towel.",
      "Use sterile gloves when handling the dressing and wound."
    ],
    "correctAnswer": "Use sterile gloves when handling the dressing and wound."
  },
  "scene15": {
    "text": "You need to administer eye drops to a patient. What is the correct technique?",
    "options": [
      "Apply the eye drops directly onto the cornea.",
      "Instruct the patient to blink vigorously after administering the drops.",
      "Pull down the lower eyelid and instill the drops into the conjunctival sac.",
      "Have the patient tilt their head backward and apply pressure to the inner corner of the eye after administering the drops."
    ],
    "correctAnswer": "Pull down the lower eyelid and instill the drops into the conjunctival sac."
  },
  "scene16": {
    "text": "You are preparing to administer a nebulizer treatment to a patient with asthma. What is the correct procedure?",
    "options": [
      "Administer the medication using a dry powder inhaler.",
      "Instruct the patient to exhale into the nebulizer before inhaling the medication.",
      "Attach the nebulizer to an oxygen source and adjust the flow rate to 15 L/min.",
      "Monitor the patient for signs of respiratory distress during and after the treatment."
    ],
    "correctAnswer": "Monitor the patient for signs of respiratory distress during and after the treatment."
  },
  "scene17": {
    "text": "You need to obtain a urine sample from a patient for analysis. What is the correct technique?",
    "options": [
      "Collect the urine sample in a sterile container after the patient has voided completely.",
      "Use a clean, dry container to collect a midstream urine sample.",
      "Collect the first voided urine of the day for the most accurate results.",
      "Have the patient urinate directly into the specimen cup without any precautions."
    ],
    "correctAnswer": "Use a clean, dry container to collect a midstream urine sample."
  },
  "scene18": {
    "text": "A patient requires a bed bath. What is the appropriate action for maintaining patient privacy and dignity?",
    "options": [
      "Close the curtains around the patient's bed to shield them from view.",
      "Invite other patients and staff to observe the bath to ensure safety.",
      "Ask the patient to remove all clothing before beginning the bath.",
      "Use a communal bathing area to save time and resources."
    ],
    "correctAnswer": "Close the curtains around the patient's bed to shield them from view."
  },
"scene19": {
    "text": "You are preparing to administer a heparin injection to a patient. What is the appropriate site for subcutaneous injection?",
    "options": [
      "Upper arm",
      "Abdomen",
      "Buttocks",
      "Thigh"
    ],
    "correctAnswer": "Abdomen"
  },
  "scene20": {
    "text": "A patient needs assistance with using a walker. What is the correct technique for providing support?",
    "options": [
      "Hold the walker slightly behind the patient to provide assistance.",
      "Encourage the patient to lean heavily on the walker for support.",
      "Instruct the patient to walk quickly to improve mobility.",
      "Guide the patient to lift the walker with each step for stability."
    ],
    "correctAnswer": "Hold the walker slightly behind the patient to provide assistance."
  },
  "scene21": {
    "text": "You are preparing to administer an intramuscular injection to a patient. What is the appropriate needle length for this injection?",
    "options": [
      "1/2 inch",
      "1 inch",
      "1.5 inches",
      "2 inches"
    ],
    "correctAnswer": "1.5 inches"
  },
  "scene22": {
    "text": "A patient requires a wound irrigation procedure. What is the appropriate solution for wound irrigation?",
    "options": [
      "Normal saline",
      "Hydrogen peroxide",
      "Rubbing alcohol",
      "Iodine solution"
    ],
    "correctAnswer": "Normal saline"
  },
  "scene23": {
    "text": "You need to assist a patient with using a bedside commode. What is the correct technique?",
    "options": [
      "Place the commode at the foot of the bed for easy access.",
      "Encourage the patient to stand up and walk to the commode independently.",
      "Instruct the patient to hold onto the side rails for support while using the commode.",
      "Empty the commode after each use to maintain cleanliness."
    ],
    "correctAnswer": "Empty the commode after each use to maintain cleanliness."
  },
  "scene24": {
    "text": "You are preparing to administer ear drops to a patient. What is the correct technique for administering ear drops?",
    "options": [
      "Place the ear drops directly onto the eardrum.",
      "Insert the dropper into the ear canal and squeeze the drops in.",
      "Instruct the patient to tilt their head away from the affected ear.",
      "Have the patient lie flat on their side with the affected ear facing up."
    ],
    "correctAnswer": "Insert the dropper into the ear canal and squeeze the drops in."
  },
  "scene25": {
    "text": "A patient requires a continuous passive motion (CPM) machine after joint surgery. What is the purpose of using a CPM machine?",
    "options": [
      "To prevent blood clots",
      "To promote joint mobility and prevent stiffness",
      "To maintain correct posture while sitting",
      "To reduce inflammation and swelling"
    ],
    "correctAnswer": "To promote joint mobility and prevent stiffness"
  },
  "scene26": {
    "text": "You need to apply a transparent film dressing to a wound. What is the correct technique for applying the dressing?",
    "options": [
      "Place the dressing directly over the wound without any covering.",
      "Cut the dressing to fit the wound size and peel off the backing before applying.",
      "Wrap the wound with gauze before applying the transparent film dressing.",
      "Apply adhesive tape around the edges of the dressing to secure it in place."
    ],
    "correctAnswer": "Cut the dressing to fit the wound size and peel off the backing before applying."
  },
  "scene27": {
    "text": "A patient requires oxygen therapy via nasal cannula. What is the appropriate flow rate for oxygen delivery?",
    "options": [
      "1-2 L/min",
      "3-5 L/min",
      "6-8 L/min",
      "9-10 L/min"
    ],
    "correctAnswer": "1-2 L/min"
  },
  "scene28": {
    "text": "You need to perform a finger stick blood glucose test for a diabetic patient. What is the correct technique for obtaining a blood sample?",
    "options": [
      "Wipe the fingertip with an alcohol swab before pricking it.",
      "Prick the center of the fingertip to minimize pain.",
      "Squeeze the fingertip firmly to produce a large blood drop.",
      "Use the same lancet device for multiple patients to save time."
    ],
    "correctAnswer": "Wipe the fingertip with an alcohol swab before pricking it."
  },
  "scene29": {
    "text": "A patient needs assistance with using a bedpan. What is the appropriate technique for positioning the patient?",
    "options": [
      "Place the patient in a sitting position on the bed before positioning the bedpan.",
      "Instruct the patient to lift their hips while you slide the bedpan underneath.",
      "Have the patient lie flat on their back while you position the bedpan.",
      "Leave the bedpan in place for an extended period to ensure complete voiding."
    ],
    "correctAnswer": "Instruct the patient to lift their hips while you slide the bedpan underneath."
  },
  "scene30": {
    "text": "You are assisting a patient with deep breathing exercises. What is the correct technique for deep breathing?",
    "options": [
      "Instruct the patient to breathe shallowly and rapidly.",
      "Have the patient inhale slowly through the nose and exhale quickly through the mouth.",
      "Encourage the patient to use their chest muscles only for breathing.",
      "Instruct the patient to inhale deeply through the nose and exhale slowly through pursed lips."
    ],
    "correctAnswer": "Instruct the patient to inhale deeply through the nose and exhale slowly through pursed lips."
  },
  "scene31": {
    "text": "A patient requires assistance with using a walker on stairs. What is the correct technique for stair ambulation with a walker?",
    "options": [
      "Have the patient lead with the affected leg while going up stairs.",
      "Instruct the patient to hold onto the walker with one hand and the handrail with the other.",
      "Encourage the patient to step down with the unaffected leg first while going down stairs.",
      "Use the walker to support the patient's weight while they climb stairs."
    ],
    "correctAnswer": "Encourage the patient to step down with the unaffected leg first while going down stairs.",
    end:true  
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
