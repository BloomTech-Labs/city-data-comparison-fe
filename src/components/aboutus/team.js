//separate file to store all of the information about each team member

//team members photos
import anna from '../../assets/team_photos/anna_t.png'; 
import daniel from '../../assets/team_photos/daniel_b.jpg'; 
import john from '../../assets/team_photos/john_w.jpg'; 
import kevin from '../../assets/team_photos/kevin_n.png'; 
import luke from '../../assets/team_photos/luke_t.png'; 
import matthew from '../../assets/team_photos/matthew_s.jpg'
import michael from '../../assets/team_photos/michael_h.jpg';
import muamer from '../../assets/team_photos/muamer_k.jpg'; 
import ruth from '../../assets/team_photos/ruth_p.jpg'; 
import scott from '../../assets/team_photos/scott_m.png'
import umeko from '../../assets/team_photos/umeko_w.jpg';


const team = [
    {
        name: 'Anna Townsend', 
        image: anna,
        role: 'Team Lead', 
        social: {
            twitter: 'annatow62847551', 
            github: 'annatownsend9916', 
            linkedin: 'anna-townsend-74404a188'
        }, 
        about: 'Anna Townsend is a full stack web Developer from Michigan.  Anna loves to stay creative through art and programming.  In her spare time she codes games and paints, even on walls.',
        portfolio: 'https://www.linkedin.com/in/anna-townsend-74404a188/'
    
    }, 
    {
        name: 'Ruth Philips', 
        image: ruth,
        role: 'UI/UX Designer', 
        social: {
            twitter: 'Ruthmatt3', 
            github: '', 
            linkedin: 'ruth-philips', 
            email: 'rphilips0816@gmail.com <rphilips0816@gmail.com'
        }, 
        about: 'I love designing fresh, vibrant, and original user experiences that are unique and strike a conversation. My goal is to create a simple and straightforward user experience that captures the heart and mind of individuals interacting with the product at every stage of the product experience. When I am not designing, I love to explore new cuisines and watch stand-up with my spouse.',
        portfolio: 'https://www.ruthphilips.com/'
    
    }, 
    {
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
    
    }, 
    {
        name: 'Matthew Sessions', 
        image: matthew,
        role: 'Data Scientist', 
        social: {
            twitter: '', 
            github: 'matthew-sessions', 
            linkedin: ''
        }, 
        about: 'Matthew Sessions is a Machine Learning Engineer in Seattle, Washington. Before becoming a full-time developer, Matthew was working abroad in Shenzhen, China as a cross-border e-commerce specialist. He believes that Data Science provides a roadmap that helps companies demystify complex business problems.', 
        portfolio: 'http://matthewlsessions.com/'
    
    }, 
    {
        name: 'Scott Maxwell', 
        image: scott,
        role: 'Data Scientist', 
        social: {
            twitter: 'scott_w_maxwell', 
            github: 'scottwmwork', 
            linkedin: ''
        }, 
        about: 'Scott Maxwell is a data scientist & engineer in Gilbert, Arizona. He has a strong background in object oriented programming and software engineering. He is an individual driven by product delivery and software that provides solutions.',
        portfolio: 'http://Scottmaxwellportfolio.com'
    
    }, 

    {
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
    
    }, 

    {
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
    
    }, 

    {
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
    
    }, 

    {
        name: 'John Watt', 
        image: john,
        role: 'Web Developer', 
        social: {
            twitter: 'thejohnwatt', 
            github: 'thejohnwatt', 
            linkedin: 'thejohnwatt'
        }, 
        about: 'John Watt is a full stack web developer for Citrics.io. Previously, John worked in tech/mobile sales in Colorado Springs, Co.  After 6 years of sales, he became burnt out and decided to move on to bigger and better things. He was recommended to join Lambda Schools and learn full stack web development and is currently finishing up his coding journey in Murrieta, Ca.', 
        portfolio: 'https://www.github.com/thejohnwatt'
    
    }
    , 

    {
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
    
    }, 

    {
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
    
    }
]

export default team;
