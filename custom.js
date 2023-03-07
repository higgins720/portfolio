// Dynamic years of experience
const yearsExperienceEl = document.getElementById('yearsExperience');

let startYear = new Date('2016').getFullYear() + 1;
let currentYear = new Date().getFullYear();

yearsExperienceEl.innerHTML = currentYear - startYear;

// Dynamic Copyright Date
const CopyrightEl = document.getElementById('copyrightDate');
CopyrightEl.innerHTML = currentYear;