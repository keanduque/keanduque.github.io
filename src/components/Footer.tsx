export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <div className="flex items-center gap-2 text-slate-400">
              <p className="text-center">
                <img
                  src="/keanduque-avatar.png"
                  alt="Keanduque Logo"
                  className="h-10 mx-auto"
                />
                © {new Date().getFullYear()}{" "}
                <span className="text-orange-400">K</span>
                <span className="text-emerald-400">EAN</span>
                <span className="text-orange-400">D</span>
                <span className="text-emerald-400">UQUE</span>.<br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 border-t border-slate-800 py-8">
//       <div className="mt-16 text-center border-t border-slate-800 pt-8">
//         <img
//           src="/keanduque-avatar.png"
//           alt="Keanduque Logo"
//           className="h-10 mx-auto"
//         />
//         <div className="flex items-center gap-2 text-slate-400">
//           © {new Date().getFullYear()}{" "}
//           <span className="text-orange-400">K</span>
//           <span className="text-emerald-400">EAN</span>
//           <span className="text-orange-400">D</span>
//           <span className="text-emerald-400">UQUE</span>.<br />
//           All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }
