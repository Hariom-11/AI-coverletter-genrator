I made an AI Cover Letter Generator using HTML and JS. I already completed the functionality, I just need CSS for a clean modern UI.
The app has a form, generate button, and a cover letter output box with copy button.
Make it responsive with a professional AI tool/dashboard look using good spacing, shadows, and rounded corners.
Here’s my HTML code: "<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>AI Cover Letter Generator</title>
  <link rel="stylesheet" href="style.css">
  
</head>
<body>
 
  <div class="container">

    <div class="title">
      <h1>AI Cover Letter Generator</h1>
      <p>Create a professional cover letter instantly using AI-style generation.</p>
    </div>

    <form id="coverForm">

      <div class="input-group">
        <label>Candidate Name</label>
        <input type="text" id="name" placeholder="Enter your name" required />
      </div>

      <div class="input-group">
        <label>Job Role</label>
        <input type="text" id="role" placeholder="Frontend Developer" required />
      </div>

      <div class="input-group">
        <label>Company Name</label>
        <input type="text" id="company" placeholder="Google" required />
      </div>

      <div class="input-group">
        <label>Key Skills</label>
        <input type="text" id="skills" placeholder="HTML, CSS, JavaScript" required />
      </div>

      <div class="input-group full-width">
        <label>Job Description</label>
        <textarea id="jobDescription" placeholder="Paste the job description here..." required></textarea>
      </div>

      <button type="submit">Generate Cover Letter</button>

    </form>

    <div class="output-box" id="outputBox">

      <div class="output-header">
        <h2>Generated Cover Letter</h2>
        <button class="copy-btn" id="copyBtn">Copy to Clipboard</button>
      </div>

      <div class="letter" id="letterContent"></div>

    </div>

  </div>

  <script src="script.js"></script>

</body>
</html>"
