# AI Agricultural Science Learning Studio

## Project Overview

AI Agricultural Science Learning Studio is a simple working web application for Agricultural Science teachers. It helps teachers quickly create well-structured sample educational resources for classroom preparation, practical work, assessment and revision.

The application runs directly in a web browser using only static files:

- `index.html`
- `style.css`
- `script.js`

Because it is a static site, it is ready for deployment with GitHub Pages.

## Live App Purpose

The current prototype allows a teacher to:

1. Enter an Agricultural Science topic.
2. Select a student level.
3. Enter the lesson duration.
4. Choose an output type:
   - Lesson plan
   - Practical activity
   - Assessment questions
   - Marking scheme
   - Revision material
5. Click **Generate resource**.
6. View a structured sample educational resource that can be reviewed, edited and adapted for classroom use.

## The Problem

Agricultural Science teachers often spend many hours preparing lessons, practical activities, examination questions, marking guides and revision materials.

Many general AI tools do not consistently produce resources that reflect the terminology, practical requirements, curriculum structure and assessment standards of Agricultural Science education.

## The Solution

AI Agricultural Science Learning Studio provides a focused teacher workflow. The teacher supplies the topic, learner level, duration and desired output. The prototype then formats the information into a practical resource such as a lesson plan, practical activity, assessment, marking scheme or revision material.

This Build Week version does not call an external AI API. It generates sample content locally in the browser so it can be demonstrated, hosted and tested easily without server setup or API keys.

## Target Users

- Agricultural Science teachers
- Biology teachers
- Secondary-school educators
- Curriculum developers
- Examination and assessment specialists
- Students studying agriculture

## Main Features

- Professional responsive landing page
- Teacher-friendly resource generation form
- Topic, student level, duration and output-type inputs
- Structured generated resource preview
- Copy button for generated content
- Static HTML, CSS and JavaScript implementation
- GitHub Pages-ready project structure

## How to Run Locally

Open `index.html` directly in a modern web browser.

You can also use a local static server, for example:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deployment with GitHub Pages

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Select the branch that contains the app.
5. Choose the repository root as the publishing source.
6. Save the settings and open the published GitHub Pages link.

## How GPT-5.6 Was Used

GPT-5.6 was documented as part of the educational design process for this OpenAI Build Week submission. It supported the concept and content-planning side of the project by helping to:

- Define the educational problem
- Identify target users
- Structure Agricultural Science learning outputs
- Design lesson-generation workflows
- Develop assessment and marking-scheme formats
- Improve educational prompt ideas
- Organise project documentation and presentation notes

## How Codex Was Used

Codex was used to implement and prepare the working static web application in this repository. It helped to:

- Create `index.html`, `style.css` and `script.js`
- Build the responsive teacher interface
- Implement the local resource-generation logic
- Add output templates for lesson plans, practical activities, assessment questions, marking schemes and revision materials
- Update this README truthfully to reflect the current working prototype
- Run checks to confirm the files are present and the JavaScript parses correctly
- Commit the finished changes and prepare a pull request

## Example User Workflow

1. The teacher enters an Agricultural Science topic, such as **Soil fertility management**.
2. The teacher selects the student level, such as **Senior Secondary**.
3. The teacher enters the lesson duration, such as **45 minutes**.
4. The teacher chooses the required output type.
5. The teacher clicks **Generate resource**.
6. The generated resource appears on the page and can be copied for further editing.

## Educational Value

The project aims to:

- Reduce teachers' preparation time
- Improve lesson organisation
- Promote student-centred learning
- Support practical Agricultural Science teaching
- Improve assessment quality
- Make AI-assisted planning more useful to educators
- Support curriculum implementation

## Current Project Status

The project is a working static educational prototype for OpenAI Build Week. It includes a browser-based user interface, client-side generation of sample teaching resources and deployment instructions for GitHub Pages.

## Future Development

Future versions may include:

- OpenAI API integration for dynamic AI-generated resources
- Curriculum and examination-board selection
- Downloadable lesson documents
- Automated question banks
- Practical activity templates by topic
- Student revision mode
- Teacher resource history
- Nigerian curriculum support
- WAEC, NECO and IGCSE options
- Multilingual learning resources
- Teacher accounts and saved projects

## Project Category

Education

## Creator

**Adewole Israel Adesoye**

Agricultural Science Educator, Curriculum Developer, Author and AI Education Enthusiast

Nigeria
