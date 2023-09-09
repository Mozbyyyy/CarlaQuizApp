const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')



const resultsContainerElement = document.getElementById('results-container');
const scoreElement = document.getElementById('score-value');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}



function showResults() {
    questionContainerElement.classList.add('hide');
    resultsContainerElement.classList.remove('hide');
    scoreElement.innerText = calculateScore() + '/' + questions.length;
  }
  
  function calculateScore() {     
    let score = 0;
    shuffledQuestions.forEach((question, index) => {
      const selectedButton = answerButtonsElement.children[index].querySelector('[data-correct="true"]');
      if (selectedButton === answerButtonsElement.children[index].querySelector('.selected')) {
        score++;
      }
    });
    return score;
  }

  function calculateScore() {
    let score = 0;
    shuffledQuestions.forEach((question, index) => {
      const selectedButton = answerButtonsElement.children[index].querySelector('.selected');
      const correctButton = answerButtonsElement.children[index].querySelector('[data-correct="true"]');
      if (selectedButton === correctButton) {
        score++;
      }
    });
    return score;
  }
  
  



function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    showResults();
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What information needed to create a histogram?',
    answers: [
      { text: 'Cell forward scatter & cell side scatter', correct: false },
      { text: 'Cell volume & relative cell number', correct: true },
      { text: 'Cell size & cell complexity', correct: false },
      { text: 'Nuclear size & cellular density', correct: false }
    ]
  },
  {
    question: 'A parameter not directly determine in an autoamated analyzer?',
    answers: [
      { text: 'WBC', correct: false},
      { text: 'Hct', correct: true},
      { text: 'Platelet', correct: false },
      { text: 'RBC', correct: false }
    ] 
  },

  {
    question: 'In an electronic particle cell counter, platelet clumps may interfere with which of the following?',
    answers: [
      { text: 'RBC', correct: false },
      { text: 'WBC', correct: true },
      { text: 'MVC', correct: false },
      { text: 'Reticulocytes', correct: false }
    ]
  },
  {

    question: 'A 1:10 bleach solution is prepared today. When will be its expiration?',
    answers: [
      { text: '1 month after it was prepared', correct: false },
      { text: '1 day after it was prepared', correct: true },
      { text: '1 year after it was prepared', correct: false },
      { text: '1 week after it was prepared', correct: false }
    ]
  },



  {
    question: 'The very first site of blood cell formation?',
    answers: [
      { text: 'Spleen', correct: false },
      { text: 'Yolk Sac', correct: true },
      { text: 'Liver', correct: false },
      { text: 'Lymph Nodes', correct: false }
    ]
  },


   {
    question: 'A red cell parameter that determine the packed cell volume?',
    answers: [
      { text: 'OFT', correct: false },
      { text: 'Hct', correct: true },
      { text: 'ESR', correct: false },
      { text: 'MCV', correct: false }
    ]
  },

    {
    question: 'A blood sample taken at 6:00 am and brought & received in the laboratory at 11:00 am could not be tested for?',
    answers: [
      { text: 'WBC ct', correct: false },
      { text: 'RBC ct', correct: false },
      { text: 'ESR', correct: true },
      { text: 'MCV', correct: false }
    ]
  },

   {
    question: 'What is the largest white blood cell normally found in the peripheral blood smear?',
    answers: [
      { text: 'Neutrophil', correct: false },
      { text: 'Lymphocyte', correct: false },
      { text: 'Monocyte', correct: true },
      { text: 'Eosinophil', correct: false }
    ]
  },

   {
    question: 'The most mature granulocyte precursor that can undergo mitosis is the?',
    answers: [
      { text: 'Promyelocyte', correct: false },
      { text: 'Metamyelocyte', correct: false },
      { text: 'Myelocyte', correct: true },
      { text: 'Myeloblast', correct: false }
    ]
  },


  {
    question: 'Production of primary granules ceases and production of secondary granules commences with what cell stage?',
    answers: [
      { text: 'Promyelocyte', correct: false },
      { text: 'Metamyelocyte', correct: false },
      { text: 'Myelocyte', correct: true },
      { text: 'Myeloblast', correct: false }
    ]
  },

    {
    question: 'Arneths classification of neutrophils is based on?',
    answers: [
      { text: 'Size and shape of the nucleus', correct: false },
      { text: 'Size of the cell","Number of lobes', correct: false },
      { text: 'Type of granulocytes', correct: true }
     
    ]
  },

   {
    question: 'A juvunile cell is also known as?',
    answers: [
      { text: 'Band', correct: false },
      { text: 'Myelocyte', correct: false },
      { text: 'Metamyelocyte', correct: true },
      { text: 'Promyelocyte', correct: false },

     
    ]
  },


    {
    question: 'While performing a differential count on a capillary blood smear, very few leukocytes were noted that do not tally with the WBC count. What action should be taken?',
    answers: [
      { text: 'Report out agranulocytosis', correct: false },
      { text: 'Look at the feather edge and margin of the smear for WBC clumping', correct: true },
      { text: 'Report the finding to you supervisor immediately', correct: false },
      { text: 'Request a venous sample for an absolute count', correct: false },

     
    ]
  },

    {
    question: 'Which of the following tests is useful in differentiating leukemoid reaction from CGL?',
    answers: [
      { text: 'Sudan black B stain', correct: false },
      { text: 'LAP /NAP stain', correct: true },
      { text: 'Peroxides stain', correct: false },
      { text: 'Surface membrane markers', correct: false },

     
    ]
  },


    {
    question: 'Which of the following tests is useful in differentiating leukemoid reaction from CGL?',
    answers: [
      { text: 'Sudan black B stain', correct: false },
      { text: 'LAP /NAP stain', correct: true },
      { text: 'Peroxides stain', correct: false },
      { text: 'Surface membrane markers', correct: false },

     
    ]
  },


    {
    question: 'the LAP activity is increased in which of the following conditions?',
    answers: [
      { text: 'Leukemoid', correct: true },
      { text: 'AGL', correct: false },
      { text: 'CML', correct: false },
      { text: 'SEryhtroleukemia', correct: false },

     
    ]
  },


    {
    question: 'what complex coagulation process that is affected by lupus anticoagulant?',
    answers: [
      { text: 'Streptokinase complex', correct: false },
      { text: 'Prothrombinase complex', correct: true },
      { text: 'Thrombokinase', correct: false },
      { text: 'Cytokinase complex', correct: false },

     
    ]
  },

     {
    question: 'In the neutrophillic series of leukocyte development, the earliest stage to normally appear in the perpheral blood is the',
    answers: [
      { text: 'Myelocyte', correct: false },
      { text: 'Band', correct: true },
      { text: 'Promyelocyte', correct: false },
      { text: 'Myeloblast complex', correct: false },

     
    ]
  },

     {
    question: 'In which of the following are eosinophils NOT increased?',
    answers: [
      { text: 'Allergic disorders', correct: false },
      { text: "Cushing's syndrome", correct: true },
      { text: 'Promyelocyte', correct: false },
      { text: 'Myeloblast complex', correct: false },

     
    ]
  },


     {
    question: 'Which of the following is true about specific (secondary) granules of neutrophils?',
    answers: [
      { text: 'Appear first in the myelocyte stage', correct: true },
      { text: "Contain lysomal enzymes", correct: false },
      { text: 'Are formed in the mitochondira', correct: false },
      { text: 'Are derived from azurophilic granules', correct: false },

     
    ]
  },


   {
    question: 'A term that meant varying degrees of leukocytes with a shift to the left and occasional NRBC in the PB?',
    answers: [
      { text: 'Polycythemia', correct: false },
      { text: "Leukoeryhtroblastosis", correct: true },
      { text: 'Eryhtroblastosis', correct: false },
      { text: 'Erytroleukemia', correct: false },

     
    ]
  },

     {
    question: 'Vasodilation and bronchoconstriction are the result of degranulation by which of the following blood cells?',
    answers: [
      { text: 'Basophils', correct: true },
      { text: "Eosinophils", correct: false },
      { text: 'Neutrophils', correct: false },
      { text: 'Monocytes', correct: false },

     
    ]
  },

      {
    question: 'Which of the following can differentiate metamyelocytes from other stages of granulocyte maturation?',
    answers: [
      { text: 'Color of cytoplasm', correct: false },
      { text: "Presence of specific granules", correct: false },
      { text: 'Indentation of nucleus', correct: true },
      { text: 'Absence of nucleoli', correct: false },

     
    ]
  },



      {
    question: 'Antigen-dependent lymphopoiesis  occurs in the secondary lymphoid  tissue located in the: ?',
    answers: [
      { text: 'Liver and spleen', correct: false },
      { text: "Spleen and lymph nodes", correct: true },
      { text: 'lungs and Peyers, patches',correct: false },
      { text: 'Absence of nucleoli', correct: false },

     
    ]
  },

      {
    question: 'On what basis can B & T lymphocytes be distinguished?',
    answers: [
      { text: 'Chromatin pattern in the nucleus B. Differences in nuclea', correct: false },
      { text: "Differences in Nuclear shape", correct: false },
      { text: 'Monoclonal antibody reactions to surface and cytoplasmic antigens',correct: true },
      { text: 'cytoplasmic granularity and overall cell size', correct: false },

     
    ]
  },

     {
    question: 'Nuclear division of megakaryoblast is termed as:',
    answers: [
      { text: 'Meiosis', correct: false },
      { text: "Karyorrhexis", correct: false },
      { text: 'Mitosis',correct: false },
      { text: 'Endomitosis', correct: true },

     
    ]
  },


  {
    question: 'What platelet substance responsible for clot retraction',
    answers: [
      { text: 'Thromboxane', correct: false },
      { text: "Thrombomodulin", correct: false },
      { text: 'Thrombosthenin',correct: true },
      { text: 'Thrombospondin', correct: false },

     
    ]
  },


  {
    question: 'The blood sample preparation to be used in platelet aggregometry test',
    answers: [
      { text: 'fresh plasma', correct: false },
      { text: "platelet poor plasma", correct: false },
      { text: 'platelet rich plasma',correct: true },
      { text: 'adsorbed plasma', correct: false },

     
    ]
  },

   {
    question: 'In ivy method, a blood pressure (mmHg) cuff in inflated to',
    answers: [
      { text: '80', correct: false },
      { text: "100", correct: false },
      { text: '40',correct: true },
      { text: '50', correct: false },

     
    ]
  },


  {
    question: 'An additional platelet activator and powerful vasoconstrictive activity',
    answers: [
      { text: 'ADP', correct: false },
      { text: "Thromboxane A2", correct: true },
      { text: 'PGH2',correct: false },
      { text: 'Ristocetin', correct: false },

     
    ]
  },



  {
    question: 'Substance added to activate platelets to release Pf3',
    answers: [
      { text: 'Kaolin', correct: true },
      { text: "ADP", correct: false },
      { text: 'CaCI2',correct: false },
      { text: 'Collagen', correct: false },

     
    ]
  },


  {
    question: 'A specimen used in aPTT',
    answers: [
      { text: 'Normal serum', correct: false },
      { text: "plt poor plasma", correct: true },
      { text: 'adsorb plasma',correct: false },
      { text: 'plt rich plasma', correct: false },

     
    ]
  },


  {
    question: 'A molarity of calcium chloride used in aPTT',
    answers: [
      { text: '0.2 M', correct: false },
      { text: "0.02 M", correct: false },
      { text: '0.002 M',correct: false },
      { text: '0.025 M', correct: true },

     
    ]
  },

    {
    question: 'Test for stage III defect',
    answers: [
      { text: 'Thrombin time', correct: true },
      { text: "Stypven time", correct: false },
      { text: 'Reptilase time',correct: false },
      { text: 'SPCT', correct: false },

     
    ]
  },


     {
    question: 'What is the action of oral anticoagulant?',
    answers: [
      { text: 'Blocks vit K', correct: true },
      { text: "Degrades clotting factors", correct: false },
      { text: 'Inhibits binding of calcium',correct: false },
      { text: 'Replaces activated zymogens', correct: false },

     
    ]
  },

    {
    question: 'What laboratory test not affected by the presence of therapeutic heparin?',
    answers: [
      { text: 'Reptilase', correct: true },
      { text: "TT", correct: false },
      { text: 'WBCT & heparin assay',correct: false },
      { text: 'PT & aPTT', correct: false },

     
    ]
  },

     {
    question: 'A system whose function is to keep the vascular system free of deposited fibrin or fibrin clots.',
    answers: [
      { text: 'Fibrinolytic system', correct: true },
      { text: "Coagulation system", correct: false },
      { text: 'Kinnin system',correct: false },
      { text: 'vascular system', correct: false },

     
    ]
  },


     {
    question: 'An anti-thrombin considered as a major serpin',
    answers: [
      { text: 'AT-V', correct: false },
      { text: "AT-III", correct: true },
      { text: 'AT-1',correct: false },
      { text: 'A-II', correct: false },

     
    ]
  },


 {
    question: 'A coagulation factor synthesized in megakaryocytes & endothelial cell',
    answers: [
      { text: 'Factor expiration', correct: false },
      { text: "Factor I", correct: false },
      { text: 'Factor VIII',correct: true },
      { text: 'Factor XII', correct: false },

     
    ]
  },


   {
    question: 'Thrombokinase is also known as',
    answers: [
      { text: 'Factor II', correct: false },
      { text: "Factor Cambridge", correct: false },
      { text: 'Factor X',correct: false },
      { text: 'Factor III(tissue factor)', correct: true },

     
    ]
  },

 {
    question: 'A coagulation factor easily affected when a patient is receiving an oral anticoagulant',
    answers: [
      { text: 'Factor XII', correct: false },
      { text: "Factor V", correct: false },
      { text: 'Factor VII',correct: true },
      { text: 'Factor I', correct: false },

     
    ]
  },


 {
    question: 'A coagulation factor easily affected when a patient is receiving an oral anticoagulant',
    answers: [
      { text: 'Factor XII', correct: false },
      { text: "Factor V", correct: false },
      { text: 'Factor VII',correct: true },
      { text: 'Factor I', correct: false },

     
    ]
  },


   {
    question: 'A most sensitive test to perform to detect early liver disease',
    answers: [
      { text: 'aPTT', correct: false },
      { text: "ACT", correct: false },
      { text: 'TGT',correct: false },
      { text: 'PT', correct: true },

     
    ]
  },

    {
    question: 'Blood sample preparation wherein BaSO4 or AlOH are added to the plasma',
    answers: [
      { text: 'aged plasma', correct: false },
      { text: "Normal serum", correct: false },
      { text: 'Fresh plasma',correct: false },
      { text: 'Adsorbed plasma', correct: true },

     
    ]
  },






























]