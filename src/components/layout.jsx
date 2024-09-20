import React from "react";
import Cards from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import CardCovers from "@mui/joy/CardCover";
import CardContents from "@mui/joy/CardContent";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@mui/material";
import YouTube from "react-youtube";

const handleButtonClick = (imageUrl) => {
  window.open(imageUrl, "_blank");
};

const Layout = () => {
  const videoOptions = {
    width: 470,
    height: 200,
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      showinfo: 0,
      loop: 1,
    },
  };
  return (
    <div className="mx-4 mt-32">
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          margin: "4rem auto",
          textAlign: "center",
          fontWeight: 800,
          fontSize: "2.5rem",
        }}
      >
        Safety Tips
      </Typography>
      <Grid
        container
        spacing={2}
        rowSpacing={5}
        columnSpacing={5}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Grid item xs={4}>
          <Box
            component="ul"
            sx={{ display: "flex", gap: 5, flexWrap: "wrap", p: 0, m: 0 }}
          >
            <Cards component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCovers>
                <YouTube videoId="0MO2ohX2Iao" opts={videoOptions} />
              </CardCovers>
              <CardContents>
                <Typography
                  level="body-lg"
                  fontWeight="lg"
                  textcolor="#ffffff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  Fire in Building
                </Typography>
              </CardContents>
            </Cards>
            <Cards component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCovers>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/7MwazSAKcIw?si=gKwhyteswG5Y81d9&amp;start=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </CardCovers>
              <CardContents>
                <Typography
                  level="body-lg"
                  fontWeight="lg"
                  textcolor="#ffffff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  Building Collapse
                </Typography>
              </CardContents>
            </Cards>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            component="ul"
            sx={{ display: "flex", gap: 5, flexWrap: "wrap", p: 0, m: 0 }}
          >
            <Cards component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCovers>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/xg_YC0tHdKA?si=kG4RnU5XVBJGmNk7&amp;start=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </CardCovers>
              <CardContents>
                <Typography
                  level="body-lg"
                  fontWeight="lg"
                  textcolor="#ffffff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  Bombing in Public Place
                </Typography>
              </CardContents>
            </Cards>
            <Cards component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCovers>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/2z3ntqbdruc?si=-NZrmX1T2CT2JjeG"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </CardCovers>
              <CardContents>
                <Typography
                  level="body-lg"
                  fontWeight="lg"
                  textcolor="#fff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  CPR training
                </Typography>
              </CardContents>
            </Cards>
          </Box>
        </Grid>
      </Grid>
      .
      <Grid
        container
        spacing={5}
        rowSpacing={5}
        columnSpacing={5}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Grid item xs={4}>
          <Box
            component="ul"
            sx={{ display: "flex", gap: 5, flexWrap: "wrap", p: 0, m: 0 }}
          >
            <Cards component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCovers>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/0tSLfrMRM3c?si=kh-kYoEGDvsl290I"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </CardCovers>
              <CardContents>
                <Typography
                  level="body-lg"
                  fontWeight="lg"
                  textcolor="#ffffff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  Fire in Slum
                </Typography>
              </CardContents>
            </Cards>
            <Cards component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCovers>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3H_EbUdQ7_0?si=OZz4zim3ohX9uJ96"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </CardCovers>
              <CardContents>
                <Typography
                  level="body-lg"
                  fontWeight="lg"
                  textcolor="#fff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  Chemical Hazard
                </Typography>
              </CardContents>
            </Cards>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            component="ul"
            sx={{ display: "flex", gap: 5, flexWrap: "wrap", p: 0, m: 0 }}
          >
            <Cards component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCovers>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/L2gx_rlvLgQ?si=cYgDFe_FCaVBnGcP"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </CardCovers>
              <CardContents>
                <Typography
                  level="body-lg"
                  fontWeight="lg"
                  textcolor="#ffffff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  Flooding / Water Logging Due to Rain
                </Typography>
              </CardContents>
            </Cards>
            <Cards component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCovers>
                <YouTube videoId="ix-ox5fn02A" opts={videoOptions} />
              </CardCovers>
              <CardContents>
                <Typography
                  level="body-lg"
                  fontWeight="lg"
                  textcolor="#fff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  Water Related Disaster - Drowning in Sea
                </Typography>
              </CardContents>
            </Cards>
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          margin: "2rem auto",
          textAlign: "center",
          fontWeight: 800,
          fontSize: "1.5rem",
        }}
      >
        Do's and Dont's
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item md={2} lg={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 250 }}
              image="https://www.eurokidsindia.com/blog/wp-content/uploads/2023/11/cyclone-stages-formation-impact.jpg"
              title="Cyclone"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Cyclone
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() =>
                  handleButtonClick("public/dm.mcgm.gov.in_dos_and_donts.png")
                }
                variant="contained"
                color="primary"
              >
                Open
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={2} lg={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 250 }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YYZkbGXEQXL87ElcK47p4DipYjTd2ojdWo06NOYAVQ&s"
              title="Earthquake"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Earthquake
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => handleButtonClick("public/earthquake.png")}
                variant="contained"
                color="primary"
              >
                Open
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={2} lg={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 250 }}
              image="https://assets.telegraphindia.com/telegraph/2020/Sep/1601144184_1595180760_20bihar_5.jpg "
              title="Cyclone"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Flood
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => handleButtonClick("public/floods.png")}
                variant="contained"
                color="primary"
              >
                Open
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={2} lg={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 250 }}
              image="https://assets.telegraphindia.com/telegraph/2022/Sep/1662676860_1662494289_bangalore.jpg "
              title="Cyclone"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Urban Floods
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => handleButtonClick("public/urban_floods.png")}
                variant="contained"
                color="primary"
              >
                Open
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Layout;
