import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import * as React from "react";
import "./Slidebar.css";
function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 90000;
const Slidebar = () => {
  const [value1, setValue1] = React.useState([160000, 250000]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      console.log("kichho habe");
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
    >
      <div>
        <Box sx={{ width: 500 }}>
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
            step={100}
            min={5000}
            max={500000}
          />
        </Box>
        <div className="d-flex justify-content-between">
          <p>$5000</p>
          <p>$500000</p>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
