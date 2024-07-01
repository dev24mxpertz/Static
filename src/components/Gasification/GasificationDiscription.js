import React from 'react'
import "./Gasification.css";

const GasificationDiscription = () => {
  return (
    <>
      <h5 style={{ color: "#f9e488" }}>Description</h5>
      <p className="description_p_tag">
        One of the many advantages of the use of Synthetic Gas to produce clean
        fuel is that it can be produced from waste materials which would
        otherwise, need to be discarded. Instead of placing waste products in
        landfills or the oceans, this waste can be used to generate useful and
        eco-friendly fuel. This makes the Thermo Chemical Gasification process
        both an efficient means of producing energy and an environmentally
        friendly option for the recycling of waste products.
      </p>
      <p className="description_p_tag">
        Virtually any carbon-based material can be gasified to produce syngas.
        The carbon that is stored in the plant material is released as carbon
        monoxide and carbon dioxide allowing for nearly all the carbon in the
        biomass to be converted to syngas.
      </p>
    </>
  );
}

export default GasificationDiscription