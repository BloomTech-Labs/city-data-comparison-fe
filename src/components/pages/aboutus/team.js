//separate file to store all of the information about each team member

//Format for team lead or any other management member
// {
//     labs: 21,
//     name: 'Jeremy Rogel', 
//     image: jeremy, (Save photo in assets/team photos)
//     management: true,
//     role: 'Team Lead, Labs 21', 
//     social: {
//         twitter: null, 
//         github: 'jeremyRogel', 
//         linkedin: 'jeremy-rogel-293640186/'
//     }, 
//     about: 'A natural go-getter, Jeremy Rogel applies his knowledge of code and passion for creation by being the best fullstack web developer this side of the Mississippi! Applying his trade in Durham, NC, his passion to keep getting better shines in whatever he sets out to do.',
//     portfolio: null
// }

//Format for student
// {
//     labs: 21,
//     name: 'Jeremy Rogel', 
//     image: jeremy, (Save photo in assets/team photos)
//     role: 'UI/UX Designer', 
//     social: {
//         twitter: null, 
//         github: 'jeremyRogel', 
//         linkedin: 'jeremy-rogel-293640186/'
//     }, 
//     about: 'A natural go-getter, Jeremy Rogel applies his knowledge of code and passion for creation by being the best fullstack web developer this side of the Mississippi! Applying his trade in Durham, NC, his passion to keep getting better shines in whatever he sets out to do.',
//     portfolio: null
// }

//team members photos
import anna from '../../../assets/team_photos/anna_t.png'; 
import daniel from '../../../assets/team_photos/daniel_b.jpg'; 
import john from '../../../assets/team_photos/john_w.jpg'; 
import kevin from '../../../assets/team_photos/kevin_n.png'; 
import luke from '../../../assets/team_photos/luke_t.png'; 
import matthew from '../../../assets/team_photos/matthew_s.jpg';
import michael from '../../../assets/team_photos/michael_h.jpg';
import muamer from '../../../assets/team_photos/muamer_k.jpg'; 
import ruth from '../../../assets/team_photos/ruth_p.jpg'; 
import scott from '../../../assets/team_photos/scott_m.png';
import umeko from '../../../assets/team_photos/umeko_w.jpg';
import dariush from '../../../assets/team2_photos/Dariush Khansari.png'; 
import songa from '../../../assets/team2_photos/Songa Mugenzi.png'; 
import jimmy from '../../../assets/team2_photos/Jimmy Smith.png'; 
import eric from '../../../assets/team2_photos/Eric Ramon.png'; 
import chris from '../../../assets/team2_photos/Christopher Shields.png'; 
import anisha from '../../../assets/team2_photos/Anisha Sunkerneni.png';
import kyle from '../../../assets/team2_photos/Kyle Porter.jpg';
import ryan from '../../../assets/team2_photos/Ryan Cooper.png'; 
import regino from '../../../assets/team2_photos/Regino Parragil.jpg'; 
import thomas from '../../../assets/team2_photos/Thomas Rodriguez.png';
import jeremy from '../../../assets/team2_photos/Jeremy Rogel1.png';
//labs 23
import david from '../../../assets/team3_photos/David Pok.jpg';
import svyat from '../../../assets/team3_photos/Svyat.png';
import liam from '../../../assets/team3_photos/Liam Moore.jpg';
import damon from '../../../assets/team3_photos/Damon Bogich.jpg';
import amy from '../../../assets/team3_photos/Amy NLe.jpg';
import steven from '../../../assets/team3_photos/Steven Reiss.jpg';
import robert from '../../../assets/team3_photos/Robert Tom.jpg';
import stephanie from '../../../assets/team3_photos/Stephanie Miller.png';




