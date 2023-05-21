"use client";
import React from "react";
import { JsonForms } from "@jsonforms/react";
import schema from "../../app/data-form/formSchema.json";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";

interface FormProps {
  state: object;
  setState?(arg0: object): null;
}

export const Form = ({ state, setState }: FormProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <JsonForms
            schema={schema}
            data={state}
            renderers={materialRenderers}
            cells={materialCells}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
