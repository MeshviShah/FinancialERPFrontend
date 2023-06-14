import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  useMantineTheme,
  Button,
  Paper,
  TextInput,
  Grid,
  Title,
  Checkbox,
} from "@mantine/core";
import {
  IconSearch,
  IconArrowRight,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";

import { useDisclosure } from "@mantine/hooks";
import { deleteEmployee, employee } from "../redux/action/employee.action.js";
import { roles } from "../redux/action/role.action.js";
import { queryBuilder } from "../utils/QueryBuilder.js";
export function EmployeeTable() {
  const [searchobj, setSearchobj] = useState({});
  const [selection, setSelection] = useState([]);
  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.employeeData);
   const [isModelOpen, setIsModelOpen] = useState(false);
  const searchInputRef = useRef(null);
const role = localStorage.getItem("role");
 const [opened, { open, close }] = useDisclosure(false);
  useEffect(() => {
    const query = queryBuilder(searchobj);
    dispatch(employee(query));
  }, [dispatch, searchobj]);

  const handleButtonClick = (id) => {
    if (id) navigate("/home/addemployee/" + id);
    else navigate("/home/addemployee");
  };
  const handleDelete = async () => {
 
    selection && dispatch(deleteEmployee(selection));
    // id && dispatch(deleteEmployee([id]));
    window.location.reload();
  };
  
  const handleDeleteAll = async (id) => {
    setIsModelOpen(true); 
    if(id) 
    {
      setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
    }
    // selection && dispatch(deleteEmployee(selection));
    // window.location.reload();
   
  };
   
    const handleClose = () => {
      setIsModelOpen(false); // Close the model
    };
  
  const emp = user.employees;
  if (user && user.employees && user.employees.data) {
    var row = emp.data.map((data) => (
      <tr key={data._id}>
      {
        role==="admin" &&
         <td>
            <Checkbox
              checked={selection.includes(data._id)}
              onChange={() => toggleRow(data._id)}
              transitionDuration={0}
            />
          </td>
      }
         
        

        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            {/* <Text fz="sm" fw={500}>
              {data?.name}
            </Text> */}
            <Avatar
              component="a"
              href={data?.profile_image}
              target="_blank"
              src={data?.profile_image}
              alt="it's me"
              size={40}
              radius={30}
            />
          </Group>
        </td>

        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}

            <Text fz="sm" fw={500} c="dimmed">
              {data?.name}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
            <Text fz="sm" fw={500} c="dimmed">
              {data?.email}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
            <Text fz="sm" fw={500} c="dimmed">
              {data?.phone}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
            <Text fz="sm" fw={500} c="dimmed">
              {data?.role[0]?.name}
            </Text>
          </Group>
        </td>
        <td>
          {role === "admin" && (
            <Group spacing={0} position="right">
              <ActionIcon>
                <IconPencil
                  size="1rem"
                  stroke={1.5}
                  id={data._id}
                  onClick={() => handleButtonClick(data._id)}
                />
              </ActionIcon>
          
              <ActionIcon color="red">
                <IconTrash
                  size="1rem"
                  stroke={1.5}
                  onClick={() => {
                    handleDeleteAll(data._id);
                  }}
                />
              </ActionIcon>
            </Group>
          )}
        </td>
      </tr>
    ));
  }

  return (
    <div>
      <Group>
        <h2 align="left" fw="md" fz="xs">
          User List
        </h2>

        <Group justify="end">
          {" "}
          {role === "admin" && (
            <Button
              align="right"
              variant="gradient"
              w="10rem"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
              ml="70em"
              onClick={() => handleButtonClick()}
            >
              ADD USER
            </Button>
          )}
        </Group>
      </Group>
      <ScrollArea>
        {" "}
        <Paper shadow="sm" radius="md" p="sm" mt="sm">
          <Grid grow gutter="xl">
            {" "}
            <Grid.Col span={6}>
              <h3 align="left" fw="md" fz="xs">
                User
              </h3>
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                icon={<IconSearch size="1.1rem" stroke={1.5} />}
                radius="xl"
                size="md"
                mt={15}
                type="text"
                w="70%"
                ml={100}
                ref={searchInputRef}
                rightSection={
                  <ActionIcon
                    size={32}
                    radius="xl"
                    color={theme.primaryColor}
                    variant="filled"
                  >
                    <IconArrowRight
                      size="1.1rem"
                      stroke={1.5}
                      onClick={(e) =>
                        setSearchobj({
                          ...searchobj,
                          search: searchInputRef.current.value,
                        })
                      }
                    />
                  </ActionIcon>
                }
                placeholder="Search User"
                rightSectionWidth={50}
              />
            </Grid.Col>
          </Grid>

          <Table
            sx={{ minWidth: 1000 }}
            verticalSpacing="xs"
            highlightOnHover
            striped
          >
            <thead>
              <tr>
                {role === "admin" && selection.length >= 1 ? (
                  <th>
                    <ActionIcon color="black">
                      <IconTrash
                        size="1.5rem"
                        stroke={1.5}
                        onClick={() => {
                          handleDeleteAll();
                        }}
                      />
                    </ActionIcon>
                  </th>
                ) : (
                  <th></th>
                )}
               
                {isModelOpen && (
                  <Modal
                    opened={open}
                    onClose={close}
                    title="Confirmation"
                    size="sm"
                    withCloseButton={false}
                  >
                    <Text
                      size="lg"
                      weight={500}
                      style={{ marginBottom: "20px" }}
                    >
                      Are you sure you want to delete this item?
                    </Text>

                    <Button onClick={handleDelete} color="red">
                      Delete
                    </Button>
                    <Button
                      onClick={handleClose}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </Button>
                  </Modal>
                )}
                <th>profile Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>

                <th />
              </tr>
            </thead>
            <tbody>
              {user.status === 404 ? (
                <tr>
                  <td>No data</td>
                </tr>
              ) : (
                row
              )}
            </tbody>
          </Table>
        </Paper>
      </ScrollArea>
    </div>
  );
}