const team = [
    {
        labs: 19,
        name: 'Anna Townsend', 
        image: anna,
        management: true,
        role: 'Team Lead, Labs 19', 
        social: {
            twitter: 'annatow62847551', 
            github: 'annatownsend9916', 
            linkedin: 'anna-townsend-74404a188'
        }, 
        about: 'Anna Townsend is a full stack web Developer from Michigan.  Anna loves to stay creative through art and programming.  In her spare time she codes games and paints, even on walls.',
        portfolio: 'https://www.linkedin.com/in/anna-townsend-74404a188/'
    
    }, {
        labs: 19,
        name: 'Ruth Philips', 
        image: ruth,
        role: 'UI/UX Designer', 
        social: {
            twitter: 'Ruthmatt3', 
            github: null, 
            linkedin: 'ruth-philips', 
            email: 'rphilips0816@gmail.com <rphilips0816@gmail.com'
        }, 
        about: 'I love designing fresh, vibrant, and original user experiences that are unique and strike a conversation. My goal is to create a simple and straightforward user experience that captures the heart and mind of individuals interacting with the product at every stage of the product experience. When I am not designing, I love to explore new cuisines and watch stand-up with my spouse.',
        portfolio: 'https://www.ruthphilips.com/'
    
    }, {
        labs: 19,
        name: 'Luke Townsend', 
        image: luke,
        role: 'Data Scientist', 
        social: {
            twitter: 'ltownsend10', 
            github: 'ldtownsend', 
            linkedin: 'luke-townsend-caia-95312610a'
        }, 
        about: 'Luke Townsend is a data scientist in Kansas City, MO. He spent four years as an investment analyst at a university foundation. He’s interested in applying data science tools to improve the decision making process at businesses.',
        portfolio: 'https://www.linkedin.com/in/luke-townsend-caia-95312610a/'
    
    }, {
        labs: 19,
        name: 'Matthew Sessions', 
        image: matthew,
        role: 'Data Scientist', 
        social: {
            twitter: null, 
            github: 'matthew-sessions', 
            linkedin: null
        }, 
        about: 'Matthew Sessions is a Machine Learning Engineer in Seattle, Washington. Before becoming a full-time developer, Matthew was working abroad in Shenzhen, China as a cross-border e-commerce specialist. He believes that Data Science provides a roadmap that helps companies demystify complex business problems.', 
        portfolio: 'http://matthewlsessions.com/'
    
    }, {
        labs: 19,
        name: 'Scott Maxwell', 
        image: scott,
        role: 'Data Scientist', 
        social: {
            twitter: 'scott_w_maxwell', 
            github: 'scottwmwork', 
            linkedin: null
        }, 
        about: 'Scott Maxwell is a data scientist & engineer in Gilbert, Arizona. He has a strong background in object oriented programming and software engineering. He is an individual driven by product delivery and software that provides solutions.',
        portfolio: 'http://Scottmaxwellportfolio.com'
    
    }, {
        labs: 19,
        name: 'Michael Harms', 
        image: michael,
        role: 'Web Developer', 
        social: {
            twitter: 'michaelharms70', 
            github: 'michaelharms6010', 
            linkedin: 'michael-harms-88aa49b4'
        }, 
        about: 'Michael Harms is a software engineer based in Rochester, MN. He\'s also a published author and a carnivore. He is building tools to empower all humans with autonomy and usher in a new Golden Age through cost reduction.',
        portfolio: 'https://www.zecmailer.com'
    
    }, {
        labs: 19,
        name: 'Muamer Kukic', 
        image: muamer,
        role: 'Web Developer', 
        social: {
            twitter: 'MuamerKukic', 
            github: 'kukicako', 
            linkedin: 'muamer-kukic-502419130'
        }, 
        about:'Muamer Kukic is a software engineer currently living in Las Vegas, Nevada. He aspires to be apart of the next big project that furthers education in growth of individuals and mental health. He is also a big basketball fan so feel free to contact his social media and talk trash about his favorite teams.',
        portfolio: 'https://kukicako.github.io/portfolio-website/'
    
    }, {
        labs: 19,
        name: 'Kevin Nyugen', 
        image: kevin,
        role: 'Web Developer', 
        social: {
            twitter: 'kevinboard', 
            github: 'kevinnguyen805', 
            linkedin: 'kevinnguyen805'
        }, 
        about: 'Kevin is a full stack engineer based in Santa Barbara, California. He comes from a medical background and decided to throw in his scrubs to pursue his passion in building and designing. He is interested in creating technology that brings people together through optimized user experience. In his free time, Kevin enjoys listening to electronic jazz and laughing with people until his sides hurt.',
        portfolio: 'https://kevinn.net/Portfolio/'
    
    }, {
        labs: 19,
        name: 'John Watt', 
        image: john,
        role: 'Web Developer', 
        social: {
            twitter: 'thejohnwatt_', 
            github: 'thejohnwatt', 
            linkedin: 'thejohnwatt'
        }, 
        about: 'John Watt is a full stack web developer for Citrics.io. Previously, John worked in tech/mobile sales in Colorado Springs, Co.  After 6 years of sales, he became burnt out and decided to move on to bigger and better things. He was recommended to join Lambda Schools and learn full stack web development and is currently finishing up his coding journey in Murrieta, Ca.', 
        portfolio: 'https://www.github.com/thejohnwatt'
    
    }, {
        labs: 19,
        name: 'Daniel Brizksa', 
        image: daniel,
        role: 'Web Developer', 
        social: {
            twitter: 'brikszaDaniel', 
            github: 'dbriksza', 
            linkedin: 'daniel-briksza-23a331191/'
        }, 
        about:'Daniel is a full-stack web developer at Lambda School. As an outgoing and studious individual, Daniel is a great team player who knows when to take the initiative. Diverse interests ranging from gardening to animation give Daniel a wide range of skills useful in any industry. Daniel is looking to test his skills and abilities in the tech industry, and make the world a better place.', 
        portfolio: 'https://portfolio.dbriksza.now.sh'
    
    }, {
        labs: 19,
        name: 'Umeko Walker', 
        image: umeko,
        role: 'Web Developer', 
        social: {
            twitter: 'umekow2', 
            github: 'umekolw', 
            linkedin: 'umekowalker'
        }, 
        about:'Umeko is software engineer who loves to solve problems and bring cool ideas to life. Her favorite languages are Java, Python, and JavaScript. Working on this project helped her to understand the importance of communication, mobile first design, and documentation. She looks forward to working on projects that will help others.', 
        portfolio: 'https://umekowalker.me'
    
    }, {
        labs: 21,
        name: 'Jeremy Rogel', 
        image: jeremy,
        management: true,
        role: 'Team Lead, Labs 21', 
        social: {
            twitter: null, 
            github: 'jeremyRogel', 
            linkedin: 'jeremy-rogel-293640186/'
        }, 
        about: 'A natural go-getter, Jeremy Rogel applies his knowledge of code and passion for creation by being the best fullstack web developer this side of the Mississippi! Applying his trade in Durham, NC, his passion to keep getting better shines in whatever he sets out to do.',
        portfolio: null
    
    }, {
        labs: 21,
        name: 'Dariush Khansari', 
        image: dariush,
        role: 'UX Designer', 
        social: {
            twitter: null, 
            github: null, 
            linkedin: 'dariush-khansari-8b8a068'
        }, 
        about: 'Dariush Khansari tells stories through visual design and multimedia.',
        portfolio: 'https://dariush.myportfolio.com/'
    
    }, {
        labs: 21,
        name: 'Songa Mugenzi', 
        image: songa,
        role: 'UX Designer', 
        social: {
            twitter: null, 
            github: null, 
            linkedin: 'songamugenzi/'
        }, 
        about: 'Songa Mugenzi is a strategy-minded user experience designer passionate about designing applications for emerging technologies. His mission in life is to break through our self-imposed barriers to connecting with each other by spotlighting our shared human experience.',
        portfolio: null
    
    }, {
        labs: 21,
        name: "Jimmy 'Zeb' Smith", 
        image: jimmy,
        role: 'Data Scientist', 
        social: {
            twitter: null, 
            github: 'zebfred', 
            linkedin: 'zeb-smith-0240b8a8/'
        }, 
        about: 'Jimmy "Zeb" Smith is a data scientist in Winchester, TN. Prior to starting Lambda, he obtained his bachelors of science at the University South. He majored in chemistry with a pre-engineering focus in math and physics. His interest lies in using emerging data science technologies for a better tomorrow.',
        portfolio: null
    }, {
        labs: 21,
        name: 'Chris Shields', 
        image: chris,
        role: 'Data Scientist', 
        social: {
            twitter: null, 
            github: 'cshields143', 
            linkedin: 'chris-shields-827421194/'
        }, 
        about: 'Chris Shields applies data science to problem solving in Spokane, WA. Having received a liberal arts education in the desert, he is now driven to use software and mathematics to empower and improve',
        portfolio: null
    
    }, {
        labs: 21,
        name: 'Eric Ramon', 
        image: eric,
        role: 'Data Scientist', 
        social: {
            twitter: null, 
            github: 'nephylum', 
            linkedin: 'eric-ramon'
        }, 
        about: 'Eric Ramon is a Data Scientist in Las Vegas. He has over 10 years of teaching experience, has been coding as a hobby for almost 30 years, and even speaks Mandarin Chinese. He hopes to be able to use Data Science to help people understand complex problems, and find novel solutions.',
        portfolio: 'https://nephylum.github.io/'
    
    }, {
        labs: 21,
        name: 'Anisha Sunkerneni', 
        image: anisha,
        role: 'Web Developer', 
        social: {
            twitter: null, 
            github: 'ars394', 
            linkedin: 'anisha-reddy-394b60ab/'
        }, 
        about: 'Anisha Sunkerneni is a Web Developer from California. She has a background in medicine and is interested in exploring the intersection of medicine and technology. Anisha enjoys cooking, curating playlists, playing boardgames and exploring new places.',
        portfolio: null
    
    }, {
        labs: 21,
        name: 'Ryan Cooper', 
        image: ryan,
        role: 'Web Developer', 
        social: {
            twitter: null, 
            github: 'ryankayne', 
            linkedin: 'ryankaynecooper'
        }, 
        about: 'Ryan Cooper is a Web Developer from Michigan. He loves learning, traveling, and meeting new people... and eating ramen, cannot forget about the ramen.',
        portfolio: null
    
    }, {
        labs: 21,
        name: 'Regino Parragil', 
        image: regino,
        role: 'Web Developer', 
        social: {
            twitter: null, 
            github: 'gio5298', 
            linkedin: 'regino-a-parragil-a813b9198'
        }, 
        about: 'Regino Parragil is a Web Developer from Phoenix, AZ who wants to continue learning about the different libraries that are available to expand beyond basic web development. He is eager to see where the world of web development takes him.... or where he takes the world...',
        portfolio: null
    
    }, {
        labs: 21,
        name: 'Thomas Rodriguez', 
        image: thomas,
        role: 'Web Developer', 
        social: {
            twitter: null, 
            github: 'trodriguez89', 
            linkedin: 'thomas-rodriguez-556859149'
        }, 
        about: 'Thomas Rodriguez is a Software Engineer from San Jose, CA. He loves problem solving and learning new technologies. In his free time you can catch him watching California sports, playing videogames and playing guitar.',
        portfolio: null

    },  {
        labs: 21,
        name: 'Kyle Porter', 
        image: kyle,
        role: 'Web Developer', 
        social: {
            twitter: null, 
            github: 'kylewp13', 
            linkedin: 'kyletech'
        }, 
        about: 'Kyle Porter is a Full Stack Web Developer who graduated from Lambda School. During his tenure at Lambda, Kyle engaged in hands-on coding through all phases of several projects. Most notably, Kyle was involved in creating Citrics as we know it today. From Jacksonville, Florida, Kyle knew Web Developing was his jam when he began coding personal websites during his free time using Google and Trial-and-error. Fast-forward a few months and Kyle was assisting several ecommerce go-lives\'. During his free time, Kyle enjoys traveling domestically to explore major metro cities, trying different local eateries, and home renovations.',
        portfolio: 'https://www.kyleporter.tech'
    
    }, {
        labs: 23,
        name: "Jimmy 'Zeb' Smith", 
        image: jimmy,
        management: true,
        role: 'Team Lead, Labs 23', 
        social: {
            twitter: null, 
            github: 'zebfred', 
            linkedin: 'zeb-smith-0240b8a8/'
        }, 
        about: 'Jimmy "Zeb" Smith is a data scientist in Winchester, TN. Prior to starting Lambda, he obtained his bachelors of science at the University South. He majored in chemistry with a pre-engineering focus in math and physics. His interest lies in using emerging data science technologies for a better tomorrow.',
        portfolio: null
    }, {
        labs: 23,
        name: 'David Pok', 
        image: david,
        role: 'Web Developer', 
        social: {
            twitter: null, 
            github: 'david-pok', 
            linkedin: null
        }, 
        about: 'David Pok is a Full Stack Web Developer from Los Angeles.  He is a curious person who loves problem solving.',
        portfolio: null
    }, {
        labs: 23,
        name: 'Liam Moore', 
        image: liam,
        role: 'Web Developer', 
        social: {
            twitter: null, 
            github: 'liampmoore', 
            linkedin: 'liammoorecodes'
        }, 
        about: 'Liam Moore is a Full Stack Web Developer from Philadelphia.  He loves getting waist-deep into problems that challenge his way of thinking and coming out the other side with a new way of looking at the problem in general. During his free time he likes to hike and camp, spend the day at a park, play video games or play D&D with his friends. His role in Citrics was primarily front-end development, particularly in reworking our state management in Redux. He loves taking the time to write clean and clear code and designing easy-to-understand data-management systems, knowing that he is making the job easier for future developers (and for himself). He also spent a good amount of time working on deployment and CI, setting up GitHub actions and configuring AWS.',
        portfolio: 'http://liammoore.codes/'
    }, {
        labs: 23,
        name: 'Svyatoslav Okshin', 
        image: svyat,
        role: 'Web Developer', 
        social: {
            twitter: null, 
            github: 'svyatokshin', 
            linkedin: 'svyatoslav-okshin-a348b98b/'
        }, 
        about: 'Svyatoslav was born in Russia and won the Green Card Lottery with his family when he was three years old. This allowed him to move to the United States and work toward a citizenship which he is very grateful for. He is now a full-stack web developer who graduated from Lambda School. He also has a degree in Chemical Engineering, and utilizes the skills learned from both to create stunning and interactive websites, while problem-solving effectively in order to obtain the most pristine product in the most optimal time. After learning the core languages for web development, he sees the future as a bright one, as any new language will be less challenging to learn. His goal is to one day advance his learning into a profession where he will be able to manage others while continuing to create products that will help make the world a better place.',
        portfolio: 'https://svyatokshin.github.io/portfolio/'
    }, {
        labs: 23,
        name: 'Damon Bogich', 
        image: damon,
        role: 'Web Developer', 
        social: {
            twitter: 'damonbogich', 
            github: 'damonbogich', 
            linkedin: 'damon-bogich-a53bb5120/'
        }, 
        about: 'Damon Bogich is a Full Stack Web Developer from Detroit.  He quit his customer service job at a New York City based start up company and moved back to his home state of Michigan to attend Lambda School.  Citrics is the biggest of several projects that he has worked on while attending Lambda.  In addition to web development and problem solving, he has a passion for basketball and running.',
        portfolio: null
    }, {
        labs: 23,
        name: 'Steven Reiss', 
        image: steven,
        role: 'Data Scientist', 
        social: {
            twitter: null, 
            github: 'steve122192', 
            linkedin: 'steven-reiss-94102b115/'
        }, 
        about: 'Steven Reiss is a Philly native with a passion for skiing, motorcycles, and problem solving.',
        portfolio: null
    }, {
        labs: 23,
        name: 'Amy NLe', 
        image: amy,
        role: 'Data Scientist', 
        social: {
            twitter: 'hyamynl619', 
            github: 'hyamynl619', 
            linkedin: 'amy-nguyen-le/'
        }, 
        about: 'Amy Nguyen-Le is a Data Scientist & Engineer from Manchester, CT.  Being the oldest of 5 siblings, she often finds ways to be a good role model for them through learning and perseverance. She often spends her time coding new games with them or educating herself on advanced technology. She believes that Data Scientists can help change the world one step at a time and people will start to have a better idea on who they are.',
        portfolio:  'https://hyamynl619.github.io/'
    }, {
        labs: 23,
        name: 'Robert Tom', 
        image: robert,
        role: 'Data Scientist', 
        social: {
            twitter: 'BlackRaptor62', 
            github: 'RCTom168', 
            linkedin: 'robertctom168'
        }, 
        about: 'Summary: Robert Tom is a Data Scientist living in the San Francisco Bay Area. Robert has focuses on polishing his skills in Natural Language Processing and Machine Learning. When not wrangling data he spends time playing computer games and walking his dogs.  For this Project, Robert worked on developing the K-Nearest Neighbors and Nearest Neighbors prediction models for the Citrics City Reverse User Flow. This work allows users to search for cities that they may want to move to based off of certain criteria, rather than searching by name.',
        portfolio: null
    }, {
        labs: 23,
        name: 'Stephanie Miller', 
        image: stephanie,
        role: 'Data Scientist', 
        social: {
            twitter: null, 
            github: 'shmilyface', 
            linkedin: null
        }, 
        about: 'Stephanie Miller is located in the PNW, she has a fondness for problem-solving, and a creative background to take it out of the box. She currently has 2 dogs, and works tirelessly to have more dogs in the future.',
        portfolio: null
    },
]

export default team;
