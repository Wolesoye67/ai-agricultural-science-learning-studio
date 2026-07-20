const form = document.querySelector('#resourceForm');
const output = document.querySelector('#resourceOutput');
const outputTitle = document.querySelector('#output-title');
const copyButton = document.querySelector('#copyButton');

const resourceLabels = {
  lessonPlan: 'Lesson plan',
  practicalActivity: 'Practical activity',
  assessmentQuestions: 'Assessment questions',
  markingScheme: 'Marking scheme',
  revisionMaterial: 'Revision material'
};

function sanitize(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  })[character]);
}

function meta(topic, level, duration, type) {
  return `
    <div class="meta">
      <span class="pill">Topic: ${topic}</span>
      <span class="pill">Level: ${level}</span>
      <span class="pill">Duration: ${duration}</span>
      <span class="pill">Type: ${resourceLabels[type]}</span>
    </div>
  `;
}

function lessonPlan(topic, level, duration) {
  return `
    ${meta(topic, level, duration, 'lessonPlan')}
    <h3>Learning objectives</h3>
    <ul>
      <li>Explain the meaning and importance of ${topic} in Agricultural Science.</li>
      <li>Identify at least three practical examples related to the topic.</li>
      <li>Apply the concept to a real farm or school-garden situation.</li>
    </ul>
    <h3>Lesson sequence</h3>
    <ol>
      <li><strong>Starter (5 minutes):</strong> Ask learners to share what they already know about ${topic}.</li>
      <li><strong>Teacher input (15 minutes):</strong> Define key terms, show diagrams or farm samples, and connect ideas to local agriculture.</li>
      <li><strong>Guided practice (15 minutes):</strong> Learners analyse a short scenario and recommend good agricultural practices.</li>
      <li><strong>Evaluation (5 minutes):</strong> Use oral questions and quick written responses.</li>
      <li><strong>Conclusion (5 minutes):</strong> Summarise key points and assign a home task.</li>
    </ol>
    <h3>Teaching aids</h3>
    <p>Chalkboard or slides, labelled diagrams, local farm materials, notebooks and observation sheets.</p>
  `;
}

function practicalActivity(topic, level, duration) {
  return `
    ${meta(topic, level, duration, 'practicalActivity')}
    <h3>Activity title</h3>
    <p>Investigating ${topic} through observation and group reporting.</p>
    <h3>Materials</h3>
    <ul><li>Sample farm materials or pictures</li><li>Observation worksheet</li><li>Measuring tools where needed</li><li>Protective gloves for handling samples</li></ul>
    <h3>Procedure</h3>
    <ol>
      <li>Divide learners into small groups and assign roles: recorder, presenter and materials manager.</li>
      <li>Ask each group to observe the sample or scenario connected to ${topic}.</li>
      <li>Learners record evidence, explain what they noticed and propose an agricultural solution.</li>
      <li>Groups present findings while the teacher corrects misconceptions.</li>
    </ol>
    <h3>Safety and reflection</h3>
    <p>Wash hands after handling materials. Learners should write one way the activity applies to farming in their community.</p>
  `;
}

function assessmentQuestions(topic, level, duration) {
  return `
    ${meta(topic, level, duration, 'assessmentQuestions')}
    <h3>Multiple-choice questions</h3>
    <ol>
      <li>Which statement best describes ${topic}?<br>A. A farm record only B. A key agricultural concept C. A marketing slogan D. A storage pest</li>
      <li>One benefit of understanding ${topic} is improved farm decision-making. True or false?</li>
    </ol>
    <h3>Short-answer questions</h3>
    <ol>
      <li>Define ${topic} in your own words.</li>
      <li>List three examples or practices related to ${topic}.</li>
      <li>Explain two ways ${topic} can improve agricultural productivity.</li>
    </ol>
    <h3>Challenge task</h3>
    <p>Describe a local farm problem and explain how knowledge of ${topic} could help solve it.</p>
  `;
}

function markingScheme(topic, level, duration) {
  return `
    ${meta(topic, level, duration, 'markingScheme')}
    <h3>Suggested marking guide</h3>
    <ol>
      <li><strong>Definition of ${topic} - 2 marks:</strong> Award marks for accuracy, clarity and correct agricultural terminology.</li>
      <li><strong>Examples - 3 marks:</strong> One mark for each relevant example or practice.</li>
      <li><strong>Importance - 4 marks:</strong> Award two marks each for well-explained benefits to crop, animal or farm management.</li>
      <li><strong>Application - 6 marks:</strong> Award marks for identifying a real problem, recommending a suitable solution and explaining expected results.</li>
    </ol>
    <h3>Total</h3>
    <p>15 marks. Accept other scientifically correct answers that are relevant to ${topic}.</p>
  `;
}

function revisionMaterial(topic, level, duration) {
  return `
    ${meta(topic, level, duration, 'revisionMaterial')}
    <h3>Key points to remember</h3>
    <ul>
      <li>${topic} is important because it supports better agricultural planning and practice.</li>
      <li>Use correct terms and connect explanations to real farm examples.</li>
      <li>When revising, practise definitions, diagrams, examples and applications.</li>
    </ul>
    <h3>Quick revision questions</h3>
    <ol>
      <li>What is ${topic}?</li>
      <li>Why should farmers or students understand ${topic}?</li>
      <li>Give two local examples linked to ${topic}.</li>
    </ol>
    <h3>Memory tip</h3>
    <p>Connect each fact about ${topic} to something you can see on a farm, in a garden or in your community.</p>
  `;
}

const generators = { lessonPlan, practicalActivity, assessmentQuestions, markingScheme, revisionMaterial };

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const topic = sanitize(formData.get('topic').trim());
  const level = sanitize(formData.get('level'));
  const duration = sanitize(formData.get('duration').trim());
  const type = formData.get('outputType');

  outputTitle.textContent = resourceLabels[type];
  output.innerHTML = generators[type](topic, level, duration);
});

copyButton.addEventListener('click', async () => {
  const text = output.innerText.trim();
  if (!text || output.querySelector('.empty-state')) {
    return;
  }

  await navigator.clipboard.writeText(text);
  copyButton.textContent = 'Copied';
  setTimeout(() => {
    copyButton.textContent = 'Copy';
  }, 1600);
});
