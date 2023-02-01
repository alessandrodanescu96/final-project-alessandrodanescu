import React, { useState } from "react";
import Footer from "../components/footer";
import PageTitle from "../components/pagetitle/PageTitle";

import img1 from "../assets/images/blog/blog-details-1.jpg";
import img2 from "../assets/images/blog/blog-details-2.jpg";
import img3 from "../assets/images/blog/blog-details-3.jpg";
import img4 from "../assets/images/blog/prev-post.jpg";
import img5 from "../assets/images/blog/next-post.jpg";
import rec1 from "../assets/images/blog/recent-post-1.jpg";
import rec2 from "../assets/images/blog/recent-post-2.jpg";
import rec3 from "../assets/images/blog/recent-post-3.jpg";
import { Link } from "react-router-dom";

function BlogDetails(props) {
  const [datarecent] = useState([
    {
      id: 1,
      img: rec1,
      title: "MULTUMESC is out now!",
      cate: "SOLO RELEASE",
      time: "20 Jun 2021",
    },
    {
      id: 2,
      img: rec2,
      title: "ME AND YOU reached over 89.000 views",
      cate: "VIVA.RO",
      time: "10 AUG 2020",
    },
    {
      id: 3,
      img: rec3,
      title: "EWANA - what is the message?",
      cate: "PROTV",
      time: "30 APR 2022",
    },
  ]);
  return (
    <div>
      <PageTitle title="Blog Details" />

      <section className="tf-blog">
        <div className="tf-container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="detail-inner">
                <div className="image">
                  <img src={img1} alt="" />
                </div>

                <div className="title">
                  <h3>
                    Alessandro Danescu from ROMANIAN GOT TALENT, about his
                    musical beginnings: "I didn't want to study music"
                  </h3>
                  <div className="category">INTERVIEW</div>
                </div>
                <div className="meta">
                  <span className="admin">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0C8.51067 0 5.67188 2.8388 5.67188 6.32812C5.67188 9.81745 8.51067 12.6562 12 12.6562C15.4893 12.6562 18.3281 9.81745 18.3281 6.32812C18.3281 2.8388 15.4893 0 12 0Z"
                        fill="#21E786"
                      />
                      <path
                        d="M19.8734 16.7904C18.1409 15.0313 15.8442 14.0625 13.4062 14.0625H10.5938C8.15588 14.0625 5.85909 15.0313 4.12659 16.7904C2.40258 18.5409 1.45312 20.8515 1.45312 23.2969C1.45312 23.6852 1.76794 24 2.15625 24H21.8438C22.2321 24 22.5469 23.6852 22.5469 23.2969C22.5469 20.8515 21.5974 18.5409 19.8734 16.7904Z"
                        fill="#21E786"
                      />
                    </svg>
                    VIVA.RO
                  </span>
                  <span className="date">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 9C2 7.11438 2 6.17157 2.58579 5.58579C3.17157 5 4.11438 5 6 5H18C19.8856 5 20.8284 5 21.4142 5.58579C22 6.17157 22 7.11438 22 9C22 9.4714 22 9.70711 21.8536 9.85355C21.7071 10 21.4714 10 21 10H3C2.5286 10 2.29289 10 2.14645 9.85355C2 9.70711 2 9.4714 2 9Z"
                        fill="#21E786"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.58579 21.4142C2 20.8284 2 19.8856 2 18V13C2 12.5286 2 12.2929 2.14645 12.1464C2.29289 12 2.5286 12 3 12H21C21.4714 12 21.7071 12 21.8536 12.1464C22 12.2929 22 12.5286 22 13V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22H6C4.11438 22 3.17157 22 2.58579 21.4142ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16H8Z"
                        fill="#21E786"
                      />
                      <path
                        d="M7 3L7 6"
                        stroke="#21E786"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M17 3L17 6"
                        stroke="#21E786"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    23 APR 2021
                  </span>
                </div>

                <div className="content-inner mb24">
                  <p>
                    Q: Alessandro, you are back in a talent contest. What
                    feelings tried you at the preselections?
                    <br></br>
                    A: Honestly, I feel fantastic to be back on a big and very
                    important stage, I'm glad I was able to participate in this
                    show and since the auditions I've been anxious to get on the
                    big stage. I was happy to see dear people from ProTV again,
                    people I also saw at Vocea României in 2019. It was a
                    feeling that is hard to describe in words.
                  </p>
                  <br></br>
                  <p>
                    Q: Looking back, what inspired you to enter the path of
                    music? What made you not study music, but the technical
                    field?
                    <br></br>
                    A: My path in music has been a very interesting one, I say.
                    My journey started at a young age, in the 5th grade, when
                    the music teacher together with the French teacher
                    discovered my fairy voice. After that, I started singing, I
                    went to the Art School in Bucharest, to the light music
                    singing section, after which I left there and followed
                    privately, where I currently take singing lessons with
                    Anișoara Balmuș, who she is a sweetie and she knows it.
                  </p>
                </div>
                <div className="post-infor">
                  <div className="title">
                    Alessandro Dănescu, the competitor who raised the jurors in
                    Romanians have talent: "You are a joy"!
                  </div>
                  <div className="content">
                    <div className="star">
                      <i className="fas fa-star"></i>
                      <span>8.5/ 10</span>
                    </div>
                    <h6 className="name">www.fanatik.ro</h6>
                  </div>
                </div>
                <div className="image style-2">
                  <img className="mr20" src={img2} alt="" />
                  <img src={img3} alt="" />
                </div>
                <div className="content-inner">
                  <h4 className="title">Read more...</h4>
                  <p className="mb13">
                    Later, in the tenth grade, Alessandro started taking singing
                    lessons, and his favorite styles are pop-rock, pop-dance and
                    pop. He inherited the talent from his grandparents: his
                    grandmother had the voice, and his grandfather played the
                    flute. "You hit us, we didn't expect something like this. A
                    man appears on stage and when the music starts, we realize
                    it's Amy Winehouse. I was wondering what key you're going to
                    use. I was really curious how this song sounds with a male
                    voice.
                  </p>
                  <br></br>
                  <p>
                    You hit us with the stamp! Andra and I got a little carried
                    away here, you surprised us, I have to admit. (…) You have
                    your way in this show. We will definitely meet again in the
                    next stage with four DAs", Andi Moisescu told him.
                  </p>
                </div>

                <div className="content-inner ">
                  <h6 className="title">
                    Andra also told the young competitor:
                  </h6>
                  <p>
                    "Alessandro, you are a joy for me as a juror, because you
                    are the kind of contestant who comes and surprises. I didn't
                    expect you to have such an ambition, to change the tune, to
                    come up with ideas... That's what a professional does. The
                    fact that you said you work in IT, that's where this
                    surprise comes from. Wow, how well prepared you are also in
                    this field, in music".
                  </p>
                </div>
                <div className="content-bottom">
                  <div className="widget widget-tag">
                    <h6 className="widget-title">TAGS:</h6>
                    <ul>
                      <li>
                        <Link to="#">TV SHOW</Link>
                      </li>
                      <li>
                        <Link to="#">ARTIST</Link>
                      </li>
                      <li>
                        <Link to="#">RGT</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget-socical">
                    <h6 className="widget-title">SHARE:</h6>
                    <ul>
                      <li>
                        <Link to="#" className="icon-fl-vt"></Link>
                      </li>
                      <li>
                        <Link to="#" className="fab fa-twitter"></Link>
                      </li>
                      <li>
                        <Link to="#" className="fab fa-youtube"></Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <ul className="post-navigator">
                  <li>
                    <div className="thump">
                      <img src={img4} alt="" />
                    </div>
                    <div className="content">
                      <Link to="#" className="btn-post btn-prev">
                        PREVIOUS
                      </Link>
                      <h6 className="title">
                        <Link to="/blog-details">
                          Watch the article from The Voice of Romania 2019
                        </Link>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="thump">
                      <img src={img5} alt="" />
                    </div>
                    <div className="content">
                      <Link to="#" className="btn-post btn-next">
                        NEXT
                      </Link>
                      <h6 className="title">
                        <Link to="/blog-details">
                          SOLO RELEASE: I will release 3 new songs in 2023 and
                          I...
                        </Link>
                      </h6>
                    </div>
                  </li>
                </ul>

                <div id="comments">
                  <h3 className="heading">LEAVE A REPLY</h3>
                  <div className="sub-heading">
                    Your email address will not be published. Required fields
                    are marked
                  </div>
                  <form
                    action="contact/contact-process.php"
                    method="post"
                    id="commentform"
                    className="comment-form"
                  >
                    <fieldset className="name">
                      <input
                        type="text"
                        id="name"
                        placeholder="Name*"
                        className="tb-my-input"
                        name="name"
                        tabIndex="2"
                        aria-required="true"
                        required=""
                      />
                    </fieldset>
                    <fieldset className="email">
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email*"
                        className="tb-my-input"
                        name="email"
                        tabIndex="2"
                        aria-required="true"
                        required=""
                      />
                    </fieldset>
                    <fieldset className="phone">
                      <input
                        type="text"
                        id="phone"
                        placeholder="Phone Number*"
                        className="tb-my-input"
                        name="phone"
                        tabIndex="2"
                        aria-required="true"
                        required=""
                      />
                    </fieldset>
                    <fieldset className="website">
                      <input
                        type="text"
                        id="website"
                        placeholder="Website"
                        className="tb-my-input"
                        name="website"
                        tabIndex="2"
                        aria-required="true"
                        required=""
                      />
                    </fieldset>
                    <fieldset className="message">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Comment*"
                        tabIndex="4"
                        aria-required="true"
                        required=""
                      ></textarea>
                    </fieldset>
                    <div className="btn-submit mg-t-36">
                      <button className="tf-button" type="submit">
                        SEND COMMENT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-12">
              <div className="side-bar">
                <div className="widget widget-search">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Search for..."
                      required=""
                    />
                    <Link to className="btn-search">
                      <i className="icon-fl-search-filled"></i>
                    </Link>
                  </form>
                </div>
                <div className="widget widget-category">
                  <h4 className="widget-title">TOPICS</h4>
                  <ul>
                    <li>
                      <Link to="#">MUSIC (7)</Link>{" "}
                    </li>
                    <li>
                      <Link to="#">SONGS (9)</Link>{" "}
                    </li>
                    <li>
                      <Link to="#">TV SHOW (3)</Link>{" "}
                    </li>
                    <li>
                      <Link to="#">INTERVIEW (10)</Link>{" "}
                    </li>
                    <li>
                      <Link to="#">RGT (3)</Link>{" "}
                    </li>
                    <li>
                      <Link to="#">VOICE (10)</Link>{" "}
                    </li>
                    <li>
                      <Link to="#">NEW SONG (5)</Link>{" "}
                    </li>
                  </ul>
                </div>
                <div className="widget widget-recent-post">
                  <h4 className="widget-title">RECENT POSTS</h4>
                  <ul>
                    {datarecent.map((idx) => (
                      <li key={idx.id}>
                        <div className="post-img">
                          <img src={idx.img} alt="Post New" />
                        </div>
                        <div className="post-content">
                          <h6 className="title">
                            <Link to="/blog-details">{idx.title}</Link>
                          </h6>
                          <div className="post-meta">
                            <span className="category">{idx.cate}</span>
                            <span className="date">{idx.time}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="widget widget-tag ">
                  <h4 className="widget-title">TAG</h4>
                  <ul>
                    <li>
                      <Link to="#">MUSIC</Link>
                    </li>
                    <li>
                      <Link to="#">SONGS</Link>
                    </li>
                    <li>
                      <Link to="#">TV SHOW</Link>
                    </li>
                    <li>
                      <Link to="#">INTERVIEW</Link>
                    </li>
                    <li>
                      <Link to="#">RGT</Link>
                    </li>
                    <li>
                      <Link to="#">VOICE</Link>
                    </li>
                    <li>
                      <Link to="#">NEW SONG</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogDetails;
