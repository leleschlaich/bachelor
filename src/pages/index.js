import React, { useMemo, useState } from "react";
import "../styles/index.scss";

import { Link, graphql } from "gatsby";

import Container from "../components/container";
import ContainerContext from "../components/containerContext";

import climate2 from "../images/climate2.png";

import acai1 from "../images/acai1.png";
import acai2 from "../images/acai2.png";

import speculative1 from "../images/speculative1.png";


const IndexPage = (props) => {
  const [eventKey, setEventKey] = useState(null);

  const context = useMemo(
    () => ({
      activeEventKey: eventKey,
      onToggle: (newEventKey) => setEventKey(newEventKey),
    }),
    [eventKey, setEventKey]
  );

  return (
    <ContainerContext.Provider value={context}>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <main>
        <title>Lele</title>

        <Container>
          {{
            title: (
              <>
                <h1>
                  Lele
                  <br />
                  here :)
                </h1>
                <p>
                  interface design
                  <br />
                  digital arts
                  <br />
                  multimedia
                </p>
              </>
            ),
            body: (
              <>
                <img className="profile-picture" src={props.data.contentfulAboutMe.profilePicture.file.url}></img>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      props.data.contentfulAboutMe.description.description,
                  }}
                ></div>
              </>
            ),
          }}
        </Container>

        <Container>
          {{
            title: (
              <h1>
                Augmented
                <br />
                Reality
              </h1>
            ),
            body: (
              <>
                <div>
                  <p>
                  Since the beginning of my Hauptstudium I became more and more interested in AR and started teaching myself Spark AR. At first, rather in my free time at home for my own, actually that was during covid so yes, a lot of time to explore. 
                  <br /><br />
                  I started implementing AR into my uni projects, took courses related to AR and facefilters became my passion, which I´m happy to implement nowadays even in freelancing projects. AR fascinates me a lot, because it’s just at it’s beginning and we, ourselves, are the ones who can shape this field. There’s a lot of potential and it is exciting to find new application areas.
                    {/* <br /> See more in my{" "}
                    <a
                      href="https://www.facebook.com/sparkarhub/portfolios/ig/leleschl/"
                      target="_blank"
                    >
                      AR-Filter-Portfolio
                    </a> */}
                  </p>
                </div>

                <div className="vertical-video-wrapper">
                  {props.data.allContentfulIgFilter.edges.map(
                    ({ node: igFilter }) => (
                      <div className="spark-video-wrapper" key={igFilter.id}>
                        <div
                          style={{
                            padding: "177.78% 0 0 0",
                            position: "relative",
                          }}
                        >
                          <video
                            src={igFilter.video.file.url}
                            className="video"
                            autoPlay
                            loop
                            muted
                            playsInline
                          ></video>
                        </div>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              igFilter.description &&
                              igFilter.description.description,
                          }}
                        ></p>
                      </div>
                    )
                  )}
                </div>
              </>
            ),
          }}
        </Container>

        <Container coral>
          {{
            title: (
              <h1>
                Scrolly
                <br />
                telling
              </h1>
            ),
            body: (
              <>
                <p>
                Semester: 4
                  <br />
                  Class: Klimagrafik
                  <br />
                  Lecturer: Prof. Boris Müller
                  <br />
                  Teamwork: Aline Sawalsky
                  <br />
                  Website-Link:<a
                    href="https://interface.fh-potsdam.de/klimagrafik/meat-eq-heat/"
                    target="_blank"
                  >
                    &nbsp;Meat=Heat?
                  </a>
                  <br />
                  <br />
                  The scrollytelling website Meat = Heat?, is a significant project for me since it is very important to me to raise awareness on climate change in connection to meat consumption. Also this project was for one of my first projects fully programmed with Html and Css. 
                  The main pillars in our concept were to not missionize the topic, to communicate on a personal level, use simple communication, and to tell stories.
                  <br />
                  <br />
                  I learned a lot in this course and now I look back proudly on our first own website. Of course it was not always easy, we had struggles coding and made 1001 attempts of a sankey diagram to find out in the last session that there are websites for ready made sankeys. In addition to that the research was often very hard and it was difficult to find exactly what we needed, even though (we thought) there is so much in the internet and we had good books. 
                  <br />
                  <br />This course was very time consuming, because we could never see each other in real life to talk, get feedback or help each other. In this first Corona-Semester, long calls, Zooms and huge Miro boards were getting normal but still exhausting.
                  
                  
                  
                  
                </p>

                <div style={{ padding: "55.07% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/553925379?controls=0&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    title="climate3.webm"
                  ></iframe>
                </div>
                <br />
                <img className="images mt-2" src={climate2}></img>
              </>
            ),
          }}
        </Container>

        <Container coral>
          {{
            title: (
              <h1>
                Specula
                <wbr />
                tive
                <br /> Design
              </h1>
            ),
            body: (
              <>
                <p>
                Semester: 4
                  <br />
                  Class: Stranger Living – Are Dumb Cities the New Smart Cities?
                  <br />
                  Lecturers: Prof. Dr. Frank Heidmann and M.A. Jordi Tost
                  <br />
                  Teamwork: Fidel Thomet, Thomas Haas, Felix Harle
                  <br />
                  Website-Link:
                  <a
                    href="https://future-in-a-bag.vercel.app/#/"
                    target="_blank"
                  >
                    &nbsp;The future in a bag
                  </a>
                  <br />
                  <br />

                  The future in a bag: What are everyday objects of
                  crisis-ridden futures?
                  A scenario space navigating between climate crisis, ageing and
                  cyber attacks, which designs resilient artefacts between
                  smartness, dumbness, convenience and inconvenience.
                  <br />
                  <br />
                  How can the concept of resilience be organised in a decentralised, spontaneous, flexible and accessible way? Our project The Future in a Bag is looking for possible scenarios. To do this, we created many small crisis visions of the future in which the population uses simple LoFi artefacts to protect themselves against two acute risks. For each scenario, we show a smart, i.e. high-tech prototype and a dumb, i.e. natural and intuitive prototype.
                  <br />
                  <br />
In our work, we show alternative strategies of crisis management that focus on the autonomy and decision-making power of individual citizens. With the help of these speculative futures, we illustrate that a city can also be organised bottom-up in many respects.
                
                  <br />
                  
                  
                </p>

                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/WK2JKF_QzZU?controls=0"
                    title="YouTube video player"
                    frameBorder="0"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
               
                  <br />
                <img className="images" src={speculative1}></img>
              </>
            ),
          }}
        </Container>

        <Container>
          {{
            title: (
              <h1>
                Erasmus
                <br />
                esad porto
              </h1>
            ),
            body: (
              <>
                <p>
                Semester: 6
                  <br />
                  <br />
                  My Erasmus-Semester was a great time for me to explore 
                  other and mainly new directions of digital arts and multimedia: 
                  3-Dimensionality and Animation, 2D-Animation, Film and Sound Production and Programming. Following I will show two example projects of my time there.
                  <br />
                  <br />
                  In the class Multimedia Studio Practices II by José Teixeira we created in just a few weeks short 3-Dimensional Clips in Maya with topics of our choice.
                  I was lucky to have another 3-D animation course in parallel because there had to be learned a lot in just a short amount of time. And the language barrier did not make it easier. But in the end I was impressed how much is possible if you really lean into it. I am definitely still at a very early stage but I´m really interested to do more in that direction in the future.
                </p>
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/557309123?&amp;muted=0&amp;autoplay=0&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    title="ZoomZoom_by Lele Schlaich"
                  ></iframe>
                </div>
                <p>
                In the class Contemporary Art Theory and Lab Practices II with Carlos Amaral and Rui Caldas we learned everything about sound and video recording, production and editing.
                My group and me decided to create a documentary.</p>
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/772871719?h=b70b09f1ca&amp;muted=0&amp;autoplay=0&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    title="ZoomZoom_by Lele Schlaich"
                  ></iframe>
                </div>
              </>
            ),
          }}
        </Container>
        <Container>
          {{
            title: (
              <h1>
                internship
                <br />
                neeeu
              </h1>
            ),
            body: (
              <>

                <p><br />
                  Semester: 7
                  <br />
                  <br />
                The NEEEU Spaces GmbH was founded by Raffael Moco Schiller and Javier Soto Morras in 2017.
                Their mission is to help clients create meaningful products, services and experiences. In doing so, they are passionate about people, innovative technologies and great design.
                The focus is on: Human-Centered, Hands on & Playful.
                  <br />
                  <br />
                  I have to say that I had a really good time at NEEEU. At the beginning I was received very nicely, of course I had to get used to the sudden 40 hours/week and sometimes I didn't quite know what I should do or who to ask about what. But after a few weeks I got into the flow and felt very comfortable.
                  <br />
                  <br />I was able to take a lot with me from my time there, whether it was programme knowledge in Figma, Blender, Unity or general project structures, the structure and development of projects, teamwork or also what I need to be able to work well and motivated.
                  I participated in several website, app and game designs and concepts, in thinking and implementing AR, did 3-dimensional illustrations and animation, sketching and ideation workshops.
                </p>
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/705329936?h=71585cd8a2?&amp;muted=0&amp;autoplay=0&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    title="Internship"
                  ></iframe>
                </div>
                
              </>
            ),
          }}
        </Container>
        <Container>
          {{
            title: (
              <h1>
                Decolonising 
                <br />
                Design
              </h1>
            ),
            body: (
              <>
                <p>
                Semester: 8
                  <br />
                  Class: Decolonizing Data Visualization – Visualizing Postcolonies
                  <br />
                  Lecturers: Prof. Dr. Marian Dörk and Lamin Manneh
                  <br />
                  Teamwork: Mariana Reinhardt
                  <br />
                  Website-Link:
                  <a
                    href="https://leleschlaich.github.io/decolonizingdataviz/"
                    target="_blank"
                  >
                    &nbsp;Açaí, the superfood?
                  </a>
                  <br />
                  <br />
                We were intrigued by the story of the açaí and how it is entangled by the marketing of superfoods. From an indigenous food to a trendy superfood bowl: how did this process happen? How does the process of exotification of products originally from the Global South happens? What is the impact of such products? On communities, environmentally and more.
                <br />
                  <br />In the course I learned to look at topics from different angles by reading papers about the historical facts and design view, but also the informative inputs from guests made us learn a lot. 
                  <br />
                  <br />We wanted to look at the small stories and data but also the important numbers and information to see bigger picture on how the açaí is depicted, in a small but also on a larger scale. For example, we were fascinated by the indigenous myth but then also seeing the numbers of exportation nowadays.
                  <br />
                  <br />In a lot of sources the opinion and perspectives shown doesn´t capture the other side of the story. For instance when researching about superfoods, they are mostly highly advertised and if we look deeper there’s a lot more we could find in a critical direction.
                 
                </p>

                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                    src="https://player.vimeo.com/video/755631196?h=3d2e8cffff?autoplay=1&amp;muted=1&amp;color=ffffff&amp;portrait=0&amp;dnt=1"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
                <img className="images mt-1" src={acai1}></img>
                <img className="images mt-1" src={acai2}></img>
               </>
               
            ),
          }}
        </Container>
        

        <div className="container footer">
          <h1>
            <a href="mailto:lele@czyk.de">Mail me!</a>
          </h1>
          <div>
            <Link to="impressum">Impressum</Link>
            <Link className="ml-1" to="datenschutz">
              Datenschutz
            </Link>
          </div>
        </div>
      </main>
    </ContainerContext.Provider>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query portfolio {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulIgFilter(sort: { fields: title }) {
      edges {
        node {
          id
          description {
            description
          }
          video {
            file {
              url
            }
          }
        }
      }
    }
    contentfulAboutMe(contentful_id: { eq: "2zdg2IXjGyOZJhd3rGqqGn" }) {
      description {
        description
      }
      profilePicture {
        file {
          url
        }
      }
    }
  }
`;
