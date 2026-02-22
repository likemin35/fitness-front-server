// components/inputs/RequiredFields.jsx
import { TextField, Grid, MenuItem } from "@mui/material";

export default function RequiredFields({ form, handleChange }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="연령대*"
          name="ageClass"
          value={form.ageClass}
          onChange={handleChange}
          select
        >
          <MenuItem value={20}>20대</MenuItem>
          <MenuItem value={30}>30대</MenuItem>
          <MenuItem value={40}>40대</MenuItem>
          <MenuItem value={50}>50대</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          label="성별*"
          name="testSex"
          value={form.testSex}
          onChange={handleChange}
          select
        >
          <MenuItem value="M">남성</MenuItem>
          <MenuItem value="F">여성</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          label="키(cm)*"
          name="itemF001"
          value={form.itemF001}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          label="몸무게(kg)*"
          name="itemF002"
          value={form.itemF002}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          label="체지방량*"
          name="itemF003"
          value={form.itemF003}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          label="BMI*"
          name="itemF007"
          value={form.itemF007}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}
