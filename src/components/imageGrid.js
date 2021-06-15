import React from "react";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

export default function ImageGrid(imageArr) {
  const [arr, setArr] = useState([]);
  console.log("from imagegrid");
  //   console.log(imageArr);

  useEffect(() => {
    const urlsArr = imageArr.imageArr.map((obj, i) => {
      return { small: obj.urls.small, large: obj.urls.full };
    });
    setArr(urlsArr);
    console.log(urlsArr);
    console.log("LARGE IMAGES ARE:");
    console.log(arr);
  }, []);

  return (
    <div>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {arr.map((imageObj) => {
          return (
            //   <a href={imageObj.large}>
            //     <img src={imageObj.small} alt="" />
            //   </a>
            <Grid item xs={4}>
              <a href={imageObj.large}>
                <img src={imageObj.small} alt="" />
              </a>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
