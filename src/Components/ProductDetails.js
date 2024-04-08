import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Link } from "react-router-dom";

function ProductsDetails() {
  const { productId } = useParams();

  const products = useSelector((state) => state.products.allProducts);

  const filteredProd = products[0].products.filter(
    (product) => product.id == productId
  );


  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = filteredProd[0].images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Link to="/">
        <div className=" mt-4 mx-4">
          <Button variant="contained" size="small">
            Back
          </Button>
        </div>
      </Link>

      <div className="flex justify-center items-center flex-col bg-white w-[50%] mx-auto p-5">
        {filteredProd[0].images.length == 1 ? (
          <img
            src={filteredProd[0].images}
            alt=""
            srcset=""
            className=" h-[355px] max-w-[500px]"
          />
        ) : (
          <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {filteredProd[0]?.images?.map((step, index) => (
                <div key={step}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 355,
                        display: "block",
                        maxWidth: 500,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step}
                      alt={step}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        )}

        <div className="flex justify-between items-center flex-col mt-4">
          <Typography gutterBottom variant="h5" component="div">
            Title : {filteredProd[0].title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Brand : {filteredProd[0].brand}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Category : {filteredProd[0].category}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price : {filteredProd[0].price}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Discount : {filteredProd[0].discountPercentage} %
          </Typography>
        </div>
      </div>
    </>
  );
}

export default ProductsDetails;
