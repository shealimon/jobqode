/**
 * DEVELOPMENT PROCESS — edit step wording here.
 * The Process section renders the steps in array order.
 */

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  /** What you receive / can review at the end of this stage. */
  output: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Requirement Discovery",
    description:
      "We start by understanding your business, your users and the problem the software needs to solve, so the scope is grounded in real requirements.",
    output: "A clear picture of goals, users and priorities.",
  },
  {
    id: "planning",
    title: "Planning & Solution Design",
    description:
      "We turn requirements into a practical plan: scope, architecture, technology choices and the sequence in which the software will be delivered.",
    output: "An agreed scope and solution outline before build begins.",
  },
  {
    id: "design",
    title: "UI/UX Design",
    description:
      "Screens and flows are designed around the people who will use the software every day, and reviewed with you before development starts.",
    output: "Designs you can review and give feedback on early.",
  },
  {
    id: "development",
    title: "Development",
    description:
      "The application is built in structured stages, with progress you can see and comment on as features take shape.",
    output: "Working software, delivered in reviewable stages.",
  },
  {
    id: "testing",
    title: "Testing & Quality Assurance",
    description:
      "Features are tested against the agreed requirements across devices and browsers, and issues are resolved before release.",
    output: "Software checked against the requirements it was built to meet.",
  },
  {
    id: "deployment",
    title: "Deployment & Ongoing Support",
    description:
      "We deploy the application, help your team get started, and remain available for improvements, fixes and future development.",
    output: "A live application, with support available as your needs evolve.",
  },
];
