import * as cheerio from 'cheerio';
import {format, parse} from 'date-fns';

export interface GameInfo {
    startTime: Date;
    jerseyColor: string;
    fieldName: string;
    fieldMapUrl: string;
    opponentName: string;
    opponentColor: string;
}

const START_TIME_COLUMN = 3;
const JERSEY_COLOR_COLUMN = 4;
const FIELD_NAME_COLUMN = 5;
const OPPONENT_NAME_COLUMN = 9;
const OPPONENT_COLOR_COLUMN = 11;

const DATE_FORMAT = 'M/d/yyyy h:mm a';

export function parseEvents(html: string): GameInfo[] {
    const $ = cheerio.load(html);
    const $gameRows = $('table.rgMasterTable tbody tr');
    const result: GameInfo[] = [];
    $gameRows.each((index, element) => {
        const $columns = $(element).find('td');
        const start = $columns.eq(START_TIME_COLUMN).text().trim().replace(/\s+/g, ' ').trim();
        const startTime = parse(start, DATE_FORMAT, new Date());
        const jerseyColor = $columns.eq(JERSEY_COLOR_COLUMN).text().trim();
        const fieldName = parseFieldName($columns.eq(FIELD_NAME_COLUMN).text());
        const fieldMapUrl = $columns.eq(FIELD_NAME_COLUMN).find('a[href*="maps"]').attr('href') ?? '';
        const opponentName = $columns.eq(OPPONENT_NAME_COLUMN).text().trim();
        const opponentColor = $columns.eq(OPPONENT_COLOR_COLUMN).text().trim();
        result.push({ startTime, jerseyColor, fieldName, fieldMapUrl, opponentName, opponentColor });
    });
    return result;
}

function parseFieldName(fieldName: string): string {
    const match = fieldName.match(/^([^(]+)/);
    return match ? match[0].trim() : fieldName.trim();
}