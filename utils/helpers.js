module.exports = {
    Form_date: (date) => {
        const day = new Date(date);
        const formatDate = `${day.getMonth() +1}/${day.getDate()}/${day.getFullYear()}`;
        const hours = day.getHours().toString().padStart(2, '0');
        const minutes = day.getMinutes().toString().padStart(2, '0');
        const formatTime = `${hours}:${minutes}`;

        return `${formatDate} at ${formatTime}`;
    },
};