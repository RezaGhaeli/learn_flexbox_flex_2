    // Flexbox challenges (including flex item grow/shrink)
    const questions = [
      // --- Container-based questions ---
      {
        type: "container",
        text: "Align all items to the right (horizontally).",
        items: 3,
        answer: {
          'flex-direction': 'row',
          'justify-content': 'flex-end',
          'align-items': 'stretch',
          'flex-wrap': 'nowrap'
        }
      },
      {
        type: "container",
        text: "Center all items both vertically and horizontally.",
        items: 3,
        answer: {
          'flex-direction': 'row',
          'justify-content': 'center',
          'align-items': 'center',
          'flex-wrap': 'nowrap'
        }
      },
      {
        type: "container",
        text: "Stack items vertically, with the last item at the top.",
        items: 3,
        answer: {
          'flex-direction': 'column-reverse',
          'justify-content': 'flex-start',
          'align-items': 'stretch',
          'flex-wrap': 'nowrap'
        }
      },
      {
        type: "container",
        text: "Spread items evenly with equal space around them.",
        items: 3,
        answer: {
          'flex-direction': 'row',
          'justify-content': 'space-around',
          'align-items': 'stretch',
          'flex-wrap': 'nowrap'
        }
      },
      {
        type: "container",
        text: "Align items to the bottom of the container.",
        items: 3,
        answer: {
          'flex-direction': 'row',
          'justify-content': 'flex-start',
          'align-items': 'flex-end',
          'flex-wrap': 'nowrap'
        }
      },
      {
        type: "container",
        text: "Reverse the order of items horizontally.",
        items: 4,
        answer: {
          'flex-direction': 'row-reverse',
          'justify-content': 'flex-start',
          'align-items': 'stretch',
          'flex-wrap': 'nowrap'
        }
      },
      {
        type: "container",
        text: "Stack items vertically and center them horizontally.",
        items: 5,
        answer: {
          'flex-direction': 'column',
          'justify-content': 'center',
          'align-items': 'center',
          'flex-wrap': 'nowrap'
        }
      },
      {
        type: "container",
        text: "Allow items to wrap onto multiple lines.",
        items: 6,
        answer: {
          'flex-direction': 'row',
          'justify-content': 'flex-start',
          'align-items': 'stretch',
          'flex-wrap': 'wrap'
        }
      },
      {
        type: "container",
        text: "Distribute items with equal space between them.",
        items: 4,
        answer: {
          'flex-direction': 'row',
          'justify-content': 'space-between',
          'align-items': 'stretch',
          'flex-wrap': 'nowrap'
        }
      },
      {
        type: "container",
        text: "Stack items vertically, with the first item at the bottom.",
        items: 3,
        answer: {
          'flex-direction': 'column-reverse',
          'justify-content': 'flex-end',
          'align-items': 'stretch',
          'flex-wrap': 'nowrap'
        }
      },
      // --- Flex item-based questions ---
      {
        type: "item",
        text: "Make only the second item grow to fill the extra space (others stay the same size).",
        items: 3,
        container: {
          'flex-direction': 'row',
          'justify-content': 'flex-start',
          'align-items': 'stretch',
          'flex-wrap': 'nowrap'
        },
        answer: [
          { grow: 0, shrink: 1 },
          { grow: 1, shrink: 1 },
          { grow: 0, shrink: 1 }
        ]
      },
      {
        type: "item",
        text: "Make the first item shrink twice as fast as the others when the container is too small.",
        items: 3,
        container: {
          'flex-direction': 'row',
          'justify-content': 'flex-start',
          'align-items': 'stretch',
          'flex-wrap': 'nowrap'
        },
        answer: [
          { grow: 0, shrink: 2 },
          { grow: 0, shrink: 1 },
          { grow: 0, shrink: 1 }
        ]
      }
    ];

    // Shuffle questions array
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    let shuffledQuestions = shuffle([...questions]);

    // DOM elements
    const questionEl = document.getElementById('question');
    const flexContainer = document.getElementById('flex-container');
    const feedbackEl = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');
    const retryBtn = document.getElementById('retry-btn');
    const cssCodeEl = document.getElementById('css-code');
    const attemptsEl = document.getElementById('attempts');
    const itemCountSlider = document.getElementById('item-count');
    const itemCountValue = document.getElementById('item-count-value');
    const containerControls = document.getElementById('container-controls');
    const itemControls = document.getElementById('item-controls');
    const controls = {
      'flex-direction': document.getElementById('flex-direction'),
      'justify-content': document.getElementById('justify-content'),
      'align-items': document.getElementById('align-items'),
      'flex-wrap': document.getElementById('flex-wrap')
    };

    let currentQuestion = 0;
    let attempts = 0;
    let maxAttempts = 4;
    let currentItemCount = 3;
    let itemGrow = [];
    let itemShrink = [];

    function setFlexboxStyles(answer) {
      for (const prop in controls) {
        flexContainer.style[prop] = answer[prop];
        controls[prop].value = answer[prop];
      }
    }

    function updateFlexbox() {
      for (const prop in controls) {
        flexContainer.style[prop] = controls[prop].value;
      }
      checkAnswer();
    }

    function renderItems(count) {
      flexContainer.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const item = document.createElement('div');
        item.className = 'flex-item';
        item.textContent = i + 1;
        // For item-based questions, set flex-grow/shrink
        if (isItemQuestion()) {
          item.style.flexGrow = itemGrow[i];
          item.style.flexShrink = itemShrink[i];
        }
        flexContainer.appendChild(item);
      }
    }

    function renderItemControls(count) {
      itemControls.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const group = document.createElement('div');
        group.className = 'item-control-group';
        const label = document.createElement('div');
        label.className = 'item-label';
        label.textContent = `Item ${i + 1}`;
        group.appendChild(label);

        // flex-grow
        const growLabel = document.createElement('label');
        growLabel.textContent = 'flex-grow';
        const growInput = document.createElement('input');
        growInput.type = 'number';
        growInput.min = 0;
        growInput.value = itemGrow[i];
        growInput.style.marginBottom = '4px';
        growInput.addEventListener('input', () => {
          itemGrow[i] = parseInt(growInput.value, 10);
          renderItems(currentItemCount);
          if (nextBtn.disabled && retryBtn.style.display === 'none') {
            attempts++;
          }
          checkAnswer();
        });
        group.appendChild(growLabel);
        group.appendChild(growInput);

        // flex-shrink
        const shrinkLabel = document.createElement('label');
        shrinkLabel.textContent = 'flex-shrink';
        const shrinkInput = document.createElement('input');
        shrinkInput.type = 'number';
        shrinkInput.min = 0;
        shrinkInput.value = itemShrink[i];
        shrinkInput.addEventListener('input', () => {
          itemShrink[i] = parseInt(shrinkInput.value, 10);
          renderItems(currentItemCount);
          if (nextBtn.disabled && retryBtn.style.display === 'none') {
            attempts++;
          }
          checkAnswer();
        });
        group.appendChild(shrinkLabel);
        group.appendChild(shrinkInput);

        itemControls.appendChild(group);
      }
    }

    function isItemQuestion() {
      return shuffledQuestions[currentQuestion].type === "item";
    }

    function showQuestion(index) {
      const q = shuffledQuestions[index];
      questionEl.textContent = `Q${index + 1}: ${q.text}`;
      currentItemCount = q.items;
      itemCountSlider.value = currentItemCount;
      itemCountValue.textContent = currentItemCount;
      attempts = 0;
      updateAttempts();
      feedbackEl.textContent = '';
      feedbackEl.className = 'feedback';
      nextBtn.disabled = true;
      cssCodeEl.style.display = 'none';
      cssCodeEl.textContent = '';
      retryBtn.style.display = 'none';

      if (q.type === "container") {
        // Show container controls, hide item controls
        containerControls.style.display = '';
        itemControls.style.display = 'none';
        renderItems(currentItemCount);
        setFlexboxStyles({
          'flex-direction': 'row',
          'justify-content': 'flex-start',
          'align-items': 'stretch',
          'flex-wrap': 'nowrap'
        });
        enableControls(true);
        itemCountSlider.disabled = false;
      } else if (q.type === "item") {
        // Hide container controls, show item controls
        containerControls.style.display = 'none';
        itemControls.style.display = '';
        // Set container to fixed config
        setFlexboxStyles(q.container);
        // Initialize per-item grow/shrink
        itemGrow = [];
        itemShrink = [];
        for (let i = 0; i < currentItemCount; i++) {
          itemGrow.push(0);
          itemShrink.push(1);
        }
        renderItems(currentItemCount);
        renderItemControls(currentItemCount);
        enableControls(false);
        itemCountSlider.disabled = true;
      }
    }

    function updateAttempts() {
      attemptsEl.textContent = `Attempt ${attempts + 1} of ${maxAttempts}`;
    }

    function checkAnswer() {
      const q = shuffledQuestions[currentQuestion];
      let correct = true;
      if (q.type === "container") {
        for (const prop in q.answer) {
          if (controls[prop].value !== q.answer[prop]) {
            correct = false;
            break;
          }
        }
      } else if (q.type === "item") {
        for (let i = 0; i < q.answer.length; i++) {
          if (
            itemGrow[i] !== q.answer[i].grow ||
            itemShrink[i] !== q.answer[i].shrink
          ) {
            correct = false;
            break;
          }
        }
      }
      if (correct) {
        feedbackEl.textContent = "✅ Correct! Well done.";
        feedbackEl.className = 'feedback correct';
        nextBtn.disabled = false;
        cssCodeEl.style.display = 'block';
        showCssCode(q);
        retryBtn.style.display = 'none';
        enableControls(false);
      } else {
        feedbackEl.textContent = "";
        feedbackEl.className = 'feedback';
        nextBtn.disabled = true;
        cssCodeEl.style.display = 'none';
        cssCodeEl.textContent = '';
        if (attempts < maxAttempts - 1) {
          // Only increment if the user changed a control
        } else if (attempts === maxAttempts - 1) {
          feedbackEl.textContent = "❌ Out of attempts! Here's the correct answer. Click 'Try Again' to retry.";
          feedbackEl.className = 'feedback incorrect';
          showCssCode(q, true);
          cssCodeEl.style.display = 'block';
          retryBtn.style.display = 'block';
          enableControls(false);
        }
      }
      updateAttempts();
    }

    // Show the CSS code for the correct answer
    function showCssCode(q, showAll = false) {
      if (q.type === "container") {
        let code = `.flex-container {\n  display: flex;`;
        for (const prop in q.answer) {
          code += `\n  ${prop}: ${q.answer[prop]};`;
        }
        code += `\n}`;
        cssCodeEl.textContent = code;
      } else if (q.type === "item") {
        let code = `.flex-container {\n  display: flex;`;
        for (const prop in q.container) {
          code += `\n  ${prop}: ${q.container[prop]};`;
        }
        code += `\n}\n`;
        for (let i = 0; i < q.answer.length; i++) {
          code += `.flex-item:nth-child(${i + 1}) {\n  flex-grow: ${q.answer[i].grow};\n  flex-shrink: ${q.answer[i].shrink};\n}\n`;
        }
        cssCodeEl.textContent = code;
      }
    }

    // Enable or disable controls
    function enableControls(enable) {
      Object.values(controls).forEach(control => control.disabled = !enable);
      // For item controls, handled in renderItemControls
    }

    // Event listeners
    Object.values(controls).forEach(control => {
      control.addEventListener('change', () => {
        if (nextBtn.disabled && retryBtn.style.display === 'none') {
          attempts++;
        }
        updateFlexbox();
      });
    });

    itemCountSlider.addEventListener('input', () => {
      currentItemCount = parseInt(itemCountSlider.value, 10);
      itemCountValue.textContent = currentItemCount;
      renderItems(currentItemCount);
      // Changing item count does not count as an attempt
    });

    nextBtn.addEventListener('click', () => {
      currentQuestion++;
      if (currentQuestion < shuffledQuestions.length) {
        showQuestion(currentQuestion);
      } else {
        questionEl.textContent = "🎉 All challenges completed!";
        flexContainer.innerHTML = '';
        feedbackEl.textContent = "Great job! You mastered Flexbox basics.";
        feedbackEl.className = 'feedback correct';
        nextBtn.disabled = true;
        nextBtn.style.display = 'none';
        cssCodeEl.style.display = 'none';
        attemptsEl.textContent = '';
        retryBtn.style.display = 'none';
        itemControls.style.display = 'none';
      }
    });

    retryBtn.addEventListener('click', () => {
      showQuestion(currentQuestion);
    });

    // Initialize
    showQuestion(currentQuestion);
