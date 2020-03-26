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
import anna from '../../assets/team_photos/anna_t.png'; 
import daniel from '../../assets/team_photos/daniel_b.jpg'; 
import john from '../../assets/team_photos/john_w.jpg'; 
import kevin from '../../assets/team_photos/kevin_n.png'; 
import luke from '../../assets/team_photos/luke_t.png'; 
import matthew from '../../assets/team_photos/matthew_s.jpg';
import michael from '../../assets/team_photos/michael_h.jpg';
import muamer from '../../assets/team_photos/muamer_k.jpg'; 
import ruth from '../../assets/team_photos/ruth_p.jpg'; 
import scott from '../../assets/team_photos/scott_m.png';
import umeko from '../../assets/team_photos/umeko_w.jpg';
import dariush from '../../assets/team2_photos/Dariush Khansari.png'; 
import songa from '../../assets/team2_photos/Songa Mugenzi.png'; 
import jimmy from '../../assets/team2_photos/Jimmy Smith.png'; 
import eric from '../../assets/team2_photos/Eric Ramon.png'; 
import chris from '../../assets/team2_photos/Christopher Shields.png'; 
import anisha from '../../assets/team2_photos/Anisha Sunkerneni.png';
import kyle from '../../assets/team2_photos/Kyle Porter.jpg';
import ryan from '../../assets/team2_photos/Ryan Cooper.png'; 
import regino from '../../assets/team2_photos/Regino Parragil.png'; 
import thomas from '../../assets/team2_photos/Thomas Rodriguez.png';
import jeremy from '../../assets/team2_photos/Jeremy Rogel.jpg';


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
            linkedin: null
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
            linkedin: null
        }, 
        about: 'Thomas is a Web Developer at Lambda School and has been an instrumental part of the Citrics web team.',
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
        about: 'Thomas is a Web Developer at Lambda School and has been an instrumental part of the Citrics web team.',
        portfolio: 'https://www.kyleporter.tech'
    
    }
]

export default team;
