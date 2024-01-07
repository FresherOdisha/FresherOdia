const jobs = [
  {
    title: "Merchant Trainer & Technical Support",
    image: "images/software-engineer.svg",
    details:
      "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "1",
    location: "Location-Bhubaneswar",
    eligibility: "Qualification:-Any graduate ",
    lastDate: "Post Date-06/01/2024",
    link: "https://jobs.klimb.io/petpooja/6599377feea1221ee8c1e0d1?department=support&source=careers",
  },



  {
    title: "Technology Engineer ",
    image: "images/project-manager.svg",
    openPositions: "1",
    location: "Location-Bhubaneswar",
    eligibility: "Qualification:-Bachelor degree in a technical or scientific field ",
    lastDate: "Post Date-06/01/2024",
    link: "https://www.wolfram.com/company/careers/opportunities/#op-575371-wolfram-technology-engineer-independent-contractorbhubaneswar-india",
  },

  {
    title: "Trainee - Intern - Perfect Welding",
    image: "images/product-manager.svg",
    details:
      "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
    openPositions: "1",
    location: "Location-Pune",
    eligibility: "Qualification:-Fresher Diploma (Mechanical / Electrical) ",
    lastDate: "Post Date-06/01/2024",
    link: "https://fronius.wd3.myworkdayjobs.com/en-US/Job_Board/job/Pune/Trainee---Intern---Perfect-Welding_REQ-10006351",
  },
  {
    title: "Research Intern - Energy Transitions",
    image: "images/data-scientist.svg",
    details:
      "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
    openPositions: "1",
    location: "Location-New Delhi",
    eligibility: "Qualification:-Master’s degree in environmental engineering, environmental management or planning, urban planning, urban sanitation, waste management, or related field. Graduate candidates in these fields with proven track record may also be considered. ",
    lastDate: "Post Date-06/01/2024",
    link: "https://www.ceew.in/careers/research-intern-energy-transitions",
  },
  {
    title: "Project Management Intern",
    image: "images/sales-representative.svg",
    Email:
      "Responsible for reaching out to potential customers and closing sales deals.",
    openPositions: "1",
    location: "Location-Bhubaneswar",
    eligibility: "Qualification:-Bachelor/Master degree in Business Mgmt  ",
    lastDate: "Post Date-06/01/2024",
    link: "https://www.ajatus.in/career/project-management-intern-2/",
  },

  {
    title: "Operation Associate",
    image: "images/marketing-manager.svg",
    details:
      "Responsible for creating and executing marketing strategies to promote a company or product.",
    openPositions: "1",
    location: "Location-Bhubaneswar",
    eligibility: "Qualification:-Bachelor's degree in business ",
    lastDate: "Post Date-06/01/2024",
    link: "https://incobist.com/JobDetail/8",
  },
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Bhubaneswar & Cuttack Job`;
} else {
  jobsHeading.innerHTML = `Fresher  Odisha | <br>Bhubaneswar & Cuttack Jobs`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";
jobs.forEach((job) => {
  if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
    let jobCard = document.createElement("div");
    jobCard.classList.add("job");

    let image = document.createElement("img");
    image.src = job.image;

    let title = document.createElement("h3");
    title.innerHTML = job.title;
    title.classList.add("job-title");

    // create new elements for location, eligibility, and last date
    let location = document.createElement("div");
    location.innerHTML = job.location;
    location.classList.add("location");

    let eligibility = document.createElement("div");
    eligibility.innerHTML = job.eligibility;
    eligibility.classList.add("eligibility");

    let lastDate = document.createElement("div");
    lastDate.innerHTML = job.lastDate;
    lastDate.classList.add("last-date");

    let detailsBtn = document.createElement("a");
    detailsBtn.href = job.link;
    detailsBtn.target = job.target; 
    detailsBtn.innerHTML = "Click Here For More Details";
    detailsBtn.classList.add("details-btn");

    let openPositions = document.createElement("span");
    /*openPositions.classList.add("open-positions");

    if (job.openPositions == 1) {
      openPositions.innerHTML = `${job.openPositions} open position`;
    } else {
      openPositions.innerHTML = `${job.openPositions} open positions`;
    }*/

    jobCard.appendChild(image);
    jobCard.appendChild(title);
    // append the new elements to the job card
    jobCard.appendChild(location);
    jobCard.appendChild(eligibility);
    jobCard.appendChild(lastDate);
    jobCard.appendChild(detailsBtn);
    jobCard.appendChild(openPositions);

    jobsContainer.appendChild(jobCard);
  }
});
}
createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});
