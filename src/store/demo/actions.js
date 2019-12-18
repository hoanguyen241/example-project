export const getNews = () => ({
    type: 'GET_NEWS',
});

export const changeMode = (status) => ({
    type: 'CHANGE_MODE',
    status: status
});