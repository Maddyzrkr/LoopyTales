
// import promoBoxes from "../../config/section1list";
// import "./Section1.css"; // make sure to create this

// function Section1() {
//   return (
//     <div className="section1">
//       <h2>
//         Welcome to <span className="brand">LoopyTales</span>
//       </h2>
//       <p>Your one-stop shop for handmade crochet wear.</p>

//       <div className="promo-row">
//         {promoBoxes.map((box) => (
//           <div className="promo-box" key={box.id}>
//             {box.type === "image" ? (
//               <div className="image-box">
//                 <img src={box.image} alt={box.alt} />
//                 <button className="label">{box.label}</button>
//               </div>
//             ) : (
//               <div className="offer-box">
//                 <h3>{box.title}</h3>
//                 <p>{box.description}</p>
//                 <button>{box.buttonText}</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Section1;

import promoBoxes from "../../config/section1list";
import "./Section1.css";
import { useNavigate } from "react-router-dom";

function Section1() {
  const navigation = useNavigate();

  return (
    <div className="section1">
      <h2>
        Welcome to <span className="brand">LoopyTales</span>
      </h2>
      <p>Your one-stop shop for handmade crochet wear.</p>

      <div className="promo-row">
        {promoBoxes.map((box) => (
          <div className="promo-box" key={box.id}>
            {box.type === "image" ? (
              <div className="image-box">
                <img src={box.image} alt={box.alt} />
                <button className="label" onClick={() => navigation('/shop')}>
                  {box.label}
                </button>
              </div>
            ) : (
              <div className="offer-box">
                <h3>{box.title}</h3>
                <p>{box.description}</p>
                <button onClick={() => navigation('/shop')}>
                  {box.buttonText}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section1;
