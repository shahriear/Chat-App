/**
 * Format a timestamp to a relative time (e.g., "2 hours ago")
 * @param {number} timestamp - The timestamp in milliseconds
 * @returns {string} - Formatted relative time
 */
export function formatDistanceToNow(timestamp) {
  const now = new Date().getTime();
  const diff = now - timestamp;

  // Convert to seconds
  const seconds = Math.floor(diff / 1000);

  if (seconds < 60) {
    return 'just now';
  }

  // Convert to minutes
  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  // Convert to hours
  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours}h ago`;
  }

  // Convert to days
  const days = Math.floor(hours / 24);

  if (days < 7) {
    return `${days}d ago`;
  }

  // Format to date
  const date = new Date(timestamp);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

/**
 * Format a timestamp to time (e.g., "14:30")
 * @param {number} timestamp - The timestamp in milliseconds
 * @returns {string} - Formatted time
 */
export function formatTime(timestamp) {
  const date = new Date(timestamp);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // convert 0 to 12

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${formattedMinutes} ${ampm}`;
}
