import { useState } from "react";
import { AppShell, Navbar, Text, useMantineTheme } from "@mantine/core";
import { NavbarCom } from "../components/Navbar";
import { StatsRingCard, TaskCard } from "../components/Card";
import { ClientTable } from "../components/ClientTable";
import { Outlet } from "react-router-dom";

export function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  // console.log("homeRender")
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbar={
        // <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
        <NavbarCom />
        // </Navbar>
      }

     
    >
      {/* <Text>Resize app to see responsive navbar in action</Text> */}
      
      <Outlet />
    </AppShell>
  );
}
