export const generateMockData = (length: number) => {
    const statuses = ["active", "inactive", "blacklisted", "pending"];
    const credit = ['loan', 'savings'];
    const relationships = ['Spouse', 'Brother', 'Sister', 'Friend', 'Colleague',  'Parent', ];
    const sectors = ['Health', 'Food', 'Education', 'IT', 'Finance', 'Real Estate', 'ICT', 'Energy'];
    const employmentStatus = ['Employed', 'Unemployed', 'Self-Employed'];
    const levels = ['B.Sc', 'M.Sc', 'Ph.D', 'MBA', 'F.Sc', 'Diploma'];
    const generatePhoneNumber = () => {
        const prefixes = ["080", "090"];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000).toString(); // Generate 8 random digits
        return `${prefix}${number}`;
      };
    
    const data: any = [];
    
    // for (let i = 0; i < length; i++) {
    //   data.push({
    //     id: faker.string.uuid(),
    //     organization: faker.company.name(),
    //     username: faker.internet.userName(),
    //     email: faker.internet.email(),
    //     phoneNumber: generatePhoneNumber(),
    //     dateJoined: faker.date.past().toISOString(), // YYYY-MM-DD format
    //     status: statuses[Math.floor(Math.random() * statuses.length)],
    //     credit: credit[Math.floor(Math.random() * credit.length)],
    //     educationAndEmployment: {
    //       level: levels[Math.floor(Math.random() * levels.length)],
    //       employmentStatus: employmentStatus[Math.floor(Math.random() * employmentStatus.length)],
    //       sector: sectors[Math.floor(Math.random() * sectors.length)],
    //       duration: `${faker.number.int({ min: 1, max: 10 })} years`,
    //       officeEmail: faker.internet.email(),
    //       monthlyIncome: [
    //         faker.finance.amount(60000, 1000000, 2),
    //         faker.finance.amount(60000, 1000000, 2)
    //       ],
    //       loanRepayment: faker.finance.amount(10000, 50000, 2)
    //     },
    //     socials: {
    //       twitter: `@${faker.internet.userName()}`,
    //       facebook: `@${faker.internet.userName()}`,
    //       instagram: `@${faker.internet.userName()}`
    //     },
    //     guarantor: [
    //       {

    //         // fullname: faker.name.findName(),
    //         fullname: faker.person.fullName(), // or faker.name.findName(),
    //         phoneNumber: generatePhoneNumber(),
    //         email: faker.internet.email(),
    //         relationship: relationships[Math.floor(Math.random() * statuses.length)],
    //       },
    //       {
    //         fullname: faker.person.fullName(),
    //         phoneNumber: generatePhoneNumber(),
    //         email: faker.internet.email(),
    //         relationship: relationships[Math.floor(Math.random() * statuses.length)],
    //       }
    //     ]
    //   });
    // }
  
    return data;
  };