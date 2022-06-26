import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { withAppBar } from "@/hocs/withAppBar";

const Teachers: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          TEACHERS
        </Typography>
      </Box>
    </Container>
  );
};

export default withAppBar(Teachers, "Professores");