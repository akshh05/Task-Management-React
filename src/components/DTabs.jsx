import { Tabs, Flex } from "@chakra-ui/react"
import Dashboard from "./Dashboard"
import Tasks from "./Tasks"

function DTabs() {
  return (
    <Tabs.Root defaultValue="dashboard">
      <Flex as={Tabs.List} gap="6">
        <Tabs.Trigger value="dashboard">Dashboard</Tabs.Trigger>
        <Tabs.Trigger value="tasks">Tasks</Tabs.Trigger>
      </Flex>

      <Tabs.Content value="dashboard">
        <Dashboard />
      </Tabs.Content>

      <Tabs.Content value="tasks">
        <Tasks />
      </Tabs.Content>
    </Tabs.Root>
  )
}

export default DTabs
