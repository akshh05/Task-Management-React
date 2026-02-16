import { SegmentGroup } from "@chakra-ui/react"


export const Segmented = () => {
  return (
    <SegmentGroup.Root defaultValue="React">
      <SegmentGroup.Indicator />
      <SegmentGroup.Items items={["React", "Vue", "Solid"]} />
    </SegmentGroup.Root>
  )
};
