    // Define the Flexbox challenges
    const allChallenges = [
      {
        id: 1,
        question: "Challenge: Arrange 3 items. The main axis should be horizontal, items should start at the beginning of the main axis, and be centered along the cross axis. Content should not wrap. Multiple lines of content should stretch. (3 items)",
        numItems: 3,
        correctAnswers: {
          container: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
            alignContent: "stretch"
          },
          items: [] // No item-specific overrides
        },
        itemControls: []
      },
      {
        id: 2,
        question: "Challenge: Arrange 4 items. The main axis should be vertical, items should end at the end of the main axis, and stretch along the cross axis. Content should not wrap. Multiple lines of content should stretch. (4 items)",
        numItems: 4,
        correctAnswers: {
          container: {
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "stretch",
            flexWrap: "nowrap",
            alignContent: "stretch"
          },
          items: []
        },
        itemControls: []
      },
      {
        id: 3,
        question: "Challenge: Distribute 5 items. The main axis should be horizontal, space should be distributed equally between items, and items should stretch along the cross axis. Content should not wrap. Multiple lines of content should be centered. (5 items)",
        numItems: 5,
        correctAnswers: {
          container: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
            flexWrap: "nowrap",
            alignContent: "center"
          },
          items: []
        },
        itemControls: []
      },
      {
        id: 4,
        question: "Challenge: Arrange 6 items. The main axis should be horizontal, space should be distributed with equal space around items, and items should stretch along the cross axis. Content should wrap. Multiple lines of content should start at the beginning of the cross axis. (6 items)",
        numItems: 6,
        correctAnswers: {
          container: {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "stretch",
            flexWrap: "wrap",
            alignContent: "flex-start"
          },
          items: []
        },
        itemControls: []
      },
      {
        id: 5,
        question: "Challenge: Arrange 3 items. The main axis should be horizontal, items should start at the beginning of the main axis, and stretch along the cross axis. Content should not wrap. Multiple lines of content should stretch. The first item should grow twice as much as others, and the second item should be able to shrink. (3 items)",
        numItems: 3,
        correctAnswers: {
          container: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "stretch",
            flexWrap: "nowrap",
            alignContent: "stretch"
          },
          items: [
            { index: 0, flexGrow: "2", flexShrink: "1", flexBasis: "auto", alignSelf: "auto" }, // Item 1
            { index: 1, flexGrow: "1", flexShrink: "1", flexBasis: "auto", alignSelf: "auto" }, // Item 2
            { index: 2, flexGrow: "1", flexShrink: "1", flexBasis: "auto", alignSelf: "auto" }  // Item 3
          ]
        },
        itemControls: [
          { index: 0, properties: ['flexGrow', 'flexShrink'] },
          { index: 1, properties: ['flexGrow', 'flexShrink'] }
        ]
      },
      {
        id: 6,
        question: "Challenge: Arrange 4 items. The main axis should be horizontal, items should end at the end of the main axis, and stretch along the cross axis. Content should not wrap. Multiple lines of content should stretch. The third item should be centered on its own cross axis. (4 items)",
        numItems: 4,
        correctAnswers: {
          container: {
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "stretch",
            flexWrap: "nowrap",
            alignContent: "stretch"
          },
          items: [
            { index: 2, alignSelf: "center", flexGrow: "0", flexShrink: "1", flexBasis: "auto" } // Item 3
          ]
        },
        itemControls: [
          { index: 2, properties: ['alignSelf'] }
        ]
      },
      {
        id: 7,
        question: "Challenge: Arrange 3 items. The main axis should be vertical and in reverse order. Items should start at the beginning of the main axis (which will be the bottom visually), and stretch along the cross axis. Content should not wrap. Multiple lines of content should stretch. (3 items)",
        numItems: 3,
        correctAnswers: {
          container: {
            flexDirection: "column-reverse",
            justifyContent: "flex-start",
            alignItems: "stretch",
            flexWrap: "nowrap",
            alignContent: "stretch"
          },
          items: []
        },
        itemControls: []
      },
      {
        id: 8,
        question: "Challenge: Arrange 5 items. The main axis should be horizontal and in reverse order. Items should start at the beginning of the main axis (which will be the right visually), and stretch along the cross axis. Content should not wrap. Multiple lines of content should have space distributed around them. (5 items)",
        numItems: 5,
        correctAnswers: {
          container: {
            flexDirection: "row-reverse",
            justifyContent: "flex-start",
            alignItems: "stretch",
            flexWrap: "nowrap",
            alignContent: "space-around"
          },
          items: []
        },
        itemControls: []
      },
      {
        id: 9,
        question: "Challenge: Arrange 4 items. The main axis should be horizontal, items should start at the beginning of the main axis, and stretch along the cross axis. Content should not wrap. Multiple lines of content should stretch. The first item should have an initial size of 0 but grow to fill available space. The second item should have a fixed base size of 100px and not grow or shrink. (4 items)",
        numItems: 4,
        correctAnswers: {
          container: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "stretch",
            flexWrap: "nowrap",
            alignContent: "stretch"
          },
          items: [
            { index: 0, flexGrow: "1", flexShrink: "1", flexBasis: "0", alignSelf: "auto" },
            { index: 1, flexGrow: "0", flexShrink: "0", flexBasis: "100px", alignSelf: "auto" },
            { index: 2, flexGrow: "0", flexShrink: "1", flexBasis: "auto", alignSelf: "auto" },
            { index: 3, flexGrow: "0", flexShrink: "1", flexBasis: "auto", alignSelf: "auto" }
          ]
        },
        itemControls: [
          { index: 0, properties: ['flexGrow', 'flexShrink', 'flexBasis'] },
          { index: 1, properties: ['flexGrow', 'flexShrink', 'flexBasis'] }
        ]
      },
      {
        id: 10,
        question: "Challenge: Arrange 5 items. The main axis should be vertical, items should start at the beginning of the main axis, and stretch along the cross axis. Content should wrap. Multiple lines of content should have space distributed around them. (5 items)",
        numItems: 5,
        correctAnswers: {
          container: {
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "stretch",
            flexWrap: "wrap",
            alignContent: "space-around"
          },
          items: []
        },
        itemControls: []
      }
    ];

    // Helper to shuffle an array (Fisher-Yates algorithm)
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    // State variables
    let score = 0;
    let shuffledChallenges = [];
    let currentChallengeIndex = 0;
    let answeredCorrectlyForCurrentChallenge = false;
    let userItemStyles = {}; // To store item-specific styles

    // DOM elements
    const scoreDisplay = document.getElementById('score-display');
    const challengeCounter = document.getElementById('challenge-counter');
    const challengeQuestion = document.getElementById('challenge-question');
    const flexContainerPreview = document.getElementById('flex-container-preview');
    const checkAnswerBtn = document.getElementById('check-answer-btn');
    const showSolutionBtn = document.getElementById('show-solution-btn');
    const nextChallengeBtn = document.getElementById('next-challenge-btn');
    const feedbackMessageDiv = document.getElementById('feedback-message');
    const solutionDetailsDiv = document.getElementById('solution-details');
    const solutionCodePre = document.getElementById('solution-code');
    const flexItemControlsSection = document.getElementById('flex-item-controls');
    const itemControlsList = document.getElementById('item-controls-list');

    // Container Select controls
    const flexDirectionSelect = document.getElementById('flexDirection');
    const justifyContentSelect = document.getElementById('justifyContent');
    const alignItemsSelect = document.getElementById('alignItems');
    const flexWrapSelect = document.getElementById('flexWrap');
    const alignContentSelect = document.getElementById('alignContent');


    // Options for select dropdowns
    const flexDirectionOptions = [
      { label: "Select...", value: "" },
      { label: "row", value: "row" },
      { label: "row-reverse", value: "row-reverse" },
      { label: "column", value: "column" },
      { label: "column-reverse", value: "column-reverse" },
    ];

    const justifyContentOptions = [
      { label: "Select...", value: "" },
      { label: "flex-start", value: "flex-start" },
      { label: "flex-end", value: "flex-end" },
      { label: "center", value: "center" },
      { label: "space-between", value: "space-between" },
      { label: "space-around", value: "space-around" },
      { label: "space-evenly", value: "space-evenly" },
    ];

    const alignItemsOptions = [
      { label: "Select...", value: "" },
      { label: "stretch", value: "stretch" },
      { label: "flex-start", value: "flex-start" },
      { label: "flex-end", value: "flex-end" },
      { label: "center", value: "center" },
      { label: "baseline", value: "baseline" },
    ];

    const flexWrapOptions = [
      { label: "Select...", value: "" },
      { label: "nowrap", value: "nowrap" },
      { label: "wrap", value: "wrap" },
      { label: "wrap-reverse", value: "wrap-reverse" },
    ];

    const alignContentOptions = [
      { label: "Select...", value: "" },
      { label: "stretch", value: "stretch" },
      { label: "flex-start", value: "flex-start" },
      { label: "flex-end", value: "flex-end" },
      { label: "center", value: "center" },
      { label: "space-between", value: "space-between" },
      { label: "space-around", value: "space-around" },
    ];

    // Item-specific options (will be reused for dynamic controls)
    const flexGrowOptions = [{ label: "Select...", value: "" }, { label: "0", value: "0" }, { label: "1", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }];
    const flexShrinkOptions = [{ label: "Select...", value: "" }, { label: "0", value: "0" }, { label: "1", value: "1" }];
    const flexBasisOptions = [{ label: "Select...", value: "" }, { label: "auto", value: "auto" }, { label: "0", value: "0" }, { label: "50px", value: "50px" }, { label: "100px", value: "100px" }];
    const alignSelfOptions = [{ label: "Select...", value: "" }, { label: "auto", value: "auto" }, { label: "stretch", value: "stretch" }, { label: "flex-start", value: "flex-start" }, { label: "flex-end", value: "flex-end" }, { label: "center", value: "center" }, { label: "baseline", value: "baseline" }];


    /**
     * Populates a select element with options.
     * @param {HTMLElement} selectElement - The select element to populate.
     * @param {Array<Object>} options - An array of { label, value } objects.
     * @param {string} selectedValue - The value to mark as selected.
     */
    function populateSelect(selectElement, options, selectedValue = "") {
      selectElement.innerHTML = ''; // Clear existing options
      options.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.label;
        if (optionData.value === selectedValue) {
          option.selected = true;
        }
        selectElement.appendChild(option);
      });
    }

    /**
     * Updates the score display.
     * @param {number} delta - The amount to add to the score.
     */
    function updateScore(delta) {
      score += delta;
      scoreDisplay.textContent = `Score: ${score.toFixed(2)}`;
    }

    /**
     * Renders the specified number of flex items in the preview.
     * @param {number} numItems - The number of flex items to render.
     */
    function renderFlexItems(numItems) {
      flexContainerPreview.innerHTML = '';
      for (let i = 0; i < numItems; i++) {
        const item = document.createElement('div');
        item.id = `flex-item-${i}`; // Assign ID for item-specific styling
        item.classList.add('flex-item');
        // No dynamic background colors, relying on default white and subtle border
        item.textContent = i + 1; // Display item number
        flexContainerPreview.appendChild(item);
      }
    }

    /**
     * Applies the selected CSS flex container styles to the preview.
     */
    function applyContainerStyles() {
      flexContainerPreview.style.flexDirection = flexDirectionSelect.value;
      flexContainerPreview.style.justifyContent = justifyContentSelect.value;
      flexContainerPreview.style.alignItems = alignItemsSelect.value;
      flexContainerPreview.style.flexWrap = flexWrapSelect.value;
      flexContainerPreview.style.alignContent = alignContentSelect.value;
    }

    /**
     * Applies the selected CSS flex item styles to individual items.
     */
    function applyItemStyles() {
      const currentChallenge = shuffledChallenges[currentChallengeIndex];
      if (!currentChallenge || !currentChallenge.itemControls) return;

      currentChallenge.itemControls.forEach(controlDef => {
        const itemIndex = controlDef.index;
        const itemElement = document.getElementById(`flex-item-${itemIndex}`);
        if (!itemElement) return;

        controlDef.properties.forEach(prop => {
          const selectId = `item-${itemIndex}-${prop}`;
          const selectElement = document.getElementById(selectId);
          if (selectElement) {
            itemElement.style[prop] = selectElement.value;
          }
        });
      });
    }


    /**
     * Dynamically generates controls for specific flex items based on challenge definition.
     * @param {Array<Object>} itemControlsDef - Definition of item controls for the current challenge.
     */
    function generateItemControls(itemControlsDef) {
      itemControlsList.innerHTML = ''; // Clear previous controls
      userItemStyles = {}; // Reset user item styles
      if (itemControlsDef.length === 0) {
        flexItemControlsSection.classList.add('hidden');
        return;
      }

      flexItemControlsSection.classList.remove('hidden');

      itemControlsDef.forEach(controlDef => {
        const itemIndex = controlDef.index;
        userItemStyles[itemIndex] = {}; // Initialize user styles for this item

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('p-3', 'bg-white', 'rounded-md', 'shadow-sm', 'border', 'border-gray-100');
        itemDiv.innerHTML = `<h3 class="text-md font-semibold text-gray-800 mb-2">Item ${itemIndex + 1} Properties:</h3>`;

        controlDef.properties.forEach(prop => {
          const selectId = `item-${itemIndex}-${prop}`;
          const label = document.createElement('label');
          label.htmlFor = selectId;
          label.classList.add('block', 'text-gray-700', 'text-sm', 'font-bold', 'mb-1', 'mt-2');
          label.textContent = `${prop}:`;

          const select = document.createElement('select');
          select.id = selectId;
          select.name = selectId;
          select.classList.add('block', 'w-full', 'p-2', 'border', 'border-gray-300', 'rounded-md', 'focus:ring-blue-500', 'focus:border-blue-500', 'transition', 'duration-150', 'ease-in-out', 'bg-white', 'text-gray-900');

          let optionsArray = [];
          switch (prop) {
            case 'flexGrow': optionsArray = flexGrowOptions; break;
            case 'flexShrink': optionsArray = flexShrinkOptions; break;
            case 'flexBasis': optionsArray = flexBasisOptions; break;
            case 'alignSelf': optionsArray = alignSelfOptions; break;
          }
          populateSelect(select, optionsArray, ""); // Populate with blank default

          select.addEventListener('change', (e) => {
            // Store user's selection for this item and property
            userItemStyles[itemIndex][prop] = e.target.value;
            applyItemStyles(); // Apply updated style
          });

          itemDiv.appendChild(label);
          itemDiv.appendChild(select);
        });
        itemControlsList.appendChild(itemDiv);
      });
    }


    /**
     * Loads a new challenge into the UI.
     * @param {Object} challenge - The challenge object to load.
     */
    function loadChallenge(challenge) {
      const questionText = challenge.question.replace(/^Challenge \d+: /, 'Challenge: ');
      challengeQuestion.innerHTML = `<p>${questionText}</p>`;
      challengeCounter.textContent = `Challenge ${currentChallengeIndex + 1} / ${allChallenges.length}`;
      renderFlexItems(challenge.numItems);

      // Reset container selects to "Select..."
      populateSelect(flexDirectionSelect, flexDirectionOptions, "");
      populateSelect(justifyContentSelect, justifyContentOptions, "");
      populateSelect(alignItemsSelect, alignItemsOptions, "");
      populateSelect(flexWrapSelect, flexWrapOptions, "");
      populateSelect(alignContentSelect, alignContentOptions, "");

      // Generate and reset item-specific controls
      generateItemControls(challenge.itemControls || []);

      applyContainerStyles(); // Apply initial container styles
      applyItemStyles(); // Apply initial item styles (which should be defaults)

      feedbackMessageDiv.classList.add('hidden');
      solutionDetailsDiv.classList.add('hidden');
      answeredCorrectlyForCurrentChallenge = false;
    }

    /**
     * Checks the user's answer against the correct solution.
     */
    function checkAnswer() {
      const currentChallenge = shuffledChallenges[currentChallengeIndex];
      if (!currentChallenge) return; // Guard

      if (answeredCorrectlyForCurrentChallenge) {
        setFeedback("You've already answered this correctly!", "yellow");
        return;
      }

      let isCorrect = true;
      // Properties that default to 'stretch' or 'nowrap' or 'auto' and should accept empty string as correct
      const defaultAcceptableProperties = {
        'alignItems': 'stretch',
        'alignContent': 'stretch', // Applies if flexWrap is wrap
        'flexWrap': 'nowrap',
        'flexGrow': '0',
        'flexShrink': '1',
        'flexBasis': 'auto',
        'alignSelf': 'auto'
      };

      // Check container properties
      for (const prop in currentChallenge.correctAnswers.container) {
        let userAnswer = document.getElementById(prop).value;
        let correctAnswer = currentChallenge.correctAnswers.container[prop];

        if (defaultAcceptableProperties.hasOwnProperty(prop) && correctAnswer === defaultAcceptableProperties[prop]) {
          if (!(userAnswer === "" || userAnswer === correctAnswer)) {
            isCorrect = false;
            break;
          }
        } else {
          if (userAnswer !== correctAnswer) {
            isCorrect = false;
            break;
          }
        }
      }
      if (!isCorrect) {
        updateScore(-0.25);
        setFeedback("Incorrect. Try again!", "red");
        return;
      }

      // Check item-specific properties
      currentChallenge.correctAnswers.items.forEach(correctItem => {
        const itemIndex = correctItem.index;
        for (const prop in correctItem) {
          if (prop === 'index') continue; // Skip the index property

          const selectId = `item-${itemIndex}-${prop}`;
          const selectElement = document.getElementById(selectId);
          // Use the default value if the select control is not present (meaning the property is not explicitly set for that item)
          // If control is not present, we assume default behavior.
          let userAnswer = selectElement ? selectElement.value : defaultAcceptableProperties[prop];
          let correctAnswer = correctItem[prop];

          if (defaultAcceptableProperties.hasOwnProperty(prop) && correctAnswer === defaultAcceptableProperties[prop]) {
            if (!(userAnswer === "" || userAnswer === correctAnswer)) {
              isCorrect = false;
            }
          } else {
            if (userAnswer !== correctAnswer) {
              isCorrect = false;
            }
          }
          if (!isCorrect) break; // If an item property is incorrect, no need to check further items
        }
      });


      if (isCorrect) {
        updateScore(1);
        setFeedback("Correct! Well done!", "green");
        answeredCorrectlyForCurrentChallenge = true;
        solutionDetailsDiv.classList.add('hidden'); // Hide solution if it was shown
      } else {
        updateScore(-0.25); // Deduct 0.25 marks for incorrect answer
        setFeedback("Incorrect. Try again!", "red");
      }
    }


    /**
     * Displays the correct solution and applies a score penalty.
     */
    function showSolution() {
      const currentChallenge = shuffledChallenges[currentChallengeIndex];
      if (!currentChallenge) return; // Guard

      updateScore(-0.5);
      setFeedback("Solution revealed!", "yellow");

      // Build solution code string
      let solutionCode = `/* Flex Container Properties */\n`;
      solutionCode += `display: flex;\n`; // Flex container always has display: flex;
      for (const prop in currentChallenge.correctAnswers.container) {
        solutionCode += `  ${kebabCase(prop)}: ${currentChallenge.correctAnswers.container[prop]};\n`;
      }

      if (currentChallenge.correctAnswers.items.length > 0) {
        solutionCode += `\n/* Flex Item Properties */\n`;
        currentChallenge.correctAnswers.items.forEach(item => {
          solutionCode += `  .flex-item-${item.index + 1} {\n`;
          for (const prop in item) {
            if (prop === 'index') continue;
            solutionCode += `    ${kebabCase(prop)}: ${item[prop]};\n`;
          }
          solutionCode += `  }\n`;
        });
      }

      solutionCodePre.textContent = solutionCode;
      solutionDetailsDiv.classList.remove('hidden');

      // Apply solution styles to the preview
      flexDirectionSelect.value = currentChallenge.correctAnswers.container.flexDirection;
      justifyContentSelect.value = currentChallenge.correctAnswers.container.justifyContent;
      alignItemsSelect.value = currentChallenge.correctAnswers.container.alignItems;
      flexWrapSelect.value = currentChallenge.correctAnswers.container.flexWrap;
      alignContentSelect.value = currentChallenge.correctAnswers.container.alignContent;
      applyContainerStyles();

      // Apply item specific solution styles
      currentChallenge.correctAnswers.items.forEach(correctItem => {
        for (const prop in correctItem) {
          if (prop === 'index') continue;
          const selectId = `item-${correctItem.index}-${prop}`;
          const selectElement = document.getElementById(selectId);
          if (selectElement) {
            selectElement.value = correctItem[prop];
          }
        }
      });
      applyItemStyles(); // Re-apply item styles with solution values
    }

    /** Converts camelCase to kebab-case for CSS properties. */
    function kebabCase(camelCaseString) {
      return camelCaseString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    }

    /**
     * Moves to the next challenge in the shuffled list.
     */
    function nextChallenge() {
      currentChallengeIndex = (currentChallengeIndex + 1) % shuffledChallenges.length;
      loadChallenge(shuffledChallenges[currentChallengeIndex]);
    }

    /**
     * Sets the feedback message and its styling.
     * @param {string} message - The message to display.
     * @param {'green'|'red'|'yellow'} type - The type of feedback for styling.
     */
    function setFeedback(message, type) {
      feedbackMessageDiv.textContent = message;
      feedbackMessageDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'border-green-300',
        'bg-red-100', 'text-red-800', 'border-red-300',
        'bg-yellow-100', 'text-yellow-800', 'border-yellow-300');

      if (type === 'green') {
        feedbackMessageDiv.classList.add('bg-green-100', 'text-green-800', 'border', 'border-green-300');
      } else if (type === 'red') {
        feedbackMessageDiv.classList.add('bg-red-100', 'text-red-800', 'border', 'border-red-300');
      } else if (type === 'yellow') {
        feedbackMessageDiv.classList.add('bg-yellow-100', 'text-yellow-800', 'border', 'border-yellow-300');
      }
    }

    /**
     * Initializes the application.
     */
    function initializeApp() {
      shuffledChallenges = shuffleArray([...allChallenges]); // Deep copy to ensure original array is not mutated
      currentChallengeIndex = 0;
      loadChallenge(shuffledChallenges[currentChallengeIndex]);

      // Add event listeners for container controls
      flexDirectionSelect.addEventListener('change', applyContainerStyles);
      justifyContentSelect.addEventListener('change', applyContainerStyles);
      alignItemsSelect.addEventListener('change', applyContainerStyles);
      flexWrapSelect.addEventListener('change', applyContainerStyles);
      alignContentSelect.addEventListener('change', applyContainerStyles);

      // Add event listeners for buttons
      checkAnswerBtn.addEventListener('click', checkAnswer);
      showSolutionBtn.addEventListener('click', showSolution);
      nextChallengeBtn.addEventListener('click', nextChallenge);
    }

    // Initialize the app when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', initializeApp);
