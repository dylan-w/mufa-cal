import { ScheduledEvent } from "aws-lambda";

export const handler = async (event: ScheduledEvent): Promise<void> => {
  console.log(`My cron lambda function ran at ${new Date()}`);
}