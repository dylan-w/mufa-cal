# mufa-cal personal project

## Goal

Parse my Ultimate Frisbee team schedule from the league website and add games to an iCal that I can import into Google Calendar.

## Approach

The project will be a simple AWS Lambda function written NodeJS. The Lambda will run on a weekly trigger, parse the webpage, and add events to an iCal that is publicly hosted in S3.

## Tech Stack

- AWS Lambda
- AWS S3
- NodeJS
- Typescript
- Serverless