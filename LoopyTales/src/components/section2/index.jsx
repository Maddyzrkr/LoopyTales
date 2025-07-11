// // import promoBoxes from "../../config/section2list";
// // import "./section2.css"; // make sure to create this

// // function Section2() {
// //   return (
// //     <div className="section2">
// //       <h2>

// // {/* ab dekh aise time pe mai blank hota hu, i dont know what to do now, kya karu ab?
// // phle dimag mei structure banau? and then code?
// // haa abhi jo structure copy kiye chat gpt se wor saara text images wagera contain karta hai,
// // abhi wohi structure follow karna hai, aur number of divs banane hai */}

// //         Welcome to <span className="brand">LoopyTales</span>
// //       </h2>
// //       <p>Your one-stop shop for handmade crochet wear.</p>

// //       <div className="promo-row">
// //         {promoBoxes.map((box) => (
// //           <div className="promo-box" key={box.id}>
// //             {box.type === "image" ? (
// //               <div className="image-box">
// //                 <img src={box.image} alt={box.alt} />
// //                 <button className="label">{box.label}</button>
// //               </div>
// //             ) : (
// //               <div className="offer-box">
// //                 <h3>{box.title}</h3>
// //                 <p>{box.description}</p>
// //                 <button>{box.buttonText}</button>
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Section2;

// import promoGrid from "../../config/section2list";
// import "./Section2.css";
// import { useNavigate } from "react-router-dom";

// function Section2() {
//   const navigation = useNavigate();
//   return (
//     <div className="promo-grid">
//       <div className="left-large">
//         <img src={promoGrid[0].image} alt="New Arrivals" />
//         <div className="overlay">
//           <h1 className="number">{promoGrid[0].number}</h1>
//           <h2>{promoGrid[0].label}</h2>
//         </div>
//       </div>

//       <div className="right">
//         <div className="top">
//           {promoGrid.slice(1, 3).map((item) => (
//             <div className="small-box" key={item.id}>
//               <img src={item.image} alt={item.subtitle} />
//               <div className="overlay">
//                 <p>{item.title}</p>
//                 <h3>{item.subtitle}</h3>
//                 <button onClick={()=>{navigation('/shop')}}>{item.button}</button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="bottom">
//           <img src={promoGrid[3].image} alt="Sale" />
//           <div className="overlay">
//             <h3>{promoGrid[3].title}</h3>
//             <p>{promoGrid[3].subtitle}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section2;

import promoGrid from "../../config/section2list";
import "./Section2.css";
import { useNavigate } from "react-router-dom";

function Section2() {
  const navigation = useNavigate();
  return (
    <div className="promo-grid">
      <div className="left-large">
        <img src={promoGrid[0].image} alt="New Arrivals" />
        <div className="overlay">
          <h1 className="number">{promoGrid[0].number}</h1>
          <h2>{promoGrid[0].label}</h2>
          <button onClick={() => navigation('/shop')}>
            {promoGrid[0].button}
          </button>
        </div>
      </div>

      <div className="right">
        <div className="top">
          {promoGrid.slice(1, 3).map((item) => (
            <div className="small-box" key={item.id}>
              <img src={item.image} alt={item.subtitle} />
              <div className="overlay">
                <p>{item.title}</p>
                <h3>{item.subtitle}</h3>
                <button onClick={() => navigation('/shop')}>
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bottom">
          <img src={promoGrid[3].image} alt="Sale" />
          <div className="overlay">
            <h3>{promoGrid[3].title}</h3>
            <p>{promoGrid[3].subtitle}</p>
            <button onClick={() => navigation('/shop')}>
              {promoGrid[3].button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;