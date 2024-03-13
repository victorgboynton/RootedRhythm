"use client";
import { getAllProducts } from "./shopifyFetch";

export default function Shop() {
  return (
    <div className="pt-20">
      This is the Store, yo
      <button className="text-white" onClick={getAllProducts}>
        Click Me
      </button>
    </div>
  );
}
