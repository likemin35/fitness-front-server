// components/inputs/OptionalFieldRow.jsx
import { TextField, IconButton, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function OptionalFieldRow({ field, index, handleOptionalChange, removeField }) {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={10}>
        <TextField
          fullWidth
          label={`${field.label}`}
          name={field.name}
          value={field.value}
          onChange={(e) => handleOptionalChange(index, e.target.value)}
        />
      </Grid>

      <Grid item xs={2}>
        <IconButton onClick={() => removeField(index)}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
