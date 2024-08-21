import { FormattedMessage } from "react-intl";

import { FlexContainer } from "components/ui/Flex";
import { Heading } from "components/ui/Heading";

export const WorkspaceUsagePage: React.FC = () => {
  return (
    <FlexContainer direction="column" gap="xl">
      <Heading as="h1">
        <FormattedMessage id="settings.workspace.usage.title" />
      </Heading>
    </FlexContainer>
  );
};