import React, { useMemo, useState } from "react";
import "../styles/index.scss";

import { Link, graphql } from "gatsby";

import Container from "../components/container";
import ContainerContext from "../components/containerContext";

import climate2 from "../images/climate2.png";

import speculative1 from "../images/speculative1.png";

import tohil1 from "../images/tohil1.png";
import tohil2 from "../images/tohil2.png";
import tohil3 from "../images/tohil3.png";

import tippingpoints1 from "../images/tippingpoints1.jpg";

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
                  Since the beginning of my Hauptstudium I became more and more interested in AR and started teaching myself Spark AR. I combined this with my courses and it really became my passion which I´m happy to implement nowadays even in freelancing projects. 
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
                  Meat = Heat? is a website to raise awareness on climate change in
                  connection to meat consumption, written in Html and Css.
                  <br />
                  <br />
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
                <p>
                  In this project I learnded
                </p>
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
                  The future in a bag: What are everyday objects of
                  crisis-ridden futures? <br />
                  A scenario space navigating between climate crisis, ageing and
                  cyber attacks, which designs resilient artefacts between
                  smartness, dumbness, convenience and inconvenience.
                
                  <br />
                  <br />
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
                
                <img className="images" src={speculative1}></img>
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
                From the beginning we were so intrigued by the story of the açaí and how its entangled by the marketing of superfoods. From an indigenous food to a trendy superfood bowl, how did this process happen? How does the process of exotification of products originally from the Global South happens? What is the impact of such products? On communities, environmentally and so on.From the beginning we were so intrigued by the story of the açaí and how its entangled by the marketing of superfoods. From an indigenous food to a trendy superfood bowl, how did this process happen? How does the process of exotification of products originally from the Global South happens? What is the impact of such products? On communities, environmentally and so on.
                
                  <br />
                  <br />
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
                </p>

                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                    src="https://player.vimeo.com/video/755631196?h=3d2e8cffff?autoplay=1&amp;muted=1&amp;color=ffffff&amp;portrait=0#t=9m19s&amp;dnt=1"
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
                <img className="images mt-1" src={tippingpoints1}></img>
              </>
            ),
          }}
        </Container>
        <Container>
          {{
            title: (
              <h1>
                3D
                <br />
                Animation
              </h1>
            ),
            body: (
              <>
                <p>
                  My Erasmus-Semester was a great time to explore 
                  other and mainly new directions of digital arts and multimedia: 
                  3-Dimensionality and Animation, 2D-Animation, Film and Sound Production and Programming.
                  <br />
                  <br />
                  Semester: 6
                  <br />
                  Class: Multimedia Studio Practices II
                  <br />
                  Lecturer: José Teixeira
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
              </>
            ),
          }}
        </Container>
        <Container>
          {{
            title: (
              <h1>
                intern
                <br />
                ship
              </h1>
            ),
            body: (
              <>

                <p><br />
                  Semester: 7
                  <br />
                NEEEU Spaces GmbH was founded by Raffael Moco Schiller and Javier Soto Morras in 2017.
Their mission is to help clients create meaningful products, services and experiences. In doing so, they are passionate about people, innovative technologies and great design.
The focus is on: Human-Centered, Hands on & Playful.


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
                
                <img className="images mt-1" src={tohil1}></img>
                <img className="images mt-1" src={tohil2}></img>
                <img className="images mt-1" src={tohil3}></img>
                
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
