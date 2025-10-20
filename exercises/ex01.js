// Create a function called processApplicants which processes a queue of applicants
// and removes those who do not meet all the requirements:
// Requirements:
// - yearsExperience >= 2
// - techStack must include 'React'
// FIFO (First-In, First-Out) must be preserved

const Queue = require('../lib/Queue');

function processApplicants(queue) {
  const tempQueue = new Queue();

  while (!queue.isEmpty()) {
    const applicant = queue.dequeue();

    if (
      applicant.yearsExperience >= 2 &&
      applicant.techStack.includes('React')
    ) {
      tempQueue.enqueue(applicant);
    }
  }

  // Refill the original queue with valid applicants
  while (!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue());
  }
}

// Create queue and add applicants
const applicants = new Queue();
applicants.enqueue({ name: "John Smith", yearsExperience: 3, techStack: ['Angular', 'Node'] });
applicants.enqueue({ name: "Jane Smith", yearsExperience: 5, techStack: ['Node', 'React', 'Vue'] });
applicants.enqueue({ name: "Joe Smith", yearsExperience: 1, techStack: ['React', 'Node'] });
applicants.enqueue({ name: "Jack Smith", yearsExperience: 2, techStack: ['Node', 'MongoDB', 'React'] });

processApplicants(applicants);

console.log(applicants.printQueue());
