                                                                                                import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Group,
  ScrollArea,
  Button,
  Paper,
  TextInput,
  Select,
  MultiSelect,
  Grid
} from "@mantine/core";
import { useForm,isNotEmpty } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import {
  addTask,
  getOneTask,
  updateTask,
} from "../redux/action/task.action";
import { employee } from "../redux/action/employee.action.js";
import { notifications } from "@mantine/notifications";
import { client } from "../redux/action/client.action";

export function AddEditTask(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const task = useSelector((state) => state.task);

  const user = useSelector((state) => state.employeeData);
  

   const clients = useSelector((state) => state.clientData);
   
  useEffect(() => {
    dispatch(employee());
  }, [dispatch]);
  useEffect(()=>{
    dispatch(client())
  },[dispatch])
  const [mode, setMode] = useState("add");
const form = useForm({
  initialValues: {
    name: "",
    user_id: [],
    task_status: "",
    client_id: "",
  },
  validate: {
  
    user_id: isNotEmpty("Select User"),
    client_id: isNotEmpty("Select Client"),
    //   value.length < 3 ? "Password must have at least 3 letters" : null,
  },
});
  // const [formData, setFormData] = useState({
  //   name: "",
  //   user_id: [],
  //   task_status: "",
  //   client_id: ""
  // });

  useEffect(() => {
    if (id) {
      setMode("edit");
      dispatch(getOneTask(id));
    }
  }, []);
  
  useEffect(() => {
    if (task && mode === "edit"){
   
      const userIDs =
        task?.task?.data?.[0]?.user?.map((user) => user?._id) || [];
      form.setValues({
        name: task?.task?.data?.[0]?.name || "",
        user_id: userIDs || "",
        client_id: task?.task?.data?.[0]?.client?.[0]?._id || "",
        task_status: task?.task?.data?.[0]?.task_status || "",
      });
    }
  }, [task, mode]);


  const onSubmit = async (values) => {
    //e.preventDefault();

    if (mode === "add") {
      dispatch(addTask(values)).then(() => {
        form.reset();
        navigate("/home/task");
      });;

    }
    else {
      await dispatch(updateTask(id, values)).then(() => {
        form.reset();
        navigate("/home/task");
      });;
    }
  };
  if (user?.employees?.data) {
    var data = user?.employees?.data?.map((data) => ({
      label: data?.name,
      value: data?._id,
    }));
  } else {
    data = []        
  }
 //console.log(data)
  if (clients?.clients?.data) {
    var clientdata = clients?.clients?.data?.map((data) => ({
      label: data?.name,
      value: data?._id,
    }));
  } else {
    clientdata = [];
  }

  const handleSelectChange = (selectedOption) => {
      form.setValues({ ...form.values, user_id: selectedOption });
  };
   const handleSelectClient = (selectedOption) => {
    form.setValues({ ...form.values, client_id: selectedOption });
   };
  return (
    <div>
      {/* <Group>
        <h2 align="left" fw="md" fz="xs"></h2>
      </Group>  */}

      <ScrollArea>
        {" "}
        <Paper
          shadow="sm"
          radius="md"
          p="sm"
          mt="6em"
          ml="15em"
          w="50%"
          style={{ backgroundColor: "#F1F3F5" }}
        >
          <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
            <h3 align="left" fw="md" fz="xs">
              {mode === "edit" ? "Task Edit" : "Task Add"}
            </h3>
            <TextInput
              label="Name"
              mt="sm"
              placeholder="Enter Name"
              required
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              w="100%"
              value={form.values.name}
              onChange={(e) =>
                form.setValues({ ...form.values, name: e.target.value })
              }
            />
            <Select
              placeholder="Pick"
              label="Client"
              data={clientdata}
              value={form.values.client_id}
              onChange={handleSelectClient}
              nothingFound="No options"
              w="100%"
              color="#DEE2E6"
              mt="sm"
              labelProps={{ display: "flex" }}
              required
              dropdownPosition="bottom"
              {...form.getInputProps("client_id")}
            />

            <MultiSelect
              label="User"
              placeholder="Pick"
              searchable
              nothingFound="No options"
              data={data}
              onChange={handleSelectChange}
              value={form.values.user_id}
              w="100%"
              color="#DEE2E6"
              mt="sm"
              labelProps={{ display: "flex" }}
              required
              dropdownPosition="bottom"
              {...form.getInputProps("user_id")}
            />
            <TextInput
              label="Task Status"
              mt="sm"
              placeholder="Enter Task Status"
              required
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              w="100%"
              value={form.values.task_status}
              onChange={(e) =>
                form.setValues({ ...form.values, task_status: e.target.value })
              }
            />
            <Grid>
              <Grid.Col span={6}>
                {" "}
                <Button
                  align="right"
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                  fullWidth
                  mt="xl"
                  w="40%"
                  radius="md"
                  type="submit"
                  ml={150}
                  onClick={() => navigate("/home/task")}
                >
                  {" "}
                  Back
                </Button>{" "}
              </Grid.Col>
              <Grid.Col span={6}>
                {" "}
                <Button
                  align="right"
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                  fullWidth
                  mt="xl"
                  w="40%"
                  radius="md"
                  type="submit"
                >
                  {mode === "add" ? "Add" : "Update"}
                </Button>
              </Grid.Col>
            </Grid>
          
          </form>
        </Paper>
      </ScrollArea>
    </div>
  );
}


