//Base URL
const api_url = 'https://api.rawg.io/api/';

//get the current month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`
    } else {
        return month; 
    }
}

//get current day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`
    } else {
        return day; 
    }
}

//get current year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;

const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=20`;

const newGames = `games?dates=${lastYear},${currentDate}&ordering='-released&page_size=20`;

export const popularGamesURL = () => {
    return `${api_url}${popular_games}`
}

export const upcomingGamesURL = () => {
    return `${api_url}${upcomingGames}`
}

export const newGamesURL = () => {
    return `${api_url}${newGames}`
}

export const getDetailsURL = (game_id) => {
    return `${api_url}games/${game_id}`
}

export const screenshotsURL = (game_id) => {
    return `${api_url}games/${game_id}/screenshots`
}





