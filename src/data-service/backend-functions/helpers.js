export function formatDate(inputDate) {
    // Parse the original date string
    const originalDate = new Date(inputDate);

    // Define months in short format
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Format the date in "Mon Day, Year" format
    const formattedDate = `${
      months[originalDate.getMonth()]
    } ${originalDate.getDate()}, ${originalDate.getFullYear()}`;

    return formattedDate;
  }