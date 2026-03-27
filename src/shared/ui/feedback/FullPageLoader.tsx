import { Card, Wrapper } from '@/shared/ui/feedback/FullPageLoader.styles'

export const FullPageLoader = ({ label }: { label: string }) => (
  <Wrapper>
    <Card>{label}</Card>
  </Wrapper>
)
