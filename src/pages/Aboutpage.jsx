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
        style={{ backgroundImage: `url(${img01})` }}
      >
        <div
          id="about-us"
          className="row-start-2 col-start-2 text-9xl font-bold font-sans text-center"
        >
          About Us
        </div>
      </div>

     
      <div className="about-section bg-background grid grid-cols-3 place-items-center h-screen">
        <div className="text-container col-start-1 col-end-3 text-text px-30">
          <div className="text-6xl font-bold mb-10 ">CycloSec Securities</div>
          <div className="text-xl">
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

      <div className="product-section grid grid-cols-3 place-items-center h-screen ">
        <div
          className="pic-container bg-center bg-cover h-full w-full bg-white"
          style={{ backgroundImage: `url(${img03})` }}
        ></div>
        <div className="text-container col-start-2 col-end-4 text-right px-30">
          <div className="text-6xl font-bold mb-10 ">Our Vision</div>
          <div className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iste
            nostrum quos alias quod expedita autem, veritatis mollitia odit
            fugiat! Nemo ducimus adipisci delectus facilis repudiandae sed earum
            voluptatem dolorem. lor
          </div>
        </div>
      </div>

      <div className="vision-section bg-background grid grid-cols-6 grid-rows-4 gap-y-[100px] place-items-center h-screen">
        <div className="text-container col-start-1 col-end-7 row-start-2 row-end-3 text-text px-30 text-center">
          <div className="text-6xl font-bold mb-10 ">Our Partners</div>
          <div className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iste
            nostrum quos alias quod expedita autem, veritatis mollitia odit
            fugiat! Nemo ducimus adipisci delectus facilis repudiandae sed earum
            voluptatem dolorem. lor
          </div>
        </div>
        <div className="pic-container grid place-items-center bg-background w-full h-full row-start-3 row-end-4">
          <div
            className="image-wrapper bg-center bg-cover aspect-square w-[25%]"
            style={{ backgroundImage: `url(${img05})` }}
          ></div>
        </div>
        <div className="pic-container grid place-items-center bg-background w-full h-full row-start-3 row-end-4">
          <div
            className="image-wrapper bg-center bg-cover aspect-square w-[50%]"
            style={{ backgroundImage: `url(${img06})` }}
          ></div>
        </div>
        <div className="pic-container grid place-items-center bg-background w-full h-full row-start-3 row-end-4">
          <div
            className="image-wrapper bg-center bg-cover aspect-square w-[25%]"
            style={{ backgroundImage: `url(${img07})` }}
          ></div>
        </div>
        <div className="pic-container grid place-items-center bg-background w-full h-full row-start-3 row-end-4">
          <div
            className="image-wrapper bg-center bg-cover aspect-square w-[50%]"
            style={{ backgroundImage: `url(${img08})` }}
          ></div>
        </div>
        <div className="pic-container grid place-items-center bg-background w-full h-full row-start-3 row-end-4">
          <div
            className="image-wrapper bg-center bg-cover aspect-square w-[25%]"
            style={{ backgroundImage: `url(${img09})` }}
          ></div>
        </div>
        <div className="pic-container grid place-items-center bg-background w-full h-full row-start-3 row-end-4">
          <div
            className="image-wrapper bg-center bg-cover aspect-square w-[50%]"
            style={{ backgroundImage: `url(${img10})` }}
          ></div>
        </div>
      </div>

      <div className="leadership-section grid grid-rows-[2, auto] place-items-center">
        <div className="leader-header text-6xl font-bold mt-30 mb-10">
          Leadership
        </div>
        <div className="members grid grid-rows-3 my-10 justify-center">
          <div className="member1 grid grid-cols-3 m-10 w-[90%]">
            <div className="member-picture-wrapper h-full justify-items-end pr-10">
              <div
                className="member-picture bg-center bg-cover aspect-square h-[250px] rounded-lg"
                style={{ backgroundImage: `url(${img11})` }}
              ></div>
            </div>
            <div className="member-details col-start-2 col-end-4">
              <div className="member-name text-4xl font-bold mb-2">
                Rahul Gupta
              </div>
              <div className="member-designation text-xl font-bold mb-4">
                Founder & CEO
              </div>
              <div className="member-description text-lg font-normal">
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

          <div className="member2 grid grid-cols-3 m-10 w-[90%]">
            <div className="member-picture-wrapper h-full justify-items-end pr-10">
              <div
                className="member-picture bg-center bg-cover aspect-square h-[250px] rounded-lg"
                style={{ backgroundImage: `url(${img12})` }}
              ></div>
            </div>
            <div className="member-details col-start-2 col-end-4">
              <div className="member-name text-4xl font-bold mb-2">
                Selena Gomez
              </div>
              <div className="member-designation text-xl font-bold mb-4">
                Lead Developer
              </div>
              <div className="member-description text-lg font-norma]">
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

          <div className="member3 grid grid-cols-3 m-10 w-[90%]">
            <div className="member-picture-wrapper h-full justify-items-end pr-10">
              <div
                className="member-picture bg-center bg-cover aspect-square h-[250px] rounded-lg"
                style={{ backgroundImage: `url(${img13})` }}
              ></div>
            </div>
            <div className="member-details col-start-2 col-end-4">
              <div className="member-name text-4xl font-bold mb-2">
                James Smith
              </div>
              <div className="member-designation text-xl font-bold mb-4">
                Manager
              </div>
              <div className="member-description text-lg font-normal">
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
        <div className="text-container col-start-1 col-end-3 text-text px-30">
          <div className="text-6xl font-bold mb-10 ">Our Products</div>
          <div className="text-xl">
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

      <div className="career-section grid place-items-center px-10 py-20">
        <div className="career-card grid grid-cols-3 bg-background text-text rounded-4xl py-20">
          <div className="career-image-wrapper h-full grid place-items-center">
            <div
              className="career-image bg-center bg-cover aspect-square h-[300px] rounded-4xl"
              style={{ backgroundImage: `url(${img14})` }}
            ></div>
          </div>
          <div className="career-card-details grid grid-rows-2 col-start-2 col-end-4 ">
            <div className="careers-info row-start-1 row-end-3 pr-30 ">
              <div className="careers-header text-6xl font-bold mb-10">
                Join our team.
              </div>
              <div className="career-description">
                We're always looking to hire people with a passion for threat
                intelligence and a desire to make a difference. Bring your
                skills to Recorded Future to help us build a safer world.
              </div>
            </div>
            <div className="career-button bg-white max-w-[200px] text-black rounded-xl grid place-items-center font-bold text-xl p-3 cursor-pointer">
              Explore Carrers
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
