import logo from "../Img/logo.webp";
import "./css/index.css";

export default function Blogs() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="title">
        <h1>information</h1>
      </div>

      <div className="skin-info">
        <div className="info">
          <h2>How to Layer an Anti-Acne Kit Without Over-Drying</h2>
        </div>
        <div className="info">
          <h2>What % Salicylic Acid Is Safe to Use?</h2>
        </div>
        <div className="info">
          <h2>Can You Layer Multiple Serums Together? (Safe Combinations)</h2>
        </div>
        <div className="info">
          <h2>Best Serums for Monsoon Dryness: Hydrating Ingredients for Dehydrated Skin</h2>
        </div>
        <div className="info">
          <h2>Niacinamide & Hyaluronic Acid Serums: Which One Is Right for You?</h2>
        </div>
        <div className="info">
          <h2>“My Sunscreen has Separated, Is It Still Safe to Use?”</h2>
        </div>
        <div className="info">
          <h2>What Is Broad Spectrum Protection? Best Sunscreens for Oily & Dull Skin</h2>
        </div>
        <div className="info">
          <h2>Ingredients to Look for in a Face Wash for Acne</h2>
        </div>
      </div>
    </>
  );
}
