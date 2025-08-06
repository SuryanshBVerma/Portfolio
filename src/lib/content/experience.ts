import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "Experience",
  experiences: [
    {
      company: 'Trivium eSolutions',
      companyUrl: 'https://trivium-esolutions.com/en',
      role: 'Software Engineering Intern',
      started: 'Jan 2025',
      upto: 'Present',
      tasks: [
        'Built microservices with Spring Boot and Spring Cloud (Eureka) for scalable systems.',
        'Created RESTful APIs with Spring Data JPA (Hibernate) and WebFlux for asynchronous, non-blocking database operations with MySQL.',
        'Implemented authentication and authorization flows using Spring Security, JWT, OAuth 2.0, and custom',
        'Utilised Apache Kafka for real-time event-driven architectures.',
      ],
    },
    {
      company: 'Business & Finance Society',
      companyUrl: 'https://www.linkedin.com/company/business-finance-society-cotton-university/',
      role: 'Technical Head',
      started: 'Oct 2021',
      upto: 'Jun 2023',
      tasks: [
        'Contributed to the organization\'s success, innovation, and growth',
        'Managed the technical aspects and projects of the society.',
      ],
    },
    {
      company: ' Placement Cell ',
      companyUrl: '',
      role: 'Student Volunteer',
      started: 'april 2023',
      upto: 'july 2023',
      tasks: [
        'Contributed to the smooth functioning of career-related activities of the cell.',
        'Coordinated with faculty advisors, students, and recruiters, and played an active role in managing the technical aspects of the cell.',
      ],
    },
    {
      company: 'South Asian University',
      companyUrl: 'https://www.linkedin.com/school/south-asian-university/',
      role: 'Summer Intern',
      started: 'july 2022',
      upto: '',
      tasks: [
        'Developed a pyhton program to solve the resource allocation problem.',
        'Used Graph coloring algorithms to approch the problem.',
        'Compared and contrased between diffeerent algorithms.',
      ],
    },
  ],
};
