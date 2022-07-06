import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MuiButton = () => {
  return (
    // Spacing le space dinxa junma number lekhna parxa ani direction dina parxa kata tira space dine ho vanera for example row ki column
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        {/* The button components has three varaints */}
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      {/* Ripple and Elevation default property hunxa button ma jaslai disableRipple and disableElevation vanera disable garna sakinxa */}
      {/* Ripple effect vaneko button ma click garda button ghumxa like white color ko button vitra ghumxa */}
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("Clicked!")}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="primary" size="small">
          <SendIcon />
        </IconButton>
        <IconButton aria-label="send" color="secondary" size="large">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          size="small"
          orientation="vertical"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left Button Clicked!")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
