import { Stack, ThemeProvider } from "@mui/material";
import { theme } from "./../lib/Mui/theme";
import "./App.css";
import RightSide from "./components/RightSide/Index";
import Nav from "./components/Nav/Index";
import Aside from "./components/Aside/Index";
import Feed from "./components/Feed/Index";
import AppDialog from "./components/Dialog/Index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppDialog />
      <Nav />
      <Stack direction="row" justifyContent="space-between">
        <Aside />
        <Feed />
        <RightSide />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
