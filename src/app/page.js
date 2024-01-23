"use client"
import styles from './page.module.css'
import { RiJavascriptFill, RiReactjsFill, RiGithubFill } from "react-icons/ri";
import { FaNodeJs, FaCcStripe, FaLinkedin } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { SiMui } from "react-icons/si";
import { Cobe } from "./cobe"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { LazyMotion, domAnimation } from "framer-motion"

export default function Home() {
  // const skills=[
  //   {
  //     icon: <FaNodeJs />,
  //     name: "AWS"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "Azure"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "GCP"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "C/C++"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "Java"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "JavaScript"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "MySQL/SQL"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "Postgres SQL"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "MongoDB"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "Express Js"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "Nest Js"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "Fastify"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "Electron"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "Next Js"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "React Js"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "TypeScript"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "Sockets"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "Firebase"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "Node.Js"
  //   },
  // ]
  const programming_languages = [
    {icon: <FaNodeJs />, name: "C/C++"},
    {icon: <FaNodeJs />, name: "Java"},
    {icon: <FaNodeJs />, name: "Python"},
    {icon: <FaNodeJs />, name: "JavaScript"},
    {icon: <FaNodeJs />, name: "TypeScript"},
  ]
  const frameworks = [
    {icon: <FaNodeJs />, name: "Django"},
    {icon: <FaNodeJs />, name: "FastAPI"},
    {icon: <FaNodeJs />, name: "ReactJs"},
    {icon: <FaNodeJs />, name: "NextJs"},
    {icon: <FaNodeJs />, name: "ExpressJs"},
    {icon: <FaNodeJs />, name: "NestJs"},
    {icon: <FaNodeJs />, name: "NodeJs"},
  ]

  const databases = [
    {icon: <FaNodeJs />,name: "MySQL"},
    {icon: <FaNodeJs />,name: "MongoDB"},
    {icon: <FaNodeJs />,name: "Postgres SQL"},
  ]
  
  const clouds = [
    {icon: <FaNodeJs />, name: "AWS"},
    {icon: <FaNodeJs />, name: "Azure"},
    {icon: <FaNodeJs />, name: "GCP"},
  ] 

  useEffect( () => {

		class ScrollEvents {

			constructor() {
				window.sticky		= {}
				window.sticky.nav	= document.querySelector(`nav`)

				this.addEventListeners()
			}

			addEventListeners() {
				if ( window.sticky.nav ) {
					window.addEventListener('DOMContentLoaded', this.maybeHideNav, false)
					document.addEventListener('scroll', this.maybeHideNav, false)
				}
			}

			removeEventListeners() {
				if ( window.sticky.nav ) {
					window.removeEventListener('DOMContentLoaded', this.maybeHideNav, false)
					document.removeEventListener('scroll', this.maybeHideNav, false)
				}
			}

			getPosition( e = null, top = true ) {
				let offset

				if ( !e ) return

				if ( top ) {
					offset = e.getBoundingClientRect().top + document.documentElement.scrollTop - window.sticky.nav.at
					return offset
				} else {
					offset = e.getBoundingClientRect().bottom + document.documentElement.scrollTop - window.sticky.nav.at
					return offset
				}	
			}

			maybeHideNav() {

				const nC 		= window.sticky.nav.classList
				const hiddenAt	= ( window.innerHeight / 2 )

				if ( window.scrollY > this.lastY && window.scrollY > hiddenAt && ! nC.contains( styles.hidden ) ) {
					nC.add( styles.hidden )
				} else if ( window.scrollY < this.lastY && nC.contains( styles.hidden ) ) {
					nC.remove( styles.hidden )
				}

				this.lastY = window.scrollY
			}
		}

		const scrollEvents = new ScrollEvents

		return () => {
			scrollEvents.removeEventListeners()
		}
	}, [] )

  return (
    <>
      <div className={styles.left_line}>
        <div className={styles.line}></div>
        <Link href="https://github.com/Muditalbet/"><RiGithubFill /></Link>
        <Link href="https://www.linkedin.com/in/mudit-mangtani/"><FaLinkedin /></Link>
      </div>
      <div className={styles.right_line}></div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logo_svg}>
            <Link href="/" className={styles.circle}>
              <div className={styles.circle_text}><i>Mudit</i></div>
            </Link>
          </div>
        </div>
        <div className={styles.options}>
          <Link href="#projects">Work</Link>
          <Link href="#about">About</Link>
          <Link href="#technologies">Technologies</Link>
          <Link href="#experience">Experience</Link>
          <Link href="mailto:muditmangtani@gmail.com">Contact</Link>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.heading}>
          <h7 className={styles.highlighted_text}>Hi, My name is</h7>
          <h1>Mudit Mangtani</h1>
          <h2>Tag-line</h2>
          <p>I embody the role of a versatile <span className={styles.highlighted_text}>full-stack engineer</span> and <span className={styles.highlighted_text}>web developer</span>, celebrated for my rapid learning aptitude. My proficiency extends to navigating through the intricacies of <span className={styles.highlighted_text}>sockets</span>, <span className={styles.highlighted_text}>channels</span>, and <span className={styles.highlighted_text}>REST APIs</span>. Delving into the realm of <span className={styles.highlighted_text}>artificial intelligence</span>, I channel my passion into creating cutting-edge solutions, contributing to a diverse portfolio of innovative and impactful software projects.</p>
          <div className={styles.buttons}>
            <Link href="mailto:muditmangtani@gmail.com" className={styles.button}>Contact Me</Link>
            <Link href="#" className={styles.button}>Check out my resume!</Link>
          </div>
        </div>
        <div id="projects" className={styles.projects}>
          <h2>Featured Projects</h2>
          <h5>Projects tag-line</h5>
          <div className={styles.project}>
            <div style={{backgroundColor:"#dd8000"}} className={styles.image}>
              <img height="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"/>
            </div>
            <div className={styles.content}>
              <h4>Amazon Clone</h4>
              <div>
                <p>Built an Amazon clone using <span className={styles.highlighted_text}>Next.js</span> and <span className={styles.highlighted_text}>Commerce.js</span> for a seamless e-commerce experience. Features include a responsive UI, secure authentication, a comprehensive product catalog, shopping cart, smooth checkout, order tracking, and integrated payment gateways. </p>
                <div className={styles.technology_used}>
                  <div><spam><RiJavascriptFill /></spam><spam>Javascript</spam></div>
                  <div><spam><RiReactjsFill /></spam><spam>React</spam></div>
                  <div><spam><FaNodeJs /></spam><spam>Node.Js</spam></div>
                  <div><spam><BiLogoNetlify /></spam><spam>Netlify</spam></div>
                  <div><spam><FaCcStripe /></spam><spam>Stripe</spam></div>
                  <div><spam><SiMui /></spam><spam>Material UI</spam></div>
                  <div><spam><RiGithubFill /></spam><spam>GitHub</spam></div>
                  <div><spam>Commerce.js</spam></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div style={{background:"#495176"}} className={styles.image}>
              <img height="50px" src="https://static-00.iconduck.com/assets.00/discord-icon-2048x2048-o5mluhz2.png"/>
            </div>
            <div className={styles.content}>
              <h4>Discord bot</h4>
              <div>
                <p>Developed a Discord bot using <span className={styles.highlighted_text}>Python</span>, <span className={styles.highlighted_text}>SQL</span>, and <span className={styles.highlighted_text}>AI tools</span> to read messages, enforce rules, and block violative content. The system utilizes SQL for data storage, Python for bot functionality, and AI tools for content analysis. This bot ensures a rule-compliant environment within the Discord server by actively monitoring and taking action against rule violations.</p>
                <div className={styles.technology_used}>
                  <div><spam><RiReactjsFill /></spam><spam>React</spam></div>
                  <div><spam><FaCcStripe /></spam><spam>Stripe</spam></div>
                  <div><spam><SiMui /></spam><spam>Material UI</spam></div>
                  <div><spam><FaNodeJs /></spam><spam>Node.Js</spam></div>
                  <div><spam><RiJavascriptFill /></spam><spam>Javascript</spam></div>
                  <div><spam><BiLogoNetlify /></spam><spam>Netlify</spam></div>
                  <div><spam><RiGithubFill /></spam><spam>GitHub</spam></div>
                  <div><spam>Commerce.js</spam></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div style={{backgroundImage:"linear-gradient(#b93391, #fbb049)"}} className={styles.image}>
              <img height="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"/>
            </div>
            <div className={styles.content}>
              <h4>Instagram Clone</h4>
              <div>
                <p>Crafted an Instagram clone on the <span className={styles.highlighted_text}>MERN stack</span>, enabling users to upload, share, and view pictures and posts. The platform includes robust user authentication for secure interactions. Leveraging <span className={styles.highlighted_text}>MongoDB</span> for data storage, <span className={styles.highlighted_text}>Express.js</span> for backend functionality, <span className={styles.highlighted_text}>React.js</span> for dynamic user interfaces, and <span className={styles.highlighted_text}>Node.js</span> for server-side scripting, this Instagram clone provides a familiar and engaging social media experience.</p>
                <div className={styles.technology_used}>
                  <div><spam><RiJavascriptFill /></spam><spam>Javascript</spam></div>
                  <div><spam><RiReactjsFill /></spam><spam>React</spam></div>
                  <div><spam><FaNodeJs /></spam><spam>Node.Js</spam></div>
                  <div><spam><BiLogoNetlify /></spam><spam>Netlify</spam></div>
                  <div><spam><FaCcStripe /></spam><spam>Stripe</spam></div>
                  <div><spam><SiMui /></spam><spam>Material UI</spam></div>
                  <div><spam><RiGithubFill /></spam><spam>GitHub</spam></div>
                  <div><spam>Commerce.js</spam></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="about" className={styles.about}>
          <h2>About Me</h2>
          <h5>About Me tag line</h5>
          <div className={styles.about_section}>
            <div className={styles.profile_img}>
              <Image 
                src="https://lh3.googleusercontent.com/d/1OzB0A7crQYddE8rypGRuWO1q_wGKBD9t"
                fill={true}
                objectFit="cover"
                objectPosition='center'
                alt="Picture of the author"
              />
            </div>
            <div className={styles.text_content}>
              <div>I'm Mudit Mangtani, a software engineer driven by a passion for transforming intricate challenges into elegant solutions through code. With a love for problem-solving, I navigate the dynamic world of software development, constantly seeking innovative approaches to address complexities. My commitment to excellence is reflected in my dedication to crafting efficient, creative, and impactful solutions. As I continue to evolve in this ever-changing field, I am excited about the endless possibilities that coding offers to make a positive impact.</div>
              <div>In addition to my design and technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a Software engineer. Outside of work, I enjoy staying active through sports such as badminton and video games. I am confident in my ability to bring passion and value to any project.</div>
            </div>
          </div>
        </div>
        <div id='technologies' className={styles.technologies}>
          <h2>Technical Skills</h2>
          <div className={styles.tech_section}>
            <div className={styles.tech_content}>
              <div>
                <h4>Programming Languages</h4>
                <div>
                  <p>With over 20 years of experience creating digital assets, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. This is just some of the software I have used over that time.</p>
                  <div className={styles.skills}>
                    {programming_languages.map((el, index) => (
                      <div key={index}><spam>{el.icon}</spam> <spam>{el.name}</spam></div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h4>Frameworks</h4>
                <div>
                  <p>With over 20 years of experience creating digital assets, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. This is just some of the software I have used over that time.</p>
                  <div className={styles.skills}>
                    {frameworks.map((el, index) => (
                      <div key={index}><spam>{el.icon}</spam> <spam>{el.name}</spam></div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h4>Databases</h4>
                <div>
                  <p>With over 20 years of experience creating digital assets, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. This is just some of the software I have used over that time.</p>
                  <div className={styles.skills}>
                    {databases.map((el, index) => (
                      <div key={index}><spam>{el.icon}</spam> <spam>{el.name}</spam></div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div>
                <h3>Cloud</h3>
                <div>
                  <p>With over 20 years of experience creating digital assets, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. This is just some of the software I have used over that time.</p>
                  <div className={styles.skills}>
                    {clouds.map((el, index) => (
                      <div key={index}><spam>{el.icon}</spam> <spam>{el.name}</spam></div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
            <div className={styles.globe}>
              <Cobe />
            </div>
          </div>
        </div>
        <div id='experience' className={styles.experience}>
          <h3>Experience</h3>
          <div className={styles.company_section}>
            <h4>Company #1</h4>
            <h6>Software Engineer<br />Nov 2022 - Present · 2 Years</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lorem quis erat ultrices fermentum. Sed pharetra vulputate varius. Vestibulum in gravida nibh. Pellentesque bibendum neque massa, sit amet lacinia mi egestas quis. Pellentesque consequat lorem quis lacus malesuada cursus non vel ipsum. In molestie neque quis maximus bibendum. Proin placerat enim non fringilla scelerisque. Suspendisse in est luctus, tempus est accumsan, accumsan lorem.</p>
          </div>
          <div className={styles.company_section}>
            <h4>Company #2</h4>
            <h6>Software Engineer<br />Nov 2022 - Present · 2 Years</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lorem quis erat ultrices fermentum. Sed pharetra vulputate varius. Vestibulum in gravida nibh. Pellentesque bibendum neque massa, sit amet lacinia mi egestas quis. Pellentesque consequat lorem quis lacus malesuada cursus non vel ipsum. In molestie neque quis maximus bibendum. Proin placerat enim non fringilla scelerisque. Suspendisse in est luctus, tempus est accumsan, accumsan lorem.</p>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  )
}
