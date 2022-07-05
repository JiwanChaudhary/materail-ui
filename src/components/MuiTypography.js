import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    // 13 different variations of typography
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      {/* component specifies the tag for topography gutterBottom adds the margin bottom of 0.35em */}
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub Title 1</Typography>
      <Typography variant="subtitle2">Sub Title 2</Typography>

      {/* if we don't declare variant for typography then it takes default body1 variant */}
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quaerat,
        accusantium distinctio, a consequatur at blanditiis porro enim cum
        nostrum fuga, rem deleniti tenetur quam non. Quaerat cum nobis delectus?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos
        dolore, aspernatur eum quas, neque reiciendis omnis ratione esse quasi
        quibusdam at veniam! Animi id cum odit illum eaque dolores.
      </Typography>
    </div>
  );
};
