import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavbarOptions from "./components/NavbarOptions";
import { NAVBAR_CONFIG } from "./config/config";
import { ConfigNavbarElement } from "./interfaces/navbarConfig.type";

export default function Navbar() {
  const router = useRouter();
  // Create type for NAVBAR_CONFIG
  const [config, setConfig] = useState<ConfigNavbarElement>();
  const { archived } = router.query;

  useEffect(() => {
    archived === "true"
      ? setConfig(NAVBAR_CONFIG.archived)
      : setConfig(NAVBAR_CONFIG.unarchived);
  }, [archived]);

  return (
    <Box
      sx={{
        m: 2,
        p: 4,
        top: 0,
        position: "fixed",
        borderRadius: 3,
        backgroundColor: "white",
        zIndex: 1,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          {config ? (
            <Typography variant="h1" sx={{ fontWeight: "bold" }}>
              {config!.title}
            </Typography>
          ) : (
            <Skeleton
              animation="wave"
              variant="text"
              width={200}
              sx={{ fontSize: "2em", mr: 2 }}
            />
          )}
        </Grid>
        {config ? (
          <NavbarOptions option={config!.elements} />
        ) : (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={150}
            height={40}
          />
        )}
      </Grid>
    </Box>
  );
}
