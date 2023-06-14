import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group, Title } from "@mantine/core";
import React, { useEffect } from "react";
export function Model() {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    open(); // Open the model when the component mounts
  }, []); // Empty dependency array to run the effect only once

  return (
    <Modal
      opened={opened}
       onClose={close}
      withCloseButton={true}
    >
      {/* Modal content */}
      {console.log("sjids")}
      <Title>Are You Sure You Want to Delete Selected item?</Title>
    </Modal>
  );
}
