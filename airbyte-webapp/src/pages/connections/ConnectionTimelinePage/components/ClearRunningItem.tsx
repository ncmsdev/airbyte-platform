import { FormattedMessage } from "react-intl";

import { Box } from "components/ui/Box";
import { Text } from "components/ui/Text";

import { ResetStreamsDetails } from "area/connection/components/JobHistoryItem/ResetStreamDetails";
import { useLocalStorage } from "core/utils/useLocalStorage";

import { ConnectionTimelineEventActions } from "../ConnectionTimelineEventActions";
import { ConnectionTimelineEventIcon } from "../ConnectionTimelineEventIcon";
import { ConnectionTimelineEventItem } from "../ConnectionTimelineEventItem";
import { ConnectionTimelineEventSummary } from "../ConnectionTimelineEventSummary";

interface ClearRunningItemProps {
  jobId: number;
  streams: string[];
  startedAt: number;
}

export const ClearRunningItem: React.FC<ClearRunningItemProps> = ({ jobId, streams, startedAt }) => {
  const [showExtendedStats] = useLocalStorage("airbyte_extended-attempts-stats", false);

  return (
    <ConnectionTimelineEventItem>
      <ConnectionTimelineEventIcon icon="cross" running />
      <ConnectionTimelineEventSummary>
        <Text bold>
          <FormattedMessage id="connection.timeline.clear_running" values={{ count: streams.length }} />
        </Text>

        <Box pt="xs">{streams.length > 0 && <ResetStreamsDetails names={streams} />}</Box>
        {showExtendedStats && (
          <Text as="span" color="grey400" size="sm">
            <FormattedMessage id="jobs.jobId" values={{ id: jobId }} />
          </Text>
        )}
      </ConnectionTimelineEventSummary>
      <ConnectionTimelineEventActions createdAt={startedAt} jobId={jobId} />
    </ConnectionTimelineEventItem>
  );
};
