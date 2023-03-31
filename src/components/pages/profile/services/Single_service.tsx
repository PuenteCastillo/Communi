import Image from "next/image";
import Placeholder from "../../../../Images/landscaping.jpg";

export default function Single_service(props: any) {
  return (
    <section id="single_service">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="img_container">
              <Image src={Placeholder} alt="Placeholder" />
            </div>
          </div>
          <div className="col-md-6  col-lg-8 order-md-0">
            <div className="details">
              <h3>Car Detail & Cleaning</h3>
              <p className="small_details">Estimated: 30 min </p>
              <button>Book</button>
              <p className="description">
                Located in Xiahe in the south of Gansu province in China,
                miniature Tibet and home to the most comprehensive Tibetan
                university monastery in the world.
              </p>
            </div>
          </div>
          {/* gallery */}
          <div className="gallery col-md-6 col-lg-4 order-md-2">
            <div className="row">
              <div className="col-6 position-relative square">
                <Image className="" src={Placeholder} alt="placeholder" />
              </div>
              <div className="col-6  position-relative">
                <div className="col-12 position-relative mid_hight top-row">
                  <Image src={Placeholder} alt="placeholder" />
                </div>
                <div className="col-12 position-relative mid_high">
                  <Image src={Placeholder} alt="placeholder" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="review" className="row ">
          <h2>Reviews</h2>
          <div className="review_item row">
            <div className="col-3">
              <Image
                className="review_avater"
                src={Placeholder}
                alt="placeholder"
              />
            </div>
            <div className="col-9 review_details">
              <h5>Joe Shmoe</h5>
              <p className="date">Aug 02 2019</p>
              <p>
                "Great Tibetan Travel Agency for experiencing the Tibetan
                culture! Tours for Families, Solo or with friends!"
              </p>
            </div>
          </div>
          <div className="review_item row">
            <div className="col-3">
              <Image
                className="review_avater"
                src={Placeholder}
                alt="placeholder"
              />
            </div>
            <div className="col-9 review_details">
              <h5>Joe Shmoe</h5>
              <p className="date">Aug 02 2019</p>
              <p>
                "Great Tibetan Travel Agency for experiencing the Tibetan
                culture! Tours for Families, Solo or with friends!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
