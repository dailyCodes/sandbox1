import React from "react";
import { Grid, Paper } from "material-ui-next";

const styles = {
  Paper: { padding: 30, margintop: 20, marginbottom: 10 }
};
export default props => (
  <Grid container>
    <Grid item xs>
      <Paper styles={styles.Paper}>Left Pane</Paper>
    </Grid>
    <Grid item xs>
      <Paper styles={styles.Paper}>Right Pane</Paper>
    </Grid>
  </Grid>
);
