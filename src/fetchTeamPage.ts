import axios from "axios";

export async function fetchTeamPage(): Promise<string> {
    const url = new URL('https://mufa.org/League/Division/Team.aspx?t=5634&d=447')
    const response = await axios.get(url.toString())
    return response.data
}