import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Group,
  Text,
  Title,
  Button,
  Paper,
  ActionIcon,
  SimpleGrid,
} from "@mantine/core";
import { IconFileText } from "@tabler/icons-react";
import { tenders } from "../redux/action/tender.action";
import "../assets/MyBackground.css";
export function TenderList() {
      const dispatch = useDispatch();
       const tender = useSelector((state) => state.tender);
       console.log(tender,"tender")
       useEffect(() => {
           dispatch(tenders())
       }, [dispatch])
  return (
    <div>
      <Group>
        <Title fz="2.5rem" mt="3rem" ml="40%" className="gradiant" fw="30em">
          Tender Details
        </Title>
      </Group>
      <Group>
        {tender?.tender?.data?.map((e, id) => (
          <Paper
            key={id}
            shadow="sm"
            radius="md"
            p="sm"
            //style={{ backgroundColor: "#F1F3F5" }}
            mt="2em"
            w="90%"
            ml="5rem"
          >
            <Text align="left" mt="1rem" fz="1.3rem" className="gradianttext">
              {e?.industry} {e?.city}, {e?.state}
            </Text>
            <Text align="left" mt="1.3rem" w="100%">
              {e?.description}
            </Text>
            {e?.address && (
              <Text align="left" mt="1rem" fw="500">
                Address: {e?.address}
              </Text>
            )}
            {e?.email && (
              <Text align="left" fw="500">
                Email:{e?.email}
              </Text>
            )}

            <SimpleGrid cols={2} mt="1rem">
              <div>
                <ActionIcon>
                  <a href={e?.file} rel="noreferrer" target="_blank">
                    <IconFileText
                      size="2rem"
                      stroke={1.5}
                      color="#0c4f698e"
                      //   onClick={() => handleButtonClick(data._id)}
                    />
                  </a>
                </ActionIcon>
              </div>
              <div>
                <Text fw="500">Posted On: "24 april 2023"</Text>
              </div>
            </SimpleGrid>
          </Paper>
        ))}
      </Group>
    </div>
  );
}
