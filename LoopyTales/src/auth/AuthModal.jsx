// import { useState } from 'react';
// import './authmodal.css';

// export default function AuthModal({ isOpen, onClose }) {
//   const [isLogin, setIsLogin] = useState(true);

//   if (!isOpen) return null;

//   return (
//     <div className="auth-modal-backdrop" onClick={onClose}>
//       <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
//         <h2>{isLogin ? "Login" : "Sign Up"}</h2>
//         <form>
//           {!isLogin && (
//             <input type="text" placeholder="Name" required />
//           )}
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
//         </form>
//         <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
//           {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
//         </p>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import './authmodal.css';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="auth-modal-backdrop" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form>
          {!isLogin && (
            <input type="text" placeholder="Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}
