// game.js day game
const scenes = {
  "scene1": {
    "text": "You are preparing to perform a head-to-toe assessment on a patient admitted to the medical-surgical unit. What is the correct sequence for conducting the assessment?",
    "options": [
      "Start with the abdomen, then assess the extremities, head, and neck last.",
      "Begin with vital signs, then proceed to assess the head, neck, chest, abdomen, and extremities.",
      "Assess the extremities first, then move to the head, neck, chest, abdomen, and finish with vital signs.",
      "Start with the head, neck, and chest, then assess the abdomen and extremities."
    ],
    "correctAnswer": "Begin with vital signs, then proceed to assess the head, neck, chest, abdomen, and extremities."
  },
  "scene2": {
    "text": "A pediatric patient presents with a fever of unknown origin. What initial assessments should the nurse prioritize?",
    "options": [
      "Assess for rash and perform a neurological examination.",
      "Obtain a detailed family history and review immunization records.",
      "Measure vital signs and assess for signs of dehydration or distress.",
      "Perform a complete blood count (CBC) and blood culture."
    ],
    "correctAnswer": "Measure vital signs and assess for signs of dehydration or distress."
  },
  "scene3": {
    "text": "You are caring for a post-operative surgical patient who is at risk for deep vein thrombosis (DVT). What interventions should the nurse implement to prevent DVT?",
    "options": [
      "Encourage early ambulation and leg exercises.",
      "Administer anticoagulant medications prophylactically.",
      "Apply warm compresses to the lower extremities.",
      "Limit fluid intake to reduce the risk of fluid overload."
    ],
    "correctAnswer": "Encourage early ambulation and leg exercises."
  },
  "scene4": {
    "text": "A patient with diabetes mellitus type 2 presents with symptoms of hyperglycemia. What nursing interventions are appropriate for managing hyperglycemia?",
    "options": [
      "Administer regular insulin via intramuscular injection.",
      "Encourage increased carbohydrate intake to stabilize blood sugar levels.",
      "Monitor blood glucose levels regularly and administer insulin as prescribed.",
      "Encourage the patient to skip meals to avoid further elevations in blood sugar."
    ],
    "correctAnswer": "Monitor blood glucose levels regularly and administer insulin as prescribed."
  },
  "scene5": {
    "text": "You are assisting with the admission of a pregnant patient to the labor and delivery unit. What assessments should the nurse prioritize during the initial admission process?",
    "options": [
      "Assess fetal heart rate and monitor uterine contractions.",
      "Perform a thorough physical examination including cervical dilation.",
      "Initiate continuous fetal monitoring and prepare for imminent delivery.",
      "Review the patient's birth plan and preferences for pain management."
    ],
    "correctAnswer": "Assess fetal heart rate and monitor uterine contractions."
  },
  "scene6": {
    "text": "A patient is admitted with a suspected ectopic pregnancy. What nursing interventions are essential for the management of this condition?",
    "options": [
      "Administering intravenous (IV) fluids and initiating broad-spectrum antibiotics.",
      "Preparing the patient for surgical intervention to remove the ectopic pregnancy.",
      "Monitoring vital signs closely and providing emotional support to the patient.",
      "Administering oxytocin to induce uterine contractions and facilitate expulsion of the ectopic pregnancy."
    ],
    "correctAnswer": "Monitoring vital signs closely and providing emotional support to the patient."
  },
  "scene7": {
    "text": "You are leading a nursing team on a busy medical-surgical unit. What strategies should the nurse manager employ to promote effective communication and teamwork among the nursing staff?",
    "options": [
      "Assign tasks based on individual preferences rather than skill levels.",
      "Hold regular team meetings to discuss patient care and address any issues or concerns.",
      "Discourage open communication to avoid conflicts and maintain hierarchy.",
      "Minimize feedback and recognition to avoid favoritism among staff members."
    ],
    "correctAnswer": "Hold regular team meetings to discuss patient care and address any issues or concerns."
  },
  "scene8": {
    "text": "You are responsible for administering medications to patients on the unit. What safety measures should the nurse implement to prevent medication errors?",
    "options": [
      "Administer medications without double-checking the patient's identification.",
      "Use ambiguous abbreviations and acronyms to save time when documenting medication administration.",
      "Avoid checking the patient's allergies and previous adverse reactions before administering medications.",
      "Document medication administration immediately after giving the medications."
    ],
    "correctAnswer": "Avoid checking the patient's allergies and previous adverse reactions before administering medications."
  },
  "scene9": {
    "text": "You are conducting a health promotion session for a group of older adults in the community. What topics should the nurse prioritize during the session?",
    "options": [
      "Discussing the importance of regular exercise and physical activity.",
      "Providing information on the latest medical treatments and interventions.",
      "Encouraging the use of tobacco and alcohol to relieve stress and anxiety.",
      "Promoting unhealthy dietary habits and high-fat foods."
    ],
    "correctAnswer": "Discussing the importance of regular exercise and physical activity."
  },
  "scene10": {
    "text": "A patient is admitted with acute respiratory distress syndrome (ARDS). What nursing interventions are essential for the management of ARDS?",
    "options": [
      "Positioning the patient in a high Fowler's position to maximize lung expansion.",
      "Administering supplemental oxygen via a non-rebreather mask at 100% FiO2.",
      "Encouraging the patient to take deep breaths and cough regularly to clear secretions.",
      "Initiating mechanical ventilation with low tidal volumes and positive end-expiratory pressure (PEEP)."
    ],
    "correctAnswer": "Initiating mechanical ventilation with low tidal volumes and positive end-expiratory pressure (PEEP)."
  },
  "scene11": {
    "text": "You are assisting with the care of a patient who has just undergone a cesarean section. What nursing interventions are essential for the post-operative management of the patient?",
    "options": [
      "Encouraging early ambulation and frequent position changes.",
      "Administering analgesic medications as prescribed to manage pain.",
      "Encouraging the patient to eat a large meal immediately after surgery.",
      "Removing the abdominal dressing to assess the incision site."
    ],
    "correctAnswer": "Administering analgesic medications as prescribed to manage pain."
  },
  "scene12": {
    "text": "A patient is admitted with suspected meningitis. What nursing interventions are essential for the care of a patient with meningitis?",
    "options": [
      "Initiate droplet precautions and place the patient in a private room.",
      "Administer antibiotics intravenously as prescribed by the healthcare provider.",
      "Encourage the patient to increase fluid intake to promote hydration.",
      "Monitor for signs of increased intracranial pressure and neurological changes."
    ],
    "correctAnswer": "Initiate droplet precautions and place the patient in a private room."
  },
  "scene13": {
    "text": "You are caring for a pediatric patient with asthma exacerbation. What nursing interventions are essential for managing asthma exacerbation in children?",
    "options": [
      "Administering oral corticosteroids as prescribed to reduce airway inflammation.",
      "Encouraging the child to engage in vigorous physical activity to promote lung expansion.",
      "Avoiding the use of bronchodilators and rescue inhalers.",
      "Administering high-flow oxygen therapy via a non-rebreather mask."
    ],
    "correctAnswer": "Administering oral corticosteroids as prescribed to reduce airway inflammation."
  },
  "scene14": {
    "text": "You are providing care to a patient with chronic kidney disease (CKD). What nursing interventions are essential for managing CKD?",
    "options": [
      "Encouraging the patient to consume a high-protein diet to maintain muscle mass.",
      "Monitoring fluid intake and restricting fluids as prescribed by the healthcare provider.",
      "Administering diuretics to promote urine output and eliminate excess fluid.",
      "Educating the patient on the importance of avoiding medications that can further damage the kidneys."
    ],
    "correctAnswer": "Educating the patient on the importance of avoiding medications that can further damage the kidneys."
  },
  "scene15": {
    "text": "You are caring for a patient with a traumatic brain injury (TBI). What nursing interventions are essential for the care of a patient with TBI?",
    "options": [
      "Keeping the head of the bed flat to prevent increases in intracranial pressure.",
      "Administering sedatives to promote rest and relaxation.",
      "Monitoring neurologic status closely and assessing for signs of increased intracranial pressure.",
      "Encouraging the patient to engage in strenuous physical activity to promote recovery."
    ],
    "correctAnswer": "Monitoring neurologic status closely and assessing for signs of increased intracranial pressure."
  },
  "scene16": {
    "text": "You are providing care to a patient with heart failure. What nursing interventions are essential for managing heart failure?",
    "options": [
      "Encouraging the patient to limit sodium intake to prevent fluid retention.",
      "Administering beta-blockers to increase heart rate and cardiac output.",
      "Promoting a sedentary lifestyle to conserve energy and reduce cardiac workload.",
      "Encouraging the patient to consume large amounts of fluid to prevent dehydration."
    ],
    "correctAnswer": "Encouraging the patient to limit sodium intake to prevent fluid retention."
  },
  "scene17": {
    "text": "You are leading a nursing team in the emergency department during a mass casualty incident. What actions should the nurse manager prioritize during this crisis?",
    "options": [
      "Ensuring adequate staffing and resources to meet the needs of all patients.",
      "Implementing triage protocols to prioritize care for patients with life-threatening injuries.",
      "Assigning tasks based on individual preferences rather than skill levels.",
      "Delaying communication with emergency medical services (EMS) until the situation is under control."
    ],
    "correctAnswer": "Ensuring adequate staffing and resources to meet the needs of all patients."
  },
  "scene18": {
    "text": "You are caring for a patient with septic shock. What nursing interventions are essential for the management of septic shock?",
    "options": [
      "Administering vasopressors to increase blood pressure and improve perfusion.",
      "Encouraging the patient to increase oral fluid intake to prevent dehydration.",
      "Applying cold compresses to the skin to reduce fever.",
      "Administering antipyretics to lower the patient's temperature."
    ],
    "correctAnswer": "Administering vasopressors to increase blood pressure and improve perfusion."
  },
  "scene19": {
    "text": "A patient with Parkinson's disease is admitted to the medical-surgical unit. What nursing interventions are essential for the care of a patient with Parkinson's disease?",
    "options": [
      "Encouraging the patient to move quickly and perform tasks rapidly to minimize symptoms.",
      "Administering anticholinergic medications to decrease muscle rigidity.",
      "Assisting with activities of daily living and providing a safe environment.",
      "Encouraging the patient to consume a high-protein diet to maintain muscle strength."
    ],
    "correctAnswer": "Assisting with activities of daily living and providing a safe environment."
  },
  "scene20": {
    "text": "You are caring for a patient with a history of substance abuse who is experiencing alcohol withdrawal. What nursing interventions are essential for managing alcohol withdrawal syndrome?",
    "options": [
      "Administering benzodiazepines to reduce anxiety and prevent seizures.",
      "Encouraging the patient to consume caffeinated beverages to counteract sedation.",
      "Placing the patient in a quiet, dimly lit room to promote relaxation.",
      "Administering opioid analgesics to relieve withdrawal symptoms."
    ],
    "correctAnswer": "Administering benzodiazepines to reduce anxiety and prevent seizures."
  },
"scene21": {
    "text": "You are preparing a patient for surgery. What nursing interventions are essential during the preoperative phase?",
    "options": [
      "Ensuring the patient has fasted appropriately to prevent aspiration during anesthesia.",
      "Administering pain medication to keep the patient comfortable before surgery.",
      "Encouraging the patient to engage in strenuous physical activity to reduce anxiety.",
      "Administering anticoagulants to prevent blood clots during surgery."
    ],
    "correctAnswer": "Ensuring the patient has fasted appropriately to prevent aspiration during anesthesia."
  },
  "scene22": {
    "text": "You are caring for a patient with diabetes mellitus who requires insulin administration. What nursing interventions are essential for safe insulin administration?",
    "options": [
      "Administering insulin without checking the patient's blood glucose levels.",
      "Rotating injection sites to prevent lipohypertrophy and ensure optimal insulin absorption.",
      "Administering insulin immediately after the patient finishes a meal.",
      "Administering insulin intramuscularly to ensure rapid absorption."
    ],
    "correctAnswer": "Rotating injection sites to prevent lipohypertrophy and ensure optimal insulin absorption."
  },
  "scene23": {
    "text": "You are providing care to a patient with a suspected urinary tract infection (UTI). What nursing interventions are essential for the management of UTI?",
    "options": [
      "Encouraging the patient to limit fluid intake to reduce urinary frequency.",
      "Administering antibiotics without obtaining a urine culture and sensitivity.",
      "Encouraging the patient to consume caffeinated beverages to alleviate symptoms.",
      "Ensuring proper perineal hygiene to prevent the spread of infection."
    ],
    "correctAnswer": "Ensuring proper perineal hygiene to prevent the spread of infection."
  },
  "scene24": {
    "text": "You are caring for a postoperative patient who has a surgical wound. What nursing interventions are essential for wound care?",
    "options": [
      "Applying direct pressure to the wound to control bleeding.",
      "Removing the dressing frequently to assess the wound.",
      "Cleaning the wound with hydrogen peroxide to prevent infection.",
      "Using sterile technique when changing dressings to minimize the risk of contamination."
    ],
    "correctAnswer": "Using sterile technique when changing dressings to minimize the risk of contamination."
  },
  "scene25": {
    "text": "You are caring for a patient with a central venous catheter (CVC). What nursing interventions are essential for CVC care?",
    "options": [
      "Using aseptic technique when accessing and caring for the catheter to prevent infection.",
      "Applying pressure to the insertion site to promote catheter patency.",
      "Changing the dressing only when it becomes visibly soiled.",
      "Flushing the catheter with normal saline only when necessary to maintain patency."
    ],
    "correctAnswer": "Using aseptic technique when accessing and caring for the catheter to prevent infection."
  },
  "scene26": {
    "text": "You are providing care to a patient receiving enteral nutrition via a feeding tube. What nursing interventions are essential for the administration of enteral nutrition?",
    "options": [
      "Administering enteral feedings at room temperature to prevent discomfort.",
      "Elevating the head of the bed to at least 30 degrees during and after feedings to reduce the risk of aspiration.",
      "Mixing medications with enteral feedings to ensure proper absorption.",
      "Administering enteral feedings quickly to minimize the duration of tube feeding."
    ],
    "correctAnswer": "Elevating the head of the bed to at least 30 degrees during and after feedings to reduce the risk of aspiration."
  },
  "scene27": {
    "text": "You are caring for a patient with a nasogastric (NG) tube in place. What nursing interventions are essential for NG tube care?",
    "options": [
      "Securing the NG tube to the patient's face using adhesive tape.",
      "Clamping the NG tube when not in use to prevent leakage.",
      "Assessing the placement of the NG tube by auscultating air in the stomach.",
      "Irrigating the NG tube with medication without checking for placement first."
    ],
    "correctAnswer": "Assessing the placement of the NG tube by auscultating air in the stomach."
  },
  "scene28": {
    "text": "You are preparing to administer a medication via the intramuscular (IM) route. What nursing interventions are essential for safe IM medication administration?",
    "options": [
      "Aspirating for blood return after inserting the needle to ensure proper placement.",
      "Selecting the smallest gauge needle available to minimize patient discomfort.",
      "Injecting the medication rapidly to reduce the risk of tissue irritation.",
      "Administering more than the recommended volume of medication in a single injection site."
    ],
    "correctAnswer": "Aspirating for blood return after inserting the needle to ensure proper placement."
  },
  "scene29": {
    "text": "You are caring for a patient with a tracheostomy tube in place. What nursing interventions are essential for tracheostomy care?",
    "options": [
      "Changing the tracheostomy tube only when it becomes visibly soiled.",
      "Cleaning around the stoma site with alcohol-based solutions to prevent infection.",
      "Removing the inner cannula to clean it with tap water and reinserting it without drying.",
      "Maintaining a humidified environment to prevent mucous plugs and maintain airway patency."
    ],
    "correctAnswer": "Maintaining a humidified environment to prevent mucous plugs and maintain airway patency."
  },
  "scene30": {
    "text": "You are leading a team of nurses during a code blue emergency. What actions should the nursing leader prioritize during the resuscitation process?",
    "options": [
      "Assigning roles and delegating tasks to team members based on their competencies.",
      "Delaying the initiation of cardiopulmonary resuscitation (CPR) until the physician arrives.",
      "Allowing family members to remain present during the resuscitation process.",
      "Administering high-flow oxygen therapy without assessing the patient's airway."
    ],
    "correctAnswer": "Assigning roles and delegating tasks to team members based on their competencies."
  },
"scene31": {
    "text": "You are conducting a medication reconciliation for a patient admitted to the hospital. What nursing interventions are essential for accurate medication reconciliation?",
    "options": [
      "Relying solely on the patient's verbal report of their medications.",
      "Reviewing medication lists from multiple sources to ensure accuracy.",
      "Disregarding over-the-counter medications and supplements during reconciliation.",
      "Completing medication reconciliation only upon discharge from the hospital."
    ],
    "correctAnswer": "Reviewing medication lists from multiple sources to ensure accuracy."
  },
  "scene32": {
    "text": "You are caring for a pediatric patient with a fever. What nursing interventions are essential for managing fever in children?",
    "options": [
      "Administering aspirin to reduce fever in children under the age of 12.",
      "Encouraging tepid sponge baths to promote heat loss.",
      "Limiting fluid intake to prevent dehydration.",
      "Using ice packs directly on the skin to rapidly reduce body temperature."
    ],
    "correctAnswer": "Encouraging tepid sponge baths to promote heat loss."
  },
  "scene33": {
    "text": "You are providing care to a patient with a chest tube in place. What nursing interventions are essential for chest tube management?",
    "options": [
      "Clamping the chest tube during transportation to prevent air leaks.",
      "Milking or stripping the chest tube to maintain patency.",
      "Positioning the patient on the unaffected side to promote drainage.",
      "Assessing the color, amount, and consistency of drainage regularly."
    ],
    "correctAnswer": "Assessing the color, amount, and consistency of drainage regularly."
  },
  "scene34": {
    "text": "You are assisting with the insertion of a urinary catheter for a patient. What nursing interventions are essential for urinary catheterization?",
    "options": [
      "Using sterile technique during catheter insertion to prevent infection.",
      "Inserting the catheter without lubricating the tip to minimize discomfort.",
      "Securing the catheter loosely to the patient's thigh to prevent tension.",
      "Emptying the catheter bag when it is completely full to avoid leakage."
    ],
    "correctAnswer": "Using sterile technique during catheter insertion to prevent infection."
  },
  "scene35": {
    "text": "You are caring for a patient receiving blood transfusion. What nursing interventions are essential for safe blood transfusion?",
    "options": [
      "Administering blood transfusion rapidly to minimize transfusion reactions.",
      "Starting the transfusion with normal saline as a prime solution.",
      "Assessing vital signs before, during, and after the transfusion.",
      "Using the same IV line for blood transfusion and other medications to save time."
    ],
    "correctAnswer": "Assessing vital signs before, during, and after the transfusion."
  },
  "scene36": {
    "text": "You are providing care to a patient with a nasogastric (NG) tube. What nursing interventions are essential for NG tube feeding?",
    "options": [
      "Administering feedings quickly to complete the procedure faster.",
      "Elevating the head of the bed to at least 45 degrees during and after feedings.",
      "Flushing the NG tube with medication immediately after feeding to clear the tube.",
      "Mixing medications with feedings without checking for compatibility."
    ],
    "correctAnswer": "Elevating the head of the bed to at least 45 degrees during and after feedings."
  },
  "scene37": {
    "text": "You are caring for a patient with a wound that requires irrigation. What nursing interventions are essential for wound irrigation?",
    "options": [
      "Using tap water for wound irrigation to save resources.",
      "Irrigating the wound forcefully to remove debris quickly.",
      "Using aseptic technique during wound irrigation to prevent contamination.",
      "Irrigating the wound in the opposite direction of the wound edges to promote healing."
    ],
    "correctAnswer": "Using aseptic technique during wound irrigation to prevent contamination."
  },
  "scene38": {
    "text": "You are leading a team of nurses during a disaster response in the hospital. What actions should the nursing leader prioritize during the disaster response?",
    "options": [
      "Assigning tasks based on individual preferences rather than competencies.",
      "Communicating effectively with team members and other healthcare providers.",
      "Delaying the implementation of the disaster response plan until the situation worsens.",
      "Disregarding the emotional needs of patients and families during the response."
    ],
    "correctAnswer": "Communicating effectively with team members and other healthcare providers."
  },
  "scene39": {
    "text": "You are providing care to a patient with a central venous catheter (CVC) who develops signs of catheter-related bloodstream infection (CRBSI). What nursing interventions are essential for managing CRBSI?",
    "options": [
      "Removing the CVC immediately without obtaining blood cultures.",
      "Administering broad-spectrum antibiotics without consulting the healthcare provider.",
      "Using antiseptic agents for catheter site care to prevent infection.",
      "Delaying the initiation of treatment until the patient develops septic shock."
    ],
    "correctAnswer": "Using antiseptic agents for catheter site care to prevent infection."
  },
  "scene40": {
    "text": "You are caring for a patient with a suspected myocardial infarction (MI) in the emergency department. What nursing interventions are essential for managing acute MI?",
    "options": [
      "Encouraging the patient to engage in vigorous physical activity to relieve chest pain.",
      "Administering aspirin and nitroglycerin promptly as prescribed.",
      "Delaying the administration of oxygen therapy until the patient's condition worsens.",
      "Monitoring vital signs every 4 hours to assess for changes."
    ],
    "correctAnswer": "Administering aspirin and nitroglycerin promptly as prescribed."
  },
"scene41": {
    "text": "You are providing care to a patient with diabetes mellitus who requires insulin administration. What nursing interventions are essential for safe insulin administration?",
    "options": [
      "Administering insulin without verifying the patient's blood glucose level.",
      "Rotating injection sites within the same anatomical area to prevent lipohypertrophy.",
      "Administering insulin intramuscularly to ensure rapid absorption.",
      "Skipping the verification of the insulin dose with another nurse."
    ],
    "correctAnswer": "Rotating injection sites within the same anatomical area to prevent lipohypertrophy."
  },
  "scene42": {
    "text": "You are caring for a patient with a traumatic brain injury (TBI) in the intensive care unit. What nursing interventions are essential for managing intracranial pressure (ICP)?",
    "options": [
      "Hyperventilating the patient to lower arterial carbon dioxide levels.",
      "Elevating the head of the bed to 90 degrees to facilitate drainage.",
      "Administering hypertonic saline solutions to decrease cerebral edema.",
      "Encouraging the patient to perform Valsalva maneuvers to decrease ICP."
    ],
    "correctAnswer": "Elevating the head of the bed to 30-45 degrees to facilitate drainage."
  },
  "scene43": {
    "text": "You are assisting with the care of a patient receiving mechanical ventilation. What nursing interventions are essential for preventing ventilator-associated pneumonia (VAP)?",
    "options": [
      "Performing oral care every 8 hours using only water.",
      "Positioning the patient in the supine position to optimize ventilation.",
      "Administering prophylactic antibiotics to all ventilated patients.",
      "Maintaining endotracheal tube cuff pressure within the recommended range."
    ],
    "correctAnswer": "Maintaining endotracheal tube cuff pressure within the recommended range."
  },
  "scene44": {
    "text": "You are caring for a patient with a suspected drug overdose in the emergency department. What nursing interventions are essential for managing drug overdose?",
    "options": [
      "Administering syrup of ipecac to induce vomiting.",
      "Monitoring vital signs every 2 hours until the patient stabilizes.",
      "Administering activated charcoal to decrease absorption of the ingested substance.",
      "Encouraging the patient to drink large amounts of water to dilute the ingested substance."
    ],
    "correctAnswer": "Administering activated charcoal to decrease absorption of the ingested substance."
  },
  "scene45": {
    "text": "You are providing care to a patient with sepsis. What nursing interventions are essential for managing sepsis?",
    "options": [
      "Administering vasopressors only when the patient's blood pressure drops below 90 mmHg.",
      "Initiating early goal-directed therapy (EGDT) to optimize hemodynamics.",
      "Delaying antibiotic administration until blood cultures are obtained.",
      "Maintaining normothermia by using cooling blankets."
    ],
    "correctAnswer": "Initiating early goal-directed therapy (EGDT) to optimize hemodynamics."
  },
  "scene46": {
    "text": "You are caring for a patient undergoing hemodialysis. What nursing interventions are essential for ensuring safe hemodialysis?",
    "options": [
      "Administering heparin intravenously to prevent clotting during dialysis.",
      "Encouraging the patient to consume a high-protein diet before dialysis sessions.",
      "Using tap water for dialysate preparation to save resources.",
      "Assessing the access site for signs of infection or clotting before and after dialysis."
    ],
    "correctAnswer": "Assessing the access site for signs of infection or clotting before and after dialysis."
  },
  "scene47": {
    "text": "You are providing care to a patient with a spinal cord injury. What nursing interventions are essential for preventing complications of spinal cord injury?",
    "options": [
      "Encouraging the patient to perform range of motion exercises independently.",
      "Administering opioid analgesics regularly for pain management.",
      "Maintaining the head of the bed flat to prevent orthostatic hypotension.",
      "Implementing pressure ulcer prevention measures, including regular repositioning."
    ],
    "correctAnswer": "Implementing pressure ulcer prevention measures, including regular repositioning."
  },
  "scene48": {
    "text": "You are assisting with the care of a patient undergoing a lumbar puncture. What nursing interventions are essential for safe lumbar puncture?",
    "options": [
      "Positioning the patient in the Trendelenburg position during the procedure.",
      "Applying pressure to the puncture site immediately after the procedure.",
      "Using a needle with a smaller gauge for easier insertion.",
      "Encouraging the patient to cough during the procedure to distract from discomfort."
    ],
    "correctAnswer": "Applying pressure to the puncture site immediately after the procedure."
  },
  "scene49": {
    "text": "You are providing care to a patient with a history of falls. What nursing interventions are essential for fall prevention?",
    "options": [
      "Using physical restraints to limit the patient's movement.",
      "Encouraging the patient to wear non-slip footwear.",
      "Keeping the patient's room well-lit at all times.",
      "Minimizing staff supervision during ambulation."
    ],
    "correctAnswer": "Encouraging the patient to wear non-slip footwear."
  },
  "scene50": {
    "text": "You are leading a team of nurses during a code blue situation. What actions should the nursing leader prioritize during the code blue response?",
    "options": [
      "Assigning tasks to team members without considering their competencies.",
      "Encouraging open communication and collaboration among team members.",
      "Delaying the initiation of cardiopulmonary resuscitation (CPR) until the physician arrives.",
      "Disregarding the emotional needs of the patient's family members during the response."
    ],
    "correctAnswer": "Encouraging open communication and collaboration among team members."
  },
"scene51": {
    "text": "You are caring for a patient who requires nasogastric tube (NGT) insertion. What nursing interventions are essential for safe NGT insertion?",
    "options": [
      "Coiling the NGT loosely before insertion to facilitate passage.",
      "Positioning the patient in a high Fowler's position during insertion.",
      "Verifying NGT placement by auscultating for bowel sounds and injecting air.",
      "Using a lubricant jelly with lidocaine for patient comfort."
    ],
    "correctAnswer": "Verifying NGT placement by auscultating for bowel sounds and injecting air."
  },
  "scene52": {
    "text": "You are assisting with the care of a patient who requires chest tube insertion. What nursing interventions are essential for safe chest tube insertion?",
    "options": [
      "Securing the chest tube loosely to allow for movement.",
      "Positioning the patient in the Trendelenburg position during insertion.",
      "Preparing a sterile field using sterile gloves only.",
      "Monitoring for subcutaneous emphysema after insertion."
    ],
    "correctAnswer": "Monitoring for subcutaneous emphysema after insertion."
  },
  "scene53": {
    "text": "You are caring for a patient who requires tracheostomy care. What nursing interventions are essential for safe tracheostomy care?",
    "options": [
      "Changing the tracheostomy tube ties daily to prevent skin breakdown.",
      "Applying hydrogen peroxide to the tracheostomy site for cleaning.",
      "Removing the inner cannula for cleaning every hour.",
      "Suctioning the tracheostomy tube only when secretions are visible."
    ],
    "correctAnswer": "Suctioning the tracheostomy tube only when secretions are visible."
  },
  "scene54": {
    "text": "You are providing care to a patient with a pressure ulcer. What nursing interventions are essential for pressure ulcer management?",
    "options": [
      "Using donut-shaped cushions to alleviate pressure on the ulcer.",
      "Applying petroleum jelly to the ulcer to keep it moist.",
      "Performing wound debridement without anesthesia.",
      "Using a pressure-relieving mattress or cushion for the patient."
    ],
    "correctAnswer": "Using a pressure-relieving mattress or cushion for the patient."
  },
  "scene55": {
    "text": "You are assisting with the care of a patient who requires continuous cardiac monitoring. What nursing interventions are essential for safe cardiac monitoring?",
    "options": [
      "Changing the electrodes every 24 hours to prevent skin irritation.",
      "Applying lotion to the skin under the electrodes to enhance conductivity.",
      "Placing the electrodes directly over bony prominences for accurate readings.",
      "Using alcohol swabs to clean the skin before applying the electrodes."
    ],
    "correctAnswer": "Using alcohol swabs to clean the skin before applying the electrodes."
  },
  "scene56": {
    "text": "You are caring for a patient who requires wound irrigation. What nursing interventions are essential for safe wound irrigation?",
    "options": [
      "Using a small-gauge needle for wound irrigation to ensure accuracy.",
      "Administering the irrigation solution at low pressure to prevent tissue damage.",
      "Irrigating the wound without wearing gloves to maintain dexterity.",
      "Applying a dry sterile dressing immediately after irrigation."
    ],
    "correctAnswer": "Administering the irrigation solution at low pressure to prevent tissue damage."
  },
  "scene57": {
    "text": "You are providing care to a patient with an external fixation device. What nursing interventions are essential for external fixation device care?",
    "options": [
      "Encouraging the patient to manipulate the pins to prevent stiffness.",
      "Applying lotion or powder around the pin sites to reduce friction.",
      "Assessing for signs of infection or loosening at the pin sites.",
      "Removing the fixation device for cleaning and reapplication daily."
    ],
    "correctAnswer": "Assessing for signs of infection or loosening at the pin sites."
  },
  "scene58": {
    "text": "You are caring for a patient with a urinary catheter. What nursing interventions are essential for urinary catheter care?",
    "options": [
      "Securing the catheter tubing to the bed frame to prevent dislodgement.",
      "Maintaining a closed drainage system to reduce the risk of infection.",
      "Emptying the urinary drainage bag when it is three-quarters full.",
      "Applying talcum powder to the perineal area to prevent irritation."
    ],
    "correctAnswer": "Maintaining a closed drainage system to reduce the risk of infection."
  },
  "scene59": {
    "text": "You are assisting with the care of a patient undergoing a percutaneous endoscopic gastrostomy (PEG) tube placement. What nursing interventions are essential for safe PEG tube placement?",
    "options": [
      "Using a nasogastric tube instead of a PEG tube for enteral feeding.",
      "Elevating the head of the bed to 90 degrees during tube insertion.",
      "Confirming tube placement by aspirating stomach contents before feeding.",
      "Administering enteral feedings immediately after tube placement."
    ],
    "correctAnswer": "Confirming tube placement by aspirating stomach contents before feeding."
  },
  "scene60": {
    "text": "You are providing care to a patient with a colostomy. What nursing interventions are essential for colostomy care?",
    "options": [
      "Applying adhesive remover to the skin before changing the pouching system.",
      "Emptying the colostomy pouch when it is half full to prevent leaks.",
      "Using petroleum jelly to lubricate the stoma to facilitate drainage.",
      "Placing the colostomy bag directly over the stoma without leaving any space."
    ],
    "correctAnswer": "Applying adhesive remover to the skin before changing the pouching system."
  },
  "scene61": {
    "text": "You are assisting with the care of a patient who requires continuous bladder irrigation (CBI). What nursing interventions are essential for safe CBI?",
    "options": [
      "Using normal saline solution for CBI to minimize electrolyte imbalances.",
      "Maintaining CBI at a high flow rate to prevent clot formation.",
      "Removing the catheter for 30 minutes every hour to allow bladder rest.",
      "Monitoring urinary output and assessing for signs of bladder distention."
    ],
    "correctAnswer": "Monitoring urinary output and assessing for signs of bladder distention."
  },
  "scene62": {
    "text": "You are caring for a patient who requires enteral feeding via a nasogastric tube (NGT). What nursing interventions are essential for safe NGT feeding?",
    "options": [
      "Administering medications through the NGT without checking compatibility.",
      "Flushing the NGT with carbonated beverages to prevent clogging.",
      "Verifying NGT placement by measuring pH and aspirating stomach contents.",
      "Placing the NGT in a dependent position to facilitate feeding."
    ],
    "correctAnswer": "Verifying NGT placement by measuring pH and aspirating stomach contents."
  },
 "scene63": {
    "text": "You are caring for a patient with a urinary tract infection (UTI) caused by Escherichia coli. Which antibiotic is commonly prescribed as the first-line treatment for uncomplicated UTIs?",
    "options": [
      "Ciprofloxacin",
      "Amoxicillin",
      "Trimethoprim/sulfamethoxazole",
      "Clindamycin"
    ],
    "correctAnswer": "Trimethoprim/sulfamethoxazole"
  },
  "scene64": {
    "text": "You are assisting with the care of a patient with community-acquired pneumonia. What is the recommended empiric antibiotic therapy for this patient?",
    "options": [
      "Vancomycin and cefepime",
      "Azithromycin",
      "Linezolid",
      "Clindamycin"
    ],
    "correctAnswer": "Azithromycin"
  },
  "scene65": {
    "text": "You are providing care to a patient with a wound infection caused by Staphylococcus aureus. Which antibiotic is commonly used to treat Staphylococcus aureus infections?",
    "options": [
      "Penicillin",
      "Ciprofloxacin",
      "Gentamicin",
      "Vancomycin"
    ],
    "correctAnswer": "Vancomycin"
  },
  "scene66": {
    "text": "You are caring for a patient with Helicobacter pylori infection. What is the first-line treatment for eradicating Helicobacter pylori?",
    "options": [
      "Omeprazole, amoxicillin, and metronidazole",
      "Ciprofloxacin, clarithromycin, and tinidazole",
      "Azithromycin, rifampin, and tetracycline",
      "Erythromycin, doxycycline, and levofloxacin"
    ],
    "correctAnswer": "Omeprazole, amoxicillin, and metronidazole"
  },
  "scene67": {
    "text": "You are assisting with the care of a patient with meningitis caused by Streptococcus pneumoniae. What is the recommended antibiotic therapy for bacterial meningitis?",
    "options": [
      "Amoxicillin",
      "Ceftriaxone or cefotaxime",
      "Doxycycline",
      "Trimethoprim/sulfamethoxazole"
    ],
    "correctAnswer": "Ceftriaxone or cefotaxime"
  },
  "scene68": {
    "text": "You are caring for a patient with tuberculosis (TB). What is the first-line medication used in the treatment of TB?",
    "options": [
      "Rifampin",
      "Isoniazid",
      "Ethambutol",
      "Pyrazinamide"
    ],
    "correctAnswer": "Isoniazid"
  },
  "scene69": {
    "text": "You are providing care to a patient with a fungal infection caused by Candida albicans. Which antifungal medication is commonly used to treat Candida infections?",
    "options": [
      "Fluconazole",
      "Clindamycin",
      "Acyclovir",
      "Ceftriaxone"
    ],
    "correctAnswer": "Fluconazole"
  },
  "scene70": {
    "text": "You are caring for a patient with a viral infection caused by influenza virus. Which antiviral medication is commonly used to treat influenza?",
    "options": [
      "Acyclovir",
      "Oseltamivir",
      "Metronidazole",
      "Clindamycin"
    ],
    "correctAnswer": "Oseltamivir"
  },
  "scene71": {
    "text": "You are assisting with the care of a patient with a parasitic infection caused by Plasmodium falciparum. What is the first-line treatment for uncomplicated malaria caused by Plasmodium falciparum?",
    "options": [
      "Chloroquine",
      "Mefloquine",
      "Atovaquone-proguanil",
      "Artemether-lumefantrine"
    ],
    "correctAnswer": "Artemether-lumefantrine"
  },
  "scene72": {
    "text": "You are providing care to a patient with a bacterial skin infection caused by methicillin-resistant Staphylococcus aureus (MRSA). Which antibiotic is commonly used to treat MRSA infections?",
    "options": [
      "Penicillin",
      "Ciprofloxacin",
      "Gentamicin",
      "Vancomycin"
    ],
    "correctAnswer": "Vancomycin"
  },
  "scene73": {
    "text": "You are caring for a patient with a fungal nail infection caused by Trichophyton rubrum. Which antifungal medication is commonly used to treat fungal nail infections?",
    "options": [
      "Fluconazole",
      "Terbinafine",
      "Nystatin",
      "Ketoconazole"
    ],
    "correctAnswer": "Terbinafine"
  },
  "scene74": {
    "text": "You are assisting with the care of a patient with a viral infection caused by herpes simplex virus (HSV). What is the first-line treatment for herpes simplex infections?",
    "options": [
      "Valacyclovir",
      "Acyclovir",
      "Ganciclovir",
      "Ribavirin"
    ],
    "correctAnswer": "Acyclovir"
  },
  "scene75": {
    "text": "You are providing care to a patient with a bacterial infection caused by Pseudomonas aeruginosa. Which antibiotic is commonly used to treat Pseudomonas aeruginosa infections?",
    "options": [
      "Ciprofloxacin",
      "Amoxicillin",
      "Trimethoprim/sulfamethoxazole",
      "Clindamycin"
    ],
    "correctAnswer": "Ciprofloxacin"
  },
 "scene76": {
    "text": "You are caring for a patient with a fungal infection caused by Cryptococcus neoformans. Which antifungal medication is commonly used to treat Cryptococcus neoformans infections?",
    "options": [
      "Amphotericin B",
      "Fluconazole",
      "Terbinafine",
      "Nystatin"
    ],
    "correctAnswer": "Fluconazole"
  },
  "scene77": {
    "text": "You are assisting with the care of a patient with a bacterial infection caused by Clostridium difficile. What is the first-line treatment for Clostridium difficile infections?",
    "options": [
      "Vancomycin",
      "Metronidazole",
      "Clindamycin",
      "Ceftriaxone"
    ],
    "correctAnswer": "Vancomycin"
  },
  "scene78": {
    "text": "You are providing care to a patient with a fungal infection caused by Aspergillus fumigatus. Which antifungal medication is commonly used to treat Aspergillus fumigatus infections?",
    "options": [
      "Amphotericin B",
      "Fluconazole",
      "Voriconazole",
      "Nystatin"
    ],
    "correctAnswer": "Voriconazole"
  },
  "scene79": {
    "text": "You are caring for a patient with a bacterial infection caused by Mycobacterium tuberculosis. Which antibiotic is commonly used as the backbone of tuberculosis (TB) treatment?",
    "options": [
      "Rifampin",
      "Isoniazid",
      "Ethambutol",
      "Pyrazinamide"
    ],
    "correctAnswer": "Isoniazid"
  },
  "scene80": {
    "text": "You are assisting with the care of a patient with a parasitic infection caused by Entamoeba histolytica. What is the first-line treatment for amebiasis?",
    "options": [
      "Metronidazole",
      "Ivermectin",
      "Praziquantel",
      "Albendazole"
    ],
    "correctAnswer": "Metronidazole"
  },
  "scene81": {
    "text": "You are providing care to a patient with a bacterial infection caused by Neisseria gonorrhoeae. Which antibiotic is commonly used to treat gonorrhea?",
    "options": [
      "Ciprofloxacin",
      "Azithromycin",
      "Penicillin",
      "Ceftriaxone"
    ],
    "correctAnswer": "Ceftriaxone"
  },
  "scene82": {
    "text": "You are caring for a patient with a viral infection caused by human immunodeficiency virus (HIV). What is the first-line antiretroviral therapy (ART) for HIV?",
    "options": [
      "Nevirapine, lamivudine, and zidovudine",
      "Efavirenz, tenofovir, and emtricitabine",
      "Ritonavir, atazanavir, and darunavir",
      "Lopinavir, ritonavir, and maraviroc"
    ],
    "correctAnswer": "Efavirenz, tenofovir, and emtricitabine"
  },
  "scene83": {
    "text": "You are assisting with the care of a patient with a bacterial infection caused by Chlamydia trachomatis. What is the first-line treatment for chlamydia?",
    "options": [
      "Doxycycline",
      "Azithromycin",
      "Ciprofloxacin",
      "Metronidazole"
    ],
    "correctAnswer": "Azithromycin"
  },
  "scene84": {
    "text": "You are providing care to a patient with a fungal infection caused by Candida glabrata. Which antifungal medication is commonly used to treat Candida glabrata infections?",
    "options": [
      "Fluconazole",
      "Caspofungin",
      "Nystatin",
      "Ketoconazole"
    ],
    "correctAnswer": "Caspofungin"
  },
  "scene85": {
    "text": "You are caring for a patient with a bacterial infection caused by Streptococcus pyogenes. Which antibiotic is commonly used to treat Streptococcus pyogenes infections?",
    "options": [
      "Penicillin",
      "Ceftriaxone",
      "Vancomycin",
      "Clindamycin"
    ],
    "correctAnswer": "Penicillin"
  },
  "scene86": {
    "text": "You are assisting with the care of a patient with a parasitic infection caused by Trypanosoma cruzi. What is the first-line treatment for Chagas disease?",
    "options": [
      "Ivermectin",
      "Albendazole",
      "Benznidazole",
      "Praziquantel"
    ],
    "correctAnswer": "Benznidazole"
  },
  "scene87": {
    "text": "You are providing care to a patient with a bacterial infection caused by Campylobacter jejuni. Which antibiotic is commonly used to treat Campylobacter jejuni infections?",
    "options": [
      "Ciprofloxacin",
      "Amoxicillin",
      "Trimethoprim/sulfamethoxazole",
      "Clindamycin"
    ],
    "correctAnswer": "Ciprofloxacin"
  },
  "scene88": {
    "text": "You are caring for a patient with a viral infection caused by human papillomavirus (HPV). What is the first-line treatment for genital warts caused by HPV?",
    "options": [
      "Acyclovir",
      "Imiquimod",
      "Metronidazole",
      "Clindamycin"
    ],
    "correctAnswer": "Imiquimod"
  },
  "scene89": {
    "text": "You are assisting with the care of a patient with a bacterial infection caused by Legionella pneumophila. What is the first-line treatment for Legionnaires' disease?",
    "options": [
      "Doxycycline",
      "Azithromycin",
      "Ciprofloxacin",
      "Trimethoprim/sulfamethoxazole"
    ],
    "correctAnswer": "Azithromycin"
  },
  "scene90": {
    "text": "You are providing care to a patient with a fungal infection caused by Mucorales. Which antifungal medication is commonly used to treat Mucorales infections?",
    "options": [
      "Fluconazole",
      "Amphotericin B",
      "Voriconazole",
      "Pentamidine"
    ],
    "correctAnswer": "Amphotericin B"
  },
"scene91": {
    "text": "You are caring for a patient with a bacterial infection caused by Pseudomonas aeruginosa. Which antibiotic is commonly used to treat Pseudomonas aeruginosa infections?",
    "options": [
      "Ciprofloxacin",
      "Penicillin",
      "Metronidazole",
      "Clindamycin"
    ],
    "correctAnswer": "Ciprofloxacin"
  },
  "scene92": {
    "text": "You are assisting with the care of a patient with a viral infection caused by Epstein-Barr virus (EBV). What is the first-line treatment for infectious mononucleosis caused by EBV?",
    "options": [
      "Acyclovir",
      "Amantadine",
      "Ganciclovir",
      "Supportive care"
    ],
    "correctAnswer": "Supportive care"
  },
  "scene93": {
    "text": "You are providing care to a patient with a fungal infection caused by Candida auris. Which antifungal medication is commonly used to treat Candida auris infections?",
    "options": [
      "Fluconazole",
      "Amphotericin B",
      "Voriconazole",
      "Echinocandins"
    ],
    "correctAnswer": "Echinocandins"
  },
  "scene94": {
    "text": "You are caring for a patient with a bacterial infection caused by Mycoplasma pneumoniae. Which antibiotic is commonly used to treat Mycoplasma pneumoniae infections?",
    "options": [
      "Penicillin",
      "Ceftriaxone",
      "Azithromycin",
      "Doxycycline"
    ],
    "correctAnswer": "Azithromycin"
  },
  "scene95": {
    "text": "You are assisting with the care of a patient with a parasitic infection caused by Plasmodium falciparum. What is the first-line treatment for uncomplicated malaria caused by Plasmodium falciparum?",
    "options": [
      "Chloroquine",
      "Mefloquine",
      "Atovaquone/proguanil",
      "Artemisinin-based combination therapy (ACT)"
    ],
    "correctAnswer": "Artemisinin-based combination therapy (ACT)"
  },
  "scene96": {
    "text": "You are providing care to a patient with a viral infection caused by influenza virus. What is the first-line treatment for influenza infections?",
    "options": [
      "Acyclovir",
      "Oseltamivir",
      "Ribavirin",
      "Zanamivir"
    ],
    "correctAnswer": "Oseltamivir"
  },
  "scene97": {
    "text": "You are caring for a patient with a bacterial infection caused by Staphylococcus aureus. Which antibiotic is commonly used to treat methicillin-resistant Staphylococcus aureus (MRSA) infections?",
    "options": [
      "Amoxicillin",
      "Ceftriaxone",
      "Vancomycin",
      "Clindamycin"
    ],
    "correctAnswer": "Vancomycin"
  },
  "scene98": {
    "text": "You are assisting with the care of a patient with a viral infection caused by herpes simplex virus (HSV). What is the first-line treatment for genital herpes caused by HSV?",
    "options": [
      "Acyclovir",
      "Valacyclovir",
      "Famciclovir",
      "Imiquimod"
    ],
    "correctAnswer": "Valacyclovir"
  },
  "scene99": {
    "text": "You are providing care to a patient with a fungal infection caused by Trichophyton rubrum. Which antifungal medication is commonly used to treat Trichophyton rubrum infections?",
    "options": [
      "Fluconazole",
      "Terbinafine",
      "Nystatin",
      "Caspofungin"
    ],
    "correctAnswer": "Terbinafine"
  },
  "scene100": {
    "text": "You are caring for a patient with a bacterial infection caused by Helicobacter pylori. Which antibiotic is commonly used to treat Helicobacter pylori infections?",
    "options": [
      "Metronidazole",
      "Amoxicillin",
      "Ciprofloxacin",
      "Clarithromycin"
    ],
    "correctAnswer": "Clarithromycin",
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


