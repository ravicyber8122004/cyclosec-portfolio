import img01 from "../assets/img01.jpg";
import img02 from "../assets/img02.jpg";
import img03 from "../assets/img03.jpg";
import img04 from "../assets/img04.jpg";
import img05 from "../assets/img05.png";
import img06 from "../assets/img06.png";
import img07 from "../assets/img07.png";
import img08 from "../assets/img08.png";
import img09 from "../assets/img09.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";


export default function Aboutpage() {
  return (
    <>
      <div
        className="hero-section h-screen bg-cover bg-center text-text grid grid-cols-3 grid-rows-3 place-items-center text-shadow-lg"
        style={{ backgroundImage: `url(${img01})`}}
      >
        <div
          id="about-us"
          className="row-start-2 col-start-2 text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold font-sans text-center"
        >
          About Us
        </div>
      </div>

      <div className="about-section bg-background grid grid-cols-3 place-items-center h-screen">
        <div className="text-container col-start-1 col-end-3 text-text px-4 sm:px-10 lg:px-30">
          <div className="text-3xl sm:text-6xl font-bold mb-10 text-accent">
            CycloSec Securities
          </div>
          <div className="text:lg sm:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iste
            nostrum quos alias quod expedita autem, veritatis mollitia odit
            fugiat! Nemo ducimus adipisci delectus facilis repudiandae sed earum
            voluptatem dolorem. lor
          </div>
        </div>
        <div
          className="pic-container bg-center bg-cover h-full w-full bg-white"
          style={{ backgroundImage: `url(${img02})` }}
        ></div>
      </div>

      <div className="vision-section grid grid-cols-3 place-items-center h-screen">
        <div
          className="pic-container bg-center bg-cover h-full w-full bg-white"
          style={{ backgroundImage: `url(${img03})` }}
        ></div>
        <div className="text-container col-start-2 col-end-4 text-right px-4 sm:px-10 lg:px-30">
          <div className="text-3xl sm:text-6xl font-bold mb-10">Our Vision</div>
          <div className="text:lg sm:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iste
            nostrum quos alias quod expedita autem, veritatis mollitia odit
            fugiat! Nemo ducimus adipisci delectus facilis repudiandae sed earum
            voluptatem dolorem. lor
          </div>
        </div>
      </div>

      <div className="partner-section bg-background grid grid-cols-6 grid-rows-4 gap-y-[100px] place-items-center h-screen md">
        <div className="text-container col-start-1 col-end-7 row-start-2 row-end-3 text-text px-4 sm:px-10 lg:px-30 text-center">
          <div className="text-3xl sm:text-6xl font-bold mb-10 text-accent">
            Our Partners
          </div>
          <div className="text:lg sm:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iste
            nostrum quos alias quod expedita autem, veritatis mollitia odit
            fugiat! Nemo ducimus adipisci delectus facilis repudiandae sed earum
            voluptatem dolorem. lor
          </div>
        </div>
        <div className="pic-container grid place-items-center bg-background w-full h-full row-start-3 row-end-4">
          <div
            className="image-wrapper bg-center bg-cover aspect-square w-[50%] lg:w-[25%]"
            style={{ backgroundImage: `url(${img05})` }}
          ></div>
        </div>
        <div className="pic-container grid place-items-center bg-background w-full h-full row-start-3 row-end-4">
          <div
            className="image-wrapper bg-center bg-cover aspect-square w-[75%] lg:w-[50%]"
            style={{ backgroundImage: `url(${img06})` }}
          ></div>
        </div>
        <div className="pic-container grid place-items-center bg-background w-full h-full row-start-3 row-end-4">
          <div
            className="image-wrapper bg-center bg-cover aspect-square w-[50%] lg:w-[25%]"
            style={{ backgroundImage: `url(${img07})` }}
          ></div>
        </div>
        <div className="pic-container grid place-items-center bg-background w-full h-full row-start-3 row-end-4">
          <div
            className="image-wrapper bg-center bg-cover aspect-square w-[75%] lg:w-[50%]"
            style={{ backgroundImage: `url(${img08})` }}
          ></div>
        </div>
        <div className="pic-container grid place-items-center bg-background w-full h-full row-start-3 row-end-4">
          <div
            className="image-wrapper bg-center bg-cover aspect-square w-[50%] lg:w-[25%]"
            style={{ backgroundImage: `url(${img09})` }}
          ></div>
        </div>
        <div className="pic-container grid place-items-center bg-background w-full h-full row-start-3 row-end-4">
          <div
            className="image-wrapper bg-center bg-cover aspect-square w-[75%] lg:w-[50%]"
            style={{ backgroundImage: `url(${img10})` }}
          ></div>
        </div>
      </div>

      <div className="leadership-section grid grid-rows-[2,auto] place-items-center w-full">
        <div className="leader-header text-3xl md:text-6xl font-bold mt-10 sm:mt-30 mb-2 sm:mb-10">
          Leadership
        </div>
        <div className="members grid grid-rows-[3, 3fr] my-5 sm:my-10">
          <div className="member1 grid grid-cols-[3, 3fr] my-5sm:my-5 sm:m-10 w-[90%]">
            <div className="member-picture-wrapper h-full justify-items-center">
              <div
                className="member-picture bg-center bg-cover aspect-square mx-3 sm:mx-10 h-[50px] sm:h-[150px] lg:h-[250px] rounded-lg"
                style={{ backgroundImage: `url(${img11})` }}
              ></div>
            </div>
            <div className="member-details col-start-2 col-end-4">
              <div className="member-name text-lg sm:text-4xl font-bold sm:mb-2">
                Rahul Gupta
              </div>
              <div className="member-designation text-sm sm:text-xl font-bold mb-1 sm:mb-4">
                Founder & CEO
              </div>
              <div className="member-description text-sm sm:text-lg font-normal w-[90%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                laudantium earum velit alias eius, quas voluptas tempore
                corrupti rerum quasi autem, Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Eligendi voluptatem aut voluptates
                aliquam sapiente quis a in possimus atque expedita, cupiditate
                necessitatibus doloremque similique sint iusto laudantium, earum
                quaerat accusamus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quasi corporis exercitationem impedit
                laboriosam eum voluptatibus facere et praesentium debitis
                dolorum? Itaque nobis, ab ratione alias esse voluptatum
                voluptatem sit nulla.dolorum in cupiditate blanditiis commodi.
                Esse inventore mollitia temporibus perspiciatis error, dolores,
                maiores obcaecati numquaditate? Molestias quo ad unde tempora
                consequuntur sint, hic porro doloribus quisquam earum mollitia,
                aliquid in vel ipsum! Perspiciatis, ipsum dignissimos. A,
                repellat eveniet.
              </div>
            </div>
          </div>

          <div className="member2 grid grid-cols-[3, 3fr] my-5 sm:m-10 w-[90%]">
            <div className="member-picture-wrapper h-full justify-items-center">
              <div
                className="member-picture bg-center bg-cover aspect-square mx-3 sm:mx-10 h-[50px] sm:h-[150px] lg:h-[250px] rounded-lg"
                style={{ backgroundImage: `url(${img12})` }}
              ></div>
            </div>
            <div className="member-details col-start-2 col-end-4">
              <div className="member-name text-lg sm:text-4xl font-bold sm:mb-2">
                Selena Jones
              </div>
              <div className="member-designation text-sm sm:text-xl font-bold mb-1 sm:mb-4">
                Lead Developer
              </div>
              <div className="member-description text-sm sm:text-lg font-normal w-[90%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                laudantium earum velit alias eius, quas voluptas tempore
                corrupti rerum quasi autem, Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Eligendi voluptatem aut voluptates
                aliquam sapiente quis a in possimus atque expedita, cupiditate
                necessitatibus doloremque similique sint iusto laudantium, earum
                quaerat accusamus. Lorem ipsum dolor sit amet consectetur
                adipisicuaditate? Molestias quo ad unde tempora
                consequuntur sint, hic porro doloribus quisquam earum mollitia,
                aliquid in vel ipsum! Perspiciatis, ipsum dignissimos. A,
                repellat eveniet.
              </div>
            </div>
          </div>

          <div className="member3 grid grid-cols-[3, 3fr] my-5 sm:m-10 w-[90%]">
            <div className="member-picture-wrapper h-full justify-items-center">
              <div
                className="member-picture bg-center bg-cover aspect-square mx-3 sm:mx-10 h-[50px] sm:h-[150px] lg:h-[250px] rounded-lg"
                style={{ backgroundImage: `url(${img13})` }}
              ></div>
            </div>
            <div className="member-details col-start-2 col-end-4">
              <div className="member-name text-lg sm:text-4xl font-bold sm:mb-2">
                James Smith
              </div>
              <div className="member-designation text-sm sm:text-xl font-bold mb-1 sm:mb-4">
                Manager
              </div>
              <div className="member-description text-sm sm:text-lg font-normal w-[90%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                laudantium earum velit alias eius, quas voluptas tempore
                corrupti rerum quasi autem, dolorum in cupiditate blanditiis
                commodi. Esse inventore mollitia Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Enim laborum accusamus laudantium
                illum non repellendus. Quasi, ipsam iste harum tempora, optio
                repellendus, debitis distinctio dolores fugit sunt pariatur quod
                enim? temporibus perspiciatis error, dolores, maiores obcaecati
                numquaditate? Molestias quo ad unde tempora consequuntur sint,
                hic porro doloribus quisquam earum mollitia, aliquid in vel
                ipsum! Perspiciatis, ipsum dignissimos. A, repellat eveniet.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate explicabo exercitationem voluptatem ipsum odio,
                suscipit aperiam. Enim ad aspernatur id voluptas obcaecati
                cupiditate beatae odio alias officia, non provident assumenda?
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-section bg-background grid grid-cols-3 place-items-center h-screen">
        <div className="text-container col-start-1 col-end-3 text-text px-4 sm:px-10 lg:px-30">
          <div className="text-3xl sm:text-6xl font-bold mb-10 text-accent">
            Our Products
          </div>
          <div className="text:lg sm:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iste
            nostrum quos alias quod expedita autem, veritatis mollitia odit
            fugiat! Nemo ducimus adipisci delectus facilis repudiandae sed earum
            voluptatem dolorem. lor
          </div>
        </div>
        <div
          className="pic-container bg-center bg-cover h-full w-full bg-white"
          style={{ backgroundImage: `url(${img04})` }}
        ></div>
      </div>

      <div className="career-section grid place-items-center p-5 sm:px-10 sm:py-20">
        <div className="career-card grid grid-cols-[3, 3fr] bg-background text-text rounded-4xl p-10 sm:py-20 ">
          <div className="career-image-wrapper h-full hidden sm:grid place-items-center">
            <div
              className="member-picture bg-center bg-cover aspect-square mx-3 sm:mx-10 h-[50px] sm:h-[150px] lg:h-[250px] rounded-lg"
              style={{ backgroundImage: `url(${img14})` }}
            ></div>
          </div>
          <div className="career-card-details grid grid-rows-2 col-start-2 col-end-4">
            <div className="careers-info row-start-1 row-end-3 w-[80%] ">
              <div className="careers-header text-6xl font-bold mb-5 sm:mb-2 lg:mb-10 sm:text-3xl md:text-5xl text-accent">
                Join our team.
              </div>
              <div className="career-description sm:text-sm md:text-sm">
                We're always looking to hire people with a passion for threat
                intelligence and a desire to make a difference. Bring your
                skills to Recorded Future to help us build a safer world.
              </div>
            </div>
            <div className="career-button bg-accent sm:text-sm lg:text-xl max-w-[200px] text-black rounded-xl grid place-items-center font-bold text-xl p-3 cursor-pointer mt-10 hover:bg-text hover:glow duration-500 relative">
              Explore Carrers
              <span class="absolute flex size-5 top-0 right-0 transform translate-x-[30%] -translate-y-[30%]">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span class="relative inline-flex size-5 rounded-full bg-accent border border-black"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
