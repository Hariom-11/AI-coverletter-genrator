    const form = document.getElementById("coverForm");
    const outputBox = document.getElementById("outputBox");
    const letterContent = document.getElementById("letterContent");
    const copyBtn = document.getElementById("copyBtn");

    // Mock AI Function
    function generateCoverLetter(name, role, company, skills, jobDescription){

      return `
Dear Hiring Manager at ${company},

I am excited to apply for the position of ${role} at your company. My name is ${name}, and I believe my skills in ${skills} make me a strong candidate for this role.

After reviewing the job description, I am confident that my background and passion align well with your requirements. I have experience working on projects that required problem-solving, teamwork, and technical expertise.

I am highly motivated to contribute to ${company} and help achieve company goals through dedication and continuous learning.

Thank you for considering my application. I would welcome the opportunity to discuss how my skills and enthusiasm can benefit your team.

Sincerely,
${name}
      `;
    }

    // Form Submit
    form.addEventListener("submit", function(e){

      e.preventDefault();

      const name = document.getElementById("name").value;
      const role = document.getElementById("role").value;
      const company = document.getElementById("company").value;
      const skills = document.getElementById("skills").value;
      const jobDescription = document.getElementById("jobDescription").value;

      const letter = generateCoverLetter(
        name,
        role,
        company,
        skills,
        jobDescription
      );

      letterContent.innerText = letter;

      outputBox.style.display = "block";

    });

    // Copy to Clipboard
    copyBtn.addEventListener("click", function(){

      navigator.clipboard.writeText(letterContent.innerText);

      copyBtn.innerText = "Copied!";

      setTimeout(() => {
        copyBtn.innerText = "Copy to Clipboard";
      }, 2000);

    });

