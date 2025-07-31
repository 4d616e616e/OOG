export const formatDatePostPage = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;
  return `${month} ${day}`;
};

export function formatDate(dateString) {
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
  const date = new Date(dateString);

  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  return ` ${day} ${month}, ${year}`;
}




export const formatDatePostPage2 = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate().toString().padStart(2, "0"); // Ensure day has two digits
  const year = date.getFullYear(); // Get the full year
  return `${month} ${day} ${year}`; // Return in the desired format
};

export const formatDateForPostPage = (createdTime, isoString) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const date = new Date(isoString);
  const formattedDate = date.toLocaleDateString("en-GB", options);

  const createdAt = new Date(createdTime);
  const createdFormattedDate = createdAt.toLocaleDateString("en-GB", options);

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const isPM = hours >= 12;
  hours = hours % 12 || 12;

  const formattedTime = `${hours}:${minutes} ${isPM ? "PM" : "AM"} IST`;

  return `${createdFormattedDate}, (अपडेटेड ${formattedDate}, ${formattedTime})`;
};
export const convertUtcToIst = (utcTimestampString)=> {
  const date = new Date(utcTimestampString);

  // Options for formatting to IST with the timezone offset
  // 'Asia/Kolkata' is the IANA timezone identifier for IST
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23', // Use 24-hour format
    timeZone: 'Asia/Kolkata',
    timeZoneName: 'shortOffset', // This will give you "+05:30"
    fractionalSecondDigits: 3 // To include milliseconds
  };

  // Create a formatter
  const formatter = new Intl.DateTimeFormat('en-CA', options); // 'en-CA' for YYYY-MM-DD format

  // Format the date
  const parts = formatter.formatToParts(date);

  // Manually reconstruct the string into the desired ISO-like format
  const year = parts.find(p => p.type === 'year').value;
  const month = parts.find(p => p.type === 'month').value;
  const day = parts.find(p => p.type === 'day').value;
  const hour = parts.find(p => p.type === 'hour').value;
  const minute = parts.find(p => p.type === 'minute').value;
  const second = parts.find(p => p.type === 'second').value;
  const fractionalSecond = parts.find(p => p.type === 'fractionalSecond').value;
  const timeZoneOffset = parts.find(p => p.type === 'timeZoneName').value;

  // Pad single digits with leading zero if necessary (e.g., 9 becomes 09)
  const pad = (num) => String(num).padStart(2, '0');

  return `${year}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}:${pad(second)}.${fractionalSecond}${timeZoneOffset}`;
}
export const convertToIST = (utcDateStr) => {
  // Parse the UTC date string into a Date object
  const utcDate = new Date(utcDateStr);

  // Calculate the time in IST by adding 5 hours and 30 minutes
  const istOffsetMinutes = 5 * 60 + 30; // Total offset in minutes
  const istDate = new Date(utcDate.getTime() + istOffsetMinutes * 60 * 1000);

  // Format the date and time components
  const year = istDate.getUTCFullYear();
  const month = String(istDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(istDate.getUTCDate()).padStart(2, '0');
  const hours = String(istDate.getUTCHours()).padStart(2, '0');
  const minutes = String(istDate.getUTCMinutes()).padStart(2, '0');
  const seconds = String(istDate.getUTCSeconds()).padStart(2, '0');

  // Construct the final string in ISO 8601 format with the +05:30 offset
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
};
export const slugify = (text) => {
if(text){
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") 
    .replace(/[^\w-]+/g, "") 
    .replace(/--+/g, "-"); 
}
};


